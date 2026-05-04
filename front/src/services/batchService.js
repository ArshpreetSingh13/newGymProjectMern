import axios from "axios";
import { ADD_BATCH, ALL_BATCH, BASE_URL, DELETE_BATCH, SINGLE_BATCH, UPDATE_BATCH } from "../endPoints";


function token() {
   let token = localStorage.getItem("token")
   return {
      headers: {
         Authorization: token
      }
   }
}

export function addBatch(data) {
   return axios.post(BASE_URL + ADD_BATCH, data, token())
}

export function allBatch(data) {
   return axios.post(BASE_URL + ALL_BATCH, data, token())
}

export function updateBatch(data) {
   return axios.post(BASE_URL + UPDATE_BATCH, data, token())
}

export function singleBatch(data) {
   return axios.post(BASE_URL + SINGLE_BATCH, data, token())
}

export function deleteBatch(data) {
   return axios.post(BASE_URL + DELETE_BATCH, data, token())
}