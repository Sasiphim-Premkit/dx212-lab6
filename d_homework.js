const team = [
  { name: "ฟ้า", role: "PO", tasksDone: 5 },
  { name: "ต้น", role: "Dev", tasksDone: 8 },
  { name: "มายด์", role: "SM", tasksDone: 3 },
  { name: "เจ", role: "Dev", tasksDone: 6 },
];

// 1. map รายชื่อ "ชื่อ (บทบาท)"
const memberNames = team.map((m) => `${m.name} (${m.role})`);
console.log(memberNames);

// 2. filter เฉพาะ Dev
const devMembers = team.filter((m) => m.role === "Dev");
console.log(devMembers);

// 3. reduce รวม tasksDone ทั้งทีม
const totalTasks = team.reduce((sum, m) => sum + m.tasksDone, 0);
console.log("งานรวมทั้งทีม:", totalTasks); // 22

// 4. รวม tasksDone เฉพาะ Dev
const devTasks = team
  .filter((m) => m.role === "Dev")
  .reduce((sum, m) => sum + m.tasksDone, 0);
console.log("งานรวมเฉพาะ Dev:", devTasks); // 14