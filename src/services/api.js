import axios from "axios";

const doc = `https://60bd906bace4d50017aab33c.mockapi.io/librari/Doc`;
const gro = `https://60bd906bace4d50017aab33c.mockapi.io/librari/Group`;

export const getDoc =  () => {
  
  const response = axios.get(doc);
  return response;
  
}
export const getGroup =  () => {
 
  const response =  axios.get(gro);
   return response;
}