import jwt_decode from "jwt-decode";
import {$authHost, $host} from './index';

export const registration = async (email, password, name) => {
  const {data} = await $host.post('api/user/registration', {email, password, role: 'USER', name})
  localStorage.setItem('token', data)
  return jwt_decode(data)
}

export const login = async (email, password) => {
  const {data} = await $host.post('api/user/login', {email, password})
  localStorage.setItem('token', data)
  return jwt_decode(data)

}

export const check = async () => {
  const {data} = await $authHost.get('api/user/auth' )
  localStorage.setItem('token', data)
  return jwt_decode(data)
}
