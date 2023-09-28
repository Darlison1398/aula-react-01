function Titulo({cor}) {


    {/** eu poderia estar trazendo os dados de uma api e cinsumindo eles aqui nessa
         parte do código. Também eu poderia usar isso para atributos.
     */}

    let nome = "Darlison Silva";
    const soma = 10 + 20;
    const urlImg = "https://th.bing.com/th/id/OIP.nPvmZy1EY0rP8tTPqAMBBQHaIR?pid=ImgDet&rs=1";

    return (
        <div>
            <h1>Oi, meu nome é {nome}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Quidem dolorem cupiditate doloremque? Reiciendis impedit 
                 facilis dolorem sint sapiente possimus quibusdam temporibus 
                 expedita sunt magni. Ipsum nulla architecto voluptatibus
                  commodi totam!
            </p>

            <h4>Resultado é {soma}</h4>

            <h3 style={{color:cor}}>Incorporando css com jsx</h3>

            <img width={150} src={urlImg} />
        </div>
    )
}

export default Titulo;