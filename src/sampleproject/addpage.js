import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const Addpage = () => {
    const dispatch = useDispatch()
    const list = useSelector((store) => store.ApiReducer.userList)
    console.log(list)
    const [state, setState] = useState({
        Title: "",
        Releasedate: "",
        Description: "",
        Status: "",
        Environment: "",
    })

    const handlechange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    // const { arrtwo } = state

    const Add = () => {
        const lastId = list[list.length > 0 ? list.length - 1 : 0]?.id ? list[list.length - 1].id : 0;
        dispatch({
            type: "formdata",
            payload: {
                Title: state.Title,
                Releasedate: state.Releasedate,
                Description: state.Description,
                Status: state.Status,
                Environment: state.Environment,
                id: lastId + 1,
            }
        })
    }

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };
    return (
        <>
            <div className="mt-2 text-center">
                <span id="text"><b>ADD A PROJECT</b></span>
                <div>
                </div>
            </div>
            <div className="bg mt-3">
                <Link to={`/home2`} className="btn btn-primary m-3">Home</Link><hr />
                <Form className="m-5">
                    <div className="form-group m-3">
                        <div className="col-md-5">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="Title" className="form-control " placeholder="Title" onChange={handlechange} />
                        </div>
                    </div>
                    <div className="form-group m-3">
                        <div className="col-md-5">
                            <label htmlFor="Releasedate">Release Date</label>
                            <input type="date" name="Releasedate" className="form-control" min={disablePastDate()} onChange={handlechange} />
                        </div>
                    </div>
                    <div className="form-group m-3">
                        <div className="col-md-5">
                            <label htmlFor="Description">Description</label>
                            <textarea type="text" name="Description" className="form-control" rows="4" onChange={handlechange} />
                        </div>
                    </div>
                    <div className="form-group m-3">
                        <div className="col-md-5">
                            <label htmlFor="Status">Status</label>
                            <select name="Status" id="select" className="form-control" onChange={handlechange}>
                                {/* <option selected={true} disabled="disabled">--Select--</option> */}
                                <option selected={true} disabled="disabled">--Select--</option>
                                <option value="Completed">Completed</option>
                                <option value="OnProcess">OnProgress</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group m-3">
                        <div className="col-md-5">
                            <label htmlFor="Environment">Environment</label>
                            <select name="Environment" id="select" className="form-control" onChange={handlechange}>
                                <option selected={true} value='' disabled="disabled">--Select--</option>
                                <option value="Pre">Pre</option>
                                <option value="Post">Post</option>
                                <option value="Test">Test</option>
                            </select>
                        </div>
                    </div>
                    {/* <Link to={`/home2`} className="btn btn-primary m-3">Add</Link><hr /> */}
                    <button type='button' className="btn btn-primary m-3" onClick={Add}>Add</button>
                </Form>
            </div>

        </>
    )
}

export default Addpage