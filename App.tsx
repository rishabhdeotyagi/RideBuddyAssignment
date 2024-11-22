import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./components/screens/Homescreen";
import CurrentRideScreen from "./components/screens/currentRideScreen";

function App() {

  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Homescreen} />
        <stack.Screen name="Current Ride" component={CurrentRideScreen}
          options={{
            headerTransparent: true,
            headerStyle: {
              backgroundColor: 'transparent'
            },
            headerTintColor: 'black'
          }} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;