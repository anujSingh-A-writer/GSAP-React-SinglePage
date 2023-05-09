import React from "react";
import { LayoutProps } from "./types";

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      {props.header}
      {props.main}
      {props.footer}
    </>
  );
};

export default Layout;
