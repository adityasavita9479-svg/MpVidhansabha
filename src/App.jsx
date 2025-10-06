import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import InfoCards from './components/InfoCards'
import Footer from './components/Footer'
import NoticeBoard from './components/NoticeBoard'
import HistoryPage from './pages/About/History.jsx';
import ProfilePage from './pages/Leaders/Profiles/psProfile.jsx';
import GalleryFlex from './pages/Gallery/EventsGallery.jsx';
import VidhansabhaCategoryCarousel from './pages/About/VidhhanSabhaTour.jsx';
// Governor Profile Imports
import GovernorProfile from './pages/Leaders/Profiles/governer';
// Governor List Import
import GovernorsTable from './pages/Leaders/GovernerList.jsx';
// Individual Governor Profile Imports
import DrPattabhiSeetaramayyaPage from './pages/Leaders/governorProfileList/drPattibhgov.jsx'
import ShriHariVinayakPatskarPage from './pages/Leaders/governorProfileList/hariVinayakpathskar.jsx';
import ShriKyasamballiChengalRaoReddyPage2 from './pages/Leaders/governorProfileList/chengalRaoReddy.jsx';
import ShriPurushottamVinayakDixitPage from './pages/Leaders/governorProfileList/puruShottamvinayakdixit.jsx';
import ShriSatyanarayanSinghPage from './pages/Leaders/governorProfileList/Satyanarayansingh.jsx';
import ShriNiranjanNathVanchuPage from './pages/Leaders/governorProfileList/ShriNiranjanNathVanchoo.jsx';
import CMPoonachaPage from './pages/Leaders/governorProfileList/ShriCheppudiraMuthanaPunacha.jsx';
import ShriBhagwatDayalSharmaPage from './pages/Leaders/governorProfileList//ShriBhagwatDayalSharma.jsx';
import ShriGuruprasannanSinghPage from './pages/Leaders/governorProfileList/ShriGuruprasaanSingh.jsx';
import ProfessorKMChandyPage from './pages/Leaders/governorProfileList/kmchandi.jsx';
import SmtSarlaGrewalPage from './pages/Leaders/governorProfileList/sarlaGrewal.jsx';
import KunwarMahmoodAliKhanPage from './pages/Leaders/governorProfileList/mohummadalikhan.jsx';
import MohammadShafiQuraishiPage from './pages/Leaders/governorProfileList/shafiquerashi.jsx';
import BhaiMahavirPage from './pages/Leaders/governorProfileList/bhaimahaveer.jsx';
import RamPrakashGuptaPage from './pages/Leaders/governorProfileList/ramprakashgupta.jsx';
import KrishnaMohanSethPage from './pages/Leaders/governorProfileList/lftgenralkrishnamohanseth.jsx';
import BalramJakharPage from './pages/Leaders/governorProfileList/balramjakhad.jsx';
import RameshwarThakurPage from './pages/Leaders/governorProfileList/rameshwarthaku.jsx';
import RamNareshYadavPage from './pages/Leaders/governorProfileList/ramnareshyadav.jsx';
import OPKohliPage from './pages/Leaders/governorProfileList/opkohli.jsx';
import AnandibenPatelPage from './pages/Leaders/governorProfileList/anandibenpatel.jsx';
import LalJiTandonPage from './pages/Leaders/governorProfileList/laljitandon.jsx';
// Adhyaksh Profile Imports-----------------------------------------------------------------------------------
import NarendraSinghTomarProfile from './pages/Leaders/Profiles/narendraSinghTomer.jsx';
// Adhyaksh List Import
import SpeakersList from './pages/Leaders/AdhyakhList.jsx';
// Individual Adhyaksh Profile Imports
import KunjiLalDubePage from './pages/Leaders/adhyakshProfilelist/kunjiLaldubey.jsx';
import KashiPrasadPandePage from './pages/Leaders/adhyakshProfilelist/kashiprasadpandey.jsx';
import TejLalTembharePage from './pages/Leaders/adhyakshProfilelist/tejlalThembare.jsx';
import GulSherAhmedPage from './pages/Leaders/adhyakshProfilelist/gulSherAhmed.jsx';
import MukundSakharamNewalkarPage from './pages/Leaders/adhyakshProfilelist/mukundSukhramNewalkar.jsx';
import YagyadattSharmaPage from './pages/Leaders/adhyakshProfilelist/yagyadattsharma.jsx';
import RamkishorShuklaPage from './pages/Leaders/adhyakshProfilelist/ramKishoreShukla.jsx';
import RajendraPrasadShuklaPage from './pages/Leaders/adhyakshProfilelist/rajendraPrasadShukla.jsx';
import BrijMohanPage from './pages/Leaders/adhyakshProfilelist/brijMohan.jsx';
import ShriniwasTiwariPage from './pages/Leaders/adhyakshProfilelist/shriNiwasTiwari.jsx';
import IshwarDasRohaniPage from './pages/Leaders/adhyakshProfilelist/ishwarDasRohani.jsx';
import SitasaranSharmaPage from './pages/Leaders/adhyakshProfilelist/sitaSaranSharma.jsx';
import NarmadaPrasadPrajapatiPage from './pages/Leaders/adhyakshProfilelist/narmadaPrasasdPrajapati.jsx';
import GirishGoutamPage from './pages/Leaders/adhyakshProfilelist/girishGoutam.jsx';
import TemporarySpeakers from './pages/Leaders/adhyakshProfilelist/tableSamayik.jsx';
// Upadhyash List ---------------------------------------------------------------------------------------
import DeputySpeakersList from './pages/Leaders/upadhyakshList.jsx';
// Previous Upadhyaksh Profile Imports-------------------------------------------------------------------
import VishnuVinayakSarwatePage from './pages/Leaders/upadhyakshProfileList/vishnuVinayakSarwate.jsx';
import AnantSadaShivPatwardhan from './pages/Leaders/upadhyakshProfileList/anantSadaShivPatwardhan.jsx';
import NarbadaPrasadShrivastavPage from './pages/Leaders/upadhyakshProfileList/narbadaPrasadShrivastav.jsx';
import RamkishorShuklaPage1 from './pages/Leaders/adhyakshProfilelist/ramKishoreShukla.jsx';
import NarayanPrasadShuklaPage from './pages/Leaders/upadhyakshProfileList/narayanPrasadShukla.jsx';
import SwaimalJainPage from './pages/Leaders/upadhyakshProfileList/sawaiMaljain.jsx';
import RamchandraMaheshwariPage from './pages/Leaders/upadhyakshProfileList/ramChandraMaheshwari.jsx';
import PyareLalKanwarPage from './pages/Leaders/upadhyakshProfileList/pyareLalKanwar.jsx';
import KanhaiyalalYadavPage from './pages/Leaders/upadhyakshProfileList/kanhaiyalalYadav.jsx';
import NiwasTiwariPage from './pages/Leaders/upadhyakshProfileList/niwastTiwari.jsx';
import BhurelalPatidarPage from './pages/Leaders/upadhyakshProfileList/bhureLalPatidar.jsx';
import RohaniPage from './pages/Leaders/upadhyakshProfileList/rohaniDas.jsx';
import HajariLalRaghuwanshiPage from './pages/Leaders/upadhyakshProfileList/hajariLalRaghuwanshi.jsx';
import HarvanshSinghPage from './pages/Leaders/upadhyakshProfileList/harwanshSingh.jsx';
import RjKumarSinghPage from './pages/Leaders/upadhyakshProfileList/rjKumarSingh.jsx';
import HinaLikhiramKanware from './pages/Leaders/upadhyakshProfileList/hinaLikhiRamKanware.jsx';
// Umang singhar profile import
import UmangSingharProfile from './pages/Leaders/Profiles/umangsinghar.jsx';
// Netapratipaksh List Import
import NetapratipakshList from './pages/Leaders/netaPratiPakshlist.jsx';
// Neta pratipaksh Profile import
import VishwanathTamascarPage from './pages/Leaders/netapratipakshProfilelist/vishwanathyadavraoTamaskar.jsx';
import ChandraPratapTiwariPage from './pages/Leaders/netapratipakshProfilelist/chandraPratapTiwari.jsx';
import VirendraPratapSackhlecha from './pages/Leaders/netapratipakshProfilelist/virendraPratapSackhlecha.jsx';
import ShyamCharanShukla from './pages/Leaders/netapratipakshProfilelist/shymCharanShukla.jsx';
import DwarikaPrasadMishra from './pages/Leaders/netapratipakshProfilelist/dwarikaPrasadMishra.jsx';
import VasantSadashivPradhanPage from './pages/Leaders/netapratipakshProfilelist/vasantSadaShivPradhan.jsx';
import KailashJoshiPage from './pages/Leaders/netapratipakshProfilelist/kailasjJoshi.jsx';
import ArjunSinghPage from './pages/Leaders/netapratipakshProfilelist/arjunSingh.jsx';
import SundarlalPatwaPage from './pages/Leaders/netapratipakshProfilelist/sundarlalPatwa.jsx';
import VikramVermaPage from './pages/Leaders/netapratipakshProfilelist/vikramVerma.jsx';
import GourishankarShejwar from './pages/Leaders/netapratipakshProfilelist/gourishankarShejwar.jsx';
import BabulalGaurPage from './pages/Leaders/netapratipakshProfilelist/babuLalGour.jsx';
import JamunaDeviPage from './pages/Leaders/netapratipakshProfilelist/jamunaDevi.jsx';
import AjaySinghPage from './pages/Leaders/netapratipakshProfilelist/ajaySingh.jsx';
import SatyadevKatarePage from './pages/Leaders/netapratipakshProfilelist/satyadevKatare.jsx';
import GopalBhargavaPage from './pages/Leaders/netapratipakshProfilelist/gopalBhargav.jsx';
import KamalNathPage from './pages/Leaders/netapratipakshProfilelist/kamalNath.jsx';
import GovindSinghPage from './pages/Leaders/netapratipakshProfilelist/govindSingh.jsx';
// CM Profile page
import MohanYadavProfile from './pages/Leaders/Profiles/cmMohanYadav.jsx';
// CM List Page
import ChiefMinistersList from './pages/Leaders/chiefMinisterList.jsx';
// CM Profile List Page
import RavishankarShuklaPage from './pages/Leaders/cmProfilelist/raviShankarShukla.jsx';
import ShriBhagwantraoMandaloiPage from './pages/Leaders/cmProfilelist/bhagwantRaoMandloi.jsx';
import ShriKailashnathKatjuPage from './pages/Leaders/cmProfilelist/kailashNathKatuj.jsx';
import ShriDwarikaprasadMishraPage1 from './pages/Leaders/netapratipakshProfilelist/dwarikaPrasadMishra.jsx';
import SmtVijayarajeSindhiaPage from './pages/Leaders/cmProfilelist/vijyaRajeSindhiya.jsx';
import ShriGovindNarayanSinghPage from './pages/Leaders/cmProfilelist/govindNarayanSingh.jsx';
import ShriNareshchandraSinghPage from './pages/Leaders/cmProfilelist/nareshchandraSingh.jsx';
import ShyamcharanShuklaPage from './pages/Leaders/netapratipakshProfilelist/shymCharanShukla.jsx';
import ShriPrakashChandraSethiPage from './pages/Leaders/cmProfilelist/praksahChandSethi.jsx';
import ShriKailashJoshiPagecm from './pages/Leaders/cmProfilelist/kailashJoshi.jsx';
import VirendraKumarSakhalechaPage from './pages/Leaders/netapratipakshProfilelist/virendraPratapSackhlecha.jsx';
import CMSunderlalPatwaPage from './pages/Leaders/cmProfilelist/sLPatwa.jsx';
import ShriMotilalVoraPage from './pages/Leaders/cmProfilelist/motilalVora.jsx';
import DigvijaySinghPage from './pages/Leaders/cmProfilelist/digVijaySingh.jsx';
import UmaBhartiPage from './pages/Leaders/cmProfilelist/umaBharti.jsx';
import BabuLalGaurPage from './pages/Leaders/cmProfilelist/babulalGour.jsx';
import ShivrajSinghChouhanPage from './pages/Leaders/cmProfilelist/shivrajSinghChouhan.jsx';
import CMKamalNathPage from './pages/Leaders/cmProfilelist/kamalnathhh.jsx';

