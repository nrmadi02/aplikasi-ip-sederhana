import { getIPRange } from 'get-ip-range';

export function decToBinOuter(ip, mask) {
	let resultArray = [];
	if (ip) {
		let ipArray = ip.split('.');
		ipArray = decToBinInner(ipArray);
		resultArray.push(ipArray);
	}
	if (mask) {
		let maskArray = mask.split('.');
		maskArray = decToBinInner(maskArray);
		resultArray.push(maskArray);
	}
	return resultArray;
}

function decToBinInner(array) {
	return array
		.map((elOut, indOut) => {
			let binElem = parseInt(elOut).toString(2);
			if (binElem.length !== 8) {
				const diffArray = Array(8 - binElem.length).fill('0');
				binElem = [binElem].concat(diffArray).reverse().join('');
			}
			return binElem;
		})
		.join('.');
}

export function binToDecOuter(ip, mask) {
	const resultArray = [];
	if (ip) {
		let ipArray = ip.split('.');
		ipArray = binToDecInner(ipArray);
		resultArray.push(ipArray);
	}
	if (mask) {
		let maskArray = mask.split('.');
		maskArray = binToDecInner(maskArray);
		resultArray.push(maskArray);
	}

	return resultArray;
}

function binToDecInner(array) {
	return array
		.map((elOut, indOut) => {
			return elOut
				.split('')
				.reverse()
				.map((elInn, indInn) => {
					return elInn * Math.pow(2, indInn);
				})
				.reduce((a, b) => a + b, 0);
		})
		.join('.');
}

export function calculateHosts(mask) {
	const dots = /\./gi,
		zero = /0/gi,
		maskLength = mask.replace(dots, '').replace(zero, '').length;

	return Math.pow(2, 32 - maskLength) - 2;
}

export const getRangeIp = (ip, host) => {
	let rangeIp;
	if (host === -1) {
		rangeIp = getIPRange(`${ip}/32`);
		return rangeIp;
	}
	if (host === 0) {
		rangeIp = getIPRange(`${ip}/31`);
		return rangeIp;
	}
	if (host === 2) {
		rangeIp = getIPRange(`${ip}/30`);
		return rangeIp;
	}
	if (host === 6) {
		rangeIp = getIPRange(`${ip}/29`);
		return rangeIp;
	}
	if (host === 14) {
		rangeIp = getIPRange(`${ip}/28`);
		return rangeIp;
	}
	if (host === 30) {
		rangeIp = getIPRange(`${ip}/27`);
		return rangeIp;
	}
	if (host === 62) {
		rangeIp = getIPRange(`${ip}/26`);
		return rangeIp;
	}
	if (host === 126) {
		rangeIp = getIPRange(`${ip}/25`);
		return rangeIp;
	}
	if (host === 254) {
		rangeIp = getIPRange(`${ip}/24`);
		return rangeIp;
	}
	if (host === 510) {
		rangeIp = getIPRange(`${ip}/23`);
		return rangeIp;
	}
	if (host === 1022) {
		rangeIp = getIPRange(`${ip}/22`);
		return rangeIp;
	}
	if (host === 2046) {
		rangeIp = getIPRange(`${ip}/21`);
		return rangeIp;
	}
	if (host === 4094) {
		rangeIp = getIPRange(`${ip}/20`);
		return rangeIp;
	}
	if (host === 8190) {
		rangeIp = getIPRange(`${ip}/19`);
		return rangeIp;
	}
	if (host === 16382) {
		rangeIp = getIPRange(`${ip}/18`);
		return rangeIp;
	}
	if (host === 32766) {
		rangeIp = getIPRange(`${ip}/17`);
		return rangeIp;
	}
	if (host === 65534) {
		rangeIp = getIPRange(`${ip}/16`);
		return rangeIp;
	}
	if (host === 131070) {
		rangeIp = getIPRange(`${ip}/15`);
		return rangeIp;
	}
	if (host === 262142) {
		rangeIp = getIPRange(`${ip}/14`);
		return rangeIp;
	}
	if (host === 524286) {
		rangeIp = getIPRange(`${ip}/13`);
		return rangeIp;
	}
	if (host === 1048574) {
		rangeIp = getIPRange(`${ip}/12`);
		return rangeIp;
	}
	if (host === 2097150) {
		rangeIp = getIPRange(`${ip}/11`);
		return rangeIp;
	}
	if (host === 4194302) {
		rangeIp = getIPRange(`${ip}/10`);
		return rangeIp;
	}
	if (host === 8388606) {
		rangeIp = getIPRange(`${ip}/9`);
		return rangeIp;
	}
	if (host === 16777214) {
		rangeIp = getIPRange(`${ip}/8`);
		return rangeIp;
	}
	if (host === 33554430) {
		rangeIp = getIPRange(`${ip}/7`);
		return rangeIp;
	}
	if (host === 67108862) {
		rangeIp = getIPRange(`${ip}/6`);
		return rangeIp;
	}
	if (host === 134217726) {
		rangeIp = getIPRange(`${ip}/5`);
		return rangeIp;
	}
	if (host === 268435454) {
		rangeIp = getIPRange(`${ip}/4`);
		return rangeIp;
	}
	if (host === 536870910) {
		rangeIp = getIPRange(`${ip}/3`);
		return rangeIp;
	}
	if (host === 1073741822) {
		rangeIp = getIPRange(`${ip}/2`);
		return rangeIp;
	}
	if (host === 2147483646) {
		rangeIp = getIPRange(`${ip}/1`);
		return rangeIp;
	}
};
