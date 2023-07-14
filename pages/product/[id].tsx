import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar/Navbar'

const ProductPage = () => {
  const {
    query: { id },
  } = useRouter()
  const [product, setProduct] = useState<TProduct>()

  useEffect(() => {
    if (id) {
      fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
    }
  }, [id])

  return (
    <div>
      <Navbar />
      <section>
        <h1>Página producto: {product?.name} </h1>
      </section>
    </div>
  )
}

export default ProductPage
