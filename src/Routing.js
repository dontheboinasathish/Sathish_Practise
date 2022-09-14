import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HandlingState from './Components/HandlingState'
// import Add from './Components/KalayaniProject/Add'
// import Home from './Components/KalayaniProject/Home'
// import Pre from './Components/KalayaniProject/Pre'
// import Pro from './Components/KalayaniProject/Pro'
// import Test from './Components/KalayaniProject/Test'
import FunCom from './Components/Navvensaggam/FunCom'
import Countrycard from './Components/Navvensaggam/MessageCars/Countrycard'
import Parent from './Components/Navvensaggam/MessageCars/Parent'
import Addpage from './sampleproject/addpage'
import Home2 from './sampleproject/home'
import Pre from './sampleproject/pre'
import Pro from './sampleproject/pro'
import Test from './sampleproject/test2'




function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/funcom" element={<FunCom />}></Route>
                    <Route path="/handlestate" element={<HandlingState />}></Route>
                    <Route path="/card" element={<Countrycard />}></Route>
                    <Route path="/parent" element={<Parent />}></Route>
                    {/* <Route path="/home" element={<Home />}></Route>
                    <Route path="/pre" element={<Pre />}></Route>
                    <Route path="/Add" element={<Add />}></Route>
                    <Route path="/test" element={<Test />}></Route>
                    <Route path="/pro" element={<Pro />}></Route> */}
                    <Route path="/home" element={< Home2 />} />
                    <Route path="/pre" element={< Pre />} />
                    <Route path="/pro" element={< Pro />} />
                    <Route path="/test" element={< Test />} />
                    <Route path="/add" element={< Addpage />} />



                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default Routing