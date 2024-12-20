import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const images = [
    require('../assets/logos/raasi1.png'),
    require('../assets/logos/raasi2.png'),
    require('../assets/logos/raasi3.png'),
    require('../assets/logos/raasi4.png'),
    require('../assets/logos/raasi5.png'),
    require('../assets/logos/raasi6.png'),
    require('../assets/logos/raasi7.png'),
    require('../assets/logos/raasi8.png'),
    require('../assets/logos/raasi9.png'),
];

const HomeScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View style={styles.container}>
            {/* Header Component */}
            <Header />

            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Scrollable Image Gallery (using FlatList for performance) */}
                <FlatList
                    data={images}
                    horizontal
                    renderItem={({ item }) => (
                        <Image source={item} style={styles.image} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.imageScroll}
                />

                {/* All features bar */}
                <View style={styles.searchContainer}>
                    {/* Wrap searchBar with LinearGradient */}
                    <LinearGradient
                        colors={['#EB7E01', '#F8B201']} // Gradient colors
                        style={styles.searchBar}
                    >
                        <TextInput
                            style={styles.searchInput}
                            placeholder="All Features"
                            value={searchQuery}
                            onChangeText={(text) => setSearchQuery(text)}
                            placeholderTextColor="#fff"
                        />
                        <Icon name="search" size={30} color="#fff" style={styles.searchIcon} />
                    </LinearGradient>
                </View>

                {/* Add Image with Live Button Inside */}
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/astro3d.png')} style={styles.newImage} />
                    <TouchableOpacity style={styles.liveButton}>
                        <Text style={styles.liveButtonText}>Live</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Footer */}
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    scrollContent: {
        paddingBottom: 20,
    },
    imageScroll: {
        marginTop: 5,
    },
    image: {
        width: 80,
        height: 80,
        marginHorizontal: 1,
    },
    searchContainer: {
        paddingHorizontal: 10,
        marginTop: 15,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        paddingHorizontal: 10,
        height: 50,
    },
    searchIcon: {
        marginLeft: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 20,
        color: '#fff',
    },
    imageContainer: {
        marginTop: 0,
        position: 'relative', // This allows positioning the button on top of the image
        alignItems: 'center',
    },
    newImage: {
        width: 358,
        height: 200,
        resizeMode: 'contain',
    },
    liveButton: {
        position: 'absolute', // Positioning the button inside the image
        bottom: 120, // Adjust this to position it correctly
        left: '50%',
        marginLeft: -170, // This centers the button by half of its width (50px)
        backgroundColor: '#D32F2F',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    liveButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 600,
    },
});

export default HomeScreen;
