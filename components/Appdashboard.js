import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground, ScrollView, Button,Image } from 'react-native';
//import { useNavigation } from '@react-navigation/native';

const useDateTime = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedTime = `${
        (hours % 12 || 12).toString().padStart(2, '0') // Convert 0 or 24 to 12 for AM/PM
      } : ${minutes.toString().padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;
      const formattedDate = now.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });

      setCurrentTime(formattedTime);
      setCurrentDate(formattedDate);
    };

    updateDateTime(); // Initial call
    const timer = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  return { currentTime, currentDate };
};

const DashBoardHeader = () => {
  const { currentTime, currentDate } = useDateTime();
  return (
    <ImageBackground
      source={require('../assets/images/icon_profile_bg.png')} // Adjust the path as necessary
      style={styles.background}
    >
      <Image
        source={require('../assets/images/profile.png')} // Replace with your image path
        style={styles.headerImage}
      />
      <View style={styles.infoSection}>
        {/* Left Section */}
        <View style={styles.leftsection}>
          <Text style={styles.memname}>Hi, Lia Little</Text>
          <Text style={styles.profiletext}>Profile</Text>
        </View>
        
        {/* Middle Section */}
        <View style={styles.middlesection}>
          <Text style={styles.infoTime}>{currentTime}</Text>
          <Text style={styles.infoDate}>{currentDate}</Text>
        </View>
        
        {/* Right Section */}
        <View style={styles.rightsection}>
          <Text style={styles.weather}>Glencoe - Heavy Intensity Rain - 50°</Text>
        </View>
      </View>
    </ImageBackground>
  );
  
}
 
const HomeScreen = () => {
  
  const items = [
    'Today at a Glance',
    'Calendar of Events',
    'Important Club Numbers',
    'Dining',
    'Golf',
    'Pickleball',
    'Statements',
    'Gift Card',
    'Member Directory',
    'Photo Gallery',
    'My Guest',
    'Contact Us',
  ];
 
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.gridItem}>
      <Text style={styles.gridText}>{item}</Text>
    </TouchableOpacity>
  );
 
  const handleButtonPress = () => {
    navigation.navigate('ViewNews'); // Navigate to ViewNewsScreen
  };
 
  return (
      <View style={styles.container}>
        <DashBoardHeader />         
      <ScrollView contentContainerStyle={styles.scrollcontainer}>
        <View style={styles.gridContainer}>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            contentContainerStyle={styles.grid}
          />
        </View>
      </ScrollView>
      </View>
  );
};
 
const styles = StyleSheet.create({
  background: {
    width:'100%',
    height: '53%',
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },
  container: {
    flexGrow: 1, 
   // padding: 10,
    marginTop: 20,
   // marginBottom: 10,
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: 70, 
    height: 70, 
    borderRadius: 50, 
    left: 15,
    top:100,
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    },
    button: {
      backgroundColor: '#fff', // Button color
      borderRadius: 25,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      left: "57%",
      width: 150,
      height:50,
    },
    buttonText: {
      color: 'blue', // Button text color
      fontWeight: '700',
      fontSize: 18,
    },
  infoSection: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end', 
    flexDirection: 'row',
    paddingBottom: '40%', 
    paddingTop: '8%',
  },
  leftsection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  middlesection: {
    flex: 1,
  },
  rightsection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  memname: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  profiletext: {
    fontSize: 13,
    color: '#fff',
  },
  infoTime:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoDate: {
    fontSize: 13,
    color: '#fff',
  },
  weather: {
    fontSize: 16,
    color: '#fff',
  },
  gridContainer: {
    backgroundColor: '#fff',
    borderRadius: 12, // Rounded corners
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    padding: 10,
  },
  grid: {
    paddingBottom: 60,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    padding: 25,
    borderRadius: 1,
    shadowColor: '#fff',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  gridText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },
});
 
export default HomeScreen;