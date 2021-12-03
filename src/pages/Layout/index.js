import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {
	Button,
	Gap,
	InformasiField,
	Input,
	Switcher,
	useForm,
	decToBinOuter,
	calculateHosts,
	binToDecOuter,
	IpRange,
} from '../../components';
import { getRangeIp } from '../../components/index';

export default function Layout() {
	const [hasil, setHasil] = useState(false);
	const [informasi, setInformasi] = useState({
		ip: '',
		mask: '',
		max_host: '',
	});
	const [type, setType] = useState(false);
	const [form, setForm] = useForm({
		ip: '',
		mask: '',
	});
	const [range, setRange] = useState({
		min: '',
		max: '',
	});
	const onChangeType = value => {
		setType(value);
		setForm('reset');
		setHasil(false);
	};
	const onCalculate = async () => {
		if (form.mask.length > 0 && form.ip.length > 0) {
			setHasil(true);
			let ip, mask, maskLength, maxHost;
			if (type === false) {
				[ip, mask] = decToBinOuter(form.ip, form.mask);
				maskLength = mask;
				maxHost = calculateHosts(maskLength);
				const ipRange = await getRangeIp(form.ip, maxHost);
				setRange({
					min: ipRange[0],
					max: ipRange[ipRange.length - 1],
				});
			} else if (type === true) {
				maskLength = form.mask;
				[ip, mask] = binToDecOuter(form.ip, form.mask);
				maxHost = calculateHosts(maskLength);
				const ipRange = await getRangeIp(ip, maxHost);
				setRange({
					min: ipRange[0],
					max: ipRange[ipRange.length - 1],
				});
			}
			setInformasi({
				ip: ip,
				mask: mask,
				max_host: maxHost,
			});
		} else {
			setHasil(false);
		}
	};
	return (
		<View style={styles.page}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View>
					<Switcher type={type} onChange={onChangeType} />
					<Text style={styles.title}>
						Aplikasi Ip Calculate Sederhana
					</Text>
					<View style={styles.inputField}>
						<Input
							title={'IP'}
							type={type ? 'Binary' : 'Decimal'}
							value={form.ip}
							onChange={value => setForm('ip', value)}
							typeInput={`ip${type ? 'Binary' : 'Decimal'}`}
						/>
						<Gap height={20} />
						<Input
							title={'MASK'}
							type={type ? 'Binary' : 'Decimal'}
							value={form.mask}
							onChange={value => setForm('mask', value)}
							typeInput={`mask${type ? 'Binary' : 'Decimal'}`}
						/>
					</View>
					<View style={styles.buttonField}>
						<Button onPress={onCalculate} />
					</View>
					<Gap height={20} />
					<Text style={styles.hasil}>Hasil Calculate IP :</Text>
					{hasil && (
						<View style={styles.informasi}>
							<InformasiField
								title={`IP ${type ? 'Decimal' : 'Binary'}`}
								info={informasi.ip}
							/>
							<Gap height={20} />
							<InformasiField
								title={`MASK ${type ? 'Decimal' : 'Binary'}`}
								info={informasi.mask}
							/>
							<Gap height={20} />
							<InformasiField
								title={'MAX HOST'}
								info={informasi.max_host}
							/>
							<Gap height={10} />
							<IpRange min={range.min} max={range.max} />
						</View>
					)}
					{!hasil && (
						<Text style={{ textAlign: 'center' }}>
							Data belum diinput atau Data yang dinput tidak Benar
						</Text>
					)}
				</View>
			</ScrollView>
			<Text style={styles.credit}>By: HMP-TI UNISKA</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	page: {
		backgroundColor: 'white',
		flex: 1,
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	inputField: {
		padding: 20,
	},
	buttonField: {
		paddingTop: 10,
		paddingHorizontal: 20,
	},
	hasil: {
		fontSize: 20,
		textAlign: 'center',
		borderTopWidth: 1,
		padding: 10,
		borderColor: 'lightblue',
	},
	informasi: {
		borderRadius: 20,
		borderWidth: 1,
		marginHorizontal: 15,
		padding: 10,
		paddingHorizontal: 15,
		paddingBottom: 10,
	},
	credit: {
		textAlign: 'center',
		marginBottom: 20,
	},
});
