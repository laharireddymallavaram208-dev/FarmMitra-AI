# 🌱 FarmRakshak AI – Smart Farming Assistant (రైతు రక్షక్ AI)

> **Hackathon Theme:** Agriculture & Rural Innovation  
> **Target Audience:** Indian smallholder farmers, agricultural students, and rural extension workers  
> **Tech Stack:** HTML5, CSS3, JavaScript (Vanilla ES6+), LocalStorage, Vercel Static Hosting  
> **Project Location:** `c:\Users\acer\Downloads\hackthon project_1`

---

## 🌾 Overview
**FarmRakshak AI (రైతు రక్షక్ AI)** is a responsive, lightweight, and bilingual (English + Telugu) web platform designed to assist smallholder farmers with crop risk protection, water management, weather tracking, and farm accounting.

### 🌟 Core Modules
1. **🏠 Home:** Engaging hero banner, project mission, key stats, simulated AI scanning card, and quick action links.
2. **💧 Smart Water Advisor (జల మిత్ర):** Calculates precision irrigation schedules based on crop growth stage, soil texture (Clay/Loam/Sandy), and current weather to save up to 35% water and prevent root decay.
3. **🌦️ Weather Dashboard:** Micro-climate tracking for 6 major districts (Guntur, Warangal, Kurnool, Vijayawada, Nizamabad, Pune), real-time interactive soil moisture simulator slider, and live APMC mandi market price trends.
4. **🩺 Crop Risk Checker:** Evaluates disease risks on 7 major Indian crops (Paddy, Cotton, Chilli, Tomato, Maize, Groundnut, Wheat), reveals probable pathogens, and provides actionable biological, organic (Neem, *Trichoderma*), and safe chemical solutions.
5. **📖 Farm Records (డిజిటల్ రైతు డైరీ):** Interactive field logbook where farmers log sowing dates, fertilizer applications, pest sprays, and operational costs. Persists data locally in `localStorage` with a live farm investment summary.
6. **🌐 Telugu-English Toggle:** One-click instant translation switch across the entire website interface, advisories, and farming tips.
7. **📚 Sustainable Farming Care Guide:** Actionable Krishi Vigyan Kendra (KVK)-verified farming recipes for Jeevamrutha, NSKE 5% neem extract, sticky pest traps, and soil health testing.

---

## 📂 Project Structure

```text
c:\Users\acer\Downloads\hackthon project_1\
├── index.html        # Complete semantic HTML5 structure & bilingual layout
├── style.css         # Agricultural green & earthy styling, responsive design & animations
├── script.js         # i18n translation engine, crop risk checker, water advisor, farm records
├── package.json      # Project metadata & build scripts
├── vercel.json       # 1-click Vercel static deployment configuration
├── .gitignore        # Clean repository setup
└── README.md         # Documentation, testing steps & presentation pitch
```

---

## 🚀 How to Run and Test Locally

Because this project is self-contained:

### Method 1: The Easiest Way (Direct File Open)
1. Open File Explorer to:
   ```text
   c:\Users\acer\Downloads\hackthon project_1
   ```
2. Double-click on `index.html`.
3. It will immediately open in Google Chrome, Microsoft Edge, or any browser!

### Method 2: In VS Code with Live Server
1. Open the folder in **VS Code**.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 🧪 Testing Checklist

- [x] Click **తెలుగు / English** in the top navigation to verify instant bilingual translation.
- [x] In **Smart Water Advisor**, select a crop and weather, then click "Calculate Watering Schedule".
- [x] In **Weather Dashboard**, drag the **Soil Moisture slider** to see the live advice change between *Dry*, *Optimal*, and *Waterlogged*.
- [x] In **Crop Risk Checker**, choose a crop and symptom, then click "Run AI Crop Risk Assessment".
- [x] In **Farm Records**, enter an activity and cost, click "Save Farm Record", and verify that the summary cards and table update immediately.
- [x] Refresh the browser page to ensure farm records persist in `localStorage`.

---

## 📤 Step-by-Step GitHub Upload & Vercel Deployment

### 1. Upload to GitHub via Browser (No Terminal Needed)
1. Go to [github.com](https://github.com) and click **"New"** repository.
2. Name it `farmrakshak-ai`, set to **Public**, and click **"Create repository"**.
3. Click the link that says **"uploading an existing file"**.
4. Drag and drop all files from `c:\Users\acer\Downloads\hackthon project_1` and click **"Commit changes"**.

### 2. Deploy on Vercel (100% Free)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **"Add New..."** → **"Project"** and select `farmrakshak-ai`.
3. Click **"Deploy"**.
4. Within 15 seconds, you will have your live `.vercel.app` link ready for hackathon judges!

---

## ⚖️ Educational Disclaimer
*FarmRakshak AI is an educational technology prototype. Simulated diagnoses and irrigation calculations are for preliminary guidance. Always consult local agriculture officers (MAO/KVK) before major chemical purchases.*
