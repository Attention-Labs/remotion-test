/* eslint-disable react/button-has-type */
import {useEffect, useState} from 'react'
import { Img, useCurrentFrame } from "remotion";
import Verified from "../assets/images/verified.png"
import Headphones from "../assets/icons/headphone.svg"
import Heart from "../assets/icons/heart.svg"
import Comment from "../assets/icons/chats.svg"
import { styled } from "styled-components";
import { useBounce } from "../utils/useBounce";

import { useGlitch, GlitchHandle } from 'react-powerglitch';

const Card = (
  { titleText, compose } : 
  {
    titleText: string;
    compose: any;
  }
) => {

   const { scaleValue } = useBounce();
   const [displayValue, setDisplayValue] = useState<string>('flex');

   const currentFrame = useCurrentFrame();
 
    const framesPerSecond = compose.fps;
 
   const glitch: GlitchHandle = useGlitch({
			playMode: 'click',
			createContainers: true,
			hideOverflow: false,
			timing: {duration: 2000, easing: 'ease-in-out'},
			glitchTimeSpan: false,
			shake: {velocity: 5, amplitudeX: 0.1, amplitudeY: 0.1},
			slice: {
				count: 5,
				velocity: 5,
				minHeight: 0.02,
				maxHeight: 0.10,
				hueRotate: true,
			},
			pulse: false,
		});
 
   const targetFrame = compose.frame;
   const setTimeoutValue = (targetFrame / framesPerSecond) * 300;

   if (currentFrame === targetFrame) {
    glitch.startGlitch();
    console.log("playing")
  }
 
  if (currentFrame === targetFrame) {
    setTimeout(() => {
      glitch.stopGlitch();
      console.log("stopped");
      setDisplayValue("none");
    }, setTimeoutValue);
  }

  useEffect(() => {
    if (currentFrame < targetFrame) {
      setDisplayValue("flex");
    }
  }, [currentFrame, targetFrame]);

  return (
      <Container $display={`${displayValue}`}>
        <CardCont ref={glitch.ref} $scale={scaleValue}>
          <UserInfo>
            <Img src="https://i.imgur.com/1I2XeZk.png" style={image} />
            <Username>
              <NameWithIcon>
                <Usertext>@RottenApples</Usertext>
                <Img src={Verified} style={{width: 17, height: 17}} />
              </NameWithIcon>
              <Listens>
                <Img src={Headphones} style={{width: 17, height: 17}} />
                <Count>9999+</Count>
              </Listens>
            </Username>
          </UserInfo>

          <Title>{titleText}</Title>

          <Stats>
            <StatText>
              <Img src={Heart} style={{width: 23, height: 23}} />
              <Count>99+</Count>
            </StatText>
            <StatText>
              <Img src={Comment} style={{width: 23, height: 23}} />
              <Count>99+</Count>
            </StatText>
          </Stats>
        </CardCont>
      </Container>
  );
}

export default Card;

const image = {
  width: 72,
  height: 72,
  borderRadius: '50%'
};

const Container = styled.div<{$display: string}>`
  width: 100%;
  position: absolute;
  left: 0;
  opacity: 1;
  right: 0;
  height: 100%;
  display: ${({ $display }) => $display};
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
`;

const CardCont = styled.div<{ $scale: number }>`
  width: 100%;
  max-width: 680px;
  min-height: 200px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 34px;
  padding-bottom: 34px;
  padding-right: 24px;
  padding-left: 24px; 
  border-radius: 15px;
  background-color: white;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.05);
  transform: ${({ $scale }) => `scale(${$scale})`};
`;

const UserInfo = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Username = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameWithIcon = styled.div`
  width: auto;
  padding-left: 16px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Usertext = styled.span`
  color: #000;
  font-family: Inter, Sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-right: 8px;
`;

const Listens = styled.div`
  width: auto;
  margin-top: 5px;
  opacity: 0.5;
  padding-left: 16px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Count = styled.span`
  color: #000;
  font-family: Inter, Sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 4px;
`;

const Title = styled.h2`
  color: #000;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  font-family: Inter, Sans-serif;
  line-height: normal;
`;

const Stats = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  :nth-child(2) {
    margin-left: 16px;
  }
`;

const StatText = styled.div`
  width: auto;
  margin-top: 5px;
  opacity: 0.5;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

