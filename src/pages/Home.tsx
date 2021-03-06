import { useHistory } from 'react-router-dom';
import illustrationImg from '../assets/images//illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss';
import { Button } from '../components/Button';
import {useAuth} from '../hooks/useAuth';

export function Home(){

    const history = useHistory();

    const {user, sigInWithGoogle} = useAuth();
 

    async function handleCreateRoom (){
      if(!user){
          await sigInWithGoogle
      }
      history.push('/rooms/new')
    }


    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tira as duvidas da sua audiência em tempo real</p>
            </aside>
            <main > 
                {/* <h1>{value}</h1> */}
                <div className="main-content">

                <div>
                    <img src={logoImg} alt="Letmeask" />
                </div>
                <button onClick={handleCreateRoom} className="create-room">
                <img src={googleIconImg} alt="Logo do Google" />
                Crie sua sala com o Google
                </button>
                <div className="separator">ou entre em uma sala</div>
                <form>
                    <input type="text" 
                    placeholder="Digite o código da sala"
                    />
                    <Button type="submit">Entrar na sala</Button>
                </form>                             
                </div>
            </main>
        </div>
    )
}