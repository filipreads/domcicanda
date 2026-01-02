import React, { useState, useEffect, useRef } from 'react';
import { 
  AlertTriangle, 
  Car, 
  CreditCard, 
  Users, 
  Briefcase, 
  ShieldAlert, 
  LifeBuoy, 
  CheckCircle2, 
  ArrowDown,
  Info,
  Scale,
  Phone,
  ExternalLink,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import ScrollSection from './components/ScrollSection';
import ActionPlan from './components/ActionPlan';
import DebtAnalysis from './components/DebtAnalysis';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const contactRef = useRef<HTMLDivElement>(null);
  const actionPlanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHelp = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToActionPlan = () => actionPlanRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="bg-slate-950 text-slate-100 font-sans selection:bg-red-500 selection:text-white overflow-x-hidden">
      {/* Sticky Help Button */}
      <button 
        onClick={scrollToHelp}
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full shadow-lg shadow-emerald-900/50 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.6)] flex items-center gap-2 transition-all hover:scale-105 active:scale-95 font-bold border border-emerald-400/20 group"
      >
        <HelpCircle size={20} className="group-hover:animate-bounce" />
        Potřebuji pomoc
      </button>

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-slate-950 to-slate-950"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 mb-8 animate-bounce backdrop-blur-sm">
            <AlertTriangle size={16} />
            <span className="text-xs font-bold tracking-widest uppercase">Stav: Totální Kolaps</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent tracking-tight leading-none drop-shadow-2xl">
            Diagnóza & <br/>
            <span className="text-red-500">Krizový Plán</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Interaktivní průvodce pro řešení finanční a právní tísně.
            <br/><span className="text-slate-500 text-lg">Případová studie: Dominika D.</span>
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={scrollToActionPlan}
              className="group relative px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-slate-200 transition-all flex items-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]"
            >
              Spustit Záchranný Plán
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-slate-500 text-sm flex items-center gap-2">
               <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
               Analýza situace níže
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-600">
          <ArrowDown size={32} />
        </div>
      </div>

      {/* Intro Context */}
      <div className="py-24 px-6 max-w-4xl mx-auto text-center border-y border-slate-900 bg-slate-950/50 backdrop-blur-sm">
        <p className="text-3xl text-slate-300 font-serif italic leading-relaxed">
          "Zatímco exmanžel už naskočil do záchranného člunu jménem Insolvence, 
          Dominika stále plave v rozbouřeném moři bez vesty."
        </p>
      </div>

      {/* PART 1: DIAGNOSIS */}
      <div className="relative">
        <div className="sticky top-0 h-1.5 w-full bg-slate-900 z-50">
           <div className="h-full bg-gradient-to-r from-red-600 to-orange-500 shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all duration-150" style={{ width: `${Math.min((scrollY / 2500) * 100, 100)}%` }}></div>
        </div>

        <div className="py-24 text-center">
          <h2 className="text-5xl font-black uppercase tracking-tighter text-red-600/20 select-none">Část 1: Kde všude hoří</h2>
          <p className="text-slate-500 -mt-8 font-bold text-xl uppercase tracking-widest">Analýza Dluhové Pasti</p>
        </div>

        <ScrollSection title="Dluhová past" icon={CreditCard}>
          <p className="mb-8 text-slate-400">
            Detailní rozpis závazků, které tvoří smrtící koktejl úroků a exekucí.
            <span className="text-sm block mt-2 text-slate-500">*Klikněte na položky pro detaily.</span>
          </p>
          <DebtAnalysis />
        </ScrollSection>

        <ScrollSection title="Auto jako koule u nohy" icon={Car}>
          <p className="mb-4 font-bold text-white text-xl">Mercedes-Benz B 180 CDI</p>
          <div className="space-y-4">
            <div className="p-6 bg-red-950/30 rounded-2xl border border-red-900/50 flex gap-4">
              <ShieldAlert className="text-red-500 shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-red-400 mb-2">Zabaveno & Hledáno</h4>
                <p>Exekutoři auto sepsali. Dominika ho nesmí prodat ani zničit. Odmítání vydání vozu může být kvalifikováno jako trestný čin.</p>
              </div>
            </div>
            <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700">
              <h4 className="font-bold text-white mb-2">Generátor pokut</h4>
              <p>Auto nemá povinné ručení (dluh u ČKP narůstá denně). Každá jízda je risk. Auto sbírá pokuty za parkování a rychlost.</p>
            </div>
          </div>
        </ScrollSection>

        <ScrollSection title="Ztráta kontroly" icon={Scale}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/20 p-6 rounded-2xl border border-slate-700 hover:border-red-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Řidičský průkaz
              </h3>
              <p>Exekučně pozastaven. Dominika ho neodevzdala a dál riskuje trestný čin maření výkonu úředního rozhodnutí při každém usednutí za volant.</p>
            </div>
            <div className="bg-slate-800/20 p-6 rounded-2xl border border-slate-700 hover:border-red-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Úřad práce
              </h3>
              <p>Hrozí sankční vyřazení pro neomluvenou schůzku. To by znamenalo ztrátu podpory a nutnost hradit si zdravotní pojištění samoplátcem.</p>
            </div>
          </div>
        </ScrollSection>
      </div>

      {/* PART 2: TREATMENT */}
      <div ref={actionPlanRef} className="relative bg-slate-950 py-32">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 to-slate-900"></div>
        <div className="bg-slate-900 py-10">
            <div className="max-w-4xl mx-auto px-6 mb-16 text-center">
            <h2 className="text-5xl font-black text-emerald-500 mb-6 uppercase tracking-tight">Část 2: Záchranný Plán</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                „Dominika je ve stavu, kdy už nelze zachránit majetek. Hrajeme o to, aby neskončila ve vězení. Postupujte podle kroků níže.“
            </p>
            </div>

            <ScrollSection title="Interaktivní Checklist" icon={CheckCircle2} color="border-emerald-500" className="!min-h-0">
                <ActionPlan />
            </ScrollSection>
        </div>
        
        <div className="mt-20">
            <ScrollSection title="Časová osa Insolvence" icon={LifeBuoy} color="border-emerald-500">
            <p className="mb-8">Jediná cesta ven. Oddlužení trvá standardně 3 až 5 let. Zde je orientační časová osa procesu.</p>
            
            <div className="relative py-8 px-2 md:px-8">
                {/* Horizontal Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-700 -translate-y-1/2 rounded-full hidden md:block"></div>
                <div className="absolute left-6 top-0 h-full w-1 bg-slate-700 md:hidden"></div>

                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-10">
                    {/* Node 1 */}
                    <div className="flex md:flex-col items-center gap-4 md:gap-2">
                        <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-emerald-500 flex items-center justify-center font-bold text-emerald-500 shrink-0">1</div>
                        <div className="md:text-center text-left">
                            <h4 className="font-bold text-white">Podání návrhu</h4>
                            <p className="text-xs text-slate-400">Okamžité zastavení úročení</p>
                        </div>
                    </div>
                    
                    {/* Node 2 */}
                    <div className="flex md:flex-col items-center gap-4 md:gap-2">
                        <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-emerald-500/70 flex items-center justify-center font-bold text-emerald-500/70 shrink-0">2</div>
                        <div className="md:text-center text-left">
                            <h4 className="font-bold text-white">Schválení</h4>
                            <p className="text-xs text-slate-400">Cca 2-4 měsíce</p>
                        </div>
                    </div>

                    {/* Node 3 */}
                    <div className="flex md:flex-col items-center gap-4 md:gap-2">
                        <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-slate-600 flex items-center justify-center font-bold text-slate-400 shrink-0">3</div>
                        <div className="md:text-center text-left">
                            <h4 className="font-bold text-white">1. Rok</h4>
                            <p className="text-xs text-slate-400">Prodej majetku, srážky</p>
                        </div>
                    </div>

                    {/* Node 4 */}
                    <div className="flex md:flex-col items-center gap-4 md:gap-2">
                        <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-slate-600 flex items-center justify-center font-bold text-slate-400 shrink-0">4</div>
                        <div className="md:text-center text-left">
                            <h4 className="font-bold text-white">3. Rok</h4>
                            <p className="text-xs text-slate-400">Šance na konec při 60%</p>
                        </div>
                    </div>

                    {/* Node 5 */}
                    <div className="flex md:flex-col items-center gap-4 md:gap-2">
                        <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-slate-700 flex items-center justify-center font-bold text-slate-500 shrink-0">5</div>
                        <div className="md:text-center text-left">
                            <h4 className="font-bold text-white">5. Rok</h4>
                            <p className="text-xs text-slate-400">Osvobození od zbytku</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 bg-emerald-900/10 border border-emerald-500/20 p-4 rounded-xl text-center">
                <p className="text-emerald-200 text-sm">
                    <strong>Cíl:</strong> Vstoupit do procesu co nejdříve. Každý měsíc otálení zvyšuje dluh o tisíce korun na úrocích.
                </p>
            </div>
            </ScrollSection>
        </div>
      </div>

      {/* HELP RESOURCES SECTION */}
      <div ref={contactRef} className="bg-slate-950 py-20 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-3xl font-bold text-white mb-2 text-center">Bezplatná pomoc</h2>
           <p className="text-slate-400 text-center mb-10 max-w-xl mx-auto">Nevíte si rady? Obraťte se na odborníky zdarma. Tyto organizace pomáhají lidem v dluhové pasti.</p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Člověk v tísni */}
              <div className="group bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-emerald-500 transition-all hover:-translate-y-1 shadow-2xl">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">Člověk v tísni</h3>
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    Jeden z největších poskytovatelů dluhového poradenství. Pomohou s insolvenčním návrhem, jednáním s exekutory i soudy.
                  </p>
                  <div className="flex items-center gap-3 text-white font-mono mb-4 bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <Phone className="text-emerald-500" size={18} /> 
                      <span className="font-bold">770 600 800</span>
                  </div>
                   <a href="https://www.clovekvtisni.cz/co-delame/socialni-prace-a-poradenstvi/dluhove-poradenstvi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-emerald-500 hover:text-emerald-300 font-bold uppercase tracking-wide transition-colors">
                      Webové stránky <ArrowRight size={14} />
                  </a>
              </div>

              {/* Card 2: Poradna při finanční tísni */}
              <div className="group bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-emerald-500 transition-all hover:-translate-y-1 shadow-2xl">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">Poradna při finanční tísni</h3>
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    Odborná a bezplatná pomoc pro dlužníky. Specializují se na oddlužení a finanční gramotnost.
                  </p>
                  <div className="flex items-center gap-3 text-white font-mono mb-4 bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <Phone className="text-emerald-500" size={18} /> 
                      <span className="font-bold">800 722 722</span>
                  </div>
                  <a href="https://www.financnitisen.cz/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-emerald-500 hover:text-emerald-300 font-bold uppercase tracking-wide transition-colors">
                      Webové stránky <ArrowRight size={14} />
                  </a>
              </div>
           </div>
        </div>
      </div>

      {/* Final Summary */}
      <footer className="bg-slate-950 py-24 px-6 border-t border-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-24 h-1 bg-red-600 mx-auto mb-12 rounded-full"></div>
          <h2 className="text-4xl font-black mb-8 text-white">Dominiko, loď se potopila.</h2>
          <div className="space-y-6 text-xl text-slate-300 font-light">
            <p>1. Běžte na Úřad práce, ať vás nevyhodí.</p>
            <p>2. Odevzdejte auto exekutorům, jen vám dělá problémy.</p>
            <p>3. Najděte si dluhovou poradnu a podejte návrh na osobní bankrot.</p>
            <p>4. Začněte komunikovat ohledně dětí.</p>
          </div>
          
          <div className="mt-16 p-8 border border-slate-800 rounded-3xl bg-slate-900/50 backdrop-blur-sm">
            <Info className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-500 text-xs uppercase tracking-widest leading-relaxed mb-4">
              Tento dokument slouží jako právní a krizový přehled na základě analýzy aktuální situace dlužnice. 
              Všechna data vycházejí z doručených usnesení, exekučních příkazů a soudních rozhodnutí.
            </p>
            <p className="text-slate-400 text-sm font-bold border-t border-slate-800 pt-4">
              Upozornění: Tato aplikace neposkytuje profesionální právní ani finanční poradenství. Informace zde uvedené slouží pouze pro vzdělávací a informační účely. Pro řešení vaší konkrétní situace se vždy obraťte na kvalifikované odborníky (advokáty, insolvenční správce, akreditované dluhové poradny).
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;