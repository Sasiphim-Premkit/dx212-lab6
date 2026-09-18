// ฟังก์ชันคำนวณค่ารถ NGV ตามระยะทาง (กม.)
const calcFare = (distanceKm) => {
  // ตรวจสอบค่าที่ไม่ใช่ตัวเลข หรือระยะทางติดลบ
  if (typeof distanceKm !== "number" || distanceKm <= 0) {
    return 0;
  }

  // ปัดเศษของกิโลเมตรขึ้นเสมอ
  const totalKm = Math.ceil(distanceKm);

  // 2 กม.แรกคิด 10 บาท
  if (totalKm <= 2) {
    return 10;
  }

  // กม.ถัดไปคิดเพิ่ม กม.ละ 2 บาท
  return 10 + (totalKm - 2) * 2;
};

// ทดสอบ 3 กรณีตามโจทย์
console.log(calcFare(1.5)); // คาดหวัง: 10
console.log(calcFare(2));   // คาดหวัง: 10
console.log(calcFare(7.2)); // คาดหวัง: 22