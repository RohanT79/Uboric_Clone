import React from "react";
import "./Slider.css";
const colors = [
  "https://www.uboric.com/wp-content/uploads/2021/11/clothing.jpg",
  "https://www.uboric.com/wp-content/uploads/2021/11/electronics.jpg",
  "https://www.uboric.com/wp-content/uploads/2021/11/grocery.jpg",
  "https://www.uboric.com/wp-content/uploads/2021/11/health-care.jpg",
  "https://www.uboric.com/wp-content/uploads/2021/11/kitchenwear.jpg",
];
const delay = 2000;
export function Slider() {
  const [index, setIndex] = React.useState(0);

  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((elem, index) => (
          <div
            className="slide"
            key={index}
            style={{ height: "666px", width: "1349px" }}
          >
            <img src={elem} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
}
