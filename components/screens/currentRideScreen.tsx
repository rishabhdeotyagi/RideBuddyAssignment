import { Text, View, StyleSheet, Dimensions, Image } from "react-native";

import customModal from "../common/modal";
import PickDropDetails from "../common/pickDropDetails";

const { width, height } = Dimensions.get('window');

function CurrentRideScreen() {

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/maps.png')} style={styles.bgImage} />
            <View style={styles.headerContainer}>
                <PickDropDetails />
            </View>
            {customModal()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImage: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    headerContainer: { // Styles for the header container
        position: 'absolute',
        top: 70,                // Margin top
        left: 20,               // Left margin (adjust as needed)
        right: 20,              // Right margin (for centering)
        backgroundColor: 'white', // White background
        padding: 10,            // Padding within the container
        zIndex: 2,            // Ensure it's above the background and rideInfo
        borderRadius: 10         // Rounded corners (optional)

    },
    rideInfo: {
        position: 'absolute',
        top: 200,             // Adjusted top position
        left: 20,
        backgroundColor: 'white',
        padding: 10,
        zIndex: 1,            // Below the headerContainer
    },
});

export default CurrentRideScreen;

