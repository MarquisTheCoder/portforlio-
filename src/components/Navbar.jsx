import React from "react"
import styled from "styled-components"


//main nav block
const Section = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

//secondary nav block used to position elements
const Container = styled.div`
   width: 1200px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px 0px;
`;

// logo and nav link section
const Logo = styled.img`
    height: 90px;

`;
const MainLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 45px;
`;
const List = styled.ul`
    display: flex;
    gap: 12px;
    list-style: none;
`;
const ListItem= styled.li`
    margin-bottom: 5px;
    cursor: pointer;
    :hover{
        text-decoration: underline;
    }
`;

// icon and button section
const MainIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 45px;
`;

const SearchIcon = styled.img`
    height: 20px;
    cursor: pointer;
`;

const Button = styled.button`
    width: 100px;
    padding: 8px;
    background-color: rgb(170, 145, 215);
    border: none;
    border-radius: 10px;
    color: #02157d;
    cursor: pointer;
`;


function Navbar(){
    return(
        <Section>
           <Container>
                <MainLinks>
                    <Logo src="./img/logo_with_light1.png"/>

                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Studio</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>

                </MainLinks>

                <MainIcons>
                    <SearchIcon src="./img/white-icon.png"/>
                    <Button>Hire Marqius</Button>
                </MainIcons>
           </Container>
        </Section>
    )
}

export default Navbar