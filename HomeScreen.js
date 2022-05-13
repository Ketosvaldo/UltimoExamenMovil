import React from 'react';
import  {Button,View, Text} from 'react-native';
import styles from './styles';

function HomeScreen({navigation}) {
    return (
        <View style={styles.homeContainer}>
            <Text style={styles.homeTitle}>Home</Text>
            <Button 
                color="#5efc82"
                title="Tienda"
                onPress={() => navigation.navigate('Tienda')}
            />
        </View>
    );
}

export default HomeScreen;