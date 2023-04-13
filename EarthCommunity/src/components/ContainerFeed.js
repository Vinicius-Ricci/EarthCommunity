import { Surface, Stack, Avatar, Text, HStack } from '@react-native-material/core';
import React, { useState } from 'react';
import { Measure } from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, StyleSheet, Image, TextInput } from 'react-native';

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
                            style={{ width: '70%', height: 50, justifyContent: 'center', padding: 10 }}>

                            <TextInput
                                placeholder="Please, type your comment..."
                            />
                        </Surface>
                    </HStack>

                    <HStack m={5} spacing={8} style={{ alignItems: 'center', marginTop: 10 }}>
                        <Avatar image={{ uri: "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg" }} size={40} />
                        {/* <Measure
                            onMeasure={(width, height) => {
                                setSurfaceHeight(height);
                            }}
                        >
                            <Surface
                                elevation={4}
                                category="medium"
                                style={{ width: '70%', height: surfaceHeight, justifyContent: 'center', padding: 10 }}
                            >
                                <Text>
                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                                </Text>
                            </Surface>
                        </Measure> */}
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

});