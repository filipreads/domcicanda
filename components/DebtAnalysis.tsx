import React, { useState } from 'react';
import { Info, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

interface DebtItem {
  id: string;
  creditor: string;
  amount: number;
  type: string;
  desc: string;
  tooltipKey?: string;
}

const debts: DebtItem[] = [
  { 
    id: 'd1', 
    creditor: 'Stavební spořitelna (Buřinka)', 
    amount: 891000, 
    type: 'Solidární závazek',
    desc: 'Úvěr ze stavebního spoření. Jako spoludlužník ručíte za celou částku společně s exmanželem.',
    tooltipKey: 'stavebko'
  },
  { 
    id: 'd2', 
    creditor: 'Raiffeisenbank', 
    amount: 566000, 
    type: 'Exekuce',
    desc: 'Spotřebitelský úvěr, který již přešel do fáze vymáhání exekutorem. Částka narůstá o náklady exekuce.',
    tooltipKey: 'exekuce'
  },
  { 
    id: 'd3', 
    creditor: 'Home Credit', 
    amount: 437000, 
    type: 'Exekuce',
    desc: 'Nebankovní půjčka. Vysoké úroky a sankce za nesplácení.',
    tooltipKey: 'exekuce'
  },
  { 
    id: 'd4', 
    creditor: 'Výživné na děti', 
    amount: 60000, 
    type: 'Přednostní pohledávka',
    desc: 'Dlužné alimenty. Neplacení déle než 4 měsíce je trestný čin zanedbání povinné výživy.',
    tooltipKey: 'vyzivne'
  },
];

const tooltips: Record<string, string> = {
  exekuce: "Nucený výkon rozhodnutí (soudního či úředního), kterým se vymáhá splnění povinnosti (zde zaplacení dluhu).",
  stavebko: "Účelový úvěr na bydlení. V případě manželů často vzniká společný a nerozdílný závazek (solidární).",
  vyzivne: "Peníze určené na úhradu potřeb dítěte. Jde o přednostní pohledávku – má přednost před ostatními dluhy."
};

const DebtAnalysis: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const maxAmount = Math.max(...debts.map(d => d.amount));
  const totalDebt = debts.reduce((sum, d) => sum + d.amount, 0);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-8">
      {/* Chart Section */}
      <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
        <h3 className="text-white font-bold mb-6 flex items-center gap-2">
          <AlertCircle size={20} className="text-red-500" />
          Vizualizace závazků (Celkem: {(totalDebt / 1000000).toFixed(2)} mil. Kč)
        </h3>
        <div className="space-y-4">
          {debts.map((debt) => (
            <div key={debt.id} className="relative group">
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>{debt.creditor}</span>
                <span>{debt.amount.toLocaleString()} Kč</span>
              </div>
              <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-900 to-red-600 rounded-full transition-all duration-1000 ease-out group-hover:from-red-700 group-hover:to-red-500"
                  style={{ width: `${(debt.amount / maxAmount) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {debts.map((debt) => (
          <div 
            key={debt.id} 
            className={`border rounded-xl transition-all duration-300 ${
              expandedId === debt.id 
                ? 'bg-slate-800 border-red-500/50 shadow-lg shadow-red-900/10' 
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            <button 
              onClick={() => toggleExpand(debt.id)}
              className="w-full p-4 flex items-center justify-between text-left"
            >
              <div>
                <div className="font-bold text-slate-100 flex items-center gap-2">
                  {debt.creditor}
                  {debt.tooltipKey && (
                    <div className="relative group/tooltip inline-block">
                      <Info size={14} className="text-slate-500 hover:text-blue-400 cursor-help" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:block w-64 bg-slate-950 text-slate-300 text-xs p-3 rounded-lg border border-slate-700 shadow-xl z-50">
                        {tooltips[debt.tooltipKey]}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-950"></div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="text-sm text-red-400 font-mono mt-1">{debt.amount.toLocaleString()} Kč</div>
              </div>
              {expandedId === debt.id ? <ChevronUp className="text-slate-500" /> : <ChevronDown className="text-slate-500" />}
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                expandedId === debt.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 pt-0 text-slate-400 text-sm border-t border-slate-700/50 mt-2">
                <p className="mb-2"><span className="text-slate-500 font-semibold uppercase text-xs">Typ:</span> {debt.type}</p>
                <p>{debt.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebtAnalysis;