import axios from 'axios'
import { 
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL, 
  PRODUCT_LIST_REQUEST, 
  PRODUCT_LIST_SUCCESS 
} from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const {data } = await axios.get('/api/products/')

    dispatch({
      type: PRODUCT_LIST_SUCCESS, 
      payload: data
    })
  } catch (error) { 
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message, 
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {     
    // this dispatch may not be needed
    dispatch({ type: PRODUCT_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/products/${id}`)
    // const { data } = await axios.get(`/api/products/5fa46e587f999056a8e6df66`)
    console.log(`data: ${data.name}`)
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS, // reducers>productReducers>productDetailsReducer
      payload: data
    })
  } catch (error) { 
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message, 
    })
  }
}

export const deleteProduct = id => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST
    })

    const { 
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    
    await axios.delete(`/api/products/${id}`, config)

    dispatch({
      type: PRODUCT_DELETE_SUCCESS, 
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message, 
    })
  }
}