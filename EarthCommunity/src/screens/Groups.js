import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import WavesComponentGroups from '../components/WavesComponentGroups';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GroupsContainer from '../components/GroupsContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

export default function Groups() {
  const [selectedTab, setSelectedTab] = useState('seusGrupos');
  const [groups, setGroups] = useState([]);
  const [groupId, setGroupId] = useState('');
  const navigation = useNavigation();
  const [userId, setUserId] = useState('');
  const [search, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [participatingGroups, setParticipatingGroups] = useState([]);
  const [seusGrupos, setSeusGrupos] = useState([]);
  const [userGroups, setUserGroups] = useState([]);
  const [otherGroups, setOtherGroups] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const userString = await AsyncStorage.getItem('user');
      const user = JSON.parse(userString);
      setUserId(user._id);
    };

    getUser();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://earth-community-backend-dev.up.railway.app/api/group/get-all"
        );
  
        const userGroups = response.data.groups.filter(group => {
          return group.members.some(member => member.user._id === userId);
        });
  
        setParticipatingGroups(userGroups);
        setUserGroups(userGroups);
  
        const createdGroups = response.data.groups.filter(group => {
          return group.createdByUser === userId;
        });
  
        setSeusGrupos(createdGroups);
  
        setGroups(response.data.groups);
        console.log(response.data.groups);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [userId]);
  
  useEffect(() => {
    const fetchOtherGroups = async () => {
      try {
        const response = await axios.get(
          `https://earth-community-backend-dev.up.railway.app/api/group/get-all?createdBy_ne=${userId}&members.user._id_ne=${userId}`
        );

        setOtherGroups(response.data.groups);
        console.log(response.data.groups);
        
      } catch (error) {
        console.error(error);
      }
    };

    if (selectedTab === 'explorar') {
      fetchOtherGroups();
    }
  }, [selectedTab, userId]);

  const handleForm = () => {
    navigation.navigate('GroupsForm');
  };

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };

  const filteredGroups = selectedTab === 'seusGrupos' ? seusGrupos :
    selectedTab === 'participando' ? participatingGroups :
    selectedTab === 'explorar' ? otherGroups : [];

  useEffect(() => {
    const handleSearch = () => {
      if (search.trim() === '') {
        setSearchResults([]);
      } else {
        const filteredResults = filteredGroups.filter(group => {
          return group.name.toLowerCase().includes(search.toLowerCase());
        });
        setSearchResults(filteredResults);
      }
    };

    handleSearch();
  }, [search, filteredGroups]);

  return (
    <ScrollView>
      <WavesComponentGroups />
      <TouchableOpacity style={styles.overlay} onPress={handleForm}>
        <Ionicons name="add" size={40} color="#696969" style={{ fontWeight: 'bold' }} />
        <Text style={{ color: "#696969", fontWeight: 'bold' }}>Novo Grupo</Text>
      </TouchableOpacity>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={selectedTab === 'seusGrupos' ? styles.activeTab : styles.tab}
          onPress={() => handleTabPress('seusGrupos')}
        >
          <Text style={styles.tabText}>Seus Grupos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectedTab === 'participando' ? styles.activeTab : styles.tab}
          onPress={() => handleTabPress('participando')}
        >
          <Text style={styles.tabText}>Participando</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectedTab === 'explorar' ? styles.activeTab : styles.tab}
          onPress={() => handleTabPress('explorar')}
        >
          <Text style={styles.tabText}>Explorar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar grupos"
          value={search}
          onChangeText={text => setSearchText(text)}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={20} color="#696969" />
        </TouchableOpacity>
      </View>
      <View style={styles.groupsContainer}>
        {filteredGroups.map(group => (
          <GroupsContainer key={group._id} group={group} />
        ))}
      </View>
      <View style={styles.groupsContainer}>
        {searchResults.map(group => (
          <GroupsContainer key={group._id} group={group} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
overlay: {
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgb(233,233,233)',
  width: '70%',
  height: 150,
  marginTop: '15%',
  marginLeft: '15%',
  borderRadius: 25,
},
tabContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginVertical: 10,
},
tab: {
  flex: 1,
  alignItems: 'center',
  paddingVertical: 10,
},
activeTab: {
  flex: 1,
  alignItems: 'center',
  paddingVertical: 10,
  borderBottomWidth: 2,
  borderBottomColor: '#696969',
},
tabText: {
  color: '#696969',
  fontWeight: 'bold',
},
searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginHorizontal: 20,
  marginBottom: 10,
},
searchInput: {
  flex: 1,
  height: 40,
  borderWidth: 1,
  borderColor: '#696969',
  borderRadius: 20,
  paddingHorizontal: 15,
},
searchButton: {
  marginLeft: 10,
},
groupsContainer: {
  paddingHorizontal: 20,
  marginBottom: 20,
},
});
