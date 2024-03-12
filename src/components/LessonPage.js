import { useState, useRef } from "react";
import data from "./data";
import jsPDF from "jspdf";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";




function LessonPage() {
  let navigate = useNavigate();
  

  const { index } = useParams();


  const [allData, setAllData] = useState(data);
  const EachDownloadRef = useRef([]);
  EachDownloadRef.current = [];

  const handlePrint = (element, index) => {
    if (element && !EachDownloadRef.current.includes(element)) {
      EachDownloadRef.current.push(element);
    }
    const content = EachDownloadRef.current[index];
    const doc = new jsPDF("p", "pt", [800, 800]);
    doc.setFontSize(12);
    doc.html(content, {
      callback: function (doc) {
        doc.save("document");
      },
      x: 20,
      y: 20,
      width: 800,
      windowWidth: 800,
      margin: -20,
    });
  };

  return (

    
    <div className="container mt-5">
      <div className="row justify-content-center">
      <button
          className="btn btn-secondary m-5"
          onClick={() => navigate(`/account/${index}`)}
        >
          Back to Home
        </button>

        {allData.map((items, index) => {
          const { id, title, price, desc } = items;
          return (
            <div
              key={id}
              className="col-md-6 mb-3"
            >
              <div
                className="card"
                style={{ maxWidth: "540px" }}
                ref={(ref) => (EachDownloadRef.current[index] = ref)}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    {/* <img src={img} alt={title} className="img-fluid rounded-start" /> */}
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      {/* <p className="card-text">${price}</p> */}
                      <p className="card-text">{desc}</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          handlePrint(items, index);
                        }}
                      >
                        Download LESSON
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LessonPage;
