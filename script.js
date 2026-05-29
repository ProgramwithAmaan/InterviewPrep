const questions = [
  // HR / Intro
  {
    cat: "hr", badge: "HR", badgeClass: "badge-hr",
    q: "Tell me about yourself.",
    a: `Start with a strong one-liner, then walk through your background concisely.<br><br>
    <strong>Sample:</strong> "I'm a 3rd-year B.Tech CSE student at I.T.S Engineering College, Greater Noida, with an SGPA of 8.0. I specialize in full-stack web development using the MERN stack — MongoDB, Express.js, React, and Node.js. I've built projects like BEEFIT, a health-monitoring web app, and a recipe-finder website. I hold certifications in DSA and Java, and I'm passionate about building scalable, user-focused applications."`
  },
  {
    cat: "hr", badge: "HR", badgeClass: "badge-hr",
    q: "Why should we hire you?",
    a: `Tie your skills directly to the role.<br><br>
    <strong>Sample:</strong> "I bring hands-on experience with the full MERN stack, a demonstrated ability to build real projects under real constraints, and a consistent academic record with an SGPA of 8.0. My projects show I can take an idea from concept to a working product. I'm also experienced in DSA, which makes me strong at problem-solving, and I'm eager to grow quickly in a professional environment."`
  },
  {
    cat: "hr", badge: "HR", badgeClass: "badge-hr",
    q: "What are your strengths and weaknesses?",
    a: `<strong>Strength example:</strong> "My strength is my ability to learn new technologies quickly. When I needed data visualization in BEEFIT, I researched and implemented it efficiently without prior experience."<br><br>
    <strong>Weakness example:</strong> "I sometimes spend too much time perfecting code rather than shipping it. I'm actively working on this by setting personal time-boxes for each task and prioritizing functionality before polish."`
  },
  {
    cat: "hr", badge: "HR", badgeClass: "badge-hr",
    q: "Where do you see yourself in 5 years?",
    a: `<strong>Sample:</strong> "In 5 years, I see myself as a senior full-stack developer or a technical lead, having shipped production-grade products at scale. I also want to deepen my expertise in system design and cloud infrastructure. Long-term, I'm open to entrepreneurial paths where I can leverage engineering to solve meaningful problems."`
  },
  {
    cat: "hr", badge: "HR", badgeClass: "badge-hr",
    q: "Why did you choose Computer Science Engineering?",
    a: `<strong>Sample:</strong> "I was always drawn to how software can solve real-world problems at scale. CSE gave me the foundation to combine logical thinking with creative problem-solving. The ability to build something from scratch — like a web application — and have thousands of people use it is incredibly motivating."`
  },
  {
    cat: "hr", badge: "HR", badgeClass: "badge-hr",
    q: "What are your salary expectations? (for internships: stipend)",
    a: `Be honest but flexible.<br><br><strong>Sample:</strong> "I'm open to the industry standard for a fresher/intern with my skill set. I'm more focused on gaining hands-on experience and learning in a strong team, though I'd appreciate a competitive package."`
  },

  // Technical – MERN / Web Dev
  {
    cat: "tech", badge: "Technical", badgeClass: "badge-tech",
    q: "Explain the MERN stack. How do each of its components interact?",
    a: `<ul>
      <li><strong>MongoDB</strong> – NoSQL database storing data as JSON-like documents.</li>
      <li><strong>Express.js</strong> – Minimal Node.js framework handling HTTP routes and middleware.</li>
      <li><strong>React</strong> – Frontend library building the UI as reusable components.</li>
      <li><strong>Node.js</strong> – JavaScript runtime powering the server-side backend.</li>
    </ul>
    <strong>Flow:</strong> React sends HTTP requests → Express routes receive them → Business logic runs in Node → Data is fetched/saved in MongoDB → Response returns to React and updates the UI.`
  },
  {
    cat: "tech", badge: "Technical", badgeClass: "badge-tech",
    q: "What is the difference between SQL (MySQL) and NoSQL (MongoDB)?",
    a: `<ul>
      <li><strong>SQL (MySQL):</strong> Structured, table-based, fixed schema, uses joins, ACID compliant.</li>
      <li><strong>NoSQL (MongoDB):</strong> Document-based, flexible schema, scales horizontally, stores data as JSON-like BSON.</li>
    </ul>
    <strong>When to use which:</strong> Use MySQL for structured relational data (banking, ERP). Use MongoDB for flexible, rapidly changing data models (real-time apps, content management).`
  },
  {
    cat: "tech", badge: "Technical", badgeClass: "badge-tech",
    q: "What is REST API? How did you implement it in your projects?",
    a: `REST (Representational State Transfer) is an architectural style for designing networked APIs using standard HTTP methods:<br><br>
    <ul>
      <li><strong>GET</strong> – Read data</li>
      <li><strong>POST</strong> – Create data</li>
      <li><strong>PUT/PATCH</strong> – Update data</li>
      <strong><li>DELETE</strong> – Delete data</li>
    </ul>
    In BEEFIT, I built Express.js REST endpoints to receive health metrics from the React frontend, process them server-side, and store them in MongoDB.`
  },
  {
    cat: "tech", badge: "Technical", badgeClass: "badge-tech",
    q: "What is the Virtual DOM in React and why is it important?",
    a: `The Virtual DOM is a lightweight JavaScript representation of the real DOM. When state changes, React:<br>
    <ol style="padding-left:18px; margin-top:10px;">
      <li>Creates a new Virtual DOM tree</li>
      <li>Diffs it against the previous Virtual DOM (reconciliation)</li>
      <li>Updates only the changed nodes in the real DOM</li>
    </ol>
    <br>This makes updates fast because direct DOM manipulation is expensive. It's a core reason React apps feel snappy.`
  },
  {
    cat: "tech", badge: "Technical", badgeClass: "badge-tech",
    q: "What are React Hooks? Name and explain the ones you've used.",
    a: `Hooks let you use state and lifecycle features in functional components.<br><br>
    <ul>
      <li><strong>useState</strong> – Manages local component state.</li>
      <li><strong>useEffect</strong> – Runs side effects (API calls, subscriptions) after render.</li>
      <li><strong>useContext</strong> – Consumes context without prop drilling.</li>
      <li><strong>useRef</strong> – Accesses DOM elements or persists values without re-render.</li>
      <li><strong>useCallback / useMemo</strong> – Memoization for performance optimization.</li>
    </ul>`
  },
  {
    cat: "tech", badge: "Technical", badgeClass: "badge-tech",
    q: "What is the difference between let, var, and const in JavaScript?",
    a: `<ul>
      <li><strong>var</strong> – Function-scoped, hoisted (initialized as undefined), can be re-declared.</li>
      <li><strong>let</strong> – Block-scoped, hoisted but not initialized (TDZ), cannot be re-declared.</li>
      <li><strong>const</strong> – Block-scoped, must be initialized at declaration, value cannot be reassigned (but object properties can be mutated).</li>
    </ul>
    <strong>Best practice:</strong> Use <strong>const</strong> by default, <strong>let</strong> when reassignment is needed, avoid <strong>var</strong>.`
  },
  {
    cat: "tech", badge: "Technical", badgeClass: "badge-tech",
    q: "What is TypeScript and why would you use it over JavaScript?",
    a: `TypeScript is a statically typed superset of JavaScript that compiles to plain JS.<br><br>
    <strong>Advantages:</strong>
    <ul>
      <li>Catches type errors at compile time, not runtime</li>
      <li>Better IDE autocomplete and refactoring support</li>
      <li>Interfaces and generics for scalable codebases</li>
      <li>Self-documenting code — types serve as documentation</li>
    </ul>
    <strong>Example:</strong> <code>function greet(name: string): string { return "Hello, " + name; }</code>`
  },
  {
    cat: "tech", badge: "Technical", badgeClass: "badge-tech",
    q: "Explain async/await and Promises in JavaScript.",
    a: `A <strong>Promise</strong> represents a value that will be available in the future (pending → fulfilled/rejected).<br><br>
    <strong>async/await</strong> is syntactic sugar over Promises, making asynchronous code look synchronous and easier to read.<br><br>
    <pre style="background:#0d0d0f; padding:12px; border-radius:4px; font-size:12px; color:#c8f135; overflow-x:auto;">async function fetchData() {
  try {
    const res = await fetch('/api/data');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}</pre>`
  },
  {
    cat: "tech", badge: "Technical", badgeClass: "badge-tech",
    q: "What is middleware in Express.js?",
    a: `Middleware are functions that execute during the request-response cycle. They have access to <strong>req</strong>, <strong>res</strong>, and <strong>next()</strong>.<br><br>
    <strong>Types:</strong>
    <ul>
      <li>Application-level (app.use)</li>
      <li>Router-level</li>
      <li>Error-handling (4 arguments)</li>
      <li>Built-in (express.json(), express.static)</li>
      <li>Third-party (cors, helmet, morgan)</li>
    </ul>
    <strong>Use case:</strong> Authentication middleware checks if a JWT token is valid before allowing access to protected routes.`
  },
  {
    cat: "tech", badge: "Technical", badgeClass: "badge-tech",
    q: "What is Git and explain the commands you use most frequently?",
    a: `Git is a distributed version control system.<br><br>
    <strong>Common commands:</strong>
    <ul>
      <li><strong>git init / git clone</strong> – Initialize or clone a repo</li>
      <li><strong>git add . / git commit -m</strong> – Stage and commit changes</li>
      <li><strong>git push / git pull</strong> – Sync with remote</li>
      <li><strong>git branch / git checkout -b</strong> – Create and switch branches</li>
      <li><strong>git merge / git rebase</strong> – Integrate changes</li>
      <li><strong>git stash</strong> – Temporarily save uncommitted work</li>
      <li><strong>git log / git diff</strong> – View history and changes</li>
    </ul>`
  },
  {
    cat: "tech", badge: "Technical", badgeClass: "badge-tech",
    q: "What is Bootstrap and what are its main advantages?",
    a: `Bootstrap is a CSS framework providing pre-built, responsive UI components.<br><br>
    <strong>Advantages:</strong>
    <ul>
      <li>12-column responsive grid system</li>
      <li>Ready-made components (navbar, cards, modals, forms)</li>
      <li>Cross-browser consistency</li>
      <li>Rapid prototyping</li>
    </ul>
    <strong>Limitation:</strong> Sites can look generic without customization. For production apps I'd pair Bootstrap with custom CSS or migrate to Tailwind CSS for more utility-first control.`
  },
  {
    cat: "tech", badge: "Technical", badgeClass: "badge-tech",
    q: "How does authentication work in a MERN app? Have you implemented it?",
    a: `<strong>Common approach — JWT (JSON Web Tokens):</strong>
    <ol style="padding-left:18px; margin-top:10px;">
      <li>User logs in → server validates credentials</li>
      <li>Server issues a signed JWT</li>
      <li>Client stores JWT (localStorage or httpOnly cookie)</li>
      <li>Client sends JWT in Authorization header for protected routes</li>
      <li>Server middleware verifies the token on each request</li>
    </ol>
    <br>If you haven't implemented auth yet, mention: "I understand the JWT flow theoretically and am currently learning to implement it with bcrypt for password hashing."`
  },

  // CS Concepts
  {
    cat: "cs", badge: "CS Concepts", badgeClass: "badge-cs",
    q: "What is OOP (Object-Oriented Programming)? Explain its four pillars.",
    a: `<ul>
      <li><strong>Encapsulation</strong> – Bundling data and methods, hiding internal state (private/public access).</li>
      <li><strong>Abstraction</strong> – Hiding complexity, exposing only necessary interfaces.</li>
      <li><strong>Inheritance</strong> – A class (child) inherits properties/methods from another (parent), promoting code reuse.</li>
      <li><strong>Polymorphism</strong> – Same method name behaves differently based on the object (method overriding/overloading).</li>
    </ul>
    You've worked with Java and JavaScript, both of which support OOP.`
  },
  {
    cat: "cs", badge: "CS Concepts", badgeClass: "badge-cs",
    q: "Explain Data Structures you know. Which is your strongest area?",
    a: `Given your DSA in Java certification, demonstrate breadth:<br><br>
    <ul>
      <li><strong>Arrays & Strings</strong> – Random access, O(1) lookup</li>
      <li><strong>Linked Lists</strong> – Dynamic size, O(n) traversal</li>
      <li><strong>Stack & Queue</strong> – LIFO/FIFO, used in BFS/DFS</li>
      <li><strong>Trees & BST</strong> – Hierarchical data, O(log n) operations</li>
      <li><strong>Hashing (HashMap)</strong> – O(1) average lookup</li>
      <li><strong>Graphs</strong> – BFS, DFS, shortest path</li>
    </ul>
    <strong>Tip:</strong> Mention your HackerRank 3-star C (Problem Solving) as evidence of practical DSA.`
  },
  {
    cat: "cs", badge: "CS Concepts", badgeClass: "badge-cs",
    q: "What is time and space complexity? What is Big O notation?",
    a: `<strong>Big O</strong> describes the worst-case performance of an algorithm as input size grows.<br><br>
    <strong>Common complexities (best to worst):</strong>
    <ul>
      <li>O(1) – Constant (array lookup by index)</li>
      <li>O(log n) – Logarithmic (binary search)</li>
      <li>O(n) – Linear (loop through array)</li>
      <li>O(n log n) – Merge sort, quick sort</li>
      <li>O(n²) – Nested loops (bubble sort)</li>
      <li>O(2ⁿ) – Exponential (recursive Fibonacci naively)</li>
    </ul>`
  },
  {
    cat: "cs", badge: "CS Concepts", badgeClass: "badge-cs",
    q: "What is the difference between HTTP and HTTPS?",
    a: `<ul>
      <li><strong>HTTP</strong> – HyperText Transfer Protocol. Data is transmitted in plain text. Vulnerable to man-in-the-middle attacks.</li>
      <li><strong>HTTPS</strong> – HTTP + TLS/SSL encryption. Data is encrypted in transit. Authenticated via SSL certificates.</li>
    </ul>
    All modern web apps should use HTTPS. In production, services like Let's Encrypt provide free SSL certificates.`
  },
  {
    cat: "cs", badge: "CS Concepts", badgeClass: "badge-cs",
    q: "What is the difference between a process and a thread?",
    a: `<ul>
      <li><strong>Process</strong> – An independent program in execution with its own memory space.</li>
      <li><strong>Thread</strong> – A lightweight unit within a process that shares memory with other threads in the same process.</li>
    </ul>
    <strong>Relevance to Node.js:</strong> Node.js is single-threaded but uses an event loop and worker threads for handling concurrency efficiently without blocking.`
  },
  {
    cat: "cs", badge: "CS Concepts", badgeClass: "badge-cs",
    q: "What is a database index and why is it important?",
    a: `A database index is a data structure that improves the speed of data retrieval operations at the cost of additional storage and slightly slower writes.<br><br>
    <strong>Analogy:</strong> Like a book's index — instead of reading every page, you jump directly to the right page.<br><br>
    In MongoDB, you can create indexes with <code>db.collection.createIndex({field: 1})</code>. Without indexes, queries do a full collection scan — O(n). With an index, lookups become O(log n).`
  },
  {
    cat: "cs", badge: "CS Concepts", badgeClass: "badge-cs",
    q: "Explain the concept of recursion with an example.",
    a: `Recursion is when a function calls itself to solve a smaller version of the same problem, with a base case to stop.<br><br>
    <pre style="background:#0d0d0f; padding:12px; border-radius:4px; font-size:12px; color:#c8f135; overflow-x:auto;">// Factorial in Java
int factorial(int n) {
  if (n == 0) return 1;  // base case
  return n * factorial(n - 1);  // recursive case
}</pre>
    <strong>Key insight:</strong> Every recursive solution must have a base case, otherwise it causes a stack overflow.`
  },

  // Projects
  {
    cat: "project", badge: "Project", badgeClass: "badge-project",
    q: "Explain your BEEFIT project. What was the biggest technical challenge?",
    a: `<strong>What it is:</strong> A comprehensive web interface for health monitoring that lets users log and quantify their daily physical activity and food intake.<br><br>
    <strong>Key technical work:</strong>
    <ul>
      <li>Optimized data visualization components for higher user engagement</li>
      <li>Implemented a modular frontend framework ensuring seamless synchronization of user-submitted metrics</li>
    </ul>
    <strong>Challenge example:</strong> "The biggest challenge was keeping the data visualization in sync with live user input without causing excessive re-renders. I solved this by debouncing state updates and lifting state to a shared context so all components stayed consistent."`
  },
  {
    cat: "project", badge: "Project", badgeClass: "badge-project",
    q: "What tech stack did you use for BEEFIT and why those choices?",
    a: `<strong>Likely stack:</strong> React (frontend), Node.js + Express (backend), MongoDB (database), Chart.js or similar for visualizations.<br><br>
    <strong>Why React:</strong> Component-based architecture is ideal for a dashboard with multiple data widgets that update independently.<br>
    <strong>Why MongoDB:</strong> Health metrics are schema-flexible — different users may log different data types, so a document model fits better than rigid SQL tables.<br>
    <strong>Why Node.js:</strong> Allows full JavaScript stack, faster iteration, and handles concurrent API requests efficiently.`
  },
  {
    cat: "project", badge: "Project", badgeClass: "badge-project",
    q: "Explain your Chef's Quick Snack – Recipe Finder project.",
    a: `<strong>What it is:</strong> A website that helps users find recipes based on ingredients they have.<br><br>
    <strong>Tech used:</strong> HTML5, CSS3, JavaScript<br><br>
    <strong>Core feature:</strong> A search function that filters recipes by ingredient input.<br><br>
    <strong>How to strengthen your answer:</strong> Mention if you used a public API (like Spoonacular or Edamam), how you handled empty search states, and any performance considerations like debouncing the search input. If it was purely frontend, explain the data structure you used to store and filter recipes.`
  },
  {
    cat: "project", badge: "Project", badgeClass: "badge-project",
    q: "If you were to add one new feature to BEEFIT, what would it be and how would you implement it?",
    a: `This tests your product thinking and technical planning.<br><br>
    <strong>Sample answer:</strong> "I'd add AI-powered health insights — analyzing a user's logged data to suggest personalized diet or workout adjustments. I'd implement it by sending aggregated user data to an ML API (like a fine-tuned model or a simple regression service), then displaying the insights in a dedicated dashboard section. I'd also add weekly summary email notifications using Node.js with Nodemailer."`
  },
  {
    cat: "project", badge: "Project", badgeClass: "badge-project",
    q: "How would you make your projects production-ready?",
    a: `<ul>
      <li><strong>Security:</strong> HTTPS, input validation, rate limiting, JWT refresh tokens, helmet.js headers</li>
      <li><strong>Performance:</strong> Code splitting in React, CDN for static assets, MongoDB query optimization with indexes</li>
      <li><strong>Reliability:</strong> Error handling middleware, logging (Winston/Morgan), health check endpoints</li>
      <li><strong>Deployment:</strong> Docker containerization, CI/CD pipeline (GitHub Actions), deploy to AWS/Vercel/Railway</li>
      <li><strong>Monitoring:</strong> Sentry for error tracking, analytics for user behavior</li>
    </ul>`
  },

  // Behavioural
  {
    cat: "behav", badge: "Behavioural", badgeClass: "badge-behav",
    q: "Tell me about a time you faced a difficult problem in a project and how you solved it.",
    a: `Use the <strong>STAR method</strong> (Situation, Task, Action, Result).<br><br>
    <strong>Sample:</strong> "In BEEFIT, the data visualization components were causing performance issues when users submitted metrics rapidly (Situation). I needed to keep the charts updated in real-time without degrading UX (Task). I implemented debouncing on the input handlers and memoized the chart components using React.memo so they only re-rendered when the relevant data slice changed (Action). This reduced unnecessary renders by ~60% and made the interface feel noticeably smoother (Result)."`
  },
  {
    cat: "behav", badge: "Behavioural", badgeClass: "badge-behav",
    q: "How do you keep yourself updated with new technologies?",
    a: `<strong>Sample:</strong> "I follow a few key sources: official documentation for tools I'm using (React, Node.js), YouTube channels for hands-on tutorials, and platforms like HackerRank and LeetCode for problem-solving practice. I also build small side projects when I learn something new — like when I learned TypeScript, I rebuilt a small component from one of my projects using it. Building is the fastest way to retain new knowledge."`
  },
  {
    cat: "behav", badge: "Behavioural", badgeClass: "badge-behav",
    q: "Do you prefer working alone or in a team? Why?",
    a: `<strong>Sample:</strong> "I'm comfortable in both, but I genuinely enjoy team environments because they expose you to approaches you wouldn't think of alone. Code reviews, for example, have improved my coding habits significantly — even in academic project groups. That said, I'm also self-directed; for most of my personal projects I independently managed the full stack from design to deployment."`
  },
  {
    cat: "behav", badge: "Behavioural", badgeClass: "badge-behav",
    q: "How do you handle tight deadlines or pressure?",
    a: `<strong>Sample:</strong> "I break the work into smaller milestones and prioritize ruthlessly — shipping a working core feature first, then iterating. For example, when finishing the BEEFIT project, I focused on getting the core metric logging and display working before polishing the UI. I also communicate proactively if timelines shift, rather than staying silent and missing deadlines."`
  },
  {
    cat: "behav", badge: "Behavioural", badgeClass: "badge-behav",
    q: "What do you enjoy most about programming?",
    a: `Be genuine — interviewers sense authenticity.<br><br>
    <strong>Sample:</strong> "What I enjoy most is the moment when something abstract becomes real — turning a design or idea into a working, interactive product. There's also something deeply satisfying about debugging: it's like solving a puzzle where the rules are clear but the answer isn't. Building BEEFIT gave me both — creating something useful and pushing through challenges that required real problem-solving."`
  },
  {
    cat: "behav", badge: "Behavioural", badgeClass: "badge-behav",
    q: "Do you have any questions for us?",
    a: `<strong>Always ask at least one question — it shows genuine interest.</strong><br><br>
    <strong>Good questions to ask:</strong>
    <ul>
      <li>"What does the tech stack look like here, and what would my first project involve?"</li>
      <li>"How do you support the growth of junior developers / interns on the team?"</li>
      <li>"What does a typical day look like for someone in this role?"</li>
      <li>"What are the biggest technical challenges your team is currently working through?"</li>
    </ul>`
  }
];

