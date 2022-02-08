import {ListGroup} from 'react-bootstrap'

import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {useContext} from 'react'

export const TypeBar = observer(() => {
    const {device} = useContext(Context)

    return <ListGroup className='m-5'>
        {device.types.map(type => {
            return <ListGroup.Item style={{cursor: 'pointer'}} active={type.id === device.selectedType.id}
                                   onClick={() => device.setSelectedType(type)}
                                   key={type.id}>{type.name}</ListGroup.Item>
        })}
    </ListGroup>

})