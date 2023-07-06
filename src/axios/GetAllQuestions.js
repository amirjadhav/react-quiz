import axios from "axios";
import { BASE_URL } from "../util/constants";


const getAllQuestions = async () => {
  try {
    const response = await axios.get(
      BASE_URL + "api/startquiz/"
    );
    return response.data;
  } catch (error) {
    console.error("Error occured at getting questions from server:", error);
    return null
  }
};

export default getAllQuestions;
