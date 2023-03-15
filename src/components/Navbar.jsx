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
   width: 900px;
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
    gap: 35px;
`;
const List = styled.ul`
    display: flex;
    gap: 12px;
    list-style: none;
`;
const ListItem= styled.li``;

// icon and button section
const MainIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 35px;
`;

const SearchIcon = styled.img`
    height: 20px;
`;

const Button = styled.button``;


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
                    <SearchIcon src="./img/searchbar.png"/>
                    <Button>Hire Marqius</Button>
                </MainIcons>
           </Container>
        </Section>
    )
}

export default Navbar