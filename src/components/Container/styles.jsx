import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.625rem 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    font-size: 87.5%;
    flex-direction: column-reverse;
  }

  .logoImg {
    width: 500px;
    height: 100px;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .infoPix {
    display: flex;
    flex-direction: column;
    .inputInfo {
      margin: 0.5rem 0.5rem;
    }
  }
  article {
    width: 18.75rem;
    height: 16.875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default Wrapper;
