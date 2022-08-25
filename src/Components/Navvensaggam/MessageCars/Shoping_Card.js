import React from 'react'

function Shoping_Card() {
    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">

                        <div className="card-header">
                            <h2 className='h3 text-success'>Product details</h2>

                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente minus iste distinctio inventore ad deleniti natus quia unde, quae tenetur debitis, consequuntur impedit ex facere esse nemo eius saepe maiores.</p>
                    </div>
                </div>
            </div>
            <div className='container mt-3'>
                <div className="row">
                    <div className="col">
                        <table className='table text-center table-hover'>
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <th>SNo</th>
                                    <th>Images</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>QTY</th>
                                    <th>Total</th>
                                </tr>

                            </thead>

                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Shoping_Card