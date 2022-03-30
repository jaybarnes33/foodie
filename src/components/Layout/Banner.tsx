import React from "react";

interface IBannerProps {
  image?: string;
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
            color: white;
            background-color: #0e0d0daa;
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
