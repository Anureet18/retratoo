import React from 'react'
import { Container } from 'react-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import "./ShoppingCart.css"
import { removeFromCart, handlePlus, handleMinus } from '../../features/cartSlice';

const ShoppingCart = () => {

  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartTotal = useSelector((state) => state.cart.cartTotal);

  const dispatch = useDispatch();

  return (
    <div className='scart container text-center'>
      <Container>
        {cart.length > 0 ?
          (
            <div>
              <h1 className='m-5'>Shopping Bag</h1>
              <Table className='cart align-item-center' variant='dark' striped>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Item</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Total</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                {cart.map((item, index) => {
                  return (
                    <tbody key={item.id} >
                      <tr>
                        <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td>{item.description.slice(0, 10)}</td>
                        <td>₹{item.price?.toFixed(0)}</td>
                        <td><div>
                          <Button variant='light' onClick={() => dispatch(handlePlus(item))} ><HiPlusSm /></Button>  {item.amount}  <Button variant='light' onClick={() => dispatch(handleMinus(item))} ><HiMinusSm /></Button>
                        </div></td>
                        <td>₹{item?.totalPrice?.toFixed(0)}</td>
                        <td>
                          <Button onClick={() =>
                            dispatch(removeFromCart(item))} variant='danger'>Remove
                          </Button>
                        </td>
                      </tr>
                    </tbody>)
                })}
              </Table>
              <h2>Cart Total: {cartTotal?.toFixed(0)}</h2>
              <h2>Total Items: {totalAmount?.toFixed(0)} </h2>
            </div>
          ) :
          (
            <div>
              <h1 className='m-4'>Shopping cart</h1>
              <p className='m-3'>Oops! Your cart is empty</p>
              <Link to="/"> <Button className='cartbtn mb-5'>Continue Shopping</Button></Link>
            </div>)}
      </Container>
    </div>
  )
}

export default ShoppingCart

