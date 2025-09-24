import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import InfoCards from './components/InfoCards'
import Footer from './components/Footer'
import NoticeBoard from './components/NoticeBoard'
import GovernorProfile from './pages/Leaders/Profiles/governer';
import NarendraSinghTomarProfile from './pages/Leaders/Profiles/narendraSinghTomer.jsx';
import GovernorsTable from './pages/Leaders/GovernerList.jsx';
import UmangSingharProfile from './pages/Leaders/Profiles/umangsinghar.jsx';
import MohanYadavProfile from './pages/Leaders/Profiles/cmMohanYadav.jsx';
import SpeakersList from './pages/Leaders/SpeakerList.jsx';
import DeputySpeakersList from './pages/Leaders/upadhyakshList.jsx';
import ChiefMinistersList from './pages/Leaders/chiefMinisterList.jsx';
import HistoryPage from './pages/About/History.jsx';
import ProfilePage from './pages/Leaders/Profiles/psProfile.jsx';
import GalleryFlex from './pages/Gallery/EventsGallery.jsx';
import VidhansabhaCategoryCarousel from './pages/About/VidhhanSabhaTour.jsx';
import DrPattabhiSeetaramayya from './governorprofilelist/drPattibhgov.jsx';
import ShriHariVinayakPatskarPage from './governorprofilelist/हरिविनायकपाटस्‍कर.jsx';
import ShriKyasamballiChengalRaoReddyPage2 from './governorprofilelist/क्‍यासम्‍बल्लिचेंगलरावरेड्डी.jsx';
import ShriPurushottamVinayakDixitPage from './governorprofilelist/पुरूषोत्‍तमविनायकदीक्षित.jsx';
import ShriSatyanarayanSinghPage from './governorprofilelist/सत्‍यनारायणसिंह.jsx';


function App() {
  return (
    
    <Router>
      <div id="root" className="max-w-[1280px] mx-auto p-8 text-center">
        <Navbar />

        <Routes>
          {/* Homepage Route */}
          <Route
            index
            element={
              <>
                <Banner />
                <InfoCards />
                <NoticeBoard />
                <Footer />
              </>
            }
          />

          {/* Optional: Redirect /home to / */}
          

          <Route path="/home" element={<Navigate to="/" />} />
             {/* Governor Profile Page */}
          <Route
            path="/gov"

            element={
              <>
                <GovernorProfile />
                
              </>
            }
          />
           <Route
            path="/govlst"
            element={
              <>
                <GovernorsTable />
                <Footer />
              </>
            }
          />
          <Route
            path="/pattabhi-seetharamaiah"
            element={
              <>
                <DrPattabhiSeetaramayya />
                <Footer />
              </>
            }
          />
          <Route
            path="/harivinayak-pataskar"
            element={
              <>
                <ShriHariVinayakPatskarPage
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/governors/chengalaraya-reddy"
            element={
              <>
                <ShriKyasamballiChengalRaoReddyPage2
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/governors/pv-dixit"
            element={
              <>
                <ShriPurushottamVinayakDixitPage
                />
                <Footer />
              </>
            }
          />

        <Route
            path="/governors/satyanarayan-singh"
            element={
              <>
                <ShriSatyanarayanSinghPage
                />
                <Footer />
              </>
            }
          />
          {/* narendra singh Profile Page */}
          <Route
            path="/nst"
            element={
              <>
                <NarendraSinghTomarProfile />
                <Footer />
              </>
            }
          />
          {/* Adhyaksh List  */}
          <Route
            path="/spklist"
            element={
              <>
                <SpeakersList />
                <Footer />
              </>
            }
          />
          {/* updahyksh list */}
          <Route
            path="/uplist"
            element={
              <>
                <DeputySpeakersList />
                <Footer />
              </>
            }
          />
          {/* umangsingh Profile Page */}
          <Route
            path="/umg"
            element={
              <>
                <UmangSingharProfile />
                <Footer />
              </>
            }
          />
          {/* mohanyadav Profile Page */}
          <Route
            path="/cm"
            element={
              <>
                <MohanYadavProfile />
                <Footer />
              </>
            }
          />
          {/* Chief Minister List  */}
          <Route
            path="/cmlist"
            element={
              <>
                <ChiefMinistersList />
                <Footer />
              </>
            }
          />
          {/* Histroy Page Route */}
          <Route
            path="/history"
            element={
              <>
                <HistoryPage />
                <Footer />
              </>
            }
          />
          {/* AP Singh Profile Page */}
           <Route
            path="/bio/ap-singh"
            element={
              <>
                <ProfilePage/>
                
              </>
            }
          />
          {/* ChayaChitr */}
           <Route
            path="/gallery"
            element={
              <>
                <GalleryFlex/>
                <Footer />
              </>
            }
          />
          <Route
            path="/vidhansabha-tour23"
            element={
              <>
                <VidhansabhaCategoryCarousel/>
                
              </>
            }
          />
         

          
        </Routes>
      </div>
    </Router>
  )
}

export default App