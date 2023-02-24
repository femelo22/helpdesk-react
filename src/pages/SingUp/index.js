import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

import logo from '../../assets/logo.png';


export default function SingUp() {

  const [ nome, setNome ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // para nao atualizar a pagina (comportamento do formulario form)
    alert('Tentou logar')
  }

  return (
    <div className='container-center'>
      <div className='login'>
        <div className='login-area'>
          <img src={logo} alt="Logo Usuario" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Cadastrar uma conta</h1>
          <input type="text" placeholder='Seu Nome' value={nome} onChange={ (e) => setNome(e.target.value)} />
          <input type="text" placeholder='email@email.com' value={email} onChange={ (e) => setEmail(e.target.value)} />
          <input type="password" placeholder='********' value={password} onChange={ (e) => setPassword(e.target.value)} />
          <button type='submit'>Cadastrar</button>
        </form>

        <Link to='/'>Já tem uma conta? Entre</Link>
      </div>
    </div>
  );
}
