import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const Footer = () => {
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>© 2024 Boca West Country Club</Text>
        <View style={styles.rightcontent}>
            <Text style={styles.footerText}>Privacy Policy    |   </Text>
            <Text style={styles.footerText}>Terms of Use   |   </Text>
            <Text style={styles.footerText}>Powered by Cobalt Software</Text> 
         </View>       
      </View>
    );
  };

  const styles=StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '17%',
        paddingRight: '17%',
        backgroundColor: '#fff', // Change to your footer background color
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
      },
      footerText: {
        fontSize: 14,
        color: '#555',
        //marginRight: 1116,
        
      },
      rightcontent: {
        flexDirection: 'row',   
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
  });
  export default Footer;
  