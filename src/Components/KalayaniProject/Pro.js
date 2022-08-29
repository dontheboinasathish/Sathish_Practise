import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../KalayaniProject/Pro.css"

function Pro() {
    const name1 = useNavigate()
    const AddFn = () => {
        name1("/Add")
    }
    return (
        <div>
            <div className='proimg'>
                <h1>Test</h1>
                <div className='justify-content-between'>
                    <button onClick={AddFn} type="button" class="btn btn-primary">Add</button>
                    <button type="button" class="btn btn-primary">Home</button>
                    <button type="button" class="btn btn-primary">Pre</button>
                    <button type="button" class="btn btn-primary">Pro</button>
                </div>

            </div>
        </div>
    )
}

export default Pro