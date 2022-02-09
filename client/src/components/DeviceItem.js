import {observer} from 'mobx-react-lite'
import star from '../assets/Vector.png'

import {Card, Col, Image} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
import {REACT_APP_API_URL} from "../http";

export const DeviceItem = observer(({device}) => {
    const history = useHistory()
    return <Col md={3} className={"mt-3"}>
        <Card style={{width:150,cursor:'pointer'}} border={"light"} onClick={()=>history.push(DEVICE_ROUTE+'/'+device.id)}>
            <Image width={150} height={150} src={REACT_APP_API_URL+device.img}/>
            <div className='d-flex justify-content-between'>
                <div className={'text-black-50'} >Samsung...</div>
                <div className='d-flex align-items-center'>
                    <div>{device.rating}</div>
                    <Image src={star}  width={15} height={15} />
                </div>
            </div>
            <div>{device.name}</div>
        </Card>
    </Col>

})