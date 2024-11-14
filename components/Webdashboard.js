import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Topbar, Menu } from '../src/webheader';
import Footer from '../src/webfooter';
const Slidersection = () => {
    const images = [
      require('../assets/images/sliders/Marquee-Image-1.jpg'),
      require('../assets/images/sliders/Marquee-Image-2.jpg'),
      require('../assets/images/sliders/Marquee-Image-3.jpg'),
      require('../assets/images/sliders/Marquee-Image-4.jpg'),
    ];
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
  
    return (
      <View style={styles.container}>
        <Image source={images[currentImageIndex]} style={styles.image} />
      </View>
    );
  };
  
  


const DashboardWeb = () => {
    
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View>
      <View style={[{ zIndex: 1 }, styles.headercontainer]}>
        <View style={styles.header}>
          <Topbar style={styles.Topbarcontent} />
          <Menu />
        </View>
      </View>
      <View style={{ zIndex: 0 }}>
        <Slidersection />
      </View>
      <View style={styles.Iconscontanier}>
        <View style={styles.lefticons}>
            <Image source={require('../assets/images/Icon_download_app.png')} style={styles.image1} />
            <Image source={require('../assets/images/Icon_quick_and_easy.png')} style={styles.image1} />
            <Image source={require('../assets/images/Icon_find.png')} style={styles.image1} />
        </View>
        <View style={styles.righticons}>
            <Image source={require('../assets/images/Iphone_X mockup.png')} style={styles.image1} />
            <Image source={require('../assets/images/Iphone_X mockup.png')} style={styles.image1} />
            <Image source={require('../assets/images/icon-downlaod-android-app.png')} style={styles.image1} />
            <Image source={require('../assets/images/icon-download-ios-app.png')} style={styles.image1} />
        </View>
      </View>
      <View style={styles.footercontainer}>
        <Footer />
      </View>
    </View>
  </ScrollView>
       
    );
  };
  
  const styles = StyleSheet.create({
    textw:
    {
      fontWeight: 'bold',  
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 500, // Adjust height based on your design
      },
    headercontainer: {      
        backgroundColor: '#fff',
        //borderBottomWidth: 0,
             },
      header: { 
        paddingLeft: '17%',
        paddingRight: '17%',
        borderBottomWidth: 0,
        borderTopWidth: 0,
      },
      Topbarcontent: {        
      paddingLeft: 50,
      paddingRight: 50,
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Adjust based on your preference
      },
      Iconscontanier: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Distribute the left and right containers across the screen
        alignItems: 'center', // Optionally align items vertically in the center
      },
      
      lefticons: {
        flexDirection: 'row', // Ensure the icons are in a row
        justifyContent: 'flex-start', // Align items to the left within this container
        flex: 1, // Make the left container take up available space
      },
      
      righticons: {
        flexDirection: 'row', // Ensure the icons are in a row
        justifyContent: 'flex-end', // Align items to the right within this container
        flex: 1, // Make the right container take up available space
      },
      footercontainer: {
        backgroundColor: '#F4F4F4',
      },
  });
  
  export default DashboardWeb;
  