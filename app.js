// ── 수브레인 영어 — SPA 로직 ────────────────────────────────────

// ── 유틸 ──
const $ = id => document.getElementById(id);
let LESSONS = UNIT1.lessons; // 현재 진행 중인 유닛의 레슨 배열

// ── 용어 사전 ──────────────────────────────────────────────────
const GLOSSARY = {
  '주어': {
    dict: '주어(主語) — 문장에서 서술어의 주체가 되는 성분. 한국어에서는 "은/는/이/가"가 붙는 자리.',
    easy: '문장의 주인공. "누가? 무엇이?"를 담당합니다. 동사 앞에서 찾으면 됩니다.',
  },
  '동사': {
    dict: '동사(動詞) — 사람이나 사물의 동작·상태·존재를 나타내는 품사.',
    easy: '문장의 심장. "무엇을 한다, 어떤 상태다"를 나타내는 말. 동사가 없으면 문장이 성립하지 않습니다.',
  },
  '목적어': {
    dict: '목적어(目的語) — 동사가 나타내는 행위의 대상이 되는 문장 성분. 한국어에서는 "을/를"이 붙는 자리.',
    easy: '"무엇을?"이라고 물었을 때 나오는 답. "나는 먹는다 사과를" — 사과가 목적어입니다.',
  },
  '보어': {
    dict: '보어(補語) — 주어나 목적어의 의미를 보충·완성하는 문장 성분. 주격보어와 목적격보어로 나뉨.',
    easy: '삐리한 물결동사를 보충해주는 말. "나는 ~이다 학생" — "학생"이 없으면 문장이 완성되지 않아요. 그 빈자리를 채워주는 것이 보어입니다.',
  },
  '수식어': {
    dict: '수식어(修飾語) — 다른 말을 꾸미거나 한정하는 성분. 형용사적 수식어와 부사적 수식어로 나뉨.',
    easy: '뼈대에 붙은 양념. 제거해도 문장은 성립하지만, 있으면 의미가 더 풍부해집니다.',
  },
  '물결동사': {
    dict: '연결동사(Linking Verb) — 주어와 보어를 이어주는 동사. be동사 계열(is, am, are, was, were)과 감각동사(look, feel, seem 등)가 해당.',
    easy: '혼자 있으면 삐리한 동사. "나는 ~이다" — 뒤에 보어가 와야 의미가 완성됩니다. 물결(~) 모양처럼 뒤로 이어지는 특징이 있어요.',
  },
  '전치사': {
    dict: '전치사(前置詞) — 명사 앞에 놓여 시간·장소·방향·방법 등의 관계를 나타내는 품사. in, on, at, with, by, for, of, from, to 등.',
    easy: '명사 앞에 붙어서 "어디에, 언제, 어떻게"를 나타내는 말. 전치(前置)는 "앞에 놓인다"는 뜻입니다.',
  },
  '전치사구': {
    dict: '전치사구(前置詞句) — 전치사와 그 목적어(명사/명사구)로 이루어진 어구. 형용사구 또는 부사구로 기능.',
    easy: '전치사 + 명사 덩어리. "in the morning", "on the table"처럼 하나의 장신구 묶음입니다. 뼈대에서 제거해도 문장이 성립합니다.',
  },
  '형용사': {
    dict: '형용사(形容詞) — 명사를 수식하거나 서술어로서 명사의 성질·상태를 나타내는 품사.',
    easy: '명사를 꾸며주는 말. "큰 개", "파란 하늘" — "큰"과 "파란"이 형용사. "어떤?"이라는 질문에 답합니다.',
  },
  '관계사': {
    dict: '관계사(關係詞) — 명사를 수식하는 절을 이끄는 접속사적 기능의 품사. who, which, that, when, where 등이 해당.',
    easy: '두 문장을 연결해 명사를 설명하는 연결고리. 국어의 안은문장·안긴문장처럼, 문장 전체를 안고 앞 명사를 꾸며줍니다.',
  },
  '관계대명사': {
    dict: '관계대명사(關係代名詞) — 선행사(명사)를 수식하는 형용사절을 이끄는 대명사. who, whom, whose, which, that.',
    easy: '대명사이면서 동시에 설명 문장을 이끄는 말. "the man who runs" — who는 "man"을 가리키면서 "runs"라는 설명을 붙여줍니다.',
  },
  '관계사절': {
    dict: '관계사절(關係詞節) — 관계사(who, which, that 등)가 이끄는 절로, 선행하는 명사를 수식하는 형용사절.',
    easy: '명사에 붙는 설명 문장 덩어리. "the man [who runs every day]" — [ ] 전체가 관계사절로 "man"을 설명합니다.',
  },
  '분사': {
    dict: '분사(分詞) — 동사에서 파생되어 형용사처럼 쓰이는 말. 현재분사(-ing)와 과거분사(-ed/-en)가 있음.',
    easy: '동사가 형용사로 변신한 것. 태생이 동사라서 목적어나 보어를 끌고 다닐 수 있습니다. "달리는 개(running dog)" — running은 동사 run에서 왔지만 형용사처럼 개를 꾸며줍니다.',
  },
  '간접목적어': {
    dict: '간접목적어(間接目的語) — 4형식 문장에서 행위의 수혜자를 나타내는 목적어. "누구에게"에 해당하는 자리.',
    easy: '"누구에게"에 해당하는 말. "나는 주었다 그녀에게 선물을" — "그녀에게"가 간접목적어입니다.',
  },
  '직접목적어': {
    dict: '직접목적어(直接目的語) — 4형식 문장에서 직접적으로 전달되는 대상. "무엇을"에 해당하는 자리.',
    easy: '"무엇을"에 해당하는 말. "나는 주었다 그녀에게 선물을" — "선물을"이 직접목적어입니다.',
  },
  '목적보어': {
    dict: '목적보어(目的補語) — 5형식 문장에서 목적어의 상태나 성질을 보충 설명하는 성분.',
    easy: '목적어를 설명하는 보어. "우리는 부른다 그를 대장이라고" — "대장이라고"가 목적보어. 그 = 대장 관계가 성립합니다.',
  },
  '준동사': {
    dict: '준동사(準動詞) — 동사에서 파생되어 명사·형용사·부사로 기능하는 말. to부정사·동명사·분사가 해당.',
    easy: '동사에 준하는 말. 동사에서 태어났지만 다른 역할을 맡은 것들. 준(準) = "에 준한다, 에 버금간다".',
  },
  '동명사': {
    dict: '동명사(動名詞) — 동사원형에 -ing를 붙여 명사로 쓰는 형태. 주어·목적어·보어 자리에 위치.',
    easy: '동사가 명사로 변신한 것. "Swimming is fun" — Swimming(수영하는 것)이 주어 자리에 앉았습니다.',
  },
  '분사구문': {
    dict: '분사구문(分詞構文) — 분사(-ing 또는 p.p.)로 시작하는 절이 접속사절을 대신하여 부사적으로 쓰이는 구문.',
    easy: '접속사절을 분사로 압축한 것. "Because she was tired, she slept" → "Being tired, she slept" 처럼 앞 절을 짧게 줄입니다.',
  },
  '관계대명사': {
    dict: '관계대명사(關係代名詞) — 선행사(명사)를 수식하는 형용사절을 이끄는 대명사. who, whom, whose, which, that.',
    easy: '대명사이면서 설명 문장을 이끄는 말. "the man who runs" — who는 man을 가리키면서 runs라는 설명을 붙여줍니다. 뒤에 불완전절이 옵니다.',
  },
  '관계부사': {
    dict: '관계부사(關係副詞) — 선행사를 수식하는 절을 이끄는 부사. when(시간), where(장소), why(이유), how(방법).',
    easy: '장소·시간·이유를 나타내며 명사를 꾸미는 말. "the place where I grew up" — where 뒤에는 완전한 절이 옵니다. 관계대명사와 달리 뒤 절이 완전합니다.',
  },
  '동격': {
    dict: '동격(同格) — 같은 대상을 가리키는 두 명사(구)가 나란히 놓이는 구조. 콤마 동격과 that절 동격이 있음.',
    easy: '명사 옆에 명사가 붙어 같은 것을 설명. "Darwin, a great scientist" — Darwin = a great scientist. 콤마 사이의 명사구가 앞 명사를 부연 설명합니다.',
  },
  '등위접속사': {
    dict: '등위접속사(等位接續詞) — 문법적으로 대등한 단어·구·절을 연결하는 접속사. and/but/or/so/yet/for/nor.',
    easy: '대등한 것들을 나란히 연결하는 말. "FANBOYS" — For·And·Nor·But·Or·Yet·So. 절과 절을 연결하면 뼈대가 두 개 생깁니다.',
  },
  '부사절': {
    dict: '부사절(副詞節) — 접속사가 이끄는 절이 부사처럼 시간·조건·이유·양보를 나타내는 절.',
    easy: '문장에 덧붙는 수식어 절. when/if/because/although로 시작하는 절이 주절을 꾸밉니다. 제거해도 주절 뼈대는 성립합니다.',
  },
  '명사절': {
    dict: '명사절(名詞節) — 접속사(that/whether/의문사)가 이끄는 절이 명사처럼 주어·목적어·보어 역할을 하는 절.',
    easy: '절 전체가 명사가 된 것. "I know [that she is right]" — [ ] 전체가 know의 목적어. 뼈대의 일부입니다.',
  },
  '접속부사': {
    dict: '접속부사(接續副詞) — 두 문장 사이에서 논리적 흐름을 나타내는 부사. however·therefore·moreover·nevertheless 등.',
    easy: '문장과 문장 사이의 논리 신호. however = 전환, therefore = 결론, moreover = 추가. 수능 비문학의 논리 흐름을 이 신호로 파악합니다.',
  },
};

