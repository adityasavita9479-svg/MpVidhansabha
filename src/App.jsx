
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// Lazy load heavy pages
const Banner = lazy(() => import("./components/Banner"));
const InfoCards = lazy(() => import("./components/InfoCards"));
const ActionSection = lazy(() => import("./components/ActionSection"));


// Notice Board Main
import NoticeBoard from "./components/NoticeBoard";
const DisclaimerPage = lazy(() => import("./pages/Noticeboardextra/disclaimerNoticeboard.jsx"));

//Notice board  Pages 
const FormList = lazy(() => import("./pages/Noticeboardextra/prakriaSambandhiprapatr.jsx"));
const FullAnswers = lazy(() => import("./pages/Noticeboardextra/prsahnokePurnUttar.jsx"));
const GrantsList = lazy(() => import("./pages/Noticeboardextra/swekshaAnudan.jsx"));
const SvecchAnudan16 = lazy(() => import("./pages/Noticeboardextra/swekshaAnudan16.jsx"));
const SvecchAnudan15 = lazy(() => import("./pages/Noticeboardextra/swekshaAnudan15.jsx"));
const Niveda = lazy(() => import("./pages/Noticeboardextra/niveda.jsx"));
const PendingAssurancesPage = lazy(() => import("./pages/Noticeboardextra/lambitAshwasan.jsx"));
const DeptWiseAssuranceStatus = lazy(() => import("./pages/Noticeboardextra/DeptWiseAssuranceStatus.jsx"));









const GalleryFlex = lazy(() => import("./pages/Gallery/EventsGallery.jsx"));

const VidhansabhaCategoryCarousel = lazy(() => import('./pages/About/VidhhanSabhaTour.jsx'));
const GovernorProfile = lazy(() => import('./pages/Leaders/Profiles/governer'));
const GovernorsTable = lazy(() => import('./pages/Leaders/governerList.jsx'));
const DrPattabhiSeetaramayyaPage = lazy(() => import('./pages/Leaders/governorProfileList/drPattibhgov.jsx'));
const ShriHariVinayakPatskarPage = lazy(() => import('./pages/Leaders/governorProfileList/hariVinayakpathskar.jsx'));
const ShriKyasamballiChengalRaoReddyPage2 = lazy(() => import('./pages/Leaders/governorProfileList/chengalRaoReddy.jsx'));
const ShriPurushottamVinayakDixitPage = lazy(() => import('./pages/Leaders/governorProfileList/puruShottamvinayakdixit.jsx'));
const ShriSatyanarayanSinghPage = lazy(() => import('./pages/Leaders/governorProfileList/Satyanarayansingh.jsx'));
const ShriNiranjanNathVanchuPage = lazy(() => import('./pages/Leaders/governorProfileList/ShriNiranjanNathVanchoo.jsx'));
const CMPoonachaPage = lazy(() => import('./pages/Leaders/governorProfileList/ShriCheppudiraMuthanaPunacha.jsx'));
const ShriBhagwatDayalSharmaPage = lazy(() => import('./pages/Leaders/governorProfileList/ShriBhagwatDayalSharma.jsx'));
const ShriGuruprasannanSinghPage = lazy(() => import('./pages/Leaders/governorProfileList/ShriGuruprasaanSingh.jsx'));
const ProfessorKMChandyPage = lazy(() => import('./pages/Leaders/governorProfileList/kmchandi.jsx'));
const SmtSarlaGrewalPage = lazy(() => import('./pages/Leaders/governorProfileList/sarlaGrewal.jsx'));
const KunwarMahmoodAliKhanPage = lazy(() => import('./pages/Leaders/governorProfileList/mohummadalikhan.jsx'));
const MohammadShafiQuraishiPage = lazy(() => import('./pages/Leaders/governorProfileList/shafiquerashi.jsx'));
const BhaiMahavirPage = lazy(() => import('./pages/Leaders/governorProfileList/bhaimahaveer.jsx'));
const RamPrakashGuptaPage = lazy(() => import('./pages/Leaders/governorProfileList/ramprakashgupta.jsx'));
const KrishnaMohanSethPage = lazy(() => import('./pages/Leaders/governorProfileList/lftgenralkrishnamohanseth.jsx'));
const BalramJakharPage = lazy(() => import('./pages/Leaders/governorProfileList/balramjakhad.jsx'));
const RameshwarThakurPage = lazy(() => import('./pages/Leaders/governorProfileList/rameshwarthaku.jsx'));
const RamNareshYadavPage = lazy(() => import('./pages/Leaders/governorProfileList/ramnareshyadav.jsx'));
const OPKohliPage = lazy(() => import('./pages/Leaders/governorProfileList/opkohli.jsx'));
const AnandibenPatelPage = lazy(() => import('./pages/Leaders/governorProfileList/anandiBenPatel.jsx'));
const LalJiTandonPage = lazy(() => import('./pages/Leaders/governorProfileList/laljitandon.jsx'));
const HistoryPage = lazy(() => import('./pages/About/History.jsx'));


// Adhyaksh Profile Imports -----------------------------------------------------------------------------------
const NarendraSinghTomarProfile = lazy(() =>
  import('./pages/Leaders/Profiles/narendraSinghTomer.jsx')
);

// Adhyaksh List Import
const SpeakersList = lazy(() =>
  import('./pages/Leaders/AdhyakhList.jsx')
);

// Individual Adhyaksh Profile Imports
const KunjiLalDubePage = lazy(() =>
  import('./pages/Leaders/adhyakshProfilelist/kunjiLaldubey.jsx')
);
const KashiPrasadPandePage = lazy(() =>
  import('./pages/Leaders/adhyakshProfilelist/kashiprasadpandey.jsx')
);
const TejLalTembharePage = lazy(() =>
  import('./pages/Leaders/adhyakshProfilelist/tejlalThembare.jsx')
);
const GulSherAhmedPage = lazy(() =>
  import('./pages/Leaders/adhyakshProfilelist/gulSherAhmed.jsx')
);
const MukundSakharamNewalkarPage = lazy(() =>
  import('./pages/Leaders/adhyakshProfilelist/mukundSukhramNewalkar.jsx')
);
const YagyadattSharmaPage = lazy(() =>
  import('./pages/Leaders/adhyakshProfilelist/yagyadattsharma.jsx')
);
const RamkishorShuklaPage = lazy(() =>
  import('./pages/Leaders/adhyakshProfilelist/ramKishoreShukla.jsx')
);
const RajendraPrasadShuklaPage = lazy(() =>
  import('./pages/Leaders/adhyakshProfilelist/rajendraPrasadShukla.jsx')
);
const BrijMohanPage = lazy(() =>
  import('./pages/Leaders/adhyakshProfilelist/brijMohan.jsx')
);
const ShriniwasTiwariPage = lazy(() =>
  import('./pages/Leaders/adhyakshProfilelist/shriNiwasTiwari.jsx')
);
const IshwarDasRohaniPage = lazy(() =>
  import('./pages/Leaders/adhyakshProfilelist/ishwarDasRohani.jsx')
);
const SitasaranSharmaPage = lazy(() =>
  import('./pages/Leaders/adhyakshProfilelist/sitaSaranSharma.jsx')
);
const NarmadaPrasadPrajapatiPage = lazy(() =>
  import('./pages/Leaders/adhyakshProfilelist/narmadaPrasasdPrajapati.jsx')
);
const GirishGoutamPage = lazy(() =>
  import('./pages/Leaders/adhyakshProfilelist/girishGoutam.jsx')
);
const TemporarySpeakers = lazy(() =>
  import('./pages/Leaders/adhyakshProfilelist/tableSamayik.jsx')
);

// Upadhyaksh List ---------------------------------------------------------------------------------------
const DeputySpeakersList = lazy(() =>
  import('./pages/Leaders/upadhyakshList.jsx')
);

// Previous Upadhyaksh Profile Imports -------------------------------------------------------------------
const VishnuVinayakSarwatePage = lazy(() =>
  import('./pages/Leaders/upadhyakshProfileList/vishnuVinayakSarwate.jsx')
);
const AnantSadaShivPatwardhan = lazy(() =>
  import('./pages/Leaders/upadhyakshProfileList/anantSadaShivPatwardhan.jsx')
);
const NarbadaPrasadShrivastavPage = lazy(() =>
  import('./pages/Leaders/upadhyakshProfileList/narbadaPrasadShrivastav.jsx')
);
const RamkishorShuklaPage1 = lazy(() =>
  import('./pages/Leaders/adhyakshProfilelist/ramKishoreShukla.jsx')
);
const NarayanPrasadShuklaPage = lazy(() =>
  import('./pages/Leaders/upadhyakshProfileList/narayanPrasadShukla.jsx')
);
const SwaimalJainPage = lazy(() =>
  import('./pages/Leaders/upadhyakshProfileList/sawaiMaljain.jsx')
);
const RamchandraMaheshwariPage = lazy(() =>
  import('./pages/Leaders/upadhyakshProfileList/ramChandraMaheshwari.jsx')
);
const PyareLalKanwarPage = lazy(() =>
  import('./pages/Leaders/upadhyakshProfileList/pyareLalKanwar.jsx')
);
const KanhaiyalalYadavPage = lazy(() =>
  import('./pages/Leaders/upadhyakshProfileList/kanhaiyalalYadav.jsx')
);
const NiwasTiwariPage = lazy(() =>
  import('./pages/Leaders/upadhyakshProfileList/niwastTiwari.jsx')
);
const BhurelalPatidarPage = lazy(() =>
  import('./pages/Leaders/upadhyakshProfileList/bhureLalPatidar.jsx')
);
const RohaniPage = lazy(() =>
  import('./pages/Leaders/upadhyakshProfileList/rohaniDas.jsx')
);
const HajariLalRaghuwanshiPage = lazy(() =>
  import('./pages/Leaders/upadhyakshProfileList/hajariLalRaghuwanshi.jsx')
);
const HarvanshSinghPage = lazy(() =>
  import('./pages/Leaders/upadhyakshProfileList/harwanshSingh.jsx')
);
const RjKumarSinghPage = lazy(() =>
  import('./pages/Leaders/upadhyakshProfileList/rjKumarSingh.jsx')
);
const HinaLikhiramKanware = lazy(() =>
  import('./pages/Leaders/upadhyakshProfileList/hinaLikhiRamKanware.jsx')
);

