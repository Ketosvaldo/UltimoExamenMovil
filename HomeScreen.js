import React from 'react';
import  {Button,View, Text, Image} from 'react-native';
import styles from './styles';
import logo from './assets/minijuegos.png';

function HomeScreen({navigation}) {
    return (
        <View style={styles.homeContainer}>
            <Image
                style={styles.large}
                source={logo}
            />
            <Text style={styles.homeTitle}>MIS JUEGOS!</Text>
            <Text style={styles.homeText}>Bienvenido a la pagina con los mejores minijuegos de todos</Text>
        </View>
    );
}

export default HomeScreen;