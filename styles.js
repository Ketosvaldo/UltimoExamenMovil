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
        fontSize: 80,
        fontWeight: "bold",
        marginBottom: 100,
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
        width: 200,
        height: 200,
        resizeMode: 'stretch',
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

    }
})