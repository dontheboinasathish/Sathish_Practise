import React from 'react'
import Product from '../Product'
import Counter from './Counter'
import Messsage from './Messsage'
import Shoping_Card from './Shoping_Card'

function Parent() {
    return (
        <div>
            <h1>parent component</h1>
            {/* <Counter /> */}
            {/* <Messsage /> */}
            {/* <Product /> */}
            <Shoping_Card />

        </div>
    )
}

export default Parent