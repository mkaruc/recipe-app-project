import styled from 'styled-components';

const NavbarStyle= styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: white;
    height: 6rem;
    
    img:nth-child(2){
        height: 6rem;
    }
    a {
        color: #5acaec;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bold;
        padding: 10px 20px;
        border-radius: 5px;
        width: 70px;
    }
    a:hover{
      color: white;
      background-color: #5acaec;
      
    } 
  `
  export default NavbarStyle;