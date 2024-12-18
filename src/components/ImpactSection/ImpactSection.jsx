import React, { useState, useEffect } from "react";
import "./ImpactSection.css"; // Assuming you will define your styles in this file

const ImpactSection = () => {
  const [impactData, setImpactData] = useState({
    booksDonated: 0,
    studentsHelped: 0,
    schoolsReached: 0,
  });

  useEffect(() => {
    // Simulate an API call to fetch data
    const fetchImpactData = () => {
      const data = {
        booksDonated: 123,
        studentsHelped: 456,
        schoolsReached: 789,
      };
      setImpactData(data);
    };

    fetchImpactData();
  }, []);

  return (
    <section className="impact-section">
      <div className="impact-rectangle">
        <h2 className="impact-title">OUR IMPACT SO FAR</h2>
        <div className="impact-numbers">
          <div className="impact-number">
            <h3>{impactData.booksDonated.toString().padStart(3, "0")}</h3>
            <small>Number of books Donated</small>
          </div>
          <div className="impact-number">
            <h3>{impactData.studentsHelped.toString().padStart(3, "0")}</h3>
            <small>Number of students helped</small>
          </div>
          <div className="impact-number">
            <h3>{impactData.schoolsReached.toString().padStart(3, "0")}</h3>
            <small>Number of schools reached</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
