import React from 'react'
import { Col, Row } from 'react-bootstrap'
import StoreItems from '../Components/StoreItems'
import myItems from '../Data/Items.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Items = () => {
    return (
        <>
            <Card className="text-center">
                <Card.Header><h2> All Products</h2></Card.Header>
                <Card.Img src="https://images.unsplash.com/photo-1580974928064-f0aeef70895a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Card image" />
                <Card.Footer className="text-muted">...........</Card.Footer>
            </Card>
            <Row md={2} xs={1} lg={3} className='g-3'>
                {myItems.map(i => (
                    <Col key={i.id}><StoreItems{...i} /></Col>
                ))}

            </Row>
        </>
    )
}

export default Items
