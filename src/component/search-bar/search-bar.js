import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native';
import globalStyle from '../../global-style';
import { Icon } from 'react-native-elements'

const SearchBar = (props) => {

    const {onSearch, onLeftArrow, onRightArrow} = props

    const [cardName, setCardName] = useState()

    const onPressLeftArrow = () => {
        onLeftArrow()
    }

    const onPressRightArrow = () => {
        onRightArrow()
    }

    return(
        <View style={globalStyle.component}>

            <TextInput style={globalStyle.input} onChangeText={(v) => setCardName(v)} value={cardName} />  

            <View style={globalStyle.buttonView}>

                <Icon name='chevron-back-outline' type='ionicon' style={globalStyle.leftArrow} onPress={onPressLeftArrow}/>

                <View style={globalStyle.button}>
                    <Button title="Search" onPress={() => onSearch(cardName)} color="#9E1946"/>
                </View> 

                <Icon name='chevron-forward-outline' type='ionicon' style={globalStyle.rightArrow} onPress={onPressRightArrow}/>

            </View>

            
           
        </View>
        
    )
}

export default SearchBar;