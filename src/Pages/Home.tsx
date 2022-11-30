import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate()
    const navigateToProduct = () => {
        navigate('/items');
    };
    return (
        <>
            <Card className="text-center">
                <Card.Header>WELCOME</Card.Header>
                <Card.Body>
                    <h1>My_Store</h1>
                    <Card.Img src="https://images.unsplash.com/photo-1563286094-6e420626b6f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80" alt="Card image" />
                    <Card.Text>
                        A Store Where You Will Get Everything Related To You Daily Activities
                    </Card.Text>
                    <Button onClick={navigateToProduct} variant="primary">Explore Products</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Visit Again</Card.Footer>
            </Card>
        </>
    )
}

export default Home
