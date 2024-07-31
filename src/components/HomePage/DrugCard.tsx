"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface DrugCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

const DrugCard: FC<DrugCardProps> = ({ id, name, description, price }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/drug_details/${id}`);
  };

  return (
    <section className="py-12 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
      <div className="max-w-sm bg-green-500 rounded shadow-lg m-4">
        <div className="px-6 py-4">
          <p className="font-bold text-xl text-white mb-2">{name}</p>
          <p className="text-gray-200 py-2 text-base">{description}</p>
          <p className="text-gray-200 py-2 text-base">{price}</p>
          <button
            onClick={handleClick}
            className="mt-2 p-2 mb-2 my-5 bg-blue-700 text-white rounded-md hover:bg-blue-800"
          >
            Detail
          </button>
        </div>
      </div>
    </section>
  );
};

export default DrugCard;
