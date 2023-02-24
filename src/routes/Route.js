import { Route, Redirect } from 'react-router-dom';

//Componente que podemos validar nossas rotas
export default function Router({
  component: Component,
  isPrivate, // para fazer validacao na rota
  ...rest
}) {

  const loading = false;
  const signed = false;

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
