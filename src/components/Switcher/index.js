import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function Switcher({ type, onChange }) {
	return (
		<View style={styles.page}>
			<View style={styles.container}>
				<Text style={styles.title}>
					{type ? 'Binary System' : 'Decimal System'}
				</Text>
				<Switch onValueChange={onChange} value={type} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	page: {
		marginTop: 10,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		padding: 10,
		alignItems: 'center',
	},
	title: {
		marginTop: 4,
		fontWeight: 'bold',
	},
});
