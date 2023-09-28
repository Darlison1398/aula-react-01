import { useState } from "react"; 

function Estados({cor}) {

    const [texto, setTexto] = useState("Um título do estado inicial");
    const [inputText, setInputText] = useState("");

    function clicou() {
        setTexto(inputText);
    }

    return(
        <div>
            <h1 style={{color: cor}}>{texto}</h1>
            <button onClick={() => {setTexto("Mudei o texto ao apertar o botão")}}>Mudar</button>
            <br/>
            <input type="text" value={inputText} onChange={(e) =>{setInputText(e.target.value)}} />
            <button onClick={clicou}>Mudar</button>

        </div>
    )
}

export default Estados;

{/* O Estado/useState ,serve como memórias individuais que vamos adicionar/guardar 
   dados e informações que desejarmos.

    Dentro do estado, poderíamos ter objetos, array, String, booleanos, funções, etc.
    Também podemos ter vários Estados 
*/}