// Umang Singhar Profile Import
const UmangSingharProfile = lazy(() =>
  import('./pages/Leaders/Profiles/umangsinghar.jsx')
);

// Netapratipaksh List Import
const NetapratipakshList = lazy(() =>
  import('./pages/Leaders/netaPratiPakshlist.jsx')
);

// Neta Pratipaksh Profile Imports
const VishwanathTamascarPage = lazy(() =>
  import('./pages/Leaders/netapratipakshProfilelist/vishwanathyadavraoTamaskar.jsx')
);
const ChandraPratapTiwariPage = lazy(() =>
  import('./pages/Leaders/netapratipakshProfilelist/chandraPratapTiwari.jsx')
);
const VirendraPratapSackhlecha = lazy(() =>
  import('./pages/Leaders/netapratipakshProfilelist/virendraPratapSackhlecha.jsx')
);
const ShyamCharanShukla = lazy(() =>
  import('./pages/Leaders/netapratipakshProfilelist/shymCharanShukla.jsx')
);
const DwarikaPrasadMishra = lazy(() =>
  import('./pages/Leaders/netapratipakshProfilelist/dwarikaPrasadMishra.jsx')
);
const VasantSadashivPradhanPage = lazy(() =>
  import('./pages/Leaders/netapratipakshProfilelist/vasantSadaShivPradhan.jsx')
);
const KailashJoshiPage = lazy(() =>
  import('./pages/Leaders/netapratipakshProfilelist/kailasjJoshi.jsx')
);
const ArjunSinghPage = lazy(() =>
  import('./pages/Leaders/netapratipakshProfilelist/arjunSingh.jsx')
);
const SundarlalPatwaPage = lazy(() =>
  import('./pages/Leaders/netapratipakshProfilelist/sundarlalPatwa.jsx')
);
const VikramVermaPage = lazy(() =>
  import('./pages/Leaders/netapratipakshProfilelist/vikramVerma.jsx')
);
const GourishankarShejwar = lazy(() =>
  import('./pages/Leaders/netapratipakshProfilelist/gourishankarShejwar.jsx')
);
const BabulalGaurPage = lazy(() =>
  import('./pages/Leaders/netapratipakshProfilelist/babuLalGour.jsx')
);
const JamunaDeviPage = lazy(() =>
  import('./pages/Leaders/netapratipakshProfilelist/jamunaDevi.jsx')
);
const AjaySinghPage = lazy(() =>
  import('./pages/Leaders/netapratipakshProfilelist/ajaySingh.jsx')
);
const SatyadevKatarePage = lazy(() =>
  import('./pages/Leaders/netapratipakshProfilelist/satyadevKatare.jsx')
);
const GopalBhargavaPage = lazy(() =>
  import('./pages/Leaders/netapratipakshProfilelist/gopalBhargav.jsx')
);
const KamalNathPage = lazy(() =>
  import('./pages/Leaders/netapratipakshProfilelist/kamalNath.jsx')
);
const GovindSinghPage = lazy(() =>
  import('./pages/Leaders/netapratipakshProfilelist/govindSingh.jsx')
);



// ----------------------------- CM Profile page -----------------------------
const MohanYadavProfile = lazy(() => import('./pages/Leaders/Profiles/presentcm.jsx'));

// ----------------------------- CM List Page -----------------------------
const ChiefMinistersList = lazy(() => import('./pages/Leaders/chiefMinisterList.jsx'));

// ----------------------------- CM Profile List Page -----------------------------
const RavishankarShuklaPage = lazy(() => import('./pages/Leaders/cmProfilelist/raviShankarShukla.jsx'));
const ShriBhagwantraoMandaloiPage = lazy(() => import('./pages/Leaders/cmProfilelist/bhagwantRaoMandloi.jsx'));
const ShriKailashnathKatjuPage = lazy(() => import('./pages/Leaders/cmProfilelist/kailashNathKatuj.jsx'));
const ShriDwarikaprasadMishraPage1 = lazy(() => import('./pages/Leaders/netapratipakshProfilelist/dwarikaPrasadMishra.jsx'));
const SmtVijayarajeSindhiaPage = lazy(() => import('./pages/Leaders/cmProfilelist/vijyaRajeSindhiya.jsx'));
const ShriGovindNarayanSinghPage = lazy(() => import('./pages/Leaders/cmProfilelist/govindNarayanSingh.jsx'));
const ShriNareshchandraSinghPage = lazy(() => import('./pages/Leaders/cmProfilelist/nareshchandraSingh.jsx'));
const ShyamcharanShuklaPage = lazy(() => import('./pages/Leaders/netapratipakshProfilelist/shymCharanShukla.jsx'));
const ShriPrakashChandraSethiPage = lazy(() => import('./pages/Leaders/cmProfilelist/praksahChandSethi.jsx'));
const ShriKailashJoshiPagecm = lazy(() => import('./pages/Leaders/cmProfilelist/kailashJoshi.jsx'));
const VirendraKumarSakhalechaPage = lazy(() => import('./pages/Leaders/netapratipakshProfilelist/virendraPratapSackhlecha.jsx'));
const CMSunderlalPatwaPage = lazy(() => import('./pages/Leaders/cmProfilelist/sLPatwa.jsx'));
const ShriMotilalVoraPage = lazy(() => import('./pages/Leaders/cmProfilelist/motilalVora.jsx'));
const DigvijaySinghPage = lazy(() => import('./pages/Leaders/cmProfilelist/digVijaySingh.jsx'));
const UmaBhartiPage = lazy(() => import('./pages/Leaders/cmProfilelist/umaBharti.jsx'));
const BabuLalGaurPage = lazy(() => import('./pages/Leaders/cmProfilelist/babulalGour.jsx'));
const ShivrajSinghChouhanPage = lazy(() => import('./pages/Leaders/cmProfilelist/shivrajSinghChouhan.jsx'));
const CMKamalNathPage = lazy(() => import('./pages/Leaders/cmProfilelist/kamalnathhh.jsx'));

// ----------------------------- Mantri Mandal Pages -----------------------------
const Ministers16thAssemblyPage = lazy(() => import('./pages/MantrimandalList/mantrimandalMain.jsx'));
const PreviousCabinetsPagess = lazy(() => import('./pages/MantrimandalList/purvMantrimandal.jsx'));
const PreviousCabinetsPage = lazy(() => import('./pages/MantrimandalList/mantriMandal15.jsx'));
const OlderCabinetsPage = lazy(() => import('./pages/MantrimandalList/mantriMandal14.jsx'));
const UpcomingCabinetsPage = lazy(() => import('./pages/MantrimandalList/sampattivivranArchieve.jsx'));
const MinistersAssetPage = lazy(() => import('./pages/MantrimandalList/sampativivran14th.jsx'));
const YearwiseAssetsPage = lazy(() => import('./pages/MantrimandalList/sampativivran13th.jsx'));
const Sampattivivran12th = lazy(() => import('./pages/MantrimandalList/sampativivran12.jsx'));
const Sampativivran11th = lazy(() => import('./pages/MantrimandalList/sampativivran11th.jsx'));
const Sampativivran10th = lazy(() => import('./pages/MantrimandalList/sampativivran10th.jsx'));
const Sampativivran9thPage = lazy(() => import('./pages/MantrimandalList/sampativivran9th.jsx'));
const Sampativivrandesc2013 = lazy(() => import('./pages/MantrimandalList/sampativivrandesc2013.jsx'));
const Sampativivrandesc2012 = lazy(() => import('./pages/MantrimandalList/sampativivrandesc2012.jsx'));
const Sampativivran2011 = lazy(() => import('./pages/MantrimandalList/sampativivrandesc2011.jsx'));



// ----------------------------- Vidhan Sabha Sachivalaya -----------------------------
const SecretariatOrganogram = lazy(() => import('./pages/SachivalyaList/vidhanSabhaSachiwalya.jsx'));
const SecretariatTable = lazy(() => import('./pages/SachivalyaList/sachivPramukhsachiv.jsx'));
const IndiraGandhiVidhanaBhavan = lazy(() => import('./pages/SachivalyaList/vidhansabhaBhawan.jsx'));
const Puruskaryojna = lazy(() => import('./pages/SachivalyaList/puruskarYojna.jsx'));
const Pithasinadhikarisammelan = lazy(() => import('./pages/SachivalyaList/pithasinAdhikarisammelan.jsx'));
const Sachiwalyasampativivran = lazy(() => import('./pages/SachivalyaList/sampativivranSachivalya.jsx'));
const Sampativivransachivalya2020 = lazy(() => import('./pages/SachivalyaList/sampativivranSachivalya2020.jsx'));
const Sampativivransachivalya2021 = lazy(() => import('./pages/SachivalyaList/sampativivranSachivalya2021.jsx'));
const Sampativivransachivalya2022 = lazy(() => import('./pages/SachivalyaList/sampativivransachivalya2022.jsx'));
const Sampativivransachivalya2023 = lazy(() => import('./pages/SachivalyaList/sampativivranSachivalya2023.jsx'));
const Sampativivransachivalya2024 = lazy(() => import('./pages/SachivalyaList/sampativivranSachivalaya2024.jsx'));
const LibraryPage = lazy(() => import('./pages/SachivalyaList/libraryPageSachivalya.jsx'));
const Sachivalayaprakashan = lazy(() => import('./pages/SachivalyaList/sachivalyaPrakashan.jsx'));
const IsraniProfile = lazy(() => import('./pages/SachivalyaList/govIsraniProfile.jsx'));


