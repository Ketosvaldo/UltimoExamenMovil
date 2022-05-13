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
            <Text>{children.title}</Text>
            <Text>{children.description}</Text>
            <Button
                title="Ver"
                onPress={() => navigation.push('Details', {
                    photo: children.image,
                    name: children.title,
                    text: children.description,
                    number: children.stock
                })}
            />
        </View>
    );
}

Box.propTypes = {
    children: PropTypes.node.isRequired
};

export default Box;