import React from 'react';
import { Gauge, ShieldCheck, Heart, Sparkles, Terminal, Activity } from 'lucide-react';

export default function Footer({ onOpenCab }) {
  return (
    <footer className="mt-16 border-t border-white/10 bg-dark-950 py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-left">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-eval-600 to-teal-400 flex items-center justify-center text-white">
                <Gauge className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-base text-white">
                Eval<span className="text-eval-400">Agent</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm text-xs leading-relaxed">
              Automated LLM-as-a-judge observability platform that scores agent tool runs on accuracy, latency, and token cost to prune hallucinating agents.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-eval-300 font-mono">
              <Activity className="w-3.5 h-3.5 text-eval-400" />
              <span>Compatible with CrewAI • LangGraph • AutoGen • LlamaIndex</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Features</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#pruning-alerts" className="hover:text-eval-400 transition-colors">Pruning Recommendations</a></li>
              <li><a href="#ingest-webhook" className="hover:text-eval-400 transition-colors">Ingest Webhook API</a></li>
              <li><button onClick={onOpenCab} className="text-eval-300 hover:text-white font-semibold">Join CAB (70% Off)</button></li>
              <li><span className="text-slate-500">Autonomous Agent Fleet Audit</span></li>
            </ul>
          </div>

          {/* Target SEO Index */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">SEO Index</h4>
            <ul className="space-y-1.5 text-[11px] text-slate-400 font-mono">
              <li>ai agent output evaluation dashboard</li>
              <li>llm agent benchmarker and scorer</li>
              <li>crewai langgraph agent observability</li>
              <li>llm as a judge agent evaluation</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 EvalAgent Platform. All rights reserved. Built for autonomous agent reliability.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="text-eval-400">V1 Black Car Scope Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
