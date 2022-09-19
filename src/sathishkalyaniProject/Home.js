import React from 'react'
import "./Home.css"
import image from "../Components/Images/test.jpeg"
import { useNavigate } from 'react-router-dom'
function Home() {
    const page = useNavigate()

    const handlepre = () => {
        page("/Pre")
    }
    const handlePro = () => {
        page("/Pro")
    }
    const handleTest = () => {
        page("/Test")
    }
    const handleAdd = () => {
        page("/Add")

    }
    return (
        <div>
            <div>
                <span className='header'><b>Project Management</b></span>
            </div>
            <div className='main'>
                <div className="row ">
                    <div className="col card ">
                        <h4>Pre</h4>
                        <img onClick={handlepre} src={image} alt="computerpic" height="150" width="200px" />

                    </div>
                    <div className="col card">
                        <h4>Pro</h4>
                        <img onClick={handlePro} src={image} alt="computerpic" height="150" width="200px" />
                    </div>
                    <div className="col card">
                        <h4>Test</h4>
                        <img onClick={handleTest} src={image} alt="computerpic" height="150" width="200px" />
                    </div>
                    <div className="col card">
                        <h4>Add</h4>
                        <img onClick={handleAdd} src={image} alt="computerpic" height="150" width="200px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home