import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
    const handleTranslatePress = () => {
        Alert.alert('Translate Icon Pressed', 'This is where the translate action will go');
    };

    const handleNotificationPress = () => {
        Alert.alert('Notification Icon Pressed', 'This is where the notification action will go');
    };

    return (
        <LinearGradient
            colors={['#EB7E01', '#F8B201']}
            style={styles.linearGradient}
        >
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity>
                        <Icon name="menu" size={28} color="#000" />
                    </TouchableOpacity>

                    <View style={styles.centerContainer}>
                        <Image
                            source={require('../assets/logos/Astroavastha.png')}
                            style={styles.logoImage}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.rightIconsContainer}>
                        <View style={styles.onlineContainer}>
                            <Icon name="wifi" size={20} color="green" />
                            <Text style={styles.onlineText}>Online</Text>
                        </View>

                        <TouchableOpacity onPress={handleTranslatePress}>
                            <Image
                                source={require('../assets/icons/translate.png')}
                                style={styles.icon}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleNotificationPress}>
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
        marginTop: 0
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
    onlineContainer: {
        alignItems: 'center',
        marginHorizontal: 5,
    },
    onlineText: {
        color: 'green',
        fontSize: 12,
        fontWeight: 'bold',
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
