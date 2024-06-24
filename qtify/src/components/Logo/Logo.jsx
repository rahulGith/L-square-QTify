import React from "react";
import LogoImage from "../../assets/logo.png";

const Logo = () => {
  return (
    <div>
      <img className="logo" src={LogoImage} alt="Logo" width={67} height={34} />
    </div>
  );
};

export default Logo;