// ----------------------------- Sadasyagan Navbar -----------------------------
const SadasyaganVartman = lazy(() => import('./pages/Leaders/Sadasyagan/sadasyaganVartman.jsx'));
const SadasyaganNakshewar = lazy(() => import('./pages/Leaders/Sadasyagan/sadasyagannakshewar.jsx'));
const SadasyaganPanchdash = lazy(() => import('./pages/Leaders/Sadasyagan/sadasyaganpanchdasVidhansabha.jsx'));
const SadasyaganNakshewarPanchdash = lazy(() => import('./pages/Leaders/Sadasyagan/sadasyaganpanchdashnakshewar.jsx'));
const SadasyaganPanchdashSampatiVivran = lazy(() => import('./pages/Leaders/Sadasyagan/sadasyaganpanchdashsampativivran.jsx'));
const SadasyaganChaturdash = lazy(() => import('./pages/Leaders/Sadasyagan/sadasyaganchaturdash.jsx'));
const Sadasyagan14Nakshewar = lazy(() => import('./pages/Leaders/Sadasyagan/sadasyagan14nakeshewar.jsx'));
const Sadasyagantrayodash = lazy(() => import('./pages/Leaders/Sadasyagan/sadasyagan13vidhansabha.jsx'));
const Sadasyagan13Nakshewar = lazy(() => import('./pages/Leaders/Sadasyagan/sadasyagan13nakshewar.jsx'));
const Sadasyagan13SampatiVivranmain = lazy(() => import('./pages/Leaders/Sadasyagan/sadasyagansampativivranmain13.jsx'));
const Sadasyagan13Sampativivran = lazy(() => import('./pages/Leaders/Sadasyagan/sadasyagantablesampativivran..jsx'));
const Sadasyagan12Sampativivran = lazy(() => import('./pages/Leaders/Sadasyagan/sadasyagan12sampativivran.jsx'));
const Sadasyagan11Sampativivran = lazy(() => import('./pages/Leaders/Sadasyagan/sadasyagan11sampativivran.jsx'));
const SadasyaganDwadash = lazy(() => import('./pages/Leaders/Sadasyagan/sadasyagandwadashMPVS.jsx'));
const SadasyaganEkadash = lazy(() => import('./pages/Leaders/Sadasyagan/sadasyaganekadashMPVS.jsx'));
const RajyaSabhaMembersMP = lazy(() => import('./pages/Leaders/Sadasyagan/sadasyaganrajyasabhamembers.jsx'));
const PensionRules = lazy(() => import('./pages/Leaders/Sadasyagan/sadasyaganpensionrules.jsx'));





// Sadan Sambandhi
const SadansambandhiSatrAdhisuchna = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/satrAdhisuchna.jsx")
);

// Sadan Sambandhi Shodash
const SadansambandhiSatrAdhisuhnaShodash = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna16/sadansambandhiShodash.jsx")
);
const ShodashVidhanSabhaFirstSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna16/sadansambandhishodashFirst.jsx")
);
const ShodashVidhanSabhaSecondSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna16/sadansambandhishodashsecond.jsx")
);
const ShodashThirdSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna16/sadansambandhiShodashthird.jsx")
);
const ShodashChaturthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna16/sadansambandhishodashchaturth.jsx")
);
const ShodashFifthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna16/sadansambandhishodashfifth.jsx")
);
const ShodashsixthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna16/sadansambandhishodashsixth.jsx")
);
const ShodashSeventhSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna16/sadansambandhiShodashseventh.jsx")
);

// Sadan Sambandhi Panchdash
const SadansambandhiSatrAdhisuhnaPanchdash = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna15/sadansambandhiPanchdash.jsx")
);
const PanchadashVidhanSabhaFirstSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna15/sadansambandhiPanchdashfirst.jsx")
);
const PanchadashVidhanSabhaSecondSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna15/sadansambandhiPanchdashsecond.jsx")
);
const PanchadashVidhanSabhaThirdSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna15/sadansambandhiPanchdashthird.jsx")
);
const PanchadashVidhanSabhaFourthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna15/sadansambandhiPanchdashfourth.jsx")
);
const PanchadashVidhanSabhaFifthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna15/sadansambandhiPanchdashfifth.jsx")
);
const PanchadashVidhanSabhaSixthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna15/sadansambandhiPanchdashsixth.jsx")
);
const PanchadashVidhanSabhaSeventhSessionSeptember2020 = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna15/sadansambandhiPanchdashseventh.jsx")
);
const PanchadashVidhanSabhaSeventhSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna15/sadansambandhiPanchdashseventthnirasth.jsx")
);
const PanchadashVidhanSabhaEighthSessionNirast2020 = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna15/sadansambandhiPanchdasheigthnirasth.jsx")
);
const PanchadashVidhanSabhaAshtamSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna15/sadansambandhiPanchdasheight.jsx")
);
const PanchadashVidhanSabhaNavamSessionAugust2021 = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna15/sadansambandhiPanchdashninth.jsx")
);
const PanchadashVidhanSabhaTenthSessionDecember2021 = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna15/sadansambandhiPanchdashtenth.jsx")
);
const PanchadashVidhanSabhaEleventhSessionMarch2022 = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna15/sadansambandhiPanchdasheleventh.jsx")
);
const PanchadashVidhanSabhaTwelfthSessionSeptember2022 = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna15/sadansambandhiPanchdashtwelfth.jsx")
);
const PanchadashVidhanSabhaThirteenthSessionDecember2022 = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna15/sadansambandhiPanchdashthirteen.jsx")
);
const PanchadashVidhanSabhaFourteenthSessionFebMar2023 = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna15/sadansambandhiPanchdashfourteen.jsx")
);
const PanchadashVidhanSabhaFifteenthSessionJuly2023 = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna15/sadansambandhiPanchdashfifteen.jsx")
);

// Sadan Sambandhi Chaturdash
const SadansambandhiSatrAdhisuhnaChaturdash = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna14/sadansambandhiChaturdash.jsx")
);
const ChaturdashVidhanSabhaFirstSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna14/sadansambandhi14(1).jsx")
);
const ChaturdashVidhanSabhaSecondSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna14/sadansambandhi14(2).jsx")
);
const ChaturdashVidhanSabhaThirdSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna14/sadansambandhi14(3).jsx")
);
const ChaturdashVidhanSabhaFourthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna14/sadansambandhi14(4).jsx")
);
const ChaturdashVidhanSabhaFifthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna14/sadansambandhi14(5).jsx")
);
const ChaturdashVidhanSabhaSixthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna14/sadansambandhi14(6).jsx")
);
const ChaturdashVidhanSabhaSeventhSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna14/sadansambandhi14(7).jsx")
);
const ChaturdashVidhanSabhaEigthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna14/sadansambandhi14(8).jsx")
);
const ChaturdashVidhanSabhaNinthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna14/sadansambandhi14(9).jsx")
);
const ChaturdashVidhanSabhaTenthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna14/sadansambandhi14(10).jsx")
);
const ChaturdashVidhanSabhaEleventhSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna14/sadansambandhi14(11).jsx")
);
const ChaturdashVidhanSabhaTwelthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna14/sadansambandhi14(12).jsx")
);
const ChaturdashVidhanSabhaThirteenSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna14/sadansambandhi14(13).jsx")
);
const ChaturdashVidhanSabhaFourteenSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna14/sadansambandhi14(14).jsx")
);
const ChaturdashVidhanSabhaFifteenSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna14/sadansambandhi14(15).jsx")
);
const ChaturdashVidhanSabhaSixteenSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna14/sadansambandhi14(16).jsx")
);
const ChaturdashVidhanSabhaSeventeenSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna14/sadansambandhi14(17).jsx")
);

// Sadan Sambandhi Trayodash
const SadansambandhiSatrAdhisuhnaTrayodash = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna13/sadansambandhiTrayodash.jsx")
);
const TrayodashVidhanSabhaFirstSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna13/sadansambandhiTrayodash(1).jsx")
);
const TrayodashVidhanSabhaSecondSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna13/sadansambandhiTrayodash(2).jsx")
);
const TrayodashVidhanSabhaThirdSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna13/sadansambandhiTrayodash(3).jsx")
);
const TrayodashVidhanSabhaFourthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna13/sadansambandhiTrayodash(4).jsx")
);
const TrayodashVidhanSabhaFifthBudgetSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna13/sadansambandhiTrayodash(5).jsx")
);
const TrayodashVidhanSabhaSpecialSixthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna13/sadansambandhiTrayodash(6).jsx")
);
const TrayodashVidhanSabhaSeventhSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna13/sadansambandhiTrayodash(7).jsx")
);
const TrayodashVidhanSabhaEighthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna13/sadansambandhiTrayodash(8).jsx")
);
const TrayodashVidhanSabhaNinthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna13/sadansambandhiTrayodash(9).jsx")
);
const TrayodashVidhanSabhaTenthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna13/sadansambandhiTrayodash(10).jsx")
);
const TrayodashVidhanSabhaEleventhSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna13/sadansambandhiTrayodash(11).jsx")
);
const TrayodashVidhanSabhaTwelfthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna13/sadansambandhiTrayodash(12).jsx")
);
const TrayodashVidhanSabhaThirteenthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna13/sadansambandhiTrayodash(13).jsx")
);
const TrayodashVidhanSabhaFourteenthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna13/sadansambandhiTrayodash(14).jsx")
);
const TrayodashVidhanSabhaFifteenthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna13/sadansambandhiTrayodash(15).jsx")
);
const TrayodashVidhanSabhaSixteenthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna13/sadansambandhiTrayodash(16).jsx")
);
const TrayodashVidhanSabhaSeventeenthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/Satradhisuchna13/sadansambandhiTrayodash(17).jsx")
);






// Sadan Sambandhi Dwadash
const SadansambandhiSatrAdhisuhnaDwadash = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna12/sadansambandhiDwadash.jsx")
);
const DwadashSecondSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna12/sadansambandhi2Nd.jsx")
);
const DwadashThirdSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna12/sadansambandhi3RD.jsx")
);
const DwadashFourthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna12/sadansambandhi4TH.jsx")
);
const DwadashFifthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna12/sadansambandhi5TH.jsx")
);
const DwadashSixthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna12/sadansambandhi6TH.jsx")
);
const DwadashSeventhSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna12/sadansambandhi7TH.jsx")
);
const DwadashEighthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna12/sadansambandhi8TH.jsx")
);
const DwadashNinthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna12/sadansambandhi9TH.jsx")
);
const DwadashTenthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna12/sadansambandhi10TH.jsx")
);
const DwadashEleventhSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna12/sadansambandhi11TH.jsx")
);
const DwadashTwelfthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna12/sadansambandhi12TH.jsx")
);
const DwadashThirteenSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna12/sadansambandhi13TH.jsx")
);
const DwadashFourteenthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna12/sadansambandhi14TH.jsx")
);
const DwadashFifteenthSession = lazy(() =>
  import("./pages/SadanSambandhi/SatrAdhiSuchna/SatradhiSuchna12/sadansambandhi15TH.jsx")
);

