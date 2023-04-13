import React from "react";
import { StyleSheet, Image } from 'react-native';
import { AppBar, Flex, Text } from "@react-native-material/core";

export default function AppBarTop(){
    return(
        <AppBar 
        color="#17B978"
        style={styles.AppBar}
        >
            <Flex style={styles.textContainer}>
                <Text style={{color: '#FFFF'}}>
                    Earth Community
                </Text>
            </Flex>
        </AppBar>
    );
}

const styles = StyleSheet.create({
    AppBar: {
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',     
    },
    textContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

