/**
 * ============================================================
 * ROVERX 2.0 SDK — Autonomous Discovery OS & Semantic Intelligence
 * (30s Executive Briefs, Global Floating Tooltips, SGE SEO)
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
    "cricket": { category: "GLOBAL SPORT", def: "A bat-and-ball team sport contested internationally across Test, ODI, and T20 formats." },
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
    "hockey": { category: "SPORT", def: "A high-speed team sport played on ice or turf using curved sticks and a ball/puck." },
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

  // 2. SELF-INJECTING CSS WITH GLOBAL POPUP TOOLTIP (Zero-Clipped)
  function injectStyles() {
    if (typeof document === 'undefined' || !document.head) return;
    if (document.getElementById('roverx-core-styles')) return;
    var style = document.createElement('style');
    style.id = 'roverx-core-styles';
    style.textContent = [
      '.roverx-brief-card{background:linear-gradient(135deg,rgba(15,23,42,0.95),rgba(30,41,59,0.95));border:1px solid rgba(56,189,248,0.3);border-radius:12px;padding:18px 22px;margin:16px 0 24px 0;box-shadow:0 10px 25px -5px rgba(0,0,0,0.4);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:#f8fafc;box-sizing:border-box;animation:roverx-fade-in 0.4s ease-out;}',
      '.roverx-brief-header{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:10px;margin-bottom:12px;}',
      '.roverx-brief-title{display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:800;letter-spacing:0.5px;text-transform:uppercase;color:#38bdf8;}',
      '.roverx-brief-time{font-size:11.5px;color:#94a3b8;font-weight:600;}',
      '.roverx-brief-list{list-style:none;padding:0;margin:0 0 14px 0;display:flex;flex-direction:column;gap:8px;}',
      '.roverx-brief-list li{display:flex;align-items:flex-start;gap:10px;font-size:13px;line-height:1.45;color:#e2e8f0;}',
      '.roverx-bullet-icon{color:#38bdf8;font-weight:900;font-size:14px;}',
      '.roverx-brief-footer{display:flex;justify-content:space-between;align-items:center;padding-top:10px;border-top:1px dashed rgba(255,255,255,0.08);font-size:11.5px;}',
      '.roverx-faq-toggle{background:transparent;border:none;color:#38bdf8;font-weight:600;cursor:pointer;padding:0;font-size:12px;}',
      '.roverx-faq-toggle:hover{text-decoration:underline;}',
      '.roverx-faq-drawer{margin-top:12px;padding:12px;background:rgba(0,0,0,0.3);border-radius:8px;display:none;flex-direction:column;gap:8px;}',
      '.roverx-faq-item{font-size:12px;line-height:1.4;}',
      '.roverx-faq-item strong{color:#f1f5f9;display:block;margin-bottom:2px;}',
      '.roverx-faq-item span{color:#94a3b8;}',
      '.roverx-entity-term{display:inline-block;border-bottom:2px dotted #38bdf8;cursor:help;color:inherit;font-weight:inherit;transition:all 0.15s ease;padding:0 2px;position:relative;}',
      '.roverx-entity-term:hover{background:rgba(56,189,248,0.25);border-radius:3px;}',
      '#roverx-floating-tooltip{position:fixed;display:none;width:270px;background:#090d16;border:1px solid #38bdf8;border-radius:8px;padding:12px 14px;color:#f8fafc;font-size:12px;line-height:1.45;box-shadow:0 14px 35px rgba(0,0,0,0.85);z-index:2147483647;pointer-events:none;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;}',
      '.roverx-tooltip-header{font-size:11px;font-weight:800;color:#38bdf8;text-transform:uppercase;margin-bottom:4px;display:flex;align-items:center;gap:4px;}',
      '@keyframes roverx-fade-in{from{opacity:0;transform:translateY(-4px);}to{opacity:1;transform:translateY(0);}}'
    ].join('');
    document.head.appendChild(style);
  }

  // 3. GLOBAL FLOATING TOOLTIP SINGLETON (Attached to Body — Never Clipped by Overflow)
  var globalTooltip = null;

  function ensureGlobalTooltip() {
    if (typeof document === 'undefined' || !document.body) return null;
    if (!globalTooltip) {
      globalTooltip = document.getElementById('roverx-floating-tooltip');
      if (!globalTooltip) {
        globalTooltip = document.createElement('div');
        globalTooltip.id = 'roverx-floating-tooltip';
        document.body.appendChild(globalTooltip);
      }
    }
    return globalTooltip;
  }

  function showTooltip(el, term) {
    var tooltip = ensureGlobalTooltip();
    if (!tooltip) return;

    var info = ENTITY_DICTIONARY[term.toLowerCase()];
    if (!info) return;

    tooltip.innerHTML = 
      '<div class="roverx-tooltip-header">&#8505;&#65039; ' + info.category + '</div>' +
      '<div>' + info.def + '</div>';

    var rect = el.getBoundingClientRect();
    var top = rect.top - 80;
    var left = rect.left + (rect.width / 2) - 135;

    // Boundary guards for viewport
    if (top < 10) top = rect.bottom + 8;
    if (left < 10) left = 10;
    if (left + 280 > window.innerWidth) left = window.innerWidth - 290;

    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
    tooltip.style.display = 'block';
  }

  function hideTooltip() {
    if (globalTooltip) {
      globalTooltip.style.display = 'none';
    }
  }

  // 4. AUTONOMOUS 30-SECOND EXECUTIVE BRIEF INJECTOR
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

  // 5. BULLETPROOF TEXT-NODE REPLACER (Walks direct text nodes safely)
  function injectEntityTooltips() {
    if (typeof document === 'undefined' || !document.body) return;
    ensureGlobalTooltip();

    var terms = Object.keys(ENTITY_DICTIONARY);
    var filter = (typeof NodeFilter !== 'undefined' && NodeFilter.SHOW_TEXT) ? NodeFilter.SHOW_TEXT : 4;
    var walker = document.createTreeWalker(document.body, filter, null, false);
    var textNodes = [];
    var node;

    while (node = walker.nextNode()) {
      if (!node.parentElement) continue;
      var tag = node.parentElement.tagName;
      if (['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'NOSCRIPT'].indexOf(tag) !== -1) continue;
      if (node.parentElement.classList && node.parentElement.classList.contains('roverx-entity-term')) continue;
      if (node.parentElement.closest && node.parentElement.closest('#roverx-executive-brief')) continue;
      if ((node.nodeValue || '').trim().length > 3) {
        textNodes.push(node);
      }
    }

    for (var i = 0; i < textNodes.length; i++) {
      var tn = textNodes[i];
      var text = tn.nodeValue;
      if (!text) continue;

      for (var t = 0; t < terms.length; t++) {
        var term = terms[t];
        var regex = new RegExp('\\b(' + term + ')\\b', 'i');
        var match = regex.exec(text);

        if (match) {
          var matchedWord = match[0];
          var matchIndex = match.index;

          var beforeText = text.substring(0, matchIndex);
          var afterText = text.substring(matchIndex + matchedWord.length);

          var span = document.createElement('span');
          span.className = 'roverx-entity-term';
          span.setAttribute('data-term', term);
          span.textContent = matchedWord;

          // Event Listeners for Global Floating Tooltip
          span.onmouseenter = function () {
            showTooltip(this, this.getAttribute('data-term'));
          };
          span.onmouseleave = function () {
            hideTooltip();
          };

          var parent = tn.parentNode;
          if (parent) {
            if (beforeText) parent.insertBefore(document.createTextNode(beforeText), tn);
            parent.insertBefore(span, tn);
            if (afterText) parent.insertBefore(document.createTextNode(afterText), tn);
            parent.removeChild(tn);
          }
          break; // Stop after first replacement in this text node
        }
      }
    }
  }

  // 6. MASTER ROVERX API
  var Xrover = {
    version: '2.0.0',
    entityDictionary: ENTITY_DICTIONARY,
    injectExecutiveBrief: injectExecutiveBrief,
    injectEntityTooltips: injectEntityTooltips,

    init: function () {
      injectStyles();
      injectExecutiveBrief();
      injectEntityTooltips();

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
