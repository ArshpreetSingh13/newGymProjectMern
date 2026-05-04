import axios from "axios";
import { ADD_DIET, ALL_DIET, BASE_URL, DELETE_DIET, SINGLE_DIET, UPDATE_DIET } from "../endPoints";


function token() {
   let token = localStorage.getItem("token")
   return {
      headers: {
         Authorization: token
      }
   }
}

export function allDiet(data) {
    return axios.post(BASE_URL + ALL_DIET, data, token())
}
export function addDiet(data) {
    return axios.post(BASE_URL + ADD_DIET, data, token())
}
export function singleDiet(data) {
    return axios.post(BASE_URL + SINGLE_DIET, data, token())
}
export function updateDiet(data) {
    return axios.post(BASE_URL + UPDATE_DIET, data, token())
}
export function deleteDiet(data) {
    return axios.post(BASE_URL + DELETE_DIET, data, token())
}