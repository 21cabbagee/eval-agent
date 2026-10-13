export const INITIAL_AGENTS = [
  {
    id: "agent-researcher-v3",
    name: "ResearchAgent_v3",
    framework: "CrewAI / LangGraph",
    model: "Claude 3.5 Sonnet",
    runsCount: 1420,
    successRate: 98.4,
    accuracyScore: 94, // 1 - 100
    hallucinationRate: 1.2, // %
    instructionAdherence: 96.5, // %
    avgCostPerRun: "$0.042",
    avgLatency: "1.8s",
    status: "optimal",
    recommendation: "Keep in Production. High token ROI and sub-2% hallucination rate.",
    recentTrace: {
      prompt: "Extract Q3 revenue metrics for Datadog and snowflake from SEC 10-Q filings",
      toolTrace: ["sec_edgar_lookup('DDOG', 2026)", "sec_edgar_lookup('SNOW', 2026)", "calc_growth_delta()"],
      finalOutput: "Datadog Q3 Revenue: $690M (+26% YoY). Snowflake Q3 Product Revenue: $900M (+29% YoY). Blended ARR retention at 127%.",
      judgeReasoning: "Verbatim matching with official Edgar filing tables. Exact citations provided. Zero arithmetic deviation.",
      accuracy: 98,
      hallucinationScore: 0.0,
      cost: "$0.038",
      latency: "1.65s"
    }
  },
  {
    id: "agent-prospector-v2",
    name: "SalesProspector_v2",
    framework: "LangGraph",
    model: "GPT-4o",
    runsCount: 890,
    successRate: 92.1,
    accuracyScore: 88,
    hallucinationRate: 3.5,
    instructionAdherence: 91.0,
    avgCostPerRun: "$0.086",
    avgLatency: "3.2s",
    status: "healthy",
    recommendation: "Stable performance. Consider caching Apollo API lookups to shave $0.02/run.",
    recentTrace: {
      prompt: "Find Head of Engineering at Series B B2B fintech startups in San Francisco",
      toolTrace: ["apollo_search(title='Head of Eng', loc='SF', funding='Series B')", "verify_email_deliverability()"],
      finalOutput: "Identified 8 verified engineering leads across 4 Series B companies with 94% MX mailbox deliverability score.",
      judgeReasoning: "Adhered to geography and funding stage criteria. All 8 leads confirmed at targeted companies on LinkedIn.",
      accuracy: 91,
      hallucinationScore: 2.1,
      cost: "$0.079",
      latency: "2.9s"
    }
  },
  {
    id: "agent-codewriter-v1",
    name: "CodeWriter_v1",
    framework: "AutoGen",
    model: "Llama 3.3 70B",
    runsCount: 640,
    successRate: 84.5,
    accuracyScore: 81,
    hallucinationRate: 8.9,
    instructionAdherence: 83.0,
    avgCostPerRun: "$0.145",
    avgLatency: "4.8s",
    status: "warning",
    recommendation: "Moderate degradation. Hallucinating deprecated library methods. Inject linter validator into system prompt.",
    recentTrace: {
      prompt: "Refactor Next.js App Router API route to use streaming SSE responses with Redis queue",
      toolTrace: ["git_read_file('src/app/api/stream/route.ts')", "compile_ast_check()"],
      finalOutput: "Refactored route using ReadableStream. Notice: Used obsolete 'req.close()' event instead of AbortSignal listener.",
      judgeReasoning: "Functional code generated but contains 1 deprecated API call flagged by AST parser.",
      accuracy: 82,
      hallucinationScore: 8.4,
      cost: "$0.132",
      latency: "4.2s"
    }
  },
  {
    id: "agent-scraper-v2",
    name: "Agent_WebScraper_v2",
    framework: "CrewAI",
    model: "GPT-4o-mini",
    runsCount: 1120,
    successRate: 58.0, // 42% failure rate!
    accuracyScore: 48,
    hallucinationRate: 38.4,
    instructionAdherence: 52.0,
    avgCostPerRun: "$0.340", // 3x higher cost!
    avgLatency: "9.4s",
    status: "critical-prune",
    recommendation: "URGENT PRUNE: 42% failure rate and 3x cost inflation compared to v1. Burning $380/week in looping retries.",
    recentTrace: {
      prompt: "Scrape pricing tier tables from 10 competitive agency websites and extract enterprise floors",
      toolTrace: ["puppeteer_navigate(target_url)", "retry_infinite_loop()", "retry_infinite_loop()", "timeout_recovery()"],
      finalOutput: "Extracted pricing for only 3 of 10 sites. Hallucinated missing tier numbers for 4 sites based on outdated 2024 blog posts.",
      judgeReasoning: "Severe hallucination. Agent failed on Cloudflare turnstiles, entered a 4-retry loop wasting tokens, then fabricated competitor figures.",
      accuracy: 44,
      hallucinationScore: 42.0,
      cost: "$0.385",
      latency: "11.2s"
    }
  }
];

export const MOCK_PRUNING_ALERTS = [
  {
    id: "alert-scraper-prune",
    agentName: "Agent_WebScraper_v2",
    agentId: "agent-scraper-v2",
    severity: "critical",
    headline: "Agent_WebScraper_v2 has a 42% failure rate and 3x higher cost than v1—prune or roll back.",
    weeklyWaste: "$380.80 / week",
    failureRate: "42.0%",
    avgLatency: "9.4s",
    pruned: false
  }
];
