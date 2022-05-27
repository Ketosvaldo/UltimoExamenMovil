import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import items from './items';
import Box from './Box';

function TiendaScreen() {

    const listItems= items.map((item) =>
        <Box>{item}</Box> 
    );

    return (
        <View style={styles.boxContainer}>
            <ScrollView style={styles.scrollView}>
                <View  style={styles.boxContainer}>{listItems}</View>
            </ScrollView>
        </View>
    );
}

export default TiendaScreen;