// 용어 자동 감지 — 긴 용어부터 처리해 중복 방지
const GLOSSARY_TERMS = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);

function wrapGlossaryTerms(el) {
  // 텍스트 노드만 탐색해서 감싸기
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    if (!node.textContent.trim()) return;
    // 이미 .term 안에 있으면 스킵
    if (node.parentElement.classList.contains('term')) return;

    let html = node.textContent;
    let replaced = false;
    GLOSSARY_TERMS.forEach(term => {
      if (html.includes(term)) {
        html = html.replace(
          new RegExp(term, 'g'),
          `<span class="term" data-term="${term}">${term}</span>`
        );
        replaced = true;
      }
    });
    if (replaced) {
      const span = document.createElement('span');
      span.innerHTML = html;
      node.parentNode.replaceChild(span, node);
    }
  });
}

// ── 상태 ──
let state = {
  lessonIdx:       0,    // 현재 레슨 인덱스
  vocabIdx:        0,    // 어휘 카드 인덱스
  vocabFlipped:    false,
  stepIdx:         0,    // 스텝 인덱스
  dissectIdx:      0,    // 분해 인덱스
  dissectDone:     false,
  skeletonIdx:     0,    // 뼈대 남기기 인덱스
  skeletonDone:    false,
  quizIdx:         0,    // 퀴즈 인덱스
  quizScore:       0,
  quizAnswered:    false,
  progress:        {},   // { 'L1_1': true, ... }
};

