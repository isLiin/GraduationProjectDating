import "./App.scss";
import React, { useState, useEffect } from "react";
import ViewHeader from "./Header/ViewHeader";
import { getBirth } from "./Common/DataComon";

function App() {

  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    fetch("/api/v1/products/getAllAccounts")
      .then((res) => res.json())
      .then((data) => setAccounts(data.data));
  }, []);

  const infoUser = (account) => {
    return (
      <div className="cardInfo" key={account.account_id}>
        <div className="groupImages">
          {account.account_images.map((image, index) =>
            (<div className="image-item" key={index}>{image}</div>))
          }
        </div>
        <div className="infoUser">
          <div className="infoUser-name">{account.account_name}</div>
          <div className="infoUser-birth">{getBirth(account.account_birth)}</div>
          <div className="infoUser-gender">{account.account_gender}</div>
        </div>
      </div>
    )
  }

  return (
    <div className='main'>
      <ViewHeader />
      <div className="App">
        {accounts.map(account => infoUser(account))}
      </div>
    </div>
  );
}

export default App;
