import React from "react";

interface FooterProps {
  contactPhone: string;
  currentDate: string;
  rights: string;
}

export function Footer(props: FooterProps) {
  const { contactPhone,currentDate, rights } = props;
  // currentDate=new Date().toString

  return (
    <div>
      <span className="dataFooter">{currentDate} </span>
      <span className="dataFooter">{rights}</span>
      <span className="dataFooter"> {contactPhone} </span>
    </div>
  );
}
