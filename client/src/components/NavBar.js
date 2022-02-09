import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import {NavLink, useHistory} from 'react-router-dom'
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from '../utils/consts'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {useContext} from 'react'

export const NavBar = observer(() => {
    const history = useHistory()
    const {user} = useContext(Context)

    return <Navbar bg="dark" variant="dark">
        <Container>
            <NavLink to={SHOP_ROUTE} style={{color: 'white'}}>Monolith</NavLink>
            {user.isAuth ?
                <Nav className="ml-auto">
                    <Button variant='outline-light' onClick={()=>history.push(ADMIN_ROUTE)} style={{marginRight:'5px'}}>Админ панель</Button>
                    <Button variant='outline-light' onClick={() => history.push(LOGIN_ROUTE)}>Выйти</Button>
                </Nav> :
                <Nav className="ml-auto">
                    <Button variant='outline-light' onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                </Nav>}

        </Container>
    </Navbar>

})