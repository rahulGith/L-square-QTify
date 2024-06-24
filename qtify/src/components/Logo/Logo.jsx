import React from "react";
import LogoImage from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={LogoImage} alt="Logo" width={67} height={34} />
    </div>
  );
};

export default Logo;
