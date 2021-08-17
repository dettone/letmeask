import { useState } from "react";

export function Button () {

const [count, setCount] = useState(0);
    
function increment() {
    setCount(count + 1);
    console.log(count);
}

return ( 
<button onClick={increment}> {count} </button>  
 )
 
}