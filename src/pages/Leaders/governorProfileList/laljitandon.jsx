import React from "react";

const LalJiTandonPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Top Section */}
      <div style={styles.topProfileCard}>
        <div style={styles.photoFrame}>
          <img
            src="/leaders/guv-LalJiTandon.jpg" // Place image in public/leaders
            alt="Shri Lal Ji Tandon"
            style={styles.profileImage}
          />
        </div>
        <div style={styles.divider}></div>
        <div style={styles.nameFrame}>
          <h1 style={styles.topTitle}>Shri Lal Ji Tandon</h1>
          <h3 style={styles.topSubtitle}>(Ex Governor, Madhya Pradesh)</h3>
          <div style={styles.tenure}>
            (29/07/2019 – 21/07/2020)
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Personal Details:</h2>
        <p style={styles.paragraph}>
          Father's Name: Shri Shivnarayan Tandon <br />
          Mother's Name: Smt. Annpurna Devi <br />
          Date of Birth: 12th April, 1935 <br />
          Birth Place: Vill. Chowk, Distt. Lucknow, Uttar Pradesh <br />
          Marital Status: Married (26th Feb. 1958) <br />
          Spouse: Smt. Krishna Tandon <br />
          Children: 3 Sons <br />
          Qualifications: Graduate <br />
          Special Interests: Cattle rearing <br />
          Countries Visited: Netherlands, Japan, New Zealand, UAE <br />
          Social and Cultural Activities: Established educational, social, and cultural institutions in Avadh
        </p>

        {/* Career & Achievements */}
        <h2 style={styles.sectionTitle}>Positions Held:</h2>
        <p style={styles.paragraph}>
          - 1978-84 & 1990-96: Member, Uttar Pradesh State Legislative Council (two terms) <br />
          - 1991-92: Cabinet Minister, Department of Power, Govt. of Uttar Pradesh <br />
          - 1996-2009: Member, Uttar Pradesh Legislative Assembly (Three Times) <br />
          - 1997-99: Cabinet Minister, Urban Development and Water Supply, Govt. of Uttar Pradesh <br />
          - 1997-2002: Leader of House, Uttar Pradesh Legislative Council <br />
          - 1999-2000 & 2000-02: Cabinet Minister, Urban Development and Urban Poverty Alleviation (two times) <br />
          - 2002-03: Cabinet Minister, Housing, Finance, Urban Development and Tourism, Govt. of Uttar Pradesh <br />
          - 2003-07: Leader of Opposition, Uttar Pradesh Legislative Assembly <br />
          - 2009: Elected to 15th Lok Sabha (Lucknow Constituency) <br />
          - From 6 Aug. 2009: Member, Committee on Estimates <br />
          - From 31 Aug. 2009: Member, Committee on Railways <br />
          - 23/08/2018 – 28/07/2019: H.E. the Governor of Bihar
        </p>
      </div>
    </div>
  );
};

// SAME CSS as previous components
const colors = {
  primary: "#008b8b",
  secondary: "#004d4d",
  background: "#e0f7f7",
  text: "#222",
  cardBackground: "white",
  title: "white",
};

const styles = {
  pageWrapper: {
    fontFamily: "'Noto Sans Devanagari', sans-serif",
    backgroundColor: colors.background,
    padding: "1.5rem 1rem",
    maxWidth: 1100,
    margin: "auto",
    color: colors.text,
  },
  topProfileCard: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
    flexWrap: "wrap",
  },
  photoFrame: {
    backgroundColor: colors.cardBackground,
    padding: 10,
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    flexShrink: 0,
  },
  profileImage: {
    width: "180px",
    height: "auto",
    borderRadius: "10px",
    display: "block",
    boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
  },
  divider: {
    width: 5,
    height: 20,
    margin: "0 20px",
    background: "transparent",
    borderRadius: 2,
  },
  nameFrame: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: "2rem 3rem",
    color: colors.title,
    flex: 1,
    textAlign: "center",
    boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
    minWidth: 250,
  },
  topTitle: {
    fontSize: "2rem",
    margin: 0,
    fontWeight: "700",
    lineHeight: 1.1,
  },
  topSubtitle: {
    fontSize: "1.2rem",
    marginTop: "0.5rem",
    fontWeight: "500",
  },
  tenure: {
    marginTop: 6,
    fontWeight: "600",
    fontSize: "1rem",
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: "1.5rem 1.8rem",
    marginBottom: "2rem",
    boxShadow: "0 8px 14px rgba(0,0,0,0.08)",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    color: colors.primary,
    borderBottom: `3px solid ${colors.secondary}`,
    paddingBottom: 6,
    marginBottom: 15,
    fontWeight: "700",
  },
  paragraph: {
    fontSize: "1rem",
    lineHeight: 1.8,
    textAlign: "justify",
    marginBottom: "1rem",
    color: "#444",
  },
};

export default LalJiTandonPage;
