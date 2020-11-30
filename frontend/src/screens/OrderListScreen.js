import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listOrders } from '../actions/orderActions'

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const userList = useSelector(state => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const userDelete = useSelector(state => state.userDelete)
  const { success:successDelete } = userDelete

  const orderList = useSelector(state => state.orderList)
  const { loading:orderListLoading, orders, error:orderListError } = orderList


  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, successDelete, userInfo])

  // const deleteHandler = id => {
  //   if (window.confirm('Are you sure?')) {
  //     dispatch(deleteUser(id))
  //   }
  // }

  return (
    <div>
      <h1>Orders</h1>
      {orderListLoading ? <Loader /> : orderListError ? <Message variant='danger'>{orderListError}</Message>
      : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              {/* <th>EMAIL</th>
              <th>ADMIN</th> */}
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user.name}</td>
                {/* <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                <td>
                  {user.isAdmin ? (<i className='fas fa-check' style={{color: 'green'}}></i> 
                  ) : ( 
                  <i className='fas fa-times' style={{ color: 'red'}}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button 
                    variant='danger' 
                    className='btn-sm' 
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  )
}

export default OrderListScreen