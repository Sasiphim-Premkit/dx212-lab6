const calcFare = (distanceKm) => {
	// ปัดเศษกิโลเมตรขึ้นก่อนคำนวณค่าโดยสาร
	if (!Number.isFinite(distanceKm) || distanceKm < 0) {
		return 0;
	}

	const roundedDistanceKm = Math.ceil(distanceKm);
	return roundedDistanceKm <= 2 ? 10 : 10 + (roundedDistanceKm - 2) * 2;
};

// ทดสอบกรณีต่าง ๆ ของค่าโดยสาร
const fareTests = [
	{ distanceKm: 0, expected: 10 },
	{ distanceKm: 2, expected: 10 },
	{ distanceKm: 2.1, expected: 12 },
	{ distanceKm: 5, expected: 16 },
	{ distanceKm: -1, expected: 0 },
	{ distanceKm: "3", expected: 0 },
];

fareTests.forEach(({ distanceKm, expected }) => {
	const actual = calcFare(distanceKm);
	console.assert(
		actual === expected,
		`calcFare(${distanceKm}) ได้ ${actual} แต่ควรได้ ${expected}`
	);
});

console.log(fareTests.map(({ distanceKm }) => calcFare(distanceKm)));




