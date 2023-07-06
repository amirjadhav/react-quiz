import axios from "axios";
import { BASE_URL } from "../util/constants";

const GetResult = async (answers) => {
    try {
        const response = await axios
            .post(BASE_URL + "api/submitquiz", answers)

        return response.data;
    }
    catch (error) {
        console.error("Error while getting quiz result" + error);
        return null;
    }
}

export default GetResult;