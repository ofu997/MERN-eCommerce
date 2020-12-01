import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { createBrowserHistory } from "history"; // force refresh on new search

const SearchBox = () => {
  const [keyword, setKeyword] = useState('')
  const history = createBrowserHistory({ forceRefresh: true }); // force refresh on new search

  const submitHandler = e => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control 
        type='text' 
        name='q' 
        onChange={e => setKeyword(e.target.value)} 
        placeholder='Search Products...' 
        className='mr-sm-2 ml-sm-5'
      >
      </Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button>      
    </Form>
  )
}

export default SearchBox