// Mantri Mandal Page 
import Ministers16thAssemblyPage from './pages/MantrimandalList/mantrimandalmain.jsx';
import PreviousCabinetsPagess from './pages/MantrimandalList/purvMantrimandal.jsx';
import PreviousCabinetsPage from './pages/MantrimandalList/mantriMandal15.jsx';
import OlderCabinetsPage from './pages/MantrimandalList/mantriMandal14.jsx';
import UpcomingCabinetsPage from './pages/MantrimandalList/sampattivivranArchieve.jsx';
import MinistersAssetPage from './pages/MantrimandalList/sampativivran14th.jsx';
import YearwiseAssetsPage from './pages/MantrimandalList/sampativivran13th.jsx';
import Sampattivivran12th from './pages/MantrimandalList/sampativivran12.jsx';
import Sampativivran11th from './pages/MantrimandalList/sampativivran11th.jsx';
import Sampativivran10th from './pages/MantrimandalList/sampativivran10th.jsx';
import Sampativivran9thPage from './pages/MantrimandalList/sampativivran9th.jsx';
import Sampativivrandesc2013 from './pages/MantrimandalList/sampativivrandesc2013.jsx';
import Sampativivrandesc2012 from './pages/MantrimandalList/sampativivrandesc2012.jsx';
import Sampativivran2011 from './pages/MantrimandalList/sampativivrandesc2011.jsx';

