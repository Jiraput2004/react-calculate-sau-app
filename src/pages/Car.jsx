import React, { useState } from 'react';
import carImg from '../assets/car.png';
import Swal from "sweetalert2";

export default function Car() {
  // สร้าง State สำหรับเก็บข้อมูลฟอร์ม
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [interest, setInterest] = useState("");
  const [downPayment, setDownPayment] = useState("15"); // เก็บค่าเป็นเปอร์เซ็นต์ (เช่น "15")
  const [months, setMonths] = useState("12");
  const [monthlyPayment, setMonthlyPayment] = useState("0.00");

  // ฟังก์ชันคำนวณค่างวดรถ
  const handleCalculate = (e) => {
    e.preventDefault();

    // Validate ข้อมูลว่ากรอกครบไหม
    if (price === "" || interest === "") {
      Swal.fire({
        title: "คำเตือน",
        text: "กรุณากรอกราคารถและดอกเบี้ยต่อปีให้ครบถ้วน",
        icon: "warning",
      });
      return;
    }

    const carPrice = parseFloat(price);
    const annualInterest = parseFloat(interest) / 100;
    const downPercent = parseFloat(downPayment) / 100;
    const totalMonths = parseInt(months);

    // 1. คำนวณเงินดาวน์
    const downAmount = carPrice * downPercent;

    // 2. ยอดจัดไฟแนนซ์ (ยอดจัดหนี้ = ราคารถ - เงินดาวน์)
    const loanAmount = carPrice - downAmount;

    // 3. ดอกเบี้ยทั้งหมดตลอดสัญญา (1 ปี = 12 เดือน, ใช้สูตร ดอกเบี้ยคงที่: เงินต้น × ดอกเบี้ย% × (จำนวนเดือน / 12))
    const totalInterest = loanAmount * annualInterest * (totalMonths / 12);

    // 4. ยอดรวมทั้งหมดที่ต้องผ่อน (เงินต้น + ดอกเบี้ยทั้งหมด)
    const totalPayment = loanAmount + totalInterest;

    // 5. ค่างวดต่อเดือน
    const resultMonthly = totalPayment / totalMonths;

    setMonthlyPayment(resultMonthly.toFixed(2));
  };

  // ฟังก์ชันล้างข้อมูล
  const handleReset = (e) => {
    e.preventDefault();
    setName("");
    setPrice("");
    setInterest("");
    setDownPayment("15");
    setMonths("12");
    setMonthlyPayment("0.00");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-Kanit">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg flex flex-col items-center">
        
        {/* หัวข้อ */}
        <h1 className="text-2xl font-bold text-gray-800">Car Installment Calculator</h1>
        <p className="text-gray-500 mb-6">คำนวณ Car Installment</p>

        {/* รูปภาพ */}
        <div className="mb-6 flex justify-center">
          <img 
            src={carImg} 
            alt="Car Icon" 
            className="w-24 h-24 object-contain rounded-2xl shadow-md" 
          />
        </div>

        {/* ฟอร์มกรอกข้อมูล */}
        <form onSubmit={handleCalculate} className="w-full flex flex-col gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">ชื่อผู้คำนวณ</label>
            <input 
              type="text" 
              placeholder="กรอกชื่อผู้คำนวณ" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">ราคารถ (บาท)</label>
            <input 
              type="number" 
              placeholder="ระบุราคารถ" 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">ดอกเบี้ยต่อปี (%)</label>
            <input 
              type="number" 
              step="0.01"
              placeholder="เช่น 3.5" 
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            />
          </div>

          {/* เงินดาวน์ (%) */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">เงินดาวน์ (%)</label>
            <div className="flex flex-wrap gap-4 mt-1">
              {[
                { label: '15%', val: '15' },
                { label: '20%', val: '20' },
                { label: '25%', val: '25' },
                { label: '30%', val: '30' },
                { label: '35% N', val: '35' }
              ].map((item, index) => (
                <label key={index} className="flex items-center gap-1.5 cursor-pointer">
                  <input 
                    type="radio" 
                    name="downPayment" 
                    value={item.val}
                    checked={downPayment === item.val}
                    onChange={(e) => setDownPayment(e.target.value)}
                    className="w-4 h-4 text-blue-600" 
                  />
                  <span className="text-gray-700 text-sm">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* จำนวนเดือนที่ผ่อน */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">จำนวนเดือนที่ผ่อน</label>
            <select 
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            >
              <option value="12">12 เดือน</option>
              <option value="24">24 เดือน</option>
              <option value="36">36 เดือน</option>
              <option value="48">48 เดือน</option>
              <option value="60">60 เดือน</option>
              <option value="72">72 เดือน</option>
            </select>
          </div>

          {/* ปุ่มคำนวณและล้างข้อมูล */}
          <div className="flex gap-4 mt-2">
            <button 
              type="submit" 
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-medium transition cursor-pointer shadow-md"
            >
              คำนวณ
            </button>
            <button 
              type="button" 
              onClick={handleReset}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 p-3 rounded-lg font-medium transition cursor-pointer shadow-md"
            >
              ล้างข้อมูล
            </button>
          </div>
        </form>

        {/* ผลลัพธ์ */}
        <div className="mt-6 text-center">
          <p className="text-gray-700 font-medium">
            {name && <span className="block text-sm text-gray-500 mb-1">ผู้คำนวณ: {name}</span>}
            ผ่อนชำระต่อเดือน: <span className="text-blue-600 font-bold">{Number(monthlyPayment).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} บาท</span>
          </p>
        </div>

        {/* ปุ่มกลับหน้าหลัก */}
        <div className="w-full mt-6">
          <a 
            href="/"
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-lg font-medium transition cursor-pointer text-center block"
          >
            กลับหน้าหลัก
          </a>
        </div>

      </div>
    </div>
  );
}