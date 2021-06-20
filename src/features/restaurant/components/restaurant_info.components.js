import React from 'react';
import {StyleSheet,Text, View} from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components'; 
import { theme } from '../../../infrastructure/theme';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

const RestaurantCard = styled(Card)`
    backgroundColor: white;
    marginBottom: 15px;
`;
const CardCover = styled(Card.Cover)`
    padding: 10px;
`;
const Title = styled(Text)`
    color: ${(props) => props.theme.colors.ui.primary };
    fontSize: ${(props) => props.theme.fontSizes.body};
    padding: ${(props) => props.theme.space[1]};
    font-family:${(props) =>props.theme.fonts.heading};
`;
 const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
 `;
 const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    fontSize: ${(props) => props.theme.fontSizes.caption};
    padding: ${(props) => props.theme.space[1]};
 `;

 const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[1]};
    padding-bottom: ${(props) => props.theme.space[1]};
 `;

const Open = styled(SvgXml)`
    flex-direction: row;
`;

const Section = styled.View`
    align-items: center;
    flex-direction: row;
`;

const OpenClose = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {

    const {
        name = "TA Mlem",
        icon,
        photos = [
            "https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-nen-gai-xinh-toc-ngan-cute.jpg",
        ],
        address = "VietNam vjpro",
        isOpenNow = true,
        rating = 5,
        isClosedTemporarily,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));
    
    return(
        
        <RestaurantCard elevation = {4}>
            <CardCover key={name} source={{ uri:photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Section>
                    <Rating>
                    {ratingArray.map( ()=>
                    (
                        <SvgXml xml={star} width={20} height={20}/>
                    )
                    )}
                    <OpenClose>
                        {isOpenNow && <Text style={{color: '#138000', fontSize: 16, marginRight: 10}}>Open Now</Text>}
                        {isOpenNow && <Text>Open Now</Text> && <Open xml={open} width={20} height={20}/>}
                        {!isOpenNow && <Text style={{color: 'red'}}>Closed</Text>}
                    </OpenClose>
                    </Rating>
                </Section>
                
                <Address>{address}</Address>
            </Info>
            
        </RestaurantCard>
        
    );
    
}
