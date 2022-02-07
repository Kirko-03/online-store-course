import { useContext } from 'react';
import {Route ,Switch, Redirect } from 'react-router-dom'
import {authRoutes,publicRoutes} from '../routes'
import {Context} from '../index'

export const  AppRouter = () => {
    const {user} = useContext(Context)
    return (
      <Switch>
        {user.isAuth&&authRoutes.map(({path,Component})=>
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