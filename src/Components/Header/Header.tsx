import React from 'react';
import {View, StyleSheet, TouchableOpacity, I18nManager} from 'react-native';

// import {HomeDrawerParamList} from '~/Navigation/HomeNavigator';
import {logout} from '~/Firebase/actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '~/utils/colors';

interface HeaderProps {
  // navigation: HomeDrawerParamList;
  goBack: () => void;
}

const Header: React.FC<HeaderProps> = ({goBack}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Icon name="keyboard-backspace" color={colors.black} size={22} />
      </TouchableOpacity>

      <TouchableOpacity onPress={logout}>
        <Icon name="logout" color={colors.black} size={22} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingTop: 20,
    paddingHorizontal: 20,
    borderColor: colors.black,
  },
  goBack: {
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
