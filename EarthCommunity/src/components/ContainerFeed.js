import { Surface, Stack, Avatar, Text, HStack } from '@react-native-material/core';
import React, { useState } from 'react';
import { Measure } from 'react-native-size-matters';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, StyleSheet, Image, TextInput, Pressable } from 'react-native';
import styleGlobal from '../style/styleGlobal';

function ContainerFeed() {

    const [surfaceHeight, setSurfaceHeight] = useState(50);

    return (
        <ScrollView>
            <Stack fill center spacing={10}>
                <Surface
                    elevation={4}
                    category="medium"
                    style={{ width: '100%', height: 800, marginTop: 30, }}>

                    {/* Avatar e nome do usuario */}

                    <HStack m={4} spacing={6} style={{ alignItems: 'center', margin: 10 }}>
                        <Avatar image={{ uri: "https://cdn.dribbble.com/users/588874/screenshots/2251116/dribbble.png" }} size={40} />
                        <Text>Vinicius Ricci</Text>
                    </HStack>

                    {/* Descrição da Publicação */}

                    <Text style={{ padding: 10 }}>
                        Republic soldier wanted!
                    </Text>

                    {/* Publicação, like e comentario */}


                    <Image source={{ uri: 'https://nationaltoday.com/wp-content/uploads/2020/05/star-wars-day-640x514.jpg.webp' }} style={{ width: '100%', height: 400 }} />
                    <HStack m={5} spacing={8} style={{ alignItems: 'center', marginTop: 10 }}>
                        <MaterialCommunityIcons name="thumb-up-outline" size={25} />
                        <Text>Like</Text>
                        <MaterialCommunityIcons name="comment-outline" size={25} style={{ marginLeft: 20 }} />
                        <Text>Comment</Text>
                    </HStack>

                    <HStack m={5} spacing={8} style={{ alignItems: 'center', marginTop: 10 }}>
                        <Avatar image={{ uri: "https://cdn.dribbble.com/users/588874/screenshots/2251116/dribbble.png" }} size={40} />
                        <Surface
                            elevation={4}
                            category="medium"
                            style={{ width: '70%', height: 100, justifyContent: 'flex-start', padding: 10 }}>

                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Type something"
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true}
                            />
                            <HStack style={{ width: '100%', alignItems: 'flex-end', justifyContent: 'flex-end', padding: 10 }}>
                                <Pressable style={styles.button} onPress={() => ('')}>
                                    <Feather name="send" size={16} color="black" />
                                </Pressable>
                            </HStack>

                        </Surface>
                    </HStack>

                    <HStack m={5} spacing={8} style={{ alignItems: 'center', marginTop: 10 }}>
                        <Avatar image={{ uri: "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg" }} size={40} />
                        <Surface
                            elevation={4}
                            category="medium"
                            style={{ width: '70%', height: 50, justifyContent: 'center', padding: 10 }}>

                            <Text>Comment</Text>        
                        </Surface>
                    </HStack>
                </Surface>
            </Stack>
        {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
            <Stack fill center spacing={10}>
                <Surface
                    elevation={4}
                    category="medium"
                    style={{ width: '100%', height: 800, marginTop: 30, }}>

                    {/* Avatar e nome do usuario */}

                    <HStack m={4} spacing={6} style={{ alignItems: 'center', margin: 10 }}>
                        <Avatar image={{ uri: "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg" }} size={40} />
                        <Text>Ryan Oliveira</Text>
                    </HStack>

                    {/* Descrição da Publicação */}

                    <Text style={{ padding: 10 }}>
                        Beatiful Place
                    </Text>

                    {/* Publicação, like e comentario */}


                    <Image source={{ uri: 'https://images3.alphacoders.com/800/80007.jpg' }} style={{ width: '100%', height: 400 }} />
                    <HStack m={5} spacing={8} style={{ alignItems: 'center', marginTop: 10 }}>
                        <MaterialCommunityIcons name="thumb-up-outline" size={25} />
                        <Text>Like</Text>
                        <MaterialCommunityIcons name="comment-outline" size={25} style={{ marginLeft: 20 }} />
                        <Text>Comment</Text>
                    </HStack>

                    <HStack m={5} spacing={8} style={{ alignItems: 'center', marginTop: 10 }}>
                        <Avatar image={{ uri: "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg" }} size={40} />
                        <Surface
                            elevation={4}
                            category="medium"
                            style={{ width: '70%', height: 100, justifyContent: 'flex-start', padding: 10 }}>

                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Type something"
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true}
                            />
                            <HStack style={{ width: '100%', alignItems: 'flex-end', justifyContent: 'flex-end', padding: 10 }}>
                                <Pressable style={styles.button} onPress={() => ('')}>
                                    <Feather name="send" size={16} color="black" />
                                </Pressable>
                            </HStack>

                        </Surface>
                    </HStack>

                    <HStack m={5} spacing={8} style={{ alignItems: 'center', marginTop: 10 }}>
                        <Avatar image={{ uri: "https://cdn.dribbble.com/users/588874/screenshots/2251116/dribbble.png" }} size={40} />
                        <Surface
                            elevation={4}
                            category="medium"
                            style={{ width: '70%', height: 50, justifyContent: 'center', padding: 10 }}>

                            <Text>Comment</Text>        
                        </Surface>
                    </HStack>
                </Surface>
            </Stack>
        {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
            <Stack fill center spacing={10}>
                <Surface
                    elevation={4}
                    category="medium"
                    style={{ width: '100%', height: 800, marginTop: 30, }}>

                    {/* Avatar e nome do usuario */}

                    <HStack m={4} spacing={6} style={{ alignItems: 'center', margin: 10 }}>
                        <Avatar image={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZttwZ0cdgpvwJxmC9JsbMTqyfuj02JijQvgtmpKGJ2ytzvEzRD-ytMkyzjMurXoTV9h8&usqp=CAU" }} size={40} />
                        <Text>Éder Leite</Text>
                    </HStack>

                    {/* Descrição da Publicação */}

                    <Text style={{ padding: 10 }}>
                        :)
                    </Text>

                    {/* Publicação, like e comentario */}


                    <Image source={{ uri: 'https://images.alphacoders.com/741/7413.jpg' }} style={{ width: '100%', height: 400 }} />
                    <HStack m={5} spacing={8} style={{ alignItems: 'center', marginTop: 10 }}>
                        <MaterialCommunityIcons name="thumb-up-outline" size={25} />
                        <Text>Like</Text>
                        <MaterialCommunityIcons name="comment-outline" size={25} style={{ marginLeft: 20 }} />
                        <Text>Comment</Text>
                    </HStack>

                    <HStack m={5} spacing={8} style={{ alignItems: 'center', marginTop: 10 }}>
                        <Avatar image={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZttwZ0cdgpvwJxmC9JsbMTqyfuj02JijQvgtmpKGJ2ytzvEzRD-ytMkyzjMurXoTV9h8&usqp=CAU" }} size={40} />
                        <Surface
                            elevation={4}
                            category="medium"
                            style={{ width: '70%', height: 100, justifyContent: 'flex-start', padding: 10 }}>

                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Type something"
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true}
                            />
                            <HStack style={{ width: '100%', alignItems: 'flex-end', justifyContent: 'flex-end', padding: 10 }}>
                                <Pressable style={styles.button} onPress={() => ('')}>
                                    <Feather name="send" size={16} color="black" />
                                </Pressable>
                            </HStack>

                        </Surface>
                    </HStack>

                    <HStack m={5} spacing={8} style={{ alignItems: 'center', marginTop: 10 }}>
                        <Avatar image={{ uri: "https://cdn.dribbble.com/users/588874/screenshots/2251116/dribbble.png" }} size={40} />
                        <Surface
                            elevation={4}
                            category="medium"
                            style={{ width: '70%', height: 50, justifyContent: 'center', padding: 10 }}>

                            <Text>Comment</Text>        
                        </Surface>
                    </HStack>
                </Surface>
            </Stack>
        </ScrollView>
    )
}

export default ContainerFeed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textAreaContainer: {

        padding: 5
    },
    textArea: {
        height: 150,
        width: '70%',
        justifyContent: "flex-start"
    },

    button: {
        width: 30,
        height: 30,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowOpacity: 0.3,
        backgroundColor: styleGlobal.colors.green2
    }

});