export default async function handler(req, res) {
  if (req.method === 'POST') {
    // รับข้อมูลจาก Make.com
    const { employee_id, leave_date } = req.body;
    
    // บันทึกข้อมูลเพื่อตรวจสอบใน Logs ของ Vercel
    console.log("ได้รับข้อมูลการลา:", employee_id, leave_date);

    // ตอบกลับ Make.com ว่าได้รับข้อมูลแล้ว
    return res.status(200).json({ status: "success", message: "บันทึกสำเร็จ" });
  } else {
    // ป้องกันการเรียกใช้ด้วยวิธีอื่นที่ไม่ใช่ POST
    return res.status(405).json({ message: "ต้องใช้ Method POST เท่านั้น" });
  }
}
