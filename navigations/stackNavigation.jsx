import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import Header from '../components/Header';

const Stack = createStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={BottomNavigation}
                options={{
                    header: () => <Header />,
                }}
            />
        </Stack.Navigator>
    );
}
