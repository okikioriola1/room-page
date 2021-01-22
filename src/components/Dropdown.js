import React from 'react'
import styled from 'styled-components'
import { menuData } from '../data/MenuData'

import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

const DropdownContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: rgba(255,255,255,0.6);
display: grid;
align-items: center;
top:0;
left:0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
top:${({isOpen}) => (isOpen ? '0' : '-100%')};
`

const Icon= styled.div`
position: absolute;
top: 1.2rem;
left: 1.5rem;
background: transparent;
font-size: 1rem;
cursor: pointer;
outline: none;
`
const CloseIcon= styled(FaTimes)`
color: #d3d3d3;
`
const DropdownWrapper= styled.div`
background-color: #fff;
padding: 4rem 5rem;
position: absolute;
top: 0;
left:0;
width: 100%;
`
const DropdownMenu= styled.div`

position:absolute;
top: 1.2rem;
left: 4rem;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 170px;
text-align: center;
margin-bottom: 4rem;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(4, 60px);

}

`
const DropdownLink= styled(Link)`
display: flex;
color: #000;
align-items: flex-start;
justify-content: center;
font-size: 1rem;
padding-right: 3px;
text-decoration: none;
list-style: none;
cursor: pointer;
transition: 0.3s ease-in-out;

&:hover{
    color: #d3d3d3;
}

`


const Dropdown = ({isOpen, toggle}) => {
    return (
    
            <DropdownContainer isOpen={isOpen} onClick={toggle}>

                <DropdownWrapper>
                <Icon onClick={toggle}>
                    <CloseIcon/>
                </Icon>
                    <DropdownMenu>
                        {menuData.map ((item, index) =>(
                            <DropdownLink to={item.link} key={index}>
                                {item.title}
                            </DropdownLink>

                        ))}
                    </DropdownMenu>

                </DropdownWrapper>
            </DropdownContainer>
        
    )
}

export default Dropdown
