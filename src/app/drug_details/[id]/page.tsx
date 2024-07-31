import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";

interface Drug {
  id: string;
  name: string;
  description: string;
  price: number;
}

const fetchDrugDetails = async (id: string): Promise<Drug | null> => {
  try {
    const res = await fetch(
      `https://66a9be8c613eced4eba6105f.mockapi.io/${id}`
    );
    if (!res.ok) {
      return null;
    }
    const drug = await res.json();
    return drug;
  } catch (error) {
    console.error("Error fetching drug details:", error);
    return null;
  }
};

const DrugDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const drug = await fetchDrugDetails(id);

  if (!drug) {
    notFound();
  }

  return (
    <div className="drug-detail-page">
      <h1>{drug.name}</h1>
      <p>{drug.description}</p>
      <p>Price: ${drug.price}</p>
      <a href="/home">Back to Home</a>
    </div>
  );
};

export default DrugDetailPage;
