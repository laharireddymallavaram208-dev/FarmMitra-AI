/**
 * FarmRakshak AI – Smart Farming Assistant (రైతు రక్షక్ AI)
 * Full Frontend Logic:
 *  1. Bilingual i18n Translation Engine (English & Telugu)
 *  2. Crop Risk Checker Knowledge Base & Diagnosis
 *  3. Smart Water Advisor (Precision Irrigation Calculator)
 *  4. Live Weather & Soil Moisture Command Center
 *  5. Farm Records (Digital Field Logbook with LocalStorage)
 *  6. Sustainable Farming Care Guide & Category Filter
 *  7. UI Event Listeners & Navigation
 */

// ==========================================================================
// 1. Dual-Language Translation Dictionary (English & Telugu)
// ==========================================================================
const translations = {
  en: {
    bannerText: "FarmRakshak AI • Hackathon Edition • Empowering Indian Agriculture",
    helplineLabel: "Kisan Helpline:",
    brandSub: "Smart Farming Assistant • రైతు రక్షక్",
    navHome: "Home",
    navWater: "Water Advisor",
    navWeather: "Weather",
    navCropRisk: "Crop Risk Checker",
    navRecords: "Farm Records",
    navGuide: "Farming Guide",
    navAbout: "About",
    navCta: "Check Crop",
    heroBadge: "AI-Powered Farming Intelligence",
    heroTitle: "Protecting Every Field, <span class=\"text-gradient\">Empowering Every Farmer</span>",
    heroDesc: "FarmRakshak AI brings smart crop disease risk diagnosis, weather-guided irrigation scheduling, regional market insights, and digital farm record keeping into one simple platform in English and Telugu.",
    btnHeroRisk: "Check Crop Risk",
    btnHeroWater: "Smart Water Advisor",
    btnHeroRecords: "Farm Records",
    statCrops: "Indian Crops",
    statWater: "Water Saved",
    statFree: "Free & Open",
    statLangs: "EN & Telugu",
    simulatedAiLive: "Live AI Field Scan",
    heroCardCrop: "Paddy (వరి)",
    leafScanTag: "Blast Detected • 94% Risk",
    quickAdviceLabel: "Immediate Advisory:",
    quickAdviceVal: "Spray Neem Oil (5ml/L) or Trichoderma culture. Halt urea top-dressing.",
    btnTryDemo: "Full Analysis",
    waterBadge: "Precision Irrigation & Conservation",
    waterTitle: "Smart Water Advisor – జల మిత్ర",
    waterDesc: "Avoid under-watering and harmful waterlogging. Calculate scientifically tailored watering schedules based on crop growth stage, soil texture, and real-time weather.",
    waterFormTitle: "Field Conditions Input",
    irriCropLabel: "Crop Type:",
    irriStageLabel: "Growth Stage:",
    irriSoilLabel: "Soil Type:",
    irriWeatherLabel: "Current Weather:",
    btnCalcIrrigation: "Calculate Watering Schedule",
    irrigationScheduleTag: "AI Water Recommendation",
    irriFreqLabel: "Watering Frequency",
    irriQtyLabel: "Water Quantity / Depth",
    irriTimeLabel: "Optimal Watering Time",
    irriMethodLabel: "Recommended Method",
    agronomistNote: "Agronomist Recommendation:",
    smartSaverTipTitle: "Smart Water-Saving Tip:",
    weatherSectionBadge: "Real-Time Agronomic Insights",
    weatherSectionTitle: "Live Weather & Soil Command Center",
    weatherSectionDesc: "Monitor regional micro-climate forecasts, interactive soil moisture levels, and APMC Mandi rates to plan farm activities effectively.",
    weatherCardTag: "Local Weather",
    weatherCondSunny: "Sunny with Light Clouds",
    humidityLabel: "Humidity",
    windLabel: "Wind",
    rainChanceLabel: "Rain Chance",
    changeRegionLabel: "Switch Region:",
    soilCardTag: "Soil Moisture Monitor",
    soilCardTitle: "Interactive Sensor Simulator",
    soilDry: "Dry (ఎండిన)",
    soilOptimal: "Optimal (సరిపడా)",
    soilSaturated: "Waterlogged (అధిక నీరు)",
    currentMoisture: "Current Moisture:",
    sliderTip: "Slide the bar to test how AI advises farmers at different moisture stages!",
    marketCardTag: "APMC Mandi Rates",
    marketCardTitle: "Today's Crop Prices (₹/Qtl)",
    badgeSimulated: "SIMULATED DATA",
    mandiUpdated: "Updated today • Direct market average for major regional APMCs",
    doctorBadge: "Crop Health AI Assistant",
    doctorTitle: "Crop Risk Checker – Plant Disease Diagnosis",
    doctorDesc: "Select your crop and observed symptoms. FarmRakshak AI evaluates risk level, identifies probable pathogens, and provides organic and safe chemical control measures.",
    disclaimerTitle: "Educational Advisory Disclaimer:",
    disclaimerBody: "Results provided by FarmRakshak AI are simulated for educational and preliminary advisory guidance. For critical field emergencies or heavy infestations, always confirm with your local Mandal Agriculture Officer (MAO) or Krishi Vigyan Kendra (KVK).",
    diagnoseFormTitle: "Enter Crop Symptoms",
    selectCropLabel: "1. Select Your Crop:",
    selectSymptomLabel: "2. Observed Symptoms on Crop:",
    sampleImageLabel: "3. Field Sample Image (Auto-Loaded or Custom):",
    uploadLabel: "Upload Your Own Photo (Optional Preview)",
    btnAnalyzeCrop: "Run AI Crop Risk Assessment",
    placeholderTitle: "No Diagnosis Run Yet",
    placeholderDesc: "Choose a crop and observed symptom on the left, then click 'Run AI Crop Risk Assessment' to view the simulated results and treatment.",
    simulatedMatch: "Simulated AI Match",
    confidenceMatch: "Match Confidence",
    severityLabel: "Risk Level:",
    possibleCausesTitle: "Identified Probable Causes:",
    immediateCareTitle: "Immediate Field Action:",
    organicRemedyTitle: "Organic & Biological Remedies:",
    chemicalRemedyTitle: "Recommended Safe Chemical Control:",
    preventionTitle: "Prevention for Next Crop Season:",
    recordsBadge: "Digital Farm Diary",
    recordsTitle: "Farm Records – Digital Field Logbook",
    recordsDesc: "Track sowing dates, fertilizer sprays, irrigation events, and farm expenses directly on your device. Never lose track of your investment or harvest milestones.",
    totalRecordsLabel: "Total Activities Logged",
    totalExpenseLabel: "Total Farm Investment",
    activeCropsLabel: "Active Tracked Crops",
    newRecordTitle: "Add New Farm Entry",
    recCropLabel: "Crop Name:",
    recPlotLabel: "Field / Plot Name:",
    recActivityLabel: "Operation / Activity Type:",
    recDateLabel: "Date:",
    recCostLabel: "Cost / Expense (₹):",
    recNotesLabel: "Notes / Observations:",
    btnSaveRecord: "Save Farm Record",
    recordsListTag: "Saved Logbook",
    recordsListTitle: "Field Activity History",
    btnClearAll: "Reset",
    emptyRecordsTitle: "No Records Added Yet",
    emptyRecordsDesc: "Add your first farm entry on the left to track dates, expenses, and crop milestones.",
    thDate: "Date",
    thCrop: "Crop & Plot",
    thActivity: "Activity",
    thCost: "Cost",
    thNotes: "Notes",
    thAction: "Action",
    guideBadge: "Best Farming Practices",
    guideTitle: "Crop Care & Sustainable Farming Guide",
    guideDesc: "Actionable, cost-effective agricultural tips tested by Krishi Vigyan Kendras to maximize crop health and profitability.",
    tabAll: "All Tips",
    tabOrganic: "Organic Farming",
    tabPest: "Pest Management",
    tabSoil: "Soil & Nutrients",
    tabWater: "Water Saving",
    aboutBadge: "Why We Built This",
    aboutTitle: "Empowering Indian Farmers with Accessible AI",
    aboutP1: "Over 82% of Indian farmers are smallholders operating on less than 2 hectares of land. When sudden pests strike or irregular weather hits, they often travel miles to input dealers who sell expensive chemicals.",
    aboutP2: "FarmRakshak AI (రైతు రక్షక్) was conceptualized during this college hackathon as a lightweight, zero-barrier, digital agronomy assistant. It works on low-cost smartphones without costly hardware, offering guidance in regional languages like Telugu alongside English.",
    point1Title: "Zero Cost, Zero Dependencies:",
    point1Desc: "Runs purely in modern web browsers without requiring credit cards or paid cloud API keys.",
    point2Title: "Bilingual Inclusivity:",
    point2Desc: "Instant one-click toggle between English and Telugu ensures local farmers can understand every advisory.",
    point3Title: "Climate-Resilient Agriculture:",
    point3Desc: "Promotes natural formulations like Jeevamrutha, Neem sprays, and efficient drip scheduling.",
    hackathonCardTag: "Hackathon Project Blueprint",
    techStackTitle: "Technology & Architecture",
    futureTitle: "Future Scope / Phase 2:",
    future1: "📡 Integration with Raspberry Pi / ESP32 soil NPK sensors.",
    future2: "🛰️ Satellite NDVI vegetation index via ISRO Bhuvan open data.",
    future3: "🎙️ Voice-assisted regional queries for farmers who prefer audio.",
    future4: "📱 WhatsApp Chatbot via Twilio / Gupshup messaging API.",
    studentCredit: "Built with dedication by a 1st-Year College Hackathon Team.",
    footerDesc: "Smart farming companion empowering rural agriculture with data-driven, practical, and eco-friendly solutions.",
    govtHelpline: "Govt. Kisan Call Center:",
    quickLinks: "Quick Links",
    supportedCropsTitle: "Supported Crops",
    disclaimerHeader: "Legal & Safety Note",
    footerDisclaimer: "FarmRakshak AI is an educational technology prototype. Advice generated is rule-assisted and simulated. Farmers should exercise discretion and consult local agriculture extension departments before chemical investments.",
    madeWithLove: "Made with 🌱 for Indian Farmers."
  },
  te: {
    bannerText: "FarmRakshak AI • హ్యాకథాన్ ఎడిషన్ • ఆధునిక సాంకేతికతతో రైతుకు రక్ష",
    helplineLabel: "కిసాన్ హెల్ప్‌లైన్:",
    brandSub: "స్మార్ట్ వ్యవసాయ సహాయకుడు • రైతు రక్షక్",
    navHome: "హోమ్",
    navWater: "నీటిపారుదల",
    navWeather: "వాతావరణం",
    navCropRisk: "పంట రక్షణ & తెగుళ్లు",
    navRecords: "రైతు రికార్డులు",
    navGuide: "సాగు మార్గదర్శి",
    navAbout: "ప్రాజెక్ట్ గురించి",
    navCta: "పంటను తనిఖీ చేయండి",
    heroBadge: "కృత్రిమ మేధస్సుతో ప్రతి చేనుకు రక్షణ",
    heroTitle: "మీ చేనుకు పటిష్ట రక్షణ, <span class=\"text-gradient\">మీ కుటుంబానికి</span> అధిక దిగుబడి",
    heroDesc: "రైతు రక్షక్ AI ద్వారా పంట తెగుళ్ల ముందస్తు నిర్ధారణ, సమతుల్య నీటిపారుదల ప్రణాళిక, వ్యవసాయ మార్కెట్ ధరలు మరియు డిజిటల్ రైతు రికార్డుల నమోదు సులభంగా తెలుగులో పొందండి.",
    btnHeroRisk: "పంట తెగులును తనిఖీ చేయండి",
    btnHeroWater: "స్మార్ట్ నీటి సలహాదారు",
    btnHeroRecords: "రైతు రికార్డులు",
    statCrops: "ప్రధాన పంటలు",
    statWater: "నీటి ఆదా",
    statFree: "100% ఉచితం",
    statLangs: "తెలుగు & EN",
    simulatedAiLive: "AI లైవ్ ఫీల్డ్ స్కాన్ (నమూనా)",
    heroCardCrop: "వరి (Paddy)",
    leafScanTag: "అగ్గితెగులు గుర్తింపు • 94% రిస్క్",
    quickAdviceLabel: "తక్షణ రక్షణ చర్య:",
    quickAdviceVal: "వేప నూనె (లీటరుకు 5 మి.లీ) లేదా ట్రైకోడెర్మా ద్రావణం పిచికారీ చేయండి. యూరియా వేయడం ఆపండి.",
    btnTryDemo: "పూర్తి విశ్లేషణ",
    waterBadge: "ఖచ్చితమైన నీటి యాజమాన్యం & సంరక్షణ",
    waterTitle: "స్మార్ట్ వాటర్ అడ్వైజర్ – జల మిత్ర",
    waterDesc: "నీరు తక్కువై పంట ఎండిపోకుండా మరియు అధిక నీటితో వేరుకుళ్లు రాకుండా, పంట దశ మరియు వాతావరణం ఆధారంగా ఖచ్చితమైన నీటి ప్రణాళికను లెక్కించండి.",
    waterFormTitle: "పొలం వివరాల నమోదు",
    irriCropLabel: "పంట రకం:",
    irriStageLabel: "ఎదుగుదల దశ:",
    irriSoilLabel: "నేల స్వభావం:",
    irriWeatherLabel: "ప్రస్తుత వాతావరణం:",
    btnCalcIrrigation: "నీటిపారుదల ప్రణాళికను లెక్కించండి",
    irrigationScheduleTag: "AI నీటి యాజమాన్య సిఫార్సు",
    irriFreqLabel: "నీరు పెట్టవలసిన విరామం",
    irriQtyLabel: "కావలసిన నీటి పరిమాణం",
    irriTimeLabel: "నీరు పెట్టడానికి అనువైన సమయం",
    irriMethodLabel: "సిఫార్సు చేయబడిన పద్ధతి",
    agronomistNote: "వ్యవసాయ శాస్త్రవేత్త సలహా:",
    smartSaverTipTitle: "స్మార్ట్ నీటి ఆదా చిట్కా:",
    weatherSectionBadge: "నిజ-సమయ వ్యవసాయ సమాచారం",
    weatherSectionTitle: "వాతావరణం & నేల తేమ సమాచార కేంద్రం",
    weatherSectionDesc: "స్థానిక వాతావరణ అంచనాలు, మట్టిలో తేమ శాతం మరియు మార్కెట్ యార్డు ధరలను పరిశీలించి సాగు పనులను ప్రణాళిక చేసుకోండి.",
    weatherCardTag: "స్థానిక వాతావరణం",
    weatherCondSunny: "ఎండ మరియు తేలికపాటి మేఘాలు",
    humidityLabel: "గాలిలో తేమ",
    windLabel: "గాలి వేగం",
    rainChanceLabel: "వర్ష సూచన",
    changeRegionLabel: "ప్రాంతాన్ని ఎంచుకోండి:",
    soilCardTag: "నేలలో తేమ పర్యవేక్షణ",
    soilCardTitle: "మట్టి తేమ సెన్సార్ సిమ్యులేటర్",
    soilDry: "ఎండిన నేల (Dry)",
    soilOptimal: "సరిపడా తేమ (Optimal)",
    soilSaturated: "అధిక నీరు (Waterlogged)",
    currentMoisture: "ప్రస్తుత తేమ శాతం:",
    sliderTip: "తేమ శాతాన్ని మార్చి AI ఇచ్చే సమయానుకూల సలహాలను గమనించండి!",
    marketCardTag: "వ్యవసాయ మార్కెట్ ధరలు",
    marketCardTitle: "ఈనాటి మార్కెట్ సగటు ధరలు (₹/క్వింటాల్)",
    badgeSimulated: "నమూనా సమాచారం",
    mandiUpdated: "ఈరోజు సవరించబడింది • ప్రధాన మార్కెట్ యార్డుల సగటు ధరలు",
    doctorBadge: "క్రాప్ హెల్త్ AI అసిస్టెంట్",
    doctorTitle: "పంట రక్షణ – తెగుళ్ల గుర్తింపు & నివారణ",
    doctorDesc: "మీ పంటను మరియు కనిపించే లక్షణాలను ఎంచుకోండి. రైతు రక్షక్ AI తెగులు తీవ్రతను అంచనా వేసి సేంద్రియ మరియు రసాయన నివారణ పద్ధతులను అందిస్తుంది.",
    disclaimerTitle: "రైతులకు ముఖ్య గమనిక:",
    disclaimerBody: "ఈ ఫలితాలు విద్యా మరియు ప్రాథమిక అవగాహన కొరకు రూపొందించబడిన నమూనా సలహాలు మాత్రమే. అత్యవసర లేదా తీవ్రమైన తెగుళ్ల సమయాల్లో ఎల్లప్పుడూ మండల వ్యవసాయ అధికారి (MAO) లేదా కృషి విజ్ఞాన కేంద్రం (KVK) శాస్త్రవేత్తలను సంప్రదించండి.",
    diagnoseFormTitle: "పంట లక్షణాలను ఎంచుకోండి",
    selectCropLabel: "1. మీ పంటను ఎంచుకోండి:",
    selectSymptomLabel: "2. పంటపై కనిపించే ప్రధాన లక్షణాలు:",
    sampleImageLabel: "3. నమూనా ఆకు చిత్రం:",
    uploadLabel: "మీ సొంత ఫోటోను అప్‌లోడ్ చేయండి (ఐచ్ఛికం)",
    btnAnalyzeCrop: "AI తెగులు రిస్క్ విశ్లేషణ చేయండి",
    placeholderTitle: "ఇంకా విశ్లేషణ చేయలేదు",
    placeholderDesc: "ఎడమవైపు మీ పంట మరియు కనిపించే లక్షణాలను ఎంచుకుని 'AI తెగులు రిస్క్ విశ్లేషణ చేయండి' బటన్‌ను నొక్కండి.",
    simulatedMatch: "AI నిర్ధారణ (నమూనా)",
    confidenceMatch: "ఖచ్చితత్వ శాతం",
    severityLabel: "రిస్క్ తీవ్రత:",
    possibleCausesTitle: "గుర్తించిన ప్రధాన కారణాలు:",
    immediateCareTitle: "వెంటనే చేయవలసిన పనులు:",
    organicRemedyTitle: "సేంద్రియ & జీవ నియంత్రణ పద్ధతులు:",
    chemicalRemedyTitle: "సిఫార్సు చేయబడిన రసాయన మందులు:",
    preventionTitle: "భవిష్యత్తులో రాకుండా నివారణ చర్యలు:",
    recordsBadge: "డిజిటల్ రైతు డైరీ",
    recordsTitle: "రైతు రికార్డులు – వ్యవసాయ ఖర్చులు & పనుల చిట్టా",
    recordsDesc: "విత్తిన తేదీ, వేసిన ఎరువులు, పిచికారీ వివరాలు మరియు ఖర్చులను మీ మొబైల్‌లోనే భద్రపరుచుకోండి. పంట ఖర్చుల లెక్కలను ఎప్పటికీ మర్చిపోకండి.",
    totalRecordsLabel: "నమోదైన మొత్తం పనులు",
    totalExpenseLabel: "మొత్తం వ్యవసాయ పెట్టుబడి",
    activeCropsLabel: "సాగులో ఉన్న పంటలు",
    newRecordTitle: "కొత్త వివరాలు నమోదు చేయండి",
    recCropLabel: "పంట పేరు:",
    recPlotLabel: "చేను / పొలం పేరు:",
    recActivityLabel: "పని / ఆపరేషన్ రకం:",
    recDateLabel: "తేదీ:",
    recCostLabel: "అయిన ఖర్చు (₹):",
    recNotesLabel: "వివరాలు / ఇతర సమాచారం:",
    btnSaveRecord: "రికార్డును భద్రపరచండి",
    recordsListTag: "నమోదైన చిట్టా",
    recordsListTitle: "పొలం పనుల చరిత్ర",
    btnClearAll: "రీసెట్",
    emptyRecordsTitle: "ఇంకా ఎలాంటి రికార్డులు నమోదు చేయలేదు",
    emptyRecordsDesc: "ఎడమవైపు ఫారమ్ ద్వారా మీ విత్తనాలు, ఎరువులు మరియు ఖర్చు వివరాలను నమోదు చేయండి.",
    thDate: "తేదీ",
    thCrop: "పంట & చేను",
    thActivity: "చేసిన పని",
    thCost: "ఖర్చు",
    thNotes: "వివరాలు",
    thAction: "చర్య",
    guideBadge: "ఉత్తమ సాగు పద్ధతులు",
    guideTitle: "పంట సంరక్షణ & సుస్థిర వ్యవసాయ గైడ్",
    guideDesc: "తక్కువ ఖర్చుతో ఎక్కువ లాభం సాధించడానికి కృషి విజ్ఞాన కేంద్రాలు ధృవీకరించిన ఉత్తమ పద్ధతులు.",
    tabAll: "అన్ని చిట్కాలు",
    tabOrganic: "సేంద్రియ సాగు",
    tabPest: "తెగుళ్ల నివారణ",
    tabSoil: "భూసారం & ఎరువులు",
    tabWater: "నీటి ఆదా",
    aboutBadge: "మా ఆశయం",
    aboutTitle: "సాంకేతికత ద్వారా అన్నదాతలకు సాధికారత",
    aboutP1: "భారతదేశంలో 82% కంటే ఎక్కువ మంది రైతులు 2 హెక్టార్ల లోపు చిన్న కమతాలు కలిగినవారే. అకస్మాత్తుగా పంటలకు తెగుళ్లు సోకినప్పుడు లేదా వాతావరణం మారినప్పుడు వారు సరైన సలహా కోసం ఎన్నో ఇబ్బందులు పడుతున్నారు.",
    aboutP2: "ఈ సమస్యను అధిగమించడానికి, ఎలాంటి రుసుము లేకుండా సాధారణ ఫోన్లలో కూడా సులభంగా ఉపయోగపడేలా, తెలుగు మరియు ఇంగ్లీషు భాషలలో రైతు రక్షక్ AI రూపొందించబడింది.",
    point1Title: "ఖర్చు లేని ఉచిత సేవ:",
    point1Desc: "ఎటువంటి చెల్లింపు API లు లేదా ప్రత్యేక సాఫ్ట్‌వేర్ అవసరం లేకుండా బ్రౌజర్‌లోనే పనిచేస్తుంది.",
    point2Title: "రెండు భాషలలో సులభంగా అర్థమయ్యేలా:",
    point2Desc: "ఇంగ్లీషుతో పాటు తెలుగులో సులభమైన పదాలలో ప్రతి సమాచారం లభిస్తుంది.",
    point3Title: "ప్రకృతి హిత వ్యవసాయం:",
    point3Desc: "జీవామృతం, వేప కషాయం వంటి సహజ పద్ధతులను ప్రోత్సహిస్తుంది.",
    hackathonCardTag: "హ్యాకథాన్ ప్రాజెక్ట్ బ్లూప్రింట్",
    techStackTitle: "సాంకేతిక వివరాలు",
    futureTitle: "భవిష్యత్ ప్రణాళికలు (దశ 2):",
    future1: "📡 భూసార పరీక్షల కోసం ESP32 IoT సెన్సార్ల అనుసంధానం.",
    future2: "🛰️ ఇస్రో (ISRO) భువన్ శాటిలైట్ సమాచారం ద్వారా పంట స్థితి పరిశీలన.",
    future3: "🎙️ రైతులకు సులభంగా ఉండేలా తెలుగు వాయిస్ అసిస్టెంట్.",
    future4: "📱 వాట్సాప్ చాట్‌బాట్ సదుపాయం.",
    studentCredit: "మొదటి సంవత్సరం విద్యార్థుల బృందం చేత తయారు చేయబడింది.",
    footerDesc: "రైతు సోదరుల కోసం ఆధునిక, పర్యావరణహిత డిజిటల్ వ్యవసాయ నేస్తం.",
    govtHelpline: "ప్రభుత్వ కిసాన్ కాల్ సెంటర్:",
    quickLinks: "ముఖ్యమైన లింకులు",
    supportedCropsTitle: "మద్దతు ఉన్న పంటలు",
    disclaimerHeader: "చట్టపరమైన సమాచారం",
    footerDisclaimer: "రైతు రక్షక్ AI ఒక విద్యా ప్రాజెక్ట్ మాత్రమే. ఇచ్చిన సలహాలు సాధారణ సూచనలు. రసాయనాలు పిచికారీ చేసే ముందు స్థానిక వ్యవసాయ నిపుణులను సంప్రదించండి.",
    madeWithLove: "భారతీయ రైతుల కోసం 🌱 ప్రేమతో రూపొందించబడింది."
  }
};

