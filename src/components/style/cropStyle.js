import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #00000050;
  top: 0px;
  left: 0px;
  z-index: 20;
  position: fixed;
  box-sizing: border-box;
  overflow: hidden;
`;

export const PopupBox = styled.div`
  position: relative;
  width: 90%;
  max-width: 1000px;
  margin: auto;
  height: 80vh;
  top: 10vh;
  background: #fff;
  overflow-x: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 768px) {
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

export const Close = styled.div`
  content: "x";
  cursor: pointer;
  position: relative;
  top: 0;
  margin-left: auto;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  line-height: 30px;
  text-align: center;
  font-size: 30px;
  display: inline-block;
  &:hover {
    background-color: lightgray;
  }
`;

export const Main = styled.div`
  width: 100%;
  top: 40px;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const LeftDiv = styled.div`
  width: calc(100% - 100px);
  height: 500px;
  box-sizing: border-box;
  overflow: overlay;
  background-size: contain;
  & > img {
    background-repeat: no-repeat;
    margin: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const RightDiv = styled.div`
  width: 100px;
  height: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 30px;

  & > button {
    border-radius: 15px;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    & > button {
    margin: 0 10px ;
  }
  }
`;
