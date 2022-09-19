
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';


function DataModal(props) {
    const editdetails = useSelector((state) => state.TableData.list)
    console.log("editdetails", editdetails)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Modaldata, setModaldata] = useState({
        id: "",
        username: '',
        email: '',
    })
    const handlechangeform = (e) => {
        setModaldata({ ...Modaldata, [e.target.name]: e.target.value })
        console.log("Modaldata", Modaldata)
    }
    //submit Modal Function
    const ModalSubFn = () => {

    }
    // const handleShow = (value) => {
    //     setShow(true)

    // }
    // const geteditdetails = (value) => {
    //     setModaldata(value)

    //     setShow(true)
    // }

    const editfilter = (value) => {
        const filter = editdetails.filter((each) => each.id == each.value)
    }

    const editfn = (value) => {
        setShow(true)
        setModaldata(value)
    }

    return (
        <div>
            <Button variant="primary" onClick={(each) => editfn(each)} >
                Edit
            </Button>

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
                                <input type="text" name="id" value={Modaldata.id} onChange={handlechangeform} className='form-control' />
                            </div>

                            <div className='col-md-12'>
                                <label htmlFor="Releasedate">Description</label>
                                <textarea type="text" name="username" value={Modaldata.username} onChange={handlechangeform} className='form-control'></textarea>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor="Releasedate">Status</label>
                                <input type="date" name="email" value={Modaldata.email} onChange={handlechangeform} className='form-control' />

                            </div>

                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='bgcolor'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={editfilter}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DataModal;