let currentFilter = 'all';
let checkedIds = new Set();
let showPracticedOnly = false;
const STORAGE_KEY = 'interview-prep-state-v1';

function saveState() {
  const data = {
    checked: Array.from(checkedIds),
    currentFilter,
    showPracticedOnly,
    searchValue: document.getElementById('search-input').value.trim()
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn('Could not save progress:', error);
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (Array.isArray(data.checked)) checkedIds = new Set(data.checked.filter(n => Number.isInteger(n)));
    if (typeof data.currentFilter === 'string') currentFilter = data.currentFilter;
    if (typeof data.showPracticedOnly === 'boolean') showPracticedOnly = data.showPracticedOnly;
    if (typeof data.searchValue === 'string') document.getElementById('search-input').value = data.searchValue;
  } catch (error) {
    console.warn('Could not load saved state:', error);
  }
}

function getBadgeHTML(badgeClass, badge) {
  return `<span class="q-badge ${badgeClass}">${badge}</span>`;
}

function renderQuestions() {
  const container = document.getElementById('questions-container');
  container.innerHTML = '';
  const query = document.getElementById('search-input').value.trim().toLowerCase();

  let filtered = currentFilter === 'all' ? [...questions] : questions.filter(q => q.cat === currentFilter);

  if (showPracticedOnly) {
    filtered = filtered.filter(item => checkedIds.has(questions.indexOf(item)));
  }

  if (query) {
    filtered = filtered.filter(item => `${item.q} ${item.a}`.toLowerCase().includes(query));
  }

  const resultLabel = query
    ? `Search "${query}" — ${filtered.length} question${filtered.length === 1 ? '' : 's'} found`
    : `Showing ${filtered.length} question${filtered.length === 1 ? '' : 's'}${showPracticedOnly ? ' • Practiced only' : ''}`;
  document.getElementById('result-info').textContent = resultLabel;

  if (filtered.length === 0) {
    container.innerHTML = `<p style="color:var(--muted); font-size:13px; margin-top:20px;">No matching questions found.</p>`;
    saveState();
    return;
  }

  filtered.forEach((item, idx) => {
    const globalIdx = questions.indexOf(item);
    const isChecked = checkedIds.has(globalIdx);
    const div = document.createElement('div');
    div.className = `question-card${isChecked ? ' answered' : ''}`;
    div.dataset.idx = globalIdx;
    div.innerHTML = `
      <div class="q-header" onclick="toggleAnswer(${globalIdx}, this)">
        <span class="q-num">${String(idx + 1).padStart(2, '0')}</span>
        <span class="q-text">${item.q}</span>
        ${getBadgeHTML(item.badgeClass, item.badge)}
        <span class="q-toggle" id="toggle-${globalIdx}">+</span>
      </div>
      <div class="q-answer" id="answer-${globalIdx}">
        <div class="answer-label">▸ Model Answer</div>
        <div class="answer-text">${item.a}</div>
        <label class="mark-done">
          <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="markDone(${globalIdx}, this)">
          <label>Mark as practiced</label>
        </label>
      </div>
    `;
    container.appendChild(div);
  });
  saveState();
}

