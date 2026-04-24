// ── UNIT 1: 뼈대 찾기 ──────────────────────────────────────────
const UNIT1 = {
  id: 'unit1',
  title: '뼈대 찾기',
  subtitle: '자리가 역할을 결정한다',
  lessons: [

    // ══════════════════════════════════════════════════════════════
    // 준비 1강: 영어의 8가지 재료 — 품사
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L0_1',
      title: '준비 1강 — 영어의 8가지 재료',
      done: false,

      vocab: [
        { word: 'beautiful', meaning: '아름다운 (형용사)', example: '아름다운 꽃이 핀다.' },
        { word: 'quickly',   meaning: '빠르게 (부사)',    example: '그는 달린다 빠르게.' },
        { word: 'and',       meaning: '그리고 (접속사)',  example: '나는 읽는다 그리고 쓴다.' },
        { word: 'in',        meaning: '~안에 (전치사)',   example: '고양이가 잔다 상자 안에.' },
      ],

      steps: [
        `요리를 하려면 재료가 필요합니다.<br><br>소고기, 양파, 당근, 소금, 기름 —<br>각각의 재료는 고유한 성질이 있어요.<br><br>영어 문장도 마찬가지입니다.<br>문장을 만드는 <strong>8가지 재료</strong>가 있습니다.<br>이것을 <strong>품사</strong>라고 합니다.`,

        `품사란 단어가 태어날 때부터 갖는 성질입니다.<br><br>사람도 태어날 때부터 이름이 있듯이,<br>단어도 태어날 때부터 품사가 있습니다.<br><br>영어의 8가지 품사:<br><strong>명사 · 대명사 · 동사 · 형용사</strong><br><strong>부사 · 전치사 · 접속사 · 감탄사</strong>`,

        `<strong>명사(名詞)</strong> — 이름을 나타내는 말<br><br>사람, 장소, 사물, 개념 모두 명사입니다.<br><br>student / city / love / happiness<br>학생 / 도시 / 사랑 / 행복<br><br>문장의 주인공 자리에 가장 많이 들어가는 재료입니다.`,

        `<strong>대명사(代名詞)</strong> — 명사를 대신하는 말<br><br>같은 명사를 반복하지 않기 위해 씁니다.<br><br>Tom is kind. <em>He</em> is my friend.<br>나는 / 너는 / 그는 / 그녀는 / 우리는<br>I / you / he / she / we / they<br><br>독해할 때 <em>he, she, it, they</em>가<br>무엇을 가리키는지 찾는 것이 중요합니다.`,

        `<strong>동사(動詞)</strong> — 행동·상태를 나타내는 말<br><br>8가지 재료 중 가장 중요합니다.<br><br>run / eat / become / seem<br>달리다 / 먹다 / 되다 / ~처럼 보이다<br><br>동사가 없으면 문장이 될 수 없습니다.<br>나머지 7개 재료는 동사를 중심으로 모입니다.`,

        `<strong>형용사(形容詞)</strong> — 명사를 꾸미는 말<br>big / small / beautiful / cold<br>크다 / 작다 / 아름답다 / 차갑다<br><br><strong>부사(副詞)</strong> — 동사·형용사를 꾸미는 말<br>quickly / very / always / never<br>빠르게 / 매우 / 항상 / 절대<br><br>형용사는 <em>명사 옆</em>에,<br>부사는 <em>동사·형용사 옆</em>에 붙습니다.`,

        `<strong>전치사(前置詞)</strong> — 명사 앞에 놓여 관계를 나타내는 말<br>in / on / at / with / by / for<br>~안에 / ~위에 / ~에 / ~와 함께 / ~에 의해 / ~을 위해<br><br><strong>접속사(接續詞)</strong> — 단어나 문장을 연결하는 말<br>and / but / because / although<br>그리고 / 하지만 / 왜냐하면 / 비록 ~지만<br><br><strong>감탄사(感歎詞)</strong> — 감정을 표현하는 말<br>Oh! Wow! Oops! — 독해에서 비중이 낮습니다.`,

        `8가지 재료를 정리할게요.<br><br><strong>명사</strong> — 이름<br><strong>대명사</strong> — 명사 대신<br><strong>동사</strong> — 행동·상태 (가장 중요)<br><strong>형용사</strong> — 명사 꾸밈<br><strong>부사</strong> — 동사·형용사 꾸밈<br><strong>전치사</strong> — 명사 앞 관계 표시<br><strong>접속사</strong> — 연결<br><strong>감탄사</strong> — 감정 표현`,

        `그런데 여기서 중요한 질문이 있습니다.<br><br>재료를 안다고 요리가 될까요?<br><br>소고기, 양파, 당근이 있어도<br>어떻게 배치하느냐에 따라<br>전혀 다른 요리가 됩니다.<br><br>다음 강에서는 <strong>재료를 담는 틀</strong>을 배웁니다.<br>품사(재료)와 문장성분(틀)의 차이입니다.`,
      ],

      dissection: [
        {
          sentence: ['아름다운', '꽃이', '핀다', '조용히.'],
          roles:    ['modifier', 'subject', 'verb', 'modifier'],
          task: 'verb', taskLabel: '동사(행동·상태)를 탭하세요',
          hint: '무엇을 하는지, 어떤 상태인지를 나타내는 말이 동사입니다.',
          ok: '맞아요. "핀다"가 동사입니다. 8품사 중 가장 중요한 재료입니다.',
        },
        {
          sentence: ['그는', '달린다', '빠르게', '공원에서.'],
          roles:    ['subject', 'verb', 'modifier', 'modifier'],
          task: 'verb', taskLabel: '동사를 탭하세요',
          hint: '"빠르게"는 부사, "공원에서"는 전치사구입니다. 행동을 나타내는 말을 찾으세요.',
          ok: '맞아요. "달린다"가 동사입니다.',
        },
        {
          sentence: ['나는', '좋아한다', '차가운', '커피를.'],
          roles:    ['subject', 'verb', 'modifier', 'object'],
          task: 'verb', taskLabel: '동사를 탭하세요',
          hint: '"차가운"은 형용사(커피를 꾸밈), "커피를"은 명사입니다.',
          ok: '맞아요. "좋아한다"가 동사입니다. 재료 중 핵심입니다.',
        },
      ],

      skeleton: [],

      quiz: [
        {
          q: '품사란 무엇입니까?',
          opts: [
            '문장 안에서 단어가 맡는 역할',
            '단어가 태어날 때부터 갖는 고유한 성질',
            '문장을 연결하는 방법',
            '동사의 다른 이름',
          ],
          ans: 1,
          exp: '품사는 단어 자체의 고유한 성질입니다. 문장 안에서의 역할은 "문장성분"이라고 합니다.',
        },
        {
          q: '다음 중 명사가 아닌 것은?',
          opts: ['happiness', 'city', 'beautiful', 'love'],
          ans: 2,
          exp: '"beautiful"은 형용사(아름다운)입니다. happiness(행복), city(도시), love(사랑)는 모두 명사입니다.',
        },
        {
          q: '8품사 중 독해에서 가장 중요한 것은?',
          opts: ['명사', '형용사', '감탄사', '동사'],
          ans: 3,
          exp: '동사가 없으면 문장이 성립하지 않습니다. 나머지 7개 재료는 모두 동사를 중심으로 모입니다.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 준비 2강: 재료와 틀은 다르다 — 품사 vs 문장성분
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L0_2',
      title: '준비 2강 — 재료와 틀은 다르다',
      done: false,

      vocab: [
        { word: 'love',  meaning: '사랑(명사) / 사랑하다(동사)', example: '사랑이 있다. / 나는 사랑한다 그녀를.' },
        { word: 'fast',  meaning: '빠른(형용사) / 빠르게(부사)',  example: '빠른 차. / 그는 달린다 빠르게.' },
        { word: 'clean', meaning: '깨끗한(형용사) / 청소하다(동사)', example: '깨끗한 방. / 나는 청소한다 방을.' },
        { word: 'well',  meaning: '잘(부사) / 건강한(형용사)',    example: '그는 잘 한다. / 그는 건강하다.' },
      ],

      steps: [
        `재료를 알았다고 요리가 되는 건 아닙니다.<br><br>소고기, 양파, 당근이 있어도<br>어떤 틀에 담느냐에 따라<br>불고기도 되고 카레도 됩니다.<br><br>문장도 마찬가지입니다.<br>재료(품사)를 담는 <strong>틀</strong>이 따로 있습니다.<br>이 틀을 <strong>문장성분</strong>이라고 합니다.`,

        `<strong>품사</strong>는 단어의 성질 — <em>재료</em><br><strong>문장성분</strong>은 문장 안 역할 — <em>틀(자리)</em><br><br>문장성분의 자리:<br><strong>주어</strong> — 누가/무엇이<br><strong>동사</strong> — 한다/이다<br><strong>목적어</strong> — 무엇을<br><strong>보어</strong> — 어떠한/무엇인<br><strong>수식어</strong> — 꾸미는 말`,

        `같은 재료(품사)가 다른 틀(문장성분)을 맡을 수 있습니다.<br><br><div class="step-sentence"><mark class="s">사랑이</mark> <mark class="v">있다</mark>. — "사랑" → 주어 자리</div><div class="step-sentence">나는 <mark class="v">사랑한다</mark> <mark class="o">그녀를</mark>. — "사랑하다" → 동사 자리</div><br>명사 "사랑"은 주어·목적어·보어 자리에 모두 들어갈 수 있습니다.<br><em>재료는 같아도 자리가 달라집니다.</em>`,

        `형용사도 두 자리를 넘나듭니다.<br><br><div class="step-sentence"><span class="tok-mod">빠른</span> <mark class="s">차가</mark> <mark class="v">달린다</mark>. — "빠른" → 수식어 자리</div><div class="step-sentence"><mark class="s">차가</mark> <mark class="v">~이다</mark> <mark class="c">빠르다</mark>. — "빠르다" → 보어 자리</div><br>형용사 "빠른"은 수식어도 되고 보어도 됩니다.<br>자리가 다르면 역할이 다릅니다.`,

        `그런데 <strong>동사</strong>는 특별합니다.<br><br>다른 품사들은 이 자리도 갔다가 저 자리도 갈 수 있지만,<br>동사는 처음부터 <strong>문장의 핵심 자리</strong>를 맡습니다.<br><br>동사는 품사이면서,<br>동시에 문장의 가장 중요한 성분 그 자체입니다.<br><br>다른 재료들이 자리를 선택할 때,<br>동사는 이미 심장 자리에 있습니다.`,

        `정리하면 이렇습니다.<br><br><em>명사라는 재료 → 주어 자리에도, 목적어 자리에도</em><br><em>형용사라는 재료 → 수식어 자리에도, 보어 자리에도</em><br><br>하지만<br><em>동사라는 재료 → 항상 동사 자리. 문장의 핵심.</em><br><br>그래서 우리는 독해할 때<br>항상 동사부터 찾습니다.`,

        `그런데 영어는 이 자리 이동이 특히 자유롭습니다.<br><br><strong>water</strong> — 물(명사)<br>동사 자리에 가면 → "물을 주다"<br><br><strong>place</strong> — 장소(명사)<br>동사 자리에 가면 → "두다, 놓다"<br><br><div class="step-sentence"><mark class="s">She</mark> <mark class="v">watered</mark> <mark class="o">the plants</mark>.</div>그녀는 물을 주었다 식물에.<br><br><div class="step-sentence"><mark class="s">He</mark> <mark class="v">placed</mark> <mark class="o">the book</mark> <span class="tok-mod">on the table</span>.</div>그는 두었다 책을 테이블 위에.<br><br>한국어는 품사가 비교적 고정되어 있습니다.<br>하지만 영어에서는 명사가 동사 자리에 앉는 순간<br>동사의 역할을 합니다.<br>자리가 그만큼 강력합니다.`,

        `앞으로 이 두 가지를 구분하며 배웁니다.<br><br><strong>품사</strong>(재료): 이 단어는 어떤 성질인가<br><strong>문장성분</strong>(틀): 이 단어는 지금 어떤 역할인가<br><br>같은 단어라도 어떤 자리에 있느냐에 따라<br>역할이 달라집니다.<br><br>이제 뼈대를 찾으러 가겠습니다.`,
      ],

      dissection: [
        {
          sentence: ['나는', '사랑한다', '그녀를.'],
          roles:    ['subject', 'verb', 'object'],
          task: 'verb', taskLabel: '동사(문장성분)를 탭하세요',
          hint: '"사랑한다"는 동사 품사이면서 동시에 동사 자리(문장성분)를 맡고 있습니다.',
          ok: '맞아요. "사랑한다"는 품사도 동사, 문장성분도 동사 자리입니다.',
        },
        {
          sentence: ['빠른', '차가', '달린다', '조용히.'],
          roles:    ['modifier', 'subject', 'verb', 'modifier'],
          task: 'subject', taskLabel: '주어(문장성분)를 탭하세요',
          hint: '"빠른"은 형용사(품사)지만 지금 수식어 자리(문장성분)에 있습니다. 주어는 동사 앞에서 "무엇이"를 담당합니다.',
          ok: '맞아요. "차가"가 주어 자리입니다. 명사(품사) → 주어(문장성분).',
        },
        {
          sentence: ['그는', '~이다', '착한.'],
          roles:    ['subject', 'verb', 'complement'],
          task: 'complement', taskLabel: '보어(문장성분)를 탭하세요',
          hint: '"착한"은 형용사(품사)입니다. 지금 보어 자리(문장성분)에서 주어를 설명하고 있습니다.',
          ok: '맞아요. 형용사라는 재료가 보어라는 틀을 맡고 있습니다.',
        },
      ],

      skeleton: [],

      quiz: [
        {
          q: '품사와 문장성분의 차이는?',
          opts: [
            '품사는 문장 안 역할, 문장성분은 단어의 성질',
            '품사는 단어의 성질(재료), 문장성분은 문장 안 역할(틀)',
            '품사와 문장성분은 같은 말이다',
            '품사는 8개, 문장성분은 5개라는 차이만 있다',
          ],
          ans: 1,
          exp: '품사는 재료(단어 고유의 성질), 문장성분은 틀(문장 안에서 맡는 역할)입니다. 같은 재료도 다른 틀에 들어갈 수 있습니다.',
        },
        {
          q: '"The beautiful flower bloomed." 에서\n"beautiful"의 품사와 문장성분은?',
          opts: [
            '품사: 명사 / 문장성분: 주어',
            '품사: 형용사 / 문장성분: 수식어',
            '품사: 동사 / 문장성분: 동사',
            '품사: 부사 / 문장성분: 보어',
          ],
          ans: 1,
          exp: '"beautiful"은 형용사(품사)이고, 지금 "flower"를 꾸미는 수식어(문장성분) 자리에 있습니다.',
        },
        {
          q: '동사가 다른 품사와 특별히 다른 점은?',
          opts: [
            '동사는 명사 자리에도 들어갈 수 있다',
            '동사는 항상 문장 끝에 온다',
            '동사는 품사이면서 항상 문장의 핵심 성분 자리를 맡는다',
            '동사는 수식어 역할을 한다',
          ],
          ans: 2,
          exp: '다른 품사들은 여러 문장성분 자리를 넘나들지만, 동사는 처음부터 문장의 핵심 자리를 맡습니다. 품사이자 핵심 성분입니다.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 1-1: 동사부터 찾아라
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L1_1',
      title: '동사부터 찾아라',
      done: false,

      // 이 레슨 예문에 나오는 단어만
      vocab: [
        { word: 'run',    meaning: '달리다',   example: '나는 달린다.' },
        { word: 'laugh',  meaning: '웃다',     example: '그녀는 웃는다.' },
        { word: 'arrive', meaning: '도착하다', example: '기차가 도착한다.' },
        { word: 'sleep',  meaning: '자다',     example: '아기가 잔다.' },
      ],

      steps: [
        `영어 문장을 처음 봤을 때<br>어디서부터 봐야 할지 막막했던 적 있죠?<br><br>오늘 그 막막함을 없애드릴게요.`,

        `영어 문장에서 가장 먼저 찾아야 할 것,<br>딱 하나만 기억하세요.<br><br><strong style="font-size:1.2em">바로 동사입니다.</strong>`,

        `동사는 문장의 심장입니다.<br><br>심장이 없으면 사람이 살 수 없듯이,<br>동사가 없으면 문장이 될 수 없어요.`,

        `동사는 주어가 "무엇을 하는지"<br>또는 "어떤 상태인지"를 나타내는 말이에요.<br><br>달리다 / 웃다 / 자다 / 도착하다<br>이런 말들이 전부 동사입니다.`,

        `문장을 한번 볼게요.<br><br><div class="step-sentence">나는 <mark class="v">달린다</mark>.</div><br>달린다가 동사입니다.<br>"달린다"는 행동을 나타내고 있죠.`,

        `조금 더 길게 볼게요.<br><br><div class="step-sentence">나는 <mark class="v">먹는다</mark> 사과를.</div><br>먹는다가 동사입니다.<br>동사를 찾으면 앞에 <em>누가(주어)</em>,<br>뒤에 <em>무엇을(목적어)</em>이 보이기 시작해요.`,

        `긴 문장도 똑같아요.<br><br><div class="step-sentence">공원에 있는 그 작은 소년이 <mark class="v">달린다</mark> 매우 빠르게.</div><br>길어 보여도 동사는 하나입니다.<br>동사만 찾으면 실마리가 풀려요.`,

        `중요한 차이 하나.<br><br>한국어는 동사가 <strong>문장 끝</strong>에 오지만,<br>영어식 표현은 동사가 <strong>주어 바로 뒤</strong>에 와요.<br><br><div class="step-sentence"><mark class="s">나는</mark> <mark class="v">먹는다</mark> 사과를.</div><br>주어 → 동사 → 나머지. 이 순서입니다.`,

        `정리할게요.<br><br>독해 시작 공식:<br><br><strong>① 동사 찾기</strong><br><strong>② 동사 앞 → 주어</strong><br><strong>③ 나머지 해석</strong><br><br>딱 이 순서입니다.`,

        `이제 직접 찾아볼 차례입니다.<br><br>아래 문장들에서<br><strong>동사를 탭하세요.</strong>`,
      ],

      // 성분 찾기
      dissection: [
        {
          sentence: ['나는', '달린다', '빠르게.'],
          roles:    ['subject', 'verb', 'modifier'],
          task: 'verb', taskLabel: '동사를 탭하세요',
          hint: '"빠르게"는 어떻게를 나타내는 꾸밈말이에요.',
          ok: '맞아요. 달린다가 동사입니다.',
        },
        {
          sentence: ['그녀는', '웃는다', '크게.'],
          roles:    ['subject', 'verb', 'modifier'],
          task: 'verb', taskLabel: '동사를 탭하세요',
          hint: '"크게"는 어떻게를 나타내는 꾸밈말이에요.',
          ok: '맞아요. 웃는다가 동사입니다.',
        },
        {
          sentence: ['아기가', '잔다', '깊이.'],
          roles:    ['subject', 'verb', 'modifier'],
          task: 'verb', taskLabel: '동사를 탭하세요',
          hint: '"깊이"는 어떻게를 나타내는 꾸밈말이에요.',
          ok: '맞아요. 잔다가 동사입니다.',
        },
        {
          sentence: ['기차가', '도착한다', '역에.'],
          roles:    ['subject', 'verb', 'modifier'],
          task: 'verb', taskLabel: '동사를 탭하세요',
          hint: '"역에"는 어디에를 나타내는 꾸밈말이에요.',
          ok: '맞아요. 도착한다가 동사입니다.',
        },
      ],

      // 뼈대 남기기 (수식어를 탭해서 제거)
      skeleton: [
        {
          chunks: [
            { text: '나는', role: 'subject', keep: true },
            { text: '항상', role: 'modifier', keep: false },
            { text: '달린다', role: 'verb', keep: true },
            { text: '빠르게', role: 'modifier', keep: false },
            { text: '아침에.', role: 'modifier', keep: false },
          ],
          result: '나는 달린다.',
          guide: '수식어(양념)를 빼면 "나는 달린다."가 뼈대입니다.',
        },
        {
          chunks: [
            { text: '그녀는', role: 'subject', keep: true },
            { text: '환하게', role: 'modifier', keep: false },
            { text: '웃는다', role: 'verb', keep: true },
            { text: '무대 위에서.', role: 'modifier', keep: false },
          ],
          result: '그녀는 웃는다.',
          guide: '"환하게", "무대 위에서"는 수식어입니다. 뼈대는 "그녀는 웃는다."',
        },
      ],

      quiz: [
        {
          q: '다음 문장에서 동사는 무엇입니까?\n"공원에서 아이들이 신나게 뛰어다닌다."',
          opts: ['공원에서', '아이들이', '뛰어다닌다', '신나게'],
          ans: 2,
          exp: '"뛰어다닌다"가 행동을 나타내는 동사입니다. "공원에서"와 "신나게"는 꾸밈말이에요.',
        },
        {
          q: '동사를 가장 먼저 찾아야 하는 이유는?',
          opts: [
            '항상 문장 끝에 오기 때문에',
            '동사를 찾으면 주어와 나머지가 보이기 때문에',
            '동사가 가장 짧은 단어이기 때문에',
            '문장에서 가장 중요한 뜻을 가지기 때문에',
          ],
          ans: 1,
          exp: '동사를 찾으면 앞에 주어, 뒤에 목적어가 보입니다. 독해의 실마리가 풀려요.',
        },
        {
          q: '"나는 항상 빠르게 달린다." 에서 뼈대만 남기면?',
          opts: [
            '나는 항상 빠르게 달린다',
            '나는 달린다',
            '빠르게 달린다',
            '항상 달린다',
          ],
          ans: 1,
          exp: '"항상", "빠르게"는 꾸밈말(수식어)입니다. 빼도 문장이 성립해요. 뼈대는 "나는 달린다."',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 1-2: 자리가 역할을 결정한다
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L1_2',
      title: '자리가 역할을 결정한다',
      done: false,

      vocab: [
        { word: 'eat',   meaning: '먹다',   example: '나는 먹는다 사과를.' },
        { word: 'teach', meaning: '가르치다', example: '선생님이 가르친다 수학을.' },
        { word: 'love',  meaning: '사랑하다', example: '그는 사랑한다 음악을.' },
        { word: 'meet',  meaning: '만나다',   example: '나는 만난다 친구를.' },
      ],

      steps: [
        `한국어는 참 편한 언어입니다.<br><br><div class="step-sentence">나는 사과를 먹는다.</div><div class="step-sentence">사과를 나는 먹는다.</div><div class="step-sentence">먹는다, 나는 사과를.</div><br>순서가 달라도 뜻은 같습니다.`,

        `왜 그럴까요?<br><br>한국어에는 <strong>조사</strong>가 있기 때문입니다.<br><br>"나<strong>는</strong>" → 어디에 있든 주어<br>"사과<strong>를</strong>" → 어디에 있든 목적어<br><br>조사가 이름표처럼 붙어서 따라다닙니다.`,

        `영어식 표현은 다릅니다.<br><br>영어식 표현에는 조사가 없습니다.<br>그러면 어떻게 역할을 알 수 있을까요?`,

        `<strong>자리로 알 수 있습니다.</strong><br><br>영어식 표현에서는<br>조사가 말에 붙어 다니는 것이 아니라,<br><strong>자리에 박혀서 기다립니다.</strong>`,

        `동사 앞자리에는 <strong>"는/이/가"</strong>가 박혀 있고<br>동사 뒷자리에는 <strong>"를/을"</strong>이 박혀 있어요.<br><br><div class="step-sentence"><mark class="s">[는/이/가]</mark> &nbsp; 먹는다 &nbsp; <mark class="o">[를/을]</mark></div><br>그 자리에 앉는 말이 그 조사를 받게 됩니다.`,

        `예를 볼게요.<br><br><div class="step-sentence"><mark class="s">나는</mark> 먹는다 <mark class="o">사과를</mark>.</div><br>나 → 앞자리 → "는" → 주어<br>사과 → 뒷자리 → "를" → 목적어<br><br>자리가 역할을 결정합니다.`,

        `자리가 바뀌면 역할도 바뀝니다.<br><br><div class="step-sentence"><mark class="s">나는</mark> 먹는다 <mark class="o">사과를</mark>. → 내가 사과를 먹음</div><div class="step-sentence"><mark class="s">사과는</mark> 먹는다 <mark class="o">나를</mark>. → 사과가 나를 먹음</div><br>같은 단어인데 자리가 달라지니<br>역할이 완전히 바뀌어 버립니다.`,

        `핵심을 정리할게요.<br><br>한국어: 조사가 말에 붙어서 따라다닌다<br>영어식: 조사가 <strong>자리에 박혀서 기다린다</strong><br><br>그래서 영어식 표현에서는<br>어떤 말이 어떤 자리에 앉느냐가<br>곧 문법입니다.`,

        `이 자리 배치가 딱 다섯 가지입니다.<br><br>아무리 길고 복잡한 문장도<br>수식어를 걷어내고 뼈대만 보면<br>이 다섯 가지 중 하나입니다.<br><br>지금부터 하나씩 배워볼게요.`,

        `이제 직접 확인해보겠습니다.<br><br>아래 문장에서<br><strong>주어를 탭하세요.</strong>`,
      ],

      dissection: [
        {
          sentence: ['나는', '먹는다', '사과를.'],
          roles:    ['subject', 'verb', 'object'],
          task: 'subject', taskLabel: '주어를 탭하세요',
          hint: '동사(먹는다) 앞에 오는 말이 주어입니다.',
          ok: '맞아요. 동사 앞자리 → "나는"이 주어입니다.',
        },
        {
          sentence: ['선생님이', '가르친다', '수학을.'],
          roles:    ['subject', 'verb', 'object'],
          task: 'subject', taskLabel: '주어를 탭하세요',
          hint: '동사(가르친다) 앞에 오는 말이 주어입니다.',
          ok: '맞아요. "선생님이"가 주어입니다.',
        },
        {
          sentence: ['그는', '사랑한다', '음악을', '깊이.'],
          roles:    ['subject', 'verb', 'object', 'modifier'],
          task: 'object', taskLabel: '목적어를 탭하세요',
          hint: '동사(사랑한다) 뒤의 "를/을" 자리가 목적어입니다.',
          ok: '맞아요. "음악을"이 목적어입니다.',
        },
        {
          sentence: ['나는', '만난다', '오래된 친구를', '거리에서.'],
          roles:    ['subject', 'verb', 'object', 'modifier'],
          task: 'object', taskLabel: '목적어를 탭하세요',
          hint: '"거리에서"는 어디에서를 나타내는 꾸밈말이에요.',
          ok: '맞아요. "오래된 친구를"이 목적어입니다.',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: '나는', role: 'subject', keep: true },
            { text: '천천히', role: 'modifier', keep: false },
            { text: '먹는다', role: 'verb', keep: true },
            { text: '빨간', role: 'modifier', keep: false },
            { text: '사과를', role: 'object', keep: true },
            { text: '아침에.', role: 'modifier', keep: false },
          ],
          result: '나는 먹는다 사과를.',
          guide: '"천천히", "빨간", "아침에"는 수식어. 뼈대는 "나는 먹는다 사과를." (3형식)',
        },
      ],

      quiz: [
        {
          q: '영어식 표현에서 역할을 결정하는 것은?',
          opts: ['조사', '자리', '단어의 길이', '문장의 순서'],
          ans: 1,
          exp: '영어식 표현에서는 조사가 자리에 박혀 있습니다. 어떤 자리에 앉느냐가 역할을 결정해요.',
        },
        {
          q: '"사과는 먹는다 나를."에서 목적어는?',
          opts: ['사과는', '먹는다', '나를', '없음'],
          ans: 2,
          exp: '동사(먹는다) 뒷자리에 앉은 "나를"이 목적어입니다. 자리가 역할을 결정해요.',
        },
        {
          q: '"그녀는 열심히 공부한다 어려운 수학을 밤마다."에서 뼈대는?',
          opts: [
            '그녀는 열심히 공부한다 어려운 수학을 밤마다',
            '그녀는 공부한다 수학을',
            '열심히 공부한다 어려운 수학을',
            '그녀는 공부한다 밤마다',
          ],
          ans: 1,
          exp: '"열심히", "어려운", "밤마다"는 수식어입니다. 뼈대는 주어 + 동사 + 목적어.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 1-3: 1형식 — [는] + [다]
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L1_3',
      title: '1형식 — 주어가 동사한다',
      done: false,

      // 1형식 예문에 등장하는 단어만
      vocab: [
        { word: 'rise',  meaning: '뜨다, 오르다', example: '해가 뜬다.' },
        { word: 'fall',  meaning: '떨어지다, 내리다', example: '비가 내린다.' },
        { word: 'swim',  meaning: '수영하다', example: '물고기가 헤엄친다.' },
        { word: 'exist', meaning: '존재하다', example: '희망이 존재한다.' },
      ],

      steps: [
        `첫 번째 자리 배치입니다.<br><br>가장 단순한 형태예요.<br>주어가 있고, 동사가 있고, 그것으로 끝.<br><br><div class="step-sentence"><mark class="s">[는/이/가]</mark> + <mark class="v">[다]</mark></div>`,

        `예를 볼게요.<br><br><div class="step-sentence"><mark class="s">나는</mark> <mark class="v">달린다</mark>.</div><div class="step-sentence"><mark class="s">그녀는</mark> <mark class="v">웃는다</mark>.</div><div class="step-sentence"><mark class="s">비가</mark> <mark class="v">온다</mark>.</div><div class="step-sentence"><mark class="s">해가</mark> <mark class="v">뜬다</mark>.</div>`,

        `이 문장들을 보세요.<br><br>주어가 무언가를 하고 있지만,<br>그 행동이 다른 대상을 향하지 않아요.<br><br>"무엇을?" 이라고 물으면 어색합니다.<br>"무엇을 달린다?" → 이상하죠?`,

        `그래서 목적어가 필요 없습니다.<br><br>주어 + 동사만으로 문장이 완성돼요.<br><br><div class="step-sentence"><mark class="s">[는/이/가]</mark> + <mark class="v">[다]</mark></div><br>이 두 자리만 채우면 됩니다.`,

        `물론 수식어를 더할 수 있어요.<br>수식어는 양념이니까요.<br><br><div class="step-sentence"><mark class="s">나는</mark> <mark class="v">달린다</mark> <span class="tok-mod">빠르게</span>.</div><div class="step-sentence"><mark class="s">비가</mark> <mark class="v">온다</mark> <span class="tok-mod">세차게</span> <span class="tok-mod">밖에서</span>.</div><br>수식어가 아무리 붙어도<br>뼈대는 [는] + [다] 입니다.`,

        `독해할 때 활용법.<br><br>긴 문장을 보면 먼저 동사를 찾고,<br>앞에서 주어를 확인하세요.<br>나머지는 수식어입니다.<br><br><div class="step-sentence"><span class="tok-mod">이른 아침에</span> <mark class="s">공원의 새들이</mark> <mark class="v">노래한다</mark> <span class="tok-mod">나뭇가지 위에서</span>.</div><br>뼈대: 새들이 노래한다.`,

        `이제 직접 확인해보겠습니다.<br><br>아래 문장들에서<br><strong>동사와 주어를 탭하세요.</strong>`,
      ],

      dissection: [
        {
          sentence: ['해가', '뜬다', '동쪽에서.'],
          roles:    ['subject', 'verb', 'modifier'],
          task: 'verb', taskLabel: '동사를 탭하세요',
          hint: '"동쪽에서"는 어디에서를 나타내는 꾸밈말이에요.',
          ok: '맞아요. "뜬다"가 동사. 1형식 문장입니다.',
        },
        {
          sentence: ['차가운 비가', '내린다', '조용히.'],
          roles:    ['subject', 'verb', 'modifier'],
          task: 'subject', taskLabel: '주어를 탭하세요',
          hint: '동사(내린다) 앞에 오는 말이 주어입니다.',
          ok: '맞아요. "차가운 비가"가 주어입니다. (핵심: 비가)',
        },
        {
          sentence: ['물고기들이', '헤엄친다', '강에서', '자유롭게.'],
          roles:    ['subject', 'verb', 'modifier', 'modifier'],
          task: 'subject', taskLabel: '주어를 탭하세요',
          hint: '동사(헤엄친다) 앞에 있는 말이 주어입니다. "강에서", "자유롭게"는 꾸밈말이에요.',
          ok: '맞아요. "물고기들이"가 주어입니다. 뼈대는 "물고기들이 헤엄친다." — 1형식.',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: '이른 아침에', role: 'modifier', keep: false },
            { text: '공원의 새들이', role: 'subject', keep: true },
            { text: '노래한다', role: 'verb', keep: true },
            { text: '나뭇가지 위에서', role: 'modifier', keep: false },
            { text: '즐겁게.', role: 'modifier', keep: false },
          ],
          result: '새들이 노래한다.',
          guide: '"이른 아침에", "나뭇가지 위에서", "즐겁게"는 수식어. 뼈대는 "새들이 노래한다." — 1형식',
        },
        {
          chunks: [
            { text: '오랜 가뭄 끝에', role: 'modifier', keep: false },
            { text: '비가', role: 'subject', keep: true },
            { text: '내린다', role: 'verb', keep: true },
            { text: '세차게', role: 'modifier', keep: false },
            { text: '온 도시에.', role: 'modifier', keep: false },
          ],
          result: '비가 내린다.',
          guide: '수식어를 모두 빼면 "비가 내린다." — 1형식',
        },
      ],

      quiz: [
        {
          q: '1형식 문장의 자리 배치는?',
          opts: [
            '[는/이/가] + [다] + [를/을]',
            '[는/이/가] + [다]',
            '[는/이/가] + [이다] + [보어]',
            '[는/이/가] + [다] + [에게] + [를/을]',
          ],
          ans: 1,
          exp: '1형식은 주어 + 동사만으로 문장이 완성됩니다. "무엇을?"이라고 물으면 어색해요.',
        },
        {
          q: '다음 중 1형식 문장은?',
          opts: [
            '나는 먹는다 사과를.',
            '그는 ~이다 의사.',
            '그녀는 웃는다 환하게.',
            '비가 온다 세차게.',
          ],
          ans: 3,
          exp: '"비가 온다"가 뼈대입니다. "세차게"는 수식어(양념). 주어 + 동사만 남으면 1형식.',
        },
        {
          q: '"밤마다 강에서 반딧불이들이 빛난다 아름답게." — 뼈대는?',
          opts: [
            '밤마다 강에서 반딧불이들이 빛난다 아름답게',
            '반딧불이들이 빛난다',
            '강에서 빛난다 아름답게',
            '반딧불이들이 빛난다 아름답게',
          ],
          ans: 1,
          exp: '"밤마다", "강에서", "아름답게"는 수식어. 뼈대는 "반딧불이들이 빛난다." — 1형식',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 1-4: 2형식 — [는] + [이다] + [보어]
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L1_4',
      title: '2형식 — 주어가 보어이다',
      done: false,

      vocab: [
        { word: 'become', meaning: '~이 되다',    example: '그는 되었다 의사가.' },
        { word: 'seem',   meaning: '~처럼 보이다', example: '하늘이 보인다 파랗게.' },
        { word: 'look',   meaning: '~해 보이다',   example: '그녀는 보인다 행복하게.' },
        { word: 'feel',   meaning: '~하게 느껴지다', example: '날씨가 느껴진다 따뜻하게.' },
      ],

      steps: [
        `두 번째 자리 배치입니다.<br><br>여기서 특별한 동사가 등장해요.<br>혼자 쓰이면 <em>삐리한</em> 느낌이 나는 동사들이에요.<br><br><div class="step-sentence">"나는 ~이다."</div>뭐가 이다? 뭔가 허전하죠?`,

        `이렇게 혼자서는 <em>삐리한</em> 동사들,<br>우리는 <strong>물결동사</strong>라고 부를게요.<br><br>물결(~) 모양처럼 뒤로 이어져<br>무언가를 받아야 완성되는 동사입니다.<br><br>~이다 / ~되다 / ~보이다 / ~느껴지다<br>~들리다 / ~맛나다 / ~냄새나다`,

        `물결동사 뒤에 오는 말이 <strong>보어(補語)</strong>입니다.<br><br>저는 이렇게 설명합니다.<br><br><em>보어란, 삐리한 동사를 보충해 주는 말입니다.</em><br><br>물결동사는 혼자 서 있으면 삐립니다.<br>보어가 와서 그 빈자리를 채워 줘야<br>비로소 문장이 완성됩니다.`,

        `예문으로 확인해볼게요.<br><br><div class="step-sentence"><mark class="s">나는</mark> <mark class="v">~이다</mark> <mark class="c">학생.</mark></div><div class="step-sentence"><mark class="s">그는</mark> <mark class="v">~되었다</mark> <mark class="c">의사가.</mark></div><div class="step-sentence"><mark class="s">하늘은</mark> <mark class="v">~이다</mark> <mark class="c">파란.</mark></div><br>보어가 오는 순간, 삐리하던 동사가<br>의미를 갖게 됩니다.`,

        `그런데 재미있는 현상이 하나 있습니다.<br><br>삐리한 동사를 보충해 주다 보면<br>자연스럽게 <strong>주어 = 보어</strong> 관계가 만들어집니다.<br><br>나(주어) → ~이다(삐리) → 학생(보충) → 나 = 학생<br>그(주어) → ~되었다(삐리) → 의사(보충) → 그 = 의사<br><br>이 등호(=)가 성립하는지 확인하면<br>보어인지 바로 알 수 있어요.`,

        `자리를 정리할게요.<br><br><div class="step-sentence"><mark class="s">[는/이/가]</mark> + <mark class="v">[물결동사]</mark> + <mark class="c">[ 보어 ]</mark></div><br>보어는 주어가 <em>무엇인지, 어떤 상태인지</em><br>확실하게 만들어주는 말입니다.`,

        `수식어가 붙어도 뼈대는 변하지 않아요.<br><br><div class="step-sentence"><mark class="s">그녀는</mark> <mark class="v">보인다</mark> <mark class="c">행복하게</mark> <span class="tok-mod">오늘따라</span>.</div><br>뼈대: 그녀는 보인다 행복하게.<br>"오늘따라"는 양념(수식어) → 제거 대상`,

        `1형식과 구분하는 법.<br><br>동사 뒤가 비어 있다? → 1형식<br>동사가 <em>삐리해서</em> 보어가 필요하다? → 2형식<br><br><div class="step-sentence">나는 달린다. → 뒤가 없어도 자연스러움 → 1형식</div><div class="step-sentence">나는 ~이다 학생. → 보어가 없으면 삐리 → 2형식</div>`,

        `이제 직접 확인해보겠습니다.<br><br>아래 문장에서<br><strong>보어를 탭하세요.</strong>`,
      ],

      dissection: [
        {
          sentence: ['그녀는', '보인다', '행복하게.'],
          roles:    ['subject', 'verb', 'complement'],
          task: 'complement', taskLabel: '보어를 탭하세요',
          hint: '물결동사(보인다) 뒤에서 주어를 설명하는 말이 보어예요.',
          ok: '맞아요. "행복하게"가 보어입니다. 그녀 = 행복한 상태.',
        },
        {
          sentence: ['날씨가', '느껴진다', '따뜻하게', '오늘.'],
          roles:    ['subject', 'verb', 'complement', 'modifier'],
          task: 'complement', taskLabel: '보어를 탭하세요',
          hint: '"오늘"은 꾸밈말, "느껴진다"는 물결동사입니다.',
          ok: '맞아요. "따뜻하게"가 보어입니다. 날씨 = 따뜻한 상태.',
        },
        {
          sentence: ['그는', '되었다', '훌륭한 의사가.'],
          roles:    ['subject', 'verb', 'complement'],
          task: 'form',
          taskLabel: '1형식입니까, 2형식입니까?',
          formOpts: ['1형식', '2형식'],
          ans: 1,
          hint: '"되었다"는 물결동사. 그 = 훌륭한 의사. 등호가 성립해요.',
          ok: '맞아요. 물결동사 + 보어 = 2형식입니다.',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: '시간이 지나면서', role: 'modifier', keep: false },
            { text: '그는', role: 'subject', keep: true },
            { text: '되었다', role: 'verb', keep: true },
            { text: '매우 훌륭한', role: 'modifier', keep: false },
            { text: '의사가', role: 'complement', keep: true },
            { text: '결국.', role: 'modifier', keep: false },
          ],
          result: '그는 되었다 의사가.',
          guide: '수식어 제거 → "그는 되었다 의사가." 그 = 의사 → 2형식',
        },
      ],

      quiz: [
        {
          q: '2형식 문장을 확인하는 등호 테스트:\n"하늘이 보인다 맑게." — 성립하는 것은?',
          opts: ['하늘 = 보인다', '하늘 = 맑게', '보인다 = 맑게', '등호 없음'],
          ans: 1,
          exp: '하늘 = 맑은 상태. 등호가 성립하므로 "맑게"가 보어, 2형식입니다.',
        },
        {
          q: '다음 중 물결동사(2형식 동사)가 아닌 것은?',
          opts: ['~이다', '~되다', '~보이다', '~먹다'],
          ans: 3,
          exp: '"먹다"는 대상이 필요한 일반 동사입니다. "무엇을 먹다?" 처럼 목적어가 와야 해요.',
        },
        {
          q: '"그 음식은 냄새가 난다 맛있게." — 뼈대의 형식은?',
          opts: ['1형식', '2형식', '3형식', '4형식'],
          ans: 1,
          exp: '"냄새가 난다"는 물결동사. "그 음식 = 맛있는 상태" → 2형식.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 1-5: 3형식 — [는] + [다] + [를]
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L1_5',
      title: '3형식 — 무엇을 한다',
      done: false,

      vocab: [
        { word: 'read',    meaning: '읽다',   example: '그녀는 읽는다 책을.' },
        { word: 'write',   meaning: '쓰다',   example: '그는 쓴다 편지를.' },
        { word: 'like',    meaning: '좋아하다', example: '나는 좋아한다 음악을.' },
        { word: 'make',    meaning: '만들다',  example: '그녀는 만든다 의자를.' },
      ],

      steps: [
        `세 번째 자리 배치입니다.<br><br>가장 많이 쓰이는 형태예요.<br>주어가 무언가를 하고,<br>그 행동이 대상을 향합니다.<br><br><div class="step-sentence"><mark class="s">[는/이/가]</mark> + <mark class="v">[다]</mark> + <mark class="o">[를/을]</mark></div>`,

        `예를 볼게요.<br><br><div class="step-sentence"><mark class="s">나는</mark> <mark class="v">먹는다</mark> <mark class="o">사과를</mark>.</div><div class="step-sentence"><mark class="s">그녀는</mark> <mark class="v">읽는다</mark> <mark class="o">책을</mark>.</div><div class="step-sentence"><mark class="s">그들은</mark> <mark class="v">좋아한다</mark> <mark class="o">음악을</mark>.</div>`,

        `목적어를 찾는 방법.<br><br>동사를 보고<br><strong>"무엇을?"</strong>이라고 물어보세요.<br>자연스러운 답이 나오면 그것이 목적어입니다.<br><br>"무엇을 먹는다?" → "사과를." → 목적어<br>"무엇을 읽는다?" → "책을." → 목적어`,

        `2형식과 구분하는 방법.<br><br>나 = 사과? <strong>아닙니다.</strong> → 목적어 (3형식)<br>나 = 학생? <strong>맞습니다.</strong> → 보어 (2형식)<br><br>등호가 성립하지 않으면 목적어, 3형식입니다.`,

        `수식어가 붙어도 뼈대는 같아요.<br><br><div class="step-sentence"><mark class="s">나는</mark> <mark class="v">먹는다</mark> <span class="tok-mod">항상</span> <span class="tok-mod">빨간</span> <mark class="o">사과를</mark> <span class="tok-mod">빠르게</span> <span class="tok-mod">아침에</span>.</div><br>수식어: 항상 / 빨간 / 빠르게 / 아침에<br>뼈대: 나는 먹는다 사과를.`,

        `독해할 때 활용.<br><br><div class="step-sentence"><span class="tok-mod">오랫동안</span> <mark class="s">그는</mark> <mark class="v">써왔다</mark> <span class="tok-mod">자신의 경험을 담은</span> <mark class="o">편지를</mark> <span class="tok-mod">매일 밤</span>.</div><br>뼈대: 그는 써왔다 편지를. (3형식)<br>나머지는 전부 수식어입니다.`,

        `이제 직접 확인해보겠습니다.<br><br>아래 문장에서<br><strong>목적어를 탭하세요.</strong>`,
      ],

      dissection: [
        {
          sentence: ['그녀는', '읽는다', '두꺼운 책을', '매일.'],
          roles:    ['subject', 'verb', 'object', 'modifier'],
          task: 'object', taskLabel: '목적어를 탭하세요',
          hint: '"무엇을 읽는다?" → 책을. "매일"은 꾸밈말이에요.',
          ok: '맞아요. "두꺼운 책을"이 목적어입니다.',
        },
        {
          sentence: ['그들은', '좋아한다', '클래식 음악을', '매우.'],
          roles:    ['subject', 'verb', 'object', 'modifier'],
          task: 'object', taskLabel: '목적어를 탭하세요',
          hint: '"무엇을 좋아한다?" → 음악을. "매우"는 꾸밈말이에요.',
          ok: '맞아요. "클래식 음악을"이 목적어입니다.',
        },
        {
          sentence: ['장인이', '만들었다', '아름다운 의자를', '손으로', '정성껏.'],
          roles:    ['subject', 'verb', 'object', 'modifier', 'modifier'],
          task: 'form',
          taskLabel: '몇 형식입니까?',
          formOpts: ['1형식', '2형식', '3형식'],
          ans: 2,
          hint: '"손으로", "정성껏"은 수식어. 뼈대는 주어 + 동사 + 목적어(1개). 등호는 성립하지 않아요.',
          ok: '맞아요. 목적어 1개 → 3형식입니다.',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: '오랫동안', role: 'modifier', keep: false },
            { text: '그는', role: 'subject', keep: true },
            { text: '써왔다', role: 'verb', keep: true },
            { text: '자신의 경험을 담은', role: 'modifier', keep: false },
            { text: '편지를', role: 'object', keep: true },
            { text: '매일 밤.', role: 'modifier', keep: false },
          ],
          result: '그는 써왔다 편지를.',
          guide: '수식어 제거 → "그는 써왔다 편지를." 목적어 1개 → 3형식',
        },
      ],

      quiz: [
        {
          q: '목적어를 찾는 방법은?',
          opts: [
            '주어 앞에서 찾는다',
            '동사에게 "무엇을?"이라고 물어본다',
            '등호(=)가 성립하는지 확인한다',
            '문장 끝에서 찾는다',
          ],
          ans: 1,
          exp: '동사에게 "무엇을?"이라고 물어서 자연스러운 답이 나오면 그것이 목적어입니다.',
        },
        {
          q: '"그는 되었다 유명한 작가가." 와 "그는 썼다 소설을."의 형식은?',
          opts: ['둘 다 2형식', '2형식, 3형식', '둘 다 3형식', '3형식, 2형식'],
          ans: 1,
          exp: '그 = 작가(등호 성립) → 2형식. 무엇을 썼다? 소설을 → 목적어 → 3형식.',
        },
        {
          q: '"매일 아침 그녀는 정성껏 만든다 따뜻한 밥을 가족을 위해." — 뼈대는?',
          opts: [
            '매일 아침 그녀는 만든다 따뜻한 밥을 가족을 위해',
            '그녀는 만든다 밥을',
            '그녀는 만든다 따뜻한 밥을',
            '정성껏 만든다 밥을',
          ],
          ans: 1,
          exp: '수식어(매일 아침, 정성껏, 따뜻한, 가족을 위해)를 모두 제거하면 "그녀는 만든다 밥을." — 3형식',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 1-6: 4형식 — [는] + [해주다] + [에게] + [를]
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L1_6',
      title: '4형식 — 누구에게 무엇을',
      done: false,

      vocab: [
        { word: 'give',  meaning: '주다',     example: '나는 주었다 그녀에게 선물을.' },
        { word: 'send',  meaning: '보내다',   example: '그는 보냈다 친구에게 편지를.' },
        { word: 'show',  meaning: '보여주다', example: '그녀는 보여주었다 나에게 사진을.' },
        { word: 'tell',  meaning: '말해주다', example: '그는 말해주었다 우리에게 비밀을.' },
      ],

      steps: [
        `네 번째 자리 배치입니다.<br><br>여기서는 목적어가 두 개 등장해요.<br>"누구에게 무엇을"이라는<br>두 가지 대상이 필요한 문장입니다.<br><br><div class="step-sentence"><mark class="s">[는]</mark> + <mark class="v">[해주다]</mark> + <mark class="io">[에게]</mark> + <mark class="o">[를]</mark></div>`,

        `예를 볼게요.<br><br><div class="step-sentence"><mark class="s">나는</mark> <mark class="v">주었다</mark> <mark class="io">그녀에게</mark> <mark class="o">선물을</mark>.</div><div class="step-sentence"><mark class="s">선생님은</mark> <mark class="v">가르친다</mark> <mark class="io">우리에게</mark> <mark class="o">수학을</mark>.</div><div class="step-sentence"><mark class="s">그는</mark> <mark class="v">보냈다</mark> <mark class="io">친구에게</mark> <mark class="o">편지를</mark>.</div>`,

        `하나만 있으면 허전합니다.<br><br><div class="step-sentence">나는 주었다 선물을. → 누구에게? 모릅니다.</div><div class="step-sentence">나는 주었다 그녀에게. → 무엇을? 모릅니다.</div><div class="step-sentence">나는 주었다 그녀에게 선물을. → 완전합니다.</div><br>둘 다 있어야 완성됩니다.`,

        `4형식 동사에는 공통점이 있습니다.<br><br>이 동사들은 기본적으로 <strong>방향성</strong>을 띕니다.<br><br>주어에서 출발해서 → [누구에게] → [무엇을]<br>이런 흐름이 동사 안에 이미 내포되어 있습니다.<br><br><div class="step-sentence"><mark class="s">나는</mark> <mark class="v">보냈다</mark> → <mark class="io">그녀에게</mark> → <mark class="o">편지를</mark>.</div><br>"보내다"라는 동사 자체가<br>어딘가를 향하는 방향을 품고 있어요.`,

        `그래서 이런 동사들과 잘 어울립니다.<br><br>주다 / 가르치다 / 보내다<br>보여주다 / 말해주다 / 만들어주다<br><br>모두 <em>방향이 있는 행위</em>입니다.<br>누군가를 향해 무언가를 건네는 구조예요.<br>방향이 빠지면 문장이 허전해집니다.`,

        `반면 3형식 동사는 방향성이 없습니다.<br><br>"먹다, 읽다, 쓰다" — 대상은 있지만<br>누구를 향한다는 방향은 담겨 있지 않아요.<br><br>그래서 방향을 표현하고 싶으면<br><strong>전치사를 붙여</strong> 따로 만들어야 합니다.<br><br><div class="step-sentence"><mark class="s">나는</mark> <mark class="v">보냈다</mark> <mark class="o">편지를</mark> <span class="tok-mod">그녀에게(to her)</span>.</div><br>여기서 "그녀에게"는 전치사구 — 수식어입니다.<br>뼈대는 "나는 보냈다 편지를." — 3형식이에요.`,

        `정리하면 이렇습니다.<br><br><div class="step-sentence"><mark class="s">나는</mark> <mark class="v">보냈다</mark> <mark class="io">그녀에게</mark> <mark class="o">편지를</mark>. → <strong>4형식</strong></div><div class="step-sentence"><mark class="s">나는</mark> <mark class="v">보냈다</mark> <mark class="o">편지를</mark> <span class="tok-mod">그녀에게(to her)</span>. → <strong>3형식</strong></div><br>같은 의미, 다른 구조입니다.<br>4형식은 방향이 동사에 내포되어 있고,<br>3형식은 전치사를 붙여 방향을 추가한 것입니다.`,

        `3형식과 구분하는 방법.<br><br>목적어가 1개 → 3형식<br>목적어가 2개 → 4형식<br><br><div class="step-sentence">나는 썼다 <mark class="o">편지를</mark>. (1개 → 3형식)</div><div class="step-sentence">나는 보냈다 <mark class="io">그녀에게</mark> <mark class="o">편지를</mark>. (2개 → 4형식)</div>`,

        `수식어를 걷어내고 뼈대를 보세요.<br><br><div class="step-sentence"><span class="tok-mod">지난 생일에</span> <mark class="s">아버지는</mark> <mark class="v">사주었다</mark> <mark class="io">나에게</mark> <span class="tok-mod">멋진</span> <mark class="o">시계를</mark>.</div><br>뼈대: 아버지는 사주었다 나에게 시계를.<br>[는] + [해주다] + [에게] + [를] → 4형식`,

        `이제 직접 확인해보겠습니다.<br><br>문장을 보고 형식을 골라보세요.`,
      ],

      dissection: [
        {
          sentence: ['엄마는', '만들어주었다', '나에게', '따뜻한 밥을.'],
          roles:    ['subject', 'verb', 'io', 'object'],
          task: 'form',
          taskLabel: '몇 형식입니까?',
          formOpts: ['1형식', '2형식', '3형식', '4형식'],
          ans: 3,
          hint: '"나에게"(에게) + "따뜻한 밥을"(를) — 목적어가 2개입니다.',
          ok: '맞아요. 누구에게 + 무엇을 → 4형식입니다.',
        },
        {
          sentence: ['그는', '말해주었다', '우리에게', '중요한 비밀을', '조용히.'],
          roles:    ['subject', 'verb', 'io', 'object', 'modifier'],
          task: 'object', taskLabel: '직접목적어(무엇을)를 탭하세요',
          hint: '"에게"가 붙은 것은 간접목적어, "을/를"이 붙은 것이 직접목적어예요.',
          ok: '맞아요. "중요한 비밀을"이 직접목적어입니다.',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: '지난 생일에', role: 'modifier', keep: false },
            { text: '아버지는', role: 'subject', keep: true },
            { text: '사주었다', role: 'verb', keep: true },
            { text: '나에게', role: 'io', keep: true },
            { text: '멋진', role: 'modifier', keep: false },
            { text: '시계를', role: 'object', keep: true },
            { text: '기쁘게 웃으며.', role: 'modifier', keep: false },
          ],
          result: '아버지는 사주었다 나에게 시계를.',
          guide: '수식어 제거 → "아버지는 사주었다 나에게 시계를." — 4형식',
        },
      ],

      quiz: [
        {
          q: '4형식 자리 배치는?',
          opts: [
            '[는] + [다] + [를]',
            '[는] + [이다] + [보어]',
            '[는] + [해주다] + [에게] + [를]',
            '[는] + [하다] + [를] + [하게]',
          ],
          ans: 2,
          exp: '4형식은 "누구에게 무엇을"이 세트로 필요합니다.',
        },
        {
          q: '"그녀는 보여주었다 아이들에게 마술을." — 맞는 설명은?',
          opts: [
            '목적어가 1개 → 3형식',
            '"에게" + "을" 두 자리 → 4형식',
            '보어가 있음 → 2형식',
            '수식어만 있음 → 1형식',
          ],
          ans: 1,
          exp: '"아이들에게"(에게) + "마술을"(을) — 목적어 2개 → 4형식.',
        },
        {
          q: '"먼 곳에 사는 친구에게 나는 긴 편지를 매달 정성껏 보낸다." — 뼈대는?',
          opts: [
            '나는 보낸다 친구에게 편지를',
            '나는 보낸다 긴 편지를',
            '나는 정성껏 보낸다 편지를',
            '먼 곳에 사는 친구에게 나는 보낸다',
          ],
          ans: 0,
          exp: '수식어(먼 곳에 사는, 긴, 매달, 정성껏)를 제거하면 "나는 보낸다 친구에게 편지를." — 4형식',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 1-7: 5형식 — [는] + [하다] + [를] + [하게]
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L1_7',
      title: '5형식 — 목적어를 어떻게 만든다',
      done: false,

      vocab: [
        { word: 'call',    meaning: '부르다',           example: '우리는 부른다 그를 대장이라고.' },
        { word: 'elect',   meaning: '선출하다',          example: '그들은 선출했다 민지를 반장으로.' },
        { word: 'keep',    meaning: '유지하다, ~한 상태로', example: '그녀는 유지했다 방을 깨끗하게.' },
        { word: 'find',    meaning: '~라고 생각하다',    example: '나는 생각한다 그것이 어렵다고.' },
      ],

      steps: [
        `다섯 번째, 마지막 자리 배치입니다.<br><br>여기서는 목적어 뒤에 보어가 옵니다.<br>목적어를 "어떤 상태로 만들거나"<br>"무엇이라고 부르는" 문장이에요.<br><br><div class="step-sentence"><mark class="s">[는]</mark> + <mark class="v">[하다]</mark> + <mark class="o">[를]</mark> + <mark class="oc">[하게/이라고]</mark></div>`,

        `예를 볼게요.<br><br><div class="step-sentence"><mark class="s">그 소식이</mark> <mark class="v">만들었다</mark> <mark class="o">나를</mark> <mark class="oc">행복하게</mark>.</div><div class="step-sentence"><mark class="s">우리는</mark> <mark class="v">부른다</mark> <mark class="o">그를</mark> <mark class="oc">대장이라고</mark>.</div><div class="step-sentence"><mark class="s">그들은</mark> <mark class="v">선출했다</mark> <mark class="o">민지를</mark> <mark class="oc">반장으로</mark>.</div>`,

        `목적보어를 확인하는 방법도 등호(=)입니다.<br><br>나 = 행복한 상태? <strong>네.</strong> → 목적보어<br>그 = 대장? <strong>네.</strong> → 목적보어<br>민지 = 반장? <strong>네.</strong> → 목적보어<br><br><strong>목적어 = 목적보어</strong>가 성립하면 5형식입니다.`,

        `4형식과 구분하는 방법.<br><br><div class="step-sentence">나는 주었다 <mark class="io">그녀에게</mark> <mark class="o">선물을</mark>. → 그녀 = 선물? 아닙니다. → 4형식</div><div class="step-sentence">우리는 부른다 <mark class="o">그를</mark> <mark class="oc">대장이라고</mark>. → 그 = 대장? 맞습니다. → 5형식</div><br>등호 테스트로 구분합니다.`,

        `수식어를 걷어내고 뼈대를 보세요.<br><br><div class="step-sentence"><span class="tok-mod">그 힘든 경험이</span> <mark class="s">그를</mark> <mark class="v">만들었다</mark> <mark class="o">그를</mark> <mark class="oc">강하게</mark> <span class="tok-mod">결국</span>.</div><br>잠깐, 주어가 "그 힘든 경험이"네요.<br>뼈대: 경험이 만들었다 그를 강하게. → 5형식`,

        `다섯 가지 자리 배치 최종 정리.<br><br>1형식: [는] + [다]<br>2형식: [는] + [이다] + <mark class="c">보어</mark><br>3형식: [는] + [다] + <mark class="o">[를]</mark><br>4형식: [는] + [해주다] + <mark class="io">[에게]</mark> + <mark class="o">[를]</mark><br>5형식: [는] + [하다] + <mark class="o">[를]</mark> + <mark class="oc">[하게]</mark>`,

        `이제 직접 확인해보겠습니다.<br><br>아래 문장에서<br><strong>형식을 골라보세요.</strong>`,
      ],

      dissection: [
        {
          sentence: ['그 선생님은', '만들었다', '수업을', '재미있게.'],
          roles:    ['subject', 'verb', 'object', 'objcomp'],
          task: 'form',
          taskLabel: '이 문장은 몇 형식입니까?',
          formOpts: ['1형식', '2형식', '3형식', '4형식', '5형식'],
          ans: 4,
          hint: '수업 = 재미있는 상태. 목적어 = 목적보어 → 5형식.',
          ok: '맞아요. 목적어(수업을) = 목적보어(재미있게) → 5형식입니다.',
        },
        {
          sentence: ['그녀는', '칠했다', '벽을', '하얗게.'],
          roles:    ['subject', 'verb', 'object', 'objcomp'],
          task: 'objcomp', taskLabel: '목적보어를 탭하세요',
          hint: '벽 = ? 의 관계로 확인하세요. 등호가 성립하는 말이 목적보어입니다.',
          ok: '맞아요. "하얗게"가 목적보어입니다. 벽 = 하얀 상태.',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: '수년간의 훈련이', role: 'subject', keep: true },
            { text: '결국', role: 'modifier', keep: false },
            { text: '만들었다', role: 'verb', keep: true },
            { text: '그를', role: 'object', keep: true },
            { text: '세계 최고의', role: 'modifier', keep: false },
            { text: '선수로.', role: 'objcomp', keep: true },
          ],
          result: '훈련이 만들었다 그를 선수로.',
          guide: '수식어 제거 → 훈련이 만들었다 그를 선수로. 그 = 선수 → 5형식',
        },
      ],

      quiz: [
        {
          q: '5형식을 확인하는 등호 테스트:\n"그들은 선출했다 민지를 반장으로."',
          opts: ['그들 = 민지', '민지 = 반장', '반장 = 그들', '등호 없음'],
          ans: 1,
          exp: '민지 = 반장. 목적어와 목적보어 사이에 등호가 성립합니다 → 5형식.',
        },
        {
          q: '"나는 주었다 그에게 상을." 과\n"나는 만들었다 그를 챔피언으로." 의 차이는?',
          opts: [
            '둘 다 4형식',
            '4형식, 5형식',
            '둘 다 5형식',
            '5형식, 4형식',
          ],
          ans: 1,
          exp: '그 ≠ 상(등호 불성립) → 4형식. 그 = 챔피언(등호 성립) → 5형식.',
        },
        {
          q: '"오랜 시간 함께한 경험이 우리를 결국 진정한 친구로 만들었다." — 뼈대는?',
          opts: [
            '경험이 만들었다 우리를 친구로',
            '경험이 만들었다 우리를',
            '우리를 만들었다 진정한 친구로',
            '오랜 시간 경험이 우리를 만들었다',
          ],
          ans: 0,
          exp: '수식어(오랜 시간 함께한, 결국, 진정한)를 제거. 뼈대는 "경험이 만들었다 우리를 친구로." — 5형식',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 1-8: 전치사구 — 위치와 시간의 장신구
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L1_8',
      title: '전치사구 — 위치·시간의 장신구',
      done: false,

      vocab: [
        { word: 'in',   meaning: '~안에, ~에서',    example: '고양이가 잔다 상자 안에서.' },
        { word: 'on',   meaning: '~위에, ~에',      example: '컵이 있다 테이블 위에.' },
        { word: 'with', meaning: '~와 함께, ~을 가진', example: '남자가 걷는다 모자를 쓰고.' },
        { word: 'by',   meaning: '~에 의해, ~옆에',  example: '편지는 쓰여졌다 그에 의해.' },
      ],

      steps: [
        `지금까지 5형식을 배웠습니다.<br><br>이제 뼈대 주변을 살펴볼 차례예요.<br><br>뼈대 문장에는 항상<br><strong>장신구</strong>가 붙어 있습니다.<br>그 장신구 중 가장 흔한 것이<br><em>전치사구</em>입니다.`,

        `전치사구란?<br><br><strong>전치사 + 명사</strong>의 덩어리입니다.<br><br>in the morning (아침에)<br>on the table (테이블 위에)<br>with a smile (미소를 지으며)<br>by the river (강 옆에서)<br><br>이 덩어리 전체가 하나의 장신구입니다.`,

        `전치사구의 두 가지 역할.<br><br><strong>1. 동사 꾸미기 (부사 역할)</strong><br><div class="step-sentence"><mark class="s">나는</mark> <mark class="v">달린다</mark> <span class="tok-mod">[공원에서]</span>.</div>어디서 달린다? → 동사를 꾸밈<br><br><strong>2. 명사 꾸미기 (형용사 역할)</strong><br><div class="step-sentence"><mark class="s">테이블 위의</mark> <span class="tok-mod">[책]</span>이 무겁다.</div>어떤 책? → 명사를 꾸밈`,

        `독해 전략 — 전치사구 묶기.<br><br>전치사가 보이면<br>그 뒤 명사까지를 [ ]로 묶고<br><strong>일단 옆에 치워 두세요.</strong><br><br><div class="step-sentence">나는 달린다 [공원에서] [아침마다].</div><br>뼈대: 나는 달린다. — 1형식`,

        `문장이 길어도 방법은 같아요.<br><br><div class="step-sentence"><span class="tok-mod">[긴 회의 끝에]</span> <mark class="s">그는</mark> <mark class="v">내렸다</mark> <mark class="o">결정을</mark> <span class="tok-mod">[모든 사람들</span> <span class="tok-mod">앞에서]</span>.</div><br>전치사구 2개를 제거하면:<br>뼈대: 그는 내렸다 결정을. — 3형식`,

        `전치사구가 명사를 꾸밀 때.<br><br><div class="step-sentence">The man <span class="tok-mod">[in the blue coat]</span> smiled.</div>남자가 웃었다 — 어떤 남자? 파란 코트를 입은.<br><br><div class="step-sentence">The book <span class="tok-mod">[on the table]</span> is heavy.</div>책이 무겁다 — 어떤 책? 테이블 위의.<br><br>[ ] 안은 장신구. 지워도 뼈대는 성립합니다.`,

        `이제 직접 확인해보겠습니다.<br><br>전치사구를 탭해서<br><strong>뼈대를 드러내세요.</strong>`,
      ],

      dissection: [
        {
          sentence: ['고양이가', '잔다', '상자 안에서.'],
          roles:    ['subject', 'verb', 'modifier'],
          task: 'modifier', taskLabel: '전치사구(수식어)를 탭하세요',
          hint: '"상자 안에서"는 전치사구(전치사 + 명사). 동사를 꾸미는 장신구입니다.',
          ok: '맞아요. "상자 안에서"가 전치사구 수식어. 뼈대는 "고양이가 잔다."',
        },
        {
          sentence: ['그는', '내렸다', '결정을', '긴 회의 끝에.'],
          roles:    ['subject', 'verb', 'object', 'modifier'],
          task: 'modifier', taskLabel: '전치사구(수식어)를 탭하세요',
          hint: '"긴 회의 끝에"는 전치사구. 제거해도 문장이 성립합니다.',
          ok: '맞아요. 전치사구를 제거하면 "그는 내렸다 결정을." — 3형식.',
        },
        {
          sentence: ['파란 코트를 입은 남자가', '웃었다', '조용히', '나를 향해.'],
          roles:    ['subject', 'verb', 'modifier', 'modifier'],
          task: 'form',
          taskLabel: '수식어를 제거한 뼈대의 형식은?',
          formOpts: ['1형식', '2형식', '3형식', '4형식', '5형식'],
          ans: 0,
          hint: '수식어를 모두 제거하면 "남자가 웃었다."입니다. 목적어가 없어요.',
          ok: '맞아요. 뼈대 "남자가 웃었다." — 주어 + 동사 = 1형식.',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: '이른 봄에', role: 'modifier', keep: false },
            { text: '강가에서', role: 'modifier', keep: false },
            { text: '아이들이', role: 'subject', keep: true },
            { text: '뛰논다', role: 'verb', keep: true },
            { text: '나무 그늘 아래서.', role: 'modifier', keep: false },
          ],
          result: '아이들이 뛰논다.',
          guide: '전치사구 3개 제거 → "아이들이 뛰논다." — 1형식',
        },
        {
          chunks: [
            { text: '오랜 고민 끝에', role: 'modifier', keep: false },
            { text: '그는', role: 'subject', keep: true },
            { text: '건넸다', role: 'verb', keep: true },
            { text: '친구에게', role: 'io', keep: true },
            { text: '진심을 담은', role: 'modifier', keep: false },
            { text: '편지를', role: 'object', keep: true },
            { text: '다음 날 아침에.', role: 'modifier', keep: false },
          ],
          result: '그는 건넸다 친구에게 편지를.',
          guide: '전치사구 제거 → "그는 건넸다 친구에게 편지를." — 4형식',
        },
      ],

      quiz: [
        {
          q: '전치사구란 무엇입니까?',
          opts: [
            '동사 + 목적어의 덩어리',
            '전치사 + 명사의 덩어리',
            '주어 + 보어의 묶음',
            '관계대명사 + 절',
          ],
          ans: 1,
          exp: '전치사구 = 전치사 + 명사. "in the morning", "on the table" 같은 형태입니다.',
        },
        {
          q: '"He runs [in the park] [every morning]." — 뼈대는?',
          opts: [
            'He runs in the park',
            'He runs every morning',
            'He runs',
            'runs in the park',
          ],
          ans: 2,
          exp: '[ ] 안은 전치사구(수식어). 제거하면 "He runs." — 1형식.',
        },
        {
          q: '"오랜 침묵 끝에 그는 내렸다 중요한 결정을 홀로." — 뼈대는?',
          opts: [
            '오랜 침묵 끝에 그는 내렸다',
            '그는 내렸다 결정을',
            '그는 내렸다 중요한 결정을',
            '그는 홀로 내렸다',
          ],
          ans: 1,
          exp: '"오랜 침묵 끝에"와 "홀로"는 수식어. 뼈대는 "그는 내렸다 결정을." — 3형식.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 1-9: 관계사절 — 명사에 붙은 긴 설명
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L1_9',
      title: '관계사절 — 명사를 설명하는 긴 장신구',
      done: false,

      vocab: [
        { word: 'who',   meaning: '~하는(사람)',   example: '남자 — 매일 달리는 — 가 내 친구다.' },
        { word: 'which', meaning: '~하는(사물)',   example: '책 — 내가 산 — 이 흥미롭다.' },
        { word: 'that',  meaning: '~하는(사람·사물)', example: '소식 — 모두를 놀라게 한 — 이 퍼졌다.' },
      ],

      steps: [
        `전치사구보다 더 긴 장신구가 있습니다.<br><br>명사 뒤에 붙어서<br>"어떤 명사인지"를 설명하는<br><strong>관계사절</strong>입니다.<br><br>관계사절 안에는<br>작은 주어 + 동사가 통째로 들어 있어요.`,

        `관계사절은 이렇게 생겼어요.<br><br><div class="step-sentence">남자 <span class="tok-mod">[who runs every day]</span></div>매일 달리는 남자 → "who runs every day"가 "남자"를 설명<br><br><div class="step-sentence">책 <span class="tok-mod">[that I bought]</span></div>내가 산 책 → "that I bought"가 "책"을 설명`,

        `관계사절 찾는 법.<br><br><strong>명사 바로 뒤</strong>에 who / which / that이<br>보이면 거기서 관계사절이 시작됩니다.<br><br>끝나는 지점은 쉼표나 다음 핵심 성분이<br>시작되는 곳입니다.`,

        `독해 전략 — 관계사절 묶기.<br><br><div class="step-sentence">The scientist <span class="tok-mod">[who discovered the cure]</span> won the prize.</div><br>scientist = 주어, won = 동사, prize = 목적어<br>"who discovered the cure"는 [ ]로 묶어 제거<br>뼈대: The scientist won the prize.`,

        `전치사구와 관계사절이 함께 나올 때.<br><br><div class="step-sentence">The boy <span class="tok-mod">[who lives next door]</span> runs <span class="tok-mod">[every morning]</span> <span class="tok-mod">[in the park]</span>.</div><br>관계사절 [ ] + 전치사구 [ ] + [ ] 모두 제거:<br>뼈대: The boy runs. — 1형식<br><br>겁먹지 마세요. 하나씩 걷어내면 됩니다.`,

        `관계사절이 목적어에 붙을 때.<br><br><div class="step-sentence"><mark class="s">나는</mark> <mark class="v">읽었다</mark> <mark class="o">책 <span class="tok-mod">[that you recommended]</span>을.</mark></div><br>핵심 목적어는 "책"이고<br>"that you recommended"는 그 책을 설명하는 장신구.<br>뼈대: 나는 읽었다 책을. — 3형식`,

        `이제 직접 확인해보겠습니다.<br><br>관계사절을 찾아서<br><strong>수식어(modifier)를 탭하세요.</strong>`,
      ],

      dissection: [
        {
          sentence: ['The woman', 'who won the award', 'smiled', 'quietly.'],
          roles:    ['subject', 'modifier', 'verb', 'modifier'],
          task: 'modifier', taskLabel: '관계사절(수식어)을 탭하세요',
          hint: '"who won the award"는 The woman을 설명하는 관계사절입니다.',
          ok: '맞아요. "who won the award"가 관계사절 수식어. 뼈대는 "The woman smiled."',
        },
        {
          sentence: ['나는', '먹었다', '음식을', 'that she cooked.'],
          roles:    ['subject', 'verb', 'object', 'modifier'],
          task: 'modifier', taskLabel: '관계사절(수식어)을 탭하세요',
          hint: '"that she cooked"는 "음식"을 설명하는 관계사절입니다.',
          ok: '맞아요. 뼈대는 "나는 먹었다 음식을." — 3형식.',
        },
        {
          sentence: ['The scientist', 'who discovered the vaccine', 'received', 'the Nobel Prize.'],
          roles:    ['subject', 'modifier', 'verb', 'object'],
          task: 'form',
          taskLabel: '관계사절을 제거한 뼈대의 형식은?',
          formOpts: ['1형식', '2형식', '3형식', '4형식', '5형식'],
          ans: 2,
          hint: '관계사절을 제거하면 "The scientist received the Nobel Prize." 무엇을? 받았다.',
          ok: '맞아요. The scientist received the Nobel Prize. — 3형식.',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: 'The man', role: 'subject', keep: true },
            { text: 'who lives next door', role: 'modifier', keep: false },
            { text: 'runs', role: 'verb', keep: true },
            { text: 'every morning', role: 'modifier', keep: false },
            { text: 'in the park.', role: 'modifier', keep: false },
          ],
          result: 'The man runs.',
          guide: '관계사절 + 전치사구 2개 제거 → "The man runs." — 1형식',
        },
        {
          chunks: [
            { text: 'The book', role: 'object', keep: true },
            { text: 'that she gave me', role: 'modifier', keep: false },
            { text: '(그 책은)', role: 'subject', keep: true },
            { text: 'changed', role: 'verb', keep: true },
            { text: 'my life', role: 'object', keep: true },
            { text: 'completely.', role: 'modifier', keep: false },
          ],
          result: 'The book changed my life.',
          guide: '관계사절 + 부사 제거 → "The book changed my life." — 3형식',
        },
      ],

      quiz: [
        {
          q: '관계사절은 주로 어디에 붙어 무엇을 설명합니까?',
          opts: [
            '동사 뒤에 붙어 동사를 설명',
            '명사 뒤에 붙어 명사를 설명',
            '문장 앞에 붙어 전체를 설명',
            '전치사 뒤에 붙어 전치사를 설명',
          ],
          ans: 1,
          exp: '관계사절은 명사 바로 뒤에 붙어 "어떤 명사인지"를 설명하는 장신구입니다.',
        },
        {
          q: '"The girl [who sings beautifully] is my sister." — 뼈대는?',
          opts: [
            'The girl sings beautifully',
            'The girl is my sister',
            'who sings is my sister',
            'The girl is',
          ],
          ans: 1,
          exp: '"who sings beautifully"는 관계사절(수식어). 제거하면 "The girl is my sister." — 2형식.',
        },
        {
          q: '"오랫동안 내가 찾던 답이 드디어 나타났다." 에서 장신구는?',
          opts: [
            '"오랫동안"과 "드디어"만',
            '"내가 찾던"과 "오랫동안", "드디어"',
            '"답이 드디어"',
            '장신구 없음',
          ],
          ans: 1,
          exp: '"내가 찾던"은 "답"을 설명하는 관계사절. "오랫동안", "드디어"는 부사성 수식어. 뼈대는 "답이 나타났다." — 1형식.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 1-10: 실전 독해 — 뼈대 + 장신구 통합
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L1_10',
      title: '실전 독해 — 뼈대 꺼내기',
      done: false,

      vocab: [
        { word: 'despite',  meaning: '~에도 불구하고', example: '비에도 불구하고 그는 달렸다.' },
        { word: 'announce', meaning: '발표하다',       example: '회사가 발표했다 새 제품을.' },
        { word: 'achieve',  meaning: '이루다, 달성하다', example: '그녀는 이루었다 꿈을.' },
        { word: 'reveal',   meaning: '드러내다, 밝히다', example: '조사가 밝혔다 진실을.' },
      ],

      steps: [
        `이제 진짜 독해를 할 준비가 됐습니다.<br><br>지금까지 배운 것:<br>① 5형식으로 뼈대 찾기<br>② 전치사구 [ ]로 묶기<br>③ 관계사절 [ ]로 묶기<br><br>이 세 가지를 동시에 쓸 차례입니다.`,

        `긴 문장을 보면 이렇게 하세요.<br><br><strong>Step 1:</strong> 동사 찾기<br><strong>Step 2:</strong> 동사 앞 → 주어<br><strong>Step 3:</strong> 전치사구 [ ] 묶기<br><strong>Step 4:</strong> 관계사절 [ ] 묶기<br><strong>Step 5:</strong> 남은 것 → 뼈대`,

        `실제로 해볼게요.<br><br><div class="step-sentence">The company <span class="tok-mod">[that she founded]</span> <span class="tok-mod">[in 2010]</span> became the biggest firm <span class="tok-mod">[in the country]</span>.</div><br>관계사절 [ ] + 전치사구 [ ][ ] 묶기<br>뼈대: The company became the biggest firm.<br>→ 2형식 (회사 = 가장 큰 회사)`,

        `하나 더 해볼게요.<br><br><div class="step-sentence">The scientist <span class="tok-mod">[who won the prize]</span> announced the results <span class="tok-mod">[of her research]</span> <span class="tok-mod">[at the conference]</span>.</div><br>관계사절 + 전치사구 2개 제거<br>뼈대: The scientist announced the results.<br>→ 3형식`,

        `수식어가 많을수록 뼈대가 잘 보여야 합니다.<br><br><div class="step-sentence">Despite the rain, the athlete <span class="tok-mod">[who had trained for years]</span> finished the race <span class="tok-mod">[in record time]</span>.</div><br>Despite the rain = 전치사구<br>who had trained for years = 관계사절<br>in record time = 전치사구<br>뼈대: the athlete finished the race. — 3형식`,

        `이것이 독해의 핵심입니다.<br><br>문장이 아무리 길어도<br>뼈대는 언제나 <strong>주어 + 동사 (+ 목적어/보어)</strong>입니다.<br><br>장신구를 두려워하지 마세요.<br>묶어서 옆에 치우면<br>핵심 의미가 드러납니다.`,

        `이제 직접 도전해보겠습니다.<br><br>긴 문장에서 형식을 찾아보세요.`,
      ],

      dissection: [
        {
          sentence: ['The company', 'that she founded', 'became', 'the biggest firm.'],
          roles:    ['subject', 'modifier', 'verb', 'complement'],
          task: 'modifier', taskLabel: '장신구(관계사절)을 탭하세요',
          hint: '"that she founded"는 "The company"를 설명하는 관계사절입니다.',
          ok: '맞아요. 뼈대는 "The company became the biggest firm." — 2형식.',
        },
        {
          sentence: ['Despite hardship,', '그녀는', '이루었다', '꿈을', '결국.'],
          roles:    ['modifier', 'subject', 'verb', 'object', 'modifier'],
          task: 'subject', taskLabel: '주어를 탭하세요',
          hint: '"Despite hardship"은 전치사구 수식어. 동사(이루었다) 바로 앞이 주어입니다.',
          ok: '맞아요. "그녀는"이 주어입니다. 전치사구가 앞에 와도 주어는 동사 앞에 있어요.',
        },
        {
          sentence: ['The results', 'that the team revealed', 'surprised', 'everyone.'],
          roles:    ['subject', 'modifier', 'verb', 'object'],
          task: 'form',
          taskLabel: '장신구를 제거한 뼈대의 형식은?',
          formOpts: ['1형식', '2형식', '3형식', '4형식', '5형식'],
          ans: 2,
          hint: '"that the team revealed"를 제거하면 "The results surprised everyone." 무엇을 놀라게 했나?',
          ok: '맞아요. "The results surprised everyone." — 3형식.',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: 'The scientist', role: 'subject', keep: true },
            { text: 'who discovered the cure', role: 'modifier', keep: false },
            { text: 'received', role: 'verb', keep: true },
            { text: 'the Nobel Prize', role: 'object', keep: true },
            { text: 'in Stockholm.', role: 'modifier', keep: false },
          ],
          result: 'The scientist received the Nobel Prize.',
          guide: '관계사절 + 전치사구 제거 → "The scientist received the Nobel Prize." — 3형식',
        },
        {
          chunks: [
            { text: 'Despite the rain,', role: 'modifier', keep: false },
            { text: 'the athlete', role: 'subject', keep: true },
            { text: 'who had trained for years', role: 'modifier', keep: false },
            { text: 'finished', role: 'verb', keep: true },
            { text: 'the race', role: 'object', keep: true },
            { text: 'in record time.', role: 'modifier', keep: false },
          ],
          result: 'the athlete finished the race.',
          guide: '전치사구 + 관계사절 + 전치사구 제거 → "the athlete finished the race." — 3형식',
        },
      ],

      quiz: [
        {
          q: '"The woman [who leads the team] announced [her decision] [at the meeting]." — 뼈대는?',
          opts: [
            'The woman announced her decision',
            'The woman who leads announced',
            'The woman leads the team',
            'announced her decision at the meeting',
          ],
          ans: 0,
          exp: '관계사절 [who leads the team]과 전치사구 [at the meeting]을 제거. 뼈대는 "The woman announced her decision." — 3형식.',
        },
        {
          q: '다음 중 독해 순서로 올바른 것은?',
          opts: [
            '단어 뜻 → 앞에서부터 해석',
            '전치사구/관계사절 묶기 → 동사 찾기 → 주어 확인',
            '동사 찾기 → 주어 확인 → 전치사구/관계사절 제거',
            '뒤에서부터 해석 → 수식어 붙이기',
          ],
          ans: 2,
          exp: '① 동사 ② 주어 ③ 수식어(전치사구·관계사절) 제거 순서로 뼈대를 먼저 잡으세요.',
        },
        {
          q: '"The report [that the committee released] [on Friday] shocked everyone [in the company]." — 이 문장은 몇 형식입니까?',
          opts: ['1형식', '2형식', '3형식', '4형식'],
          ans: 2,
          exp: '장신구를 제거하면 "The report shocked everyone." — 주어 + 동사 + 목적어 = 3형식.',
        },
      ],
    },

  ] // end lessons
}; // end UNIT1

// ── 홈 화면용 도전 지문 (학습 동기 유발)
const CHALLENGE_TEXT = {
  sentence: `The scientist who discovered the vaccine that saved millions of lives in developing countries received the Nobel Prize in Stockholm after decades of research in her small laboratory.`,
  translation: `개발도상국에서 수백만 명의 생명을 구한 백신을 발견한 그 과학자는, 작은 실험실에서 수십 년간의 연구 끝에 스톡홀름에서 노벨상을 받았습니다.`,
  hint: `관계사절 2개 + 전치사구 4개. 뼈대는 단 6단어입니다.`,
  skeleton: `The scientist received the Nobel Prize.`,
};
