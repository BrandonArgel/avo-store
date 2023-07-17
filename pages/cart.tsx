import React from 'react'
import { Divider } from 'semantic-ui-react'
import CartItemList from '@components/CartItemList/CartItemList'
import CartSummary from '@components/CartSummary/CartSummary'
import { useCart, useCartMutations } from '@store/Cart'

const CartPage = () => {
  const { items, count } = useCart()
  const { removeFromCart } = useCartMutations()

  return (
    <main>
      <div className="container">
        <CartItemList items={items} removeFromCart={removeFromCart} />
        <Divider />
        <CartSummary totalAmount={count} />
      </div>
    </main>
  )
}

export default CartPage
