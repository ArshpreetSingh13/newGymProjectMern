import axios from "axios";
import { ADD_EXCERCISE, ALL_EXCERCISE, BASE_URL, DELETE_EXCERCISE, SINGLE_EXCERCISE, UPDATE_EXCERCISE } from "../endPoints";

function token() {
    let token = localStorage.getItem("token")
    return {
        headers: {
            Authorization: token
        }
    }
}

export function addExcercise(data) {
    return axios.post(BASE_URL + ADD_EXCERCISE, data, token())
}
export function allExcercise(data) {
    return axios.post(BASE_URL + ALL_EXCERCISE, data, token())
}

export function updateExcercise(data) {
    return axios.post(BASE_URL + UPDATE_EXCERCISE, data, token())
}

export function singleExcercise(data) {
    return axios.post(BASE_URL + SINGLE_EXCERCISE, data, token())
}

export function deleteExcercise(data) {
    return axios.post(BASE_URL + DELETE_EXCERCISE, data, token())
}