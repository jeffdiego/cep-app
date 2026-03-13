import './App.css'
import { Input } from './components/Input'

function App() {

  const nome = 'Angelo'

  return (
    <>
      <h1>Conferir CEP - {nome}</h1>


      <Input 
        label="CEP" 
        name="cep" 
        id="cep" 
      /> 
      <br/>
      <Input
        label="Logradouro"
        name="logradouro"
        id="logradouro"
      />

      {/* <label htmlFor="cep">CEP</label>
      <input type="text" name="cep" id="cep" /> <br />

      <label htmlFor="logradouro">Logradouro</label>
      <input type="text" name="logradouro" id="logradouro" /> */}
    </>
  )
}

export default App