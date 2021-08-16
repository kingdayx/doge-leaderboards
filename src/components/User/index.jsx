import React from "react";
import "./styles.css";
import styled from "styled-components";

const Users = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 1rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
`;

export default function User({ pfp, username, refers, account, place }) {
  console.log(pfp);
  return (
    <Users>
      <h1 className="header">{place} </h1>
      <img src={pfp} alt="pfp" style={{ width: 50, height: 50 }} />
      <h4 className="username">{username}</h4>
      <h5 className="refers">{refers}</h5>
      <h5 className="address">{account}</h5>
    </Users>
  );
}
