import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length){
        return null
    }else{
        return (
            <View>
                <Text style={styles.titleStyle} >{title}</Text>
                <FlatList
                    horizontal
                    data={results}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(result) => result.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                                <ResultsDetail result={item} />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }  
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8
    }
});

export default withNavigation(ResultsList);