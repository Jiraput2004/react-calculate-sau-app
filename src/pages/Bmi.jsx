import { Link } from "react-router";
import bmi from "./../assets/bmi.png";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Bmi() {
  // สร้าง State สำหรับ handle ข้อมูลบน Component
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiValue, setBmiValue] = useState("0.00");

  // ฟังก์ชันคำนวณ BMI
  const handleCalculateBMI = (e) => {
    e.preventDefault();

    // Validate UI
    if (weight === "" || height === "") {
      Swal.fire({
        title: "คำเตือน",
        text: "กรุณาป้อนข้อมูลให้ครบถ้วน",
        icon: "warning", // แก้จาก wraning เป็น warning
      });
      return;
    }

    // แปลงส่วนสูงจาก cm เป็น m (ส่วนสูงหน่วยเป็นเซนติเมตร หาร 100 ยกกำลังสอง)
    const heightInMeters = parseFloat(height) / 100;
    const calculatedBmi = parseFloat(weight) / (heightInMeters * heightInMeters);

    setBmiValue(calculatedBmi.toFixed(2));
  };

  // ฟังก์ชันรีเซ็ตค่า
  const handleReset = (e) => {
    e.preventDefault();
    setWeight("");
    setHeight("");
    setBmiValue("0.00");
  };

  return (
    <>
      {/* เพิ่ม font-kanit ไว้ที่ div หลักด้านนอกสุด เพื่อให้ทุกข้อความในหน้านี้ใช้ฟอนต์ Kanit */}
      <div className="w-[50%] border-1 border-gray-300 mt-30 mx-auto rounded-2xl p-10 flex flex-col items-center gap-3 shadow-2xl font-kanit">
        {/* แสดงหัวเรื่องและรูป */}
        <h1 className="text-2xl font-bold text-blue-800">BMI Calculator</h1>
        <h3 className="text-xl text-gray-600">คำนวณ BMI</h3>
        <img src={bmi} alt="bmi" className="w-25 h-25" />

        {/* ส่วนแสดงฟอร์มกรอกข้อมูล */}
        <form onSubmit={handleCalculateBMI} className="w-full flex flex-col gap-3">
          <p className="text-lg">ป้อนน้ำหนัก (kg):</p>
          <input
            type="number"
            placeholder="น้ำหนัก"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border-1 border-gray-300 p-2 rounded-md font-kanit"
          />

          <p className="text-lg">ป้อนส่วนสูง (cm):</p>
          <input
            type="number"
            placeholder="ส่วนสูง"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border-1 border-gray-300 p-2 rounded-md font-kanit"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md mt-3 hover:bg-blue-700 cursor-pointer">
            คำนวณ
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-300 text-black p-2 rounded-md mt-1 hover:bg-gray-700 cursor-pointer">
            รีเซ็ต
          </button>
        </form>

        {/* ส่วนแสดงผลลัพธ์ */}
        <div className="w-full flex justify-center items-center mt-2">
          <p>ค่า BMI ที่คำนวณได้:</p>
          <p className="text-xl font-bold text-blue-800 ml-2">
            {bmiValue}
          </p>
        </div>

        {/* ส่วนแสดงลิงค์กลับไปหน้าหลัก */}
        <Link to="/" className="w-full text-center bg-gray-300 hover:bg-gray-700 p-2 rounded-md mt-5 text-black">
          กลับไปหน้าหลัก
        </Link>
      </div>
    </>
  );
}