import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import api from '../../services/api';

import styles from './styles';
import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';

export default function Incidents(){
    const [incidents, setIncidents] = useState([]);
    const navigation = useNavigation();

    function navigateToDetail(incident){
        navigation.navigate('Detail', { incident });
    }
    async function loadIncidents(){
        const response = await api.get('donors');
        setIncidents(response.data);
    }
    useEffect(() => {
        loadIncidents();
    }, [])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
            </View>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Dê um lar a um dos PETs abaixo!</Text>
            <FlatList 
                data={incidents}
                style={styles.incidentList}
                keyExtractor={incident => String(incident.id)}
                renderItem={({ item: incident}) => (
                    <View style={styles.incident}>

                        <Text style={styles.incidentProperty}>Nome: </Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>
                        <Text style={styles.incidentProperty}>Titulo: </Text>
                        <Text style={styles.incidentValue}>{incident.titulo}</Text>
                        <Text style={styles.incidentProperty}>Animal: </Text>
                        <Text style={styles.incidentValue}>{incident.animal}</Text>
                        <Text style={styles.incidentProperty}>Sexo do animal: </Text>
                        <Text style={styles.incidentValue}>{incident.sexo_do_animal}</Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(incident)}>
                            <Text style={styles.detailsButtonText}> Ver mais detalhes </Text>
                            <Feather name="arrow-right" size={16} color="#a88a0bbb" />
                        </TouchableOpacity>
                    </View>  
                )} 
            />
        </View>
    )
}