import React from 'react';
import { View, StyleSheet } from 'react-native';

interface BlueCircleProps {
    size?: number;
    borderWidth?: number;
    borderColor?: string;
}

const CircularImage: React.FC<BlueCircleProps> = ({ size = 50, borderWidth = 2, borderColor = 'blue' }) => {
    return (
        <View style={[
            styles.circle,
            {
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: borderWidth,
                borderColor: borderColor,
            },
        ]} />
    );
};

const styles = StyleSheet.create({
    circle: {
        backgroundColor: 'black',
    },
});

export default CircularImage;
