import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Input({ title, value, type, onChange, typeInput }) {
	const [border, setBorder] = useState('blue');
	const onFocus = () => {
		setBorder('lightblue');
	};
	const onBlur = () => {
		setBorder('grey');
	};
	let placeholder = '';
	if (typeInput === 'ipDecimal') {
		placeholder = '192.168.1.1';
	} else if (typeInput === 'maskDecimal') {
		placeholder = '255.255.255.192';
	}
	if (typeInput === 'ipBinary') {
		placeholder = '11000000.10101000.00000001.00110010';
	} else if (typeInput === 'maskBinary') {
		placeholder = '11111111.11111111.11111111.11000000';
	}
	return (
		<View>
			<Text style={styles.title}>
				{title} {type} :
			</Text>
			<TextInput
				onBlur={onBlur}
				onFocus={onFocus}
				style={styles.input(border)}
				placeholder={placeholder}
				value={value}
				maxLength={type === 'Decimal' ? 15 : 35}
				onChangeText={onChange}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: border => ({
		padding: 10,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: border,
	}),
	title: {
		fontSize: 16,
		color: '#7D8797',
		fontWeight: 'bold',
		marginBottom: 10,
	},
});
