import { Link } from "react-router";
import CardMenu from "../components/CardMenu";
import Footer from "../components/Footer";
import calculate from "./../assets/calculate.png";
import bmi from "./../assets/bmi.png";
import bmr from "./../assets/bmr.png";
import car from "./../assets/car.png";
 
export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        {/* ส่วนด้านบนแสดงรูป และชื่อแอป */}
        <img src={calculate} alt="Calculate" className="w-32 h-32 mt-20" />
 
        <h2 className="text-3xl font-bold mt-5 font-kanit text-blue-800">
          เครื่องมือคำนวณออนไลน์
        </h2>
 
        <h2 className="text-2xl mt-2 font-kanit text-blue-800">
          Calculate Tools Online
        </h2>
 
        <h4 className="text-lg mt-2 font-kanit text-grey-200">
          (เลือกการคำนวณที่คุณต้องการจากเมนูด้านล่าง)
        </h4>
 
        {/* ส่วนแสดงปุ่ม CardMenu เรียงกันแนวนอน 3 ปุ่ม  */}
        <div className="mt-10 flex gap-5">
          <Link to="/bmi">
            <CardMenu
              pImage={bmi}
              pTitle="BMI (ดัชนีมวลกาย)"
              pDescription="คำนวณว่าน้ำหนักของคุณเหมาะสมกับส่วนสูงหรือไม่"
            />
          </Link>
          <Link to="/bmr">
            <CardMenu
              pImage={bmr}
              pTitle="BMR (อัตราการเผาผลาญ)"
              pDescription="คำนวณอัตราการเผาผลาญพลังงานที่ร่างกายต้องการ"
            />
          </Link>
          <Link to="/car">
            <CardMenu
              pImage={car}
              pTitle="CAR (การผ่อนชำระ)"
              pDescription="คำนวณยอดผ่อนรถต่อเดือนทั้งรถเครื่องและรถยนต์"
            />
          </Link>
        </div>
 
        {/* ส่วนแสดง Footer */}
        <Footer />
      </div>
    </>
  );
}
 
