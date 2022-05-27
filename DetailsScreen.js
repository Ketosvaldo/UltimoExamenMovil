import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import styles from './styles';

function DetailsScreen({route, navigation}) {

    const {photo, name, text} = route.params;

    /*
    navigation.setOptions({
        title: name,
      
        headerRight: () => (
            <Button
                title="Buy"
                onPress={() => {}}
                disabled={number === 0}
            />
        )
    });
    */
    return (
        <View>
            <View style={styles.detailsContainer}>
                <Image
                    style ={styles.imageDetails}
                    source = {{uri: photo}}
                />
                <Text style={styles.detailsTitle}>{name}</Text>
                <Text style={styles.detailsDescription}>{text}</Text>
            </View>

        </View>
    );
}

export default DetailsScreen;