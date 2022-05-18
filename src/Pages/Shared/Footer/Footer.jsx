import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="py-8 bg-cyan-200">
      <div className="w-11/12 text-center mx-auto">
        <small className="footer-text sm:text-sm text-xs font-bold">
          Copyright &copy; {year}. Motors
        </small>
      </div>
    </div>
  );
};

export default Footer;