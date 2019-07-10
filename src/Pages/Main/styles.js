import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  background: #fff;
  max-width: 700px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgb(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

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

export const Form = styled.form.attrs(props => ({
  type: "text",
  error: props.error
}))`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 40x;
    font-size: 16px;
  }

  ${props =>
    props.error &&
    css`
      input {
        border: 1px solid #dc3545;
      }
    `}
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg)
  }

  to{
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: "submit",
  disabled: props.loading
}))`
  display: flex;
  align-items: center;
  font-weight: bold;
  border: 0;
  color: #fff;
  background: #4cae4c;

  &:hover {
    background: #48ac33;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2% linear infinite;
        display: flex;
        align-items: center;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  div {
    display: flex;
    flex-direction: row;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
    }
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }
  }
  li {
    padding: 15px 0;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #0062cc;
      text-decoration: none;
    }
    button {
      background: transparent;
      border: 0;
      font-size: 14px;
      color: #fff;
    }
  }
`;
