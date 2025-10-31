"use client";
import ExperienceCard from "@/components/ExperienceCard";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import kayaking from "../assets/kayaking.jpg";
import sunrise from "../assets/sunrise.jpg";
import trail from "../assets/trail.jpg";
import kayaking1 from "../assets/kayaking1.jpg";
import sunrise1 from "../assets/sunrise1.jpg";
import boat from "../assets/boat.jpg";
import jumping from "../assets/jumping.jpg";
import trail1 from "../assets/trail1.jpg";

const data = [
  {
    text: "Kayaking",
    location: "Udupi",
    price: 999,
    img: kayaking,
  },
  {
    text: "Nandi Hills Sunrise",
    location: "Bangalore",
    price: 899,
    img: sunrise,
  },
  {
    text: "Coffee Trail",
    location: "Coorg",
    price: 1299,
    img: trail,
  },
  {
    text: "Kayaking",
    location: "Udupi, Karnataka",
    price: 999,
    img: kayaking1,
  },
  {
    text: "Nandi Hills Sunrise",
    location: "Bangalore",
    price: 899,
    img: sunrise1,
  },
  {
    text: "Boat Cruise",
    location: "Sunderban",
    price: 999,
    img: boat,
  },
  {
    text: "Bunjee Jumping",
    location: "Manali",
    price: 999,
    img: jumping,
  },
  {
    text: "Coffee Trail",
    location: "Coorg",
    price: 1299,
    img: trail1,
  },
];

interface TypesData {
  text: string;
  location: string;
  price: number;
  img: any;
}

function page() {
  const [exp, setExp] = useState<TypesData[]>(data);
  const [text, setText] = useState("");

  useEffect(() => {
    if (text === "") {
      setExp(data);
    }
  }, [data, text]);

  const handleSearch = () => {
    if (!text) {
      return;
    }
    const newData = exp.filter((ele) => ele.text.toLowerCase().includes(text));
    console.log(newData);
    setExp(newData);
  };
  
  return (
    <div>
      <Navbar handleSearch={handleSearch} setText={setText} text={text} />
      <ExperienceCard data={exp} />
    </div>
  );
}

export default page;
