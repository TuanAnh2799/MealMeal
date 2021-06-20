
import React,{useContext} from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, FlatList,Text } from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantInfo} from '../components/restaurant_info.components';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
import { ActivityIndicator, Colors } from 'react-native-paper';


const SafeArea = styled(SafeAreaView)`
    flex: 1;
    marginTop: ${StatusBar.currentHeight}px;
`;
const LoadingContainer = styled.View`
    position:absolute;
    top: 50%;
    left: 50%;
`;
export const RestaurantScreen = () => {
    const {isLoading,error, restaurants} = useContext(RestaurantsContext);
    console.log(isLoading);
  
    return(
        <SafeArea>
        
            <View style={styles.search}>
            <Searchbar 
                placeholder="Bạn muốn tìm gì?"
                />
            </View>
            <View style={styles.list}>
            {isLoading && (
            <LoadingContainer>
                <ActivityIndicator size={50} animating={true} color={Colors.blue300} />
                
            </LoadingContainer>
                
            )}
            <FlatList
                data = { restaurants }
                renderItem = { ({ item }) => {
                    return(
                    <RestaurantInfo restaurant = {item} />
                    );
                }}
                keyExtractor = { (item) => item.name}
                contentContainerStyle={{padding: 5, marginTop: 5 }}
            />
               
            </View>
        </SafeArea>
    );
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    search:{
        padding: 16,
    },
    list:{
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
        
    },
  });