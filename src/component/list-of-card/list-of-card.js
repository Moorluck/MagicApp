import React from 'react'
import { ScrollView, Text, View } from 'react-native';
import globalStyle from '../../global-style';
import ListOfCardItem from './list-of-card-item';

const ListOfCard = ( props ) => {

    const {data} = props

    const dataJS = data.map(
        (card) => <ListOfCardItem key={card.id} name={card.name} description={card.description} imgUrl={card.imgUrl} />
    ) 


    return(
        <ScrollView style={globalStyle.listView}>
            {dataJS}
        </ScrollView>
    )
}

export default ListOfCard;