import React, { useState } from 'react'

function Messsage() {
    const [state, setState] = useState()

    const goodmorning = () => {
        setState("goodMornig")

    }
    const goodAftr = () => {
        setState("goodAfterNoon")

    }
    const goodEvng = () => {
        setState("good Evng")
    }
    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">
                                <h1>Message</h1>
                            </div>
                            <div className="card-body">
                                <h1>Hello{state}</h1>
                                <button className='btn btn-success btn-mt' onClick={goodmorning}>GoodMorning</button>
                                <button className='btn btn-danger btn-mt' onClick={goodAftr}>GoodAfteNoon</button>
                                <button className='btn btn-info btn-mt' onClick={goodEvng}>GoodEvening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messsage