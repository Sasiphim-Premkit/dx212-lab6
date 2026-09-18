# บันทึกการ Review โค้ด (Lab 6 - Part B)

## 1. คำอธิบายโค้ดทีละบรรทัด (จาก AI)
| บรรทัดโค้ด | ทำอะไร |
| :--- | :--- |
| `const team = [...]` | ประกาศ array เก็บ object ข้อมูลสมาชิกในทีม (ชื่อ, ตำแหน่ง, จำนวนงานที่เสร็จ) |
| `const memberNames = team.map(m => \`${m.name} (${m.role})\`);` | แปลง array ข้อมูลทีมเป็นข้อความรูปแบบ "ชื่อ (บทบาท)" |
| `const devMembers = team.filter(m => m.role === "Dev");` | กรองเอาเฉพาะสมาชิกที่มี role เท่ากับ "Dev" |
| `const totalTasks = team.reduce((sum, m) => sum + m.tasksDone, 0);` | รวมผลรวมของ tasksDone ทั้งทีม โดยเริ่มนับจาก 0 |
| `const devTasks = team.filter(m => m.role === "Dev").reduce((sum, m) => sum + m.tasksDone, 0);` | กรองเฉพาะ Dev แล้วนำ tasksDone ของ Dev มารวมกัน |

## 2. ผลการ Review และการปรับปรุง
- **คำแนะนำที่เลือกนำมาปรับใช้:** รวมการกรองและรวมงานของ Dev ด้วย `reduce` รอบเดียว หรือดึง logic การตรวจสอบ role ออกมา เพื่อลดการ loop ซ้ำซ้อน 2 รอบ (ในกรณีข้อมูลมีขนาดใหญ่)
- **เหตุผลที่เลือกข้อนี้:** ช่วยเพิ่มประสิทธิภาพการทำงานและลด memory usage
- **คำแนะนำที่ไม่เลือกนำมาใช้:** การเปลี่ยนไปใช้ library ภายนอก เช่น lodash เพราะโจทย์กำหนดให้ฝึกใช้ native JavaScript methods (ES6+)