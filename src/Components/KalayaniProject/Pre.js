import React from 'react'
import "../KalayaniProject/Pre.css"
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Pre() {

    const name1 = useNavigate()
    const AddFn = () => {
        name1("/Add")
    }
    return (
        <div className='pretag'>

            <h1>hello PrePage</h1>
            <div className='container-mt-4'>
                <Button onClick={AddFn}>ADD</Button>
                <Button >Home</Button>
                <Button>Post</Button>
                <Button>Pre</Button>
            </div>
            <hr/>
        </div>
    )
}

export default Pre;