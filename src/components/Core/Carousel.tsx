import React from "react";
import CarouselWrapper from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Carousel = ({ children }: { children: React.ReactNode }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 50,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 50,
    },
  };
  return (
    <CarouselWrapper
      partialVisbile
      infinite
      autoPlay={false}
      responsive={responsive}
      keyBoardControl={true}
    >
      {children}
    </CarouselWrapper>
  );
};

export default Carousel;
