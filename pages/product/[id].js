import Header from "@/Components/Modules/Header/Header";
import HeaderShare from "@/Components/Modules/HeaderShare/HeaderShare";
import React from "react";
import styles from "@/styles/Product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faStar } from "@fortawesome/free-solid-svg-icons";

export default function ProductDetails({ productDetails }) {
  return (
    <>
      <Header></Header>
      <div
        className={`${styles.product_main}   align-items-center mb-5 text-decoration-none justify-content-center`}
      >
        <img
          className={`${styles.product_img}  mb-3 mb-sm-0`}
          src={productDetails.src}
          alt=""
        />
        <div style={{ width: "500px" }}>
          <h4 className="text-white mb-3">{productDetails.title}</h4>
          <hr style={{ borderColor: "white" }} />
          <div className={styles.stars}>
            <FontAwesomeIcon className={styles.fill_star} icon={faStar} />
            <FontAwesomeIcon className={styles.fill_star} icon={faStar} />
            <FontAwesomeIcon className={styles.fill_star} icon={faStar} />
            <FontAwesomeIcon className={styles.fill_star} icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className={styles.price_details}>
            {productDetails.off ? (
              <>
                <p>
                  $
                  {productDetails.price -
                    (productDetails.price * productDetails.off) / 100}
                </p>
                <p>${productDetails.price}</p>
              </>
            ) : (
              <p>${productDetails.price}</p>
            )}
          </div>
          <p style={{ color: "#fff" }} className="m-0 pr-5">
            {productDetails.desc}
          </p>
          <button className={styles.shopping_btn}>
            buy
            <FontAwesomeIcon className="ml-2" icon={faShoppingBag} />
          </button>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:4000/menu/`);
  const product = await res.json();

  const productPaths = product.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths: productPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/menu/${params.id}`);
  const product = await res.json();
  return {
    props: {
      productDetails: product,
    },
  };
}
