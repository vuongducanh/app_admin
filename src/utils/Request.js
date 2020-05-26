/* eslint no-console: 0 */
import axios from 'axios';
const { REACT_APP_API_URL } = process.env;

const headers = {
  'Content-Type': 'application/json'
};


let token = localStorage.getItem('assess_token')

if (token) {
  Object.assign(headers, {
    Authorization: `Bearer ${token}`
  });
}

const client = axios.create({
  baseURL: REACT_APP_API_URL,
  timeout: 5000000,
  headers,
  responseType: 'json',
  transformResponse: [].concat(axios.defaults.transformResponse, data => {
    if (data) {
      if (!data.hasOwnProperty('success') || data.success) return data;
      else {
        const err = { data: { code: 400, ...data } };
        throw err;
      }
    } else {
      const err = { data: { code: 400, message: 'BadRequest' } };
      throw err;
    }
  }),
  validateStatus: status => {
    if (status === 403) {
      console.log('Error 403');
    } else {
      return status >= 200 && status < 300; // default
    }
  }
});

client.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (config.ignoreAuth) {
      config.validateStatus = status => {
        return status >= 200 && status < 300; // default
      };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export function get(url, params = {}, config = {}) {
  Object.assign(config, {
    params
  });
  return client.get(url, { params, ...config });
}

export function post(url, data = {}, config = {}) {
  return client.post(url, data, config);
}

export function put(url, data = {}, config = {}) {
  return client.put(url, data, config);
}

export function path(url, data = {}, config = {}) {
  return client.patch(url, data, config);
}

export function remove(url, params = {}, config = {}) {
  Object.assign(config, {
    params
  });
  return client.delete(url, { params, ...config });
}

export default {
  get,
  put,
  post,
  delete: remove,
  client
};
