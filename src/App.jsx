import { useState } from "react"
 
function App(){
 
  const [nome, setNome] = useState('Ronaldo')
 
  const Formulario = (props) => {
 
    return (
      <div>
         <input
         placeholder={props.sombra}
      ClassName="nome"
      onChange={(e)=>{(props.mensagem != null)? alert (pros.mensagem) : alert("TEXTO PADRÃO")}}
      name="nome"
      type="text" />
      <button
      onClick={()=>{alert(nome)}}
      className="botao">
        {(props.textoBotao != null ? props.textoBotao:"CLIQUE AQUI")}
      </button>
      </div>
    )
  }
 
  return (
     <div>
      <h3>Pizzaria 2C</h3>
     <Formulario   sombra="digite seu nome..." textoBotao="ENVIAR NOME" />
     <Formulario  sombra="Digite seu e-mail..." textoBotao="E-MAIL"/> 
     <Formulario  sombra="(11) 90000-0000" textoBotao="CELULAR"/>
     <Formulario  mensagem="Mensagem enviada pelo App"/>
     <Formulario />
     <Formulario />
     </div>
  );
}
 
export default App;
 