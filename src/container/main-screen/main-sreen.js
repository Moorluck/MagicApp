import React, { useState } from 'react'
import { Text, View } from 'react-native';
import ListOfCard from '../../component/list-of-card/list-of-card';
import SearchBar from '../../component/search-bar/search-bar';

import 'react-native-get-random-values'
import { nanoid } from 'nanoid'
import globalStyle from '../../global-style';

const MainScreen = () => {

    const url = "https://api.magicthegathering.io/v1/cards?name=__name__&page=__page__&pageSize=50"

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [cardName, setCardName] = useState("")

    const onSearch = (etCardName) => {
        const cardNameClean = JSON.stringify(etCardName).replace("\"", "").replace("\"", "")
        setCardName(cardNameClean)
        refreshPageWithHtmlRequest(cardNameClean, page)
    }

    const handlePageLeft = () => {
        if (page > 1) {

            refreshPageWithHtmlRequest(cardName, page-1)
            setPage((previousPage) => previousPage-1)
            
        }
    }

    const handlePageRight = () => {

        refreshPageWithHtmlRequest(cardName, page+1)
        setPage((previousPage) => previousPage+1)
        
    }

    const refreshPageWithHtmlRequest = (cardName, page) => {
        fetch(url.replace("__name__", cardName).replace("__page__", page))
                .then( (response) => response.json() )
                .then( (responseJson) => responseJson.cards )
                .then( (cards) => {

                    console.log(cards)
                    const results = []
                    for (const card of cards) {
                        console.log(card.name)
                        results.push({
                            id: nanoid(),
                            name: card.name,
                            description: card.text,
                            imgUrl: card.imageUrl
                        })
                    }

                    console.log(results)

                    setData(results)
                } )
    }

    return(
        <View>
            <SearchBar onSearch={onSearch} onLeftArrow={handlePageLeft} onRightArrow={handlePageRight}/>
            <Text style={globalStyle.text}>{page}</Text>
            <ListOfCard data={data}/>
        </View>
    )
}

export default MainScreen;