import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getServices = () => API.get("/services");
export const getServiceById = (id) => API.get(`/services/${id}`);
export const createBooking = (payload) => API.post("/bookings", payload);
export const getAbout = () => API.get("/about");
