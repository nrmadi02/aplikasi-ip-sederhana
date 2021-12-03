import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Informasi({ title, info }) {
	return (
		<View style={styles.page}>
			<Text style={styles.title}>{title} : </Text>
			<Text style={styles.info}>{info}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderColor: 'grey',
	},
	title: {
		fontSize: 15,
	},
	info: {
		fontSize: 15,
		fontWeight: 'bold',
	},
});
