// User Story: "ในฐานะผู้ใช้ ฉันอยากเห็นรายการเมนูที่ราคาไม่เกินงบประมาณที่ตั้งไว้"

/**
 * กรองเมนูอาหารตามงบประมาณที่กำหนด
 * @param {Array<Object>} items - รายการอาหาร [{ name: string, price: number }]
 * @param {number} budget - งบประมาณ
 * @returns {Array<Object>} รายการที่ราคาไม่เกินงบ
 */
const filterMenuByBudget = (items, budget) => {
  // ตรวจสอบความถูกต้องของ Input
  if (!Array.isArray(items) || typeof budget !== "number" || budget < 0) {
    return [];
  }

  return items.filter((item) => typeof item.price === "number" && item.price <= budget);
};

// ข้อมูลจำลองสำหรับทดสอบ
const menuList = [
  { name: "ข้าวมันไก่", price: 50 },
  { name: "ข้าวผัดกะเพรา", price: 60 },
  { name: "สเต๊กเนื้อ", price: 150 },
  { name: "น้ำเปล่า", price: 10 },
];

// ทดสอบ 3 กรณี (รวม Edge Case)
console.log("กรณีที่ 1: งบ 55 บาท ->", filterMenuByBudget(menuList, 55));
// ได้: [ { name: 'ข้าวมันไก่', price: 50 }, { name: 'น้ำเปล่า', price: 10 } ]

console.log("กรณีที่ 2: งบ 200 บาท (ครอบคลุมทั้งหมด) ->", filterMenuByBudget(menuList, 200));
// ได้: ทั้ง 4 เมนู

console.log("กรณีที่ 3 (Edge Case): งบติดลบ ->", filterMenuByBudget(menuList, -10));
// ได้: []