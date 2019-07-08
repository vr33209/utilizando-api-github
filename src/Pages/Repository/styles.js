import styled from "styled-components";

export const Loading = styled.h1`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #0062cc;
    font-size: 16px;
    text-decoration: none;
    svg {
      display: flex;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 120px;
      border-radius: 50%;
      margin-top: 20px;
    }

    h1 {
      font-size: 24px;
      margin-top: 10px;
    }

    p {
      margin-top: 10px;
      font-size: 14px;
      color: #666;
      line-height: 1.4;
      text-align: center;
      max-width: 400px;
    }
  }
`;

export const IssueList = styled.div`
  padding: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #0062cc;
          }
        }

        span {
          margin-top: 5px;
          font-size: 12px;
          color: #999;
          border-radius: 2px;
          background: #eee;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }
      p {
        font-size: 12px;
        color: #333;
        font-weight: 20px;
      }
    }
  }
`;
