import React from 'react';
import {useSelector} from 'react-redux';
import AccountCard from '../../../components/AccountCard/AccountCard';

const AccountsList = () => {
  const accounts = useSelector(state => state.account.accounts)

  return (
    <div>
      {accounts.map(a => {
        return  <AccountCard account={a} key={a.id}/>
      })}
    </div>
  );
};

export default AccountsList;