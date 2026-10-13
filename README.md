# EvalAgent (`/tools/agent-output-evaluation-scorer`)

> **Automated LLM-as-a-Judge Observability Platform That Scores Agent Tool Runs on Accuracy, Latency, and Cost to Prune Hallucinating Agents**

[![Deploy EvalAgent to GitHub Pages](https://github.com/21cabbagee/eval-agent/actions/workflows/deploy.yml/badge.svg)](https://github.com/21cabbagee/eval-agent/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/demo-online-emerald)](https://21cabbagee.github.io/eval-agent/)

---

## 🎯 Executive Summary & Problem Thesis
- **Target Audience:** 300,000 AI software engineers and boutique agency teams running multi-agent fleets (CrewAI, LangGraph, AutoGen, LlamaIndex).
- **Core Problem:** Autonomous multi-agent systems fail silently in production. When an agent gets stuck in infinite retry loops, encounters Cloudflare challenges, or hallucinates deprecated library APIs, it can burn hundreds of dollars in tokens on single runs while degrading user trust.
- **EvalAgent Solution:** Hook up a single standardized telemetry webhook. EvalAgent subjects every agent run to an automated LLM-as-a-judge rubric that scores accuracy (1–100), task completion, and token ROI, issuing automated pruning recommendations to decommission or roll back defective agents before token bleed explodes.

---

## 🚀 Key Features (Black Car V1 Scope)
1. **Automated Pruning Recommendations:** Instant detection and rollback recommendations for agents exceeding threshold failure rates (e.g. `Agent_WebScraper_v2` with a 42% failure rate burning $380/wk in token bleed).
2. **Interactive Agent Fleet Leaderboard:** Side-by-side performance matrix tracking accuracy, hallucination index, token cost, and latency across multi-agent fleets.
3. **Trace-Level LLM-as-a-Judge Inspection:** Deep-dive into input prompts, tool invocation chains, raw final outputs, and synthetic judge reasoning verdicts.
4. **Interactive Ingest Webhook Console:** Test live payload ingestion via interactive forms or production-ready cURL commands with instant judge verification.
5. **Founding Customer Advisory Board (CAB) Modal:** Direct capture mechanism offering 10 founding engineering teams a 70% lifetime platform discount ($45/mo instead of $149/mo).

---

## 🛠️ Tech Stack
- **Framework:** React 19 + Vite 8
- **Styling:** TailwindCSS 3.4 (Dark aesthetic with emerald/cyan neon accents & glassmorphism)
- **Icons:** Lucide React
- **Animations:** Canvas Confetti + Tailwind Keyframes
- **Deployment:** GitHub Pages via GitHub Actions CI/CD

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/21cabbagee/eval-agent.git
cd eval-agent

# Install dependencies
npm install

# Start local development server
npm run dev
```

Build for production:
```bash
npm run build
npm run preview
```

---

## 🌐 Live Deployment
- **URL:** [https://21cabbagee.github.io/eval-agent/](https://21cabbagee.github.io/eval-agent/)
- **Repository:** [https://github.com/21cabbagee/eval-agent](https://github.com/21cabbagee/eval-agent)
