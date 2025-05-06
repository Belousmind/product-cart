import styles from './product-list.module.scss'
import data from '../../../data.json'
import { ProductCard } from '@ui'

const ProductList = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Desserts</h2>

      <div className={styles.grid}>
        {data.map((item) => {
          return (
            <ProductCard
              key={item.name}
              name={item.name}
              category={item.category}
              price={item.price}
              image={item.image}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ProductList
