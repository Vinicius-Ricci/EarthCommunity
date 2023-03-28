import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text, Button} from "@react-native-material/core";
import styleGlobal from '../style/styleGlobal';

export default function SignUpComponent(){
    return(
        <View style={styles.container}>
                <Text variant="h5" style={{textAlign: 'center', paddingBottom: 50}}>Sign Up</Text>
                <TextInput variant="standard" color = '#62D2A2' label="Name" style={{ margin: 25 }} />
                <TextInput variant="standard" color = '#62D2A2' label="E-mail" style={{ margin: 25 }} />
                <TextInput variant="standard" color = '#62D2A2' label="Password" style={{ margin: 25 }} />
                <Button title="Register" onPress={() => ('') } color='#62D2A2' style={{margin: 25}}/>
                
        </View>
        
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 2,
        justifyContent: 'center',
        margin: 20,
        marginTop: 150
    },

    containerimg: {
        backgroundColor: styleGlobal.colors.green2,
        alignItems: 'center'
    },

    button: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowOpacity: 0.3,
        backgroundColor: styleGlobal.colors.green2
    }

});