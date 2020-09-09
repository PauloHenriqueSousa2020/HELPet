import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, FlatList, Text, Image, TouchableOpacity, Linking } from 'react-native'
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png'
import { Feather } from '@expo/vector-icons'
import styles from './styles'

export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const message = `Olá ${incident.name}, tudo bem com você? Estou entrando em contato para falar sobre o caso ${incident.titulo} cadastrado na plataforma HELPet, poderia me passar mais informações?`;

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Caso: ${incident.titulo}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>      
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#a88a0bbb" />
                </TouchableOpacity>
            </View>
           <FlatList
            data = {[1]}
            style={styles.incident}
            keyExtractor = {incident => String(incident)}
            renderItem={() => (
                <View>    
                    <Text style={styles.incidentPropertyNome}>DADOS DA DOAÇÃO </Text>
                    <Text style={styles.incidentProperty}>Nome: </Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>                   
                    <Text style={styles.incidentProperty}>Cidade: </Text>
                    <Text style={styles.incidentValue}>{incident.cidade}</Text>
                    <Text style={styles.incidentProperty}>Endereço: </Text>
                    <Text style={styles.incidentValue}>{incident.endereco}</Text>
                    <Text style={styles.incidentProperty}>Titulo da doação: </Text>
                    <Text style={styles.incidentValue}>{incident.titulo}</Text>
                    <Text style={styles.incidentProperty}>Descrição do caso: </Text>
                    <Text style={styles.incidentValue}>{incident.descricao}</Text>
                    <Text style={styles.incidentProperty}>Animal: </Text>
                    <Text style={styles.incidentValue}>{incident.animal} </Text>
                    <Text style={styles.incidentProperty}>Sexo do animal: </Text>
                    <Text style={styles.incidentValue}>{incident.sexo_do_animal} </Text>
                    <Text style={styles.incidentProperty}>Idade do animal: </Text>
                    <Text style={styles.incidentValue}>{incident.idade_do_animal} </Text>    
                    <Text style={styles.incidentProperty}></Text>          
                </View>
            )}
           />   
 
            <View style={styles.contactBox}>
                <Text style={styles.adoteTitle}>Encontre um novo lar para esse PET.</Text>
                <Text style={styles.adoteTitle}> Adote!</Text>
                <Text style={styles.adoteDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}