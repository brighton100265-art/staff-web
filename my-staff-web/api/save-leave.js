import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { employee_id, leave_date } = req.body;
    
    // บันทึกข้อมูลลงฐานข้อมูลโดยใช้ employee_id เป็นตัวระบุ
    await kv.set(`leave:${employee_id}`, leave_date);
    
    return res.status(200).json({ status: "success" });
  }
}
