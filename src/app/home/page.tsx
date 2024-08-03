"use client";
import React, { useEffect, useState } from "react";
import DrugCard from "@/components/HomePage/DrugCard";
import Hero from "@/components/HomePage/hero";
import Navbar from "@/components/HomePage/Navbar";

interface DrugItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

const Page = () => {
  const [drugs, setDrugs] = useState<DrugItem[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchDrugs = async () => {
      try {
        const response = await fetch(
          "https://66a9be8c613eced4eba6105f.mockapi.io/drugs"
        );

        if (!response.ok) {
          setMessage(
            `Error Fetching Data: ${response.status} ${response.statusText}`
          );
          return;
        }

        const data: DrugItem[] = await response.json();
        setDrugs(data);
      } catch (error: any) {
        setMessage("Error");
        console.error(error);
      }
    };

    fetchDrugs();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <section>
        <h1 className="text-white bg-green-600 font-bold text-3xl text-center pt-0 md:text-4xl md:pt-0">
          Our Products
        </h1>
        <div className="grid gap-6 p-6 bg-green-600 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {drugs.map((drug, index) => (
            <DrugCard
              key={index}
              id={drug.id}
              name={drug.name}
              description={drug.description}
              price={drug.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
