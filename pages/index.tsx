import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }) => setProductList(data))
      .catch((error) => (console.error(error), setLoading(false)))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <Navbar />
      <h1>Avocados</h1>
      {productList.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <img src={product?.image} alt={product?.name} />
          <h2>{product?.name}</h2>
        </Link>
      ))}
    </div>
  )
}

export default HomePage
