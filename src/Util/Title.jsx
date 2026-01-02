import React from "react";

const Title = ({ children }) => {
  return (
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold text-white italic tagesschrift">
      {children}
    </h2>
  );
};

export default Title;
