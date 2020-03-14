import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    useEffect(() => {
        getResult(id)
    }, [])

    const getResult  = (id) => {
        yelp.get(`/${id}`).then(response => {
            setResult(response.data)
        })
    }

    if(!result){
        return null;
    }else{
        return(
            <View>
                <Text style={styles.titleStyle}>{result.name}</Text>
                <FlatList 
                    data={result.photos}
                    keyExtractor={photo => photo}
                    renderItem={({ item }) => {
                        return(
                            <Image style={styles.imageStyle} source={{ uri: item }}/>
                        )
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageStyle:{
        width: 300,
        height: 150,
        marginHorizontal: 30,
        marginVertical: 10
    },
    titleStyle:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10
    }
})

export default ResultsShowScreen;