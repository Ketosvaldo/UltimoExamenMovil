import React from 'react';
import  {Button, View} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

function NavigationBottom() {

    const navigation = useNavigation();

    return (
        <View style={styles.footer}>
        <Button 
            title="Atras"
            onPress={() => navigation.goBack()}
        />
        <Button 
            title="Home"
            onPress={() => navigation.popToTop()}
        />
    </View>
    );
}

export default NavigationBottom;