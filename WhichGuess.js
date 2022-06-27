import React from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';


function WhichGuess() {
    const navigation = useNavigation();

    return (
        <View>
            <Button onPress={() => navigation.navigate('Guess Number')}>
                I Guess PC's Number
            </Button>

            <Button onPress={() => navigation.navigate('Guess Your Number')}>
                PC Guess My Number
            </Button>
        </View>
    );
}

export default WhichGuess;