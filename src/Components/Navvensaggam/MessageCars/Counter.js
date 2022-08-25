import React, { useState } from 'react'

function Counter() {
    const [state, setState] = useState(0)

    const incerment = () => {
        setState(state + 1)
    }
    const Decerment = () => {
        setState(state - 1)
    }
    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header ">
                                <h1>Counter</h1>
                            </div>
                            <div className="card-body">
                                <h5 className='display-3'>{state}</h5>
                                <button className='btn btn-success btn-sm' onClick={incerment}>Increment</button>
                                <button className='btn btn-primary btn-sm' onClick={Decerment}>Decrement</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter