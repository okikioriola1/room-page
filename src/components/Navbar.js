import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled, {css}from 'styled-components/macro'
import { menuData } from '../data/MenuData'
import {FaBars} from 'react-icons/fa'

const Nav= styled.nav`
height: 60px;
display: flex;
background: ${({navbar}) => (navbar ?  '#000' : 'transparent')};
padding: 1rem 2rem;
z-index:100;
position:fixed;
width: 100%
`
const NavMenu = styled.div`
display: flex;
align-items: right;
margin-left: 50px;
@media screen and (max-width: 768px){
    display: none;
}
`
const NavLink = css`
color: #fff;
font-size: 16px;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
transition: 0.3s ease-in-out;
&:hover{
    padding-bottom: 0.3rem;
    border-bottom: 0.2rem solid #fff;
    transform: translateY(-2px);
}
`
const NavMenuLinks = styled(Link)`
${NavLink}
`
const MenuBars = styled(FaBars)`
display: none;
@media screen and (max-width: 768px){
    display: block;
    background-size: contain;
    height: 30px;
    width: 30px;
    cursor: pointer;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(30%, 80%);

}

`
const Logo = styled(Link)`
display: flex;
align-items: center;
cursor: pointer;
font-size: 35px;
text-decoration: none;
color: #fff;

@media screen and (max-width: 768px){
    text-align: center;
    margin: auto;
    
    
    
}
`

function Navbar({toggle}) {
    const changeBackground =()=>{
        if(window.scrollY >= 90){
            setNavbar(true)
            
        }
        else{
            setNavbar(false)
        }
    
    }
    
    
    
    window.addEventListener('scroll', changeBackground)

    const [navbar, setNavbar] =useState(false)
    return (
        <>

        <Nav navbar={navbar}>
        <MenuBars onClick={toggle} />
            <Logo to='/'>room</Logo>
            
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>

                ))}
            </NavMenu>


            
        </Nav>
            
        </>
    )
}

export default Navbar
