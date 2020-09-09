import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 0,
        marginTop: 48
    },

    incidentProperty: {
        fontSize: 14,
        color: "#392d27",
        fontWeight: "bold",
        marginTop: 24
    },

    incidentPropertyNome: {
        fontSize: 18,
        color: "#392d27",
        fontWeight: "bold",
        marginTop: -5,
        textAlign: "center"
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: "#392d27"
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16,
        marginTop: 10
    },

    adoteTitle: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#392d27",
        lineHeight: 20,
        textAlign: "center"
    },

    headerText: {
        fontSize: 15,
        color: "#392d27"
    },
    
    adoteDescription: {
        fontSize: 15,
        color: "#392d27bb",
        marginTop: 16
    },
    
    actions: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    action: {
        backgroundColor: "#a88a0bbb",
        borderRadius: 8,
        height: 50,
        width: "48%",
        justifyContent: "center",
        alignItems: "center"
    },

    actionText: {
        fontSize: 15,
        color: "#FFF",
        fontWeight: "bold"
    },
     
})