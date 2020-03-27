import { StyleSheet } from 'react-native';


export const Styles = StyleSheet.create({
    container: {
        flex: 1,

        paddingTop: 70,
        alignItems: "center",

    },
    searchbar: {

        paddingLeft: 18,
        width: 330,
        borderWidth: 3,
        borderRadius: 60,
        borderColor: 'orange',
        marginBottom: 40,

    },
    imageview: {
        justifyContent:'center',
        width: 300,
        height: 300,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 7,
        paddingRight: 17,

    },
    imageborder: {

        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 7,
        paddingRight: 7,
    },
    imageloading: {
        justifyContent:'center',
        width: 300,
        height: 300,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 7,
        paddingRight: 7,
    }

});