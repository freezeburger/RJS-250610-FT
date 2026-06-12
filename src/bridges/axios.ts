import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5050',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

instance.interceptors.request.use((config) => {
  console.log('Request sent with config: ', config);

  return {
    ...config,
    url: config.url?.replace('/api/', '') || config.url,
  };
},
  (error) => {
    console.error('Error in request: ', error);
    return Promise.reject(error);
  }
);

export { instance as axios };
