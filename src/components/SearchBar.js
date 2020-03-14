import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return(
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name='search' size={25} />
            <TextInput
                autoCapitalize= 'none'
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder='Search'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#e5e5e5',
        height: 50,
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 5,
        flexDirection: 'row'
    },
    iconStyle: {
        marginHorizontal: 10,
        alignSelf: 'center'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
});

export default SearchBar;