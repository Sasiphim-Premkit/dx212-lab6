const buses = [
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true },
];

// แก้บั๊กที่ 1: นำปีกกาออกเพื่อให้ arrow function return ค่า boolean ออกมาทันที
const lateRoutes = buses.filter((b) => b.late).map((b) => b.route);

// แก้บั๊กที่ 2: ใส่ initial value เป็น 0 ให้กับ reduce เพื่อไม่ให้ตั้งต้นด้วย object ตัวแรก
const total = buses.reduce((sum, b) => sum + b.passengers, 0);

console.log("สายที่มาสาย:", lateRoutes); // ได้ ["NGV-2", "NGV-3"]
console.log("ผู้โดยสารรวม:", total); // ได้ 145