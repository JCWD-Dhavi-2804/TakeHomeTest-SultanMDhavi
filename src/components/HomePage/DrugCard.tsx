import { useRouter } from "next/navigation";

interface DrugCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

const DrugCard: React.FC<DrugCardProps> = ({
  id,
  name,
  description,
  price,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/drug_details/${id}`);
  };

  return (
    <section className="py-0">
      <div className="max-w-xs bg-green-700 rounded-lg shadow-lg m-4">
        <div className="p-6">
          <p className="font-bold text-2xl text-white mb-2">{name}</p>
          <p className="text-gray-100 py-2">{description}</p>
          <p className="text-gray-100 py-2">{price}</p>
          <button
            onClick={handleClick}
            className="mt-2 mb-2 p-2 bg-blue-600 text-white rounded-md transition-colors duration-300 ease-in-out hover:bg-blue-700"
          >
            Detail
          </button>
        </div>
      </div>
    </section>
  );
};

export default DrugCard;
