import { gsap } from "gsap";
import { useLayoutEffect } from "react";

const DetailsCard: React.FC<{ mainRef: React.MutableRefObject<null> }> = (
  props
) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, props.mainRef); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);
  return (
    <section id="section_details_card">
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
      <div className="card">Card 3</div>
      <div className="card">Card 4</div>
      <div className="card">Card 5</div>
    </section>
  );
};

export default DetailsCard;
