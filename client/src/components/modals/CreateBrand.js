import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {createBrand} from "../../http/deviceApi";


const CreateBrand = ({show,onHide}) =>{
    const [value,setValue] = useState('')

    const  addBrand=()=>{
        createBrand({name:value}).then(()=>setValue(''))
        onHide()
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
                Добавить бранд
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control value={value} onChange={(e)=>setValue(e.currentTarget.value)} placeholder={'Введите название бренда'}>

                </Form.Control>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
            <Button variant={'outline-success'} onClick={addBrand}>Добавить</Button>
        </Modal.Footer>
    </Modal>
}
export default  CreateBrand