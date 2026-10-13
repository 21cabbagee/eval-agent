import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Gauge, ArrowRight, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CabModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    framework: 'CrewAI / LangGraph',
    monthlySpend: '$2,500 - $10,000 / month',
    painPoint: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="glass-panel-glow w-full max-w-lg rounded-2xl p-6 sm:p-8 relative border-eval-500/40 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-dark-800 border border-white/5"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-eval-500/20 text-eval-300 text-xs font-bold uppercase tracking-wider mb-3 border border-eval-500/30">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Customer Advisory Board (Cohort 1)</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              Join the EvalAgent Founding CAB
            </h2>

            {/* Verbatim Outreach Pitch Script */}
            <div className="p-3.5 rounded-xl bg-eval-950/40 border border-eval-500/30 mb-6 text-xs text-slate-200 italic leading-relaxed">
              "We are assembling a 10-member Customer Advisory Board (CAB) for EvalAgent to solve this exact bottleneck. We are offering a <strong>70% lifetime platform discount ($45/mo instead of $149/mo)</strong> and dedicated onboarding for our first cohort."
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:border-eval-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@agencyai.dev"
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:border-eval-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Framework</label>
                  <select
                    value={formData.framework}
                    onChange={(e) => setFormData({ ...formData, framework: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:border-eval-500 focus:outline-none"
                  >
                    <option value="CrewAI / LangGraph">CrewAI / LangGraph</option>
                    <option value="AutoGen / Semantic Kernel">AutoGen / Semantic Kernel</option>
                    <option value="Custom Agentic Python SDK">Custom Python SDK</option>
                    <option value="LlamaIndex Workflows">LlamaIndex Workflows</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Monthly LLM Spend</label>
                  <select
                    value={formData.monthlySpend}
                    onChange={(e) => setFormData({ ...formData, monthlySpend: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:border-eval-500 focus:outline-none"
                  >
                    <option value="$1,000 - $2,500 / month">$1k - $2.5k / mo</option>
                    <option value="$2,500 - $10,000 / month">$2.5k - $10k / mo</option>
                    <option value="$10,000+ / month">$10k+ / mo (High Volume)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Where do your agents silently fail most frequently?</label>
                <textarea
                  rows={2}
                  value={formData.painPoint}
                  onChange={(e) => setFormData({ ...formData, painPoint: e.target.value })}
                  placeholder="e.g. Scraping agents getting stuck in retry loops and burning $40 on single runs..."
                  className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:border-eval-500 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-eval-600 via-teal-600 to-cyan-600 hover:from-eval-500 hover:to-cyan-500 text-white font-bold text-xs shadow-lg shadow-eval-500/30 transition-all hover:scale-[1.01]"
                >
                  <span>Claim 70% Lifetime Founding Seat ($45/mo)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Strict Limit: Only 10 seats allocated for Cohort 1</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Welcome to the EvalAgent CAB!</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto mb-6 leading-relaxed">
              We've locked in your 70% lifetime platform discount code for <strong>{formData.email}</strong>. Our telemetry infrastructure architect will email you within 24 hours with your dedicated high-throughput API key.
            </p>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-750 text-white text-xs font-semibold border border-white/10 transition-all"
            >
              Return to Leaderboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
