import React from "react";
import { LayoutProps } from "./types";
import { useMediaQuery } from "react-responsive";
import Marquee from "react-gsap-marquee";

const Layout: React.FC<LayoutProps> = (props) => {
  const { header, main, footer } = props;
  const isMobile = useMediaQuery({ query: `(max-width: 990px)` });
  let mainContent = main;

  if (isMobile) {
    mainContent = (
      <main>
        <section>
          <Marquee>
            <h1 className="font-semibold text-2xl px-10">Please access this website using a desktop or laptop.</h1>
          </Marquee>
        </section>
      </main>
    );
  }
  return (
    <>
      {props.header}
      {mainContent}
      {props.footer}
    </>
  );
};

export default Layout;
