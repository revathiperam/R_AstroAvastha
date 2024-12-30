import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from '../components/Header';
import HomeScreen from '../src/Home';
import DiscoverScreen from '../src/Discover';


const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        header: (props) => <Header {...props} />,
                    }}
                />
                <Drawer.Screen name="Discover" component={DiscoverScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
