import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap';
import DataModal from './DataModal';

function Data() {

    const newlist = useSelector((state) => state.TableData.list)
    console.log("newlist", newlist);
    const dispatch = useDispatch()
    const handleshow = () => {
        console.log("request pampinaavaa")
        dispatch({
            type: "table_request"
        })
    }
    return (
        <div>
            <h1>Show table data</h1>
            <button onClick={handleshow}>Show Table</button>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>email</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newlist.map((each, index) => {
                            return (
                                <tr key={index}>
                                    <td>{each.id}</td>
                                    <td>{each.username}</td>
                                    <td>{each.email}</td>
                                    <td><DataModal /></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Data