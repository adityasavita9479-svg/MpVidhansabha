import React from "react";
import { Link } from "react-router-dom";


const olderCabinets = [
  {
    date: "17/12/2018 तक",
    assembly: "चतुर्दश विधानसभा",
    details: "",
    link: "/misc/Mantrimandal/Mantrimandal14/14MINISTER.pdf"
  },
  {
    date: "01/12/2013",
    assembly: "चतुर्दश विधानसभा",
    details: "मध्यप्रदेश राजपत्र (असाधारण) क्रमांक - 570",
    link: "/cabinet-01122013"
  },
  // {
  //   date: "16/08/2013",
  //   assembly: "त्रयोदश विधानसभा",
  //   details: "मध्यप्रदेश राजपत्र (असाधारण) क्रमांक - 370 एवं 371",
  //   link: "/cabinet-16082013"
  // },
  // {
  //   date: "17/06/2008",
  //   assembly: "द्वादश विधानसभा",
  //   details: "मध्यप्रदेश राजपत्र (असाधारण) क्रमांक - 298",
  //   link: "/cabinet-17062008"
  // }
];

const OlderCabinetsPage = () => {
  return (
    <div className="pageWrapper">
      <h1 className="pageTitle">मंत्रिमण्डल </h1>
      <h1 className="pageTitle">(चतुर्दश विधानसभा)</h1>

      <ul className="timeline">
        {olderCabinets.map((item, index) => (
          <li key={index} className="timelineItem">
            <div className="timelineDate">￫ दिनांक {item.date}</div>
            <div className="timelineAssembly">{item.assembly}</div>
            {item.details && <div className="timelineDetails">{item.details}</div>}
            {item.link.endsWith(".pdf") ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="timelineButton"
              >
                देखें
              </a>
            ) : (
              <Link to={item.link} className="timelineButton">
                देखें
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OlderCabinetsPage;
