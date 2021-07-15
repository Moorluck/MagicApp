
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Text, View } from 'react-native';
import globalStyle from '../../global-style';

const ListOfCardItem = (props) => {

    const {name, description, imgUrl} = props

    const nav = useNavigation()

    const onPressItem = () => {
       nav.navigate("Detail", {imgUrl})
    }

    return(
        <View style={globalStyle.itemView} onTouchEnd={onPressItem}>
            <Image
                style={globalStyle.image}
                source={{
                    uri: imgUrl,
                }}
            />
            <View style={globalStyle.descriptionView}>
                <Text style={globalStyle.titleCard}>{name}</Text>
                <Text style={globalStyle.descriptionCard} numberOfLines={7}>{description}</Text>
            </View>
            
            
        </View>   
    )
}

export default ListOfCardItem;