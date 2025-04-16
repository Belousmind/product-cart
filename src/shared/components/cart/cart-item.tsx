type ProductProps = {
  name: string
  category?: string
  price: number
  amount?: number
}

const CartItem = ({ name, price, amount }: ProductProps) => {
  return (
    <>
      <span>{name}</span>
      <span>Amount: {amount}</span>
      <span>Price: ${price}</span>
    </>
  )
}

export default CartItem
