import { useState} from "react"

function App(){

  const [nome,setNome]= useState('ronaldo')

  return(
    <div> 
      <h3>pizzaria 2C</h3>
      <input 
      className="nome"
      onChange={(e)=>{setNome(e.target.value)}}
      name="nome"
      type="text"/>
      <button 
      onClick={()=>{alert(nome)}}
      className="botao">
  CLIQUE AQUI
      </button>
    </div>
  )
}

export default App