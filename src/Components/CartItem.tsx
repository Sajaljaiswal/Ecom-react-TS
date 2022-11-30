import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../Context/CartContext";
import StoreItems from "../Data/Items.json";

type CartItemProps = {
    id: number
    quantity: number
}
export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = StoreItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className='d-flex align-item-center   '>
            <img src={item.imgUrl} style={{ width: '125px' }} alt="" />
            <div className="me-auto">
                <div>
                    <h5>{item.name}</h5> {quantity > 1 && <span> Quantity : {quantity} </span>}
                </div>
                <div>Price: {item.price}</div>
                <h6>Total Price :{item.price * quantity}</h6>
                <Button onClick={() => removeFromCart(item.id)}><i className="fa fa-trash"></i></Button>
                <hr />
            </div>
        </Stack>
    )
}