// ── localStorage 진도 ──
function loadProgress() {
  try { state.progress = JSON.parse(localStorage.getItem('sb_progress') || '{}'); }
  catch(e) { state.progress = {}; }
}
function saveProgress() {
  localStorage.setItem('sb_progress', JSON.stringify(state.progress));
}

// ── 수정 요청 피드백 ──
const LESSON_SCREENS = ['screen-vocab','screen-steps','screen-dissect','screen-skeleton','screen-quiz'];

function loadFeedback() {
  try { return JSON.parse(localStorage.getItem('sb_feedback') || '[]'); }
  catch(e) { return []; }
}
function saveFeedback(list) {
  localStorage.setItem('sb_feedback', JSON.stringify(list));
}
function openFeedback() {
  const lesson = LESSONS[state.lessonIdx];
  $('fb-modal-lesson').textContent = lesson ? lesson.title : '';
  $('fb-textarea').value = '';
  $('fb-modal').style.display = 'flex';
  setTimeout(() => $('fb-textarea').focus(), 100);
}
function closeFeedback() {
  $('fb-modal').style.display = 'none';
}
function saveFeedbackItem() {
  const text = $('fb-textarea').value.trim();
  if (!text) return;
  const lesson = LESSONS[state.lessonIdx];
  const list = loadFeedback();
  list.push({
    id: Date.now(),
    lessonId: lesson?.id || '',
    lessonTitle: lesson?.title || '',
    text,
    date: new Date().toLocaleDateString('ko-KR')
  });
  saveFeedback(list);
  closeFeedback();
}

// ── 화면 전환 ──
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  // 탭 동기화
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.screen === id.replace('screen-',''));
  });
  // 피드백 버튼: 레슨 화면에서만 표시
  $('fb-float-btn').style.display = LESSON_SCREENS.includes(id) ? 'flex' : 'none';
}

// ══════════════════════════════════════════════════════════════
// 홈 화면
// ══════════════════════════════════════════════════════════════

// 유닛 카드 + 레슨 목록 렌더링 (멀티유닛 공통)
function renderUnitBlock(fillId, pctId, listId, unit) {
  const lessons = unit.lessons;
  const done = lessons.filter(l => state.progress[l.id]).length;
  const pct  = Math.round((done / lessons.length) * 100);
  $(fillId).style.width = pct + '%';
  $(pctId).textContent  = pct + '%';

  const list = $(listId);
  list.innerHTML = '';
  lessons.forEach((lesson, idx) => {
    const isDone   = !!state.progress[lesson.id];
    const btn = document.createElement('button');
    btn.className = 'lesson-item' + (isDone ? ' done' : '');
    btn.innerHTML = `
      <div class="li-num">${isDone ? '✓' : idx + 1}</div>
      <div class="li-body">
        <div class="li-title">${lesson.title}</div>
        <div class="li-status">${isDone ? '완료' : '학습하기'}</div>
      </div>
      <div class="li-arrow">${isDone ? '' : '→'}</div>
    `;
    btn.addEventListener('click', () => {
      LESSONS = lessons;
      startLesson(idx);
    });
    list.appendChild(btn);
  });
}

