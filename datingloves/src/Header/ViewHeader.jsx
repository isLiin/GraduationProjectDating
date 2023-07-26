import "./HeaderStyle.scss";
import React from "react";
import { BiAdjust, BiShieldQuarter } from "react-icons/bi";
import { dataUserDefault } from "../Common/DataComon";

function ViewsHeader(props) {
  const iconUser = (account) => {
    return (
      <button className="btn btn-account">
        <img className="account-alt" src={account.avt} alt={account.name} />
        <span className="account-name">{account.name}</span>
      </button>
    );
  };

  return (
    <div id="viewHeader" className="viewHeader">
      <div className="viewsOption">
        <div className="profile">{iconUser(dataUserDefault)}</div>
        <div className="author">
          <button
            className="btn btn-theme"
            onClick={() => props.evt(!props.theme)}
          >
            <BiAdjust />
          </button>

          <button
            className="btn btn-shield"
            onClick={() => alert("this is Shield")}
          >
            <BiShieldQuarter />
          </button>
        </div>
      </div>
      <div className="viewsMatches">
        <div className="header-matches">
          <div className="matches">matches</div>
          <div className="message">message</div>
        </div>
        <div className="group-matches">
          <div className="user-matche">
            asd
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewsHeader;
