import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CircularImage from './common/circularImage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function EmergencyContacts() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Emergency Contacts</Text>
                <TouchableOpacity>
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contactRow}>
                <CircularImage size={30} borderWidth={2} borderColor="blue" />
                <Text style={styles.contactName}>Ayush Gautam
                    <Image source={require('../assets/blueTick.jpg')} style={{ width: 20, height: 20 }} />
                </Text>
                <TouchableOpacity>
                    <Image source={require('../assets/cross.jpg')} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>

            </View>
            <View style={styles.contactRow}>
                <CircularImage size={30} borderWidth={2} borderColor="blue" />
                <Text style={styles.contactName}>Khushi Sharma
                    <Image source={require('../assets/blueTick.jpg')} style={{ width: 20, height: 20 }} />
                </Text>
                <TouchableOpacity >
                    <Image source={require('../assets/cross.jpg')} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },

    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    editText: {
        fontSize: 18,
        color: 'blue',
    },
    contactRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    contactName: {
        justifyContent: 'center',
        fontSize: 14,
        flex: 1,
        marginHorizontal: 10,
        color: 'black'
    }
});

export default EmergencyContacts;