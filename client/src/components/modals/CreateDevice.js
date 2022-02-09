import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {useContext, useEffect, useState} from "react";
import {createDevice, fetchBrands, fetchTypes} from "../../http/deviceApi";
import {observer} from "mobx-react-lite";


const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [device])

    function addInfo() {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    function removeInfo(number) {
        setInfo(info.filter(el => el.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo((info.map(i => i.number === number ? {...i, [key]: value} : i)))
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        console.log(formData)
        createDevice(formData).then(() => onHide())

    }


    return <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Добавить устройство
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Dropdown>
                    <Dropdown.Toggle>
                        {device.selectedType.name || 'Выберите тип'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type =>
                            <Dropdown.Item onClick={() => device.setSelectedType(type)}
                                           key={type.id}>{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className={'mt-2 mb-2'}>
                    <Dropdown.Toggle>
                        {device.selectedBrand.name || 'Выберите бренд'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand =>
                            <Dropdown.Item onClick={() => device.setSelectedBrand(brand)}
                                           key={brand.id}>{brand.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control className="mt-3" value={name} placeholder="Введите название устройства"
                              onChange={e => setName(e.target.value)}/>
                <Form.Control className="mt-3" value={price} placeholder="Введите стоимость устройства" type='number'
                              onChange={e => setPrice(+e.target.value)}/>
                <Form.Control onChange={selectFile} className="mt-3" type={'file'}/>
                <Button className='mt-2' onClick={() => addInfo()}>Добавить свойство</Button>
                {
                    info.map(prop =>
                        <Row key={prop.number} className='mt-2'>
                            <Col md={4}>
                                <Form.Control
                                    value={prop.title} onChange={e => changeInfo('title', e.target.value, prop.number)}
                                    placeholder={'Введите название свойства'}/>
                            </Col>
                            <Col md={4}>
                                <Form.Control value={prop.description} placeholder={'Введите описание свойства'}
                                              onChange={e => changeInfo('description', e.target.value, prop.number)}/>
                            </Col>
                            <Col md={4}>
                                <Button onClick={() => removeInfo(prop.number)}
                                        variant={'outline-danger'}>Удалить</Button>
                            </Col>
                        </Row>
                    )
                }
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
            <Button variant={'outline-success'} onClick={addDevice}>Добавить</Button>
        </Modal.Footer>
    </Modal>
})
export default CreateDevice