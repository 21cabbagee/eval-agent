import React, { useState } from 'react';
import { Gauge, ChevronDown, ChevronUp, Bot, Sparkles, CheckCircle2, AlertTriangle, XCircle, Terminal, DollarSign, Clock } from 'lucide-react';

export default function AgentLeaderboard({ agents }) {
  const [expandedAgentId, setExpandedAgentId] = useState(agents[0]?.id);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'optimal':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Optimal</span>;
      case 'healthy':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">Healthy</span>;
      case 'warning':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">Warning</span>;
      case 'critical-prune':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30 animate-pulse">Critical Prune</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-500/20 text-slate-300 border border-slate-500/30">Active</span>;
    }
  };

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Gauge className="w-5 h-5 text-eval-400" />
              <span>Agent Fleet Efficacy Leaderboard & Scorecard</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Side-by-side performance matrix benchmarking accuracy, hallucination index, and token cost across multi-agent fleets
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400">
            <span>Fleet Total: <strong className="text-white">{agents.length} Agents</strong></span>
          </div>
        </div>

        {/* Leaderboard Table / Cards */}
        <div className="space-y-4">
          {agents.map((agent) => {
            const isExpanded = expandedAgentId === agent.id;

            return (
              <div
                key={agent.id}
                className="glass-panel rounded-2xl overflow-hidden border-white/10 hover:border-white/20 transition-all text-left"
              >
                {/* Header Row */}
                <div
                  onClick={() => setExpandedAgentId(isExpanded ? null : agent.id)}
                  className="p-5 flex flex-wrap items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center text-eval-400">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-sm sm:text-base font-bold text-white">{agent.name}</h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-800 text-slate-300 border border-white/5">
                          {agent.framework}
                        </span>
                        <span className="text-[10px] text-slate-400">({agent.model})</span>
                        {getStatusBadge(agent.status)}
                      </div>
                      <p className="text-xs text-slate-400">
                        {agent.runsCount.toLocaleString()} Runs Monitored • {agent.recommendation}
                      </p>
                    </div>
                  </div>

                  {/* High Level Metrics */}
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="text-right">
                      <div className="text-xs font-bold text-white font-mono">{agent.accuracyScore}/100</div>
                      <div className="text-[10px] text-slate-400 uppercase">Accuracy</div>
                    </div>

                    <div className="text-right">
                      <div className={`text-xs font-bold font-mono ${agent.hallucinationRate > 10 ? 'text-rose-400' : 'text-emerald-400'}`}>
                        {agent.hallucinationRate}%
                      </div>
                      <div className="text-[10px] text-slate-400 uppercase">Hallucination</div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-bold font-mono text-cyan-300">{agent.avgCostPerRun}</div>
                      <div className="text-[10px] text-slate-400 uppercase">Avg Cost</div>
                    </div>

                    <div className="text-right hidden sm:block">
                      <div className="text-xs font-bold font-mono text-slate-300">{agent.avgLatency}</div>
                      <div className="text-[10px] text-slate-400 uppercase">Latency</div>
                    </div>

                    <button className="w-8 h-8 rounded-lg bg-dark-900 border border-white/5 flex items-center justify-center text-slate-400">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded LLM-as-a-Judge Inspection Trace */}
                {isExpanded && agent.recentTrace && (
                  <div className="p-5 border-t border-white/5 bg-dark-950/60 space-y-4">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                      <span>Latest Run Trace & LLM Judge Evaluation</span>
                      <span className="text-eval-400 font-mono text-[11px]">Judge: GPT-4o-mini</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      {/* Left: Input & Tool Executions */}
                      <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-dark-900 border border-white/5">
                          <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">
                            Input Prompt
                          </span>
                          <p className="text-slate-200">{agent.recentTrace.prompt}</p>
                        </div>

                        <div className="p-3 rounded-xl bg-dark-900 border border-white/5">
                          <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">
                            Tool Call Trace
                          </span>
                          <div className="space-y-1 font-mono text-[11px] text-cyan-300">
                            {agent.recentTrace.toolTrace.map((tool, i) => (
                              <div key={i} className="truncate">→ {tool}</div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Output & Judge Verdict */}
                      <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-dark-900 border border-white/5">
                          <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">
                            Agent Final Output
                          </span>
                          <p className="text-slate-200">{agent.recentTrace.finalOutput}</p>
                        </div>

                        <div className="p-3 rounded-xl bg-eval-950/40 border border-eval-500/30">
                          <span className="text-[10px] text-eval-300 uppercase font-semibold block mb-1">
                            Judge Rubric Verdict & Reasoning
                          </span>
                          <p className="text-slate-300 text-xs leading-relaxed italic mb-2">
                            "{agent.recentTrace.judgeReasoning}"
                          </p>
                          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] pt-1 border-t border-white/5">
                            <span className="text-emerald-300">Accuracy: {agent.recentTrace.accuracy}/100</span>
                            <span>•</span>
                            <span className="text-rose-300">Hallucination: {agent.recentTrace.hallucinationScore}%</span>
                            <span>•</span>
                            <span className="text-cyan-300">Cost: {agent.recentTrace.cost}</span>
                            <span>•</span>
                            <span className="text-slate-300">Latency: {agent.recentTrace.latency}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
