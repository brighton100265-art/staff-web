export default async function handler(req, res) {
  if (req.method === 'POST') {

    const { employee_id, leave_date } = req.body;

    console.log("ได้รับข้อมูลการลา:", employee_id, leave_date);

    return res.status(200).json({
      status: "success",
      message: "บันทึกสำเร็จ"
    });

  } else {

    return res.status(405).json({
      message: "ต้องใช้ Method POST เท่านั้น"
    });

  }
}
