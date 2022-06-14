import {$authHost} from './index';

export const fetchCategory = async () => {
  const {data} = await $authHost.get('api/category')
  return data
}
