import React from 'react'
import { Link } from 'react-router-dom'
import Tablemodel from './commoncomponent/tablemodel'

const Pre = () => {
    return (
        <>
            <div className="mt-2 text-center">
                <span id="text"><b>PROJECT MANAGEMENT</b></span>
            </div>
            <div className="bg mt-3 d-flex flex-row">
                <div className="bg">
                    <Link to={`/add`} className="btn btn-primary m-3">Add</Link>
                    <Link to={`/home`} className="btn btn-primary m-3">Home</Link>
                    <Link to={`/test`} className="btn btn-primary m-3">Test</Link>
                    <Link to={`/pro`} className="btn btn-primary m-3">Pro</Link>
                    <Tablemodel  Environment="Pre"/>
                </div>
            </div>
        </>
    )
}

export default Pre