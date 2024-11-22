import { useState } from 'react';
import {
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    Text,
    ToastAndroid,
    View,
    Image,
} from 'react-native';
import ContactLiveLocationButtons from './customButtons';
import driverDetails from '../driverDetails';
import AnimatedButton from 'react-native-custom-slider-button';
import EmergencyContacts from '../emergencyContacts';

const { width, height } = Dimensions.get('window');

function customModal() {

    const onButtonSwiped = (activated: boolean) => {
        if (activated) {
            ToastAndroid.show('SOS Trigerred calling 100', ToastAndroid.SHORT);
        }
    };

    return (
        <View style={styles.modalOverlay}>
            <TouchableOpacity style={styles.underlyingContent} onPress={() => { }} />
            <View style={styles.modalContent}>
                {driverDetails()}
                <ContactLiveLocationButtons />
                <EmergencyContacts />
                <View style={styles.sosContainer}>
                    <AnimatedButton
                        primaryTitle={"Swipe right to call 100  > >"}
                        secondaryTitle='Calling ...'
                        buttonHeight={55}
                        mainIcon={require('../../assets/sos.png')}
                        mainIconHeight={45}
                        mainIconWidth={45}
                        titleSize={22}
                        titleColor={"#000"}
                        onSwipeEnd={() => {
                            onButtonSwiped(true)
                        }}
                        buttonBackgroundColor={'#ff5555'}
                        backgroundImageRequired={false}
                    />
                </View>
                <View>
                    <Text>
                        If you call 100 in an emergency, the notification message will be
                        shown with your emergency contacts.
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    underlyingContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: height / 2,
    },
    modalContent: {
        backgroundColor: 'white',
        height: height / 2,
        paddingHorizontal: 20,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    sosContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginVertical: 5,
    },
});

export default customModal;
