import React from 'react'
import ProductsContainer from './ProductsContainer'
import ProductsCartContainer from './ProductsCartContainer'

const App = () => (
    <div className="panel-body">
        <ProductsContainer/>
        <hr/>
        <ProductsCartContainer/>
    </div>
)

export default App
