import React, { useState } from 'react';
import bmrImg from '../assets/bmr.png'; 
import Swal from "sweetalert2";

export default function Bmr() {
  // สร้าง state สำหรับเก็บค่า input ของผู้ใช้
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState('male');
  const [bmr, setBmr] = useState("0.00");

  // สร้างฟังก์ชันสำหรับคำนวณ BMR
  const handleCalculateBMR = (e) => {
    e.preventDefault();

    // Validate ข้อมูลว่ากรอกครบไหม
    if (weight === "" || height === "" || age === "") {
      Swal.fire({
        title: "คำเตือน",
        text: "กรุณากรอกข้อมูลให้ครบถ้วน",
        icon: "warning",
      });
      return;
    }

    let calculatedBmr = 0;
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    // สูตรคำนวณ BMR (Harris-Benedict Formula)
    if (gender === 'male') {
      calculatedBmr = 66 + (13.7 * w) + (5 * h) - (6.8 * a);
    } else {
      calculatedBmr = 655 + (9.6 * w) + (1.8 * h) - (4.7 * a);
    }

    setBmr(calculatedBmr.toFixed(2)); // แก้ตรงนี้ให้เป็น calculatedBmr
  };

  // ฟังก์ชันรีเซ็ตค่า
  const handleReset = (e) => {
    e.preventDefault();
    setWeight("");
    setHeight("");
    setAge("");
    setGender("male");
    setBmr("0.00");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-Kanit">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg flex flex-col items-center">

        {/* หัวข้อ */}
        <h1 className="text-2xl font-bold text-gray-800">BMR Calculator</h1>
        <p className="text-gray-500 mb-6">คำนวณ BMR</p>

        {/* แสดงรูปภาพ bmr.png */}
        <div className="mb-6 flex justify-center">
          <img
            src={bmrImg}
            alt="BMR Icon"
            className="w-24 h-24 object-contain rounded-2xl shadow-md"
          />
        </div>

        {/* ฟอร์มกรอกข้อมูล (ใช้ onSubmit จัดการการกด Enter หรือกดปุ่ม submit) */}
        <form onSubmit={handleCalculateBMR} className="w-full flex flex-col gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">ป้อนน้ำหนัก (กิโลกรัม)</label>
            <input
              type="number"
              placeholder="น้ำหนัก"
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">ป้อนส่วนสูง (เซนติเมตร)</label>
            <input
              type="number"
              placeholder="ส่วนสูง"
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">ป้อนอายุ (ปี)</label>
            <input
              type="number"
              placeholder="อายุ"
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">เพศ:</label>
            <div className="flex gap-6 mt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="gender" 
                  value="male" 
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-4 h-4 text-indigo-600" 
                />
                <span className="text-gray-700">ชาย</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="gender" 
                  value="female"  
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-4 h-4 text-indigo-600" 
                />
                <span className="text-gray-700">หญิง</span>
              </label>
            </div>
          </div>

          {/* ปุ่มคำนวณและรีเซ็ต */}
          <div className="flex gap-4 mt-2">
            {/* ปุ่มคำนวณ ใช้ type="submit" เพื่อให้ส่งค่าเข้าฟอร์ม onSubmit อัตโนมัติ ไม่ต้องใส่ onClick */}
            <button
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg font-medium transition cursor-pointer shadow-md"
            >
              คำนวณ BMR
            </button>
            {/* ปุ่มรีเซ็ต ใช้ type="button" และผูกกับ onClick={handleReset} เท่านั้น */}
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg font-medium transition cursor-pointer shadow-md"
            >
              รีเซ็ต
            </button>
          </div>
        </form>

        {/* ผลลัพธ์ */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            ค่า BMR ที่คำนวณได้: <span className="text-indigo-600 font-bold">
              {bmr}
            </span> กิโลแคลอรี
          </p>
        </div>

        {/* ปุ่มกลับหน้าหลัก */}
        <div className="w-full mt-6">
          <button
            type="button"
            onClick={() => window.location.href = "/"}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-lg font-medium transition cursor-pointer"
          >
            กลับหน้าหลัก
          </button>
        </div>

      </div>
    </div>
  );
}