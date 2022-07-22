import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import ProgressBar from './ProgressBar';

function generateRandomNumber(){
    return Math.floor(Math.random() * (3 - 1) + 1);
}

function PPT(props) {
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

    const [enemy, setEnemy] = useState('');
    const [message, setMessage] = useState('');
    const [points, setPoints] = useState(0);
    const [enemyPoints, setEnemyPoints] = useState(0);
    const [win, setWin] = useState(false);
    const [random, setRandom] = useState(generateRandomNumber());

    const  putMessage = (msg) => {
        if(msg === 1)
        {
            setMessage("Ganaste Punto!");
        }
        if(msg === 2)
        {
            setMessage("PC Gana Punto!");
        }
        if(msg === 3)
        {
            setMessage("Empate!");
        }
        if(msg === 4)
        {
            setMessage("GANASTE JUEGO!!!");
        }
        if(msg === 5)
        {
            setMessage("PERDISTE JUEGO!!!");
        }
    }

    const putEnemy = (num) => {
        if(num === 1)
        {
            setEnemy("../assets/Images/piedra.png");
        }
        if(num === 2)
        {
            setEnemy("../assets/Images/papel.png");
        }
        if(num === 3)
        {
            setEnemy("../assets/Images/tijera.png");
        }
    }

    const piedra = (num) => {
        if(num === 1)
        {
            putMessage(3);
            putEnemy(1);
        }
        if(num === 2)
        {
            setEnemyPoints(enemyPoints + 1);
            putEnemy(2);
            if(enemyPoints == 2)
            {
                putMessage(5);
                setWin(true);
            }
        }
        if(num === 3)
        {
            setPoints(points + 1);
            putEnemy(3);
            if(points == 2)
            {
                putMessage(4);
                setWin(true);
            }
        }
    }

    const papel = (num) => {
        if(num === 2)
        {
            putMessage(3);
            putEnemy(2);
        }
        if(num === 3)
        {
            setEnemyPoints(enemyPoints + 1);
            putEnemy(3);
            if(enemyPoints == 2)
            {
                putMessage(5);
                setWin(true);
            }
        }
        if(num === 1)
        {
            setPoints(points + 1);
            putEnemy(1);
            if(points == 2)
            {
                putMessage(4);
                setWin(true);
            }
        }
    }

    const tijera = (num) => {
        if(num === 3)
        {
            putMessage(3);
            putEnemy(3);
        }
        if(num === 1)
        {
            setEnemyPoints(enemyPoints + 1);
            putEnemy(1);
            if(enemyPoints == 2)
            {
                putMessage(5);
                setWin(true);
            }
        }
        if(num === 2)
        {
            setPoints(points + 1);
            putEnemy(2);
            if(points == 2)
            {
                putMessage(4);
                setWin(true);
            }
        }
    }

    return (
        <View>
            {
                show ? (<ProgressBar progress={progress} label = {true}/>) : 
                (<View>
                    <Text style={styles.points}>Tus Puntos: {points}</Text>
                        <View style={styles.buttons}>
                            <TouchableOpacity onPress = {() => piedra(random)} disabled={win}>
                                <Image style={styles.button} source={require("./assets/Images/piedra.png")}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => papel(random)} disabled={win}>
                                <Image style={styles.button} source={require("./assets/Images/papel.png")}/>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress = {() => tijera(random)} disabled={win}>
                                <Image style={styles.button} source={require("./assets/Images/tijera.png")}/>
                            </TouchableOpacity>
                        </View>
                    <Text style = {styles.message}>{message}</Text>
                    <Text style={styles.enemy}>PC Puntos: {enemyPoints}</Text>
                    <Image source={enemy} />
                </View>
                )
            }
            
        </View>
    );
}

export default PPT;

const styles = StyleSheet.create({
    points: {
        color: "#388e3c",
        textAlign: "center",
        fontSize: 20,
        justifyContent: "center"
    },

    enemy: {
        color: "#ff7543",
        textAlign: "center",
        fontSize: 20,
        justifyContent: "center",
        marginTop: 20,
    },

    message: {
        color: "#388e3c",
        textAlign: "center",
        fontWeight: "bold", 
        fontSize: 30,
        justifyContent: "center"
    },

    button: {
        width: 100,
        height: 150,
        marginRight:30
    },

    buttons:{
        flexDirection: "row",
        justifyContent: "center"
    }
})