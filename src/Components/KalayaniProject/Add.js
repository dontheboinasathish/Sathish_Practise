import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import "../KalayaniProject/Add.css"

function Add() {
    const name1 = useNavigate()
    const homeFn = () => {
        name1('/Home')
    }
    return (
        <div className='frompage'>

        </div>
    )
}
export default Add;