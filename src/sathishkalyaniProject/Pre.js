import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import "./Home.css"
import TableData from './Table'
function Pre() {
    const page = useNavigate()
    const handleAdd = () => {
        page("/Add")

    }
    const handleHome = () => {
        page("/Home")

    }
    const handlePro = () => {
        page("/Pro")

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
                        <Button onClick={handlePro} className='distance'>Pro</Button>
                        <Button onClick={handleTest} className='distance'>Test</Button>
                        <hr />
                        <TableData envinorment="Pre" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pre