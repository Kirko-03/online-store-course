import {Route ,Switch, Redirect } from 'react-router-dom'
import {authRoutes,publicRoutes} from '../routes'

export const  AppRouter = () => {
    const isAuth=true
    return (
      <Switch>
        {isAuth&&authRoutes.map(({path,Component})=>
            <Route keys={path} path={path} component={Component} exact/>
        )}
        {
           publicRoutes.map(({path,Component})=>
            <Route keys={path} path={path} component={Component} exact/>
        )} 
        <Redirect to={'/shop'}/>
      </Switch>
    );
  }