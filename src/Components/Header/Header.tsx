import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// import {HomeDrawerParamList} from '~/Navigation/HomeNavigator';
import {logout} from '~/Firebase/actions';

interface HeaderProps {
  // navigation: HomeDrawerParamList;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.menu}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Hello</Text>
      <TouchableOpacity onPress={logout}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
  },
  menu: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logout: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Header;
