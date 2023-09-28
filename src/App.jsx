import { BrowserRouter, Routes, Route } from "react-router-dom";

import Titulo from "./Titulo";
import PropsText from "./PropsText";
import Estados from "./Estados";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contatos";

function App() {
  return (
    <div>
      {/* componentes */}
      <Titulo cor={"red"}/>
      <PropsText nome = "Jozelia Silva" paragrafo={false}/>
      <PropsText cor={"purple"} />

      <br/>
      <br/>

      <Estados cor="blue" />
      <Estados cor="orange"/>
      <Estados cor="green"/>
      <Estados />

      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Rotas no react. React Router Dom</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/contato" element={<Contato/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;