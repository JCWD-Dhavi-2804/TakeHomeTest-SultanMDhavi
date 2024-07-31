"use client";
import { useRouter } from "next/navigation";
import "./DrugCard.css";

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
    <section className="section">
      <div className="card">
        <div className="card-content">
          <p className="card-title">{name}</p>
          <p className="card-description">{description}</p>
          <p className="card-price">{price}</p>
          <button onClick={handleClick} className="detail-button">
            Detail
          </button>
        </div>
      </div>
    </section>
  );
};

export default DrugCard;
