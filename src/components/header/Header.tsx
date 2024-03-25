import React from "react";
import { Name } from "../name/Name";

interface HeaderProps {
  title: string;
  subTitle: string;
}

export function Header(props: HeaderProps) {
  const { title, subTitle } = props;

  return (
    <div>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>

      <Name/>
    
    </div>
  );
}
