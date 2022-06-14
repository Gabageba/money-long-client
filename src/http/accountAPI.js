import {$authHost} from './index';

export const createAccount = async (name, color, userId, money, accountTypeId, filter) => {
  const {data} = await $authHost.post('/api/account', {name, color, userId, money, accountTypeId, filter})
  return data
}

export const fetchOneAccount = async (id) => {
  const {data} = await $authHost.get('api/account/' + id)
  return data
}

export const deleteAccount = async (id) => {
  const {data} = await $authHost.delete('api/account', {params: {id}})
  return data
}

export const fetchAccounts = async (userId, filter) => {
  const {data} = await $authHost.get('api/account', {params: {userId, filter}})
  return data
}

export const updateAccount = async (id, name, color, money, accountTypeId) => {
  const {data} = await $authHost.put('api/account', {id, name, color, money, accountTypeId})
  return data
}

