import React from 'react';
import { Gauge, Sparkles, ArrowRight, ShieldAlert, Zap, DollarSign, Activity, AlertTriangle } from 'lucide-react';
import ParticlesCanvas from './ParticlesCanvas';

export default function Hero({ onJumpToAlert, onJumpToWebhook }) {
  return (
    <section className="relative pt-12 pb-8 overflow-hidden">
      {/* Casberry-inspired Particles WebGL Canvas */}
      <ParticlesCanvas particleColor="20, 184, 166" particleCount={50} />

      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-eval-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-eval-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-eval-400" />
          <span>Automated Agent Observability & Efficacy Scorer</span>
        </div>

        {/* Target Exact SEO H1 */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          Benchmark & Score Autonomous Agents: <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-eval-400 via-teal-300 to-cyan-300">
            Eliminate Inefficient AI Agents Fast
          </span>
        </h1>

        {/* Value Proposition Body */}
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Stop flying blind across your CrewAI, LangGraph, and AutoGen multi-agent fleets. Hook up one logging webhook; EvalAgent benchmarks every tool execution on accuracy (1–100), task completion, and token ROI—alerting you exactly <strong className="text-white">which prompt branches to prune or roll back</strong>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={onJumpToAlert}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold shadow-lg shadow-rose-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <AlertTriangle className="w-4 h-4 animate-bounce" />
            <span>Review Active Pruning Alerts</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={onJumpToWebhook}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-dark-800/80 hover:bg-dark-750 text-slate-200 font-medium border border-white/10 hover:border-white/20 transition-all"
          >
            <Zap className="w-4 h-4 text-eval-400" />
            <span>Send Live Agent Run to Judge</span>
          </button>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          <div className="glass-panel p-3.5 rounded-xl text-left border-white/5">
            <div className="flex items-center gap-2 text-rose-400 mb-1">
              <ShieldAlert className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Silent Errors</span>
            </div>
            <div className="text-xl font-bold text-white">42% Caught</div>
            <p className="text-[11px] text-slate-400">Prunes looping retry leaks</p>
          </div>

          <div className="glass-panel p-3.5 rounded-xl text-left border-white/5">
            <div className="flex items-center gap-2 text-eval-400 mb-1">
              <DollarSign className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Token Savings</span>
            </div>
            <div className="text-xl font-bold text-eval-300">$380/wk</div>
            <p className="text-[11px] text-slate-400">Per defective agent fleet</p>
          </div>

          <div className="glass-panel p-3.5 rounded-xl text-left border-white/5">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <Activity className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Eval Rubric</span>
            </div>
            <div className="text-xl font-bold text-white">3-Factor Judge</div>
            <p className="text-[11px] text-slate-400">Accuracy, hallucination, cost</p>
          </div>

          <div className="glass-panel p-3.5 rounded-xl text-left border-white/5">
            <div className="flex items-center gap-2 text-teal-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Market TAM</span>
            </div>
            <div className="text-xl font-bold text-white">$536M TAM</div>
            <p className="text-[11px] text-slate-400">300k AI software & agency teams</p>
          </div>
        </div>
      </div>
    </section>
  );
}
