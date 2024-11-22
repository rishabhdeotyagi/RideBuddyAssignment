import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

function ContactLiveLocationButtons() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Image source={require('../../assets/contact.jpg')} style={styles.icon} />
                <Text style={styles.contactButtonText}>Contact</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.button}>
                <Image source={require('../../assets/liveLocation.jpg')} style={styles.icon} />
                <Text style={styles.locationButtonText}>Live Location</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 28,
        padding: 10,
        marginVertical: 5
    },
    button: {
        alignItems: 'center',
    },
    separator: {
        width: 1,
        backgroundColor: '#ccc',
        marginHorizontal: 10,
    },
    icon: {
        width: 30,
        height: 30,
        marginBottom: 5,
    },
    contactButtonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'blue'
    },
    locationButtonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'red'
    }
});

export default ContactLiveLocationButtons;