import React, { useState } from 'react'


function Product() {

    const [state, setState] = useState({
        products: {
            sno: 1,
            image: './Watch.jpg',
            name: 'mi watch',
            price: 1500,
            qty: 2
        }
    })
    const { products, qty } = state

    const handleIncr = () => {

        setState({ ...state, products: { ...state.products, qty: products.qty + 1 } })
    }
    const handleDec = () => {
        console.log("-")
        // setState({ ...state, qty: qty - 1 })
        setState({ ...state, products: { ...state.products, qty: products.qty - 1 } })
    }

    return (
        <React.Fragment>

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
                            <tbody>
                                <tr>
                                    <td>{products.sno}</td>
                                    <td>
                                        {/* <img src={products.image} alt="watchimage" /> */}
                                    </td>
                                    <td>{products.name}</td>
                                    <td>{products.price}</td>

                                    <td>
                                        <button onClick={handleDec}>-</button>
                                        {products.qty}
                                        <button onClick={handleIncr}>+</button>
                                    </td>

                                    <td>{products.qty * products.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </React.Fragment>

    )
}

export default Product