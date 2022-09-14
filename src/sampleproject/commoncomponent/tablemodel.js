import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'

import { Modal, Button } from 'react-bootstrap'

const Tablemodel = (props) => {
    const [state, setState] = useState({
        List: []
    })
    const dispatch = useDispatch()

    const [modal, setModal] = useState({
        Title: "",
        Releasedate: "",
        Description: "",
        Status: "",
        Environment: "",
    })

    const handleInputChange = (e) => {
        setModal({ ...modal, [e.target.name]: e.target.value })
    }
    // const output = useSelector((state) => state.Myreducerroot)
    const List = useSelector((state) => state.ApiReducer.userList)
    const filtered = List.filter((each) => each.Environment == props.Environment)
    console.log("List", List)

    // state for modal

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleEdit = (data) => {
        setModal(data)
        handleShow()
    }
    const handleChanges = () => {
        dispatch({
            type: "saveChanges",
            payload: modal
        })
        handleClose()
    }

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Releasedate</td>
                        <td>Description</td>
                        <td>Status</td>
                        <td>Environment</td>
                        <td>EditDetails</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        filtered.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.Title}</td>
                                    <td>{data.Releasedate}</td>
                                    <td>{data.Description}</td>
                                    <td>{data.Status}</td>
                                    <td>{data.Environment}</td>
                                    <td><Button variant="primary" onClick={() => handleEdit(data)}>
                                        edit
                                    </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            {/* model */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>edit user details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div>
                            <label htmlFor="title">Title</label>
                            <input type="text" name="Title" value={modal.Title} className="form-control " placeholder="Title" onChange={handleInputChange} />
                        </div>
                        <div >
                            <label htmlFor="Releasedate">Release Date</label>
                            <input type="date" name="Releasedate" value={modal.Releasedate} className="form-control" onChange={handleInputChange} />
                        </div>

                        <div>
                            <label htmlFor="Description">Description</label>
                            <textarea type="text" name="Description" value={modal.Description} className="form-control" rows="2" onChange={handleInputChange} />
                        </div>

                        <div>
                            <label htmlFor="Status">Status</label>
                            <select name="Status" id="select" className="form-control" onChange={handleInputChange}
                                value={modal.Status}>
                                <option selected={true} disabled="disabled">--Select--</option>
                                <option value="Completed">Completed</option>
                                <option value="OnProcess">OnProgress</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="Environment">Environment</label>
                            <select name="Environment" id="select" className="form-control" onChange={handleInputChange}
                                value={modal.Environment}>
                                <option selected={true} disabled="disabled">--Select--</option>
                                <option value="Pre">Pre</option>
                                <option value="Post">Post</option>
                                <option value="Test">Test</option>
                            </select>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Tablemodel