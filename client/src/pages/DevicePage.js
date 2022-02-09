import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from "../assets/BigStar.png"
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../http/deviceApi";
import {REACT_APP_API_URL} from "../http";


const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [id])

    return <Container>
        <Row className='m-3'>
            <Col md={4}><Image width={300} height={320} src={REACT_APP_API_URL + device.img}/></Col>
            <Col md={4}>
                <Row className={'d-flex  flex-column align-items-center'}>

                    <h3>{device.name}</h3>
                    <div className="d-flex justify-content-center align-items-center"
                         style={{
                             background: `url(${bigStar}) no-repeat center center`,
                             width: 300,
                             height: 280, backgroundSize: 'cover', fontSize: 64
                         }}>{device.rating}</div>

                </Row>
            </Col>
            <Col md={4}>
                <Card style={{width: 400, height: 320}}
                      className=' d-flex flex-column justify-content-around align-items-center'>
                    <h3>От: {device.price} руб.</h3>
                    <Button variant={'outline-dark'}>Добавить в корзину</Button>
                </Card>
            </Col>
        </Row>
        <Row>
            <h2>Характеристики:</h2>
            {device.info.map(el => {
                return <div key={el.id} style={{
                    background: el.id % 2 === 0 ? 'lightgray' : '',
                    height: 35
                }}>{el.title}:{el.description}</div>
            })}
        </Row>
    </Container>
}
export default DevicePage