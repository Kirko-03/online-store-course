import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {SHOP_ROUTE} from '../utils/consts'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {useContext} from 'react'

export const NavBar = observer(() => {
    const {user} = useContext(Context)

    return <Navbar bg="dark" variant="dark">
        <Container>
            <NavLink to={SHOP_ROUTE} style={{color: 'white'}}>Monolith</NavLink>
            {user.isAuth ?
                <Nav className="ml-auto">
                    <Button variant='outline-light'>Админ панель</Button>
                    <Button variant='outline-light' onClick={() => user.setIsAuth(false)}>Войти</Button>
                </Nav> :
                <Nav className="ml-auto">
                    <Button variant='outline-light' onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                </Nav>}

        </Container>
    </Navbar>

})