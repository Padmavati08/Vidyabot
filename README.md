# Vidyabot — Adaptive Learning Companion

> **Platform:** React 19 + TypeScript + Express Web Application  
> **Target Audience:** Indian School Students (Class 9 Science • Maharashtra State Board & NCERT)  
> **Created by:** Padmavati (3rd-year B.Tech CSE student, Maharashtra)

---

## 🌟 Overview
**Vidyabot** is a focused educational web application built with **React 19**, **TypeScript**, and an **Express** backend. It guides Indian school students through an adaptive, multilingual learning loop.

Unlike generic flashcard apps, Vidyabot diagnoses student misconceptions prior to teaching, offers interactive physics vector and inertia simulators, explains concepts in **English**, **मराठी (Marathi)**, and **हिंदी (Hindi)**, categorizes mistakes into a structured **Error Book**, and schedules active recall via a **Spaced Repetition (Day 1, 3, 7)** retention engine.

---

## 🚀 Key Implemented Features

### 1. Diagnostic Pre-Test & Pathway Calibration
- 3–4 targeted diagnostic questions per topic to identify specific student misconceptions before learning.
- Analyzes baseline proficiency and generates customized study guidance highlighting weak concepts.

### 2. Multilingual & Visual Physics Lessons
- **Language Switcher:** Instant, seamless translation between English, Marathi, and Hindi.
- **Interactive Physics Simulators:**
  - *Force:* Push-Pull vector cart simulator with live net-force calculation and direction gauges.
  - *Newton’s 1st Law:* Inertia of rest/motion bus simulator and interactive coin-drop experiment.
  - *Newton’s 2nd Law:* $F = m \times a$ acceleration engine with mass vs. force calibration.
  - *Newton’s 3rd Law:* Action-reaction ISRO-inspired balloon rocket experiment.
- **Everyday Relatable Examples:** Cricket ball catching, ST bus braking, bullock carts, and Chandrayaan launches.
- **Text-to-Speech (TTS):** Browser audio narration supporting English, Marathi, and Hindi.

### 3. Curriculum-Grounded Doubt Tutor
- Embedded Q&A assistant searching seeded topic definitions, worked numericals, and uploaded student notes.
- **Server-Side AI Proxy:** Powered by `@google/genai` on `gemini-3.7-flash` via secure backend endpoints (`/api/chat`, `/api/simplify`, `/api/lesson-guidance`).
- **Grounded Retrieval & Anti-Hallucination:** Answers are strictly grounded in textbook lessons or uploaded notes with transparent source attributions (*"Based on Vidyabot lesson content"* vs *"Based on your uploaded material"*).
- **Offline Local Fallback:** When running without an external API key, automatically falls back to an instantaneous, keyword- and rules-based local curriculum lookup engine.

### 4. Categorized Error Book
- Automatically captures incorrect answers from pre-tests, post-tests, and revision mini-quizzes.
- Classifies mistakes into 5 pedagogical error categories:
  - `conceptual_error`: Misunderstanding physical mechanisms
  - `formula_error`: Inverted or incorrect mathematical formulas
  - `calculation_error`: Arithmetic or sign convention errors
  - `careless_error`: Overlooking question qualifiers (e.g., "NOT", "EXCEPT")
  - `memory_error`: SI units or constant recall lapses
- **"Explain More Simply":** Generates child-friendly analogies, exam rules-of-thumb, and step-by-step breakdowns.
- **"Mark as Understood":** Enables students to track and celebrate concept mastery.

### 5. Spaced Revision Engine
- Automatically schedules retention cycles:
  - **Day 1:** Immediate post-test evaluation and mastery benchmark.
  - **Day 3:** Active recall mini-quiz.
  - **Day 7:** Long-term mastery verification.
- Generates compact formula sheets and personal common error review lists.

### 6. Study Material Upload
- Manual upload or drag-and-drop for notes, text summaries, and reference links.
- Extracts study concepts for grounded AI doubt tutoring.

### 7. Gamification & Milestone Badges
- Celebrates learning milestones (First Topic Completed, Science Explorer, Accuracy Star, Revision Champion) with confetti celebrations and progress tracking.

### 8. Automation & Webhook Integration
- Integrated n8n session completion and learning activity webhook dispatcher (`src/services/n8nService.ts`, `public/vidyabot-n8n-workflow.json`) for automated learning workflows.

---

## 🛠️ Architecture & Tech Stack

- **Frontend Platform:** React 19, TypeScript, Tailwind CSS, Lucide React icons, Motion animations, Canvas Confetti.
- **Backend Server:** Express full-stack server running on Node.js with Vite middleware (`server.ts`).
- **AI Service:** Server-side proxy integrating `@google/genai` (`gemini-3.7-flash`), protecting API keys from browser exposure.
- **Data Persistence:** Client-side LocalStorage engine (`src/services/storageService.ts`) for zero-setup, privacy-first local session persistence without external database credentials or network exposure.

---

## 💻 Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd vidyabot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   Add your Gemini API key (optional for local seeded mode):
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production:**
   ```bash
   npm run build
   npm start
   ```

---

## 🗺️ Future Roadmap & Planned Features

The following features represent the planned future evolution of the Vidyabot platform:

- **Flutter Mobile Sync:** A companion mobile app sharing the core curriculum models and consuming Vidyabot's Express API endpoints.
- **Firestore Multi-Device Synchronization:** Live cross-device real-time sync across school computer labs, home computers, and mobile devices.
- **PWA Offline Caching & Background Sync:** Progressive Web App service worker caching for complete offline functionality in rural and low-connectivity classrooms.
- **Graph-Based Concept Mastery:** Prerequisite concept dependency graphs mapping cross-chapter progression from Grade 8 fundamentals to Grade 10 board exam topics.