function renderHome() {
  // 인사
  const hour = new Date().getHours();
  const greet = hour < 12 ? '좋은 아침이에요.' :
                hour < 18 ? '안녕하세요.' : '오늘도 수고했어요.';
  $('home-greeting').textContent = greet;

  // 도전 지문 카드
  if (typeof CHALLENGE_TEXT !== 'undefined') {
    $('cc-sentence').textContent = CHALLENGE_TEXT.sentence;
  }

  // UNIT 1 카드
  renderUnitBlock('uc-fill', 'uc-pct', 'lesson-list', UNIT1);

  // UNIT 2 카드
  renderUnitBlock('uc2-fill', 'uc2-pct', 'lesson-list-2', UNIT2);

  // UNIT 3 카드
  renderUnitBlock('uc3-fill', 'uc3-pct', 'lesson-list-3', UNIT3);

  // UNIT 4 카드
  renderUnitBlock('uc4-fill', 'uc4-pct', 'lesson-list-4', UNIT4);

  // UNIT 5 카드
  renderUnitBlock('uc5-fill', 'uc5-pct', 'lesson-list-5', UNIT5);

  // UNIT 6 카드
  renderUnitBlock('uc6-fill', 'uc6-pct', 'lesson-list-6', UNIT6);
}

// ══════════════════════════════════════════════════════════════
// 진도 화면
// ══════════════════════════════════════════════════════════════
function renderProgress() {
  const allUnits = [
    { unit: UNIT1, tag: 'UNIT 1' },
    { unit: UNIT2, tag: 'UNIT 2' },
    { unit: UNIT3, tag: 'UNIT 3' },
    { unit: UNIT4, tag: 'UNIT 4' },
    { unit: UNIT5, tag: 'UNIT 5' },
    { unit: UNIT6, tag: 'UNIT 6' },
  ];

  // 전체 통계
  const totalLessons = allUnits.reduce((s, u) => s + u.unit.lessons.length, 0);
  const doneLessons  = allUnits.reduce((s, u) =>
    s + u.unit.lessons.filter(l => state.progress[l.id]).length, 0);
  const totalPct = Math.round(doneLessons / totalLessons * 100);

  // SVG 원형 게이지 계산 (r=30, 둘레 ≈ 188.5)
  const R = 30, C = 2 * Math.PI * R;
  const offset = C - (totalPct / 100) * C;

  const scroll = $('prog-scroll');
  scroll.innerHTML = `
    <div class="prog-summary">
      <div class="prog-ring-wrap">
        <svg class="prog-ring" viewBox="0 0 76 76" width="76" height="76">
          <circle class="prog-ring-bg"   cx="38" cy="38" r="${R}" fill="none"/>
          <circle class="prog-ring-fill" cx="38" cy="38" r="${R}" fill="none"
            stroke-dasharray="${C.toFixed(1)}"
            stroke-dashoffset="${offset.toFixed(1)}"/>
        </svg>
        <div class="prog-ring-text">
          <div class="prog-ring-num">${totalPct}%</div>
          <div class="prog-ring-label">완료</div>
        </div>
      </div>
      <div class="prog-summary-info">
        <div class="prog-sum-title">전체 진도</div>
        <div class="prog-sum-score">${doneLessons} / ${totalLessons} 레슨</div>
        <div class="prog-sum-bar">
          <div class="prog-sum-fill" style="width:${totalPct}%"></div>
        </div>
      </div>
    </div>
    ${allUnits.map(({ unit, tag }) => {
      const lessons = unit.lessons;
      const done = lessons.filter(l => state.progress[l.id]).length;
      const pct  = Math.round(done / lessons.length * 100);
      const lessonHTML = lessons.map((lesson, idx) => {
        const isDone   = !!state.progress[lesson.id];
        const iconClass = isDone ? 'done' : 'ready';
        const iconText  = isDone ? '✓' : `${idx + 1}`;
        const statusText = isDone ? '완료' : '학습 가능';
        return `
          <div class="prog-lesson-item">
            <div class="pli-icon ${iconClass}">${iconText}</div>
            <div class="pli-title">${lesson.title}</div>
            <div class="pli-status ${isDone ? 'done' : ''}">${statusText}</div>
          </div>`;
      }).join('');
      return `
        <div class="prog-unit-card">
          <div class="prog-unit-head">
            <div class="prog-unit-left">
              <div class="prog-unit-tag">${tag}</div>
              <div class="prog-unit-name">${unit.title}</div>
            </div>
            <div class="prog-unit-right">
              <div class="prog-unit-pct">${pct}%</div>
              <div class="prog-unit-bar">
                <div class="prog-unit-bar-fill" style="width:${pct}%"></div>
              </div>
            </div>
          </div>
          <div class="prog-lesson-list">${lessonHTML}</div>
        </div>`;
    }).join('')}

    ${renderFeedbackList()}
  `;
}