let currentLang = 'en';

// ==========================================================================
// 2. Crop Risk Knowledge Base
// ==========================================================================
const cropKnowledgeBase = {
  rice: [
    {
      id: "rice-blast",
      symptomEn: "Spindle-shaped brown leaf lesions with grey centers (Leaf Blast)",
      symptomTe: "ఆకులపై నూలుకండె ఆకారంలో మధ్య బూడిద రంగు మచ్చలు (అగ్గితెగులు)",
      nameEn: "Rice Blast (Leaf & Neck Blast)",
      nameTe: "వరి అగ్గితెగులు (Leaf Blast)",
      pathogen: "Magnaporthe oryzae (Fungal pathogen)",
      severityEn: "High Risk (Can reduce yield by 30-50% if untreated)",
      severityTe: "అత్యధిక రిస్క్ (సకాలంలో నివారించకపోతే 30-50% దిగుబడి తగ్గుతుంది)",
      confidence: 94,
      causesEn: "Heavy application of chemical nitrogen (Urea), cloudy rainy weather with high relative humidity (>90%), and cool nights (20-22°C).",
      causesTe: "అధిక యూరియా వాడకం, రాత్రి వేళల్లో చల్లదనం, ఆకాశం మేఘావృతమై గాలిలో 90% పైగా తేమ ఉండటం వల్ల శిలీంద్ర బీజాలు వేగంగా వ్యాపిస్తాయి.",
      immediateActionEn: "Drain excess standing water from the field. Temporarily stop applying urea or any nitrogen fertilizer until symptoms subside.",
      immediateActionTe: "మడిలోని నిల్వ నీటిని తీసివేయండి. యూరియా లేదా నత్రజని ఎరువులను వేయడం వెంటనే తాత్కాలికంగా నిలిపివేయండి.",
      organicRemedyEn: "Spray 5% Neem Seed Kernel Extract (NSKE) or apply Pseudomonas fluorescens @ 2.5 kg/hectare mixed with well-rotted Farm Yard Manure (FYM).",
      organicRemedyTe: "5% వేప గింజల కషాయం (NSKE) లేదా లీటరు నీటికి 5 మి.లీ వేప నూనెను సబ్బు పొడితో కలిపి పిచికారీ చేయండి. సూడోమోనాస్ బ్యాక్టీరియాను నేలకు అందించండి.",
      chemicalRemedyEn: "Spray Tricyclazole 75% WP @ 0.6 grams per liter of water, or Isoprothiolane 40% EC @ 1.5 ml/L during morning hours.",
      chemicalRemedyTe: "ట్రైసైక్లాజోల్ 75% WP లీటరు నీటికి 0.6 గ్రాములు లేదా ఐసోప్రోథియోలేన్ 40% EC 1.5 మి.లీ చొప్పున కలిపి పిచికారీ చేయండి.",
      preventionEn: "Use certified resistant varieties like MTU-1010, BPT-5204. Always treat seeds with Carbendazim (2g/kg seed) before sowing.",
      preventionTe: "తెగులును తట్టుకునే విత్తనాలను ఎంచుకోండి. విత్తేముందు కిలో విత్తనానికి 2 గ్రాముల కార్బండిజమ్ తో విత్తన శుద్ధి తప్పక చేయండి.",
      image: "https://images.unsplash.com/photo-1599818815129-8473853119df?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "rice-stem-borer",
      symptomEn: "Central shoot drying up ('Dead heart' in vegetative stage, 'White ear' in panicle stage)",
      symptomTe: "మధ్య పిలక లేదా దుబ్బు ఎండిపోవడం (మొవ్వకుళ్లు లేదా తెల్లకంకి)",
      nameEn: "Yellow Stem Borer Infestation",
      nameTe: "వరి కాండం తొలుచు పురుగు (Stem Borer)",
      pathogen: "Scirpophaga incertulas (Insect pest caterpillar)",
      severityEn: "Moderate to High Risk",
      severityTe: "మధ్యస్థం నుండి అధిక రిస్క్",
      confidence: 91,
      causesEn: "Adult moths lay egg masses on upper leaf tips; hatching caterpillars bore inside the stem and feed on internal tissues.",
      causesTe: "రెక్కల పురుగులు ఆకుల కొనలపై గుడ్లు పెడతాయి. పిల్ల పురుగులు కాండంలోకి చొరబడి అంతర్భాగాలను తినివేయడం వల్ల మొవ్వ ఎండిపోతుంది.",
      immediateActionEn: "Clip off leaf tips before transplanting seedlings. Install pheromone traps @ 4 per acre to monitor moth activity.",
      immediateActionTe: "నాటు వేసే ముందు నారు కొనలను తుంచివేయండి. ఎకరాకు 4 లింగాకర్షక బుట్టలు (Pheromone Traps) అమర్చండి.",
      organicRemedyEn: "Release Trichogramma japonicum egg parasitoid cards @ 20,000/acre at 7-day intervals. Spray Beauveria bassiana (5g/L).",
      organicRemedyTe: "ట్రైకోగ్రామా కార్డులను ఎకరాకు అమర్చండి. బవేరియా బాసియానా లీటరు నీటికి 5 గ్రాముల చొప్పున కలిపి పిచికారీ చేయండి.",
      chemicalRemedyEn: "Apply Cartap Hydrochloride 4G granules @ 8-10 kg/acre or Chlorantraniliprole 18.5% SC @ 0.3 ml/L of water.",
      chemicalRemedyTe: "కార్టాప్ హైడ్రోక్లోరైడ్ 4G గుళికలు ఎకరాకు 8-10 కిలోలు చల్లండి లేదా క్లోరాంట్రానిలిప్రోల్ 0.3 మి.లీ లీటరు నీటికి కలిపి పిచికారీ చేయండి.",
      preventionEn: "Avoid late transplanting and excessive nitrogen. Conserve natural predators like spiders and dragonflies in the field.",
      preventionTe: "ఆలస్యంగా నాట్లు వేయకండి. పొలంలో సాలీళ్ళు వంటి మిత్రపురుగులను సంరక్షించండి.",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80"
    }
  ],
  cotton: [
    {
      id: "cotton-leaf-curl",
      symptomEn: "Upward or downward leaf curling, thick veins, and stunted bushy growth",
      symptomTe: "ఆకులు పైకి లేదా క్రిందికి ముడుచుకుపోవడం, ఈనెలు లావు కావడం (ఆకుముడత)",
      nameEn: "Cotton Leaf Curl Virus (CLCuV)",
      nameTe: "ప్రత్తి ఆకుముడత వైరస్ (Cotton Leaf Curl)",
      pathogen: "Begomovirus transmitted by Whiteflies (Bemisia tabaci)",
      severityEn: "Severe Risk (Can cause heavy boll dropping)",
      severityTe: "తీవ్రమైన రిస్క్ (పూత, కాయ రాలిపోవడం జరుగుతుంది)",
      confidence: 93,
      causesEn: "Whitefly populations feeding on plant sap transmit the virus rapidly during hot, dry spells.",
      causesTe: "తెల్లదోమ రసం పీల్చడం ద్వారా ఒక మొక్క నుండి మరొక మొక్కకు వైరస్ త్వరగా వ్యాపిస్తుంది.",
      immediateActionEn: "Immediately install yellow sticky traps (10-15 per acre) across the field to trap and monitor adult whiteflies.",
      immediateActionTe: "ఎకరాకు 10-15 పసుపు రంగు జిగురు అట్టలను అమర్చి తెల్లదోమలను అరికట్టండి.",
      organicRemedyEn: "Spray Neem Oil (10,000 ppm) @ 3 ml/L with liquid soap. Spray sour buttermilk solution (50ml/L) as an antiviral repellant.",
      organicRemedyTe: "వేప నూనె 3 మి.లీ లేదా 5 రోజుల పాటు పులియబెట్టిన మజ్జిగ ద్రావణం (లీటరుకు 50 మి.లీ) పిచికారీ చేయండి.",
      chemicalRemedyEn: "Spray Diafenthiuron 50% WP @ 1.25 g/L or Flonicamid 50% WG @ 0.3 g/L to target whitefly vectors.",
      chemicalRemedyTe: "డయాఫెంథియురాన్ 50% WP 1.25 గ్రాములు లేదా ఫ్లోనికామిడ్ 0.3 గ్రాములు లీటరు నీటిలో కలిపి పిచికారీ చేయండి.",
      preventionEn: "Eradicate alternate weed hosts (Abutilon indicum). Avoid sowing cotton near susceptible vegetable hosts.",
      preventionTe: "పొలం గట్లపై కలుపు మొక్కలను నివారించండి. రసం పీల్చే పురుగులను తట్టుకునే హైబ్రిడ్ రకాలను ఎంచుకోండి.",
      image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cotton-bollworm",
      symptomEn: "Bored holes on squares and bolls, caterpillar droppings visible around bracts",
      symptomTe: "కాయలు మరియు మొగ్గలకు రంధ్రాలు పడటం, పురుగు విసర్జితాలు కనిపించడం (కాయతొలుచు పురుగు)",
      nameEn: "Spotted / American Bollworm Attack",
      nameTe: "ప్రత్తి కాయతొలుచు పురుగు (Bollworm)",
      pathogen: "Helicoverpa armigera / Earias vittella",
      severityEn: "High Risk (Direct damage to yield)",
      severityTe: "అత్యధిక రిస్క్ (దిగుబడికి ప్రత్యక్ష నష్టం)",
      confidence: 89,
      causesEn: "Continuous warm weather and monocropping without border crops favor egg laying by noctuid moths.",
      causesTe: "ఏకపంట విధానం, సరిహద్దు పంటలు లేకపోవడం వలన తల్లి పురుగులు వేగంగా గుడ్లు పెడతాయి.",
      immediateActionEn: "Handpick and destroy grown larvae in early morning. Set up bird perches (15-20 per acre) for natural bird predation.",
      immediateActionTe: "ఎకరాకు 15-20 పక్షి స్థావరాలు (T-ఆకారపు కర్రలు) ఏర్పాటు చేయండి. పెద్ద పురుగులను ఏరి నాశనం చేయండి.",
      organicRemedyEn: "Spray Bacillus thuringiensis (Bt) formulation @ 1.5-2 g/L or 5% Neem Seed Kernel Extract.",
      organicRemedyTe: "బాసిల్లస్ తురింజియెన్సిస్ (Bt) పొడిని లీటరుకు 2 గ్రాములు లేదా 5% వేప గింజల కషాయం పిచికారీ చేయండి.",
      chemicalRemedyEn: "Spray Spinosad 45% SC @ 0.35 ml/L or Emamectin Benzoate 5% SG @ 0.5 g/L.",
      chemicalRemedyTe: "స్పైనోసాడ్ 45% SC 0.35 మి.లీ లేదా ఎమామెక్టిన్ బెంజోయేట్ 0.5 గ్రాములు లీటరు నీటికి కలిపి పిచికారీ చేయండి.",
      preventionEn: "Plant border crops of maize, sorghum, or castor to trap moths before they enter cotton rows.",
      preventionTe: "పొలం చుట్టూ జొన్న లేదా మొక్కజొన్నను సరిహద్దు పంటగా వేసి రక్షణ కల్పించండి.",
      image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?auto=format&fit=crop&w=600&q=80"
    }
  ],
  chilli: [
    {
      id: "chilli-thrips",
      symptomEn: "Upward boat-shaped leaf curling, bronze underside, flower drop (Gemini leaf curl / Murda)",
      symptomTe: "ఆకులు దోనె ఆకారంలో పైకి ముడుచుకోవడం, ఆకుల అడుగుభాగం రాగి రంగులోకి మారడం (బొబ్బర / ముడత)",
      nameEn: "Chilli Thrips & Mites Infestation",
      nameTe: "మిరప తామర పురుగులు & నల్లి (Chilli Thrips)",
      pathogen: "Scirtothrips dorsalis / Polyphagotarsonemus latus",
      severityEn: "High Risk (Severe flower dropping and fruit reduction)",
      severityTe: "అత్యధిక రిస్క్ (పూత రాలిపోయి కాయల సైజు తగ్గిపోతుంది)",
      confidence: 95,
      causesEn: "Dry weather with rising temperatures triggers exponential multiplication of microscopic thrips and mites on new tender flushes.",
      causesTe: "పొడి వాతావరణం మరియు ఎండ తీవ్రత పెరిగినప్పుడు తామర పురుగులు లేత చిగుళ్ల రసాన్ని వేగంగా పీల్చివేస్తాయి.",
      immediateActionEn: "Install blue sticky traps (for thrips) and yellow traps (for whiteflies) @ 20 per acre at plant canopy height.",
      immediateActionTe: "ఎకరాకు 20 నీలం రంగు జిగురు అట్టలు (తామర పురుగుల కొరకు) మరియు పసుపు అట్టలు ఏర్పాటు చేయండి.",
      organicRemedyEn: "Spray Agniastra or Dashaparni Kashayam @ 30ml/L. Alternate with 5ml/L cold-pressed Neem oil spray.",
      organicRemedyTe: "అగ్నిఅస్త్రం లేదా దశపర్ణి కషాయం 30 మి.లీ లేదా గానుగ వేప నూనె 5 మి.లీ లీటరు నీటికి కలిపి పిచికారీ చేయండి.",
      chemicalRemedyEn: "Spray Fipronil 5% SC @ 2 ml/L or Spinetoram 11.7% SC @ 1 ml/L for thrips; Spiromesifen 22.9% SC @ 1 ml/L for mites.",
      chemicalRemedyTe: "ఫిప్రోనిల్ 5% SC 2 మి.లీ లేదా స్పైనిటోరమ్ 1 మి.లీ లీటరు నీటికి కలిపి పిచికారీ చేయండి. నల్లి నివారణకు స్పైరోమెసిఫెన్ 1 మి.లీ వాడండి.",
      preventionEn: "Maintain soil moisture without water stress. Grow 2-3 rows of maize as windbreak around chilli field.",
      preventionTe: "పొలంలో తేమ ఆరిపోకుండా తడులు ఇవ్వండి. పొలం చుట్టూ 2-3 వరుసల మొక్కజొన్నను రక్షణ కంచెగా వేయండి.",
      image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80"
    }
  ],
  tomato: [
    {
      id: "tomato-early-blight",
      symptomEn: "Target-board concentric brown rings on lower leaves, yellowing and premature leaf fall",
      symptomTe: "కింది ఆకులపై వలయాల వంటి నల్లని/గోధుమ మచ్చలు, ఆకులు పసుపు రంగులోకి మారి రాలడం (ముందస్తు తెగులు)",
      nameEn: "Tomato Early Blight",
      nameTe: "టమాట ఆకుమచ్చ తెగులు (Early Blight)",
      pathogen: "Alternaria solani (Fungus)",
      severityEn: "Moderate Risk",
      severityTe: "మధ్యస్థ రిస్క్",
      confidence: 92,
      causesEn: "Warm humid weather following heavy dew or rain. Spores overwinter in plant debris and splash onto lower leaves during irrigation.",
      causesTe: "అధిక తేమ, వర్షపు చినుకులు నేలపై పడినప్పుడు మట్టిలోని శిలీంధ్ర బీజాలు కింది ఆకులపై పడి తెగులును వ్యాప్తి చేస్తాయి.",
      immediateActionEn: "Prune and dispose of infected bottom leaves touching the soil. Avoid overhead sprinkler irrigation.",
      immediateActionTe: "నేలను తాకుతున్న క్రింది ఆకులను తుంచి కాల్చివేయండి. పైనుండి నీరు చిలకరించకుండా బిందుసేద్యం వాడండి.",
      organicRemedyEn: "Spray Trichoderma viride @ 5g/L or copper-based Bordeaux mixture (1%) on clear sunny morning.",
      organicRemedyTe: "ట్రైకోడెర్మా విరిడే 5 గ్రాములు లేదా 1% బోర్డో మిశ్రమం తయారుచేసి పిచికారీ చేయండి.",
      chemicalRemedyEn: "Spray Mancozeb 75% WP @ 2.5 g/L or Azoxystrobin + Difenoconazole @ 1 ml/L of water.",
      chemicalRemedyTe: "మాంకోజెబ్ 75% WP 2.5 గ్రాములు లేదా అజాక్సిస్ట్రోబిన్ + డైఫెనోకోనజోల్ 1 మి.లీ లీటరు నీటిలో కలిపి పిచికారీ చేయండి.",
      preventionEn: "Mulch with clean straw around plants to prevent soil splashing onto leaves. Practice crop rotation with non-solanaceous crops.",
      preventionTe: "మొక్కల మొదళ్ల వద్ద వరి గడ్డితో మల్చింగ్ చేయండి. టమాట తర్వాత అపరాలు (పప్పుధాన్యాలు) సాగు చేయండి.",
      image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80"
    }
  ],
  maize: [
    {
      id: "maize-fall-armyworm",
      symptomEn: "Ragged holes on whorl leaves with sawdust-like wet fecal frass deep inside central whorl",
      symptomTe: "మొక్క సుడులలో గుండ్రటి రంధ్రాలు, చెక్కపొట్టు వంటి పురుగు మలం కనిపించడం (కత్తెర పురుగు)",
      nameEn: "Fall Armyworm (FAW) Attack",
      nameTe: "మొక్కజొన్న కత్తెర పురుగు (Fall Armyworm)",
      pathogen: "Spodoptera frugiperda",
      severityEn: "Very High Risk (Destroys growing shoot tip)",
      severityTe: "చాలా తీవ్రమైన రిస్క్ (మొక్క ప్రధాన పెరుగుదల సుడిని తినేస్తుంది)",
      confidence: 96,
      causesEn: "Voracious invasive pest. Females lay hundreds of hair-covered egg batches on young corn whorls.",
      causesTe: "తల్లి పురుగు ఆకులపై వెంట్రుకలతో కూడిన గుడ్ల గుంపులను పెడుతుంది. లార్వాలు సుడిలోకి వెళ్లి నిరంతరం తింటూ ఉంటాయి.",
      immediateActionEn: "Apply dry sand mixed with wood ash (9:1 ratio) directly into the whorls of attacked plants to suffocate larvae.",
      immediateActionTe: "పొడి ఇసుక మరియు బూడిదను 9:1 నిష్పత్తిలో కలిపి ప్రతి మొక్క సుడిలో వేయండి; ఇది పురుగును ఉక్కిరిబిక్కిరి చేస్తుంది.",
      organicRemedyEn: "Whirl application of Metarhizium anisopliae or Nomuraea rileyi @ 5g/L. Spray 5% NSKE.",
      organicRemedyTe: "మెటారైజియమ్ లేదా నోమురియా శిలీంధ్ర పొడిని లీటరుకు 5 గ్రాములు కలిపి నేరుగా సుడిలో పడేలా పిచికారీ చేయండి.",
      chemicalRemedyEn: "Apply Emamectin Benzoate 5% SG @ 0.4 g/L or Chlorantraniliprole 18.5% SC @ 0.4 ml/L directing nozzle right into the whorl.",
      chemicalRemedyTe: "ఎమామెక్టిన్ బెంజోయేట్ 0.4 గ్రాములు లేదా క్లోరాంట్రానిలిప్రోల్ 0.4 మి.లీ లీటరు నీటికి కలిపి స్ప్రే నాజిల్ ను నేరుగా సుడిలోకి ఉంచి పిచికారీ చేయండి.",
      preventionEn: "Intercrop with cowpea or pigeon pea. Sowing of uniform planting dates across the village community.",
      preventionTe: "అలసందలు లేదా కందులను అంతర పంటగా సాగు చేయండి. గ్రామం మొత్తం ఒకేసారి విత్తనాలు వేయడం ఉత్తమం.",
      image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80"
    }
  ],
  groundnut: [
    {
      id: "groundnut-tikka",
      symptomEn: "Dark circular leaf spots surrounded by a bright yellow halo (Tikka disease)",
      symptomTe: "ఆకులపై నల్లని గుండ్రటి మచ్చలు, వాటి చుట్టూ పసుపు రంగు వలయం (టిక్కా తెగులు)",
      nameEn: "Tikka Leaf Spot Disease",
      nameTe: "వేరుశనగ టిక్కా తెగులు (Tikka Leaf Spot)",
      pathogen: "Cercospora personata / arachidicola (Fungus)",
      severityEn: "Moderate to High Risk",
      severityTe: "మధ్యస్థం నుండి అధిక రిస్క్",
      confidence: 90,
      causesEn: "Prolonged leaf wetness due to drizzle or sprinkler irrigation coupled with high humidity.",
      causesTe: "ఆకులపై నిరంతరం నీటి చుక్కలు నిలిచి ఉండటం, అధిక గాలి తేమ వల్ల తెగులు మచ్చలు వేగంగా పెరుగుతాయి.",
      immediateActionEn: "Remove severely infected fallen leaves from the field to check secondary inoculum.",
      immediateActionTe: "రాలిపడిన తెగులు సోకిన ఆకులను ఏరి పొలం బయట పారవేయండి.",
      organicRemedyEn: "Spray Panchagavya (30ml/L) or fermented buttermilk spray (5%) to boost plant immunity.",
      organicRemedyTe: "పంచగవ్య ద్రావణం లీటరు నీటికి 30 మి.లీ లేదా పులిసిన మజ్జిగ ద్రావణం పిచికారీ చేయండి.",
      chemicalRemedyEn: "Spray Carbendazim 12% + Mancozeb 63% WP (Saaf) @ 2 g/L of water.",
      chemicalRemedyTe: "కార్బండిజమ్ + మాంకోజెబ్ (Saaf) లీటరు నీటికి 2 గ్రాముల చొప్పున కలిపి 10 రోజుల వ్యవధిలో పిచికారీ చేయండి.",
      preventionEn: "Seed treatment with Trichoderma viride @ 10g/kg of kernels. Avoid dense sowing.",
      preventionTe: "విత్తే ముందు ట్రైకోడెర్మా విరిడే 10 గ్రాములు కిలో విత్తనానికి పట్టించి విత్తన శుద్ధి చేయండి.",
      image: "https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?auto=format&fit=crop&w=600&q=80"
    }
  ],
  wheat: [
    {
      id: "wheat-rust",
      symptomEn: "Yellow or brown powdery pustules arranged in linear stripes on leaf blades",
      symptomTe: "ఆకులపై పసుపు లేదా గోధుమ రంగు పొడి వంటి చారలు (కుంకుమ తెగులు / రస్ట్)",
      nameEn: "Yellow / Stripe Rust of Wheat",
      nameTe: "గోధుమ పసుపు కుంకుమ తెగులు (Stripe Rust)",
      pathogen: "Puccinia striiformis (Fungus)",
      severityEn: "High Risk (Windborne spores spread rapidly across entire districts)",
      severityTe: "తీవ్రమైన రిస్క్ (గాలి ద్వారా సులభంగా ఇతర పొలాలకు వ్యాపిస్తుంది)",
      confidence: 92,
      causesEn: "Cool moist winter weather (temperatures between 10-15°C) and heavy morning dew.",
      causesTe: "చలికాలంలో ఉదయం వేళ పడే అధిక మంచు, 10-15 డిగ్రీల చల్లని వాతావరణం శిలీంధ్ర వ్యాప్తికి అనుకూలం.",
      immediateActionEn: "Regularly inspect northern aspects of fields. Report immediate sightings to local agriculture office.",
      immediateActionTe: "పొలంలో మంచు ఎక్కువగా ఉండే ప్రాంతాలను పరిశీలించండి. తెగులు మొదలైన వెంటనే రక్షణ చర్యలు ప్రారంభించండి.",
      organicRemedyEn: "Foliar spray of cow urine solution (10% diluted) mixed with wood ash slurry.",
      organicRemedyTe: "10% ఆవు మూత్రం ద్రావణాన్ని బూడిద నీటితో కలిపి పిచికారీ చేయండి.",
      chemicalRemedyEn: "Spray Propiconazole 25% EC (Tilt) @ 1 ml/L of clean water at the very first appearance of pustules.",
      chemicalRemedyTe: "ప్రొపికొనజోల్ 25% EC లీటరు నీటికి 1 మి.లీ చొప్పున కలిపి మొదటి మచ్చ కనిపించిన వెంటనే పిచికారీ చేయండి.",
      preventionEn: "Sow recommended rust-resistant varieties (such as HD-2967, PBW-550). Avoid late sowing.",
      preventionTe: "తెగులును తట్టుకునే ధృవీకరించిన గోధుమ రకాలను మాత్రమే విత్తుకోండి. ఆలస్యంగా విత్తడం మానుకోండి.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

// ==========================================================================
// 3. Sustainable Farming Care Guide Data
// ==========================================================================
const guideData = [
  {
    category: "organic",
    categoryLabelEn: "Organic Formulation",
    categoryLabelTe: "సేంద్రియ విధానం",
    icon: "fa-solid fa-leaf",
    titleEn: "How to Prepare Powerful Jeevamrutha at Zero Cost",
    titleTe: "పైసా ఖర్చు లేకుండా జీవామృతం తయారీ విధానం",
    descEn: "Jeevamrutha is an enriched biological culture that multiplies beneficial soil microorganisms exponentially.",
    descTe: "జీవామృతం నేలలోని మేలు చేసే సూక్ష్మజీవులను కోట్ల సంఖ్యలో వృద్ధి చేసి భూసారాన్ని రెట్టింపు చేస్తుంది.",
    stepsEn: [
      "Mix 10 kg native cow dung + 10 L cow urine in 200 L water.",
      "Add 2 kg jaggery + 2 kg pulse flour + 1 handful fertile forest soil.",
      "Stir clockwise twice daily; ready to use in 4-7 days with irrigation."
    ],
    stepsTe: [
      "200 లీటర్ల డ్రమ్ములో 10 కిలోల దేశీ ఆవు పేడ + 10 లీటర్ల మూత్రం కలపండి.",
      "2 కిలోల బెల్లం + 2 కిలోల పప్పు పిండి + పిడికెడు గట్టు మట్టి చేర్చండి.",
      "రోజుకు రెండుసార్లు సవ్యదిశలో కలపండి; 4-7 రోజుల్లో సిద్ధమవుతుంది."
    ],
    tagEn: "Soil Microbes Boost",
    tagTe: "భూసారం వృద్ధి"
  },
  {
    category: "pest",
    categoryLabelEn: "Pest Management",
    categoryLabelTe: "తెగుళ్ల నివారణ",
    icon: "fa-solid fa-bug",
    titleEn: "Colored Sticky Traps for Sucking Pests",
    titleTe: "జిగురు అట్టలతో రసం పీల్చే పురుగుల అదుపు",
    descEn: "Cost-effective, zero-chemical physical traps to control whiteflies, thrips, aphids, and leafminers.",
    descTe: "ఎలాంటి విషపూరిత రసాయనాలు లేకుండా పసుపు, నీలం అట్టలతో పురుగులను తొలిదశలోనే నివారించవచ్చు.",
    stepsEn: [
      "Yellow traps attract whiteflies, aphids, and leafminers effectively.",
      "Blue traps specifically attract thrips in chilli and vegetable crops.",
      "Install 15-20 traps per acre at 1 foot above crop canopy level."
    ],
    stepsTe: [
      "పసుపు అట్టలు తెల్లదోమ, పేనుబంక, ఆకుమచ్చ పురుగులను ఆకర్షిస్తాయి.",
      "నీలం రంగు అట్టలు మిరపలో తామర పురుగులను (Thrips) నివారిస్తాయి.",
      "ఎకరాకు 15-20 అట్టలను పంట ఎత్తు కంటే ఒక అడుగు ఎత్తులో అమర్చండి."
    ],
    tagEn: "Zero-Chemical Control",
    tagTe: "రసాయన రహిత రక్షణ"
  },
  {
    category: "water",
    categoryLabelEn: "Water Saving",
    categoryLabelTe: "నీటి సంరక్షణ",
    icon: "fa-solid fa-droplet",
    titleEn: "Mulching Techniques to Save 35-40% Irrigation",
    titleTe: "మల్చింగ్ పద్ధతితో 40% వరకు నీటి ఆదా",
    descEn: "Covering soil with organic straw or mulch paper prevents solar evaporation and controls weeds.",
    descTe: "వరి గడ్డి లేదా మల్చింగ్ షీట్ ఉపయోగించడం ద్వారా నేలలో తేమ ఆవిరి కాకుండా కాపాడుకోవచ్చు.",
    stepsEn: [
      "Spread 3-4 inches layer of dry paddy straw around plant basins.",
      "Lowers soil temperature during hot afternoons by 4-6°C.",
      "Significantly suppresses weed growth, saving manual labor costs."
    ],
    stepsTe: [
      "మొక్కల మొదళ్ల వద్ద 3-4 అంగుళాల మందంతో ఎండు వరి గడ్డిని పరవండి.",
      "ఎండ వేడిమికి నేల వేడెక్కకుండా 4-6 డిగ్రీల చల్లదనాన్ని ఇస్తుంది.",
      "కలుపు మొక్కలు పెరగకుండా అడ్డుకుని కూలీల ఖర్చును తగ్గిస్తుంది."
    ],
    tagEn: "Moisture Retention",
    tagTe: "తేమ సంరక్షణ"
  },
  {
    category: "soil",
    categoryLabelEn: "Soil Health",
    categoryLabelTe: "భూసార పరీక్ష",
    icon: "fa-solid fa-flask",
    titleEn: "Soil Testing & Balanced NPK Application",
    titleTe: "మట్టి నమూనా సేకరణ & సమతుల్య ఎరువులు",
    descEn: "Indiscriminate fertilizer use hardens soil. Test soil once in 2 years to know exact N-P-K & micro-nutrient needs.",
    descTe: "విచక్షణా రహితంగా యూరియా వాడటం వల్ల నేల నిస్సారమవుతుంది. రెండేళ్లకు ఒకసారి భూసార పరీక్ష చేయించండి.",
    stepsEn: [
      "Collect V-shaped soil samples from 8-10 spots across the plot.",
      "Mix thoroughly, dry under shade, and send 500g to local KVK lab.",
      "Apply zinc sulphate and gypsum only if recommended in Soil Health Card."
    ],
    stepsTe: [
      "పొలంలో 8-10 చోట్ల 'V' ఆకారంలో 15 సెం.మీ లోతు నుండి మట్టిని తీయండి.",
      "మట్టిని బాగా కలిపి, నీడలో ఆరబెట్టి 500 గ్రాములు ల్యాబ్‌కు పంపండి.",
      "సాయిల్ హెల్త్ కార్డు ఆధారంగా మాత్రమే జింక్, జిప్సమ్ ఎరువులను వాడండి."
    ],
    tagEn: "Scientific Farming",
    tagTe: "శాస్త్రీయ విధానం"
  },
  {
    category: "organic",
    categoryLabelEn: "Natural Spray",
    categoryLabelTe: "సహజ కషాయం",
    icon: "fa-solid fa-spray-can-sparkles",
    titleEn: "Neem Seed Kernel Extract (NSKE 5%) Preparation",
    titleTe: "5% వేప గింజల కషాయం (NSKE) తయారీ",
    descEn: "The world's most versatile natural insect repellent that acts as an anti-feedant against 200+ pest species.",
    descTe: "200 రకాలకు పైగా పంట పురుగులను నశింపజేసే అత్యుత్తమ సహజ క్రిమినాశని.",
    stepsEn: [
      "Pound 5 kg dried neem seeds into coarse powder.",
      "Soak overnight in 10 L water; filter through fine cloth next morning.",
      "Dilute with 100 L water, add 100g soap powder, and spray thoroughly."
    ],
    stepsTe: [
      "5 కిలోల బాగా ఎండిన వేప గింజలను మెత్తగా దంచండి.",
      "10 లీటర్ల నీటిలో రాత్రంతా నానబెట్టి, ఉదయం పలుచని గుడ్డతో వడకట్టండి.",
      "దీనికి 90 లీటర్ల నీరు మరియు 100 గ్రాముల సబ్బు పొడి కలిపి పిచికారీ చేయండి."
    ],
    tagEn: "Eco-Friendly Spray",
    tagTe: "పర్యావరణహితం"
  },
  {
    category: "pest",
    categoryLabelEn: "Biological Defense",
    categoryLabelTe: "జీవ నియంత్రణ",
    icon: "fa-solid fa-shield-virus",
    titleEn: "Trichoderma Viride for Soil-Borne Root Rot",
    titleTe: "వేరుకుళ్లు, ఎండు తెగుళ్లకు ట్రైకోడెర్మా విరిడే",
    descEn: "A friendly biocontrol fungus that actively destroys wilt-causing pathogenic fungi in the root rhizosphere.",
    descTe: "మొక్కల వేర్లను ఆశించే విషపూరిత శిలీంధ్రాలను నాశనం చేసే మేలుజాతి మిత్ర శిలీంధ్రం.",
    stepsEn: [
      "Mix 2 kg Trichoderma in 100 kg well-cured compost/FYM.",
      "Cover with damp jute bag for 7 days under shade to multiply spores.",
      "Apply in furrows near root zone during field preparation or transplanting."
    ],
    stepsTe: [
      "100 కిలోల పశువుల ఎరువులో 2 కిలోల ట్రైకోడెర్మా పొడిని కలపండి.",
      "తడి గోనె సంచి కప్పి 7 రోజులు నీడలో ఉంచితే శిలీంధ్రం బాగా వృద్ధి చెందుతుంది.",
      "దుక్కి సమయంలో లేదా మొక్కల మొదళ్ల వద్ద తేమ ఉన్నప్పుడు వేయండి."
    ],
    tagEn: "Root Immunity",
    tagTe: "వేరు వ్యవస్థ రక్షణ"
  }
];

// ==========================================================================
// 4. District Weather Data
// ==========================================================================
const districtWeatherData = {
  guntur: { name: "Guntur, Andhra Pradesh", nameTe: "గుంటూరు, ఆంధ్రప్రదేశ్", temp: 32, condEn: "Sunny with Light Clouds", condTe: "ఎండ మరియు తేలికపాటి మేఘాలు", humidity: "62%", wind: "12 km/h", rain: "15%", icon: "fa-cloud-sun" },
  warangal: { name: "Warangal, Telangana", nameTe: "వరంగల్, తెలంగాణ", temp: 34, condEn: "Hot & Clear Sky", condTe: "ఎండ తీవ్రత ఎక్కువ, నిర్మలమైన ఆకాశం", humidity: "48%", wind: "14 km/h", rain: "5%", icon: "fa-sun" },
  kurnool: { name: "Kurnool, Andhra Pradesh", nameTe: "కర్నూలు, ఆంధ్రప్రదేశ్", temp: 35, condEn: "Dry & Warm Breeze", condTe: "పొడి వాతావరణం, వేడి గాలులు", humidity: "42%", wind: "16 km/h", rain: "0%", icon: "fa-sun" },
  vijayawada: { name: "Vijayawada, Andhra Pradesh", nameTe: "విజయవాడ, ఆంధ్రప్రదేశ్", temp: 31, condEn: "Humid & Partly Cloudy", condTe: "అధిక తేమ, పాక్షికంగా మేఘావృతం", humidity: "74%", wind: "10 km/h", rain: "25%", icon: "fa-cloud" },
  nizamabad: { name: "Nizamabad, Telangana", nameTe: "నిజామాబాద్, తెలంగాణ", temp: 33, condEn: "Scattered Clouds", condTe: "చెల్లాచెదురు మేఘాలు", humidity: "56%", wind: "11 km/h", rain: "10%", icon: "fa-cloud-sun" },
  pune: { name: "Pune, Maharashtra", nameTe: "పూణే, మహారాష్ట్ర", temp: 29, condEn: "Pleasant & Breezy", condTe: "ఆహ్లాదకరమైన చల్లని వాతావరణం", humidity: "55%", wind: "18 km/h", rain: "20%", icon: "fa-cloud-sun" }
};

// ==========================================================================
// 5. Mandi Market Prices Data
// ==========================================================================
const mandiPrices = [
  { cropEn: "Paddy (Common / Sona Masuri)", cropTe: "వరి (సోనా మసూరి)", icon: "fa-wheat-awn", price: "₹2,320", trend: "+₹45", isUp: true },
  { cropEn: "Cotton (Medium Staple)", cropTe: "ప్రత్తి (మధ్యస్థ పింజ)", icon: "fa-cloud", price: "₹7,250", trend: "+₹120", isUp: true },
  { cropEn: "Chilli (Teja / Dry Guntur)", cropTe: "ఎండిన మిరప (తేజ రకం)", icon: "fa-pepper-hot", price: "₹18,400", trend: "-₹250", isUp: false },
  { cropEn: "Tomato (Hybrid Local)", cropTe: "టమాట (హైబ్రిడ్)", icon: "fa-apple-whole", price: "₹1,450", trend: "+₹80", isUp: true },
  { cropEn: "Maize (Yellow Corn)", cropTe: "మొక్కజొన్న (పసుపు)", icon: "fa-cubes-stacked", price: "₹2,180", trend: "-₹30", isUp: false },
  { cropEn: "Groundnut (Pods)", cropTe: "వేరుశనగ (కాయలు)", icon: "fa-circle-dot", price: "₹6,850", trend: "+₹95", isUp: true }
];

// ==========================================================================
// 6. Farm Records State & Preloaded Sample Data
// ==========================================================================
const defaultFarmRecords = [
  {
    id: 1,
    crop: "Paddy (వరి)",
    plot: "North Field (ఎకరా 1)",
    activity: "Sowing / Planting",
    date: "2026-10-02",
    cost: 3200,
    notes: "Direct line transplantation using MTU-1010 seed variety"
  },
  {
    id: 2,
    crop: "Cotton (ప్రత్తి)",
    plot: "East Plot (తూర్పు చేను)",
    activity: "Fertilizer / Organic Manure",
    date: "2026-10-08",
    cost: 1850,
    notes: "Applied well-rotted FYM mixed with 2kg Trichoderma viride"
  },
  {
    id: 3,
    crop: "Chilli (మిరప)",
    plot: "South Plot (దక్షిణ మడి)",
    activity: "Pest Spray",
    date: "2026-10-12",
    cost: 650,
    notes: "Sprayed 5ml/L cold-pressed Neem oil with liquid soap for thrips prevention"
  }
];

let farmRecords = [];

function initFarmRecords() {
  const saved = localStorage.getItem("farmRakshakRecords");
  if (saved) {
    try {
      farmRecords = JSON.parse(saved);
    } catch (e) {
      farmRecords = [...defaultFarmRecords];
    }
  } else {
    farmRecords = [...defaultFarmRecords];
    saveFarmRecords();
  }
  renderFarmRecords();
}

function saveFarmRecords() {
  localStorage.setItem("farmRakshakRecords", JSON.stringify(farmRecords));
}

function renderFarmRecords() {
  const tbody = document.getElementById("recordsTableBody");
  const emptyState = document.getElementById("recordsEmptyState");
  const scrollBox = document.getElementById("recordsScrollBox");

  if (!tbody) return;

  tbody.innerHTML = "";

  if (farmRecords.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    if (scrollBox) scrollBox.style.display = "none";
  } else {
    if (emptyState) emptyState.style.display = "none";
    if (scrollBox) scrollBox.style.display = "block";

    farmRecords.forEach(rec => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${rec.date}</strong></td>
        <td>
          <span style="font-weight:600; color:var(--primary-dark);">${rec.crop}</span><br>
          <small class="text-muted"><i class="fa-solid fa-location-dot"></i> ${rec.plot}</small>
        </td>
        <td><span class="badge-activity">${rec.activity}</span></td>
        <td><strong>₹${Number(rec.cost).toLocaleString('en-IN')}</strong></td>
        <td><small>${rec.notes || '-'}</small></td>
        <td>
          <button type="button" class="btn-delete-rec" onclick="deleteFarmRecord(${rec.id})" title="Delete entry">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  updateFarmSummary();
}

function addFarmRecord() {
  const crop = document.getElementById("recCrop").value;
  const plot = document.getElementById("recPlot").value.trim() || "Field 1";
  const activity = document.getElementById("recActivity").value;
  const date = document.getElementById("recDate").value || new Date().toISOString().split('T')[0];
  const cost = parseFloat(document.getElementById("recCost").value) || 0;
  const notes = document.getElementById("recNotes").value.trim();

  const newEntry = {
    id: Date.now(),
    crop,
    plot,
    activity,
    date,
    cost,
    notes
  };

  farmRecords.unshift(newEntry);
  saveFarmRecords();
  renderFarmRecords();

  // Reset form notes
  document.getElementById("recNotes").value = "";
}

function deleteFarmRecord(id) {
  farmRecords = farmRecords.filter(r => r.id !== id);
  saveFarmRecords();
  renderFarmRecords();
}

function clearAllFarmRecords() {
  if (confirm(currentLang === 'en' ? "Are you sure you want to reset all farm records?" : "మీరు నిజంగా అన్ని రికార్డులను తొలగించాలనుకుంటున్నారా?")) {
    farmRecords = [];
    saveFarmRecords();
    renderFarmRecords();
  }
}

function updateFarmSummary() {
  const countEl = document.getElementById("summaryTotalRecords");
  const costEl = document.getElementById("summaryTotalExpense");
  const cropsEl = document.getElementById("summaryActiveCrops");

  if (!countEl || !costEl || !cropsEl) return;

  const totalCount = farmRecords.length;
  const totalCost = farmRecords.reduce((sum, r) => sum + (Number(r.cost) || 0), 0);
  const uniqueCrops = new Set(farmRecords.map(r => r.crop)).size;

  countEl.textContent = totalCount;
  costEl.textContent = `₹${totalCost.toLocaleString('en-IN')}`;
  cropsEl.textContent = uniqueCrops;
}

// ==========================================================================
// 7. Initialization & Language Switcher
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Check localStorage for preferred language
  const savedLang = localStorage.getItem("farmRakshakLang");
  if (savedLang && (savedLang === 'en' || savedLang === 'te')) {
    currentLang = savedLang;
  }

  // Set default date input in farm records to today
  const dateInput = document.getElementById("recDate");
  if (dateInput) {
    dateInput.value = new Date().toISOString().split('T')[0];
  }

  // Populate dynamic UI elements
  updateLanguageUI();
  populateSymptomDropdown();
  renderMandiPrices();
  renderGuideCards("all");
  initFarmRecords();
  setupEventListeners();

  // Run initial default diagnosis and irrigation calculation demo
  runDefaultDiagnosis();
  calculateWaterSchedule();
});

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'te' : 'en';
  localStorage.setItem("farmRakshakLang", currentLang);
  updateLanguageUI();
  populateSymptomDropdown();
  renderMandiPrices();
  renderGuideCards(getActiveFilter());
  
  // Re-run tools with current inputs to update text language
  diagnoseCrop();
  calculateWaterSchedule();
  updateWeatherCard();
  updateSoilMoistureFeedback(parseInt(document.getElementById("moistureSlider").value, 10));
}

function updateLanguageUI() {
  const langLabel = document.getElementById("langLabel");
  if (langLabel) {
    langLabel.textContent = currentLang === 'en' ? "తెలుగు" : "English";
  }

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang] && translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });

  document.documentElement.lang = currentLang;
}

