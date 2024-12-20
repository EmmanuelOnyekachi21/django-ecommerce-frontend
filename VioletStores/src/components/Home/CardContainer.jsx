import React from 'react'
import HomeCard from './HomeCard'
import styles from './HomeCard.module.css'

const CardContainer = ({products}) => {
  return (
    <section className={`${styles.custom}`} id='shop'>
        <h4 style={{ textAlign: 'center' }}>Our products</h4>

        <div className="container px-4 px-lg-5 mt-5">
            <div className="row justify-content-center">
              {products.map(product => <HomeCard key={product.id} product={product} />)}
            </div>
        </div>
    </section>
  )
}

export default CardContainer