import React from 'react'
// import { Table } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HandlingState from './Components/HandlingState'
import FunCom from './Components/Navvensaggam/FunCom'
import Countrycard from './Components/Navvensaggam/MessageCars/Countrycard'
import Parent from './Components/Navvensaggam/MessageCars/Parent'
import Data from './Components/ReactjsExamples/Data'
import DataModal from './Components/ReactjsExamples/DataModal'
import Add from './sathishkalyaniProject/Add'
import Home from './sathishkalyaniProject/Home'
import ModalEdit from './sathishkalyaniProject/ModalEdit'
import Pre from './sathishkalyaniProject/Pre'
import Pro from './sathishkalyaniProject/Pro'
import Test from './sathishkalyaniProject/Test'

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
                    <Route path="/pro" element={<Pro />}></Route>
                    <Route path="/test" element={<Test />}></Route>
                    <Route path="/add" element={<Add />}></Route>
                    <Route path="/modal" element={<ModalEdit />}></Route>
                    <Route path="/data" element={<Data />}></Route>
                    <Route path="/modal" element={<DataModal />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routing