function renderFeedbackList() {
  const list = loadFeedback();
  const itemsHTML = list.length === 0
    ? `<div class="fb-empty">아직 수정 요청이 없습니다.</div>`
    : list.map(item => `
        <div class="fb-item" data-fbid="${item.id}">
          <div class="fb-item-meta">
            <span>${item.lessonTitle || '레슨 미지정'}</span>
            <span>
              ${item.date}
              <button class="fb-item-del" onclick="deleteFeedback(${item.id})">삭제</button>
            </span>
          </div>
          <div class="fb-item-text">${item.text}</div>
        </div>`).join('');

  return `
    <div class="fb-list-section">
      <div class="fb-list-head">
        <div class="fb-list-head-title">✏️ 수정 요청 ${list.length}건</div>
        ${list.length > 0 ? `<button class="fb-copy-btn" onclick="copyAllFeedback()">전체 복사</button>` : ''}
      </div>
      ${itemsHTML}
    </div>`;
}

function deleteFeedback(id) {
  const list = loadFeedback().filter(f => f.id !== id);
  saveFeedback(list);
  renderProgress();
  showScreen('screen-progress');
}

function copyAllFeedback() {
  const list = loadFeedback();
  const text = list.map(f =>
    `[${f.lessonTitle}] (${f.date})\n${f.text}`
  ).join('\n\n---\n\n');
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.fb-copy-btn');
    if (btn) { btn.textContent = '복사됨 ✓'; setTimeout(() => btn.textContent = '전체 복사', 1500); }
  });
}

// ══════════════════════════════════════════════════════════════
// 레슨 시작 → 어휘 화면
// ══════════════════════════════════════════════════════════════
function startLesson(idx) {
  state.lessonIdx    = idx;
  state.vocabIdx     = 0;
  state.vocabFlipped = false;
  renderVocab();
  showScreen('screen-vocab');
}

function renderVocab() {
  const lesson = LESSONS[state.lessonIdx];
  $('vocab-lesson-label').textContent = lesson.title;

  const vocab = lesson.vocab;
  const v = vocab[state.vocabIdx];

  // 카드 리셋
  const card = $('flip-card');
  card.classList.remove('flipped');
  state.vocabFlipped = false;
  $('flip-word').textContent    = v.word;
  $('flip-meaning').textContent = v.meaning;
  $('flip-example').textContent = v.example;

  // 닷
  $('flip-dots').innerHTML = vocab.map((_, i) => {
    let cls = 'fdot';
    if (i < state.vocabIdx) cls += ' done';
    else if (i === state.vocabIdx) cls += ' active';
    return `<span class="${cls}"></span>`;
  }).join('');

  $('vocab-count').textContent = `${state.vocabIdx + 1} / ${vocab.length}`;
}

// ══════════════════════════════════════════════════════════════
// 스텝 화면
// ══════════════════════════════════════════════════════════════
function startSteps() {
  state.stepIdx = 0;
  renderStep();
  showScreen('screen-steps');
}

function renderStep() {
  const lesson = LESSONS[state.lessonIdx];
  const steps  = lesson.steps;
  const total  = steps.length;
  const idx    = state.stepIdx;
  const isLast = idx === total - 1;

  $('steps-lesson-label').textContent  = lesson.title;
  $('steps-progress-label').textContent = `${idx + 1} / ${total}`;

  // 카드 내용 + 애니메이션
  const card = $('step-card');
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = '';
  $('step-body').innerHTML = steps[idx];
  wrapGlossaryTerms($('step-body'));

  // 닷
  $('step-dots').innerHTML = steps.map((_, i) => {
    let cls = 'sdot';
    if (i < idx) cls += ' done';
    else if (i === idx) cls += ' active';
    return `<span class="${cls}"></span>`;
  }).join('');

  // 진도바
  $('sfb-fill').style.width = ((idx + 1) / total * 100) + '%';

  // 마지막 스텝에서 '연습 문제로' 버튼 표시
  const btn = $('step-summary-btn');
  btn.style.display = isLast ? 'flex' : 'none';

  // 이전 버튼: 첫 스텝이면 숨김
  const prevBtn = $('step-prev-btn');
  prevBtn.style.visibility = idx === 0 ? 'hidden' : 'visible';
}

function advanceStep() {
  const steps = LESSONS[state.lessonIdx].steps;
  if (state.stepIdx < steps.length - 1) {
    state.stepIdx++;
    renderStep();
  }
}

// ══════════════════════════════════════════════════════════════
// 문장 분해 화면
// ══════════════════════════════════════════════════════════════
function startDissect() {
  state.dissectIdx  = 0;
  state.dissectDone = false;
  renderDissect();
  showScreen('screen-dissect');
}

