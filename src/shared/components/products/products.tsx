import data from '../../../data.json'
import Product from './product'
import styles from './products.module.scss'


const Products = () => {
  return (
    <div className={styles.products}>
      <h1 className={styles.title}>Products</h1>
      <div className={styles['product-list']}>
        {data.map((item, index) => (
          <Product
            key={index}
            name={item.name}
            category={item.category}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Products
