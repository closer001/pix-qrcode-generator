import styled from "styled-components";

const Wrapper = styled.div`
  width: 56.25rem;
  height: 37.5rem;

  padding: 0.625rem 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .infoPix {
    display: flex;
    flex-direction: column;
    .inputInfo {
      margin: 0.5rem 0.5rem;
    }
  }
  article {
    width: 300px;
    height: 270px;
    img {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`;

export default Wrapper;
