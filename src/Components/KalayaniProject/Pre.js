import React from 'react'
import "../KalayaniProject/Pre.css"
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Pre() {

    const name1 = useNavigate()
    const AddFn = () => {
        name1("/Add")
    }
    const gotohome = () => {
        name1("/Home")
    }
    const prehome = () => {
        name1("/test")
    }
    const prepage = () => {
        name1("/pre")
    }
    return (
        <div className='pretag'>

            <h1>hello PrePage</h1>
            <div className='container-mt-4'>
                <Button onClick={AddFn}>ADD</Button>
                <Button onClick={gotohome}>Home</Button>
                <Button onClick={prehome}>Pro</Button>
                <Button onClick={prepage}>Test</Button>
            </div>
            <hr />
        </div>
    )
}
export default Pre;