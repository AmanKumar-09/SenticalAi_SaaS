import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { SenticalLogo } from '@sentical/ui';

const PagePlaceholder: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="min-h-screen flex flex-col justify-between bg-white text-slate-800">
    {/* Navigation Header */}
    <header className="border-b border-slate-100 bg-white/90 backdrop-blur sticky top-0 z-50 px-8 py-4 flex items-center justify-between shadow-sm">
      <Link to="/" className="flex items-center">
        <SenticalLogo size="md" darkMode={false} />
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
        <Link to="/features" className="hover:text-[#12B76A] transition-colors">Features</Link>
        <Link to="/solutions" className="hover:text-[#12B76A] transition-colors">Solutions</Link>
        <Link to="/integrations" className="hover:text-[#12B76A] transition-colors">Integrations</Link>
        <Link to="/pricing" className="hover:text-[#12B76A] transition-colors">Pricing</Link>
        <Link to="/login" className="hover:text-[#12B76A] transition-colors">Login</Link>
        <Link
          to="/register"
          className="px-5 py-2.5 bg-[#12B76A] hover:bg-[#0ea55e] text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
        >
          Start Free Trial
        </Link>
      </nav>
    </header>

    {/* Hero Main Content */}
    <main className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-4xl mx-auto my-12">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#F0FDF4] text-[#0B4A34] border border-emerald-200 mb-6 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#12B76A] animate-pulse" />
        BUSINESS GROWTH ON WHATSAPP
      </div>
      <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#0B4A34] mb-6 leading-tight">
        {title}
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mb-10 leading-relaxed font-normal">
        {description}
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/register"
          className="px-8 py-3.5 bg-[#12B76A] hover:bg-[#0ea55e] text-white font-bold rounded-xl shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02]"
        >
          Start Free Trial
        </Link>
        <Link
          to="/demo"
          className="px-8 py-3.5 border border-slate-200 bg-white hover:bg-slate-50 text-[#0B4A34] font-bold rounded-xl shadow-sm transition-all"
        >
          Book Live Demo
        </Link>
      </div>
    </main>

    {/* Footer */}
    <footer className="border-t border-slate-100 bg-[#F8FAFC] py-8 px-6 text-xs text-slate-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <SenticalLogo size="sm" darkMode={false} />
        <p>&copy; {new Date().getFullYear()} Sentical AI Inc. All rights reserved.</p>
        <div className="flex gap-6 font-medium text-slate-600">
          <Link to="/terms" className="hover:text-[#12B76A]">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-[#12B76A]">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  </div>
);

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PagePlaceholder title="Scale Business Growth on WhatsApp with AI" description="Automate sales pipelines, multi-agent support inboxes, and targeted broadcasts with Sentical AI." />} />
      <Route path="/features" element={<PagePlaceholder title="Platform Features" description="Explore multi-agent inboxes, automated broadcast campaigns, workflow automation, and AI agents." />} />
      <Route path="/solutions" element={<PagePlaceholder title="Industry Solutions" description="Tailored engagement automation for Ecommerce, B2B SaaS, Real Estate, and Healthcare." />} />
      <Route path="/integrations" element={<PagePlaceholder title="Ecosystem Integrations" description="Seamlessly connect WhatsApp Business with CRM systems, webhooks, and payment gateways." />} />
      <Route path="/pricing" element={<PagePlaceholder title="Transparent Pricing" description="Flexible plans tailored for growing businesses and enterprise automation needs." />} />
      <Route path="/demo" element={<PagePlaceholder title="Request a Live Demo" description="Schedule a guided tour with our WhatsApp Automation strategy team." />} />
      <Route path="/about" element={<PagePlaceholder title="About Sentical AI" description="Empowering global businesses with intelligent WhatsApp conversation infrastructure." />} />
      <Route path="/resources" element={<PagePlaceholder title="Resources & Guides" description="Documentation, WhatsApp API tutorials, and growth strategies." />} />
      <Route path="/contact" element={<PagePlaceholder title="Contact Our Team" description="We're here to answer your technical questions and enterprise inquiries." />} />
      <Route path="/faq" element={<PagePlaceholder title="Frequently Asked Questions" description="Everything you need to know about Meta Cloud API, setup, and billing." />} />
      <Route path="/login" element={<PagePlaceholder title="Log in to Sentical AI" description="Enter your credentials to access your SaaS dashboard." />} />
      <Route path="/register" element={<PagePlaceholder title="Create Your Sentical AI Account" description="Start your 14-day free trial. No credit card required." />} />
      <Route path="/forgot-password" element={<PagePlaceholder title="Forgot Password" description="Enter your registered email to receive a password reset link." />} />
      <Route path="/reset-password" element={<PagePlaceholder title="Reset Password" description="Create a new password for your Sentical AI account." />} />
      <Route path="/verify-email" element={<PagePlaceholder title="Verify Email" description="Please check your inbox to verify your email address." />} />
      <Route path="/terms" element={<PagePlaceholder title="Terms of Service" description="Read our platform terms and usage guidelines." />} />
      <Route path="/privacy" element={<PagePlaceholder title="Privacy Policy" description="Learn how we protect and manage your data." />} />
    </Routes>
  );
};
