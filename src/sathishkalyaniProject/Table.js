import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';


function TableData(props) {
    const dispatch = useDispatch();
    const newdata = useSelector((state) => state.TotalData.list)
    console.log("table", newdata);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Modaldata, setModaldata] = useState({
        id: "",
        tittle: '',
        releasedate: '',
        description: '',
        status: '',
        envinorment: '',
    })
    const handlechangeform = (e) => {
        setModaldata({ ...Modaldata, [e.target.name]: e.target.value })
        console.log("Modaldata", Modaldata)
    }

    // const [datatable, setDatatable] = useState({
    //     id: "",
    //     tittle: '',
    //     relasedata: '',
    //     description: '',
    //     status: '',
    //     envinorment: '',

    // })


    const purifydata = newdata.filter((each) => each.envinorment == props.envinorment)
    console.log(purifydata)
    const geteditdetails = (value) => {
        setModaldata(value)
        setShow(true)
    }



    const editsubmit = () => {
        dispatch({
            type: "edit_details",
            payload: Modaldata,
        })
        setShow(false)
    }

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tittle</th>
                        <th>Releasedate</th>
                        <th>Description</th>
                        <th>status</th>
                        <th>Envinorment</th>
                        <th>Edit Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        purifydata.map((each, index) => {
                            return (
                                <tr key={index}>
                                    <td>{each.id}</td>
                                    <td>{each.tittle}</td>
                                    <td>{each.releasedate}</td>
                                    <td>{each.description}</td>
                                    <td>{each.status}</td>
                                    <td>{each.envinorment}</td>
                                    <td> <Button variant="primary"
                                        onClick={() => geteditdetails(each)}>
                                        Edit
                                    </Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </Table>
            {/* edit modaL */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton className='bgcolor '>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body className=' bgcolor'>
                    <Form className='m-1 '>
                        <div className="form-group m-2">

                            <div className='col-md-12'>
                                <label htmlFor="title">Tittle</label>
                                <input type="text" name="tittle" value={Modaldata.tittle} onChange={handlechangeform} className='form-control' />
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor="Releasedate">Release date</label>
                                <input type="date" name="releasedate" value={Modaldata.releasedate} onChange={handlechangeform} className='form-control' />
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor="Releasedate">Description</label>
                                <textarea type="text" name="description" value={Modaldata.description} onChange={handlechangeform} className='form-control'></textarea>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor="Releasedate">Status</label>
                                <select name='status' value={Modaldata.status} onChange={handlechangeform} className="form-control" id="">
                                    <option value="" disabled>...select...</option>
                                    <option value="Completed" >Completed</option>
                                    <option value="OnProgress">OnProgress</option>
                                </select>
                            </div>

                            <div className='col-md-12 '>
                                <label htmlFor="Releasedate">Envinorment</label>
                                <select name="envinorment" value={Modaldata.envinorment} onChange={handlechangeform} className="form-control" id="">
                                    <option value="" disabled>...select...</option>
                                    <option value="Pro" >Pro</option>
                                    <option value="Pre">Pre</option>
                                    <option value="Test">Test</option>
                                </select>

                            </div>
                            <div className='mt-3'>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='bgcolor'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={editsubmit}>Save Changes</Button>
                </Modal.Footer>
            </Modal>










        </div>
    )
}

export default TableData;