// Dainik KaryaSuchi
const DainikKaryaSuchiMain = lazy(() =>
  import("./pages/SadanSambandhi/DainikKaryaSuchi/dainikKaryasuchimain.jsx")
);
const DainikKaryasuchi16 = lazy(() =>
  import("./pages/SadanSambandhi/DainikKaryaSuchi/dainikKaryaSuchi16.jsx")
);
const DainikKaryasuchi15 = lazy(() =>
  import("./pages/SadanSambandhi/DainikKaryaSuchi/dainikKaryaSuchi15.jsx")
);
const DainikKaryasuchi14 = lazy(() =>
  import("./pages/SadanSambandhi/DainikKaryaSuchi/dainikKaryaSuchi14.jsx")
);
const DainikKaryasuchi13 = lazy(() =>
  import("./pages/SadanSambandhi/DainikKaryaSuchi/dainikKaryaSuchi13.jsx")
);
const DainikKaryasuchi12 = lazy(() =>
  import("./pages/SadanSambandhi/DainikKaryaSuchi/dainikKaryaSuchi12.jsx")
);
const DainikKaryasuchi11 = lazy(() =>
  import("./pages/SadanSambandhi/DainikKaryaSuchi/dainikKaryaSuchi11.jsx")
);
const DainikKaryasuchi10 = lazy(() =>
  import("./pages/SadanSambandhi/DainikKaryaSuchi/dainikKaryaSuchi10.jsx")
);
const DainikKaryasuchi9 = lazy(() =>
  import("./pages/SadanSambandhi/DainikKaryaSuchi/dainikKaryaSuchi9.jsx")
);




// Vidhyan Page
const VidhyanMain = lazy(() =>
  import("./pages/SadanSambandhi/Vidhyan/vidhyanMain.jsx")
);
const Vidheyak = lazy(() =>
  import("./pages/SadanSambandhi/Vidhyan/vidhyanVidhaeyak.jsx")
);
const VidhaeyakTable2014 = lazy(() =>
  import("./pages/SadanSambandhi/Vidhyan/vidhyanVidhaeyak2014.jsx")
);
const VidhaeyakTable2015 = lazy(() =>
  import("./pages/SadanSambandhi/Vidhyan/vidhyanVidhaeyak2015.jsx")
);
const VidhaeyakTable2016 = lazy(() =>
  import("./pages/SadanSambandhi/Vidhyan/vidhyanVidhaeyak2016.jsx")
);
const VidhaeyakTable2017 = lazy(() =>
  import("./pages/SadanSambandhi/Vidhyan/vidhyanVidhaeyak2017.jsx")
);
const VidhaeyakTable2018 = lazy(() =>
  import("./pages/SadanSambandhi/Vidhyan/vidhyanVidhaeyak2018.jsx")
);
const VidhaeyakTable2019 = lazy(() =>
  import("./pages/SadanSambandhi/Vidhyan/vidhyanVidhaeyak2019.jsx")
);
const VidhaeyakTable2020 = lazy(() =>
  import("./pages/SadanSambandhi/Vidhyan/vidhyanVidhaeyak2020.jsx")
);
const VidhaeyakTable2021 = lazy(() =>
  import("./pages/SadanSambandhi/Vidhyan/vidhyanVidhaeyak2021.jsx")
);
const VidhaeyakTable2022 = lazy(() =>
  import("./pages/SadanSambandhi/Vidhyan/vidhyanVidhaeyak2022.jsx")
);
const VidhaeyakTable2023 = lazy(() =>
  import("./pages/SadanSambandhi/Vidhyan/vidhyanVidhaeyak2023.jsx")
);
const VidhaeyakTable2024 = lazy(() =>
  import("./pages/SadanSambandhi/Vidhyan/vidhyanVidhaeyak2024.jsx")
);

const VidhaeyakTable2025 = lazy(() =>
  import("./pages/SadanSambandhi/Vidhyan/vidhyanVidhaeyak2025.jsx")
);

// Vidhyan Adhyadesh
const AdhyadeshPage = lazy(() =>
  import("./pages/SadanSambandhi/Vidhyan/adhyadeshMain.jsx")
);
const OrdinanceTable2019 = lazy(() =>
  import("./pages/SadanSambandhi/Vidhyan/adhyadesh2019.jsx")
);
const OrdinanceTable2020 = lazy(() =>
  import("./pages/SadanSambandhi/Vidhyan/adhyadesh2020.jsx")
);
const AdhyadeshTable2021 = lazy(() =>
  import("./pages/SadanSambandhi/Vidhyan/adhyadesh2021.jsx")
);

// Vidhan Sabha Karywahi
const SadanKaryavahiMain = lazy(() =>
  import("./pages/SadanSambandhi/VidhansabhaKarywahi/sadanKarywahiMain.jsx")
);
const SadanKaryavahi2016 = lazy(() =>
  import("./pages/SadanSambandhi/VidhansabhaKarywahi/sadanKarywahai2016.jsx")
);
const SadanKaryavahi15 = lazy(() =>
  import("./pages/SadanSambandhi/VidhansabhaKarywahi/sadanKarywahai2015.jsx")
);
const FullAnswersPage = lazy(() =>
  import("./pages/SadanSambandhi/VidhansabhaKarywahi/prashnokePurnUttar.jsx")
);
const SadanKaryavahi14 = lazy(() =>
  import("./pages/SadanSambandhi/VidhansabhaKarywahi/sadanKarywahai2014.jsx")
);
// Sankshipt Karya Vivran
const SanksShiptKaryaVivranMain = lazy(() =>
  import("./pages/SadanSambandhi/SankshiptKaryaVivran/sankshiptkaryaVivranMain.jsx")
);
const SanksheptKaryaVivran2016 = lazy(() =>
  import("./pages/SadanSambandhi/SankshiptKaryaVivran/sankshiptkaryaVivran2016.jsx")
);
const SanksheptKaryaVivran2015 = lazy(() =>
  import("./pages/SadanSambandhi/SankshiptKaryaVivran/sankshiptkaryaVivran2015.jsx")
);
const SanksheptKaryaVivran2014 = lazy(() =>
  import("./pages/SadanSambandhi/SankshiptKaryaVivran/sankshiptkaryaVivran2014.jsx")
);
const SanksheptKaryaVivran2013 = lazy(() =>
  import("./pages/SadanSambandhi/SankshiptKaryaVivran/sankshiptkaryaVivran2013.jsx")
);
const SanksheptKaryaVivran2012 = lazy(() =>
  import("./pages/SadanSambandhi/SankshiptKaryaVivran/sankshiptkaryaVivran2012.jsx")
);

// Satr Sambandhi Sankshipt Jankari
const SatrSambandhiSankshiptJankariMain = lazy(() =>
  import("./pages/SadanSambandhi/SatrSambandhiJankari/satrSambandhiJankariMain.jsx")
);
const SatrSambandhiJankari2016 = lazy(() =>
  import("./pages/SadanSambandhi/SatrSambandhiJankari/satrsambandhiJankari2016.jsx")
);
const SatrSambandhiJankari2015 = lazy(() =>
  import("./pages/SadanSambandhi/SatrSambandhiJankari/satrsambandhiJankari2015.jsx")
);
const SatrSambandhiJankari2014 = lazy(() =>
  import("./pages/SadanSambandhi/SatrSambandhiJankari/satrsambandhiJankari2014.jsx")
);
const SatrSambandhiJankari2013 = lazy(() =>
  import("./pages/SadanSambandhi/SatrSambandhiJankari/satrsambandhiJankari2013.jsx")
);
const SatrSambandhiJankari2012 = lazy(() =>
  import("./pages/SadanSambandhi/SatrSambandhiJankari/satrsambandhiJankari2012.jsx")
);
const SatrSambandhiJankari2011 = lazy(() =>
  import("./pages/SadanSambandhi/SatrSambandhiJankari/satrsambandhiJankari2011.jsx")
);
// Patrak Bhag 02
const PatrakBhagDoMain = lazy(() =>
  import("./pages/SadanSambandhi/Patrak-Bhag-2/patrakbhag2Main.jsx")
);

const PatrakBhagDo2009 = lazy(() =>
  import("./pages/SadanSambandhi/Patrak-Bhag-2/patrakbhag2Table2009.jsx")
);
const PatrakBhag2_2010 = lazy(() =>
  import("./pages/SadanSambandhi/Patrak-Bhag-2/patrakbhag2Table2010.jsx")
);
const PatrakBhag2_2011 = lazy(() =>
  import("./pages/SadanSambandhi/Patrak-Bhag-2/patrakbhag2Table2011.jsx")
);
const PatrakBhag2_2012 = lazy(() =>
  import("./pages/SadanSambandhi/Patrak-Bhag-2/patrakbhag2Table2012.jsx")
);
const PatrakBhag2_2013 = lazy(() =>
  import("./pages/SadanSambandhi/Patrak-Bhag-2/patrakbhag2Table2013.jsx")
);
const PatrakBhag2_2014 = lazy(() =>
  import("./pages/SadanSambandhi/Patrak-Bhag-2/patrakbhag2Table2014.jsx")
);
const PatrakBhag2_2015 = lazy(() =>
  import("./pages/SadanSambandhi/Patrak-Bhag-2/patrakbhag2Table2015.jsx")
);
const PatrakBhag2_2016 = lazy(() =>
  import("./pages/SadanSambandhi/Patrak-Bhag-2/patrakbhag2Table2016.jsx")
);
const PatrakBhag2_2017 = lazy(() =>
  import("./pages/SadanSambandhi/Patrak-Bhag-2/patrakbhag2Table2017.jsx")
);
const PatrakBhag2_2018 = lazy(() =>
  import("./pages/SadanSambandhi/Patrak-Bhag-2/patrakbhag2Table2018.jsx")
);
const PatrakBhag2_2019 = lazy(() =>
  import("./pages/SadanSambandhi/Patrak-Bhag-2/patrakbhag2Table2019.jsx")
);
const PatrakBhag2_2020 = lazy(() =>
  import("./pages/SadanSambandhi/Patrak-Bhag-2/patrakbhag2Table2020.jsx")
);
const PatrakBhag2_2021 = lazy(() =>
  import("./pages/SadanSambandhi/Patrak-Bhag-2/patrakbhag2Table2021.jsx")
);
const PatrakBhag2_2022 = lazy(() =>
  import("./pages/SadanSambandhi/Patrak-Bhag-2/patrakbhag2Table2022.jsx")
);
const PatrakBhag2_2023 = lazy(() =>
  import("./pages/SadanSambandhi/Patrak-Bhag-2/patrakbhag2Table2023.jsx")
);
const PatrakBhag2_2024 = lazy(() =>
  import("./pages/SadanSambandhi/Patrak-Bhag-2/patrakbhag2Table2024.jsx")
);