function renderDissect() {
  const lesson   = LESSONS[state.lessonIdx];
  const items    = lesson.dissection;
  const total    = items.length;
  const idx      = state.dissectIdx;
  const item     = items[idx];
  state.dissectDone = false;

  $('dissect-lesson-label').textContent  = lesson.title;
  $('dissect-progress-label').textContent = `${idx + 1} / ${total}`;
  $('dissect-task').textContent = item.taskLabel;
  $('dissect-feedback').style.display  = 'none';
  $('dissect-feedback').className      = 'dissect-feedback';
  $('dissect-next-btn').style.display  = 'none';

  // 형식 선택 모드
  if (item.task === 'form') {
    $('dissect-sentence').innerHTML = '';
    // 토큰 (색상만, 클릭 없음)
    item.sentence.forEach((text, i) => {
      const span = document.createElement('span');
      span.className = `token role-${item.roles[i]} disabled`;
      span.textContent = text;
      $('dissect-sentence').appendChild(span);
    });

    const formOpts = $('form-opts');
    formOpts.style.display = 'flex';
    formOpts.innerHTML = '';
    item.formOpts.forEach((label, i) => {
      const btn = document.createElement('button');
      btn.className = 'form-opt-btn';
      btn.textContent = label;
      btn.addEventListener('click', () => {
        if (state.dissectDone) return;
        state.dissectDone = true;
        // 모든 버튼 비활성
        formOpts.querySelectorAll('.form-opt-btn').forEach(b => b.style.pointerEvents = 'none');
        const correct = i === item.ans;
        btn.classList.add(correct ? 'selected-correct' : 'selected-wrong');
        if (!correct) {
          formOpts.querySelectorAll('.form-opt-btn')[item.ans].classList.add('selected-correct');
        }
        showDissectFeedback(correct, item);
      });
      formOpts.appendChild(btn);
    });

  } else {
    // 단어 탭 모드
    $('form-opts').style.display = 'none';
    $('dissect-sentence').innerHTML = '';
    item.sentence.forEach((text, i) => {
      const span = document.createElement('span');
      span.className = 'token';
      span.textContent = text;
      span.addEventListener('click', () => {
        if (state.dissectDone) return;
        const correct = item.roles[i] === item.task;
        state.dissectDone = true;
        // 색상 표시
        item.sentence.forEach((_, j) => {
          const el = $('dissect-sentence').children[j];
          el.classList.add(`role-${item.roles[j]}`, 'disabled');
        });
        span.classList.add(correct ? 'correct' : 'wrong');
        showDissectFeedback(correct, item);
      });
      $('dissect-sentence').appendChild(span);
    });
  }
}

function showDissectFeedback(correct, item) {
  const fb = $('dissect-feedback');
  fb.style.display = 'block';
  if (correct) {
    fb.className = 'dissect-feedback ok';
    fb.textContent = item.ok;
  } else {
    fb.className = 'dissect-feedback fail';
    fb.textContent = `힌트: ${item.hint}`;
  }
  $('dissect-next-btn').style.display = 'flex';
}

// ══════════════════════════════════════════════════════════════
// 뼈대 남기기 화면
// ══════════════════════════════════════════════════════════════
function startSkeleton() {
  state.skeletonIdx  = 0;
  state.skeletonDone = false;
  renderSkeleton();
  showScreen('screen-skeleton');
}

function renderSkeleton() {
  const lesson   = LESSONS[state.lessonIdx];
  const items    = lesson.skeleton;
  const total    = items.length;
  const idx      = state.skeletonIdx;
  const item     = items[idx];
  state.skeletonDone = false;

  $('skeleton-lesson-label').textContent   = lesson.title;
  $('skeleton-progress-label').textContent = `${idx + 1} / ${total}`;
  $('skeleton-task').textContent           = '수식어(양념)를 탭해서 제거하세요';
  $('skeleton-result').className           = 'skeleton-result';
  $('skeleton-guide').className            = 'skeleton-guide';
  $('skeleton-next-btn').style.display     = 'none';

  const sentenceEl = $('skeleton-sentence');
  sentenceEl.innerHTML = '';

  // chunks(기존) 또는 tokens(신규) 정규화
  const chunks = item.chunks || item.tokens.map(t => ({
    text: t.text,
    role: t.role,
    keep: t.role !== 'modifier'
  }));
  // 완성 뼈대 텍스트: result(기존) 또는 answer 배열 조합(신규)
  const resultText = item.result || (item.answer ? item.answer.join(' ') : '');

  // 수식어 남은 개수 추적
  let modCount = chunks.filter(c => !c.keep).length;

  // 수식어가 없는 경우(모두 뼈대) 즉시 완료
  if (modCount === 0) {
    state.skeletonDone = true;
    const resEl = $('skeleton-result');
    resEl.textContent = resultText;
    resEl.classList.add('show');
    const guideEl = $('skeleton-guide');
    guideEl.textContent = item.guide || '';
    guideEl.classList.add('show');
    const isLast = idx === items.length - 1;
    $('skeleton-next-btn').textContent   = isLast ? '퀴즈로 →' : '다음 →';
    $('skeleton-next-btn').style.display = 'flex';
  }

  chunks.forEach((chunk) => {
    const span = document.createElement('span');
    span.className = `sk-chunk role-${chunk.role}`;
    span.textContent = chunk.text;

    if (!chunk.keep) {
      // 수식어 → 탭하면 2단계 애니메이션 후 제거
      span.addEventListener('click', () => {
        if (span.classList.contains('dissolving') || span.classList.contains('removed')) return;

        // 1단계: 흐릿하게
        span.classList.add('dissolving');

        setTimeout(() => {
          // 2단계: 자리까지 접힘
          span.classList.remove('dissolving');
          span.classList.add('removed');
          modCount--;

          if (modCount === 0) {
            // 잠시 후 결과 표시
            setTimeout(() => {
              sentenceEl.classList.add('complete');
              state.skeletonDone = true;
              const resEl = $('skeleton-result');
              resEl.textContent = resultText;
              resEl.classList.add('show');
              const guideEl = $('skeleton-guide');
              guideEl.textContent = item.guide || '';
              guideEl.classList.add('show');
              const isLast = idx === items.length - 1;
              $('skeleton-next-btn').textContent   = isLast ? '퀴즈로 →' : '다음 →';
              $('skeleton-next-btn').style.display = 'flex';
            }, 420);
          }
        }, 350);
      });
    }

    sentenceEl.appendChild(span);
  });
}

