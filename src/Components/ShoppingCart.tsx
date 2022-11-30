import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../Context/CartContext";
import { CartItem } from "./CartItem";
import StoreItems from "../Data/Items.json";

type ShoppingCartProps = {
    isOpen: boolean
}
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()
    return <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(i => (
                    <CartItem key={i.id} {...i} />
                ))}
                <Button variant="success">Order Now : &#8377; {(cartItems.reduce((total, cartItem) => {
                    const item = StoreItems.find(i => i.id === cartItem.id)
                    return total + (item?.price || 0) * cartItem.quantity
                }, 0
                ))}</Button>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
}