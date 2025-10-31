import Result from "@/components/Result";
import Navbar from "@/components/Navbar";
import { SetStateAction } from "react";

function page() {
  return (
    <div>
      <Navbar handleSearch={function (): void {
        throw new Error("Function not implemented.");
      } } text={""} setText={function (value: SetStateAction<string>): void {
        throw new Error("Function not implemented.");
      } } />
      <Result />
    </div>
  );
}

export default page;
