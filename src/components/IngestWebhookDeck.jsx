import React, { useState } from 'react';
import { Terminal, Copy, Check, Send, Sparkles, CheckCircle2 } from 'lucide-react';

export default function IngestWebhookDeck({ onAddNewRun }) {
  const [copiedCurl, setCopiedCurl] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [evalResult, setEvalResult] = useState(null);

  const [formData, setFormData] = useState({
    agentId: "SupportTriage_v1",
    model: "GPT-4o-mini",
    prompt: "Troubleshoot stripe refund webhook failure for invoice #8192",
    toolTrace: "stripe_api.get_event('evt_9128'), verify_signature(), replay_webhook()",
    finalOutput: "Discovered stale webhook signing secret in production environment. Replaced secret and replayed evt_9128 successfully."
  });

  const curlSnippet = `curl -X POST https://api.evalagent.io/v1/telemetry/runs \\
  -H "Authorization: Bearer eval_live_sec_8912" \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "${formData.agentId}",
    "model": "${formData.model}",
    "input_prompt": "${formData.prompt}",
    "tool_trace": ["stripe_api.get_event", "replay_webhook"],
    "final_output": "${formData.finalOutput.slice(0, 50)}..."
  }'`;

  const handleCopy = () => {
    navigator.clipboard.writeText(curlSnippet);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  const handleSendRun = (e) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      const newAgentRun = {
        id: `agent-${Date.now()}`,
        name: formData.agentId,
        framework: "CrewAI",
        model: formData.model,
        runsCount: 1,
        successRate: 99.0,
        accuracyScore: 96,
        hallucinationRate: 0.8,
        instructionAdherence: 98.0,
        avgCostPerRun: "$0.024",
        avgLatency: "1.4s",
        status: "optimal",
        recommendation: "Passed evaluation with 96/100 accuracy score.",
        recentTrace: {
          prompt: formData.prompt,
          toolTrace: formData.toolTrace.split(',').map(s => s.trim()),
          finalOutput: formData.finalOutput,
          judgeReasoning: "Excellent tool execution trace. Problem accurately root-caused and resolved with zero extraneous API calls.",
          accuracy: 96,
          hallucinationScore: 0.8,
          cost: "$0.024",
          latency: "1.4s"
        }
      };

      onAddNewRun(newAgentRun);
      setIsSending(false);
      setEvalResult(newAgentRun.recentTrace);
      setTimeout(() => setEvalResult(null), 5000);
    }, 850);
  };

  return (
    <section id="ingest-webhook" className="py-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10 text-left">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-eval-400" />
                <span>Standardized Ingest Webhook & Live Run Evaluation</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Stream agent execution traces into the automated LLM-as-a-judge rubric pipeline via cURL or Python SDK
              </p>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-dark-800 hover:bg-dark-750 text-slate-300 border border-white/10 transition-all"
            >
              {copiedCurl ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">cURL Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy cURL Command</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Interactive Ingest Payload Editor (7 cols) */}
            <form onSubmit={handleSendRun} className="lg:col-span-7 space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">Agent ID</label>
                  <input
                    type="text"
                    value={formData.agentId}
                    onChange={(e) => setFormData({ ...formData, agentId: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-white font-mono focus:border-eval-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">Underlying Model</label>
                  <input
                    type="text"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-white font-mono focus:border-eval-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">Input Prompt</label>
                <input
                  type="text"
                  value={formData.prompt}
                  onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
                  className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-white focus:border-eval-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">Tool Trace (Comma-separated)</label>
                <input
                  type="text"
                  value={formData.toolTrace}
                  onChange={(e) => setFormData({ ...formData, toolTrace: e.target.value })}
                  className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-white font-mono text-[11px] focus:border-eval-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">Final Agent Output</label>
                <textarea
                  rows={2}
                  value={formData.finalOutput}
                  onChange={(e) => setFormData({ ...formData, finalOutput: e.target.value })}
                  className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-white focus:border-eval-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-eval-600 via-teal-600 to-cyan-600 hover:from-eval-500 hover:to-cyan-500 text-white font-bold text-xs shadow-md shadow-eval-500/25 transition-all"
              >
                {isSending ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>LLM Judge Evaluating Output...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Trace to Judge & Score Run</span>
                  </>
                )}
              </button>
            </form>

            {/* Right: Real-time Ingestion Code / Verdict (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
              <div className="p-4 rounded-2xl bg-dark-950 font-mono text-[11px] text-slate-300 border border-white/5 space-y-2 overflow-x-auto">
                <div className="text-slate-500 text-[10px]">// Webhook Ingestion Payload Preview</div>
                <div className="text-emerald-400">POST /v1/telemetry/runs</div>
                <div>&#123;</div>
                <div className="pl-3 text-cyan-300">"agent_id": "{formData.agentId}",</div>
                <div className="pl-3 text-cyan-300">"model": "{formData.model}",</div>
                <div className="pl-3 text-slate-400">"timestamp": "{new Date().toISOString()}"</div>
                <div>&#125;</div>
              </div>

              {evalResult && (
                <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-xs animate-fade-in space-y-1.5">
                  <div className="flex items-center gap-1.5 text-emerald-300 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Judge Verified • Score: {evalResult.accuracy}/100</span>
                  </div>
                  <p className="text-[11px] text-slate-300 italic">
                    "{evalResult.judgeReasoning}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
