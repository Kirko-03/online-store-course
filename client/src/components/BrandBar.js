import {Card, Container, Row} from 'react-bootstrap'

import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {useContext} from 'react'

export const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return <Container>
        <Row className='d-flex m-5'>
            {device.brands.map(brand => {
                return <Card className='p-3 m-1' style={{textAlign:"center", cursor: 'pointer',width:100,height:60}}
                          border={brand.id === device.selectedBrand.id?'danger':''} onClick={()=>device.setSelectedBrand(brand)}   key={brand.id}>{brand.name}
                </Card>
            })}
        </Row>
    </Container>

})