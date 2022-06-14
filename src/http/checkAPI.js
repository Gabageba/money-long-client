import {$authHost} from './index';

export const checkToText = async (img) => {
  const {data} = await $authHost.post('api/check', img)
  return data
}
