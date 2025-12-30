import React from "react";

const governors = [
  { number: 1, name: "डॉ. पट्टाभि सीतारामैया", tenure: "01/11/1956 से 13/06/1957", link: "/drPattibhgov", image: "/leaders/guv-pbsitaramaiya.jpg" },
  { number: 2, name: "श्री हरिविनायक पाटस्‍कर", tenure: "14/06/1957 से 10/02/1965", link: "/harivinayak-pataskar", image: "/leaders/guv-pataskar.jpg" },
  { number: 3, name: "श्री क्‍यासम्बिल चेंगलराव रेडडी", tenure: "11/02/1965 से 07/03/1971", link: "/chengalaraya-reddy", image: "/leaders/guv-kcreddy.jpg" },
  { number: 4, name: "श्री पी.वी.दीक्षित (कार्यवाहक)", tenure: "03/02/1966 से 09/02/1966", link: "/pv-dixit", image: "/leaders/Guv-white.jpg" },
  { number: 5, name: "श्री सत्‍यनारायण सिंह", tenure: "08/03/1971 से 13/10/1977", link: "/satyanarayan-singh", image: "/leaders/guv-snsinha.jpg" },
  { number: 6, name: "श्री निरंजन नाथ वांचू", tenure: "14/10/1977 से 16/08/1978", link: "/niranjan-nath-vanchu", image: "/leaders/guv-nnvanchu.jpg" },
  { number: 7, name: "श्री चेप्‍पुदिरा मुथाना पुनाचा", tenure: "17/08/1978 से 29/04/1980", link: "/cmpunacha", image: "/leaders/guv-cmpunacha.jpg" },
  { number: 8, name: "श्री भगवत दयाल शर्मा", tenure: "30/04/1980 से 14/05/1984", link: "/bd-sharma", image: "/leaders/guv-bdsharma.jpg" },
  { number: 9, name: "श्री गुरूप्रसन्‍न सिंह (कार्यवाहक)", tenure: "26/05/1981 से 09/07/1981", link: "/guruprasanna-singh", image: "/leaders/Guv-white.jpg" },
  { number: 10, name: "प्रोफेसर के.एम. चांडी", tenure: "15/05/1984 से 30/03/1989", link: "/km-chandy", image: "/leaders/guv-kmchandy.jpg" },
  { number: 11, name: "श्रीमती सरला ग्रेवाल", tenure: "31/03/1989 से 06/02/1990", link: "/sarla-grewal", image: "/leaders/guv-sgrewal.jpg" },
  { number: 12, name: "कुंवर महमूद अली खाँ", tenure: "06/02/1990 से 23/06/1993", link: "/mahmood-ali-khan", image: "/leaders/guv-kmakhan.jpg" },
  { number: 13, name: "श्री मोहम्‍मद शफी कुरैशी", tenure: "24/06/1993 से 21/04/1998", link: "/ms-qureshi", image: "/leaders/guv-msqureshi.jpg" },
  { number: 14, name: "डॉ. भाई महावीर", tenure: "22/04/1998 से 06/05/2003", link: "/bhai-mahavir", image: "/leaders/guv-bhaimahavir.jpg" },
  { number: 15, name: "श्री रामप्रकाश गुप्‍त", tenure: "07/05/2003 से 01/05/2004", link: "/ramprakash-gupta", image: "/leaders/guv-rpgupta.jpg" },
  { number: 16, name: "ले.ज.श्री कृष्‍ण मोहन सेठ", tenure: "02/05/2004 से 29/06/2004", link: "/km-seth", image: "/leaders/guv-kmseth.jpg" },
  { number: 17, name: "डॉ. बलराम जाखड़", tenure: "30/06/2004 से 29/06/2009", link: "/balram-jakhar", image: "/leaders/guv-jakhar.jpg" },
  { number: 18, name: "श्री रामेश्‍वर ठाकुर", tenure: "30/06/2009 से 07/09/2011", link: "/rameshwar-thakur", image: "/leaders/guv_thakur.jpg" },
  { number: 19, name: "श्री रामनरेश यादव", tenure: "08/09/2011 से 07/09/2016", link: "/ramnaresh-yadav", image: "/leaders/guv-rnyadav.jpg" },
  { number: 20, name: "श्री ओ. पी. कोहली", tenure: "08/09/2016 से 23/01/2018 ", link: "/op-kohli", image: "/leaders/guv-OPkohli.jpg" },
  { number: 21, name: "श्री ओ. पी. कोहली (कार्यवाहक)", tenure: "16/05/2018 से 02/06/2018", link: "/op-kohli-2", image: "/leaders/guv-OPkohli.jpg" },
  { number: 22, name: "श्रीमती आनंदीबेन पटेल", tenure: "23/01/2018 से 29/07/2019", link: "/anandiben-patel-1", image: "/leaders/guv-Anandipatel1.jpg" },
  { number: 23, name: "श्री लाल जी टंडन", tenure: "29/07/2019 से .. (21/07/2020 निधन)", link: "/lalji-tandon", image: "/leaders/guv-LalJiTandon.jpg" },
  { number: 24, name: "श्रीमती आनंदीबेन पटेल", tenure: "24/07/2020 से 08/07/2021", link: "/anandiben-patel-2", image: "/leaders/guv-Anandipatel1.jpg" },
  { number: 25, name: "श्री मंगुभाई पटेल", tenure: "08/07/2021 से ..", link: "/mangubhai-patel", image: "/leaders/governor_01.jpg" },
];

const GovernorsTable = () => {
  return (
    <section className="governors-section">
      <h2 className="section-heading">मध्यप्रदेश के माननीय राज्यपालों की सूची</h2>
      <div className="governors-grid">
        {governors.map((gov) => (
          <a key={gov.number} href={gov.link} className="governor-card">
            <article className="governor-info">
              <img src={gov.image} alt={gov.name} className="governor-image" />
              <div className="governor-details">
                <h3 className="governor-name">{gov.name}</h3>
                <p className="governor-tenure">{gov.tenure}</p>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
};

export default GovernorsTable;




