import React, { useState, useEffect } from 'react';
import { Check, Square, Save } from 'lucide-react';

interface Task {
  id: string;
  text: string;
  category: 'urgent' | 'legal' | 'family' | 'financial';
}

const tasks: Task[] = [
  { id: 't1', text: 'Kontaktovat Úřad práce (omluvení absence)', category: 'urgent' },
  { id: 't2', text: 'Zajistit si zdravotní pojištění', category: 'urgent' },
  { id: 't3', text: 'Kontaktovat exekutora ohledně vozidla', category: 'legal' },
  { id: 't4', text: 'Odevzdat vozidlo a sepsat protokol', category: 'legal' },
  { id: 't5', text: 'Odevzdat řidičský průkaz', category: 'legal' },
  { id: 't6', text: 'Najít dluhovou poradnu', category: 'financial' },
  { id: 't7', text: 'Sepsat návrh na oddlužení (insolvence)', category: 'financial' },
  { id: 't8', text: 'Poslat první splátku výživného (min. 500 Kč)', category: 'family' },
  { id: 't9', text: 'Kontaktovat OSPOD a projevit zájem o děti', category: 'family' },
] as const;

const ActionPlan: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('crisisPlanProgress');
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    }
  }, []);

  const toggleItem = (id: string) => {
    const newItems = checkedItems.includes(id)
      ? checkedItems.filter(i => i !== id)
      : [...checkedItems, id];
    
    setCheckedItems(newItems);
    localStorage.setItem('crisisPlanProgress', JSON.stringify(newItems));
  };

  const progress = Math.round((checkedItems.length / tasks.length) * 100);

  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case 'urgent': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'legal': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'family': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
    }
  };

  const getCategoryName = (cat: string) => {
    switch(cat) {
      case 'urgent': return 'Kritické (Ihned)';
      case 'legal': return 'Právní povinnosti';
      case 'family': return 'Rodina & Děti';
      default: return 'Finance';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8 bg-slate-900 rounded-xl p-6 border border-slate-800 sticky top-4 z-40 shadow-2xl">
        <div className="flex justify-between items-end mb-2">
          <h3 className="font-bold text-white text-lg">Váš postup záchrany</h3>
          <span className={`font-mono font-bold text-xl ${progress === 100 ? 'text-emerald-500' : 'text-slate-400'}`}>
            {progress}%
          </span>
        </div>
        <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-emerald-600 to-teal-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {['urgent', 'legal', 'family', 'financial'].map((category) => {
           const categoryTasks = tasks.filter(t => (t.category || 'financial') === category);
           if (categoryTasks.length === 0) return null;

           return (
             <div key={category} className="mb-6">
               <h4 className="text-slate-400 uppercase tracking-widest font-bold text-sm mb-4 pl-2 border-l-2 border-slate-700">
                 {getCategoryName(category)}
               </h4>
               <div className="space-y-3">
                 {categoryTasks.map(task => (
                   <div 
                    key={task.id}
                    onClick={() => toggleItem(task.id)}
                    className={`
                      cursor-pointer group relative overflow-hidden p-4 rounded-xl border transition-all duration-200 flex items-center gap-4
                      ${checkedItems.includes(task.id) 
                        ? 'bg-emerald-950/30 border-emerald-900/50 opacity-60' 
                        : 'bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800'
                      }
                    `}
                   >
                     <div className={`
                       flex-shrink-0 w-6 h-6 rounded border flex items-center justify-center transition-colors
                       ${checkedItems.includes(task.id)
                         ? 'bg-emerald-500 border-emerald-500 text-slate-950'
                         : 'border-slate-500 group-hover:border-emerald-400'
                       }
                     `}>
                       {checkedItems.includes(task.id) && <Check size={16} strokeWidth={3} />}
                     </div>
                     <span className={`text-lg transition-all ${checkedItems.includes(task.id) ? 'text-emerald-400/80 line-through decoration-emerald-500/50' : 'text-slate-200'}`}>
                       {task.text}
                     </span>
                   </div>
                 ))}
               </div>
             </div>
           )
        })}
      </div>
      
      <div className="text-center mt-8 text-slate-500 text-sm flex items-center justify-center gap-2">
        <Save size={14} />
        Postup se automaticky ukládá do vašeho prohlížeče.
      </div>
    </div>
  );
};

export default ActionPlan;