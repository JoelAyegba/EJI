import React, { useState, useMemo } from 'react';
import { courtReports, type CourtReport } from '../data/mockData';
import { Search, Eye, Award, Calendar } from 'lucide-react';
import { Seo } from '../components/Seo';
import { PAGE_SEO } from '../seoConfig';

export const TrialWatch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Ongoing' | 'Resolved' | 'Adjourned'>('All');
  const [selectedCase, setSelectedCase] = useState<CourtReport | null>(null);

  const filteredReports = useMemo(() => {
    return courtReports.filter((report) => {
      const matchesSearch = 
        report.caseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.court.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = statusFilter === 'All' || report.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  const averageTransparency = useMemo(() => {
    if (courtReports.length === 0) return 0;
    const total = courtReports.reduce((sum, r) => sum + r.transparencyScore, 0);
    return Math.round(total / courtReports.length);
  }, []);

  return (
    <div className="bg-white py-20 font-sans">
      <Seo {...PAGE_SEO.trialWatch} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-slate-100">
          <div className="max-w-3xl">
            <span className="text-advocacy-gold text-xs uppercase tracking-[0.25em] font-bold">Judicial Transparency Portal</span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-slate-900 mt-3 mb-4 leading-tight">
              Trial Watch.
            </h1>
            <p className="text-slate-655 text-base sm:text-lg leading-relaxed font-sans">
              Monitoring high-profile citizen trials and municipal anti-corruption litigation. We deploy legal auditors daily to document courtroom procedure, dockets, and transparency scores.
            </p>
          </div>

          {/* Average Transparency Score Gauge */}
          <div className="bg-white border border-slate-200 p-6 rounded-2xl flex items-center space-x-6 shrink-0 lg:w-96">
            <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-slate-50 border border-slate-205">
              <span className="font-serif text-2xl font-black text-advocacy-gold">{averageTransparency}%</span>
              {/* Spinning circular border */}
              <div className="absolute inset-0 rounded-full border-2 border-advocacy-gold/10 border-t-advocacy-gold animate-spin duration-[4s]"></div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-550 uppercase tracking-wider">
                <Award className="h-4 w-4 text-advocacy-gold" />
                <span>Audited Transparency Index</span>
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">Cumulative courtroom index based on procedural availability, timely hearings, and open records.</p>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by case name, court, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
            {(['All', 'Ongoing', 'Resolved', 'Adjourned'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                className={`px-4 py-2.5 rounded-lg border text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                  statusFilter === tab
                    ? 'bg-justice-blue border-advocacy-gold text-advocacy-gold'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-800 hover:text-slate-950'
                }`}
              >
                {tab} Cases
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: Left = Case List, Right = Details Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cases Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs uppercase font-mono tracking-widest text-slate-500 mb-2">
              Showing {filteredReports.length} observed litigation files
            </div>

            {filteredReports.length === 0 ? (
              <div className="bg-white border border-slate-200 p-12 text-center rounded-2xl">
                <p className="text-slate-500">No observed trials match your criteria. Try adjusting filters or search queries.</p>
              </div>
            ) : (
              filteredReports.map((report) => {
                const isSelected = selectedCase?.id === report.id;
                
                // Color coding index scores
                let scoreColor = 'text-action-red';
                let scoreBg = 'bg-action-red/10 border-action-red/20';
                if (report.transparencyScore >= 80) {
                  scoreColor = 'text-emerald-500';
                  scoreBg = 'bg-emerald-500/10 border-emerald-500/20';
                } else if (report.transparencyScore >= 50) {
                  scoreColor = 'text-advocacy-gold';
                  scoreBg = 'bg-advocacy-gold/10 border-advocacy-gold/20';
                }

                return (
                  <div
                    key={report.id}
                    onClick={() => setSelectedCase(report)}
                    className={`bg-white border rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
                      isSelected 
                        ? 'border-advocacy-gold shadow-lg shadow-advocacy-gold/5' 
                        : 'border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] uppercase font-mono text-slate-500">{report.category}</span>
                        <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                        <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${
                          report.status === 'Resolved' ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' :
                          report.status === 'Ongoing' ? 'bg-sky-500/10 text-sky-650 border-sky-500/20' :
                          'bg-amber-500/10 text-amber-650 border-amber-500/20'
                        }`}>
                          {report.status}
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-justice-blue">
                        {report.caseName}
                      </h3>
                      
                      <p className="text-xs text-slate-500 font-sans leading-relaxed">
                        {report.court} &bull; Judge: {report.judge}
                      </p>
                    </div>

                    <div className={`px-4 py-2 border rounded-xl flex flex-col items-center justify-center shrink-0 w-24 ${scoreBg}`}>
                      <span className="text-[9px] uppercase tracking-wider text-slate-550 font-mono">Index Score</span>
                      <span className={`text-lg font-black font-mono ${scoreColor}`}>{report.transparencyScore}%</span>
                    </div>

                  </div>
                );
              })
            )}
          </div>

          {/* Details Column Spotlight */}
          <div className="lg:col-span-5 sticky top-24">
            {selectedCase ? (
              <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-advocacy-gold/5 rounded-full blur-3xl"></div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-advocacy-gold font-mono text-xs uppercase tracking-wider font-bold">
                    <Eye className="h-4 w-4 shrink-0" />
                    <span>Case Auditor Docket</span>
                  </div>

                  <h2 className="font-serif text-2xl font-bold text-slate-900 leading-tight">
                    {selectedCase.caseName}
                  </h2>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 text-xs font-sans">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Jurisdiction:</span>
                      <span className="text-slate-900 font-bold text-right">{selectedCase.court}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Presiding Officer:</span>
                      <span className="text-slate-900 font-bold">{selectedCase.judge}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Audit Status:</span>
                      <span className="text-slate-900 font-bold uppercase tracking-wider">{selectedCase.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Last Observation:</span>
                      <span className="text-slate-900 font-bold flex items-center space-x-1">
                        <Calendar className="h-3 w-3 text-advocacy-gold" />
                        <span>{selectedCase.dateObserved}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-slate-850 text-xs uppercase tracking-widest font-bold">Auditor Observation Notes:</h4>
                  <p className="text-slate-650 text-sm leading-relaxed font-sans font-light">
                    {selectedCase.observerNotes}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-6 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>File ID: EJI-TW-{selectedCase.id}</span>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); alert('Case audit PDF download started.'); }}
                    className="text-advocacy-gold hover:text-slate-900 transition-colors uppercase font-bold tracking-wider"
                  >
                    Download Audit PDF
                  </a>
                </div>

              </div>
            ) : (
              <div className="bg-slate-50 border border-slate-200 border-dashed rounded-3xl p-12 text-center text-slate-500 space-y-3">
                <div className="p-3 bg-white border border-slate-205 rounded-xl w-fit mx-auto text-slate-400">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-sans font-bold text-slate-900 text-base">Audit Panel Spotlight</h3>
                <p className="text-xs max-w-xs mx-auto leading-relaxed">Select a court monitoring card from dockets list to review specific observer logs, scheduling audits, and full transparency scores.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
