import React from "react";
import "./styles.css";
import User from "../User";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-left: 2px solid black;
  border: 3px solid black;
`;

const HeaderName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 50px;
  padding: 0 0 -2rem 0;
  margin: 0 2rem 0 1rem;
  max-height: 5rem;
`;
const H1 = styled.h3`
  min-width: 8rem;
`;

const Num = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  border-left: 1px solid black;
`;

const Boards = styled.div`
  display: flex;
  flex-direction: column;
  height: 30rem;
  width: 30rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const LeaderBoards = styled.div`
  border: 5px solid black;
  border-top: none;
  height: 100%;
`;

// const First = styled.h1`
//   position: absolute;
//   margin-left: 2%;
//   margin-top: 1.5%;
// `;

// const Second = styled.h2`
//   position: absolute;
//   top: 40%;
//   margin-left: 3%;
// `;

// const Third = styled.h3`
//   position: absolute;
//   top: 51%;
//   margin-left: 3%;
// `;

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: 0,
      pfp: [],
      refers: [
        {
          pfp: "./logo192.png",
          refer: 5,
          username: "sara",
          account: "0x443430943304k",
        },
        {
          pfp: "./logo192.png",
          refer: 9,
          username: "jimmy",
          account: "0x2362363ier04k",
        },
        {
          pfp: "./logo192.png",
          refer: 20,
          username: "kartha",
          account: "0x2346236s9304k",
        },
        {
          pfp: "./logo192.png",
          refer: 1,
          username: "man",
          account: "0x3dfbsbs304k",
        },
        {
          pfp: "./logo192.png",
          refer: 3,
          username: "shamia",
          account: "0xtt3ebsdfb304k",
        },
      ],
      username: 0,
    };
  }
  render() {
    this.state.refers.sort(function (a, b) {
      return a.refer - b.refer;
    });
    // const place = (props) => {
    //   if ((props.key = 0)) {
    //     return <First>1st</First>;
    //   }
    // };
    return (
      <Wrapper>
        <Boards>
          <Header>
            <HeaderName>
              <H1>Daily</H1>
            </HeaderName>
            <HeaderName>
              <H1>Rewards</H1>
            </HeaderName>
            <Num>
              <H1>#6</H1>
              <H1>500.0 B</H1>
            </Num>
          </Header>
          <LeaderBoards>
            {this.state.refer.map((index, key) => (
              <User
                key={key}
                place={key}
                username={index.username}
                pfp={index.pfp}
                refers={index.refer}
                account={index.account}
              />
            ))}
            <h3>LoadMore</h3>
          </LeaderBoards>
        </Boards>
      </Wrapper>
    );
  }
}

export default LeaderBoard;
