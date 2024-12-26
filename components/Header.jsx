import React from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { DrawerActions } from '@react-navigation/native'; // Import DrawerActions

const Header = () => {
    const navigation = useNavigation(); // Get navigation prop from useNavigation


    return (
        <LinearGradient colors={['#EB7E01', '#F8B201']} style={styles.linearGradient}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.headerContainer}>
                    {/* Menu Button */}
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name="menu" size={28} color="#000" />
                    </TouchableOpacity>

                    {/* Logo */}
                    <View style={styles.centerContainer}>
                        <Image
                            source={require('../assets/logos/Astroavastha.png')}
                            style={styles.logoImage}
                            resizeMode="contain"
                        />
                    </View>

                    {/* Right Side Icons */}
                    <View style={styles.rightIconsContainer}>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/icons/translate.png')}
                                style={styles.icon}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                source={require('../assets/icons/notificationicon.png')}
                                style={styles.icon}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 0,
    },
    safeArea: {
        backgroundColor: 'transparent',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginTop: 0,
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
    },
    rightIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoImage: {
        width: 130,
        height: 80,
        resizeMode: 'contain',
    },
    icon: {
        width: 28,
        height: 28,
        tintColor: '#000',
        marginHorizontal: 10,
        resizeMode: 'contain',
    },
});

export default Header;
