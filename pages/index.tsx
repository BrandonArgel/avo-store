import React from 'react'
import Link from 'next/link'
import ProductList from '@components/ProductList/ProductList'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import styles from '@styles/pages/Home.module.scss'

export const getStaticProps = async () => {
  const response = await fetch(`https://brand-avocado-store.vercel.app/api/avo`)
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <main className={styles.Home}>
      <div className="container">
        <KawaiiHeader />
        <div className={styles.HomeDescription}>
          <Link href="/yes-or-no">¿Deberia comer un avo hoy?</Link>
        </div>
        <ProductList products={productList} />
      </div>
    </main>
  )
}

export default HomePage
