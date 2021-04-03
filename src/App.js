import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpences } from './components/IncomeExpences';
import { TransactionList } from './components/TransactionList';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Balance />
      <IncomeExpences />
      <TransactionList />
    </div>
  );
}

export default App;
