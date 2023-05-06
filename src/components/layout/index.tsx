import React from "react";
import { LayoutProps } from "./types";

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      {props.header}
      <main>{props.main}</main>
      {props.footer}
    </>
  );
};

export default Layout;