// ══════════════════════════════════════════════════════════════
// 퀴즈 화면
// ══════════════════════════════════════════════════════════════
function startQuiz() {
  state.quizIdx      = 0;
  state.quizScore    = 0;
  state.quizAnswered = false;
  renderQuiz();
  showScreen('screen-quiz');
}

function renderQuiz() {
  const lesson  = LESSONS[state.lessonIdx];
  const quizzes = lesson.quiz;
  const total   = quizzes.length;
  const idx     = state.quizIdx;
  const q       = quizzes[idx];
  state.quizAnswered = false;

  $('quiz-lesson-label').textContent   = lesson.title;
  $('quiz-progress-label').textContent  = `${idx + 1} / ${total}`;
  $('quiz-prog-fill').style.width       = ((idx + 1) / total * 100) + '%';
  $('quiz-q').textContent               = q.q;
  $('quiz-exp').style.display           = 'none';
  $('quiz-next-btn').style.display      = 'none';

  const opts = $('quiz-opts');
  opts.innerHTML = '';
  const labels = ['①', '②', '③', '④'];
  q.opts.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt';
    btn.innerHTML = `<span class="opt-num">${labels[i]}</span><span>${text}</span>`;
    btn.addEventListener('click', () => {
      if (state.quizAnswered) return;
      state.quizAnswered = true;
      const answerKey = q.ans ?? q.answer;          // UNIT1-3: ans, UNIT4-6: answer
      const correct = i === answerKey;
      if (correct) state.quizScore++;
      // 정답/오답 표시
      opts.querySelectorAll('.quiz-opt').forEach((b, j) => {
        b.classList.add('disabled');
        if (j === answerKey) b.classList.add('correct');
        else if (j === i && !correct) b.classList.add('wrong');
      });
      $('quiz-exp').textContent    = q.exp;
      $('quiz-exp').style.display  = 'block';
      const isLast = idx === quizzes.length - 1;
      $('quiz-next-btn').textContent    = isLast ? '결과 보기 →' : '다음 문제 →';
      $('quiz-next-btn').style.display  = 'flex';
    });
    opts.appendChild(btn);
  });
}

// ══════════════════════════════════════════════════════════════
// 결과 화면
// ══════════════════════════════════════════════════════════════
function showResult() {
  const lesson  = LESSONS[state.lessonIdx];
  const total   = lesson.quiz.length;
  const score   = state.quizScore;
  const pct     = Math.round(score / total * 100);

  const msgs = pct === 100
    ? '모든 문제를 맞혔습니다.'
    : pct >= 75
    ? '잘 이해했어요. 다음 레슨으로 넘어가세요.'
    : pct >= 50
    ? '절반 이상 맞혔어요. 한 번 더 복습해보세요.'
    : '다시 도전해보세요.';

  $('result-title').textContent    = `${lesson.title} 완료`;
  $('result-score-big').textContent = `${score} / ${total}`;
  $('result-msg').textContent      = msgs;

  // 합격 처리 (75% 이상)
  if (pct >= 75) {
    state.progress[lesson.id] = true;
    saveProgress();
  }

  // 다음 레슨 버튼
  const nextIdx = state.lessonIdx + 1;
  const nextBtn = $('result-next-btn');
  const epilogueBtn = $('result-epilogue-btn');
  epilogueBtn.style.display = 'none';

  if (nextIdx < LESSONS.length) {
    nextBtn.textContent   = `다음 레슨: ${LESSONS[nextIdx].title} →`;
    nextBtn.style.display = 'flex';
    nextBtn.onclick       = () => startLesson(nextIdx);
  } else {
    // 마지막 레슨 완료
    nextBtn.style.display = 'none';
    epilogueBtn.style.display = 'flex';
    epilogueBtn.onclick   = () => showScreen('screen-epilogue');
  }

  showScreen('screen-result');
}

