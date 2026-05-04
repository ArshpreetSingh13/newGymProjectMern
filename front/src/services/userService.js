import axios from "axios"
import { ADMIN_DASHBOARD, ALL_USERS, BASE_URL, CHANGEPASSWORD_CUSTOMER, LOGIN, REGISTER, TRAINER_DASHBOARD } from "../endPoints"

function token() {
   let token = localStorage.getItem("token")
   return {
      headers: {
         Authorization: token
      }
   }
}

export function register(data) {
   return axios.post(BASE_URL + REGISTER, data)
}

export function login(data) {
   return axios.post(BASE_URL + LOGIN, data)
}

export function allUsers(data) {
   return axios.post(BASE_URL + ALL_USERS, data, token())
}

export function adminDashboard(data) {
   return axios.post(BASE_URL + ADMIN_DASHBOARD, data, token())
}
export function trainerDashboard(data) {
   return axios.post(BASE_URL + TRAINER_DASHBOARD, data, token())
}
export function changePassword(data) {
   return axios.post(BASE_URL + CHANGEPASSWORD_CUSTOMER, data, token())
}

