import React, { useEffect, useState } from "react";
import "./style.css";

const LoadMoreData = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`,
      );
      const data = await response.json();
      console.log(data);
      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    console.log("api running");
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisableBtn(true);
    }
  }, [products]);

  return (
    <>
      {!loading && (
        <div className="container">
          <div className="product-container">
            {products && products.length
              ? products.map((product) => (
                  <div key={product.id} className="product">
                    <img src={product.thumbnail} alt={product.title} />
                    <p className="product-title">{product.title}</p>
                  </div>
                ))
              : null}
          </div>
          <div className="button-container">
            <button
              className={!disableBtn ? "load-more-btn" : "disable-btn"}
              onClick={() => setCount(count + 1)}
              disabled={disableBtn}
            >
              Load More Products
            </button>
            {disableBtn ? (
              <p className="disable-msg"> You have reached to 100 products. </p>
            ) : null}
          </div>
        </div>
      )}
      {loading && <div>Loading products....Please wait!</div>}
    </>
  );
};

export default LoadMoreData;