function getActiveFilter() {
  const activeBtn = document.querySelector(".filter-btn.active");
  return activeBtn ? activeBtn.getAttribute("data-filter") : "all";
}

// ==========================================================================
// 8. Event Listeners Setup
// ==========================================================================
function setupEventListeners() {
  // Language Button
  const langToggleBtn = document.getElementById("langToggleBtn");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", toggleLanguage);
  }

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        const icon = mobileToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }

  // Crop Selector Change -> update Symptoms
  const cropSelect = document.getElementById("cropSelect");
  if (cropSelect) {
    cropSelect.addEventListener("change", () => {
      populateSymptomDropdown();
      updateSamplePhotoForSelection();
    });
  }

  // Symptom Selector Change -> update Sample Photo
  const symptomSelect = document.getElementById("symptomSelect");
  if (symptomSelect) {
    symptomSelect.addEventListener("change", updateSamplePhotoForSelection);
  }

  // Run Diagnosis Button
  const btnDiagnose = document.getElementById("btnDiagnose");
  if (btnDiagnose) {
    btnDiagnose.addEventListener("click", diagnoseCrop);
  }

  // Custom User Image Upload Preview
  const userImageInput = document.getElementById("userImageInput");
  if (userImageInput) {
    userImageInput.addEventListener("change", handleCustomImageUpload);
  }

  // Calculate Water Schedule Button
  const btnCalculateWater = document.getElementById("btnCalculateWater");
  if (btnCalculateWater) {
    btnCalculateWater.addEventListener("click", calculateWaterSchedule);
  }

  // Farm Records Save & Clear
  const btnAddRecord = document.getElementById("btnAddRecord");
  if (btnAddRecord) {
    btnAddRecord.addEventListener("click", addFarmRecord);
  }

  const btnClearAllRecords = document.getElementById("btnClearAllRecords");
  if (btnClearAllRecords) {
    btnClearAllRecords.addEventListener("click", clearAllFarmRecords);
  }

  // Soil Moisture Slider
  const moistureSlider = document.getElementById("moistureSlider");
  if (moistureSlider) {
    moistureSlider.addEventListener("input", (e) => {
      updateSoilMoistureFeedback(parseInt(e.target.value, 10));
    });
  }

  // District Weather Select
  const districtSelect = document.getElementById("districtSelect");
  if (districtSelect) {
    districtSelect.addEventListener("change", updateWeatherCard);
  }

  // Guide Filter Tabs
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderGuideCards(filter);
    });
  });

  // Scroll to Top Button
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
    highlightActiveNavLink();
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// ==========================================================================
// 9. Crop Risk Checker Logic
// ==========================================================================
function populateSymptomDropdown() {
  const cropSelect = document.getElementById("cropSelect");
  const symptomSelect = document.getElementById("symptomSelect");
  if (!cropSelect || !symptomSelect) return;

  const selectedCrop = cropSelect.value;
  const symptoms = cropKnowledgeBase[selectedCrop] || [];

  symptomSelect.innerHTML = "";
  symptoms.forEach(item => {
    const opt = document.createElement("option");
    opt.value = item.id;
    opt.textContent = currentLang === 'en' ? item.symptomEn : item.symptomTe;
    symptomSelect.appendChild(opt);
  });

  updateSamplePhotoForSelection();
}

