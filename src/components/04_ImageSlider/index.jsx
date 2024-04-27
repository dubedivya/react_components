import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css"; // eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  //Getting Images function
  const fetchImages = async (getUrl) => {
    try {
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);

      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }

      const data = await response.json();
      console.log(data);

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  };

  //handle Previous btn click
  const handlePrevious = () => {
    setCurrentSlideIndex(
      currentSlideIndex === 0 ? images.length - 1 : currentSlideIndex - 1,
    );
  };

  //handle Next btn click
  const handleNext = () => {
    setCurrentSlideIndex(
      currentSlideIndex === images.length - 1 ? 0 : currentSlideIndex + 1,
    );
  };

  //Fetching Images
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  //Loading UI
  // if (loading) {
  //   return <div>Loading....Please wait!</div>;
  // }

  //Error
  if (errorMsg !== null) {
    return <div>Error occurred : {errorMsg}</div>;
  }

  return (
    <>
      {!loading && (
        <div className="container">
          <BsArrowLeftCircleFill
            onClick={handlePrevious}
            className="arrow arrow-left"
          />
          {images && images.length
            ? images.map((imageItem, index) => (
                <img
                  key={imageItem.id}
                  src={imageItem.download_url}
                  alt={imageItem.download_url}
                  className={
                    currentSlideIndex === index
                      ? "current-image"
                      : "current-image hide-current-image"
                  }
                />
              ))
            : null}
          <BsArrowRightCircleFill
            onClick={handleNext}
            className="arrow arrow-right"
          />
          <span className="circle-indicators">
            {images && images.length
              ? images.map((_, index) => (
                  <button
                    key={index}
                    className={
                      currentSlideIndex === index
                        ? "current-indicator"
                        : "current-indicator inactive-indicator"
                    }
                    onClick={() => setCurrentSlideIndex(index)}
                  />
                ))
              : null}
          </span>
        </div>
      )}
      {loading && <div className="loading">Loading....Please wait!</div>}
    </>
  );
};

export default ImageSlider;
