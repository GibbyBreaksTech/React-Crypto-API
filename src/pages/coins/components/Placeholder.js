// styled
import styled from "styled-components"

export const Placeholder = () => {
  return (
    <StyledPlaceholder>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
    </StyledPlaceholder>
  )
}

const StyledPlaceholder = styled.section`
display: flex;
min-height: 70vh;
flex-direction: column;
  .placeholder {
    width: 100%;
    height: 100px;
    background: #2b2b2bc5;
    margin: 10px auto;
    border-radius: 6px;
  }
`;