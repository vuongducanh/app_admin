import Request from './../utils/Request'

export function login(param) {
  const data = {
    ...param
  };

  return Request.post('/accounts/Login', data);
}