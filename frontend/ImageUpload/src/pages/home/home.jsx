import React from "react";
import Navbar from "../../components/Navbar";
import { TableMain } from "../../components/Table";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-96 flex justify-center align-middle mt-20">
        <TableMain />
      </div>
    </>
  );
};

export default Home;
