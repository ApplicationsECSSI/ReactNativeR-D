import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image } from 'react-native';

const Topbar = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
      <Image source={require('../assets/images/logo.png')} style={styles.logoImage} />
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              source={{ uri: 'https://member.apogeeclub.com/assets/images/Bell_Icon.svg' }}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.greetingText}>Hi, Lia Little</Text>
          <TouchableOpacity style={styles.profileContainer}>
            <Image
              source={{ uri: 'https://member.apogeeclub.com/assets/images/profile.png' }}
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Menu = () => {
    const [visibleMenu, setVisibleMenu] = useState(null); // Track which menu's dropdown is visible
    const[hoveredItem,setHoveredItem]=useState(null);
  
    return (
      <View style={styles.menuContainer}>
        {/* Home Menu Item */}
        <Pressable
          onMouseEnter={() => setVisibleMenu('home')}
          onMouseLeave={() =>  {
            setVisibleMenu(null);
            setHoveredItem(null); // Reset hovered item when not hovering over menu
          }}
          style={({ pressed }) => [
            styles.menuButton,
            { backgroundColor: pressed ? '#ddd' : '#fff' }, // Change background on press
          ]}
        >
          <Text style={styles.menuText}>Home</Text>
          {visibleMenu === 'home' && (
            <View style={styles.dropdown}>
            </View>
          )}
        </Pressable>
  
        {/* My Club Menu Item */}
        <Pressable
          onMouseEnter={() => setVisibleMenu('myClub')}
          onMouseLeave={() =>  {
            setVisibleMenu(null);
            setHoveredItem(null); // Reset hovered item when not hovering over menu
          }}
          style={({ pressed }) => [
            styles.menuButton,
            { backgroundColor: pressed ? '#ddd' : '#fff' },
          ]}
        >
          <Text style={styles.menuText}>My Club</Text>
          {visibleMenu === 'myClub' && (
            <View style={styles.dropdown}>
              <Pressable
                onMouseEnter={() => setHoveredItem('clubNews')}
                onMouseLeave={() => setHoveredItem(null)}
                style={[
                  hoveredItem === 'clubNews' && styles.hoveredDropdownItem,
                ]}
              >
                <Text style={styles.dropdownItem}>Club News</Text>
              </Pressable>
              <Pressable
                onMouseEnter={() => setHoveredItem('imoortantclubnumbers')}
                onMouseLeave={() => setHoveredItem(null)}
                style={[
                  hoveredItem === 'imoortantclubnumbers' && styles.hoveredDropdownItem,
                ]}
              >
                <Text style={styles.dropdownItem}>Important Club Numbers</Text>
              </Pressable>
  
            </View>
          )}
        </Pressable>
        <Pressable
          onMouseEnter={() => setVisibleMenu('culturalarts&activities')}
          onMouseLeave={() =>  {
            setVisibleMenu(null);
            setHoveredItem(null); // Reset hovered item when not hovering over menu
          }}
          style={({ pressed }) => [
            styles.menuButton,
            { backgroundColor: pressed ? '#ddd' : '#fff' },
          ]}
        >
          <Text style={styles.menuText}>Cultural Arts & Activities</Text>
          {visibleMenu === 'culturalarts&activities' && (
            <View style={styles.dropdown}>
              <Pressable
              onMouseEnter={() =>setHoveredItem('calenderofevents')}
              onMouseLeave={() =>setHoveredItem(null)}
              style={[
                hoveredItem === 'calenderofevents' && styles.hoveredDropdownItem,
              ]}
              >    <Text style={styles.dropdownItem}>Calender of Events</Text>
              </Pressable>
              
              <Pressable
              onMouseEnter={() =>setHoveredItem('eventrequests')}
              onMouseLeave={() =>setHoveredItem(null)}
              style={[
                hoveredItem === 'eventrequests' && styles.hoveredDropdownItem,
              ]}
              ><Text style={styles.dropdownItem}>Event Requests & Cancellation</Text></Pressable>            
            </View>
          )}
        </Pressable>
        <Pressable
          onMouseEnter={() => setVisibleMenu('dining&catering')}
          onMouseLeave={() =>  {
            setVisibleMenu(null);
            setHoveredItem(null); // Reset hovered item when not hovering over menu
          }}
          style={({ pressed }) => [
            styles.menuButton,
            { backgroundColor: pressed ? '#ddd' : '#fff' },
          ]}
        >
          <Text style={styles.menuText}>Dining & Catering</Text>
          {visibleMenu === 'dining&catering' && (
            <View style={styles.dropdown}>
              <Pressable
              onMouseEnter={() =>setHoveredItem('diningresv')}
              onMouseLeave={() =>setHoveredItem(null)}
              style={[
                hoveredItem === 'diningresv' && styles.hoveredDropdownItem,
              ]}
              ><Text style={styles.dropdownItem}>Dining Resv & Conf</Text></Pressable>
              <Pressable
              onMouseEnter={() =>setHoveredItem('ourrestarunts')}
              onMouseLeave={() =>setHoveredItem(null)}
              style={[
                hoveredItem === 'ourrestarunts' && styles.hoveredDropdownItem,
              ]}
              ><Text style={styles.dropdownItem}>Our Restarunts</Text></Pressable>
              
              
            </View>
          )}
        </Pressable>
        <Pressable
          onMouseEnter={() => setVisibleMenu('golf')}
          onMouseLeave={() =>  {
            setVisibleMenu(null);
            setHoveredItem(null); // Reset hovered item when not hovering over menu
          }}
          style={({ pressed }) => [
            styles.menuButton,
            { backgroundColor: pressed ? '#ddd' : '#fff' },
          ]}
        >
          <Text style={styles.menuText}>Golf</Text>
          {visibleMenu === 'golf' && (
            <View style={styles.dropdown}>
              <Pressable
              onMouseEnter={() =>setHoveredItem('bookalesson')}
              onMouseLeave={() =>setHoveredItem(null)}
              style={[
                hoveredItem === 'bookalesson' && styles.hoveredDropdownItem,
              ]}
              ><Text style={styles.dropdownItem}>Book a Lesson</Text></Pressable>
              <Pressable
              onMouseEnter={() =>setHoveredItem('teetimes')}
              onMouseLeave={() =>setHoveredItem(null)}
              style={[hoveredItem === 'teetimes' && styles.hoveredDropdownItem,   ]}
              ><Text style={styles.dropdownItem}>Tee Times</Text></Pressable>       
            </View>
          )}
        </Pressable>
        <Pressable
          onMouseEnter={() => setVisibleMenu('racquetsports')}
          onMouseLeave={() =>  {
            setVisibleMenu(null);
            setHoveredItem(null); // Reset hovered item when not hovering over menu
          }}
          style={({ pressed }) => [
            styles.menuButton,
            { backgroundColor: pressed ? '#ddd' : '#fff' },
          ]}
        >
          <Text style={styles.menuText}>Racquet Sports</Text>
          {visibleMenu === 'racquetsports' && (
            <View style={styles.dropdown}>
              <Pressable
              onMouseEnter={() =>setHoveredItem('bookalesson')}
              onMouseLeave={() =>setHoveredItem(null)}
              style={[
                hoveredItem === 'bookalesson' && styles.hoveredDropdownItem,
              ]}
              ><Text style={styles.dropdownItem}>Book a Lesson</Text></Pressable>
              <Pressable
              onMouseEnter={() =>setHoveredItem('teetimes')}
              onMouseLeave={() =>setHoveredItem(null)}
              style={[
                hoveredItem === 'teetimes' && styles.hoveredDropdownItem,
              ]}
              ><Text style={styles.dropdownItem}>Tee Times</Text></Pressable>  
            </View>
          )}
        </Pressable>
  
        {/* Add more menu items as needed */}
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoImage: {
    width: 120,  
    height: 100,  
    resizeMode: 'contain',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    paddingRight: 80,
  },
  icon: {
    width: 33,
    height: 33,
    resizeMode: 'contain',
  },
  greetingText: {
    fontSize: 19,
    color: '#707070',
    marginRight: 25,
    marginBottom: 12,
  },
  profileContainer: {
    width: 48,
    height: 48,
    //borderRadius: 15,
    overflow: 'hidden',
  },
  profileIcon: {
    width: 45,
    height: 45,
    borderRadius: '80%',
    background: '#F4F4F4',
    resizeMode: 'contain',
  },
  menuContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  menuButton: {
    padding: 10,
  },
  menuText: {
    fontSize: 20,
    color: '#333',
  },
  dropdown: {
    position: 'absolute',
    top: 40,
    left: 0,
    width: 200,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    zIndex: 1000,
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  hoveredDropdownItem: {
    backgroundColor: '#3b5998',
  },
});

export { Topbar, Menu };
