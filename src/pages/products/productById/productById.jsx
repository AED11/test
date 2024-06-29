import React from 'react'
import { useParams } from 'react-router-dom'

const ProductById = () => {
  let {id} = useParams()

  return (
    <div>productById = {id}</div>
  )
}

export default ProductById