function toggleAnswer(idx, headerEl) {
  const answer = document.getElementById(`answer-${idx}`);
  const toggle = document.getElementById(`toggle-${idx}`);
  const isOpen = answer.classList.contains('visible');
  answer.classList.toggle('visible', !isOpen);
  toggle.classList.toggle('open', !isOpen);
}

function markDone(idx, checkbox) {
  if (checkbox.checked) {
    checkedIds.add(idx);
  } else {
    checkedIds.delete(idx);
  }
  const card = document.querySelector(`.question-card[data-idx="${idx}"]`);
  if (card) card.classList.toggle('answered', checkbox.checked);
  updateProgress();
  saveState();
}

function updateProgress() {
  const total = questions.length;
  const done = checkedIds.size;
  document.getElementById('done-count').textContent = done;
  document.getElementById('total-count').textContent = total;
  document.getElementById('progress-bar').style.width = `${(done / total) * 100}%`;
}

function updateTabState() {
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.cat === currentFilter));
}

function filterCat(cat, button) {
  currentFilter = cat;
  updateTabState();
  renderQuestions();
  saveState();
}

function togglePracticedOnly() {
  showPracticedOnly = !showPracticedOnly;
  const btn = document.getElementById('practiced-btn');
  btn.classList.toggle('active', showPracticedOnly);
  renderQuestions();
  saveState();
}

function resetProgress() {
  checkedIds.clear();
  updateProgress();
  renderQuestions();
  saveState();
}

loadState();
updateTabState();
document.getElementById('practiced-btn').classList.toggle('active', showPracticedOnly);
renderQuestions();
updateProgress();
document.getElementById('footer-year').textContent = new Date().getFullYear();