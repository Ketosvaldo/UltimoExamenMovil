import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

function Box({children}) {

    const navigation = useNavigation();

    return (
        <View style={styles.box}>
            <Image
                style={styles.stretch}
                source = {{uri: children.image}}
            />
            <Text style={styles.boxTitle}>{children.title}</Text>
            <Button
                title="Jugar"
                onPress={() => navigation.navigate('Detalles', {
                    photo: children.image,
                    name: children.title
                })}
            />
        </View>
    );
}

Box.propTypes = {
    children: PropTypes.node.isRequired
};

export default Box;