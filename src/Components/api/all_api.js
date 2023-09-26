import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL
console.log(API_URL)

axios.defaults.baseURL = API_URL
export const upcomingEvents = async () => {
  const response = await axios
    .get(`get-upcoming-event`)
    .then((res) => {
      return res.data;
    });
  return response;
};

export const cetagory = async () => {
  const response = await axios
    .get(`get-category`)
    .then((res) => {
      return res.data;
    });
  return response;
};

export const testimonial = async () => {
  const response = await axios
    .get(`get-testimonial`)
    .then((res) => {
      return res.data;
    });
  return response;
};

export const faqs = async () => {
  const response = await axios
    .get(`get-client-page-content`)
    .then((res) => {
      return res.data;
    });
  return response;
};

export const blogs = async () => {
  const response = await axios
    .get(`get-blog-page-content`)
    .then((res) => {
      return res.data;
    });
  return response;
};

export const events = async () => {
  const response = await axios
    .get(`get-latest_event`)
    .then((res) => {
      return res.data;
    });
  return response;
};

export const offerss = async () => {
  const response = await axios
    .get(`get-offer-page-content`)
    .then((res) => {
      return res.data;
    });
  return response;
};

export const homeBanner = async () => {
  const response = await axios
    .get(`get-banner-content`)
    .then((res) => {
      return res.data;
    });
  return response;
};

export const landings = async () => {
  const response = await axios
    .get(`get-home-page-content`)
    .then((res) => {
      return res.data;
    });
  return response;
};

export const winner = async () => {
  const response = await axios
    .get(`get-images`)
    .then((res) => {
      return res.data;
    });
  return response;
};

export const full_blog = async (id) => {
  const response = await axios
    .get(`full-blog/${id}`)
    .then((res) => {
      return res.data;
    });
  return response;
};

