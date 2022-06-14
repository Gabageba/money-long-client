import {$authHost} from './index';

export const createRecord = async ( type, userId, money, accountId, categoryId) => {
  const {data} = await $authHost.post('/api/record', { type, userId, money, accountId, categoryId})
  return data
}

export const fetchRecord = async (userId, accountId, limit, page) => {
  const {data} = await $authHost.get('api/record', {params: {userId, accountId, limit, page}})
  return data
}

export const updateRecord = async (id, type, money, accountId, categoryId, userId) => {
  const {data} = await $authHost.put('api/record', {id, type, money, accountId, categoryId, userId})
  return data
}

export const deleteRecord = async (id, userId) => {
  const {data} = await $authHost.delete('api/record', {params: {id}})
  return data
}

