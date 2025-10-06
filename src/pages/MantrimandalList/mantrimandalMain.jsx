import React from "react";
import { Link } from "react-router-dom";

const cabinetStatuses = [
  { date: "02/12/2024 से...", link: "/misc/Mantrimandal/MantrimandalMain/16MINISTER.pdf" },
  { date: "02/12/2024 तक की स्थिति", link: "/misc/Mantrimandal/MantrimandalMain/16MINISTER_021224.pdf" },
  { date: "07/07/2024 तक की स्थिति", link: "/misc/Mantrimandal/MantrimandalMain/16MINISTER_070724.pdf" },
];

const Ministers16thAssemblyPage = () => {
  return (
    <div className="pageWrapper">
      <h1 className="pageTitle">मंत्रिमण्डल (षोडश विधानसभा)</h1>

      <ul className="timeline">
        {cabinetStatuses.map((status, index) => (
          <li key={index} className="timelineItem">
            <div className="timelineDate">{status.date}</div>
            {status.link.endsWith(".pdf") ? (
              <a
                href={status.link}
                target="_blank"
                rel="noopener noreferrer"
                className="timelineButton"
              >
                देखें
              </a>
            ) : (
              <Link to={status.link} className="timelineButton">
                देखें
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ministers16thAssemblyPage;
