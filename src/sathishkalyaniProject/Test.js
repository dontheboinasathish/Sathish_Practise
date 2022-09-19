import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import TableData from './Table'
import { useSelector } from 'react-redux'

function Test(props) {
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
    const handlePre = () => {
        page("/Pre")
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
                        <Button onClick={handlePre} className='distance'>Pre</Button>
                        <TableData envinorment="Test" />
                        <hr />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Test;