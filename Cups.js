import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

function Cups(props) {
    const [firstCup, setFirstCup] = useState(false);
    const [secondCup, setSecondCup] = useState(false);
    const [thirdCup, setThirdCup] = useState(false);
    const [tries, setTries] = useState(0);
    const [message, setMessage] = useState("");
    const [win, setWin] = useState(false);

    useEffect(() => {
        let num = Math.floor(Math.random() * (3 - 1) + 1);

        if(num === 1)
        {
            setFirstCup(true);
            setSecondCup(false);
            setThirdCup(true);
        }
        if(num === 2)
        {
            setFirstCup(false);
            setSecondCup(true);
            setThirdCup(false);
        }
        if(num === 3)
        {
            setFirstCup(false);
            setSecondCup(false);
            setThirdCup(true);
        }
    }, [tries]);

   /*  const hideBall = () => {
        
    } */

    const analise = (cup) => {
        setTries(tries + 1);

        if(cup)
        {
            setWin(true);
            setMessage("LO ENCONTRASTE!!");
        }
        else
        {
            if(firstCup)
            {
                setMessage("Estaba en el Vaso 1");
            }
            if(secondCup)
            {
                setMessage("Estaba en el Vaso 2");
            }
            if(thirdCup)
            {
                setMessage("Estaba en el Vaso 3");
            }
            hideBall();
        }
    }

    //hideBall();

    return (
        <View>
            <Text style={styles.title}>Intentos: {tries}</Text>
            <View style={styles.cups}>
                <Image source={require('./assets/Images/cup.jpg')} onPress={() => analise(firstCup)} disabled={win}/>
                <Image source={require('./assets/Images/cup.jpg')} onPress={() => analise(secondCup)} disabled={win}/>
                <Image source={require('./assets/Images/cup.jpg')} onPress={() => analise(thirdCup)} disabled={win}/>
            </View>
            <Text style={styles.message}>{message}</Text>
        </View>
    );
}

export default Cups;

const styles = StyleSheet.create({
    title: {
        color: "#bf360c",
        justifyContent: "center",
        fontSize: 20,
        textAlign: "center",
        margin: 20,
    },

    cups: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
   
    message: {
        color: "#43a047",
        justifyContent: "center",
        textAlign: "center",
        fontSize: 20,
        marginTop: 20,
    }
});