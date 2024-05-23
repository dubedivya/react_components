import React, { useEffect, useState } from "react";
import "./style.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data && data.products.length > 0) {
        setData(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e);
      setLoading(false);
    }
  };

  //Scroll Indicator
  const handleScrollPercentage = () => {
    // console.log(document.body.scrollTop, document.documentElement.scrollTop);
    // console.log(
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight,
    // );

    const docScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((docScrolled / height) * 100);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(data, scrollPercentage);

  return (
    <>
      <div className="container">
        <div className="heading-container">
          <h1>Custom Scroll Indicator</h1>

          <div className="scroll-progress-container">
            <div
              className="progress-indicator"
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
        </div>
        {!loading && (
          <div className="products-list">
            {data && data.products && data.products.length > 0
              ? data.products.map((item, index) => (
                  <p className="item" id={item.id} key={index}>
                    {item.title}
                  </p>
                ))
              : null}
          </div>
        )}
      </div>
      {loading && (
        <div className="loading-msg">
          <p>Loading....Please wait!</p>
        </div>
      )}
    </>
  );
};

export default ScrollIndicator;
