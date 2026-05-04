import axios from "axios";
import { ADD_TRAINERS, BASE_URL, DELETE_TRAINER, SINGLE_TRAINER, UPDATE_TRAINERS } from "../endPoints";
import { ALL_TRAINERS } from "../endPoints";

function token() {
   let token = localStorage.getItem("token")
   return {
      headers: {
         Authorization: token
      }
   }
}

export function addTrainers(data) {
   return axios.post(BASE_URL + ADD_TRAINERS, data, token())
}

export function allTrainers(data) {
   return axios.post(BASE_URL + ALL_TRAINERS, data, token())
}

export function updateTrainers(data) {
   return axios.post(BASE_URL + UPDATE_TRAINERS, data, token())
}

export function singleTrainer(data) {
   return axios.post(BASE_URL + SINGLE_TRAINER, data, token())
}

export function deleteTrainer(data) {
   return axios.post(BASE_URL + DELETE_TRAINER, data, token())
}
