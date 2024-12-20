import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HomeCard.module.css'
import { BASEURL } from '../../api'

const HomeCard = ({product}) => {
  return (
    <div className={`col-md-3 ${styles.col}`}>
        <Link to="/detail" style={{ textDecoration: 'none' }}>
            <div className={styles.card}>
                <div className={styles.cardImgWrapper}>
                    <img src={`${BASEURL}${product.image}`} className={styles.cardImgTop} alt="Product Image" />
                </div>

                <div className={styles.cardBody}>
                    <h5 className={`${styles.cardTitle} mb-1`}>{product.name}</h5>
                    <h6 className={styles.cardText}>{`$${product.price}`}</h6>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default HomeCard