import React, {useState, useRef, useEffect}from 'react'
import styled, {css} from 'styled-components/macro'


import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5'
import { Button } from './Button'

const HeroSection = styled.section`
height: 100%;
width: 100%;


position: relative;
overflow: hidden; 


`
const HeroWrapper = styled.div`





`
const HeroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;


`
const HeroSlider = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 600px;

@media screen and (max-width: 991px){
    grid-template-columns: 1fr;

}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;

}



`
const HeroImage = styled.img`
width: 100vh;
height: 100vh;
object-fit: cover;


`
const HeroContent = styled.div`

margin: 5px 5px;
padding: 6rem 4rem;
text-align: left;

h1{
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 700;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 1.5rem;
}

p{
   color:hsl(0, 0%, 63%);
   padding: 0.4rem;
   letter-spacing: 0.8px;
   line-height: 1.4;
    
}
@media screen and (max-width: 768px){
  padding: 0rem 2rem;
  marging-top: -2rem;
  h1{
      text-align: left;
  }
}



`
const arrowButtons = css`
width: 60px;
height: 60px;
color: #fff;
cursor: pointer;
background: #000d1a;
padding: 10px;

user-select: none;
transition: 0.3s;

&: hover{
    background: #d3d3d3;
    transform: scale(1.05);
}
@media screen and (max-width: 991px){
    width: 40px;
    height: 40px;

}
@media screen and (max-width: 768px){

    width: 40px;
    height: 40px;

}

`

const SliderButtons = styled.div`
margin: 3rem -5rem;
padding: 6rem 0rem;
z-index: 10;
overflow: visible;

@media screen and (max-width: 991px){
    position: absolute;
    top: 53vh;
    right: 10vh;


}
@media screen and (max-width: 768px){
    position: absolute;
    top: 34%;
    right: 22%;


}

`
const Arrow = styled(HiOutlineArrowNarrowRight)`


`
const NextArrow = styled(IoArrowForward)`
${arrowButtons}
`
const PrevArrow = styled(IoArrowBack)`
${arrowButtons}
`



function Hero  ({slides})  {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const timeout = useRef(null)

    useEffect(() => {
    const nextSlide = () => {
        setCurrent(current => (current === length-1 ? 0 : current + 1))
    }
    timeout.current = setTimeout(nextSlide, 3000)
    return function(){
        if(timeout.current){
            clearTimeout(timeout.current)
        }
    }
}, [current, length])

    const nextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1)
    
        // console.log(current)
    }
    const prevSlide = () =>{
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent (current === 0 ? length-1 : current-1)
    
        // console.log(current)
    }

    return (
        <>
        <HeroSection>
        <HeroWrapper>
        {slides.map((slide, index) =>{
            return(
                <HeroSlide key={index}>
                    {index === current && (
                        <HeroSlider>
                        <HeroImage src={slide.image} alt={slide.alt} css={` display: inline-block;
                        @media screen and (max-width : 768px){
                            display: none;
                        }`}/>
                        <HeroImage src={slide.imageMob} alt={slide.alt} css={`display: none;
                        @media screen and (max-width: 768px){display: inline-block;
                                    height: 90%;
                                    width: 100%;
                                    object-fit: cover;
                        }`}/>
                            <HeroContent>
                                <h1>{slide.title}</h1>
                                <p>{slide.paragraph}</p>
                            <Button to={slide.path}  css={`letter-spacing: 5px;`}>{slide.label}
                            <Arrow/>
                            </Button>
                            <SliderButtons>
                <PrevArrow onClick ={prevSlide}/>
                <NextArrow onClick = {nextSlide}/>
            </SliderButtons>
                                </HeroContent>
     
                                </HeroSlider>



                    )}



                        
                        
                    </HeroSlide>

            )

        
        
            })}



        </HeroWrapper>


        </HeroSection>


        </>

    )

}

export default Hero
