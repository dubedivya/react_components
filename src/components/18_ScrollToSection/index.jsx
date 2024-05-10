import React, { useRef } from "react";

const ScrollToSection = () => {
  const ref = useRef();
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
        marginBottom: "15px",
        marginTop: "30px",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
        marginBottom: "15px",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
        marginBottom: "15px",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
        marginBottom: "15px",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
        marginBottom: "15px",
      },
    },
  ];

  function handleScrollToSpecificSection() {
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

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
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSpecificSection}>Click to scroll</button>
      {data &&
        data.map((item, index) => (
          <div key={index} ref={index === 4 ? ref : null} style={item.style}>
            <h3>{item.label}</h3>
          </div>
        ))}
    </div>
  );
};

export default ScrollToSection;
