import React, { useState } from 'react'

function HandlingState() {
    const [state, setState] = useState({
        students: [{
            fname: 'sathi',
            course: "BE-TECH"
        },
        {
            fname: 'indra',
            course: "BE-TECH"
        },
        {
            fname: 'john',
            course: "BE-TECH"
        }
        ]

    })
    const { students } = state

    return (
        <div className='container'>

            <div className="card">
                <div className="card-head">
                    <h1>hello everybody </h1>
                </div>

                <div className="card-body">
                    <h2>Name:{students[0].fname}</h2>
                    <h2>Course:{students[0].course}</h2>
                    <h4>name:{students[1].fname}</h4>
                    <h4>course:{students[1].course}</h4>
                </div>
            </div>
        </div>
    )
}

export default HandlingState