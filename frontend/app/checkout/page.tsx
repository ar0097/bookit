import CheckoutForm from "@/components/CheckoutForm";
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
      <CheckoutForm />
    </div>
  );
}

export default page;
