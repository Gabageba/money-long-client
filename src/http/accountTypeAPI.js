import {$authHost} from './index';

export const fetchAccountType = async () => {
  const {data} = await $authHost.get('api/accountType')
  return data
}
