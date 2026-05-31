export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { employee_id, leave_date } = req.body;
    console.log("ได้รับข้อมูลแล้ว:", employee_id, leave_date);
    return res.status(200).json({ status: "success" });
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
