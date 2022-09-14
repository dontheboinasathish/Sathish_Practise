import React from 'react'
import './home.css'
import Test from '../sampleproject/test.jpeg'
import Add from '../sampleproject/add2.jpg'
import { Link } from 'react-router-dom'
const Home2 = () => {
    return (
        <div className="mt-2 text-center">
            <span id="text"><b>PROJECT MANAGEMENT</b></span>
            <div>
                <div className="bg mt-3">
                    <div className="adjust">
                        <Link to={`/pre`} className="text-decoration-none text-dark">
                            <div className="pre hover">
                                <div>
                                    PRE
                                </div>
                                <div>
                                    <img src={Test} alt="system" height="150" width="200" />
                                </div>

                            </div>
                        </Link>
                        <Link to={`/test`} className="text-decoration-none text-dark">
                            <div className="test hover">
                                <div>
                                    TEST
                                </div>
                                <div>
                                    <img src={Test} alt="system" height="150" width="200" />
                                </div>
                            </div>
                        </Link>
                        <Link to={`/pro`} className="text-decoration-none text-dark">
                            <div className="pro hover">
                                <div>
                                    PRO
                                </div>
                                <div>
                                    <img src={Test} alt="system" height="150" width="200" />
                                </div>
                            </div>
                        </Link>
                        <Link to={`/add`} className="text-decoration-none text-dark">
                            <div className="add hover">
                                <div>
                                    ADD
                                </div>
                                <div>
                                    <img src={Add} alt="system" height="150" width="200" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home2