const PatrakBhag2_2025 = lazy(() =>
  import("./pages/SadanSambandhi/Patrak-Bhag-2/patrakbhag2Table2025.jsx")
);

// Abhi Bhasahan
const GovernorABhiBhasan = lazy(() =>
  import("./pages/SadanSambandhi/AbhiBhasan/abhBhasanMain.jsx")
);
const BalramJakhar_07Jan2009 = lazy(() =>
  import("./pages/SadanSambandhi/AbhiBhasan/balramjakhar2009.jsx")
);
const BalramJakhar_25feb2008 = lazy(() =>
  import("./pages/SadanSambandhi/AbhiBhasan/balramjakhar2008.jsx")
);
const BalramJakhar_14feb2007 = lazy(() =>
  import("./pages/SadanSambandhi/AbhiBhasan/balramjakhar2007.jsx")
);

// Avishwas Prastav
const NoConfidenceMotionMain = lazy(() =>
  import("./pages/SadanSambandhi/AvishwashPrastav/avishwasPrastavmain.jsx")
);

// Rashtrapati Sashan
const PresidentsRuleMain = lazy(() =>
  import("./pages/SadanSambandhi/RashtrpatiSashan/presidentRuleMain.jsx")
);

// Budget Prastuti
const BudgetPresentation = lazy(() =>
  import("./pages/SadanSambandhi/BudgetPrastuti/budgetPrastutiMain.jsx")
);

// Committee Pages
const CommitteeMeetings = lazy(() =>
  import("./pages/Leaders/Tables/CommitteeMeetings")
);
const CommitteesPage = lazy(() =>
  import("./components/communityPage/commitiesPage.jsx")
);
const PanchdashPage = lazy(() =>
  import("./components/communityPage/panchdash.jsx")
);
const GovernmentAssurancesPage = lazy(() =>
  import("./components/communityPage/GovernmentAssurancesPage.jsx")
);
const SpecialPrivilegePage = lazy(() =>
  import("./components/communityPage/SpecialPrivilegePage.jsx")
);
const FinancialElectedCommittees = lazy(() =>
  import("./components/communityPage/Financial-Elected-Committees.jsx")
);
const ChaturdashPage = lazy(() =>
  import("./components/communityPage/Chaturdash.jsx")
);
const AshwasanReportsPage = lazy(() =>
  import("./components/communityPage/AshwasanReportsPage.jsx")
);
const Trayodash = lazy(() =>
  import("./components/communityPage/Trayodash.jsx")
);
const PadkramSuchi = lazy(() =>
  import("./components/communityPage/PadkramSuchi.jsx")
);

// Press Vigyapt
const PressReleasePage = lazy(() =>
  import("./components/PressReleasePage/PressReleasePage.jsx")
);
// sadasyagan women page 
const WomenMembers16Table = lazy(() => import('./pages/Leaders/Sadasyagan/womenVS16.jsx'));
const WomenMembers15Table = lazy(() => import('./pages/Leaders/Sadasyagan/womenVS15.jsx'));
const WomenMembers14Table = lazy(() => import('./pages/Leaders/Sadasyagan/womenVS14.jsx'));
const WomenMembers13Table = lazy(() => import('./pages/Leaders/Sadasyagan/womenVS13.jsx'));
const WomenMembers12Table = lazy(() => import('./pages/Leaders/Sadasyagan/womenVS12.jsx'));
const WomenMembers11Table = lazy(() => import('./pages/Leaders/Sadasyagan/womenVS11.jsx'));







