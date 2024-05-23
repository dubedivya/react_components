import React, { useRef } from "react";
import useFetch from "../16_CustomHooks/useFetch/index.jsx";

const ScrollToTopAndBottom = () => {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {},
  );
  const bottomRef = useRef(null);

  if (error) return <p>Some Error occurred. Please Try again!</p>;

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="scroll_top_bottom_container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1>Scroll to Top and Bottom feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to bottom</button>
      {!loading ? (
        <ul style={{ listStyle: "none" }}>
          {data && data.products && data.products.length
            ? data.products.map((item) => <li key={item.id}>{item.title}</li>)
            : null}
        </ul>
      ) : (
        <div>Loading data...Please wait!</div>
      )}
      <button onClick={handleScrollToTop}>Scroll to top</button>
      <h3 ref={bottomRef}>This is the bottom of the page</h3>
    </div>
  );
};

export default ScrollToTopAndBottom;
