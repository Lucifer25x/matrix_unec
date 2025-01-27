import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import SingleProduct from '../components/SingleProduct';

const Products = () => {
    const data = useSelector(state => state);
    return (
        <Container>
            <p className='h1 text-center my-5'>Products {`Try: ${5+3}`}</p>

            <Row className='g-3'>
                {data.map(product => (
                    <SingleProduct key={product.id} img={product.img} name={product.name} price={product.price} />
                ))}
            </Row>
        </Container>
    )
}

export default Products