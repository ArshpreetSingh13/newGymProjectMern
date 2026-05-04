import axios from "axios";
import { 
    BASE_URL, 
    ADD_BATCH_REGISTRATION, 
    APPROVE_BATCH_REGISTRATION, 
    ALL_BATCH_REGISTRATIONS_ADMIN, 
    ALL_BATCH_REGISTRATIONS_CUSTOMER, 
    ALL_BATCH_REGISTRATIONS_TRAINER 
} from "../endPoints";

function token() {
    let token = localStorage.getItem("token")
    return {
        headers: {
            Authorization: token
        }
    }
}

export function addBatchRequest(data) {
    return axios.post(BASE_URL + ADD_BATCH_REGISTRATION, data, token());
}

export function approveBatchRequest(data) {
    return axios.post(BASE_URL + APPROVE_BATCH_REGISTRATION, data, token());
}

export function allBatchRequestsAdmin(data) {
    return axios.post(BASE_URL + ALL_BATCH_REGISTRATIONS_ADMIN, data, token());
}

export function allBatchRequestsCustomer(data) {
    return axios.post(BASE_URL + ALL_BATCH_REGISTRATIONS_CUSTOMER, data, token());
}

export function allBatchRequestsTrainer(data) {
    return axios.post(BASE_URL + ALL_BATCH_REGISTRATIONS_TRAINER, data, token());
}
