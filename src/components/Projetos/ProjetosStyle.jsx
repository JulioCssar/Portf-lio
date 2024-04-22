import styled from "styled-components";

export const ContainerProjeto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212121;
  width: 100%;
  height: 100vh;
  img {
    width: 20vw;
    height: 20vh;
    border-radius: 20px;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    height: 100vh;
  }
`;
export const BoxProject = styled.div`
  text-align: center;
  padding: 20px;
  button {
    display: inline-block;
    margin: 10px;
    border-radius: 10px;
    text-transform: uppercase;
    padding: 0.8rem 1.3rem;
    letter-spacing: 0.15rem;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
  }
  button:hover {
    background-color: #fca311;
  }
  @media (max-width: 950px) {
    img {
      width: 70%;
    }
  }
`;
