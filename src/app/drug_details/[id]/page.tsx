"use client";
import DetailProduct from "@/components/DrugDetailPage/DrugDetail";
import { DrugItem } from "@/api/api";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const DrugDetail = () => {
  const { id } = useParams() as { id: string };
  const [drug, setDrug] = useState<DrugItem | null>(null);

  useEffect(() => {
    const fetchDrugDetails = async () => {
      try {
        if (id) {
          const response = await fetch(
            `https://66a9be8c613eced4eba6105f.mockapi.io/drugs/${id}`
          );
          const data: DrugItem = await response.json();
          setDrug(data);
        }
      } catch (error) {
        console.error("Error fetching drug details:", error);
      }
    };

    fetchDrugDetails();
  }, [id]);

  return (
    <div>
      <h1>Test{id}</h1>
    </div>
  );
};

export default DrugDetail;
