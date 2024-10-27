import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-de-notas-com-node-express-e-knex.onrender.com",
});
