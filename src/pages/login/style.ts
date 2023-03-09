import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 40px;
  gap: 32px;

  position: absolute;
  width: 400px;
  height: 343px;
  left: calc(50% - 400px / 2);
  top: calc(50% - 343px / 2 + 18px);

  background: #ffffff;
  box-shadow: 5px 6px 60px rgba(128, 128, 128, 0.5);
  border-radius: 16px;

  > h2 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 25px;

    color: #262626;
  }

  > fieldset > div {
    width: 380px;

    background: #f8f9fa;
    border: 3px solid #f8f9fa;
    border-radius: 8px;
  }

  > fieldset > p {
    color: red;
    margin-left: 3px;
  }

  > button {
    padding: 12px;

    width: 380px;
    height: 40px;

    background: #2380fb;
    border: 1px solid #2380fb;
    border-radius: 8px;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 12px;

    color: #f5f1ef;

    cursor: pointer;

    transition: 0.4s;
  }

  > button:hover {
    background: #0747a6;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 6px;
  }

  > div > h3 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;
    text-align: center;

    color: #808080;
  }

  > div > button {
    border: none;
    background: transparent;

    font-family: "Nunito";
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 19px;
    text-align: center;

    color: #262626;
  }
`;

export default StyledForm;
