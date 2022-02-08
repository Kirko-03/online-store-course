import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from "../assets/BigStar.png"


const DevicePage = () => {
    const device = {
        "id": 1,
        "name": "12 pro",
        "price": 80000,
        "rating": 0,
        "img": 'https://m.ua/jpg_zoom1/2090047.jpg',
        "createdAt": "2022-02-06T08:14:02.497Z",
        "updatedAt": "2022-02-06T08:14:02.497Z",
        "typeId": 2,
        "brandId": 2
    }
    const info = [
        {
            "id": 1,
            "title": "Оперативная память",
            "description": "5гб",

        },
        {
            "id": 2,
            "title": "Камера",
            "description": "12мп",

        },
        {
            "id": 3,
            "title": "Процессор",
            "description": "Pentium 3",

        }, {
            "id": 4,
            "title": "Кол-во ядер",
            "description": "4",

        },
    ]


    return <Container>
        <Row className='m-3'>
            <Col md={4}><Image width={300} height={320} src={device.img}/></Col>
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
            {info.map(el => {
                return <div key={el.id} style={{background:el.id%2===0?'lightgray':'',height:35}}>{el.title}:{el.description}</div>
            })}
        </Row>
    </Container>
}
export default DevicePage