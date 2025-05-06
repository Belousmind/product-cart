import styles from './product-card.module.scss'
import { AddToCartButton } from '@ui'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import clsx from 'classnames'
import { isMobile, isTablet, isDesktop } from 'react-device-detect'
import { useState, useEffect } from 'react'

console.log('Мобильное устройство:', isMobile)
console.log('Планшет:', isTablet)
console.log('Десктоп:', isDesktop)
console.log(isTablet && isMobile)

type ProductCardProps = {
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
  }
  name: string
  category: string
  price: number
}

const ProductCard = ({ image, name, category, price }: ProductCardProps) => {
  const [imageSrc, setImageSrc] = useState(image.desktop)

  const isInCart = useSelector((state: RootState) =>
    state.cart.items.some((item) => item.name === name)
  )

  useEffect(() => {
    if (isDesktop) return setImageSrc(image.desktop)
    if (isTablet && isMobile) return setImageSrc(image.tablet)
    if (isMobile) return setImageSrc(image.mobile)
  }, [])

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img
          src={imageSrc}
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
