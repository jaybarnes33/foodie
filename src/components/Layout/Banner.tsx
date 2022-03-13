import React from "react";

interface IBannerProps {
  image: string;
  children: React.ReactNode;
  height: string;
}
const Banner = ({ image, children, height }: IBannerProps) => {
  return (
    <>
      <div className="d-flex px-4  align-items-center">{children}</div>
      <style jsx>
        {`
          div {
            text-align: center;
            color: var(--bs-light);
            background-color: #1a1a1aaa;
            background-blend-mode: overlay;
            background-image: url(${image});
            background-size: cover;
            background-position: center;
            min-height: ${height};
          }
        `}
      </style>
    </>
  );
};

export default Banner;
