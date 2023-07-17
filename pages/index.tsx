import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ProductList from '@components/ProductList/ProductList'
import Loading from '@components/Loading/Loading'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import styles from '@styles/pages/Home.module.scss'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }) => {
        setProductList(data)
        setLoading(false)
      })
  }, [])

  return (
    <main className={styles.Home}>
      <div className="container">
        <KawaiiHeader />
        <div className={styles.HomeDescription}>
          <Link href="/">¿Deberia comer un avo hoy?</Link>
        </div>
        {loading ? <Loading /> : <ProductList products={productList} />}
      </div>
    </main>
  )
}

export default HomePage
