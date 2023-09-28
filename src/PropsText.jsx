function PropsText({nome, paragrafo, cor}) {
    return (
        <div>
            <h1>Olá, eu sou {nome}</h1>
            { paragrafo ?
              <p>Parágrafo da props text</p>
              :
              <p>Nada</p>
            }
            <h1>Olá, eu sou {nome ? nome : "Fulano"}</h1>

            <h3 style={{color:cor}} >Utilizando a props para estilizar essa linha. Usando ela junto com css</h3>
        </div>
    )
}

export default PropsText;


{/*  Usando as props, podemos passar quase qualquer coisa, tais como objetos, funções
     arrays, etc. Ele á apenas para ser lido.

     -- No segundo h1, estamos fazendo uma validação. Se o nome existir, vai ser retornado
     o nome, senão, vai ser retornado o "Fulano" ou outro valor que a gente passar. É
      seemlhante ao if/else
 */}