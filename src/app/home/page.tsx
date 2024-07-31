"use client";
import React, { useEffect, useState } from "react";
import DrugCard from "@/components/HomePage/DrugCard";
import Hero from "@/components/HomePage/hero";
import Navbar from "@/components/HomePage/Navbar";
import { useParams } from "next/navigation";

interface DrugItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

const Page = () => {
  const [drugs, setDrugs] = useState<DrugItem[]>([]);
  const { id } = useParams() as { id: string };

  useEffect(() => {
    const fetchDrugs = async () => {
      try {
        const response = await fetch(
          `https://66a9be8c613eced4eba6105f.mockapi.io/drugs/${id}`
        );
        const data = await response.json();

        // If data is an object containing an array, access it properly
        if (Array.isArray(data)) {
          setDrugs(data);
        } else if (data && typeof data === "object" && "items" in data) {
          setDrugs(data.items); // Adjust this as per actual API response
        } else {
          console.error("Unexpected API response structure:", data);
          setDrugs([]);
        }
      } catch (error) {
        console.error("Error fetching drugs:", error);
        setDrugs([]);
      }
    };

    fetchDrugs();
  }, [id]);

  return (
    <div>
      <Navbar />
      <Hero />
      <section>
        <h1 className="font-bold text-5xl bg-green-600 md:text-7xl text-white text-center pt-12 md:pt-2">
          Our Products
        </h1>
        <div className="grid grid-cols-1 bg-green-600 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
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
