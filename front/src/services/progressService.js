import axios from "axios";
import { ADD_PROGRESS, ALL_PROGRESS, BASE_URL, DELETE_PROGRESS, SINGLE_PROGRESS, UPDATE_PROGRESS } from "../endPoints";


function token() {
    let token = localStorage.getItem("token")
    return {
        headers: {
            Authorization: token
        }
    }
}


export function addProgress(data) {
   return axios.post(BASE_URL + ADD_PROGRESS, data, token())
}
export function allProgress(data) {
   return axios.post(BASE_URL + ALL_PROGRESS, data, token())
}
export function updateProgress(data) {
   return axios.post(BASE_URL + UPDATE_PROGRESS, data, token())
}
export function singleProgress(data) {
   return axios.post(BASE_URL + SINGLE_PROGRESS, data, token())
}
export function deleteProgress(data) {
   return axios.post(BASE_URL + DELETE_PROGRESS, data, token())
}