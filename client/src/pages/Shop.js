import {Col, Container, Row} from "react-bootstrap";
import {TypeBar} from "../components/TypeBar";
import {BrandBar} from "../components/BrandBar";
import {DeviceList} from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceApi";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data=>device.setTypes(data))
        fetchBrands().then(data=>device.setBrands(data))
    })
    useEffect(()=>{
        fetchDevices(device.selectedType.id,device.selectedBrand.id,device.page,3).then(data=> {
                device.setDevices(data.rows)
                device.setTotalCount(data.count)
            }
        )
    },[device.selectedType.id,device.selectedBrand.id,device.page])
    return <Container>
        <Row>
            <Col md={3}>
                <TypeBar/>
            </Col>
            <Col md={9}>
                <BrandBar/>
                <DeviceList/>
                <Pages/>
            </Col>
        </Row>
    </Container>
})
export default Shop