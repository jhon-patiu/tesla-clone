import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bg={backgroundImg}>
      <Fade top opposite>
        <ItemText>
          <Title>
            <h1>{title}</h1>
          </Title>
          <Description>
            <p>{description}</p>
          </Description>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade top opposite>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        {title !== "Accessories" && (
          <DownArrow src={"/images/down-arrow.svg"} onClick={handleDownArrow} />
        )}
        {title === "Accessories" && (
          <BackToTop onClick={handleBackToTop}>BACK TO TOP</BackToTop>
        )}
      </Buttons>
    </Wrap>
  );
}

export default Section;

// func
const handleDownArrow = () => {
  let vh = window.innerHeight;
  window.scrollBy({ top: vh, left: 0, behavior: "smooth" });
};

const handleBackToTop = () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ bg }) => `url(./images/${bg});`}
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Title = styled.div`
  font-size: 21px;
  letter-spacing: 2px;
`;
const Description = styled.div`
  margin-top: 0.5em;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 3em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.button`
  background-color: rgb(20, 23, 30);
  height: 44px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100px;
  opacity: 0.75;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  margin: 0 0.5em;
  transition: all 500ms ease;
  :hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    margin-bottom: 0.75em;
    width: 75vw;
  }
`;
const RightButton = styled(LeftButton)`
  background-color: rgb(240, 240, 240);
  color: rgba(23, 26, 32); ;
`;

const DownArrow = styled.img`
  margin: 1em auto;
  height: 40px;
  cursor: pointer;
  animation: animateDown infinite 1.5s;
  transition: all 3s ease;
`;

const Buttons = styled.div`
  text-align: center;
`;

const BackToTop = styled.button`
  color: black;
  background-color: transparent;
  cursor: pointer;
  height: auto;
  width: auto;
  font-size: 14px;
  font-weight: 600;
  padding: 0.5em;
  border: none;
  margin-bottom: 4em;
  animation: animateDown infinite 1.5s;

  :hover {
    border-bottom: 2px solid slategray;
  }
`;
