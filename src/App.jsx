import './App.css'
import { Input } from './components/Input'

function App() {

  return (
    <>
    

     <h1>Conferir CEP</h1>

     <Input /> <br />

     <label htmlFor="cep">CEP</label>
     <input type="text" name="cep" id="cep"/> <br />
    
     <label htmlFor="logradouro">Logradouro</label>
     <input type="text" name='logradouro' id='logradouro' />
    </>
  )
}

export default App