function App() {
  return (  
    <Router>
      <div id="root" className="max-w-[1280px] mx-auto p-8 text-center">
        <Navbar />
        <Suspense fallback={<div aria-busy="true">Loading…</div>}>
        <Routes>
          {/* Homepage Route */}
          <Route
            index
            element={
              <>
                <Banner />
                <ActionSection />
                <InfoCards />
                
                <NoticeBoard />
                <Footer />
              </>
            }
          />
          <Route path="/disclaimer" element={<><DisclaimerPage/><Footer /></>} />        

           {/* Optional: Redirect /home to / */}-------------------------------------------------------------
          <Route path="/home" element={<Navigate to="/" />} />
             {/* Governor Profile Page */}--------------------------------------------------------------------
          <Route path="/gov" element={<><GovernorProfile/><Footer /></>} />        


          {/* Notice board Extra heading  */}
          <Route path="forms" element={<><FormList/><Footer /></>} />  
          <Route path="/full-answers" element={<><FullAnswers/><Footer /></>} />     
          <Route path="/grant-list" element={<><GrantsList/><Footer /></>} /> 
          <Route path="/grants16" element={<><SvecchAnudan16/><Footer /></>} />     
          <Route path="/grants15" element={<><SvecchAnudan15/><Footer /></>} /> 
          <Route path="/niveda" element={<><Niveda/><Footer /></>} />        








          {/* Governor List Page */}-----------------------------------------------------------------------
          <Route path="/govlst" element={<><GovernorsTable/><Footer /></>} />     
          <Route path="/history" element={<><HistoryPage/><Footer /></>} />        

         




          {/* // Previous governor Profile Page---------------------------------------------------- */}
          <Route path="/drPattibhgov" element={<><DrPattabhiSeetaramayyaPage/><Footer /></>} />        
          <Route path="/harivinayak-pataskar" element={<><ShriHariVinayakPatskarPage/><Footer /></>} />          
          <Route path="/chengalaraya-reddy" element={<><ShriKyasamballiChengalRaoReddyPage2/><Footer /></>} />        
          <Route path="/pv-dixit" element={<><ShriPurushottamVinayakDixitPage/><Footer /></>} />        
          <Route path="/satyanarayan-singh" element={<><ShriSatyanarayanSinghPage/><Footer /></>} />        
          <Route path="/niranjan-nath-vanchu" element={<><ShriNiranjanNathVanchuPage/><Footer /></>} />      
          <Route path="/cmpunacha" element={<><CMPoonachaPage/><Footer /></>} />          
          <Route path="/bd-sharma" element={<><ShriBhagwatDayalSharmaPage/><Footer /></>} />        
          <Route path="/guruprasanna-singh" element={<><ShriGuruprasannanSinghPage/><Footer /></>} />         
          <Route path="/km-chandy" element={<><ProfessorKMChandyPage/><Footer /></>} />     
          <Route path="/sarla-grewal" element={<><SmtSarlaGrewalPage/><Footer /></>} />        
          <Route path="/mahmood-ali-khan" element={<><KunwarMahmoodAliKhanPage/><Footer /></>} />        
          <Route path="/ms-qureshi" element={<><MohammadShafiQuraishiPage/><Footer /></>} />          
          <Route path="/bhai-mahavir" element={<><BhaiMahavirPage/><Footer /></>} />         
          <Route path="/ramprakash-gupta" element={<><RamPrakashGuptaPage/><Footer /></>} />        
          <Route path="/km-seth" element={<><KrishnaMohanSethPage/><Footer /></>} />        
          <Route path="/balram-jakhar" element={<><BalramJakharPage/><Footer /></>} />          
          <Route path="/rameshwar-thakur" element={<><RameshwarThakurPage/><Footer /></>} />          
          <Route path="/ramnaresh-yadav" element={<><RamNareshYadavPage/><Footer /></>} />        
          <Route path="/op-kohli" element={<><OPKohliPage/><Footer /></>} />
          <Route path="/op-kohli-2" element={<><OPKohliPage/><Footer /></>} />
          <Route path="/anandiben-patel-1" element={<><AnandibenPatelPage/><Footer /></>} />
          <Route path="/lalji-tandon" element={<><LalJiTandonPage/><Footer /></>} />
          <Route path="/anandiben-patel-2" element={<><AnandibenPatelPage/><Footer /></>} />
          <Route path="/mangubhai-patel" element={<><GovernorProfile/><Footer /></>} />
          {/* narendra singh Profile Page */}----------------------------------------------------------
          <Route path="/nst" element={<><NarendraSinghTomarProfile/><Footer /></>} />
          {/* Adhyaksh List  */}------------------------------------------------------------------------
          <Route path="/spklist" element={<><SpeakersList/><Footer /></>} />
          {/* Previous Adhyaksh Profile Page */}
          <Route path="/ad-kunjilaldubey" element={<><KunjiLalDubePage/><Footer /></>} />
          <Route path="/kashiprasadpandey" element={<><KashiPrasadPandePage/><Footer /></>} />
          <Route path="/tejlal" element={<><TejLalTembharePage/><Footer /></>} />
          <Route path="/gulsherahmd" element={<><GulSherAhmedPage/><Footer /></>} />
          <Route path="/mukundsukhramnewalkar" element={<><MukundSakharamNewalkarPage/><Footer /></>} />
          <Route path="/yagyadattsharma" element={<><YagyadattSharmaPage/><Footer /></>} />
          <Route path="/ramkishoreshukla" element={<><RamkishorShuklaPage/><Footer /></>} />
          <Route path="/rajendraprasadshukla" element={<><RajendraPrasadShuklaPage/><Footer /></>} />
          <Route path="/brijmohan" element={<><BrijMohanPage/><Footer /></>} />
          <Route path="/shriniwastiwari" element={<><ShriniwasTiwariPage/><Footer /></>} />
          <Route path="/ishwardasrohani" element={<><IshwarDasRohaniPage/><Footer /></>} />
          <Route path="/sitasaransharma" element={<><SitasaranSharmaPage/><Footer /></>} />
          <Route path="/narmadaprasadprajapati" element={<><NarmadaPrasadPrajapatiPage/><Footer /></>} />
          <Route path="/girishgoutam" element={<><GirishGoutamPage/><Footer /></>} />
          <Route path="/nst" element={<><NarendraSinghTomarProfile/><Footer /></>} />
          <Route path="/samayik-adhyaksh" element={<><TemporarySpeakers/><Footer /></>} />
          {/* updahyksh list */}
          <Route path="/uplist" element={<><DeputySpeakersList/><Footer /></>} />
          {/* Previous Upadhyaksh Profile Page */}----------------------------------------------------
          <Route path="/sarwate" element={<><VishnuVinayakSarwatePage/><Footer /></>} />
          <Route path="/patwardhan" element={<><AnantSadaShivPatwardhan/><Footer /></>} />
          <Route path="/narbada" element={<><NarbadaPrasadShrivastavPage/><Footer /></>} />
          <Route path="/narbada1" element={<><NarbadaPrasadShrivastavPage/><Footer /></>} />
          <Route path="/ramkishore" element={<><RamkishorShuklaPage1/><Footer /></>} />
          <Route path="/nayrayan" element={<><NarayanPrasadShuklaPage/><Footer /></>} />
          <Route path="/sawaimal" element={<><SwaimalJainPage/><Footer /></>} />
          <Route path="/maheshwari" element={<><RamchandraMaheshwariPage/><Footer /></>} />
          <Route path="/ramkishore1" element={<><RamkishorShuklaPage1/><Footer /></>} />
          <Route path="/pyarelalkanwar" element={<><PyareLalKanwarPage/><Footer /></>} />
          <Route path="/kanhaiyalal" element={<><KanhaiyalalYadavPage/><Footer /></>} />
          <Route path="/shriniwas" element={<><NiwasTiwariPage/><Footer /></>} />
          <Route path="/bhurelalpatidar" element={<><BhurelalPatidarPage/><Footer /></>} />
          <Route path="/rohanidas" element={<><RohaniPage/><Footer /></>} />
          <Route path="/hajarilalraghuwanshi" element={<><HajariLalRaghuwanshiPage/><Footer /></>} />
          <Route path="/harwanshsingh" element={<><HarvanshSinghPage/><Footer /></>} />
          <Route path="/rjkumarsingh" element={<><RjKumarSinghPage/><Footer /></>} />
          <Route path="/hinalikhiramkanware" element={<><HinaLikhiramKanware/><Footer /></>} />
          {/* umangsingh Profile Page */}
          <Route path="/umg" element={<><UmangSingharProfile/><Footer /></>} />
          {/* umangsingh List  */}
           <Route path="/umglst" element={<><NetapratipakshList/><Footer /></>} />
          {/* Previous Neta pratipaksh Profile Page */}
          <Route path="/vy-tamaskar" element={<><VishwanathTamascarPage/><Footer /></>} />
          <Route path="/cp-tiwari" element={<><ChandraPratapTiwariPage/><Footer /></>} />
          <Route path="/vk-sakhlecha-1" element={<><VirendraPratapSackhlecha/><Footer /></>} />
          <Route path="/sc-shukla-1" element={<><ShyamCharanShukla/><Footer /></>} />
          <Route path="/dp-mishra" element={<><DwarikaPrasadMishra/><Footer /></>} />
          <Route path="/sc-shukla-2" element={<><ShyamCharanShukla/><Footer /></>} />
          <Route path="/vk-sakhlecha-3" element={<><VirendraPratapSackhlecha/><Footer /></>} />
          <Route path="/vs-pradhan" element={<><VasantSadashivPradhanPage/><Footer /></>} />
          <Route path="/kailash-joshi-1" element={<><KailashJoshiPage/><Footer /></>} />
          <Route path="/arjun-singh" element={<><ArjunSinghPage/><Footer /></>} />
          <Route path="/sl-patwa" element={<><SundarlalPatwaPage/><Footer /></>} />
          <Route path="/kailash-joshi-2" element={<><KailashJoshiPage/><Footer /></>} />
          <Route path="/sc-shukla-3" element={<><ShyamCharanShukla/><Footer /></>} />
          <Route path="/vikram-verma" element={<><VikramVermaPage/><Footer /></>} />
          <Route path="/gs-shejwar" element={<><GourishankarShejwar/><Footer /></>} />
          <Route path="/bl-gaur" element={<><BabulalGaurPage/><Footer /></>} />
          <Route path="/jamuna-devi-1" element={<><JamunaDeviPage/><Footer /></>} />
          <Route path="/jamuna-devi-2" element={<><JamunaDeviPage/><Footer /></>} />
          <Route path="/ajay-singh-1" element={<><AjaySinghPage/><Footer /></>} />
          <Route path="/satyadev-katare" element={<><SatyadevKatarePage/><Footer /></>} />
          <Route path="/ajay-singh-2" element={<><AjaySinghPage/><Footer /></>} />
          <Route path="/gopal-bhargava" element={<><GopalBhargavaPage/><Footer /></>} />
          <Route path="/kamal-nath" element={<><KamalNathPage/><Footer /></>} />
          <Route path="/govind-singh" element={<><GovindSinghPage/><Footer /></>} />
          <Route path="/umang-singhar" element={<><UmangSingharProfile/><Footer /></>} />
          
          {/* mohanyadav Profile Page */}
          <Route path="/cm" element={<><MohanYadavProfile/><Footer /></>} />
          {/* Chief Minister List  */}
          <Route path="/cmlist" element={<><ChiefMinistersList /><Footer /></>} />
          
          {/* CM Profile List PAge  */}
          <Route path="/ravishankar-shukla" element={<><RavishankarShuklaPage /><Footer /></>} />
          <Route path="/bhagwantrao-mandloi" element={<><ShriBhagwantraoMandaloiPage /><Footer /></>} />
          <Route path="/kailashnath-katju" element={<><ShriKailashnathKatjuPage /><Footer /></>} />
          <Route path="/dwarka-prasad-mishra" element={<><ShriDwarikaprasadMishraPage1 /><Footer /></>} />
          <Route path="/vijayaraje-scindia" element={<><SmtVijayarajeSindhiaPage /><Footer /></>} />
          <Route path="/govind-narayan-singh" element={<><ShriGovindNarayanSinghPage /><Footer /></>} />
          <Route path="/nareshchandra-singh" element={<><ShriNareshchandraSinghPage /><Footer /></>} />
          <Route path="/nareshchandra-singh" element={<><ShriNareshchandraSinghPage /><Footer /></>} />
          <Route path="/shymcharanshukla-singh" element={<><ShyamcharanShuklaPage /><Footer /></>} />
          <Route path="/prakashchandsethi-singh" element={<><ShriPrakashChandraSethiPage /><Footer /></>} />
          <Route path="/kailashjoshi-singh" element={<><ShriKailashJoshiPagecm /><Footer /></>} />
          <Route path="/virendrakumarsakchelcha-singh" element={<><VirendraKumarSakhalechaPage /><Footer /></>} />
          <Route path="/sundarlalpatwaa-singh" element={<><CMSunderlalPatwaPage /><Footer /></>} />
          <Route path="/arjunsingh-singh" element={<><ArjunSinghPage /><Footer /></>} />
          <Route path="/motilalvora-singh" element={<><ShriMotilalVoraPage /><Footer /></>} />
          <Route path="/shyamcharanshukla12-singh" element={<><ShyamcharanShuklaPage /><Footer /></>} />
          <Route path="/patwacm1-singh" element={<><CMSunderlalPatwaPage /><Footer /></>} />
          <Route path="/diigvijay-singh" element={<><DigvijaySinghPage /><Footer /></>} />
          <Route path="/umabharti" element={<><UmaBhartiPage /><Footer /></>} />
          <Route path="/babulalgour" element={<><BabuLalGaurPage /><Footer /></>} />
          <Route path="/shivraj-singh" element={<><ShivrajSinghChouhanPage/><Footer /></>} />
          <Route path="/kamalnath-singh" element={<><CMKamalNathPage/><Footer /></>} />
          <Route path="/mohanyadav" element={<><MohanYadavProfile/><Footer /></>} />
        
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
        <Route path="/year/2021" element={<><Sampativivransachivalya2021/><Footer /></>} />
        <Route path="/year/2022" element={<><Sampativivransachivalya2022/><Footer /></>} />
        <Route path="/year/2023" element={<><Sampativivransachivalya2023/><Footer /></>} />
        <Route path="/year/2024" element={<><Sampativivransachivalya2024/><Footer /></>} />
        <Route path="/libarypage" element={<><LibraryPage/><Footer /></>} />
        <Route path="/sachivalayaprakashan" element={<><Sachivalayaprakashan/><Footer /></>} />
        <Route path="/sachivalayaprakashan" element={<><Sachivalayaprakashan/><Footer /></>} />
        <Route path="/secretary/bdisrani" element={<><IsraniProfile/><Footer /></>} />


        

        {/* Sadasyagan Navbar */}
        <Route path="/sadasyaganvartman" element={<><SadasyaganVartman/><Footer /></>} />
        <Route path="/nakshewar" element={<><SadasyaganNakshewar/><Footer /></>} />
        <Route path="/sadasyaganpanchdash" element={<><SadasyaganPanchdash/><Footer /></>} />
        <Route path="/maps/panchdash" element={<><SadasyaganNakshewarPanchdash/><Footer /></>} />
        <Route path="/sadasyagan/sampativivran/panchdash" element={<><SadasyaganPanchdashSampatiVivran/><Footer /></>} />
        <Route path="/sadasyaganchaturthdas" element={<><SadasyaganChaturdash/><Footer /></>} />
        <Route path="/chaturdash-nakshewar" element={<><Sadasyagan14Nakshewar/><Footer /></>} />
        
        <Route path="/sadasyagan13nakshewar" element={<><Sadasyagan13Nakshewar/><Footer /></>} />
        <Route path="/sadasyagan13sampativivran" element={<><Sadasyagan13SampatiVivranmain/><Footer /></>} />
        <Route path="/assembly/2013" element={<><Sadasyagan13Sampativivran/><Footer /></>} />
        <Route path="/assembly/2012" element={<><Sadasyagan12Sampativivran/><Footer /></>} />
        <Route path="/assembly/2011" element={<><Sadasyagan11Sampativivran/><Footer /></>} />
        <Route path="/sadasyagantrayodash" element={<><Sadasyagantrayodash/><Footer /></>} />
        <Route path="/sadasyagandwadash" element={<><SadasyaganDwadash/><Footer /></>} />
        <Route path="/sadasyaganekadash" element={<><SadasyaganEkadash/><Footer /></>} />
        <Route path="/sadasyaganrajyasabha" element={<><RajyaSabhaMembersMP/><Footer /></>} />
        <Route path="/sadasyagan/pensionrules" element={<><PensionRules/><Footer /></>} />


                {/* Sadan Sambandhi  */}
        <Route path="/satradhisuchna" element={<><SadansambandhiSatrAdhisuchna/><Footer /></>} />
        {/* Sadan Sambandhi Shodash */}
        <Route path="/vidhansabha-16" element={<><SadansambandhiSatrAdhisuhnaShodash/><Footer /></>} />
        <Route path="/satradhisuchna1" element={<><ShodashVidhanSabhaFirstSession/><Footer /></>} />
        <Route path="/satradhisuchna2" element={<><ShodashVidhanSabhaSecondSession/><Footer /></>} />
        <Route path="/satradhisuchna3" element={<><ShodashThirdSession/><Footer /></>} />
        <Route path="/satradhisuchna4" element={<><ShodashChaturthSession/><Footer /></>} />
        <Route path="/satradhisuchna5" element={<><ShodashFifthSession/><Footer /></>} />
        <Route path="/satradhisuchna6" element={<><ShodashsixthSession/><Footer /></>} />
        <Route path="/satradhisuchna7" element={<><ShodashSeventhSession/><Footer /></>} />

        {/* Sadan Sambandhi Panchdas */}
        <Route path="/vidhansabha-15" element={<><SadansambandhiSatrAdhisuhnaPanchdash/><Footer /></>} />
        <Route path="/pancdashpancdashsession/pratham" element={<><PanchadashVidhanSabhaFirstSession/><Footer /></>} />
        <Route path="/pancdashsession/dwitiya" element={<><PanchadashVidhanSabhaSecondSession/><Footer /></>} />
        <Route path="/pancdashsession/tritiya" element={<><PanchadashVidhanSabhaThirdSession/><Footer /></>} />
        <Route path="/pancdashsession/chaturth" element={<><PanchadashVidhanSabhaFourthSession/><Footer /></>} />
        <Route path="/pancdashsession/pancham" element={<><PanchadashVidhanSabhaFifthSession/><Footer /></>} />
        <Route path="/pancdashsession/shashtham" element={<><PanchadashVidhanSabhaSixthSession/><Footer /></>} />
        <Route path="/pancdashsession/saptam-nirast" element={<><PanchadashVidhanSabhaSeventhSession/><Footer /></>} />
        <Route path="/pancdashsession/saptam" element={<><PanchadashVidhanSabhaSeventhSessionSeptember2020/><Footer /></>} />
        <Route path="/pancdashsession/ashtam-nirast" element={<><PanchadashVidhanSabhaEighthSessionNirast2020/><Footer /></>} />
        <Route path="/pancdashsession/ashtam" element={<><PanchadashVidhanSabhaAshtamSession/><Footer /></>} />
        <Route path="/pancdashsession/navam" element={<><PanchadashVidhanSabhaNavamSessionAugust2021/><Footer /></>} />
        <Route path="/pancdashsession/dasham" element={<><PanchadashVidhanSabhaTenthSessionDecember2021/><Footer /></>} />
        <Route path="/pancdashsession/ekadash" element={<><PanchadashVidhanSabhaEleventhSessionMarch2022/><Footer /></>} />
        <Route path="/pancdashsession/ekadash" element={<><PanchadashVidhanSabhaEleventhSessionMarch2022/><Footer /></>} />
        <Route path="/pancdashsession/dwadash" element={<><PanchadashVidhanSabhaTwelfthSessionSeptember2022/><Footer /></>} />
        <Route path="/pancdashsession/trayodash" element={<><PanchadashVidhanSabhaThirteenthSessionDecember2022/><Footer /></>} />
        <Route path="/pancdashsession/chaturdash" element={<><PanchadashVidhanSabhaFourteenthSessionFebMar2023/><Footer /></>} />
        <Route path="/pancdashsession/panchdash" element={<><PanchadashVidhanSabhaFifteenthSessionJuly2023/><Footer /></>} />

        



        {/*Sadan Sambandhi Chaturdash  */}
        <Route path="/vidhansabha-14" element={<><SadansambandhiSatrAdhisuhnaChaturdash/><Footer /></>} />
        <Route path="/chaturdashsession/pratham" element={<><ChaturdashVidhanSabhaFirstSession/><Footer /></>} />
        <Route path="/chaturdashsession/dwitiya" element={<><ChaturdashVidhanSabhaSecondSession /><Footer /></>} />
        <Route path="/chaturdashsession/tritiya" element={<><ChaturdashVidhanSabhaThirdSession /><Footer /></>} />
        <Route path="/chaturdashsession/chaturth" element={<><ChaturdashVidhanSabhaFourthSession /><Footer /></>} />
        <Route path="/chaturdashsession/pancham" element={<><ChaturdashVidhanSabhaFifthSession /><Footer /></>} />
        <Route path="/chaturdashsession/shashtham" element={<><ChaturdashVidhanSabhaSixthSession /><Footer /></>} />
        <Route path="/chaturdashsession/saptam" element={<><ChaturdashVidhanSabhaSeventhSession /><Footer /></>} />
        <Route path="/chaturdashsession/ashtam" element={<><ChaturdashVidhanSabhaEigthSession /><Footer /></>} />
        <Route path="/chaturdashsession/navam" element={<><ChaturdashVidhanSabhaNinthSession /><Footer /></>} />
        <Route path="/chaturdashsession/dasham" element={<><ChaturdashVidhanSabhaTenthSession /><Footer /></>} />
        <Route path="/chaturdashsession/ekadash" element={<><ChaturdashVidhanSabhaEleventhSession /><Footer /></>} />
        <Route path="/chaturdashsession/dwadash" element={<><ChaturdashVidhanSabhaTwelthSession /><Footer /></>} />
        <Route path="/chaturdashsession/trayodash" element={<><ChaturdashVidhanSabhaThirteenSession /><Footer /></>} />
        <Route path="/chaturdashsession/chaturdash" element={<><ChaturdashVidhanSabhaFourteenSession /><Footer /></>} />
        <Route path="/chaturdashsession/panchdash" element={<><ChaturdashVidhanSabhaFifteenSession /><Footer /></>} />
        <Route path="/chaturdashsession/shodash" element={<><ChaturdashVidhanSabhaSixteenSession /><Footer /></>} />
        <Route path="/chaturdashsession/saptadash" element={<><ChaturdashVidhanSabhaSeventeenSession /><Footer /></>} />


        {/*Sadan Sambandhi Trayodash  */}
        <Route path="/vidhansabha-13" element={<><SadansambandhiSatrAdhisuhnaTrayodash/><Footer /></>} />
        <Route path="/trayodash1" element={<><TrayodashVidhanSabhaFirstSession/><Footer /></>} />
        <Route path="/trayodash2" element={<><TrayodashVidhanSabhaSecondSession/><Footer /></>} />
        <Route path="/trayodash3" element={<><TrayodashVidhanSabhaThirdSession/><Footer /></>} />
        <Route path="/trayodash4" element={<><TrayodashVidhanSabhaFourthSession/><Footer /></>} />
        <Route path="/trayodash5" element={<><TrayodashVidhanSabhaFifthBudgetSession/><Footer /></>} />
        <Route path="/trayodash6" element={<><TrayodashVidhanSabhaSpecialSixthSession/><Footer /></>} />
        <Route path="/trayodash7" element={<><TrayodashVidhanSabhaSeventhSession/><Footer /></>} />
        <Route path="/trayodash8" element={<><TrayodashVidhanSabhaEighthSession/><Footer /></>} />
        <Route path="/trayodash9" element={<><TrayodashVidhanSabhaNinthSession/><Footer /></>} />
        <Route path="/trayodash10" element={<><TrayodashVidhanSabhaTenthSession/><Footer /></>} />
        <Route path="/trayodash11" element={<><TrayodashVidhanSabhaEleventhSession/><Footer /></>} />
        <Route path="/trayodash12" element={<><TrayodashVidhanSabhaTwelfthSession/><Footer /></>} />
        <Route path="/trayodash13" element={<><TrayodashVidhanSabhaThirteenthSession/><Footer /></>} />
        <Route path="/trayodash14" element={<><TrayodashVidhanSabhaFourteenthSession/><Footer /></>} />
        <Route path="/trayodash15" element={<><TrayodashVidhanSabhaFifteenthSession/><Footer /></>} />
        <Route path="/trayodash16" element={<><TrayodashVidhanSabhaSixteenthSession/><Footer /></>} />
        <Route path="/trayodash17" element={<><TrayodashVidhanSabhaSeventeenthSession/><Footer /></>} />
        


        {/*Sadan Sambandhi Dwadash  */}
        <Route path="/vidhansabha-12" element={<><SadansambandhiSatrAdhisuhnaDwadash/><Footer /></>} />
        <Route path="/dritiya2" element={<><DwadashSecondSession/><Footer /></>} />
        <Route path="/tritiya3" element={<><DwadashThirdSession/><Footer /></>} />
        <Route path="/chaturth4" element={<><DwadashFourthSession/><Footer /></>} />
        <Route path="/pancham5" element={<><DwadashFifthSession/><Footer /></>} />
        <Route path="/shastam6" element={<><DwadashSixthSession/><Footer /></>} />
        <Route path="/saptam7" element={<><DwadashSeventhSession/><Footer /></>} />
        <Route path="/astham8" element={<><DwadashEighthSession/><Footer /></>} />
        <Route path="/navam9" element={<><DwadashNinthSession/><Footer /></>} />
        <Route path="/dasham10" element={<><DwadashTenthSession/><Footer /></>} />
        <Route path="/ekadash11" element={<><DwadashEleventhSession/><Footer /></>} />
        <Route path="/dwadash12" element={<><DwadashTwelfthSession/><Footer /></>} />
        <Route path="/dwatrayodash13" element={<><DwadashThirteenSession/><Footer /></>} />
        <Route path="/chaturdash14" element={<><DwadashFourteenthSession/><Footer /></>} />
        <Route path="/panchdash15" element={<><DwadashFifteenthSession/><Footer /></>} />

        {/* Dainik KaryaSuchiMain */}
        <Route path="/dainik" element={<><DainikKaryaSuchiMain/><Footer /></>} />
        <Route path="/dainik-16" element={<><DainikKaryasuchi16/><Footer /></>} />
        <Route path="/dainik-15" element={<><DainikKaryasuchi15/><Footer /></>} />
        <Route path="/dainik-14" element={<><DainikKaryasuchi14/><Footer /></>} />
        <Route path="/dainik-13" element={<><DainikKaryasuchi13/><Footer /></>} />
        <Route path="/dainik-12" element={<><DainikKaryasuchi12/><Footer /></>} />
        <Route path="/dainik-11" element={<><DainikKaryasuchi11/><Footer /></>} />
        <Route path="/dainik-10" element={<><DainikKaryasuchi10/><Footer /></>} />
        <Route path="/dainik-9" element={<><DainikKaryasuchi9/><Footer /></>} />






        {/* Vidhyan Main */}
        <Route path="/vidhyan" element={<><VidhyanMain/><Footer /></>} />
        <Route path="/vidheyak/bill" element={<><Vidheyak/><Footer /></>} />
        <Route path="/vidheyak/year/2014" element={<><VidhaeyakTable2014/><Footer /></>} />
        <Route path="/vidheyak/year/2015" element={<><VidhaeyakTable2015/><Footer /></>} />
        <Route path="/vidheyak/year/2016" element={<><VidhaeyakTable2016/><Footer /></>} />
        <Route path="/vidheyak/year/2017" element={<><VidhaeyakTable2017/><Footer /></>} />
        <Route path="/vidheyak/year/2018" element={<><VidhaeyakTable2018/><Footer /></>} />
        <Route path="/vidheyak/year/2019" element={<><VidhaeyakTable2019/><Footer /></>} />
        <Route path="/vidheyak/year/2020" element={<><VidhaeyakTable2020/><Footer /></>} />
        <Route path="/vidheyak/year/2021" element={<><VidhaeyakTable2021/><Footer /></>} />
        <Route path="/vidheyak/year/2022" element={<><VidhaeyakTable2022/><Footer /></>} />
        <Route path="/vidheyak/year/2023" element={<><VidhaeyakTable2023/><Footer /></>} />
        <Route path="/vidheyak/year/2024" element={<><VidhaeyakTable2024/><Footer /></>} />
        <Route path="/vidheyak/year/2025" element={<><VidhaeyakTable2025/><Footer /></>} />

        {/* Vidhyan Adhyadesh */}
        <Route path="/adhyadesh/ordinance" element={<><AdhyadeshPage/><Footer /></>} />
        <Route path="/adhyadesh/2019" element={<><OrdinanceTable2019/><Footer /></>} />
        <Route path="/adhyadesh/2020" element={<><OrdinanceTable2020/><Footer /></>} />


        <Route path="/adhyadesh/2021" element={<><AdhyadeshTable2021/><Footer /></>} />

        {/* Vidhan Sabha Karywahi */}
        <Route path="/vidhansabhakarywahi" element={<><SadanKaryavahiMain/><Footer /></>} />
        <Route path="/sadankarywahi2016" element={<><SadanKaryavahi2016/><Footer /></>} />
        <Route path="/sadankarywahi2015" element={<><SadanKaryavahi15/><Footer /></>} />
        <Route path="/prashnonke-purn-uttar" element={<><FullAnswersPage/><Footer /></>} />
        <Route path="/sadankarywahi2014" element={<><SadanKaryavahi14/><Footer /></>} />




        {/* Sankshipt Karya Vivran */}
        <Route path="/sankshiptkaryavivran" element={<><SanksShiptKaryaVivranMain/><Footer /></>} />
        <Route path="/sankshiptvivran2016" element={<><SanksheptKaryaVivran2016/><Footer /></>} />
        <Route path="/sankshiptvivran2015" element={<><SanksheptKaryaVivran2015/><Footer /></>} />
        <Route path="/sankshiptvivran2014" element={<><SanksheptKaryaVivran2014/><Footer /></>} />
        <Route path="/sankshiptvivran2014" element={<><SanksheptKaryaVivran2014/><Footer /></>} />
        <Route path="/sankshiptvivran2013" element={<><SanksheptKaryaVivran2013/><Footer /></>} />
        <Route path="/sankshiptvivran2012" element={<><SanksheptKaryaVivran2012/><Footer /></>} />






        {/* Satr Sambandhi Sankshipt jankari */}
        <Route path="/satrsambandhisankshiptjankari" element={<><SatrSambandhiSankshiptJankariMain/><Footer /></>} />
        <Route path="/satr/sambandhi/detail-16" element={<><SatrSambandhiJankari2016/><Footer /></>} />
        <Route path="/satr/sambandhi/detail-15" element={<><SatrSambandhiJankari2015/><Footer /></>} />
        <Route path="/satr/sambandhi/detail-14" element={<><SatrSambandhiJankari2014/><Footer /></>} />
        <Route path="/satr/sambandhi/detail-13" element={<><SatrSambandhiJankari2013/><Footer /></>} />
        <Route path="/satr/sambandhi/detail-12" element={<><SatrSambandhiJankari2012/><Footer /></>} />
        <Route path="/satr/sambandhi/detail-11" element={<><SatrSambandhiJankari2011/><Footer /></>} />





        {/* Patrak Bhag _ 02 */}
        <Route path="/patrakbhag-02" element={<><PatrakBhagDoMain/><Footer /></>} />
        <Route path="/patrakbhagdo/2009" element={<><PatrakBhagDo2009/><Footer /></>} />
        <Route path="/patrakbhagdo/2010" element={<><PatrakBhag2_2010/><Footer /></>} />
        <Route path="/patrakbhagdo/2011" element={<><PatrakBhag2_2011/><Footer /></>} />
        <Route path="/patrakbhagdo/2012" element={<><PatrakBhag2_2012/><Footer /></>} />
        <Route path="/patrakbhagdo/2013" element={<><PatrakBhag2_2013/><Footer /></>} />
        <Route path="/patrakbhagdo/2014" element={<><PatrakBhag2_2014/><Footer /></>} />
        <Route path="/patrakbhagdo/2015" element={<><PatrakBhag2_2015/><Footer /></>} />
        <Route path="/patrakbhagdo/2016" element={<><PatrakBhag2_2016/><Footer /></>} />
        <Route path="/patrakbhagdo/2017" element={<><PatrakBhag2_2017/><Footer /></>} />
        <Route path="/patrakbhagdo/2018" element={<><PatrakBhag2_2018/><Footer /></>} />
        <Route path="/patrakbhagdo/2019" element={<><PatrakBhag2_2019/><Footer /></>} />
        <Route path="/patrakbhagdo/2020" element={<><PatrakBhag2_2020/><Footer /></>} />
        <Route path="/patrakbhagdo/2021" element={<><PatrakBhag2_2021/><Footer /></>} />
        <Route path="/patrakbhagdo/2022" element={<><PatrakBhag2_2022/><Footer /></>} />
        <Route path="/patrakbhagdo/2023" element={<><PatrakBhag2_2023/><Footer /></>} />
        <Route path="/patrakbhagdo/2024" element={<><PatrakBhag2_2024/><Footer /></>} />
        

        {/* extra notice board */}
        <Route path="/lambitashwasan" element={<><PendingAssurancesPage/><Footer /></>} />   
          <Route path="/dept-wise-status" element={<><DeptWiseAssuranceStatus/><Footer /></>} />

















        <Route path="/patrakbhagdo/2025" element={<><PatrakBhag2_2025/><Footer /></>} />




        {/* Governor Abhi Bhasahan */}
        <Route path="/abhibhashan" element={<><GovernorABhiBhasan/><Footer /></>} />
        <Route path="/leaders/governors/balram-jakhar/07jan2009" element={<><BalramJakhar_07Jan2009/><Footer /></>} />
        <Route path="/leaders/governors/balram-jakhar/25feb2008" element={<><BalramJakhar_25feb2008/><Footer /></>} />
        <Route path="/leaders/governors/balram-jakhar/19feb2007" element={<><BalramJakhar_14feb2007/><Footer /></>} />

        {/* Avishwas Prastav */}
        <Route path="/avishwasprastav" element={<><NoConfidenceMotionMain/><Footer /></>} />

        {/* Rashtrapati Sashan */}
        <Route path="/presidentrule" element={<><PresidentsRuleMain/><Footer /></>} />

        {/* Budget Prastuti */}
        <Route path="/budgetprastuti" element={<><BudgetPresentation/><Footer /></>} />
        
       


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
           {/* <Route
            path="/bio/ap-singh"
            element={
              <>
                <ProfilePage/>
                
              </>
            }
          /> */}
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
      
           <Route
            path="/vidhansabha-tour23"
            element={
              <>
                <VidhansabhaCategoryCarousel />
              </>
            }
          />
              {/* ath */}
               {/* press release */}
        <Route path="/pressrelease" element={<PressReleasePage />} />
          <Route
            path="/assemblies/panchadash"
            element={
              <>
                <PanchdashPage />
              </>
            }
          />
          <Route
            path="/committees/shodash/government-assurances"
            element={<GovernmentAssurancesPage />}
          />
          <Route
            path="/committees/special-privilege"
            element={<SpecialPrivilegePage />}
          />
          <Route
            path="/committees/panchadash/financial"
            element={<FinancialElectedCommittees />}
          />
          <Route path="/assemblies/chaturdash" element={<ChaturdashPage/>} />
          <Route path="/committees/ashwasanreports" element={<AshwasanReportsPage />} />
          <Route path="/assemblies/trayodash" element={<Trayodash />} />
         {/* Committees */}
          <Route
            path="/committees"
            element={
              <>
                <CommitteeMeetings />
                <Footer />
              </>
            }
          />
          <Route path="/committees1" element={<CommitteesPage />} />
          <Route path="/committees/padkramsuchi" element={<PadkramSuchi />} />
          <Route path="/seventh/7" element={<><ShodashSeventhSession/><Footer /></>} />
          {/* // sadasyagan women page route */}
          <Route path="/sadasyaganmahila" element={<><WomenMembers16Table/><Footer /></>} />
          <Route path="/15mlamahila" element={<><WomenMembers15Table/><Footer /></>} />
          <Route path="/14mlamahila" element={<><WomenMembers14Table/><Footer /></>} />
          <Route path="/13mahila" element={<><WomenMembers13Table/><Footer /></>} />
          <Route path="/12mahilasadasya" element={<><WomenMembers12Table/><Footer /></>} />
          <Route path="/11mahila" element={<><WomenMembers11Table/><Footer /></>} />





          
          


         

          
        </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App