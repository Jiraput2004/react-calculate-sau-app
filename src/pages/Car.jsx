import React from 'react';
import carImg from '../assets/car.png'; // นำเข้ารูปภาพ car.png จากโฟลเดอร์ assets

export default function Car() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg flex flex-col items-center">
        
        {/* หัวข้อ */}
        <h1 className="text-2xl font-bold text-gray-800">Car Installment Calculator</h1>
        <p className="text-gray-500 mb-6">คำนวณ Car Installment</p>

        {/* แสดงรูปภาพ car.png */}
        <div className="mb-6 flex justify-center">
          <img 
            src={carImg} 
            alt="Car Icon" 
            className="w-24 h-24 object-contain rounded-2xl shadow-md" 
          />
        </div>

        {/* ฟอร์มกรอกข้อมูล */}
        <div className="w-full flex flex-col gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">ชื่อผู้คำนวณ</label>
            <input 
              type="text" 
              placeholder="" 
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">ราคารถ (บาท)</label>
            <input 
              type="number" 
              placeholder="" 
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">ดอกเบี้ยต่อปี (%)</label>
            <input 
              type="number" 
              placeholder="" 
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            />
          </div>

          {/* เงินดาวน์ (%) */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">เงินดาวน์ (%)</label>
            <div className="flex flex-wrap gap-4 mt-1">
              {['15%', '20%', '25%', '30%', '35%'].map((item, index) => (
                <label key={index} className="flex items-center gap-1.5 cursor-pointer">
                  <input type="radio" name="downPayment" defaultChecked={index === 0} className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* จำนวนเดือนที่ผ่อน */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">จำนวนเดือนที่ผ่อน</label>
            <select className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white">
              <option>12 เดือน</option>
              <option>24 เดือน</option>
              <option>36 เดือน</option>
              <option>48 เดือน</option>
              <option>60 เดือน</option>
              <option>72 เดือน</option>
            </select>
          </div>

          {/* ปุ่มคำนวณและล้างข้อมูล */}
          <div className="flex gap-4 mt-2">
            <button 
              type="button" 
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-medium transition cursor-pointer shadow-md"
            >
              คำนวณ
            </button>
            <button 
              type="button" 
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 p-3 rounded-lg font-medium transition cursor-pointer shadow-md"
            >
              ล้างข้อมูล
            </button>
          </div>
        </div>

        {/* ผลลัพธ์ */}
        <div className="mt-6 text-center">
          <p className="text-gray-700 font-medium">
            ผ่อนชำระต่อเดือน: <span className="text-blue-600 font-bold">0.00 บาท</span>
          </p>
        </div>

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