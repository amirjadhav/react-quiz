import axios from "axios";


const getAllQuestions = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/startquiz/"
    );
    return response.data;
  } catch (error) {
    console.error("Error occured at getting questions from server:", error);
    return null
  }
};

export default getAllQuestions;
