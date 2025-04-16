import styles from './product.module.scss'
import CartButton from './cart-button'


type ProductProps = {
  name: string
  category?: string
  price: number
  amount?: number
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
  }
}

const Product = ({ name, category, price, image }: ProductProps) => {
  return (
    <div className={styles.product}>
      <div className={styles['card-image-container']}>
        <img src={image.desktop} alt={name} className={styles.img} />
        <CartButton name={name} price={price} />
      </div>

      <div className={styles['item-text']}>
        <span className={styles.category}>{category}</span>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>${price}</span>
      </div>
    </div>
  )
}

export default Product
