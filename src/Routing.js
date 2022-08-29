import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HandlingState from './Components/HandlingState'
import Add from './Components/KalayaniProject/Add'
import Home from './Components/KalayaniProject/Home'
import Pre from './Components/KalayaniProject/Pre'
import Pro from './Components/KalayaniProject/Pro'
import Test from './Components/KalayaniProject/Test'
import FunCom from './Components/Navvensaggam/FunCom'
import Countrycard from './Components/Navvensaggam/MessageCars/Countrycard'
import Parent from './Components/Navvensaggam/MessageCars/Parent'


function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/funcom" element={<FunCom />}></Route>
                    <Route path="/handlestate" element={<HandlingState />}></Route>
                    <Route path="/card" element={<Countrycard />}></Route>
                    <Route path="/parent" element={<Parent />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/pre" element={<Pre />}></Route>
                    <Route path="/Add" element={<Add />}></Route>
                    <Route path="/test" element={<Test />}></Route>
                    <Route path="/pro" element={<Pro />}></Route>
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default Routing