import React from "react";
import useFetch from "./index.jsx";

const UseFetchHookTest = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {},
  );

  // console.log(data, error, loading);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1>Use Fetch Hook</h1>
      {loading ? <h3>Loading data...Please wait!</h3> : null}
      {error ? <h3>{error}</h3> : null}
      <div>
        {data && data.products && data.products.length
          ? data.products.map((product) => (
              <p key={product.id}>{product.title}</p>
            ))
          : null}
      </div>
    </div>
  );
};

export default UseFetchHookTest;
