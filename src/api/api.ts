import axios from "axios";

export const BASE_URL = "https://66a9be8c613eced4eba6105f.mockapi.io/";

export interface DrugItem {
  id: string;
  name: string;
  description: string;
  image?: any;
  price: number;
  category: string;
}

export const getDrugs = async (): Promise<DrugItem[]> => {
  try {
    const response = await axios.get(BASE_URL + "drugs");
    return response.data;
  } catch (error) {
    console.error("Error fetching drugs:", error);
    throw new Error("Failed to fetch drugs");
  }
};

export const getDrugsById = async (id: string): Promise<DrugItem> => {
  try {
    const response = await axios.get(BASE_URL + `drugs/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching drugs by ID:", error);
    throw new Error("Failed to fetch drugs by ID");
  }
};

export const postDrugs = async (data: DrugItem): Promise<DrugItem> => {
  const body: DrugItem = {
    id: data?.id,
    name: data.name,
    description: data.description,
    price: data.price,
    image: data.image,
    category: data.category,
  };
  try {
    const response = await axios.post(BASE_URL + "drugs", body);
    return response.data;
  } catch (error) {
    console.error("Error posting drugs:", error);
    throw new Error("Failed to post drugs");
  }
};

export const editDrugs = async (
  data: DrugItem,
  id: string
): Promise<DrugItem> => {
  const body = {
    name: data.name,
    description: data.description,
    price: data.price,
    image: data.image,
    category: data.category,
  };
  try {
    const response = await axios.put(BASE_URL + `drugs/${id}`, body);
    return response.data;
  } catch (error) {
    console.error("Error editing drugs:", error);
    throw new Error("Failed to edit drugs");
  }
};

export const deleteDrugs = async (id: string): Promise<void> => {
  try {
    await axios.delete(BASE_URL + `drugs/${id}`);
  } catch (error) {
    console.error("Error deleting drugs:", error);
    throw new Error("Failed to delete drugs");
  }
};
