import React from 'react'
import image1 from "D:/Sathish_Practise/src/Images/Dinyosar.jpeg"


function Countrycard() {
    return (
        <React.Fragment>
            <div className="container mt-3">

                <div className="row">
                    <div className="col-md-3">
                        <div className="card card-header">
                            <img src={image1} alt="" />
                            <div className="card-body">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex id praesentium, tempora aperiam eligendi maiores nostrum, molestias consectetur earum fugiat, doloremque pariatur sequi labore omnis qui tempore maxime repudiandae possimus?
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card card-header">
                            <img src={image1} alt="" />
                            <div className="card-body">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex id praesentium, tempora aperiam eligendi maiores nostrum, molestias consectetur earum fugiat, doloremque pariatur sequi labore omnis qui tempore maxime repudiandae possimus?
                            </div>
                            <button>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Countrycard