import React from "react";
import {
    PieChart,
    Pie,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell,
} from "recharts";

const partyData = [
    { name: "भारतीय जनता पार्टी", number: 164, color: "#FF6B35", link: "/misc/sadasyaganBJP16vs.pdf" },
    { name: "इंडियन नेशनल कांग्रेस", number: 65, color: "#3B82F6", link: "/misc/sadasyaganINC16vs.pdf" },
    { name: "भारत आदिवासी पार्टी", number: 1, color: "#DC143C", link: "/misc/sadasyaganBAP16vs.pdf" },
    { name: "रिक्त", number: 0, color: "#A0AEC0", link: "#" },
];

const sections = [
    {
        title: "",
        items: [
            { name: "क्षेत्रवार", link: "/misc/AllMember16vs.pdf" },
            { name: "महिला सदस्य", link: "/sadasyaganmahila" },
            { name: "प्रथम बार निर्वाचित सदस्य", link: "/misc/firsttimer16vs.pdf" },
            { name: "अनुसूचित जाति वर्ग", link: "/misc/SC16vs.pdf" },
            { name: "अनुसूचित जनजाति वर्ग", link: "/misc/ST16vs.pdf" },
            { name: "सदस्य-सूची", link: "/misc/sadasyasuchi16vs.pdf" },
            { name: "नक्शेवार", link: "/nakshewar" },
            { name: "ई-मेल", link: "/misc/16mlaemail.pdf" },
            { name: "उप चुनाव / दिवंगत / त्यागपत्र सदस्य", link: "/misc/16thvs_bi-election.pdf" }
        ],
    },
    {
        title: "दलीय स्थिति",
        items: [
            { name: "भारतीय जनता पार्टी", link: "/misc/BJP16vs.pdf" },
            { name: "इंडियन नेशनल कांग्रेस", link: "/misc/INC16vs.pdf" },
            { name: "भारत आदिवासी पार्टी", link: "/misc/BAP16vs.pdf" },

            { name: "सदस्य-विश्लेषण (षोडश विधानसभा)", link: "/misc/vsxvianalysis.pdf" },
            { name: "सोलहवीं विधान सभा के माननीय सदस्यों के जीवन वृत्त (अशोधित एवं अनंतिम)", link: "/misc/mlaprofilevsxvi100325.pdf" },
        ],
    },
];

const SadasyaganVartman = () => {
    return (
        <div className="comm-page">
            {/* HERO */}
            <div className="comm-hero">
                <div className="comm-hero-content">
                    <h1>षोडश (16वीं) विधान सभा</h1>
                    <p>सदस्य परिचय</p>
                </div>
            </div>

            {/* PIE CHART */}
            <div className="comm-section">
                <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                        <Pie
                            data={partyData}
                            dataKey="number"   // <-- Updated here
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={130}
                            label={({ name, percent }) =>
                                `${name} ${(percent * 100).toFixed(1)}%`
                            }
                            animationDuration={1500}
                        >
                            {partyData.map((entry, index) => (
                                <Cell key={index} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#1e293b",
                                borderRadius: "8px",
                                border: "none",
                                color: "#f8fafc",
                            }}
                        />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* SECTIONS GRID */}
            {sections.map((section, idx) => (
                <div key={idx} className="comm-section">
                    <h2>{section.title}</h2>
                    <div className="comm-grid">
                        {section.items.map((item, i) => (
                            <div key={i} className="comm-card">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: "none" }}
                                >
                                    {item.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SadasyaganVartman;