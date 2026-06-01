export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed"
    });
  }

  try {

    return res.status(200).json({
      status: "success",
      received: req.body
    });

  } catch (e) {

    return res.status(500).json({
      error: e.message
    });

  }

}
