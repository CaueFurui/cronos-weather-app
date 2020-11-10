import axios from 'axios'

const api = axios.create({
  baseURL: 'api.openweathermap.org/data/2.5/'
})

export default api

// export async function invokeApi(apiRequest) {
//   const response = await axios({
//     url: `https://www.metaweather.com/api`,
//     method: apiRequest.method,
//     headers: {
//       'Content-Type': 'application/json',
//       ...apiRequest.headers,
//     },
//     data: apiRequest.body,
//   });
//   return response.data;
// }

// export async function getTicketEvents(path){
//   const apiRequest = {
//     path,
//     method: 'GET',
//   };
//   return await invokeApi(apiRequest);
// }
