import React from 'react'
import styled from 'styled-components'


const Section = styled.section`
margin: 0;
display: flex;


`
const AboutContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0;



`
const ImageOne = styled.div`
flex: 33.33%;
margin:0;
@media screen and (max-width: 768px){
    flex: 100%;
}
@media screen and (max-width: 1280px){
    flex: 100%;
}
@media screen and (max-width: 991px){
    flex: 100%;
}
`
const AboutContent = styled.div`
flex: 33.33%;
margin:0 auto ;
padding: 3rem 1rem;
word-wrap: word-break;
font-size: 12px;
line-height: 1.6;
p{
    color:hsl(0, 0%, 63%);
}
h1{
    margin-bottom: 1rem;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 5px;
}
@media screen and (max-width: 768px){
    flex: 100%;
    text-align: left;
}

@media screen and (max-width: 1280px){
    flex: 100%;
}
@media screen and (max-width: 991px){
    flex: 100%;
    padding-left: 0.5rem;
    padding-right: 5rem;
}

`
const ImageTwo = styled.div`
flex: 33.33333%;
margin: 0;
@media screen and (max-width: 768px){
    flex: 100%;
}
@media screen and (max-width: 1280px){
    flex: 100%;
}
@media screen and (max-width: 991px){
    flex: 100%;
}

`


function AboutSection({heading, imageOne, imageTwo, paragraph}) {
    return (
        <>
        <Section>
            <AboutContainer>
                <ImageOne>
                    <img src={imageOne} alt='/home'></img>
                </ImageOne>
                <AboutContent>
                    <h1>{heading}</h1>
                    <p>{paragraph}</p>
                </AboutContent>
                <ImageTwo>
                <img src={imageTwo} alt='/home'></img>
                </ImageTwo>

                </AboutContainer>
                </Section>    
        </>
    )
}

export default AboutSection
