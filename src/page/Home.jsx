import React from "react";
import Cards from "../components/Cards";
import HorizontalScroll from "react-scroll-horizontal";
import Tours from "../components/Tours";
import TopPlace from "../components/TopPlace";
function Home() {
  return (
    <div className="wrapper">
      <HorizontalScroll
        reverseScroll={true}
        config={{
          stiffness: 15,
          damping: 12,
        }}
        animValues={200}
      >
        <Cards />
        <TopPlace />
        <Tours />
      </HorizontalScroll>
    </div>
  );
}

export default Home;
