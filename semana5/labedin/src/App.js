import React from "react"
import "./App.css"
import CardGrande from "./components/CardGrande/CardGrande"
import ImagemButton from "./components/ImagemButton/ImagemButton"
import CardPequeno from "./components/CardPequeno/CardPequeno"
import MinhaFoto from "./img/foto.png"
import ImagemEmail from "./img/email-xxl.png"
import ImagemEndereco from "./img/pin-8-xxl.png"


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={MinhaFoto}
          nome="Bruno Cardoso"
          descricao="Estou em um momento de busca interior, tornando como prioridades, novas oportunidades de trabalho com o que mais aprendi a amar, a tecnologia. "
        />

        <div className="page-section-container">
          <CardPequeno
            ImagemEmail={ImagemEmail}
            email="bruno.cards27@gmail.com"
            ImagemEndereco={ImagemEndereco}
            endereco="R Sgto. Leonardo de Castro Carvalho"
          />
        </div>

        <ImagemButton
          imagem="https://www.ije.g12.br/wp-content/uploads/2019/05/seta_baixo-cinza.gif"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQFpB8O_rQhUqA/company-logo_200_200/0?e=1605139200&v=beta&t=8R3TU3_yRdfjxf3DHfFexOAzO5Nj3YYkj_R79oKEQZk"
          nome="Summit Chase Consultoria em Seguros"
          descricao="Realizando operações em seguros de todos os ramos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://image.flaticon.com/icons/svg/174/174857.svg"
          texto="Linkedin"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/svg/733/733609.svg"
          texto="GitHub"
        />
      </div>
    </div>
  )
}

export default App
