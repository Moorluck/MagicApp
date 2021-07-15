import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    component: {
        margin: 10,
        padding: 10,
    },

    itemView: {
        flexDirection: "row",
        margin: 10
    },

    listView: {
        marginBottom: 170
    },

    input: {
        borderWidth: 1,
        borderColor: "#000",
        padding: 10,
        borderRadius: 20,
        marginBottom: 20
    },

    buttonView: {
        flexDirection: "row",
        alignSelf: 'center'
    },

    leftArrow: {
        alignContent: 'center'
    },

    rightArrow: {
        alignContent: 'center'
    },

    button: {
        width: 200,
        marginHorizontal: 40
    },

    image: {
        width: 120,
        height: 160,
        borderRadius: 10
    },

    imageDetail: {
        width: 300,
        height: 420,
        marginTop: 70,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    descriptionView: {
        marginLeft: 10
    },

    descriptionCard: {
        marginRight: 150
    },

    titleCard: {
        fontSize: 20,
        fontWeight: "bold"
    },

    text: {
        alignSelf: 'center'
    }

}) 