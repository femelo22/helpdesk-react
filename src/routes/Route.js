import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';

//Componente que podemos validar nossas rotas
export default function Router({
  component: Component,
  isPrivate, // para fazer validacao na rota
  ...rest
}) {

  const { signed, loading } = useContext(AuthContext);

  if(loading) {
    return (
      <div>Carregando...</div>
    )
  }

  if(!signed && isPrivate) {
    return <Redirect to='/' />
  }

  if(signed && !isPrivate) {
    return <Redirect to='/dashboard' />
  }

  return <Route {...rest} render={(props) => <Component {...props}/>} />;
}
