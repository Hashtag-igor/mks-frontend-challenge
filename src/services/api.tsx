import axios from "axios";

const baseURL ="https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products"

const api = axios.create({
  baseURL,
})

export default api;