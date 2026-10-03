import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardShell } from '../components/layout/DashboardShell';

const PageView: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <DashboardShell>
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-[#0B4A34]">{title}</h1>
        <p className="text-sm text-slate-500 mt-1 font-normal">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status</p>
          <p className="text-xl font-extrabold text-[#12B76A] mt-2">Active</p>
        </div>
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Queue Health</p>
          <p className="text-xl font-extrabold text-[#0B4A34] mt-2">Optimal (0ms lag)</p>
        </div>
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Connected WABA</p>
          <p className="text-xl font-extrabold text-slate-700 mt-2">+1 (800) 555-0199</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200/80 rounded-2xl p-12 text-center border-dashed">
        <p className="text-slate-500 font-medium text-sm">{title} module initial foundation ready.</p>
      </div>
    </div>
  </DashboardShell>
);

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageView title="Dashboard Overview" subtitle="Real-time WhatsApp engagement metrics and queue health." />} />
      <Route path="/inbox" element={<PageView title="Multi-Agent Live Inbox" subtitle="Manage live WhatsApp customer conversations and automated bot transfers." />} />
      <Route path="/contacts" element={<PageView title="Contact Directory" subtitle="Manage customer segments, tags, and audience attributes." />} />
      <Route path="/campaigns" element={<PageView title="Broadcast Campaigns" subtitle="Schedule and track WhatsApp template broadcasts." />} />
      <Route path="/templates" element={<PageView title="WhatsApp Templates" subtitle="Manage Meta-approved template messages and dynamic variables." />} />
      <Route path="/automation" element={<PageView title="Workflow Automation" subtitle="Visual trigger-condition-action workflow builder." />} />
      <Route path="/ai" element={<PageView title="AI Agents & Knowledge Base" subtitle="Configure OpenAI & Anthropic AI response bots." />} />
      <Route path="/analytics" element={<PageView title="Analytics & Reports" subtitle="Delivery rates, read receipts, and support agent performance." />} />
      <Route path="/billing" element={<PageView title="Billing & Subscriptions" subtitle="Manage subscription tier, payment methods, and message credits." />} />
      <Route path="/team" element={<PageView title="Team & Permissions" subtitle="Invite team members and assign RBAC roles." />} />
      <Route path="/settings" element={<PageView title="Organization Settings" subtitle="Configure Meta WABA credentials, webhooks, and API keys." />} />
    </Routes>
  );
};
