import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID
};

const app =
  getApps().length
    ? getApps()[0]
    : initializeApp(firebaseConfig);

const db = getFirestore(app);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed"
    });
  }

  try {

    const {
      employee_id,
      leave_date
    } = req.body;

    await addDoc(
      collection(db, "leave_requests"),
      {
        employeeId: employee_id,
        leaveDate: leave_date,
        requestType: "LEAVE",
        createdAt:
          new Date().toISOString()
      }
    );

    return res.status(200).json({
      status: "success"
    });

  } catch (e) {

    return res.status(500).json({
      error: e.message
    });

  }

}
