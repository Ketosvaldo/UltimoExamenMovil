import React  from 'react';

import {View, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';



function WhichGuess() {

    const navigation = useNavigation();


    return (

        <View>

            <Button title = "I Guess PC's Number" onPress={() => navigation.navigate('Guess Number')}/>

                

            


            <Button title = "PC Guess My Number" onPress={() => navigation.navigate('Guess Your Number')}/>

                

           

        </View>

    );

}


export default WhichGuess;