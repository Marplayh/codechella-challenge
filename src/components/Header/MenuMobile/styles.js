import styled from "styled-components";


export const MenuCelular = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MenuContainer = styled.div`
    z-index: 5;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    transition: .5s;
    align-items: center;
    opacity: 0;
    justify-content: center;
    background: none;
    ul{
        list-style: none;
        background-color: #2E7BA2;
        flex-direction: column;   
    }
    ul li {
        padding: 10px 0px;
        text-align: center;
        width: 100vw;
    }
  ${MenuCelular}:focus &,
  &.open {
    opacity: 1;
    top: 85%;
    visibility: visible;
    transition: .5s;
    animation: fadeIn 0.5s ease-in-out forwards;
    @keyframes fadeIn {
        0% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
  }
  }
     
    ul{
        list-style: none;
        background-color: #2E7BA2;
        flex-direction: column;   
    }
    ul li a{
        padding:10px;
        text-align: center;
        border-bottom: 1px solid #fff;
        
        &:hover{
            background-color: #fff;
            color: #2E7BA2;
        }
    }
  }
`;

export const ImagemMenu = styled.img`
   width: 25px;
   height: 25px;
`

export const Button = styled.button`
  display: block;
    border: none;
    background: #2E7BA2;
    cursor: pointer;
`;
