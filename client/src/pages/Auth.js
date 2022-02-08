import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";


const Auth = () =>{
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
     return<Container className='d-flex justify-content-center align-items-center' style={{height:window.innerHeight-54}}>
            <Card style={{width:600}} className='p-5'>
                <h2>{isLogin?'Регистрация':'Авторизация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-2" placeholder={'Введите email...'}/>
                    <Form.Control className="mt-2" placeholder={'Введите пароль...'}/>
                    <Row className="mt-3 ">
                        {isLogin? <div>Есть аккаунт?<NavLink to={REGISTRATION_ROUTE} >Войдите!</NavLink></div>:<div>Нет аккаунта?<NavLink to={LOGIN_ROUTE} >Зарегистрируйся!</NavLink></div>}
                        <Button variant={"outline-success"} className="align-self-end mt-3 ">{isLogin?'Зарегистрироваться':'Войти'}</Button>
                    </Row>
                </Form>
            </Card>
     </Container>

 }
 export default Auth