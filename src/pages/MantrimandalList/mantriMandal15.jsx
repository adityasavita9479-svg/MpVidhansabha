import React from "react";

const previousCabinets = [
  { date: "11/12/2023 तक", link: "/misc/Mantrimandal/Mantrimandal15/15MINISTER.pdf" },
  { date: "25/08/2023 तक", link: "/misc/Mantrimandal/Mantrimandal15/15MINISTER2.pdf" },
  { date: "01/01/2021 तक", link: "/misc/Mantrimandal/Mantrimandal15/15MINISTER3.pdf" },
  { date: "11/11/2020 तक", link: "/misc/Mantrimandal/Mantrimandal15/15MINISTER4.pdf" },
  { date: "20/10/2020 तक", link: "/misc/Mantrimandal/Mantrimandal15/15MINISTER5.pdf" },
  { date: "01/07/2020 तक", link: "/misc/Mantrimandal/Mantrimandal15/15MINISTER6.pdf" },
  { date: "20/03/2020 तक", link: "/misc/Mantrimandal/Mantrimandal15/15MINISTER7.pdf" },
  { date: "05/01/2019 की स्थिति", link: "/misc/Mantrimandal/Mantrimandal15/15MINISTER8.pdf" },
];

const PreviousCabinetsPage = () => {
  return (
    <div className="pageWrapper">
      <h1 className="pageTitle"> मंत्रिमण्डल</h1>
      <h2 className="pageTitle"> (पंद्रहवीं विधानसभा)</h2>
      <ul className="timeline">
        {previousCabinets.map((item, index) => (
          <li key={index} className="timelineItem">
            <div className="timelineDate">￫ दिनांक {item.date}</div>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="timelineButton"
            >
              देखें
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviousCabinetsPage;
