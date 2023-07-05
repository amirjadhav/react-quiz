import axios from "axios";

const GetResult = async (answers) => {
    try {
        const response = await axios
            .post("http://localhost:3000/api/submitquiz", answers)

        return response.data;
    }
    catch (error) {
        console.error("Error while getting quiz result" + error);
        return null;
    }
}

export default GetResult;