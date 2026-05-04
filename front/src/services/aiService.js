import axios from "axios";
import { AI_QUERY, BASE_URL } from "../endPoints";

export function askAi(data) {
    return axios.post(BASE_URL + AI_QUERY, data)
}
