import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';

import logo from '../../assets/logo.png';
import { AuthContext } from '../../contexts/auth';


export default function SinIn() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const { login, loadingAuth } = useContext(AuthContext);



  function handleSubmit(e) {
    e.preventDefault(); // para nao atualizar a pagina (comportamento do formulario form)
    if(login && password) {
      login(email, password);
    } else {
      alert('Opa opa opa, cade as creds?')
    }
  }

  return (
    <div className='container-center'>
      <div className='login'>
        <div className='login-area'>
          <img src={logo} alt="Logo Usuario" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input type="text" placeholder='email@email.com' value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <input type="password" placeholder='********' value={password} onChange={ (e) => setPassword(e.target.value)}/>
          <button type='submit'>{loadingAuth ? 'Carregando...' : 'Acessar'}</button>
        </form>

        <Link to='/register'>Criar uma conta</Link>
      </div>
    </div>
  );
}
