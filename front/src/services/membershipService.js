import axios from "axios";
import { ADD_MEMBERSHIP, ALL_MEMBERSHIP, BASE_URL, DELETE_MEMBERSHIP, SINGLE_MEMBERSHIP, UPDATE_BATCH, UPDATE_MEMBERSHIP } from "../endPoints";




function token() {
   let token = localStorage.getItem("token")
   return {
      headers: {
         Authorization: token
      }
   }
}

export function addMembership(data) {
   return axios.post(BASE_URL + ADD_MEMBERSHIP, data, token())
}

export function allMembership(data) {
   return axios.post(BASE_URL + ALL_MEMBERSHIP, data, token())
}

export function updateMembership(data) {
   return axios.post(BASE_URL + UPDATE_MEMBERSHIP, data, token())
}
export function singleMembership(data) {
   return axios.post(BASE_URL + SINGLE_MEMBERSHIP, data, token())
}
export function deleteMembership(data) {
   return axios.post(BASE_URL + DELETE_MEMBERSHIP, data, token())
}