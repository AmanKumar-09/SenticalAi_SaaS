import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SenticalLogo, SenticalIcon } from '@sentical/ui';
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Send,
  FileText,
  Workflow,
  Bot,
  BarChart3,
  CreditCard,
  UserPlus,
  Settings,
  ChevronLeft,
  ChevronRight,
  Bell,
  Search,
  Building2,
  Menu,
  X,
} from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Inbox', path: '/inbox', icon: MessageSquare },
  { name: 'Contacts', path: '/contacts', icon: Users },
  { name: 'Campaigns', path: '/campaigns', icon: Send },
  { name: 'Templates', path: '/templates', icon: FileText },
  { name: 'Automation', path: '/automation', icon: Workflow },
  { name: 'AI Agents', path: '/ai', icon: Bot },
  { name: 'Analytics', path: '/analytics', icon: BarChart3 },
  { name: 'Billing', path: '/billing', icon: CreditCard },
  { name: 'Team', path: '/team', icon: UserPlus },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export const DashboardShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const activeItem = NAV_ITEMS.find((item) => item.path === location.pathname) || NAV_ITEMS[0];

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-800 overflow-hidden">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col border-r border-slate-200 bg-white transition-all duration-300 shadow-sm ${
          collapsed ? 'w-20' : 'w-64'
        }`}
      >
        {/* Brand & Org Switcher */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-slate-100">
          {!collapsed ? (
            <div className="flex items-center gap-3 truncate">
              <SenticalIcon className="w-8 h-8 shrink-0" />
              <div className="truncate">
                <div className="font-extrabold text-sm tracking-tight leading-none text-[#0B4A34]">
                  Sentical <span className="text-[#12B76A]">Ai</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium mt-1">
                  <Building2 className="w-3 h-3 text-[#12B76A]" />
                  <span className="truncate">Acme Corp</span>
                </div>
              </div>
            </div>
          ) : (
            <SenticalIcon className="w-8 h-8 mx-auto" />
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#12B76A] text-white shadow-md shadow-emerald-500/20'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-[#0B4A34]'
                }`}
              >
                <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : 'text-[#12B76A]'}`} />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer User Profile */}
        <div className="p-3 border-t border-slate-100">
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-[#12B76A]/10 text-[#12B76A] border border-emerald-200 flex items-center justify-center text-xs font-extrabold">
              JD
            </div>
            {!collapsed && (
              <div className="truncate flex-1">
                <p className="text-xs font-bold text-[#0B4A34] truncate">Jane Doe</p>
                <p className="text-[10px] text-slate-500 truncate">jane@sentical.ai</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main App Layout */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 border-b border-slate-200 bg-white px-6 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <SenticalLogo size="sm" darkMode={false} />
              <span>/</span>
              <span className="text-[#0B4A34] font-bold">{activeItem.name}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden sm:block w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-400 focus:outline-none focus:border-[#12B76A] text-slate-700 font-medium"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#12B76A] rounded-full" />
            </button>

            {/* User Dropdown */}
            <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
              <div className="w-8 h-8 rounded-full bg-[#12B76A]/10 text-[#12B76A] border border-emerald-200 flex items-center justify-center font-bold text-xs">
                JD
              </div>
            </div>
          </div>
        </header>

        {/* Page Content Viewport */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#F8FAFC]">{children}</main>
      </div>
    </div>
  );
};