function updateSamplePhotoForSelection() {
  const cropSelect = document.getElementById("cropSelect");
  const symptomSelect = document.getElementById("symptomSelect");
  const sampleImg = document.getElementById("sampleDiseaseImg");
  const caption = document.getElementById("imageCaptionText");
  if (!cropSelect || !symptomSelect || !sampleImg) return;

  const selectedCrop = cropSelect.value;
  const selectedSymptomId = symptomSelect.value;
  const list = cropKnowledgeBase[selectedCrop] || [];
  const found = list.find(item => item.id === selectedSymptomId) || list[0];

  if (found) {
    sampleImg.src = found.image;
    if (caption) {
      caption.textContent = currentLang === 'en' ? found.nameEn : found.nameTe;
    }
  }
}

function handleCustomImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    const sampleImg = document.getElementById("sampleDiseaseImg");
    const caption = document.getElementById("imageCaptionText");
    if (sampleImg) {
      sampleImg.src = event.target.result;
    }
    if (caption) {
      caption.textContent = currentLang === 'en' ? "User Uploaded Field Sample" : "రైతు అప్‌లోడ్ చేసిన చిత్రం";
    }
  };
  reader.readAsDataURL(file);
}

function runDefaultDiagnosis() {
  diagnoseCrop();
}

