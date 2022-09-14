import React, { useState } from 'react'

import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import "../KalayaniProject/Add.css"

function Add() {
    const [state, setState] = useState({
        email: "",
        releasedate: "",
        fillstatus: "",
        check: false,

    })
    // const [check, setCheck] = useState(false)
    const handleoninput = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
        console.log("state", state)
        console.log("hello onchange");
    }
    const handleonCheck = (e) => {
        setState(true);
    }
    const name1 = useNavigate()
    const homeFn = () => {
        name1('/Home')
    }
    return (
        <form className='containereew'>
        <div className='mt-3'>
            <label>Title:</label>
            <input className=" form-control" type="text" name='name' />
        </div>
        <div className='mt-3'>
            <label>Release Date:</label>
            <input className=" form-control" type="date" name='date' />
        </div>
        <div className='mt-3'>
            <label>Description:</label>
            <textarea className=" form-control" type="text" name='description' />
        </div>
        <div className='mt-3'>
            <label> Status </label>
            <select name='description' className="form-select" >

                <option value='' selected="true" disabled="disabled">--Select--</option>
                <option value=''> PRE  </option>
                <option value=''> PRO </option>
            </select>

        </div>
        <div className='mt-3'>
            <label> Environment </label>
            <select name='description' className="form-select">
                <option value='' selected="true" disabled="disabled" >--Select--</option>
                <option value=''> PRE </option>
                <option value=''> PRO </option>
            </select>

        </div>
        <div className='mt-3'>
            <Button> Add </Button>
        </div>
    </form>
    )
}
export default Add;