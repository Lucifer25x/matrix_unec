import React from 'react'
import { Card, Col } from 'react-bootstrap'

const SingleProduct = (props) => {
    return (
        <Col sm={12} md={4}>
            <Card>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        ${props.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleProduct