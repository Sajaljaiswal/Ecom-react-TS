import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../Context/CartContext'
type StoreItemsProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}
const StoreItems = ({ id, name, price, imgUrl }: StoreItemsProps) => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
        <div>
            <Card className='h-100'>
                <Card.Img variant='top' src={imgUrl} height='200px' />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className='d-flex justify-content-between'><span>{name}</span>
                        <span className='text-muted'>&#8377; {price}</span>
                    </Card.Title>
                    <div className='mt-auto'>
                        {quantity === 0 ? (
                            <Button variant="info" className='w-100 mt-3' onClick={() => increaseCartQuantity(id)} > + Add to Cart</Button>
                        ) : <div className='d-flex align-item-center  flex-column'>
                            <div className='d-flex   justify-content-center' style={{ gap: '.5rem' }}>
                                <Button className=' mt-3' onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <div className='fs-3 mt-3'>{quantity}</div>
                                <Button className=' mt-3' onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button className='w-50 mt-3' variant='danger' onClick={() => removeFromCart(id)}>REMOVE</Button>
                        </div>}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default StoreItems
