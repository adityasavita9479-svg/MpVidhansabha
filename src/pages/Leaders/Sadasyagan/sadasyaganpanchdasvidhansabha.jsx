import React from "react";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "भारतीय जनता पार्टी", value: 127 },
  { name: "इंडियन नेशनल कांग्रेस", value: 96 },
  { name: "बहुजन समाज पार्टी", value: 2 },
  { name: "समाजवादी पार्टी", value: 1 },
  { name: "निर्दलीय", value: 4 },
];

const COLORS = ["#f97316", "#2563eb", "#22c55e", "#a855f7", "#facc15"];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, name, value }) => {
  const radius = outerRadius * 1.25;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const wrapText = (text, maxLength = 10) => {
    const words = text.split(" ");
    let line = "";
    const lines = [];
    words.forEach((word) => {
      if ((line + word).length > maxLength) {
        lines.push(line.trim());
        line = word + " ";
      } else {
        line += word + " ";
      }
    });
    lines.push(line.trim());
    return lines;
  };

  const wrappedLines = wrapText(name);

  return (
    <text
      x={x}
      y={y}
      fill="#111827"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={13}
      fontWeight="500"
    >
      {wrappedLines.map((line, i) => (
        <tspan x={x} dy={i === 0 ? 0 : 16} key={i}>
          {line}
        </tspan>
      ))}
      <tspan x={x} dy={16} fontSize="12" fill="#4b5563">
        ({value})
      </tspan>
    </text>
  );
};

// Card Data
const cardItems1 = [
  { title: "नवम्बर, 2021 उप चुनाव में निर्वाचित सदस्य", link: "/misc/byeelection021121.pdf" },
  { title: "नवम्बर, 2020 उप चुनाव में निर्वाचित सदस्य", link: "/misc/byeelection101120.pdf" },
  { title: "क्षेत्रवार", link: "/misc/15mla-no.pdf" },
  { title: "नामवार", link: "/misc/15mla-name.pdf" }, // FIXED
  { title: "सदस्य-सूची (PDF)", link: "/misc/sadasyasuchi.pdf" },
  { title: "महिला सदस्य", link: "/15mlamahila" },
  { title: "प्रथम बार निर्वाचित सदस्य", link: "/misc/15mla-ftm.pdf" },
  { title: "नक्शेवार", link: "/pdfs/map-wise-members.pdf", route: "/maps/panchdash" },
  { title: "उप चुनाव में निर्वाचित सदस्य / दिवंगत सदस्य / सदस्यता त्यागने वाले सदस्य", link: "/misc/15thvs_bi-election.pdf" },
];

// Party List
const partyList = [
  { name: "इंडियन नेशनल काँग्रेस", link: "/misc/15mla-inc.pdf" },
  { name: "भारतीय जनता पार्टी", link: "/misc/15mla-bjp.pdf" },
  { name: "बहुजन समाज पार्टी", link: "/misc/15mla-bsp.pdf" },
  { name: "समाजवादी पार्टी", link: "/misc/15mla-sp.pdf" },
  { name: "निर्दलीय", link: "/misc/15mla-ind.pdf" },
];

const analysisItems = [
  { title: "सदस्य-विश्लेषण (पंचदश विधानसभा)", link: "/misc/vsxvanalysis.pdf" },
  { title: "सदस्यों की आवृत्तिवार सूची (23 अगस्त, 2021 तक की स्थिति)", link: "/misc/15mlafreq230821.pdf" },
  { title: "संपत्ति का विवरण", link: "/pdfs/property-details.pdf", route: "/sadasyagan/sampativivran/panchdash" },
];

const SadasyaganPanchdash = () => {
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    if (item.route) navigate(item.route);
    else if (item.link) window.open(item.link, "_blank");
  };

  return (
    <div className="comm-page">
      {/* HERO */}
      <section className="comm-hero">
        <div className="comm-hero-content">
          <h1>पंचदश विधान सभा</h1>
          <p>सदस्य परिचय</p>
        </div>
      </section>

      {/* PIE CHART */}
      <section className="comm-section">
        <div className="comm-card" style={{ padding: 20 }}>
          <div style={{ width: "100%", maxWidth: 700, height: 520, margin: "0 auto" }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  dataKey="value"
                  label={renderCustomizedLabel}
                  labelLine
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} stroke="#fff" strokeWidth={2} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} सदस्य`]} />
                <Legend layout="horizontal" align="center" verticalAlign="bottom" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* MEMBER CARDS */}
      <section className="comm-section">
        <h3 className="comm-section-title">विधानसभा सदस्य विवरण</h3>
        <div className="comm-grid">
          {cardItems1.map((item, i) => (
            <div key={i} className="comm-card comm-clickable" onClick={() => handleCardClick(item)}>
              <p className="comm-card-title">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* दलीय स्थिति (UPDATED to GRID CARDS like Chaturdash) */}
      <section className="comm-section">
        <div className="comm-card" style={{ background: "#e0f2fe", padding: "25px", borderRadius: "12px" }}>
          <h3 style={{ marginBottom: "15px" }}>￫ दलीय स्थिति :</h3>

          <div
            className="comm-grid"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "15px" }}
          >
            {partyList.map((party, i) => (
              <div
                key={i}
                className="comm-card"
                onClick={() => window.open(party.link, "_blank")}
                style={{ padding: "15px 20px", textAlign: "center", fontWeight: 500 }}
              >
                {party.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANALYSIS */}
      <section className="comm-section">
        <div className="comm-grid">
          {analysisItems.map((item, i) => (
            <div
              key={i}
              className="comm-card comm-clickable"
              onClick={() => (item.route ? navigate(item.route) : window.open(item.link, "_blank"))}
            >
              <p className="comm-card-title">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SadasyaganPanchdash;