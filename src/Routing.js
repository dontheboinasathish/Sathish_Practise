import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HandlingState from './Components/HandlingState'
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
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default Routing