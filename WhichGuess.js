import React, {useState, useEffect}  from 'react';

import {View, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import ProgressBar from './ProgressBar';

function WhichGuess() {

    const navigation = useNavigation();

    const [progress, setProgress] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() =>{
        function updateProgress(){
            setProgress((currentProgress) => {
                if(currentProgress < 1){
                    setTimeout(updateProgress, 300);
                }
                else{
                    setShow(false);
                }
                return currentProgress + 0.01;
            })
        }
        updateProgress();
    }, []);

    return (
        <View>
            {
                show ? 
                (<ProgressBar progress={progress} label = {true}/>)
                : 
                (
                    <View>
                            <Button title = "I Guess PC's Number" onPress={() => navigation.navigate('Guess Number')}/>
                            <Button title = "PC Guess My Number" onPress={() => navigation.navigate('Guess Your Number')}/>
                    </View>
                )
            }
        </View>
    );

}


export default WhichGuess;