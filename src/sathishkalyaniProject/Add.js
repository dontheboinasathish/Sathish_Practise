import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Add() {

    const dispatch = useDispatch();
    const counter = useSelector((state) => state.TotalData.list);
    console.log("counter", counter)

    const [formdata, setFormdata] = useState({
        id: '',
        tittle: '',
        releasedate: '',
        description: '',
        status: '',
        envinorment: '',
    })
    const handlechangeform = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
        console.log("formdata", formdata)

    }
    const page = useNavigate()
    const handlehome = () => {
        page("/Home")
    }

    const lastId = counter[counter.length > 0 ? counter.length - 1 : 0] ? counter[counter.length > 0 ? counter.length - 1 : 0].id ? counter[counter.length - 1].id : 0 : 0;
    const submitFn = () => {
        dispatch({
            type: "formdata",
            payload: {
                tittle: formdata.tittle,
                releasedate: formdata.releasedate,
                description: formdata.description,
                status: formdata.status,
                envinorment: formdata.envinorment,
                id: lastId + 1,
            }
        })
        page("/pre");
    }

    return (
        <div>
            <div>
                <div >
                    <h1 className='header'><b>Project Management</b></h1>
                </div>
                <div>
                    <div className="row prebg">
                        <div className="col ">
                            <span> <Button onClick={handlehome}>Home</Button></span>
                            <hr />
                            <Form className='m-5'>
                                <div className="form-group m-3">

                                    <div className='col-md-5'>
                                        <label htmlFor="title">Tittle</label>
                                        <input type="text" name="tittle" value={formdata.tittle} onChange={handlechangeform} className='form-control' />
                                    </div>
                                    <div className='col-md-5'>
                                        <label htmlFor="Releasedate">Release date</label>
                                        <input type="date" name="releasedate" value={formdata.releasedate} onChange={handlechangeform} className='form-control' />
                                    </div>
                                    <div className='col-md-5'>
                                        <label htmlFor="Releasedate">Description</label>
                                        <textarea type="text" name="description" value={formdata.description} onChange={handlechangeform} className='form-control'></textarea>
                                    </div>
                                    <div className='col-md-5'>
                                        <label htmlFor="Releasedate">Status</label>
                                        <select name='status' value={formdata.status} onChange={handlechangeform} className="form-control" id="">
                                            <option value="" disabled>...select...</option>
                                            <option value="Completed" >Completed</option>
                                            <option value="OnProgress">OnProgress</option>
                                        </select>
                                    </div>

                                    <div className='col-md-5 '>
                                        <label htmlFor="Releasedate">Envinorment</label>
                                        <select name="envinorment" value={formdata.envinorment} onChange={handlechangeform} className="form-control" id="">
                                            <option value="" disabled>...select...</option>
                                            <option value="Pro" >Pro</option>
                                            <option value="Pre">Pre</option>
                                            <option value="Test">Test</option>
                                        </select>

                                    </div>
                                    <div className='mt-3'>
                                        <Button onClick={submitFn}>AddData</Button>
                                    </div>



                                </div>

                            </Form>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default Add