// Vidhan Sabha Sachiwalya
import SecretariatOrganogram from './pages/SachivalyaList/vidhanSabhaSachiwalya.jsx';
import SecretariatTable from './pages/SachivalyaList/sachivPramukhsachiv.jsx';
import IndiraGandhiVidhanaBhavan from './pages/SachivalyaList/vidhansabhaBhawan.jsx';
import Puruskaryojna from './pages/SachivalyaList/puruskarYojna.jsx';
import Pithasinadhikarisammelan from './pages/SachivalyaList/pithasinAdhikarisammelan.jsx';
import Sachiwalyasampativivran from './pages/SachivalyaList/sampativivranSachivalya.jsx';
import Sampativivransachivalya2020 from './pages/SachivalyaList/sampativivranSachivalya2020.jsx';


function App() {
  return (  
    <Router>
      <div id="root" className="max-w-[1280px] mx-auto p-8 text-center">
        <Navbar />
        <Routes>
          {/* Homepage Route */}------------------------------------------------------------------------
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
          {/* Optional: Redirect /home to / */}-------------------------------------------------------------
          <Route path="/home" element={<Navigate to="/" />} />
             {/* Governor Profile Page */}--------------------------------------------------------------------
          <Route path="/gov" element={<><GovernorProfile/><Footer /></>} />        

          {/* Governor List Page */}-----------------------------------------------------------------------
          <Route path="/govlst" element={<><GovernorsTable/><Footer /></>} />        

          {/* // Previous governor Profile Page---------------------------------------------------- */}
          <Route path="/leaders/drPattibhgov" element={<><DrPattabhiSeetaramayyaPage/><Footer /></>} />        
          <Route path="/leaders/harivinayak-pataskar" element={<><ShriHariVinayakPatskarPage/><Footer /></>} />          
          <Route path="/leaders/governors/chengalaraya-reddy" element={<><ShriKyasamballiChengalRaoReddyPage2/><Footer /></>} />        
          <Route path="/leaders/governors/pv-dixit" element={<><ShriPurushottamVinayakDixitPage/><Footer /></>} />        
          <Route path="/leaders/governors/satyanarayan-singh" element={<><ShriSatyanarayanSinghPage/><Footer /></>} />        
          <Route path="/leaders/governors/niranjan-nath-vanchu" element={<><ShriNiranjanNathVanchuPage/><Footer /></>} />      
          <Route path="/leaders/cmpunacha" element={<><CMPoonachaPage/><Footer /></>} />          
          <Route path="/leaders/governors/governors/bd-sharma" element={<><ShriBhagwatDayalSharmaPage/><Footer /></>} />        
          <Route path="/leaders/governors/guruprasanna-singh" element={<><ShriGuruprasannanSinghPage/><Footer /></>} />         
          <Route path="/leaders/governors/km-chandy" element={<><ProfessorKMChandyPage/><Footer /></>} />     
          <Route path="/leaders/governors/sarla-grewal" element={<><SmtSarlaGrewalPage/><Footer /></>} />        
          <Route path="/leaders/governors/mahmood-ali-khan" element={<><KunwarMahmoodAliKhanPage/><Footer /></>} />        
          <Route path="/leaders/governors/ms-qureshi" element={<><MohammadShafiQuraishiPage/><Footer /></>} />          
          <Route path="/leaders/governors/bhai-mahavir" element={<><BhaiMahavirPage/><Footer /></>} />         
          <Route path="/leaders/governors/ramprakash-gupta" element={<><RamPrakashGuptaPage/><Footer /></>} />        
          <Route path="/leaders/governors/km-seth" element={<><KrishnaMohanSethPage/><Footer /></>} />        
          <Route path="/leaders/governors/balram-jakhar" element={<><BalramJakharPage/><Footer /></>} />          
          <Route path="/leaders/governors/rameshwar-thakur" element={<><RameshwarThakurPage/><Footer /></>} />          
          <Route path="/leaders/governors/ramnaresh-yadav" element={<><RamNareshYadavPage/><Footer /></>} />        
          <Route path="/leaders/governors/op-kohli" element={<><OPKohliPage/><Footer /></>} />
          <Route path="/leaders/governors/op-kohli-2" element={<><OPKohliPage/><Footer /></>} />
          <Route path="/leaders/governors/anandiben-patel-1" element={<><AnandibenPatelPage/><Footer /></>} />
          <Route path="/leaders/governors/lalji-tandon" element={<><LalJiTandonPage/><Footer /></>} />
          <Route path="/leaders/governors/anandiben-patel-2" element={<><AnandibenPatelPage/><Footer /></>} />
          <Route path="/leaders/governors/mangubhai-patel" element={<><GovernorProfile/><Footer /></>} />
          {/* narendra singh Profile Page */}----------------------------------------------------------
          <Route path="/nst" element={<><NarendraSinghTomarProfile/><Footer /></>} />
          {/* Adhyaksh List  */}------------------------------------------------------------------------
          <Route path="/spklist" element={<><SpeakersList/><Footer /></>} />
          {/* Previous Adhyaksh Profile Page */}
          <Route path="/ad-kunjilaldubey" element={<><KunjiLalDubePage/><Footer /></>} />
          <Route path="/adhyaksh/kashiprasadpandey" element={<><KashiPrasadPandePage/><Footer /></>} />
          <Route path="/adhyaksh/tejlal" element={<><TejLalTembharePage/><Footer /></>} />
          <Route path="/adhyaksh/gulsherahmd" element={<><GulSherAhmedPage/><Footer /></>} />
          <Route path="/adhyaksh/mukundsukhramnewalkar" element={<><MukundSakharamNewalkarPage/><Footer /></>} />
          <Route path="/adhyaksh/yagyadattsharma" element={<><YagyadattSharmaPage/><Footer /></>} />
          <Route path="/adhyaksh/ramkishoreshukla" element={<><RamkishorShuklaPage/><Footer /></>} />
          <Route path="/adhyaksh/rajendraprasadshukla" element={<><RajendraPrasadShuklaPage/><Footer /></>} />
          <Route path="/adhyaksh/brijmohan" element={<><BrijMohanPage/><Footer /></>} />
          <Route path="/adhyaksh/shriniwastiwari" element={<><ShriniwasTiwariPage/><Footer /></>} />
          <Route path="/adhyaksh/ishwardasrohani" element={<><IshwarDasRohaniPage/><Footer /></>} />
          <Route path="/adhyaksh/sitasaransharma" element={<><SitasaranSharmaPage/><Footer /></>} />
          <Route path="/adhyaksh/narmadaprasadprajapati" element={<><NarmadaPrasadPrajapatiPage/><Footer /></>} />
          <Route path="/adhyaksh/girishgoutam" element={<><GirishGoutamPage/><Footer /></>} />
          <Route path="/nst" element={<><NarendraSinghTomarProfile/><Footer /></>} />
          <Route path="/samayik-adhyaksh" element={<><TemporarySpeakers/><Footer /></>} />
          {/* updahyksh list */}
          <Route path="/uplist" element={<><DeputySpeakersList/><Footer /></>} />
          {/* Previous Upadhyaksh Profile Page */}----------------------------------------------------
          <Route path="/leaders/sarwate" element={<><VishnuVinayakSarwatePage/><Footer /></>} />
          <Route path="/leaders/patwardhan" element={<><AnantSadaShivPatwardhan/><Footer /></>} />
          <Route path="/leaders/narbada" element={<><NarbadaPrasadShrivastavPage/><Footer /></>} />
          <Route path="/leaders/narbada1" element={<><NarbadaPrasadShrivastavPage/><Footer /></>} />
          <Route path="/leaders/ramkishore" element={<><RamkishorShuklaPage1/><Footer /></>} />
          <Route path="/leaders/nayrayan" element={<><NarayanPrasadShuklaPage/><Footer /></>} />
          <Route path="/leaders/sawaimal" element={<><SwaimalJainPage/><Footer /></>} />
          <Route path="/leaders/maheshwari" element={<><RamchandraMaheshwariPage/><Footer /></>} />
          <Route path="/leaders/ramkishore1" element={<><RamkishorShuklaPage1/><Footer /></>} />
          <Route path="/leaders/pyarelalkanwar" element={<><PyareLalKanwarPage/><Footer /></>} />
          <Route path="/leaders/kanhaiyalal" element={<><KanhaiyalalYadavPage/><Footer /></>} />
          <Route path="/leaders/shriniwas" element={<><NiwasTiwariPage/><Footer /></>} />
          <Route path="/leaders/bhurelalpatidar" element={<><BhurelalPatidarPage/><Footer /></>} />
          <Route path="/leaders/rohanidas" element={<><RohaniPage/><Footer /></>} />
          <Route path="/leaders/hajarilalraghuwanshi" element={<><HajariLalRaghuwanshiPage/><Footer /></>} />
          <Route path="/leaders/harwanshsingh" element={<><HarvanshSinghPage/><Footer /></>} />
          <Route path="/leaders/rjkumarsingh" element={<><RjKumarSinghPage/><Footer /></>} />
          <Route path="/leaders/hinalikhiramkanware" element={<><HinaLikhiramKanware/><Footer /></>} />
          {/* umangsingh Profile Page */}
          <Route path="/umg" element={<><UmangSingharProfile/><Footer /></>} />
          {/* umangsingh List  */}
           <Route path="/umglst" element={<><NetapratipakshList/><Footer /></>} />
          {/* Previous Neta pratipaksh Profile Page */}
          <Route path="/leaders/opposition/vy-tamaskar" element={<><VishwanathTamascarPage/><Footer /></>} />
          <Route path="/leaders/opposition/cp-tiwari" element={<><ChandraPratapTiwariPage/><Footer /></>} />
          <Route path="/leaders/opposition/vk-sakhlecha-1" element={<><VirendraPratapSackhlecha/><Footer /></>} />
          <Route path="/leaders/opposition/sc-shukla-1" element={<><ShyamCharanShukla/><Footer /></>} />
          <Route path="/leaders/opposition/dp-mishra" element={<><DwarikaPrasadMishra/><Footer /></>} />
          <Route path="/leaders/opposition/sc-shukla-2" element={<><ShyamCharanShukla/><Footer /></>} />
          <Route path="/leaders/opposition/vk-sakhlecha-3" element={<><VirendraPratapSackhlecha/><Footer /></>} />
          <Route path="/leaders/opposition/vs-pradhan" element={<><VasantSadashivPradhanPage/><Footer /></>} />
          <Route path="/leaders/opposition/kailash-joshi-1" element={<><KailashJoshiPage/><Footer /></>} />
          <Route path="/leaders/opposition/arjun-singh" element={<><ArjunSinghPage/><Footer /></>} />
          <Route path="/leaders/opposition/sl-patwa" element={<><SundarlalPatwaPage/><Footer /></>} />
          <Route path="/leaders/opposition/kailash-joshi-2" element={<><KailashJoshiPage/><Footer /></>} />
          <Route path="/leaders/opposition/sc-shukla-3" element={<><ShyamCharanShukla/><Footer /></>} />
          <Route path="/leaders/opposition/vikram-verma" element={<><VikramVermaPage/><Footer /></>} />
          <Route path="/leaders/opposition/gs-shejwar" element={<><GourishankarShejwar/><Footer /></>} />
          <Route path="/leaders/opposition/bl-gaur" element={<><BabulalGaurPage/><Footer /></>} />
          <Route path="/leaders/opposition/jamuna-devi-1" element={<><JamunaDeviPage/><Footer /></>} />
          <Route path="/leaders/opposition/jamuna-devi-2" element={<><JamunaDeviPage/><Footer /></>} />
          <Route path="/leaders/opposition/ajay-singh-1" element={<><AjaySinghPage/><Footer /></>} />
          <Route path="/leaders/opposition/satyadev-katare" element={<><SatyadevKatarePage/><Footer /></>} />
          <Route path="/leaders/opposition/ajay-singh-2" element={<><AjaySinghPage/><Footer /></>} />
          <Route path="/leaders/opposition/gopal-bhargava" element={<><GopalBhargavaPage/><Footer /></>} />
          <Route path="/leaders/opposition/kamal-nath" element={<><KamalNathPage/><Footer /></>} />
          <Route path="/leaders/opposition/govind-singh" element={<><GovindSinghPage/><Footer /></>} />
          <Route path="/leaders/opposition/umang-singhar" element={<><UmangSingharProfile/><Footer /></>} />
          
          {/* mohanyadav Profile Page */}
          <Route path="/cm" element={<><MohanYadavProfile/><Footer /></>} />
          {/* Chief Minister List  */}
          <Route path="/cmlist" element={<><ChiefMinistersList /><Footer /></>} />
          
          {/* CM Profile List PAge  */}
          <Route path="/cms/ravishankar-shukla" element={<><RavishankarShuklaPage /><Footer /></>} />
          <Route path="/cms/bhagwantrao-mandloi" element={<><ShriBhagwantraoMandaloiPage /><Footer /></>} />
          <Route path="/cms/kailashnath-katju" element={<><ShriKailashnathKatjuPage /><Footer /></>} />
          <Route path="/cms/dwarka-prasad-mishra" element={<><ShriDwarikaprasadMishraPage1 /><Footer /></>} />
          <Route path="/cms/vijayaraje-scindia" element={<><SmtVijayarajeSindhiaPage /><Footer /></>} />
          <Route path="/cms/govind-narayan-singh" element={<><ShriGovindNarayanSinghPage /><Footer /></>} />
          <Route path="/cms/nareshchandra-singh" element={<><ShriNareshchandraSinghPage /><Footer /></>} />
          <Route path="/cms/nareshchandra-singh" element={<><ShriNareshchandraSinghPage /><Footer /></>} />
          <Route path="/cms/shymcharanshukla-singh" element={<><ShyamcharanShuklaPage /><Footer /></>} />
          <Route path="/cms/prakashchandsethi-singh" element={<><ShriPrakashChandraSethiPage /><Footer /></>} />
          <Route path="/cms/kailashjoshi-singh" element={<><ShriKailashJoshiPagecm /><Footer /></>} />
          <Route path="/cms/virendrakumarsakchelcha-singh" element={<><VirendraKumarSakhalechaPage /><Footer /></>} />
          <Route path="/cms/sundarlalpatwaa-singh" element={<><CMSunderlalPatwaPage /><Footer /></>} />
          <Route path="/cms/arjunsingh-singh" element={<><ArjunSinghPage /><Footer /></>} />
          <Route path="/cms/motilalvora-singh" element={<><ShriMotilalVoraPage /><Footer /></>} />
          <Route path="/cms/shyamcharanshukla12-singh" element={<><ShyamcharanShuklaPage /><Footer /></>} />
          <Route path="/cms/patwacm1-singh" element={<><CMSunderlalPatwaPage /><Footer /></>} />
          <Route path="/cms/diigvijay-singh" element={<><DigvijaySinghPage /><Footer /></>} />
          <Route path="/cms/umabharti" element={<><UmaBhartiPage /><Footer /></>} />
          <Route path="/cms/babulalgour" element={<><BabuLalGaurPage /><Footer /></>} />
          <Route path="/cms/shivraj-singh" element={<><ShivrajSinghChouhanPage/><Footer /></>} />
          <Route path="/cms/kamalnath-singh" element={<><CMKamalNathPage/><Footer /></>} />
          <Route path="/cms/mohanyadav" element={<><MohanYadavProfile/><Footer /></>} />
        
        {/* Mantri Mandal Page  */}
        <Route path="/mlagroup" element={<><Ministers16thAssemblyPage/><Footer /></>} />
        <Route path="/mlagroupall" element={<><PreviousCabinetsPagess/><Footer /></>} />
        <Route path="/mantrimandal15" element={<><PreviousCabinetsPage/><Footer /></>} />
        <Route path="/mantrimandal14" element={<><OlderCabinetsPage/><Footer /></>} />
        <Route path="/propertydescarchieve" element={<><UpcomingCabinetsPage/><Footer /></>} />
        <Route path="/sampativivran14" element={<><MinistersAssetPage/><Footer /></>} />
        <Route path="/sampativivran13" element={<><YearwiseAssetsPage/><Footer /></>} />
        <Route path="/sampativivran9th" element={<><Sampativivran9thPage/><Footer /></>} />
        <Route path="/sampativivran10th" element={<><Sampativivran10th/><Footer /></>} />
        <Route path="/sampativivran11th" element={<><Sampativivran11th/><Footer /></>} />
        <Route path="/desc2013" element={<><Sampativivrandesc2013/><Footer /></>} />
        <Route path="/desc2012" element={<><Sampativivrandesc2012/><Footer /></>} />
        <Route path="/desc2011" element={<><Sampativivran2011/><Footer /></>} />
        <Route path="/sampativivran12th" element={<><Sampattivivran12th/><Footer /></>} />


        {/* Vidhan Sabha Sachiwalya */}
        <Route path="/vssachiwalya" element={<><SecretariatOrganogram/><Footer /></>} />
        <Route path="/sachivpramukhsachiv" element={<><SecretariatTable/><Footer /></>} />
        <Route path="/vsbhawan" element={<><IndiraGandhiVidhanaBhavan/><Footer /></>} />
        <Route path="/puruskaryojna" element={<><Puruskaryojna/><Footer /></>} />
        <Route path="/pithasinadhikarisammmelan" element={<><Pithasinadhikarisammelan/><Footer /></>} />
        <Route path="/sachiwalyasampativivran" element={<><Sachiwalyasampativivran/><Footer /></>} />
        <Route path="/year/2020" element={<><Sampativivransachivalya2020/><Footer /></>} />
















        

   




        

        

















          










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