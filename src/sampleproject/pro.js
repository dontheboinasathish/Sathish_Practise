import React from 'react'
import { Link } from 'react-router-dom'
import Tablemodel from './commoncomponent/tablemodel'

const Pro = () => {
    return (
        <>
            <div className="mt-2 text-center">
                <span id="text"><b>PROJECT MANAGEMENT</b></span>
                <div>
                </div>
            </div>
            <div className="bg mt-3">
                <div className="bg">
                    <Link to={`/add`} className="btn btn-primary m-3">Add</Link>
                    <Link to={`/home`} className="btn btn-primary m-3">Home</Link>
                    <Link to={`/pre`} className="btn btn-primary m-3">Pre</Link>
                    <Link to={`/test`} className="btn btn-primary m-3">Test</Link>
                    <Tablemodel Environment="Post"/>
                </div>
            </div>


        </>
    )
}

export default Pro