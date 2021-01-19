import React,{useEffect, useState} from 'react'
import {Container,Row,Col} from "react-bootstrap"
import Product from "../components/Product"
import axios from 'axios'

const HomeScreen = () => {
    const [product,setProduct]=useState([])
    useEffect(() => {
        const fetchProducts=async()=>{
            const {data} =await axios.get('/api/products')

            setProduct(data)
        }
        fetchProducts()
    },[])
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
            {product.map((product)=>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                </Col>
            ))}
            </Row>
        </>
    )
}

export default HomeScreen
