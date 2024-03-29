import React from "react";
import DoctorCard from "./DoctorCard";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={"https://pngimg.com/uploads/doctor/small/doctor_PNG16043.png"}
          name="Dr. Kathryn Murphy"
          title="General Surgeons"
          stars={4.9}
          reviews={1800}
        />
        <DoctorCard
          img={"https://pngimg.com/uploads/doctor/small/doctor_PNG16017.png"}
          name="Dr. Jacob Jones"
          title="Hematologists"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={"https://pngimg.com/uploads/doctor/small/doctor_PNG16031.png"}
          name="Dr. Jenny Wilson"
          title="Endocrinologists"
          stars="4.7"
          reviews="450"
        />
        <DoctorCard
          img={"https://pngimg.com/uploads/doctor/small/doctor_PNG15988.png"}
          name="Dr. Albert Flores"
          title="Hematologists"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Doctors;
