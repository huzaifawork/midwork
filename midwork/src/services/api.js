// import axios from "axios";

// const url = "http://localhost:5000";

// export async function sendPriceViaAxios(product){
//     console.log("Axios api reached.", product);
//     return await axios.post(url,product);
// }
import axios from "axios";
export const url = "https://midwork-silk.vercel.app"; // Update to your backend URL

export const addproduct = (ProductData) => {
  axios.post(`${url}/dashboard/addproduct`, ProductData);
};

export const getProduct = async () => {
  return await axios.get(`${url}/dashboard/addproduct`);
};