import React, { useState } from 'react';
import { AlertTriangle, Trash2, CheckCircle2, RotateCcw, TrendingDown, DollarSign, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PruningAlertBanner({ alerts, onPruneAgent }) {
  const [prunedMap, setPrunedMap] = useState({});

  const handlePrune = (alertId, agentId) => {
    setPrunedMap(prev => ({ ...prev, [alertId]: true }));
    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }
    if (onPruneAgent) {
      onPruneAgent(agentId);
    }
  };

  return (
    <section id="pruning-alerts" className="py-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-4">
          {alerts.map((alert) => {
            const isPruned = prunedMap[alert.id];

            return (
              <div
                key={alert.id}
                className={`rounded-2xl p-5 border transition-all ${
                  isPruned
                    ? 'bg-dark-900 border-emerald-500/30'
                    : 'bg-rose-950/40 border-rose-500/40 shadow-lg shadow-rose-950/30'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      isPruned
                        ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-400'
                        : 'bg-rose-900/60 border border-rose-500/50 text-rose-300 animate-pulse'
                    }`}>
                      {isPruned ? <CheckCircle2 className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                          {isPruned ? 'Agent Decommissioned' : 'Automated Pruning Recommendation'}
                        </span>
                        <span className="text-xs font-mono text-slate-400">ID: {alert.agentName}</span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                        {alert.headline}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                        <span className="flex items-center gap-1 text-rose-400 font-bold">
                          <TrendingDown className="w-3.5 h-3.5" />
                          Failure Rate: {alert.failureRate}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-amber-400">
                          <DollarSign className="w-3.5 h-3.5" />
                          Est. Bleed: {alert.weeklyWaste}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <Clock className="w-3.5 h-3.5" />
                          Avg Latency: {alert.avgLatency}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {!isPruned ? (
                      <button
                        onClick={() => handlePrune(alert.id, alert.agentId)}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-md shadow-rose-500/25 transition-all hover:scale-105"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Prune & Roll Back Agent</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-3.5 py-2 rounded-xl border border-emerald-500/30">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Rolled back to v1 baseline (Token Bleed Halted)</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
