import { getDrugsById, DrugItem } from "@/api/api";
import { GetStaticProps } from "next";

interface DetailProps {
  drugs: DrugItem | null;
}

const DrugDetail = ({ drugs }: DetailProps) => {
  console.log("drugs : ", drugs?.price);
  if (!drugs) {
    return <div>Drugs not found</div>;
  }

  return (
    <main className="bg-white text-black w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col space-y-2">
        <h1>{drugs.name}</h1>
        <p>{drugs.description}</p>
        <p>Price: {drugs.price}</p>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps<DetailProps> = async ({
  params,
}) => {
  const id = params?.id as string | undefined;
  if (!id) {
    return { props: { drugs: null }, revalidate: 3 };
  }

  try {
    const drugs = await getDrugsById(id);
    return { props: { drugs }, revalidate: 3 };
  } catch (error) {
    console.error("Error fetching drugs:", error);
    return { props: { drugs: null }, revalidate: 3 };
  }
};

export default DrugDetail;
