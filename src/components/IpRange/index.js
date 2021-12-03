import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function IpRange({ min, max }) {
	return (
		<View>
			<Text style={styles.title}>Range IP :</Text>
			<Text style={styles.info}>
				{min} - {max}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		textAlign: 'center',
		// fontWeight: 'bold',
		fontSize: 15,
	},
	info: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 15,
		marginTop: 5,
	},
});
