import axios from "axios";
import { ALL_CUSTOMERS, BASE_URL, DELETE_CUSTOMER, SINGLE_CUSTOMER, UPDATE_CUSTOMER } from "../endPoints";

function token() {
    let token = localStorage.getItem("token")
    return {
        headers: {
            Authorization: token
        }
    }
}

export function allCustomer(data) {
    return axios.post(BASE_URL + ALL_CUSTOMERS, data, token())
}
export function singleCustomer(data) {
    return axios.post(BASE_URL + SINGLE_CUSTOMER, data, token())
}
export function updateCustomer(data) {
    return axios.post(BASE_URL + UPDATE_CUSTOMER, data, token())
}
export function deleteCustomer(data) {
    return axios.post(BASE_URL + DELETE_CUSTOMER, data, token())
}
export function changePasswordCustomer(data) {
    return axios.post(BASE_URL + DELETE_CUSTOMER, data, token())
}
