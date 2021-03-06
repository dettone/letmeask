import  { Link }   from 'react-router-dom';
import illustrationImg from '../assets/images//illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

//import {TesteContext} from '../App';
//all imports is inside react

export function NewRoom(){
 const {user} = useAuth();
    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tira as duvidas da sua audiência em tempo real</p>
            </aside>
            <main > 
                <div className="main-content">
                <h1>{user?.name}</h1>
                <div>
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                </div>
              
                <form>
                    <input 
                    type="text" 
                    placeholder="Nome da sala"
                    />
                    <Button type="submit">
                        Criar Sala
                    </Button>
                </form>   
                <p>Quer entrar em uma sala existente <Link to="/">Clique Aqui</Link></p> 
              </div>
            </main>
        </div>
    )
}
