import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PruningAlertBanner from './components/PruningAlertBanner';
import AgentLeaderboard from './components/AgentLeaderboard';
import IngestWebhookDeck from './components/IngestWebhookDeck';
import CabModal from './components/CabModal';
import Footer from './components/Footer';
import { INITIAL_AGENTS, MOCK_PRUNING_ALERTS } from './data/mockAgents';

export default function App() {
  const [agents, setAgents] = useState(INITIAL_AGENTS);
  const [alerts, setAlerts] = useState(MOCK_PRUNING_ALERTS);
  const [isCabOpen, setIsCabOpen] = useState(false);

  const handlePruneAgent = (agentId) => {
    setAgents(prev =>
      prev.map(agent => {
        if (agent.id === agentId) {
          return {
            ...agent,
            status: 'healthy',
            successRate: 94.2,
            accuracyScore: 89,
            hallucinationRate: 2.4,
            avgCostPerRun: '$0.045',
            avgLatency: '2.1s',
            recommendation: 'Rolled back to v1 baseline. Token bleed stopped.'
          };
        }
        return agent;
      })
    );
  };

  const handleAddNewRun = (newAgent) => {
    setAgents(prev => [newAgent, ...prev]);
  };

  const scrollToAlerts = () => {
    document.getElementById('pruning-alerts')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWebhook = () => {
    document.getElementById('ingest-webhook')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-eval-500/30 selection:text-white">
      {/* Navigation Header */}
      <Header onOpenCab={() => setIsCabOpen(true)} />

      {/* Main Container */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onJumpToAlert={scrollToAlerts}
          onJumpToWebhook={scrollToWebhook}
        />

        {/* Automated Pruning Recommendations Banner */}
        <PruningAlertBanner
          alerts={alerts}
          onPruneAgent={handlePruneAgent}
        />

        {/* Agent Leaderboard & Detailed Rubrics */}
        <AgentLeaderboard agents={agents} />

        {/* Live Ingest Webhook Playground */}
        <IngestWebhookDeck onAddNewRun={handleAddNewRun} />
      </main>

      {/* Footer */}
      <Footer onOpenCab={() => setIsCabOpen(true)} />

      {/* Founding CAB Modal */}
      <CabModal
        isOpen={isCabOpen}
        onClose={() => setIsCabOpen(false)}
      />
    </div>
  );
}
