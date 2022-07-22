import {StyleSheet, Dimensions, Platform, StatusBar} from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({

    homeContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#607d8b',
        height: '100%',
    },
    homeTitle: {
        color: '#e91e63',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 30
    },

    homeText: {
        color: '#263238',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 20,
        marginBottom: 150,
        flexWrap: 'wrap',
    },

    box: {
        width: 165,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: "#455a64",
        margin: 10,
        borderRadius: 8
    },

    boxContainer: {
        height: "100%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        backgroundColor: "#ff7043",
        ...Platform.select({
            ios: {paddingTop: 32},
            android: {paddingTop: StatusBar.currentHeight}
        })
    },

    boxTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#43a047",
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 16
    },

    footer: {
        flex: 1,
        position: 'absolute',
        top: screenHeight - (screenHeight/6),
        width: screenWidth,
        left: 0,
        right: 0,
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: "#34515e",
    },

    stretch: {
        flex: 1,
        width: 160,
        height: 80,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        resizeMode: 'stretch',
      },
      large: {
        flex:1,
        width: screenWidth,
        height: 50,
      },

      imageDetails:{
        width: 200,
        height: 200,
      },

    scrollView: {
       // backgroundColor: "gray",
       // marginHorizontal: 20,
       //flex: 1,
    },

    detailsContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#ccc5af',
        height: '100%',

    },

    detailsTitle: {
        color: '#c41c00',
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 30,
    },

    detailsDescription: {
        color: '#424242',
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
    },

    detailsStock: {
        color: '#9a67ea',
        fontSize: 25,
        marginTop: 20,
        fontWeight: "bold",

    },

    container:{
      flex: 1,
      backgroundColor: 'ghostwhite',
      alignItems: 'center',
      justifyContent: 'center',
    },
    progress:{
        width: 170,
    },
    progressText: {
        fontSize: 12,
        textAlign: 'center',
    },

    containerFilter: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 40,
    },

    item: {
        margin: 5,
        padding: 5,
        color: "slategray",
        backgroundColor: "ghostwhite",
        textAlign: "center",
    },

    filter: {
        height: 40,
        width: 200
    },

    controls: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: "white",
    }
})