function diagnoseCrop() {
  const cropSelect = document.getElementById("cropSelect");
  const symptomSelect = document.getElementById("symptomSelect");
  const resultCard = document.getElementById("doctorResultCard");
  const placeholder = document.getElementById("resultPlaceholder");
  const content = document.getElementById("diagnosisContent");

  if (!cropSelect || !symptomSelect || !resultCard) return;

  const selectedCrop = cropSelect.value;
  const selectedSymptomId = symptomSelect.value;
  const list = cropKnowledgeBase[selectedCrop] || [];
  const data = list.find(item => item.id === selectedSymptomId) || list[0];

  if (!data) return;

  if (placeholder) placeholder.style.display = "none";
  if (content) content.style.display = "block";

  document.getElementById("resultDiseaseName").textContent = currentLang === 'en' ? data.nameEn : data.nameTe;
  document.getElementById("resultScientificName").textContent = data.pathogen;
  document.getElementById("resultConfidenceCircle").textContent = `${data.confidence}%`;
  document.getElementById("resultSeverityBadge").textContent = currentLang === 'en' ? data.severityEn : data.severityTe;
  document.getElementById("resultCauses").textContent = currentLang === 'en' ? data.causesEn : data.causesTe;
  document.getElementById("resultImmediateAction").textContent = currentLang === 'en' ? data.immediateActionEn : data.immediateActionTe;
  document.getElementById("resultOrganicRemedy").textContent = currentLang === 'en' ? data.organicRemedyEn : data.organicRemedyTe;
  document.getElementById("resultChemicalRemedy").textContent = currentLang === 'en' ? data.chemicalRemedyEn : data.chemicalRemedyTe;
  document.getElementById("resultPrevention").textContent = currentLang === 'en' ? data.preventionEn : data.preventionTe;

  resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ==========================================================================
// 10. Smart Water Advisor Logic
// ==========================================================================
function calculateWaterSchedule() {
  const crop = document.getElementById("waterCrop") ? document.getElementById("waterCrop").value : "paddy";
  const stage = document.getElementById("waterStage") ? document.getElementById("waterStage").value : "vegetative";
  const soil = document.getElementById("waterSoil") ? document.getElementById("waterSoil").value : "loamy";
  const weather = document.getElementById("waterWeather") ? document.getElementById("waterWeather").value : "cloudy";

  const actionStatus = document.getElementById("waterActionStatus");
  const freqVal = document.getElementById("waterFreqVal");
  const qtyVal = document.getElementById("waterQtyVal");
  const timeVal = document.getElementById("waterTimeVal");
  const methodVal = document.getElementById("waterMethodVal");
  const adviceEl = document.getElementById("waterDetailedAdvice");
  const tipEl = document.getElementById("waterSaverTip");
  const heading = document.getElementById("waterPlanHeading");

  let statusText = "";
  let freqText = "";
  let qtyText = "";
  let timeText = currentLang === 'en' ? "Early Morning (6:00 - 8:30 AM)" : "ఉదయం వేళ (6:00 - 8:30 AM)";
  let methodText = "";
  let adviceText = "";
  let tipText = "";

  if (crop === "paddy") {
    if (weather === "rainy") {
      statusText = currentLang === 'en' ? "Hold Irrigation (Rain Imminent)" : "నీరు పెట్టకండి (వర్షం పడే అవకాశం ఉంది)";
      freqText = currentLang === 'en' ? "Pause for 2-3 Days" : "2-3 రోజులు వాయిదా వేయండి";
      qtyText = "0 mm";
      methodText = currentLang === 'en' ? "Maintain Drainage Channels" : "పొలంలో మురుగు కాలువలను సరిచేయండి";
      adviceText = currentLang === 'en' 
        ? "Rainfall is expected. Open drainage gates to prevent excess submergence of tillers."
        : "వర్షం పడే సూచన ఉంది. మడిలో నీరు ఎక్కువై పిలకలు మునిగిపోకుండా మురుగు నీటిని బయటకు వదలండి.";
      tipText = currentLang === 'en'
        ? "Harvest rainwater in farm ponds (Krishi Honda) for critical post-monsoon stages."
        : "వర్షపు నీటిని పొలం కుంటలలో నిల్వ చేసుకుని పంట చివరి దశలో ఉపయోగించుకోండి.";
    } else {
      statusText = currentLang === 'en' ? "Maintain Standing Water (2-3 cm)" : "2-3 సెం.మీ పలుచని నీరు నిలకడగా ఉంచండి";
      freqText = currentLang === 'en' ? "Every 2 Days (AWD Method)" : "ప్రతి 2 రోజులకు ఒకసారి (AWD విధానం)";
      qtyText = "40 - 50 mm";
      methodText = currentLang === 'en' ? "Alternate Wetting & Drying (AWD)" : "తడి ఆరిన తర్వాత నీరు పెట్టే పద్ధతి";
      adviceText = currentLang === 'en'
        ? "Adopting Alternate Wetting and Drying (AWD) saves 30% water and drastically cuts methane emissions without yield penalty."
        : "నిరంతరం నీరు నిల్వ ఉంచకుండా, పొలం కొద్దిగా ఆరిన తర్వాత మళ్లీ నీరు పెట్టడం వల్ల 30% నీరు ఆదా అవుతుంది.";
      tipText = currentLang === 'en'
        ? "Install a simple perforated PVC pipe in the field to monitor the water table beneath soil surface."
        : "మట్టిలో తేమను కొలవడానికి రంధ్రాలు చేసిన చిన్న PVC పైపును పొలంలో పాతి పరిశీలించండి.";
    }
  } else {
    if (weather === "rainy") {
      statusText = currentLang === 'en' ? "No Watering Needed" : "నీటి తడులు అవసరం లేదు";
      freqText = currentLang === 'en' ? "Postpone 4-5 Days" : "4-5 రోజులు ఆగండి";
      qtyText = "0 mm";
      methodText = currentLang === 'en' ? "Furrow Drainage" : "కాలువల ద్వారా మురుగునీటి తొలగింపు";
      adviceText = currentLang === 'en'
        ? "High soil saturation from rain is sufficient. Avoid waterlogging to prevent root fungal infections."
        : "వర్షం వల్ల భూమిలో తగినంత తేమ ఉంది. నీరు నిల్వ ఉంటే వేరుకుళ్లు వచ్చే ప్రమాదం ఉన్నందున తడి ఇవ్వకండి.";
      tipText = currentLang === 'en'
        ? "Ensure furrows are weed-free so excessive storm water runs off smoothly."
        : "కాలువలలో కలుపు తీసివేసి మురుగు నీరు త్వరగా బయటకు పోయేలా చూడండి.";
    } else if (weather === "sunny" || soil === "sandy") {
      statusText = currentLang === 'en' ? "Irrigate Promptly (High Evaporation)" : "వెంటనే తడి ఇవ్వండి (అధిక ఎండ)";
      freqText = currentLang === 'en' ? "Every 2 to 3 Days" : "ప్రతి 2-3 రోజులకు ఒకసారి";
      qtyText = "25 - 30 mm (2.5 hrs Drip)";
      methodText = currentLang === 'en' ? "Micro-Drip / Ring Basin" : "బిందుసేద్యం (Drip) / రింగ్ బేసిన్";
      adviceText = currentLang === 'en'
        ? "Sandy soil drains very fast and high daytime temperature causes rapid evapotranspiration. Water strictly in early morning or late evening."
        : "ఇసుక నేలల్లో నీరు త్వరగా ఇంకిపోతుంది మరియు ఎండ వల్ల ఆవిరి అవుతుంది. ఉదయం 8 గంటల లోపు లేదా సాయంత్రం వేళల్లోనే తడులు ఇవ్వండి.";
      tipText = currentLang === 'en'
        ? "Organic mulching using dry crop residues cuts direct soil evaporation by nearly 40%."
        : "వరి గడ్డి లేదా ఎండుటాకులతో మొక్కల చుట్టూ మల్చింగ్ చేస్తే 40% నీటి ఆవిరి తగ్గుతుంది.";
    } else {
      statusText = currentLang === 'en' ? "Moderate Scheduled Need" : "సాధారణ అవసరం (షెడ్యూల్ ప్రకారం)";
      freqText = currentLang === 'en' ? "Every 4 to 5 Days" : "ప్రతి 4-5 రోజులకు ఒకసారి";
      qtyText = "30 - 35 mm (3 hrs Drip)";
      methodText = currentLang === 'en' ? "Drip / Alternate Furrow" : "డ్రిప్ / విడతల కాలువ పద్ధతి";
      adviceText = currentLang === 'en'
        ? "Soil moisture is balanced. Deep root penetration occurs when watering is spaced systematically rather than daily shallow sprinkling."
        : "మట్టిలో తేమ సాధారణంగా ఉంది. ప్రతిరోజూ కాకుండా విడతల వారీగా తడులు ఇస్తే వేర్లు భూమిలోకి లోతుగా విస్తరిస్తాయి.";
      tipText = currentLang === 'en'
        ? "Alternate furrow irrigation cuts water consumption by 50% in cotton and maize without hurting yield."
        : "ఒక కాలువ విడిచి మరొక కాలువలో నీరు పారించడం ద్వారా ప్రత్తి, మొక్కజొన్నలలో 50% నీరు ఆదా చేయవచ్చు.";
    }
  }

  if (actionStatus) actionStatus.textContent = statusText;
  if (freqVal) freqVal.textContent = freqText;
  if (qtyVal) qtyVal.textContent = qtyText;
  if (timeVal) timeVal.textContent = timeText;
  if (methodVal) methodVal.textContent = methodText;
  if (adviceEl) adviceEl.textContent = adviceText;
  if (tipEl) tipEl.textContent = tipText;

  if (heading) {
    const cropDisplay = document.getElementById("waterCrop") ? document.getElementById("waterCrop").selectedOptions[0].text : "Crop";
    heading.textContent = currentLang === 'en' ? `${cropDisplay} - Water Advisory` : `${cropDisplay} - నీటి ప్రణాళిక`;
  }
}

// ==========================================================================
// 11. Soil Moisture Simulator Logic
// ==========================================================================
function updateSoilMoistureFeedback(value) {
  const valueText = document.getElementById("moistureValueText");
  const heading = document.getElementById("soilStatusHeading");
  const details = document.getElementById("soilStatusDetails");
  const iconStatus = document.getElementById("soilStatusIcon");

  if (valueText) valueText.textContent = `${value}%`;

  if (value < 35) {
    if (heading) heading.textContent = currentLang === 'en' ? "⚠️ Low Moisture - Irrigation Recommended" : "⚠️ తేమ తక్కువగా ఉంది - తడి ఇవ్వాలి";
    if (details) details.textContent = currentLang === 'en'
      ? "Soil water tension is high. Crop may experience wilting and stomatal closure. Initiate drip or furrow irrigation within 24 hours."
      : "నేలలో తేమ బాగా తగ్గింది. మొక్కలు వడలిపోయే ప్రమాదం ఉంది. రాబోయే 24 గంటల్లోగా పొలానికి నీటి తడి అందించండి.";
    if (iconStatus) iconStatus.innerHTML = '<i class="fa-solid fa-triangle-exclamation text-amber"></i>';
  } else if (value <= 70) {
    if (heading) heading.textContent = currentLang === 'en' ? "✅ Optimal Soil Moisture (Safe Zone)" : "✅ సరైన తేమ శాతం (అనుకూల స్థితి)";
    if (details) details.textContent = currentLang === 'en'
      ? "Moisture is perfectly balanced between field capacity and air porosity. Roots have easy access to dissolved nutrients. No watering needed today."
      : "నేలలో తేమ సమతుల్యంగా ఉంది. వేర్లకు ప్రాణవాయువు మరియు పోషకాలు చక్కగా అందుతున్నాయి. ఈరోజు నీరు పెట్టవలసిన అవసరం లేదు.";
    if (iconStatus) iconStatus.innerHTML = '<i class="fa-solid fa-circle-check text-success"></i>';
  } else {
    if (heading) heading.textContent = currentLang === 'en' ? "🚨 High Moisture - Waterlogging Risk" : "🚨 అధిక తేమ - నీరు నిలిచే ప్రమాదం";
    if (details) details.textContent = currentLang === 'en'
      ? "Soil pores are saturated with water, depriving roots of oxygen. Risk of root rot (Pythium/Rhizoctonia) is elevated. Stop watering and clear drains."
      : "భూమిలో గాలి ఆడకుండా నీరు నిండి ఉంది. వేరుకుళ్లు తెగులు వచ్చే అవకాశం ఎక్కువ. అదనపు నీటిని కాలువల ద్వారా బయటకు పంపండి.";
    if (iconStatus) iconStatus.innerHTML = '<i class="fa-solid fa-circle-exclamation text-danger"></i>';
  }
}

// ==========================================================================
// 12. Weather Card Switching Logic
// ==========================================================================
function updateWeatherCard() {
  const districtSelect = document.getElementById("districtSelect");
  if (!districtSelect) return;

  const key = districtSelect.value;
  const data = districtWeatherData[key] || districtWeatherData.guntur;

  document.getElementById("weatherLocationName").textContent = currentLang === 'en' ? data.name : data.nameTe;
  document.getElementById("weatherTemp").textContent = data.temp;
  document.getElementById("weatherCondition").textContent = currentLang === 'en' ? data.condEn : data.condTe;
  document.getElementById("weatherHumidity").textContent = data.humidity;
  document.getElementById("weatherWind").textContent = data.wind;
  document.getElementById("weatherRainChance").textContent = data.rain;

  const iconEl = document.getElementById("weatherMainIcon");
  if (iconEl) {
    iconEl.className = `fa-solid ${data.icon}`;
  }
}

// ==========================================================================
// 13. Mandi Market Rates Rendering
// ==========================================================================
function renderMandiPrices() {
  const listContainer = document.getElementById("marketPriceList");
  if (!listContainer) return;

  listContainer.innerHTML = "";

  mandiPrices.forEach(item => {
    const cropName = currentLang === 'en' ? item.cropEn : item.cropTe;
    const trendClass = item.isUp ? "trend-up" : "trend-down";
    const trendIcon = item.isUp ? "fa-arrow-trend-up" : "fa-arrow-trend-down";

    const itemEl = document.createElement("div");
    itemEl.className = "mandi-item";
    itemEl.innerHTML = `
      <div class="mandi-crop-info">
        <div class="mandi-crop-icon"><i class="fa-solid ${item.icon}"></i></div>
        <div>
          <span class="mandi-crop-name">${cropName}</span>
          <span class="mandi-crop-sub">${currentLang === 'en' ? 'Avg. Mandi Rate' : 'సగటు ధర'}</span>
        </div>
      </div>
      <div class="mandi-price-info">
        <span class="mandi-price">${item.price}</span>
        <span class="mandi-trend ${trendClass}"><i class="fa-solid ${trendIcon}"></i> ${item.trend}</span>
      </div>
    `;
    listContainer.appendChild(itemEl);
  });
}

// ==========================================================================
// 14. Sustainable Farming Guide Rendering
// ==========================================================================
function renderGuideCards(filter = "all") {
  const grid = document.getElementById("guideCardsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  const filtered = filter === "all" ? guideData : guideData.filter(item => item.category === filter);

  filtered.forEach(item => {
    const title = currentLang === 'en' ? item.titleEn : item.titleTe;
    const desc = currentLang === 'en' ? item.descEn : item.descTe;
    const category = currentLang === 'en' ? item.categoryLabelEn : item.categoryLabelTe;
    const steps = currentLang === 'en' ? item.stepsEn : item.stepsTe;
    const tag = currentLang === 'en' ? item.tagEn : item.tagTe;

    const card = document.createElement("div");
    card.className = "guide-card";

    let stepsHtml = "";
    steps.forEach(step => {
      stepsHtml += `<div class="guide-step-item"><i class="fa-solid fa-check"></i> <span>${step}</span></div>`;
    });

    card.innerHTML = `
      <div>
        <div class="guide-card-icon"><i class="${item.icon}"></i></div>
        <span class="guide-category-pill">${category}</span>
        <h3 class="guide-card-title">${title}</h3>
        <p class="guide-card-text">${desc}</p>
        <div class="guide-steps-list">
          ${stepsHtml}
        </div>
      </div>
      <div class="guide-card-footer">
        <span><i class="fa-solid fa-tag"></i> ${tag}</span>
        <span><i class="fa-solid fa-circle-check text-green"></i> KVK Verified</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ==========================================================================
// 15. Smooth Active Navigation Highlight on Scroll
// ==========================================================================
function highlightActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute("id");
    const link = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
}
