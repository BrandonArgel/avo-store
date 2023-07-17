import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import ProductSummary from '@components/ProductSummary/ProductSummary'
import Loading from '@components/Loading/Loading'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<TProduct | null>(null)

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data: TProduct) => {
          setProduct(data)
        })
    }
  }, [query.id])

  return (
    <main>
      <div className="container">
        {product == null ? <Loading /> : <ProductSummary product={product} />}
      </div>
    </main>
  )
}

export default ProductPage
