import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import TableData from './Table'

function Pro() {
    const page = useNavigate()
    const handleAdd = () => {
        page("/Add")

    }
    const handleHome = () => {
        page("/Home")

    }
    const handlePre = () => {
        page("/Pre")

    }
    const handleTest = () => {
        page("/Test")

    }
    return (
        <div>
            <div >
                <h1 className='header'><b>Project Management</b></h1>
            </div>
            <div>
                <div className="row prebg">
                    <div className="col ">
                        <Button onClick={handleAdd} className='distance'>ADD</Button>
                        <Button onClick={handleHome} className='distance'>Home</Button>
                        <Button onClick={handlePre} className='distance'>Pre</Button>
                        <Button onClick={handleTest} className='distance'>Test</Button>
                        <TableData envinorment="Pro" />
                        <hr />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pro;