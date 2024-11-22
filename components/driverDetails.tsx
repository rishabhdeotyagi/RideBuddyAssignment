import { View, Text, StyleSheet, Image } from 'react-native';
import CircularImage from './common/circularImage';

function driverDetails() {
    return (
        <View style={styles.container}>
            <CircularImage size={50} borderWidth={3} borderColor="blue" />
            <View style={styles.driverInfo}>
                <View style={styles.nameRow}>
                    <Text style={styles.driverName}>Sanket Tripathi </Text>
                    <Image source={require('../assets/blueTick.jpg')} style={{ width: 30, height: 30 }} />
                </View>
                <Text style={styles.carDetails}>Maruti Swift - AXK 370</Text>
            </View>
            <View style={styles.ratingContainer}>
                <Image source={require('../assets/star.jpg')} style={{ width: 25, height: 25 }} />
                <Text style={styles.ratingText}>4.5</Text>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    driverInfo: {
        marginLeft: 10,
        flex: 1,
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    driverName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    carDetails: {
        fontSize: 12,
        color: 'gray',
        marginTop: 2,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    ratingText: {
        marginHorizontal: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default driverDetails;