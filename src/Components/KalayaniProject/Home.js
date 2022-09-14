import React from 'react'
import "D:/Sathish_Practise/src/Components/KalayaniProject/Home.css"
import image1 from "D:/Sathish_Practise/src/Images/test.jpeg"
import image2 from "D:/Sathish_Practise/src/Images/Document.svg"
import image3 from "D:/Sathish_Practise/src/Images/addsymbol.svg"
import { useNavigate } from 'react-router-dom'

function Home() {
    let name = useNavigate()
    const firstImg = () => {
        console.log("firstimg");
        name("/pre")
    }
    const secoundImg = () => {
        name("/Test")
    }
    return (
        <div className='codex'>

            <div className="container mt-5">
                <marquee behavior="scroll" direction="row"><h1 className='hName'>Project Management</h1></marquee>
                <div >
                    <div className="card-body" >

                        <button className='image1' onClick={firstImg}> <h3>pre</h3><img src={image1} alt="" height="198px" /></button>
                    </div>
                    <button className='image2' onClick={secoundImg}> <img src={image1} alt="" height="198px" /></button>
                    <img src={image1} alt="" height="198px" />
                    <span className='document'>
                        <img src={image2} alt="tag" height="198px" />
                        <img className='addsym' src={image3} alt="tag" height={"25px"} width={"25px"} />
                    </span>
                </div>
            </div>
        </div >
    )
}
export default Home