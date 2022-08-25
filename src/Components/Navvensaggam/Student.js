import React, { useEffect, useState } from 'react'


function Student(props) {

    // student child
    const [state, setState] = useState('sathish dontheboina')

    useEffect(() => {
        pass(state)
    }, [])

    function pass() {
        return props.passfun(state);
        console.log("hello")
    }
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h1>hello student
                        {/* {data} */}
                        {props.name} {props.course} </h1>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Student