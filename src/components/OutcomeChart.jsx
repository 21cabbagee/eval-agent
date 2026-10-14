import React, { useState } from 'react';
import { TrendingUp, ShieldAlert, Zap, DollarSign, Activity, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

/**
 * OutcomeChart for EvalAgent (Bklit UI + Julien Bek $1:$6 Sequoia Framework + Larry Ellison ROI Engine)
 * Compares $14,000/mo human QA testing farms & prompt engineering consultancies ($6 layer)
 * with Autonomous CI/CD Multi-Agent Evaluation & Pruning Middleware ($1 software layer).
 */
export default function OutcomeChart({
  serviceName = "Autonomous Agent Efficacy & Regression Benchmark Engine",
  defaultAgents = 12,
  onCtaClick
}) {
  const [agents, setAgents] = useState(defaultAgents);

  // Legacy agency/consulting: $1,250/agent/mo in manual red-teaming, prompt regressions & human QA
  const legacyServicesCost = agents * 1250;
  // EvalAgent automated software fee: $49/mo flat + $15/agent/mo
  const autoSoftwareCost = 49 + (agents * 15);
  const netValueReclaimed = legacyServicesCost - autoSoftwareCost;
  const savingsPercent = Math.round(((legacyServicesCost - autoSoftwareCost) / legacyServicesCost) * 100);

  const maxCost = Math.max(legacyServicesCost, 1);
  const legacyBarHeight = 100;
  const autoBarHeight = Math.max(Math.round((autoSoftwareCost / maxCost) * 100), 5);

  return (
    <div className="relative rounded-2xl border border-teal-500/30 bg-slate-950/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden my-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border bg-slate-900 border-teal-500/40 text-teal-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
            The Sequoia Equation: Software ($1) vs $14,000/mo QA Consulting Agencies ($6)
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
            Autonomous Agent Fleet Economics: <span className="text-teal-400">{savingsPercent}% QA Margin Reclaimed</span>
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Julien Bek Thesis: Displacing manual prompt red-teaming contractors and slow QA testing farms with continuous CI/CD benchmark oracles.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-900/80 border border-teal-500/30 rounded-xl p-3">
          <Activity className="w-5 h-5 text-teal-400" />
          <div className="text-right">
            <div className="text-xs text-slate-400 font-mono">Net Monthly Savings</div>
            <div className="text-lg font-black text-teal-400 font-mono">
              +${netValueReclaimed.toLocaleString()}/mo
            </div>
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div className="my-6 bg-slate-900/60 rounded-xl p-4 border border-white/5">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-teal-400" />
            <span>Active Production AI Agents / Prompts Under Test:</span>
          </label>
          <span className="text-base font-bold text-teal-400 font-mono bg-teal-500/10 px-3 py-0.5 rounded-lg border border-teal-500/20">
            {agents} Agents
          </span>
        </div>
        <input
          type="range"
          min="3"
          max="80"
          value={agents}
          onChange={(e) => setAgents(parseInt(e.target.value))}
          className="w-full accent-teal-400 bg-slate-800 rounded-lg cursor-pointer h-2"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>3 Seed Agents</span>
          <span>40 Production Fleet</span>
          <span>80+ Enterprise Multi-Agent Mesh</span>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {/* Legacy Manual Services ($6) */}
        <div className="rounded-xl border border-rose-500/20 bg-rose-950/10 p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">Legacy Manual QA Agency</h4>
                <p className="text-xs text-rose-300/70">Prompt Engineers & Red-Teaming Farms</p>
              </div>
            </div>
            <span className="text-xs font-mono font-semibold text-rose-400 bg-rose-500/10 px-2 py-1 rounded">
              The $6 Service Layer
            </span>
          </div>

          <div className="space-y-3 mb-6 text-xs text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">• Manual Prompt QA Contractors:</span>
              <span className="font-mono text-rose-400 font-bold">${(agents * 900).toLocaleString()}/mo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• Production Regression Latency:</span>
              <span className="font-mono text-rose-400 font-bold">48 - 72 hrs</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• Un-caught Outage Liability:</span>
              <span className="font-mono text-rose-400 font-bold">${(agents * 350).toLocaleString()}/mo</span>
            </div>
            <div className="border-t border-rose-500/20 pt-2 flex justify-between font-bold text-sm">
              <span className="text-white">Total Human Cost:</span>
              <span className="font-mono text-rose-400">${legacyServicesCost.toLocaleString()}/mo</span>
            </div>
          </div>

          {/* Bar visualization */}
          <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-rose-500/30">
            <div
              className="bg-gradient-to-r from-rose-600 to-rose-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${legacyBarHeight}%` }}
            />
          </div>
        </div>

        {/* EvalAgent Software Layer ($1) */}
        <div className="rounded-xl border border-teal-500/30 bg-teal-950/15 p-5 relative overflow-hidden shadow-lg shadow-teal-500/5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center">
                <Zap className="w-4 h-4 text-teal-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">EvalAgent Autonomous Platform</h4>
                <p className="text-xs text-teal-300/80">Continuous Git CI/CD Synthetic Oracles</p>
              </div>
            </div>
            <span className="text-xs font-mono font-semibold text-teal-400 bg-teal-500/10 px-2 py-1 rounded">
              The $1 Software Layer
            </span>
          </div>

          <div className="space-y-3 mb-6 text-xs text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">• Synthetic Benchmarks per Commit:</span>
              <span className="font-mono text-teal-400 font-bold">100% Automated</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• Hallucination Detection Speed:</span>
              <span className="font-mono text-teal-400 font-bold">&lt; 850 ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• Base Platform + Fleet Tier:</span>
              <span className="font-mono text-teal-400 font-bold">${autoSoftwareCost.toLocaleString()}/mo</span>
            </div>
            <div className="border-t border-teal-500/20 pt-2 flex justify-between font-bold text-sm">
              <span className="text-white">Software Price:</span>
              <span className="font-mono text-teal-400">${autoSoftwareCost.toLocaleString()}/mo</span>
            </div>
          </div>

          {/* Bar visualization */}
          <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-teal-500/30">
            <div
              className="bg-gradient-to-r from-teal-500 to-cyan-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${autoBarHeight}%` }}
            />
          </div>
        </div>
      </div>

      {/* Larry Ellison Economic Guarantee Box */}
      <div className="rounded-xl bg-gradient-to-r from-teal-950/40 via-slate-900 to-cyan-950/40 border border-teal-500/30 p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-teal-400" />
          </div>
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span>The Ellison SLA: Zero-Regression Agent Guarantee</span>
              <span className="text-xs bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded font-mono">100% Deterministic</span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              If an agent regression slips into production undetected while EvalAgent is running in your CI/CD, we credit your entire account for 12 months.
            </p>
          </div>
        </div>

        <button
          onClick={onCtaClick}
          className="whitespace-nowrap px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/20 transition-all hover:scale-105 active:scale-95"
        >
          Deploy Free CI/CD Oracle
        </button>
      </div>
    </div>
  );
}
