import React from 'react'
import { Image } from 'react-native'
import globalStyle from '../../global-style'

const DetailScreen = ({ route }) => {

    const {imgUrl} = route.params

    return (
        <Image style={globalStyle.imageDetail} source={{
            uri: imgUrl,
        }} />
    )
}

export default DetailScreen