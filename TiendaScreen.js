import React, {useState} from 'react';
import {View, ScrollView, TextInput} from 'react-native';
import styles from './styles';
import items from './items';
import Box from './Box';

function TiendaScreen() {
    const [filter, setFilter] = useState('');

    return (
        <View>
            <ScrollView style={styles.scrollView}>
                <View  style={styles.boxContainer}>
                    <TextInput 
                        autoFocus
                        placeHolder="Search"
                        style={styles.filter}
                        onChangeText = {(text) => (setFilter(text))}
                    />
                </View>
                    {
                        items.filter((items) => filter.length === 0 || items.name.includes(filter)).map((items,v) => (
                            <Box
                                key = {v}
                            >
                                {items}
                            </Box>
                        ))
                    }
            </ScrollView>
        </View>
    );
}

export default TiendaScreen;