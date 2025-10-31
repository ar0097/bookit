"use client";
import Details from "@/components/Details";
import Navbar from "@/components/Navbar";
import { useParams } from "next/navigation";
import React from "react";

function page() {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <Details id={id} />
    </div>
  );
}

export default page;
