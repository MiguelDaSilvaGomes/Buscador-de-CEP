import { useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import './style.css';
import api from './Arquivos/api'
function App() {
  const [input, setInput]=useState('');
  const [cep, setCep] = useState({});

  async function Clicado(){
    if(input === ''){
         alert("preencha algum cep")
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      console.log(response);
    }catch{
       alert("Invalido Cep");
    }
  }
  return (
    <div className="container">
      <h1 className="titulo">Buscador de CEP</h1>
      <div className="containerInput">
          <input type="text" placeholder="Digite seu CEP..." onChange={(e)=>setInput(e.target.value)}/>
          <button className="buttonSearch" onClick={Clicado}>
           <FiSearch size={25} color='#FFF'/>
      </button>
      </div> 
      {Object.keys(cep).length > 0 && (
      <main className='main'>
      <h2>Cep: {cep.cep}</h2>

      <span>{cep.logradouro}</span>
      <span>Complemento: {cep.complemento}</span>
      <span>Bairro: {cep.bairro}</span>
      <span>{cep.localidade} - {cep.uf}</span>
    </main>
      )}
      <p>@mestridmid</p>
  </div>
  
  );
}

export default App;
