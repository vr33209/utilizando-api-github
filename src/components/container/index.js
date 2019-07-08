import styled, { keyframes, css } from "styled-components";

const Container = styled.div`
  background: #fff;
  max-width: 700px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgb(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: scroll;
  height: 500px;
  width: 100%;

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #3c8dbc;

    background-image: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      color-stop(0.5, rgba(255, 255, 255, 0.2)),
      color-stop(0.5, transparent),
      to(transparent)
    );
  }

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    margin-right: 10px;
  }
`;

export default Container;
