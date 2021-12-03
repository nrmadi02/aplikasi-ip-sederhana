import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({ onPress }) {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.label}>Calculate IP</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		paddingVertical: 10,
		backgroundColor: 'lightblue',
		borderRadius: 10,
	},
	label: {
		textAlign: 'center',
		fontSize: 15,
		fontWeight: 'bold',
		color: 'black',
	},
});
