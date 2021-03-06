import {BrowserRouter} from 'react-router-dom'
import {NavBar} from './components/NavBar'
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userApi";
const { AppRouter } = require("./components/AppRouter");

const App = observer(()=> {
  const {user} = useContext(Context)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        check().then(()=>{
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(()=>setLoading(false))
    })

    return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
})

export default App;
