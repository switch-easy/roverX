
const SAMPLE_DATA = {
  tech: [
    {
      title: "Reasoning AI Neural Architectures Shatter Computational Benchmarks",
      description: "Next-generation semiconductor accelerators and self-correcting neural clusters establish new efficiency breakthroughs.",
      category: "tech",
      source: "TechCrunch",
      pubDate: new Date(Date.now() - 15 * 60 * 1000).toUTCString(),
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "Clean Fusion Energy Reactor Achieves Continuous Net-Power Milestone",
      description: "Magnetic confinement experiment maintains stable plasma equilibrium for record duration across industrial grid test.",
      category: "tech",
      source: "Ars Technica",
      pubDate: new Date(Date.now() - 32 * 60 * 1000).toUTCString(),
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "Quantum Cryogenic Processors Demonstrate Fault-Tolerant Logic Gates",
      description: "Engineers successfully mitigate thermal decoherence across 10,000 logical qubit registers.",
      category: "tech",
      source: "MIT Tech Review",
      pubDate: new Date(Date.now() - 48 * 60 * 1000).toUTCString(),
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "Autonomous Logistics Fleet Deployed Across Major Trans-Pacific Maritime Hubs",
      description: "Container terminals transition to zero-emission robotic cranes and autonomous navigation carriers.",
      category: "tech",
      source: "Wired",
      pubDate: new Date(Date.now() - 65 * 60 * 1000).toUTCString(),
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "Global Cyber Defense Framework Standardizes Zero-Trust Encryption Protocols",
      source: "Reuters Tech",
      pubDate: new Date(Date.now() - 80 * 60 * 1000).toUTCString()
    },
    {
      title: "Solid-State EV Battery Cells Enter Mass Commercial Production",
      source: "CleanTechnica",
      pubDate: new Date(Date.now() - 95 * 60 * 1000).toUTCString()
    }
  ]
};

let currentSource = 'tech';

function switchView(viewName) {
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');

  document.getElementById('view-studio').style.display = viewName === 'studio' ? 'flex' : 'none';
  document.getElementById('view-knowledge').style.display = viewName === 'knowledge' ? 'block' : 'none';
  document.getElementById('view-gaps').style.display = viewName === 'gaps' ? 'block' : 'none';
  document.getElementById('view-copilot').style.display = viewName === 'copilot' ? 'block' : 'none';
}

function updatePreview() {
  const theme = document.getElementById('themeSelect').value;
  const showBuzz = document.getElementById('showBuzzToggle').checked;
  const showSummaries = document.getElementById('showSummaryToggle').checked;
  const articles = SAMPLE_DATA[currentSource] || SAMPLE_DATA.tech;

  Xrover.mount('#xroverPreviewMount', {
    theme: theme,
    layout: 'quad',
    showBuzz: showBuzz,
    showSummaries: showSummaries,
    articles: articles
  });
}

function loadSourceData() {
  currentSource = document.getElementById('sourceSelect').value;
  updatePreview();
}

function setDevice(device) {
  document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  const frame = document.getElementById('canvasFrame');
  if (device === 'mobile') frame.style.maxWidth = '420px';
  else if (device === 'tablet') frame.style.maxWidth = '768px';
  else frame.style.maxWidth = '100%';
}

function sendCopilotPrompt() {
  const input = document.getElementById('copilotInput');
  const val = input.value.trim();
  if (!val) return;

  const list = document.getElementById('copilotMsgList');
  list.innerHTML += '<div class="copilot-msg user"><strong>You:</strong> ' + val + '</div>';
  input.value = '';

  const answer = Xrover.askCopilot(val);
  setTimeout(() => {
    list.innerHTML += '<div class="copilot-msg system"><strong>Xrover Copilot:</strong> ' + answer + '</div>';
    list.scrollTop = list.scrollHeight;
  }, 300);
}

function openEmbedModal() {
  document.getElementById('embedModal').style.display = 'flex';
}

function closeEmbedModal() {
  document.getElementById('embedModal').style.display = 'none';
}

function copyEmbedCode() {
  const text = document.getElementById('embedCodeBlock').innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert('✓ Embed code copied to clipboard!');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updatePreview();
});
