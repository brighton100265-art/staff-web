export default async function handler(req, res) {
    if (req.method === 'POST') {
        // รับค่าจาก Make.com
        const { employee_id, leave_date } = req.body;
        
        // ตรงนี้คุณไม่ต้องใช้ kv แล้วครับ
        // เพราะเราจะให้หน้าเว็บไปดึงข้อมูลจาก Google Sheets ของคุณโดยตรงอยู่แล้ว
        
        // ตอบกลับ Make.com ว่าได้รับข้อมูลแล้ว
        return res.status(200).json({ 
            status: "success", 
            message: "Data received",
            received_id: employee_id 
        });
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
