import { useState } from 'react';
import Perfil from "./components/Perfil";
import ReposList from './components/Repos';
import './global.css'


function App() {
  //const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('');
  
  return (
    <>
      <input type='text' className='git-pesquisa' placeholder='Digite o nome de usuário do GitHub' onBlur={(e) => setNomeUsuario(e.target.value)} />
      <button type='Button' className='git-pesquisa-button'>Pesquisar</button>
      {nomeUsuario.length > 4 && (
        <>
        <Perfil nomeUsuario={nomeUsuario}/>
        <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
    </>
  )
}

export default App
