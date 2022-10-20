import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="py-6 bg-teal-100">
      <div className="w-11/12 text-center mx-auto">
        <small className="footer-text sm:text-sm text-xs font-bold">
          Copyright &copy; {year}. All Rights Reserved.
        </small>
      </div>
    </div>
  );
};

export default Footer;
