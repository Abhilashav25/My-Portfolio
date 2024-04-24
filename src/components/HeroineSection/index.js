import React from 'react'
import HeroineImg from '../../images/amulbabe.jpg'
import HeroineBgAnimation from '../HeroineBgAnimation'
import { HeroineContainer, HeroineBg, HeroineLeftContainer, Img, HeroineRightContainer, HeroineInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroineStyle'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroineSection = () => {
    return (
        <div id="about">
            <HeroineContainer>
                <HeroineBg>
                    <HeroineBgAnimation />
                </HeroineBg>
                <HeroineInnerContainer >
                    <HeroineLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroineLeftContainer>

                    <HeroineRightContainer id="Right">

                        <Img src={HeroineImg} alt="Heroine-image" />
                    </HeroineRightContainer>
                </HeroineInnerContainer>

            </HeroineContainer>
        </div>
    )
}

export default HeroineSection