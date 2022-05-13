import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import NavigationBottom from './NavigationBottom';

function DetailsScreen({route}) {

    const {photo, name, text, number} = route.params;

    return (
        <View>
            <View style={styles.detailsContainer}>
                <Image
                    style ={styles.large}
                    source = {{uri: photo}}
                />
                <Text style={styles.detailsTitle}>{name}</Text>
                <Text style={styles.detailsDescription}>{text}</Text>
                <Text style={styles.detailsStock}>Stock: {number}</Text>
            </View>

            <NavigationBottom />
        </View>
    );
}

export default DetailsScreen;