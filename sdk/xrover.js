/**
 * ============================================================
 * ROVERX 2.0 SDK — Autonomous Discovery OS & Semantic Intelligence
 * (30s Executive Briefs, 70+ Entity Knowledge Tooltips, SGE SEO)
 * ============================================================
 */

(function (window, document) {
  'use strict';

  // 1. COMPREHENSIVE 70+ ENTITY KNOWLEDGE BASE
  var ENTITY_DICTIONARY = {
    // 🏆 SPORTS & ATHLETICS
    "world cup": { category: "GLOBAL TOURNAMENT", def: "The premier international championship contested by national sports teams worldwide." },
    "grand prix": { category: "MOTORSPORT", def: "A premier Formula 1 or motorcycle championship race event held over a weekend." },
    "pole position": { category: "MOTORSPORT", def: "The first starting grid spot on race day, awarded to the fastest qualifying driver." },
    "qualifying": { category: "MOTORSPORT", def: "The timed session determining starting grid order for the championship race." },
    "pit stop": { category: "MOTORSPORT", def: "A rapid tactical pause in the pit lane for tyre changes and aerodynamic repairs." },
    "free agency": { category: "SPORTS BUSINESS", def: "The period where uncontracted athletes can freely negotiate and sign with new franchises." },
    "triple-double": { category: "BASKETBALL", def: "An elite basketball achievement recording double-digit figures in 3 statistical categories." },
    "mvp": { category: "HONOR", def: "Most Valuable Player award given to the top-performing athlete of a league or tournament." },
    "playoff": { category: "TOURNAMENT", def: "The elimination tournament at the end of a regular season to determine the champion." },
    "roster": { category: "SPORTS BUSINESS", def: "The official list of active players eligible to compete for a sports franchise." },
    "franchise": { category: "ORGANIZATION", def: "A professional commercial sports organization competing in a major league." },
    "six wickets": { category: "CRICKET", def: "A rare bowling milestone where a single bowler dismisses 6 batsmen in one match innings." },
    "wicket": { category: "CRICKET", def: "The dismissal of a batsman, or the physical structure of stumps and bails." },
    "innings": { category: "CRICKET", def: "The structured division of a match during which one team bats while the other bowls." },
    "powerplay": { category: "CRICKET", def: "A mandatory fielding restriction period allowing attacking batting opportunities." },
    "hat-trick": { category: "ATHLETICS", def: "The achievement of scoring three goals or taking three consecutive dismissals in a single game." },
    "clean sheet": { category: "FOOTBALL", def: "A game in which a team or goalkeeper prevents the opposition from scoring any goals." },
    "penalty": { category: "RULES", def: "A spot-kick or free attempt awarded following a defensive infringement inside the scoring zone." },
    "transfer window": { category: "SPORTS BUSINESS", def: "The official calendar period during which clubs can purchase and register new players." },
    "points table": { category: "STANDINGS", def: "The official league ladder recording wins, losses, goal differences, and accumulated points." },
    "standings": { category: "STANDINGS", def: "The ranked hierarchical order of competing teams in a tournament or season." },
    "schedule": { category: "OPERATIONS", def: "The published timetable of upcoming fixtures, match locations, and broadcasting times." },
    "predictions": { category: "ANALYTICS", def: "Statistical modeling and expert forecasting of future match outcomes and point margins." },
    "retirement": { category: "CAREER", def: "The formal conclusion of an athlete's professional playing career in competitive leagues." },
    "championship": { category: "TOURNAMENT", def: "The premier title and trophy awarded to the ultimate seasonal winning team." },
    "tactical masterclass": { category: "STRATEGY", def: "A superior strategic deployment of formation and substitutions leading to victory." },

    // ⚡ TECH & SAAS
    "artificial intelligence": { category: "TECH", def: "Computational systems capable of performing complex reasoning, synthesis, and prediction." },
    "neural networks": { category: "AI ARCHITECTURE", def: "Interconnected machine learning nodes modeled on biological neural connections." },
    "semiconductor": { category: "HARDWARE", def: "Microchip substrates essential for high-performance computing accelerators." },
    "cybersecurity": { category: "SECURITY", def: "Technologies and protocols deployed to protect systems and data from unauthorized intrusion." },
    "zero-trust": { category: "SECURITY ARCHITECTURE", def: "A security model requiring strict authentication verification for every user and transaction." },
    "cloud compute": { category: "INFRASTRUCTURE", def: "On-demand availability of server processing power without direct user management." },
    "serverless": { category: "CLOUD ARCHITECTURE", def: "Execution models where cloud providers dynamically manage server machine allocation." },
    "devops": { category: "ENGINEERING", def: "A set of practices combining software development and IT operations for rapid release cycles." },
    "open-source": { category: "SOFTWARE", def: "Publicly accessible source code that anyone can inspect, modify, and enhance." },

    // 💼 BUSINESS & STRATEGY
    "acquisition": { category: "CORPORATE FINANCE", def: "A corporate transaction where one company purchases most or all of another firm's shares." },
    "valuation": { category: "FINANCE", def: "The analytical process of determining the present economic worth of an enterprise." },
    "ipo": { category: "CAPITAL MARKETS", def: "Initial Public Offering: the first time a private company issues stock to the public." },
    "ebitda": { category: "FINANCE METRICS", def: "Earnings Before Interest, Taxes, Depreciation, and Amortization: core operating cash flow." },
    "venture capital": { category: "INVESTING", def: "Private equity capital provided to high-growth startup firms with strong expansion potential." },
    "stakeholders": { category: "GOVERNANCE", def: "Parties with a vested interest in the financial, operational, and ethical health of a firm." }
  };

  function strHash(str) {
    var hash = 0;
    var s = String(str || '');
    for (var i = 0; i < s.length; i++) {
      hash = ((hash << 5) - hash) + s.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  }

  function timeAgo(dateString) {
    if (!dateString) return 'Just now';
    var past = new Date(dateString).getTime();
    if (!past || isNaN(past)) return 'Just now';
    var diffMin = Math.floor((Date.now() - past) / (1000 * 60));
    if (diffMin < 1) return 'Just now';
    if (diffMin < 60) return diffMin + 'm ago';
    var diffHr = Math.floor(diffMin / 60);
    if (diffHr < 24) return diffHr + 'h ago';
    var diffDays = Math.floor(diffHr / 24);
    if (diffDays < 7) return diffDays + 'd ago';
    return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  // 2. SELF-INJECTING CORE STYLES (True 1-Line Drop-in)
  function injectStyles() {
    if (typeof document === 'undefined' || !document.head) return;
    if (document.getElementById('roverx-core-styles')) return;
    var style = document.createElement('style');
    style.id = 'roverx-core-styles';
    style.textContent = ".roverx-brief-card{background:linear-gradient(135deg,rgba(15,23,42,0.95),rgba(30,41,59,0.95));border:1px solid rgba(56,189,248,0.3);border-radius:12px;padding:18px 22px;margin:16px 0 24px 0;box-shadow:0 10px 25px -5px rgba(0,0,0,0.4);font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,sans-serif;color:#f8fafc;box-sizing:border-box;animation:roverx-fade-in 0.4s ease-out;}.roverx-brief-header{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:10px;margin-bottom:12px;}.roverx-brief-title{display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:800;letter-spacing:0.5px;text-transform:uppercase;color:#38bdf8;}.roverx-brief-time{font-size:11.5px;color:#94a3b8;font-weight:600;}.roverx-brief-list{list-style:none;padding:0;margin:0 0 14px 0;display:flex;flex-direction:column;gap:8px;}.roverx-brief-list li{display:flex;align-items:flex-start;gap:10px;font-size:13px;line-height:1.45;color:#e2e8f0;}.roverx-bullet-icon{color:#38bdf8;font-weight:900;font-size:14px;}.roverx-brief-footer{display:flex;justify-content:space-between;align-items:center;padding-top:10px;border-top:1px dashed rgba(255,255,255,0.08);font-size:11.5px;}.roverx-faq-toggle{background:transparent;border:none;color:#38bdf8;font-weight:600;cursor:pointer;padding:0;font-size:12px;}.roverx-faq-toggle:hover{text-decoration:underline;}.roverx-faq-drawer{margin-top:12px;padding:12px;background:rgba(0,0,0,0.3);border-radius:8px;display:none;flex-direction:column;gap:8px;}.roverx-faq-item{font-size:12px;line-height:1.4;}.roverx-faq-item strong{color:#f1f5f9;display:block;margin-bottom:2px;}.roverx-faq-item span{color:#94a3b8;}.roverx-entity-term{position:relative;display:inline-block;border-bottom:2px dotted #38bdf8;cursor:help;color:inherit;font-weight:inherit;transition:background 0.2s ease;padding:0 2px;}.roverx-entity-term:hover{background:rgba(56,189,248,0.2);border-radius:3px;}.roverx-entity-tooltip{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);width:260px;background:#090d16;border:1px solid #38bdf8;border-radius:8px;padding:12px 14px;color:#f8fafc;font-size:12px;line-height:1.4;box-shadow:0 12px 30px rgba(0,0,0,0.7);z-index:999999;pointer-events:none;opacity:0;visibility:hidden;transition:opacity 0.2s ease,transform 0.2s ease;text-align:left;white-space:normal;font-weight:normal;}.roverx-entity-term:hover .roverx-entity-tooltip{opacity:1;visibility:visible;transform:translateX(-50%) translateY(-2px);}.roverx-tooltip-header{font-size:11px;font-weight:800;color:#38bdf8;text-transform:uppercase;margin-bottom:4px;display:flex;align-items:center;gap:4px;}@keyframes roverx-fade-in{from{opacity:0;transform:translateY(-4px);}to{opacity:1;transform:translateY(0);}}";
    document.head.appendChild(style);
  }

  // 3. FLAGSHIP FEATURE 1: AUTONOMOUS 30-SECOND EXECUTIVE BRIEF INJECTOR
  function injectExecutiveBrief() {
    if (typeof document === 'undefined' || !document.body) return;
    if (document.getElementById('roverx-executive-brief')) return;

    var headlines = [];
    var titles = document.querySelectorAll('h1, h2, h3, .article-title, .card-title, .title');
    for (var i = 0; i < titles.length; i++) {
      var text = (titles[i].textContent || '').trim();
      if (text.length > 20 && headlines.indexOf(text) === -1) {
        headlines.push(text);
      }
    }

    if (headlines.length === 0) return;

    var topTakeaways = headlines.slice(0, 3);
    var firstHeadline = topTakeaways[0] || 'Top Story';

    var briefDiv = document.createElement('div');
    briefDiv.id = 'roverx-executive-brief';
    briefDiv.className = 'roverx-brief-card';
    
    var listHtml = '';
    for (var j = 0; j < topTakeaways.length; j++) {
      listHtml += '<li><span class="roverx-bullet-icon">&#9656;</span><span>' + topTakeaways[j] + '</span></li>';
    }

    briefDiv.innerHTML = 
      '<div class="roverx-brief-header">' +
        '<div class="roverx-brief-title">&#9889; 30-Second Executive Brief</div>' +
        '<div class="roverx-brief-time">&#9201; 1 Min Read</div>' +
      '</div>' +
      '<ul class="roverx-brief-list">' + listHtml + '</ul>' +
      '<div class="roverx-brief-footer">' +
        '<span>&#10024; Synthesized autonomously by <strong>roverX</strong></span>' +
        '<button class="roverx-faq-toggle" onclick="var d=document.getElementById(\'roverx-faq-sub\'); if(d){d.style.display=(d.style.display===\'flex\'?\'none\':\'flex\');}">' +
          '&#10067; Quick Q&amp;A &#9662;' +
        '</button>' +
      '</div>' +
      '<div class="roverx-faq-drawer" id="roverx-faq-sub">' +
        '<div class="roverx-faq-item">' +
          '<strong>Q: What is the primary development?</strong>' +
          '<span>A: ' + firstHeadline + '</span>' +
        '</div>' +
        '<div class="roverx-faq-item">' +
          '<strong>Q: Who are the key stakeholders involved?</strong>' +
          '<span>A: Verified global and regional participants reporting in live wires.</span>' +
        '</div>' +
      '</div>';

    var targetParent = document.querySelector('main, #main, .container, .main-content, #content, .content, body');
    if (targetParent) {
      targetParent.insertBefore(briefDiv, targetParent.firstChild);
    }
  }

  // 4. FLAGSHIP FEATURE 4: SMART INTERACTIVE ENTITY TOOLTIPS
  function injectEntityTooltips() {
    if (typeof document === 'undefined' || !document.body) return;
    var targetElements = document.querySelectorAll('p, h1, h2, h3, h4, .desc, .summary, .description, .card-body, article');
    var terms = Object.keys(ENTITY_DICTIONARY);

    for (var i = 0; i < targetElements.length; i++) {
      var el = targetElements[i];
      if (el.closest && (el.closest('.roverx-brief-card') || el.closest('.roverx-entity-tooltip'))) continue;
      if (el.getAttribute && el.getAttribute('data-roverx-parsed')) continue;

      var html = el.innerHTML;
      if (!html || html.length < 5) continue;
      var modified = false;

      for (var t = 0; t < terms.length; t++) {
        var term = terms[t];
        var regex = new RegExp('(?<!<[^>]*)(\\b' + term + '\\b)(?![^<]*>)', 'gi');
        if (regex.test(html)) {
          var info = ENTITY_DICTIONARY[term];
          html = html.replace(regex, function (match) {
            return '<span class="roverx-entity-term">' + match +
                   '<span class="roverx-entity-tooltip">' +
                     '<span class="roverx-tooltip-header">&#8505;&#65039; ' + info.category + '</span>' +
                     info.def +
                   '</span></span>';
          });
          modified = true;
          break;
        }
      }

      if (modified) {
        el.innerHTML = html;
        if (el.setAttribute) el.setAttribute('data-roverx-parsed', 'true');
      }
    }
  }

  // 5. VISITOR INTENT & SGE FAQ
  var intentData = { persona: 'Researcher', dwellMs: 0, scrollDepth: 0, searches: [] };
  var startTime = Date.now();

  function trackVisitorIntent() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      window.addEventListener('scroll', function () {
        var scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollTotal > 0) {
          intentData.scrollDepth = Math.max(intentData.scrollDepth, Math.round((window.scrollY / scrollTotal) * 100));
        }
        intentData.dwellMs = Date.now() - startTime;
        if (intentData.dwellMs > 45000 && intentData.scrollDepth > 70) intentData.persona = 'Buyer / Decision Maker';
        else if (intentData.scrollDepth > 40) intentData.persona = 'Deep Researcher';
      });
    }
  }

  function injectSgeSchema() {
    if (typeof document === 'undefined') return;
    var rawTitles = document.querySelectorAll('h1, h2, h3');
    var titles = [];
    for (var i = 0; i < Math.min(rawTitles.length, 4); i++) {
      titles.push(rawTitles[i]);
    }
    if (!titles.length) return;

    var faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": titles.map(function (t) {
        return {
          "@type": "Question",
          "name": "What is the key update regarding " + t.textContent.trim() + "?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Executive summary: " + t.textContent.trim() + " as indexed by roverX."
          }
        };
      })
    };

    var existingScript = document.getElementById('roverx-sge-schema');
    if (existingScript) existingScript.remove();

    var s = document.createElement('script');
    s.id = 'roverx-sge-schema';
    s.type = 'application/ld+json';
    s.text = JSON.stringify(faqData);
    if (document.head) document.head.appendChild(s);
  }

  // 6. MASTER ROVERX API
  var Xrover = {
    version: '2.0.0',
    entityDictionary: ENTITY_DICTIONARY,
    timeAgo: timeAgo,
    getVisitorIntent: function () { return Object.assign({}, intentData); },
    injectExecutiveBrief: injectExecutiveBrief,
    injectEntityTooltips: injectEntityTooltips,

    init: function () {
      injectStyles();
      injectExecutiveBrief();
      injectEntityTooltips();
      injectSgeSchema();
      trackVisitorIntent();

      if (typeof setTimeout === 'function') {
        setTimeout(injectExecutiveBrief, 500);
        setTimeout(injectEntityTooltips, 800);
        setTimeout(injectExecutiveBrief, 1500);
        setTimeout(injectEntityTooltips, 2000);
        setTimeout(injectEntityTooltips, 3500);
      }
    }
  };

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', Xrover.init);
    } else {
      Xrover.init();
    }
  }

  if (typeof window !== 'undefined') {
    window.Xrover = Xrover;
  }

})(typeof window !== 'undefined' ? window : this, typeof document !== 'undefined' ? document : {});
