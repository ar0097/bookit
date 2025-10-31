import Details from "@/components/Details";
import Navbar from "@/components/Navbar";
import React from "react";

function page() {
  return (
    <div>
      <Navbar handleSearch={function (): void {
        throw new Error("Function not implemented.");
      } } text={""} setText={function (value: React.SetStateAction<string>): void {
        throw new Error("Function not implemented.");
      } } />
      <Details />
    </div>
  );
}

export default page;
