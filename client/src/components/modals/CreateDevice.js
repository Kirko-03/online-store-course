import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {useContext, useState} from "react";


const CreateDevice = ({show,onHide}) =>{
    const {device} = useContext(Context)
    const [info,setInfo] = useState([])

    function addInfo(){
         setInfo([...info,{title:'',description:'',number:Date.now()}])
    }
    function removeInfo(number){
        setInfo(info.filter(el => el.number!==number))
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
                      Выберите тип
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                      {device.types.map(type=>
                      <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                      )}
                  </Dropdown.Menu>
              </Dropdown>
                <Dropdown className={'mt-2 mb-2'}>
                    <Dropdown.Toggle>
                        Выберите бранд
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand=>
                            <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control className="mt-3" placeholder="Введите название устройства" />
                <Form.Control className="mt-3" placeholder="Введите стоимость устройства" type='number' />
                <Form.Control className="mt-3" type={'file'} />
                <Button className='mt-2' onClick={()=>addInfo()}>Добавить свойство</Button>
                {
                    info.map(prop=>
                        <Row key={prop.number} className='mt-2'>
                            <Col md={4}>
                                <Form.Control placeholder={'Введите название свойства'} />
                            </Col>
                            <Col md={4}>
                                <Form.Control placeholder={'Введите описание свойства'} />
                            </Col>
                            <Col md={4}>
                                <Button onClick={()=>removeInfo(prop.number)} variant={'outline-danger'}>Удалить</Button>
                            </Col>
                        </Row>
                    )
                }
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
            <Button variant={'outline-success'} onClick={onHide}>Добавить</Button>
        </Modal.Footer>
    </Modal>
}
export default  CreateDevice