// ══════════════════════════════════════════════════════════════
// 이벤트 바인딩
// ══════════════════════════════════════════════════════════════
function bindEvents() {

  // ── 수정 요청 피드백 ──
  $('fb-float-btn').addEventListener('click', openFeedback);
  $('fb-close').addEventListener('click', closeFeedback);
  $('fb-modal-bg').addEventListener('click', closeFeedback);
  $('fb-save-btn').addEventListener('click', saveFeedbackItem);

  // ── 탭바 ──
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.screen === 'home') {
        renderHome();
        showScreen('screen-home');
      } else if (btn.dataset.screen === 'progress') {
        renderProgress();
        showScreen('screen-progress');
      }
    });
  });

  // ── 어휘 ──
  $('flip-card').addEventListener('click', () => {
    $('flip-card').classList.toggle('flipped');
    state.vocabFlipped = !state.vocabFlipped;
  });
  $('vocab-prev').addEventListener('click', () => {
    if (state.vocabIdx > 0) { state.vocabIdx--; renderVocab(); }
  });
  $('vocab-next').addEventListener('click', () => {
    const vocab = LESSONS[state.lessonIdx].vocab;
    if (state.vocabIdx < vocab.length - 1) { state.vocabIdx++; renderVocab(); }
  });
  $('vocab-back').addEventListener('click', () => { renderHome(); showScreen('screen-home'); });
  $('vocab-start-btn').addEventListener('click', startSteps);

  // ── 스텝 ──
  $('step-area').addEventListener('click', e => {
    if (e.target.closest('#step-summary-btn') || e.target.closest('#step-prev-btn')) return;
    advanceStep();
  });
  $('step-summary-btn').addEventListener('click', e => {
    e.stopPropagation();
    startDissect();
  });
  $('step-prev-btn').addEventListener('click', e => {
    e.stopPropagation();
    if (state.stepIdx > 0) {
      state.stepIdx--;
      renderStep();
    }
  });
  $('steps-back').addEventListener('click', () => { renderHome(); showScreen('screen-home'); });
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
    if ($('fb-modal').style.display !== 'none') return;
    if (e.code === 'Space' && $('screen-steps').classList.contains('active')) {
      e.preventDefault();
      advanceStep();
    }
  });

  // ── 분해 ──
  $('dissect-back').addEventListener('click', () => { renderHome(); showScreen('screen-home'); });
  $('dissect-next-btn').addEventListener('click', () => {
    const lesson = LESSONS[state.lessonIdx];
    const items  = lesson.dissection;
    if (state.dissectIdx < items.length - 1) {
      state.dissectIdx++;
      renderDissect();
    } else {
      // 뼈대 남기기가 있으면 먼저, 없으면 바로 퀴즈
      if (lesson.skeleton && lesson.skeleton.length > 0) {
        startSkeleton();
      } else {
        startQuiz();
      }
    }
  });

  // ── 뼈대 남기기 ──
  $('skeleton-back').addEventListener('click', () => { renderHome(); showScreen('screen-home'); });
  $('skeleton-next-btn').addEventListener('click', () => {
    const lesson = LESSONS[state.lessonIdx];
    const items  = lesson.skeleton;
    if (state.skeletonIdx < items.length - 1) {
      state.skeletonIdx++;
      renderSkeleton();
    } else {
      startQuiz();
    }
  });

  // ── 퀴즈 ──
  $('quiz-back').addEventListener('click', () => { renderHome(); showScreen('screen-home'); });
  $('quiz-next-btn').addEventListener('click', () => {
    const quizzes = LESSONS[state.lessonIdx].quiz;
    if (state.quizIdx < quizzes.length - 1) {
      state.quizIdx++;
      renderQuiz();
    } else {
      showResult();
    }
  });

  // ── 결과 ──
  $('result-home-btn').addEventListener('click', () => { renderHome(); showScreen('screen-home'); });

  // ── 에필로그 ──
  $('ep-home-btn').addEventListener('click', () => { renderHome(); showScreen('screen-home'); });

  // ── 용어 정의 카드 ──
  // 용어 탭 — 이벤트 위임 (step-body 안 .term)
  document.addEventListener('click', e => {
    const termEl = e.target.closest('.term');
    if (termEl) {
      e.stopPropagation();
      const key  = termEl.dataset.term;
      const data = GLOSSARY[key];
      if (!data) return;
      $('tc-term').textContent = key;
      $('tc-dict').textContent = data.dict;
      $('tc-easy').textContent = data.easy;
      const overlay = $('term-overlay');
      overlay.style.display = 'flex';
      return;
    }
    // 카드 바깥 탭 → 닫기
    if ($('term-overlay').style.display !== 'none') {
      if (!e.target.closest('.term-card')) {
        $('term-overlay').style.display = 'none';
      }
    }
  });
  $('tc-close').addEventListener('click', () => {
    $('term-overlay').style.display = 'none';
  });
}

// ══════════════════════════════════════════════════════════════
// 초기화
// ══════════════════════════════════════════════════════════════
function init() {
  loadProgress();
  renderHome();
  bindEvents();
  showScreen('screen-home');
}

document.addEventListener('DOMContentLoaded', init);
