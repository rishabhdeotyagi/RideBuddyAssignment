import { Button, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

function Homescreen() {

    const navigation = useNavigation();

    function goToRideScreen() {
        navigation.navigate('Current Ride');
    }

return (
    <View>
        <View>
            <Text>Welcome! Let's get started with your Ride...</Text>
            <Button title="Start Ride" onPress={goToRideScreen} />
        </View>
    </View>
)
}

export default Homescreen;
