import { View, Text, Button, StyleSheet } from "react-native";


function PickDropDetails() {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.headerText}>Coming in 45 mins</Text>
                <View style={styles.customerCareBtn}>
                    <Button title="Customer Care" onPress={() => { }} />
                </View>
            </View>
          <View style={styles.timeColumn}>
                <View style={styles.timeContainer}>
                    <Text style={styles.time}>11:00</Text>
                    <Text style={styles.time}>22:00</Text>
                </View>
                <View style={styles.lineContainer}>
                </View>
                <View style={styles.locationContainer}>
                    <Text style={styles.locationText}>1205, Hotel DB Apollo Indore, MP</Text>
                    <Text style={styles.locationText}>Raja Bhoj Bhopal, MP</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10, 
        backgroundColor: '#fff',
        borderRadius: 32,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 15,   
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
      customerCareBtn: { 
        borderRadius: 14,   
        overflow: 'hidden', 
    },
   timeColumn: {
        flexDirection: 'row',
        alignItems: 'stretch', 
    },
    timeContainer: {
        justifyContent: 'space-between', 
        marginRight: 10,
    },
    time: {
        fontSize: 12,
        margin: 3,
    },
    lineContainer: {
        width: 1,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: 'gray',
        marginHorizontal: 10,
        marginVertical: 3,
        alignSelf: 'stretch',
    },
    locationContainer: {
        justifyContent: 'space-between',
        marginLeft: 10,
        marginVertical: 3,
    },
    locationText: {
        fontSize: 12,
        fontWeight: '500',
    },
});

export default PickDropDetails;