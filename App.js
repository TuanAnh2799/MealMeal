import React from 'react';
import { SafeAreaView, StyleSheet,FlatList, Text, View,StatusBar } from 'react-native';
import {RestaurantScreen} from './src/features/restaurant/screens/restaurant.screen';
import {SafeArea} from './src/components/safe-area';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { 
  useFonts as useLato,
  Lato_400Regular } from "@expo-google-fonts/lato";
import {ThemeProvider} from 'styled-components';
import {theme} from './src/infrastructure/theme';
//ad library to do navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//mport {restaurantsRequest} from './src/services/restaurants/restaurants.service';
import {RestaurantsContextProvider} from "./src/services/restaurants/restaurants.context";



const Tab = createBottomTabNavigator();

const Settings = () => {
  return(
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );
  
}
const Map = () => {
  return(
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  );
}
 const TAB_ICON = {
   Home: "md-home-sharp",
   Map: "md-map",
   Settings: "md-settings"
 };
const tabBarIcon = (iconName)=> ({size, color}) => (
  <Ionicons name={iconName} size={size} color={color} />
)
 const createScreenOptions = ({ route }) => {
   const iconName = TAB_ICON[route.name];
   return{
     tabBarIcon: tabBarIcon(iconName),
   };
 };
export default function App() {

  const [oswaldLoaded] = useOswald({

    Oswald_400Regular,

  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

        return (
          /*
        <SafeAreaView style={{flex: 1}}>
            <View style={{paddingTop: 20, backgroundColor: 'white'}}>
            <Searchbar 
              placeholder="Bạn tìm gì hôm nay?"
            />
            </View>
            <View style={{ flex: 1, padding: 16, backgroundColor: 'red'}}>
              
            </View>
        </SafeAreaView>
        */
       <ThemeProvider theme={theme}>
       <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator 
            
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: 'red',
              inactiveTintColor: 'gray',
            }}
            >
              <Tab.Screen name="Home" component={RestaurantScreen} />
              <Tab.Screen name="Map" component={Map}/>
              <Tab.Screen name="Settings" component={Settings}/>
            </Tab.Navigator>
          </NavigationContainer>
       </RestaurantsContextProvider>
       </ThemeProvider>
       
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
