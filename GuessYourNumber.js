import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import List from './List';

function mapItems(items) {
    return items.map((value, i) => ({key:i.toString(), value}));
}

function makeGuess(max, min = 1){
    return Math.floor(Math.random() * (max - min) + min);
}

function GuessYourNumber(props) {
    const [guess, setGuess] = useState(makeGuess(100));
    const [minLimit, setMinLimit] = useState(0);
    const [maxLimit, setMaxLimit] = useState(100);
    const [guessList, setGuessList] = useState([]);
    const [win, setWin] = useState(false);
    const [count, setCount] = useState(1);
    
    function analise(option){

        setGuessList([
            guess,
            ...guessList
        ]);

        setCount(count + 1);

        if(option === 1)
        {
            setMaxLimit(guess - 6);
            setGuess(makeGuess(maxLimit, minLimit));
        }
        else if(option === 2)
        {
            setMinLimit(guess-5);
            setMaxLimit(guess - 1);
            setGuess(makeGuess(maxLimit, minLimit));
        }
        else if(option === 3)
        {
            setWin(true);
        }
        else if(option === 4)
        {
            setMaxLimit(guess + 5);
            setMinLimit(guess + 1);
            setGuess(makeGuess(maxLimit, minLimit));
        }
        else
        {
            setMinLimit(guess + 6);
            setGuess(makeGuess(maxLimit, minLimit));
        }
    }


    return (
        <View style = {styles.game}>
            <Text style = {styles.title}>Tu numero es:</Text>
            <Text style = {styles.guess}>{guess}</Text>
            {
                win ? 
                <Text style = {styles.message}>Adivine tu numero en {count} intentos</Text>
                :
                <Text></Text>
            }
            <Button title = "Mucho Menor!" onPress={analise(1)} disabled={win}/>
            <Button title = "Cerca, Menor" onPress={analise(2)} disabled={win}/>
            <Button title = "ACERTASTE!!!" onPress={analise(3)} disabled={win}/>
            <Button title = "Cerca, Mayor" onPress={analise(4)} disabled={win}/>
            <Button title = "Mucho Mayor!" onPress={analise(5)} disabled={win}/>

            <List data = {mapItems(guessList)} style={styles.number}/>
        </View>
    );
}

export default GuessYourNumber;

const styles = StyleSheet.create({
    game: {
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
        width: 400
    },

    title: {
        width: 200,
        color: '#ff844c',
        textAlign: 'center',
        fontSize: 35,
        marginBottom: 20
    },

    message: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
        marginTop: 20
    },

    number: {
        fontSize: 20
    },

    guess: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
    }
})