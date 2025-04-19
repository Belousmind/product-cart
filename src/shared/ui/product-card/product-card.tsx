import styles from './product-card.module.scss'
import AddToCartButton from '@ui/add-to-cart-button/add-to-cart-button'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import clsx from 'classnames'

type ProductCardProps = {
  image: string
  name: string
  category: string
  price: number
}

const ProductCard = ({ image, name, category, price }: ProductCardProps) => {
  const isInCart = useSelector((state: RootState) =>
    state.cart.items.some((item) => item.name === name)
  )

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img
          src={image}
          alt={name}
          className={clsx(styles.image, isInCart && styles.imageActive)}
        />
        <AddToCartButton name={name} price={price} />
      </div>

      <div className={styles.info}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.price}>${price.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default ProductCard
