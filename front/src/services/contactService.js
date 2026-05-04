import axios from "axios";
import { ADD_CONTACT, ALL_CONTACTS, BASE_URL, UPDATE_CONTACT } from "../endPoints";


function token() {
    let token = localStorage.getItem("token")
    return {
        headers: {
            Authorization: token
        }
    }
}

export function addContact(data) {
    return axios.post(BASE_URL + ADD_CONTACT, data, token())
}

export function updateContact(data) {
    return axios.post(BASE_URL + UPDATE_CONTACT, data, token())
}

export function allContacts(data) {
    return axios.post(BASE_URL + ALL_CONTACTS, data, token())
}