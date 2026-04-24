// ── UNIT 5: 문장을 연결하는 말 — 접속사 ─────────────────────────────────
const UNIT5 = {
  id: 'unit5',
  title: '문장을 연결하는 말',
  subtitle: '접속사 — 두 문장이 하나가 되는 방법',
  lessons: [

    // ══════════════════════════════════════════════════════════════
    // 레슨 5-1: 나란히 잇기 — 등위접속사
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L5_1',
      title: '나란히 잇기 — 등위접속사',
      done: false,

      vocab: [
        { word: 'and',  meaning: '그리고, ~와',           example: 'smart and hardworking 똑똑하고 성실한' },
        { word: 'but',  meaning: '하지만, 그러나',         example: 'simple but powerful 단순하지만 강력한' },
        { word: 'or',   meaning: '또는, 아니면',           example: 'now or never 지금 아니면 결코' },
        { word: 'so',   meaning: '그래서, 따라서',         example: 'It rained, so we stayed. 비가 왔다, 그래서 우린 있었다.' },
        { word: 'yet',  meaning: '그러나, 그럼에도',       example: 'tired yet happy 피곤하지만 행복한' },
        { word: 'for',  meaning: '왜냐하면 (이유, 격식체)', example: 'He left, for it was late. 그는 떠났다, 늦었기 때문에.' },
      ],

      steps: [
        `접속사 — 단어와 단어, 절과 절을 연결하는 말.<br><br>등위접속사는 문법적으로 <strong>대등한</strong> 것들을 연결합니다.<br><br><strong>and</strong> — 추가: A 그리고 B<br><strong>but / yet</strong> — 대조: A 하지만 B<br><strong>or</strong> — 선택: A 또는 B<br><strong>so</strong> — 결과: A 그래서 B<br><strong>for</strong> — 이유 (격식): A, 왜냐하면 B<br><br>기억법: <strong>FANBOYS</strong> — For And Nor But Or Yet So`,

        `등위접속사는 같은 문법 단위를 연결합니다.<br><br>명사 + and + 명사<br>He likes <strong>coffee and tea</strong>.<br><br>형용사 + but + 형용사<br>The plan is <strong>simple but effective</strong>.<br><br>동사 + or + 동사<br>You can <strong>stay or leave</strong>.<br><br>절 + so + 절<br>She studied hard, <strong>so she passed</strong> the exam.`,

        `<strong>상관접속사</strong> — 쌍으로 쓰는 접속사.<br><br><strong>both A and B</strong> — A와 B 모두<br>both smart and diligent 똑똑하고 성실함 모두<br><br><strong>either A or B</strong> — A 또는 B<br>either coffee or tea 커피 또는 차<br><br><strong>neither A nor B</strong> — A도 B도 아닌<br>neither here nor there 여기도 저기도 아닌<br><br><strong>not only A but also B</strong> — A뿐만 아니라 B도<br>not only fast but also accurate 빠를 뿐 아니라 정확하기도 한`,

        `등위접속사로 연결된 절 — 뼈대 찾기 주의점.<br><br><div class="step-sentence">The economy grew, <mark class="v">but</mark> inequality <mark class="v">increased</mark>.</div>→ 두 절이 but으로 연결. 동사가 두 개!<br><br>and/but/or/so로 절이 연결되면<br>뼈대도 두 개 이상입니다.<br><br>앞 뼈대: The economy grew.<br>뒤 뼈대: inequality increased.<br><br>독해 Tip: and/but/so 앞뒤로 절이 나뉜다고 인식하기.`,

        `not A but B / not only A but also B 패턴 — 수능 단골.<br><br><div class="step-sentence">What matters is <strong>not the result but the process</strong>.</div>→ 중요한 것은 결과가 아니라 과정이다.<br><br><div class="step-sentence">This approach is <strong>not only efficient but also cost-effective</strong>.</div>→ 이 방식은 효율적일 뿐만 아니라 비용 효과적이기도 하다.<br><br>not A = 앞을 부정, but (also) B = 진짜 강조.<br>B가 핵심 내용.`,

        `이제 직접 확인해봅시다.<br><br>등위접속사 앞뒤 두 뼈대를 인식해보세요.`,
      ],

      dissection: [
        {
          sentence: ['The study was long,', 'but', 'the results', 'were worth the effort.'],
          roles:    ['clause1', 'conjunction', 'subject', 'verb+complement'],
          task: 'conjunction', taskLabel: '등위접속사를 탭하세요',
          hint: '"but"이 두 절을 대등하게 연결합니다.',
          ok: '맞아요. but이 두 절을 연결. 앞: The study was long. / 뒤: the results were worth the effort.',
        },
        {
          sentence: ['She is', 'not only talented', 'but also', 'incredibly hardworking.'],
          roles:    ['verb', 'modifier', 'conjunction', 'complement'],
          task: 'conjunction', taskLabel: '상관접속사를 탭하세요',
          hint: '"but also"가 "not only"와 쌍을 이룹니다.',
          ok: '맞아요. "not only ... but also ..." 상관접속사 패턴. 재능 있을 뿐 아니라 엄청나게 성실하기도 함.',
        },
      ],

      skeleton: [
        {
          tokens: [
            { text: 'The government', role: 'subject' },
            { text: 'increased funding,', role: 'verb+object' },
            { text: 'but', role: 'conjunction' },
            { text: 'the problem', role: 'subject' },
            { text: 'remained', role: 'verb' },
            { text: 'unsolved.', role: 'complement' },
          ],
          answer: ['The government', 'increased funding,', 'but', 'the problem', 'remained', 'unsolved.'],
          guide: '등위접속사 but으로 연결된 두 뼈대: The government increased funding + the problem remained unsolved.',
        },
      ],

      quiz: [
        {
          q: 'FANBOYS가 아닌 것은?',
          opts: ['for', 'although', 'nor', 'yet'],
          answer: 1,
          exp: '"although"는 종속접속사(양보)입니다. FANBOYS = For, And, Nor, But, Or, Yet, So.',
        },
        {
          q: '"not only A but also B" — 핵심 내용은?',
          opts: ['A', 'B', 'A와 B 모두 동등', 'A가 부정, B가 핵심'],
          answer: 3,
          exp: '"not only"로 A를 먼저 말하고, "but also"로 B를 강조합니다. B가 핵심 메시지입니다.',
        },
        {
          q: '"The economy grew, so unemployment fell." — so의 의미는?',
          opts: ['대조', '선택', '결과(따라서)', '이유'],
          answer: 2,
          exp: 'so는 앞 내용의 결과를 나타냅니다. "경제가 성장했다, 그래서 실업률이 떨어졌다."',
        },
        {
          q: '등위접속사로 연결된 문장에서 뼈대의 수는?',
          opts: [
            '항상 하나',
            '절을 연결하면 여러 개, 단어를 연결하면 하나',
            '항상 두 개',
            '접속사 종류에 따라 다르다',
          ],
          answer: 1,
          exp: '등위접속사가 절과 절을 연결하면 뼈대가 여러 개 생깁니다. 단어와 단어를 연결할 때는 뼈대가 하나입니다.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 5-2: 시간·조건·이유·양보 — 부사절 접속사
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L5_2',
      title: '시간·조건·이유·양보 — 부사절 접속사',
      done: false,

      vocab: [
        { word: 'although / though', meaning: '비록 ~일지라도 (양보)', example: 'Although tired, she continued. 피곤해도 계속했다.' },
        { word: 'because / since',   meaning: '~이기 때문에 (이유)',   example: 'Because it rained, we stayed. 비가 와서 우린 있었다.' },
        { word: 'if / unless',       meaning: '만약 ~라면 / ~않는 한 (조건)', example: 'If you study, you will pass.' },
        { word: 'while / as',        meaning: '~하는 동안 / ~할 때 (시간·대조)', example: 'While I slept, she worked.' },
        { word: 'once / as soon as', meaning: '일단 ~하면 / ~하자마자',  example: 'Once you start, keep going.' },
        { word: 'even though',       meaning: '비록 ~일지라도 (강한 양보)', example: 'Even though it\'s hard, try.' },
      ],

      steps: [
        `부사절 접속사 — 한 절이 다른 절에 종속되어<br>시간·조건·이유·양보의 관계를 나타냅니다.<br><br><strong>시간</strong>: when / while / as / before / after / until / once / as soon as<br><strong>조건</strong>: if / unless / as long as / provided that<br><strong>이유</strong>: because / since / as / now that<br><strong>양보</strong>: although / though / even though / even if / while<br><br>부사절은 통째로 수식어입니다.<br>제거해도 주절 뼈대는 성립합니다.`,

        `<strong>시간 부사절</strong><br><br><div class="step-sentence"><span class="tok-mod">[When the results came out]</span>, everyone <mark class="v">was</mark> <mark class="c">shocked</mark>.</div>→ 결과가 나왔을 때, 모두가 충격을 받았다.<br><br><div class="step-sentence">She <mark class="v">had left</mark> <span class="tok-mod">[before I arrived]</span>.</div>→ 내가 도착하기 전에 그녀는 이미 떠났다.<br><br><div class="step-sentence"><span class="tok-mod">[Once you understand the basics]</span>, everything <mark class="v">becomes</mark> <mark class="c">easier</mark>.</div>→ 기초를 이해하면, 모든 것이 더 쉬워진다.`,

        `<strong>조건 부사절</strong><br><br><div class="step-sentence"><span class="tok-mod">[If you practice daily]</span>, your skills <mark class="v">will improve</mark>.</div>→ 매일 연습하면, 실력이 향상될 것이다.<br><br><div class="step-sentence">He <mark class="v">won't succeed</mark> <span class="tok-mod">[unless he changes his approach]</span>.</div>→ 접근법을 바꾸지 않는 한 그는 성공하지 못할 것이다.<br>(unless = if not)<br><br><div class="step-sentence"><span class="tok-mod">[As long as you try]</span>, failure <mark class="v">is</mark> <mark class="c">acceptable</mark>.</div>→ 노력하는 한, 실패는 용납된다.`,

        `<strong>이유 부사절</strong><br><br><div class="step-sentence">She <mark class="v">succeeded</mark> <span class="tok-mod">[because she never gave up]</span>.</div>→ 그녀는 성공했다 포기하지 않았기 때문에.<br><br><div class="step-sentence"><span class="tok-mod">[Since the evidence was insufficient]</span>, the case <mark class="v">was dismissed</mark>.</div>→ 증거가 불충분했으므로, 사건은 기각되었다.<br><br>because = 직접 이유 (가장 강함)<br>since = 이미 알려진 이유 (논리적 흐름)<br>as = 약한 이유 (동시 상황)`,

        `<strong>양보 부사절</strong> — 수능에서 가장 중요한 부사절.<br><br><div class="step-sentence"><span class="tok-mod">[Although the experiment failed]</span>, researchers <mark class="v">gained</mark> <mark class="o">valuable insights</mark>.</div>→ 실험이 실패했지만, 연구자들은 소중한 통찰을 얻었다.<br><br><div class="step-sentence">The policy <mark class="v">worked</mark>, <span class="tok-mod">[even though many opposed it]</span>.</div>→ 많은 사람들이 반대했음에도 불구하고 정책은 효과가 있었다.<br><br>although/though = 사실에 대한 양보<br>even though = 더 강한 대비 강조<br>even if = 가정에 대한 양보 ("설령 ~일지라도")`,

        `부사절 위치와 콤마 규칙.<br><br>부사절이 <strong>앞</strong>에 오면 → 콤마<br><span class="tok-mod">[Although he was tired]</span>, he continued.<br><br>부사절이 <strong>뒤</strong>에 오면 → 콤마 없음<br>He continued <span class="tok-mod">[although he was tired]</span>.<br><br>독해 Tip: 문장 앞에 오는 부사절은<br>[ ]로 묶고 주절 동사를 먼저 찾으세요.<br><br>부사절 = 수식어 → 뼈대 아님. 제거해도 OK.`,

        `이제 직접 확인해봅시다.<br><br>부사절(수식어)을 탭하세요.`,
      ],

      dissection: [
        {
          sentence: ['Although the results were unexpected,', 'the team', 'continued', 'the research.'],
          roles:    ['modifier', 'subject', 'verb', 'object'],
          task: 'modifier', taskLabel: '양보 부사절을 탭하세요',
          hint: '"Although the results were unexpected" = 결과가 예상치 못했지만. although절이 부사절(수식어).',
          ok: '맞아요. although절은 수식어. 뼈대: the team continued the research. — 3형식.',
        },
        {
          sentence: ['Scientists', 'will abandon the theory', 'if new evidence contradicts it.', ''],
          roles:    ['subject', 'verb+object', 'modifier', ''],
          task: 'modifier', taskLabel: '조건 부사절을 탭하세요',
          hint: '"if new evidence contradicts it" = 새 증거가 그것을 반박하면. if절이 조건 부사절(수식어).',
          ok: '맞아요. if절은 조건 부사절(수식어). 뼈대: Scientists will abandon the theory. — 3형식.',
        },
        {
          sentence: ['The law was passed', 'because the majority supported it.', '', ''],
          roles:    ['verb+subject', 'modifier', '', ''],
          task: 'modifier', taskLabel: '이유 부사절을 탭하세요',
          hint: '"because the majority supported it" = 다수가 지지했기 때문에. because절이 이유 부사절.',
          ok: '맞아요. because절은 이유 부사절(수식어). 뼈대: The law was passed. — 1형식(수동).',
        },
      ],

      skeleton: [
        {
          tokens: [
            { text: 'Although many experts disagreed,', role: 'modifier' },
            { text: 'the committee', role: 'subject' },
            { text: 'approved', role: 'verb' },
            { text: 'the controversial plan', role: 'object' },
            { text: 'unanimously.', role: 'modifier' },
          ],
          answer: ['the committee', 'approved', 'the controversial plan'],
          guide: '"Although many experts disagreed"(양보 부사절)와 "unanimously"(부사) 제거 → the committee approved the controversial plan. — 3형식',
        },
        {
          tokens: [
            { text: 'Once the new system is implemented,', role: 'modifier' },
            { text: 'productivity', role: 'subject' },
            { text: 'is expected to increase', role: 'verb' },
            { text: 'significantly.', role: 'modifier' },
          ],
          answer: ['productivity', 'is expected to increase'],
          guide: '"Once the new system is implemented"(시간 부사절)와 "significantly"(부사) 제거 → productivity is expected to increase. — 1형식(수동)',
        },
      ],

      quiz: [
        {
          q: '"Unless you act now, it will be too late." — unless의 의미는?',
          opts: ['~하는 동안', '~하지 않는 한', '비록 ~일지라도', '~하자마자'],
          answer: 1,
          exp: 'unless = if not. "지금 행동하지 않으면, 너무 늦을 것이다."',
        },
        {
          q: 'although vs even though — 차이는?',
          opts: [
            '완전히 같은 표현',
            'although는 사실, even though는 더 강한 대비 강조',
            'although는 미래, even though는 과거',
            'although는 구어체, even though는 문어체',
          ],
          answer: 1,
          exp: 'although와 even though 모두 양보절이지만, even though는 주절과의 대비를 더 강하게 강조합니다.',
        },
        {
          q: '부사절이 문장 앞에 오면?',
          opts: [
            '콤마 없이 주절에 붙인다',
            '콤마로 주절과 구분한다',
            '반드시 문장 뒤로 이동시킨다',
            '부사절은 항상 뒤에만 온다',
          ],
          answer: 1,
          exp: '부사절이 문장 앞에 오면 콤마로 주절과 구분합니다. "Although he was tired, he continued."',
        },
        {
          q: '"Since the data was incomplete, the results were inconclusive." — 뼈대는?',
          opts: [
            'the results were inconclusive.',
            'the data was incomplete.',
            'Since the data was incomplete.',
            'the data were results.',
          ],
          answer: 0,
          exp: '"Since the data was incomplete"는 이유 부사절(수식어). 뼈대: the results were inconclusive. — 2형식.',
        },
        {
          q: '"even if"와 "even though"의 차이는?',
          opts: [
            '완전히 같은 표현',
            'even if = 가정(~일지라도), even though = 사실(~임에도 불구하고)',
            'even if는 과거, even though는 현재',
            'even if는 구어, even though는 문어',
          ],
          answer: 1,
          exp: '"even if" = 가정적 상황("설령 ~일지라도"), "even though" = 실제 사실에 대한 양보("비록 ~이지만"). 수능 독해에서 구분 중요.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 5-3: 동사의 목적어가 된 절 — 명사절 접속사
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L5_3',
      title: '동사의 목적어가 된 절 — 명사절 접속사',
      done: false,

      vocab: [
        { word: 'that',    meaning: '~라는 것 (명사절)', example: 'I know that she is right. 그녀가 옳다는 것을 안다.' },
        { word: 'whether', meaning: '~인지 아닌지',       example: 'I wonder whether it works. 효과가 있는지 궁금하다.' },
        { word: 'if',      meaning: '~인지 (간접의문)',    example: 'He asked if I was okay. 괜찮은지 물었다.' },
        { word: 'what',    meaning: '무엇이/을 ~하는지',   example: 'I know what you did. 네가 무엇을 했는지 안다.' },
        { word: 'how',     meaning: '어떻게/얼마나',       example: 'She explained how it works.' },
        { word: 'why',     meaning: '왜 ~하는지',          example: 'I don\'t know why he left.' },
      ],

      steps: [
        `명사절 — 절 전체가 명사 역할을 합니다.<br>주어·목적어·보어 자리에 들어갈 수 있어요.<br><br><strong>that절</strong>: ~라는 것<br><strong>whether/if절</strong>: ~인지 아닌지<br><strong>의문사절</strong>: 무엇을/어떻게/왜 ~하는지<br><br><div class="step-sentence">I <mark class="v">know</mark> <mark class="o">[that she is right]</mark>.</div>→ [ ] 전체가 목적어 (명사 덩어리)`,

        `<strong>that절</strong> — "~라는 것"<br><br>목적어 자리:<br>I <strong>believe [that hard work pays off]</strong>.<br>She <strong>proved [that the theory was correct]</strong>.<br><br>주어 자리 (it...that 가주어 구문):<br><strong>It</strong> is clear <strong>[that he made a mistake]</strong>.<br>= [That he made a mistake] is clear. (긴 주어 → it으로 대체)<br><br>보어 자리:<br>The truth is <strong>[that we need to change]</strong>.`,

        `<strong>whether / if</strong> — "~인지 아닌지"<br><br><div class="step-sentence">Scientists <mark class="v">debated</mark> <mark class="o">[whether the results were valid]</mark>.</div>→ 결과가 유효한지 아닌지를 과학자들이 논의했다.<br><br><div class="step-sentence">I <mark class="v">don't know</mark> <mark class="o">[if he will come]</mark>.</div>→ 그가 올지 안 올지 모르겠다.<br><br>whether = if (목적어 자리에서 교체 가능)<br>단, 주어 자리나 전치사 뒤에는 whether만 씁니다.`,

        `<strong>의문사 명사절</strong> — 간접의문문<br>"무엇을/어떻게/왜/누가 ~하는지"<br><br>어순 주의: 의문사 + <strong>주어 + 동사</strong> (의문문 어순 아님!)<br><br>I know <strong>what she wants</strong>. (what does she want? ✗)<br>He explained <strong>how the system works</strong>.<br>Nobody knows <strong>why he disappeared</strong>.<br>Tell me <strong>who called</strong>.<br><br>직접의문문 → 간접의문문(명사절)으로 바뀔 때<br>어순이 "주어 + 동사"로 바뀝니다.`,

        `명사절 vs 부사절 — 같은 접속사가 다른 역할.<br><br><strong>if가 명사절</strong>: 목적어 자리<br>I wonder <strong>[if he is okay]</strong>. — 그가 괜찮은지<br><br><strong>if가 부사절</strong>: 수식어 자리<br><strong>[If he is okay]</strong>, he will call. — 괜찮다면<br><br><strong>that이 명사절</strong>: 목적어/주어<br>I know <strong>[that it works]</strong>. — 효과 있다는 것을<br><br><strong>that이 동격</strong>: 명사 내용 설명 (UNIT 4!)<br>the fact <strong>[that it works]</strong> — 효과가 있다는 사실`,

        `it ~ that 가주어·가목적어 구문.<br><br>주어나 목적어가 되는 that절이 길 때<br><strong>it</strong>으로 대신하고 절을 뒤로 보냅니다.<br><br><strong>가주어</strong>:<br>It is important <strong>[that we act now]</strong>.<br>= [That we act now] is important.<br><br><strong>가목적어</strong>:<br>She made it clear <strong>[that she disagreed]</strong>.<br>= She made [that she disagreed] clear.<br><br>it = 가짜 주어/목적어, that절 = 진짜 내용.`,

        `이제 직접 확인해봅시다.<br><br>명사절을 탭하세요.`,
      ],

      dissection: [
        {
          sentence: ['Research shows', 'that sleep deprivation', 'affects decision-making.', ''],
          roles:    ['verb', 'that-clause-start', 'that-clause-end', ''],
          task: 'modifier', taskLabel: '명사절(목적어)을 탭하세요',
          hint: '"that sleep deprivation affects decision-making" 전체가 "shows"의 목적어인 명사절입니다.',
          ok: '맞아요. that절 전체가 목적어. Research shows [that sleep deprivation affects decision-making]. — 3형식.',
        },
        {
          sentence: ['It', 'remains unclear', 'whether the policy will succeed.', ''],
          roles:    ['subject', 'verb+complement', 'real-subject', ''],
          task: 'modifier', taskLabel: '진짜 주어(whether절)를 탭하세요',
          hint: '"whether the policy will succeed" = 정책이 성공할지. it의 진짜 내용인 가주어 구문.',
          ok: '맞아요. It은 가주어, "whether the policy will succeed"가 진짜 주어. — 2형식(가주어 구문).',
        },
        {
          sentence: ['Nobody understands', 'why the experiment', 'produced such results.', ''],
          roles:    ['subject+verb', 'wh-clause', 'wh-clause-cont', ''],
          task: 'modifier', taskLabel: '의문사 명사절(목적어)을 탭하세요',
          hint: '"why the experiment produced such results" = 왜 실험이 그런 결과를 냈는지. 간접의문문이 목적어.',
          ok: '맞아요. "why the experiment produced such results"가 목적어인 명사절. — 3형식.',
        },
      ],

      skeleton: [
        {
          tokens: [
            { text: 'It', role: 'subject' },
            { text: 'is now widely accepted', role: 'verb+complement' },
            { text: 'that climate change is human-caused.', role: 'real-subject' },
          ],
          answer: ['It', 'is now widely accepted', 'that climate change is human-caused.'],
          guide: 'It ~ that 가주어 구문: It(가주어) is accepted + that절(진짜 주어). 뼈대 전체가 이 구문.',
        },
        {
          tokens: [
            { text: 'The study', role: 'subject' },
            { text: 'revealed', role: 'verb' },
            { text: 'that prolonged stress', role: 'object-start' },
            { text: 'significantly weakens', role: 'object-verb' },
            { text: 'the immune system.', role: 'object-end' },
          ],
          answer: ['The study', 'revealed', 'that prolonged stress significantly weakens the immune system.'],
          guide: 'that절 전체가 목적어. The study revealed [that ...]. — 3형식',
        },
      ],

      quiz: [
        {
          q: '"I wonder whether it works." — whether절의 역할은?',
          opts: ['부사절 (수식어)', '명사절 (목적어)', '형용사절 (수식어)', '주어'],
          answer: 1,
          exp: '"whether it works" = 효과가 있는지. wonder의 목적어인 명사절입니다.',
        },
        {
          q: '간접의문문의 올바른 어순은?',
          opts: [
            'I know what does she want.',
            'I know what she wants.',
            'I know what want she.',
            'I know wants what she.',
          ],
          answer: 1,
          exp: '간접의문문(명사절)은 "의문사 + 주어 + 동사" 어순. "what she wants" (✓)',
        },
        {
          q: '"It is essential that everyone participates." — it의 역할은?',
          opts: ['진짜 주어', '가주어', '목적어', '지시대명사'],
          answer: 1,
          exp: 'It은 가주어(형식 주어). 진짜 주어는 "that everyone participates" 절입니다.',
        },
        {
          q: '"the fact that it works"의 that vs "I know that it works"의 that — 차이는?',
          opts: [
            '완전히 같은 역할',
            '앞은 동격 that(명사 설명), 뒤는 명사절 that(목적어)',
            '앞은 관계대명사, 뒤는 접속사',
            '앞은 부사절, 뒤는 형용사절',
          ],
          answer: 1,
          exp: '"the fact that" = 동격 that(사실의 내용 설명). "I know that" = 명사절 that(know의 목적어). 둘 다 that절이지만 역할이 다릅니다.',
        },
        {
          q: '명사절로 쓸 수 없는 접속사는?',
          opts: ['that', 'whether', 'although', 'what'],
          answer: 2,
          exp: '"although"는 양보 부사절 접속사로만 쓰입니다. that/whether/what/how/why/who는 명사절을 이끌 수 있습니다.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 5-4: 문장과 문장 사이의 다리 — 접속부사
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L5_4',
      title: '문장과 문장 사이의 다리 — 접속부사',
      done: false,

      vocab: [
        { word: 'however',     meaning: '그러나, 하지만',         example: 'However, the results differed.' },
        { word: 'therefore',   meaning: '따라서, 그러므로',       example: 'Therefore, we must act.' },
        { word: 'moreover',    meaning: '게다가, 더욱이',         example: 'Moreover, it is cost-effective.' },
        { word: 'nevertheless',meaning: '그럼에도 불구하고',      example: 'Nevertheless, she continued.' },
        { word: 'in contrast', meaning: '대조적으로',             example: 'In contrast, other methods failed.' },
        { word: 'for example', meaning: '예를 들어',              example: 'For example, consider gravity.' },
      ],

      steps: [
        `접속부사 — 두 문장을 논리적으로 연결하는 부사.<br><br>접속사와 달리, 문장을 하나로 합치지 않습니다.<br>각 문장은 독립적. 접속부사는 <strong>흐름의 방향</strong>을 알려줍니다.<br><br>He studied hard. <strong>However</strong>, he failed.<br>→ 두 문장. "however"는 방향 전환 신호.<br><br>He studied hard, <strong>but</strong> he failed.<br>→ 한 문장. "but"은 등위접속사.`,

        `접속부사 종류 — 논리 관계별.<br><br><strong>대조·역접</strong>: however / nevertheless / nonetheless / yet<br>"그러나, 그럼에도 불구하고"<br><br><strong>결과·인과</strong>: therefore / thus / hence / consequently / as a result<br>"따라서, 그 결과"<br><br><strong>추가</strong>: moreover / furthermore / in addition / besides<br>"게다가, 더욱이"<br><br><strong>예시</strong>: for example / for instance / namely<br>"예를 들어, 즉"`,

        `<strong>대조 접속부사</strong> — 수능 독해 핵심 신호어.<br><br><div class="step-sentence">Early studies suggested a strong effect. <strong>However</strong>, later research found no significant difference.</div>→ 초기 연구는 강한 효과를 시사했다. 그러나, 후속 연구는 유의미한 차이를 발견하지 못했다.<br><br><div class="step-sentence">The theory was widely accepted. <strong>Nevertheless</strong>, some researchers remained skeptical.</div>→ 이론은 널리 받아들여졌다. 그럼에도 일부 연구자들은 회의적이었다.<br><br>however/nevertheless 뒤는 핵심 주장인 경우가 많습니다.`,

        `<strong>결과 접속부사</strong><br><br><div class="step-sentence">The experiment was repeated three times. <strong>Therefore</strong>, the results are reliable.</div>→ 실험이 세 번 반복되었다. 따라서 결과는 신뢰할 수 있다.<br><br><div class="step-sentence">Resources were limited. <strong>As a result</strong>, the project was delayed.</div>→ 자원이 부족했다. 그 결과 프로젝트가 지연되었다.<br><br>therefore/thus/consequently/as a result<br>= "앞 내용이 원인, 뒤 내용이 결과"`,

        `접속부사 위치 — 문장 앞, 중간, 끝 모두 가능.<br><br>문장 <strong>앞</strong>: <strong>However</strong>, he continued.<br>문장 <strong>중간</strong>: He, <strong>however</strong>, continued.<br>문장 <strong>끝</strong>: He continued, <strong>however</strong>.<br><br>위치에 따라 콤마가 붙습니다.<br><br>독해 Tip: 접속부사 앞뒤 두 문장의 <strong>논리 관계</strong>를 파악하세요.<br>however = 전환, therefore = 결론, moreover = 강화`,

        `수능 독해 논리 흐름 읽기.<br><br>접속부사는 필자의 논리를 눈에 보이게 표시합니다.<br><br>... <strong>However</strong>, ... → 앞 내용을 뒤집는 전환<br>... <strong>Therefore</strong>, ... → 앞 내용에서 도출한 결론<br>... <strong>Moreover</strong>, ... → 앞 내용에 추가 근거<br>... <strong>For example</strong>, ... → 앞 주장의 구체적 증거<br>... <strong>In contrast</strong>, ... → 앞과 반대되는 비교<br><br>이 신호어를 따라가면 글의 논리 구조가 보입니다.`,

        `이제 직접 확인해봅시다.<br><br>접속부사의 논리 관계를 파악해보세요.`,
      ],

      dissection: [
        {
          sentence: ['The new drug showed promise.', 'However,', 'side effects', 'were severe.'],
          roles:    ['clause1', 'conjunction-adv', 'subject', 'verb+complement'],
          task: 'conjunction', taskLabel: '접속부사를 탭하세요',
          hint: '"However"가 두 문장 사이의 대조 관계를 나타냅니다.',
          ok: '맞아요. However = 대조·역접. 앞: 약이 효과를 보였다. / 뒤: 부작용이 심했다.',
        },
        {
          sentence: ['The population grew rapidly.', 'Therefore,', 'resources', 'became scarce.'],
          roles:    ['clause1', 'conjunction-adv', 'subject', 'verb+complement'],
          task: 'conjunction', taskLabel: '접속부사를 탭하세요',
          hint: '"Therefore"가 앞 내용의 결과를 나타냅니다.',
          ok: '맞아요. Therefore = 결과. 인구 급증 → 자원 부족. 인과 관계.',
        },
      ],

      skeleton: [
        {
          tokens: [
            { text: 'The initial results', role: 'subject' },
            { text: 'were promising.', role: 'verb+complement' },
            { text: 'Nevertheless,', role: 'conjunction' },
            { text: 'further testing', role: 'subject' },
            { text: 'revealed', role: 'verb' },
            { text: 'significant flaws.', role: 'object' },
          ],
          answer: ['The initial results', 'were promising.', 'Nevertheless,', 'further testing', 'revealed', 'significant flaws.'],
          guide: 'Nevertheless = 양보·역접. 두 문장의 뼈대: (1) results were promising. (2) testing revealed flaws.',
        },
      ],

      quiz: [
        {
          q: '"however"와 "but"의 공통점과 차이점은?',
          opts: [
            '완전히 같은 표현으로 교체 가능',
            '둘 다 대조를 나타내지만, but은 접속사(한 문장), however는 접속부사(두 문장)',
            'but은 격식체, however는 비격식체',
            'however는 문장 앞에만 쓰인다',
          ],
          answer: 1,
          exp: '둘 다 대조를 나타내지만, but은 등위접속사로 문장을 하나로 합치고, however는 접속부사로 독립된 두 문장을 논리적으로 연결합니다.',
        },
        {
          q: '"therefore"가 나타내는 논리 관계는?',
          opts: ['대조', '추가', '결과·인과', '예시'],
          answer: 2,
          exp: 'therefore = "따라서, 그러므로" — 앞 내용이 원인, therefore 뒤가 결과입니다.',
        },
        {
          q: '수능 독해에서 "however" 뒤 내용의 특징은?',
          opts: [
            '앞 내용을 단순 반복한다',
            '앞 내용을 뒤집거나 제한하는 핵심 주장인 경우가 많다',
            '앞 내용의 예시를 제공한다',
            '앞 내용의 결론을 내린다',
          ],
          answer: 1,
          exp: '수능 비문학에서 however 뒤는 종종 글쓴이의 핵심 주장이나 역설적 발견이 등장합니다. 논리 전환 신호.',
        },
        {
          q: '"moreover"가 나타내는 관계는?',
          opts: ['결과', '예시', '추가 (게다가)', '대조'],
          answer: 2,
          exp: 'moreover = "게다가, 더욱이" — 앞 내용에 추가 근거나 정보를 더합니다.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 5-5: 실전 — 접속사로 글 읽기
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L5_5',
      title: '실전 — 접속사로 글 읽기',
      done: false,

      vocab: [
        { word: 'argument',   meaning: '주장, 논거',      example: 'a strong argument 강력한 주장' },
        { word: 'implication', meaning: '함의, 시사점',    example: 'social implications 사회적 시사점' },
        { word: 'whereas',    meaning: '반면에',           example: 'He is quiet, whereas she is loud.' },
        { word: 'provided',   meaning: '단, ~라는 조건으로', example: 'provided that you agree 동의한다면' },
      ],

      steps: [
        `UNIT 5 정리 — 접속사 세 종류.<br><br><strong>등위접속사</strong> (FANBOYS)<br>대등한 것 연결. and/but/or/so/yet/for/nor<br><br><strong>부사절 접속사</strong><br>시간/조건/이유/양보 부사절 → 수식어<br>when/if/because/although/while ...<br><br><strong>명사절 접속사</strong><br>that/whether/의문사 → 주어·목적어·보어<br><br><strong>접속부사</strong><br>독립 문장 연결 → 논리 흐름 신호<br>however/therefore/moreover ...`,

        `실전 — 논리 흐름 읽기 연습.<br><br>다음 지문의 접속사와 접속부사에 집중하세요.<br><br>"Traditional education emphasizes memorization.<br><strong>However</strong>, research shows <strong>that</strong> deep understanding<br>outlasts rote recall.<br><strong>Therefore</strong>, educators are rethinking<br><strong>whether</strong> standardized tests truly measure learning."<br><br>however → 전환 / that → 명사절 / therefore → 결론<br>whether → 명사절 (의심·질문)`,

        `실전 — 복합 문장 분해 연습.<br><br><div class="step-sentence"><span class="tok-mod">[Although many believe that technology causes isolation]</span>, studies indicate <mark class="o">[that it can also foster connection]</mark> <span class="tok-mod">[when used mindfully]</span>.</div><br>분해:<br>① Although절 (양보 부사절) → 수식어<br>② studies indicate = 주절 뼈대<br>③ that it can also foster connection = 목적어 명사절<br>④ when used mindfully = 시간 부사절 → 수식어<br><br>뼈대: studies indicate [that it can foster connection].`,

        `접속사 유형 빠른 구분법.<br><br>접속사를 만나면 세 가지를 확인하세요:<br><br>① <strong>어떤 절을 이끄는가?</strong><br>→ 부사절 / 명사절 / 연결어<br><br>② <strong>수식어인가 뼈대인가?</strong><br>→ 부사절 = 수식어 / 명사절 = 뼈대의 일부<br><br>③ <strong>논리 관계는 무엇인가?</strong><br>→ 대조·결과·이유·양보·추가·예시<br><br>이 세 가지를 판단하면<br>어떤 복잡한 문장도 구조가 보입니다.`,

        `UNIT 1~5 독해 공식 완성.<br><br>① <strong>동사를 찾는다</strong> (UNIT 1 — 뼈대)<br>② <strong>동사 형태를 읽는다</strong> (UNIT 2 — 시제·조동사·수동)<br>③ <strong>준동사를 묶는다</strong> (UNIT 3 — to부정사·분사·동명사)<br>④ <strong>명사 덩어리를 묶는다</strong> (UNIT 4 — 관계사·동격)<br>⑤ <strong>접속사로 절을 나눈다</strong> (UNIT 5 — 부사절/명사절/접속부사)<br><br>이 다섯 단계가 수능 독해의 완전한 지도입니다.`,

        `마지막 — 접속사를 '논리 지도'로 읽는 연습.<br><br>글을 읽을 때 접속사를 표시하면서 읽으면<br>필자의 사고 흐름이 지도처럼 보입니다.<br><br>주장 → however → 반론 → therefore → 결론<br>주장 → for example → 근거 → moreover → 추가 근거<br><br>논리 구조를 파악하면<br>문장 하나하나가 아니라 <strong>글 전체</strong>를 읽게 됩니다.<br><br>이것이 수능 독해의 목표입니다.`,

        `이제 직접 도전해봅시다.<br><br>접속사 유형을 구분하고 뼈대를 찾으세요.`,
      ],

      dissection: [
        {
          sentence: ['Although the cost was high,', 'the government', 'decided', 'to fund the project.'],
          roles:    ['modifier', 'subject', 'verb', 'object'],
          task: 'modifier', taskLabel: '부사절(수식어)을 탭하세요',
          hint: '"Although the cost was high" = 비용이 높았지만. 양보 부사절로 수식어입니다.',
          ok: '맞아요. although절 = 양보 부사절(수식어). 뼈대: the government decided to fund the project. — 3형식.',
        },
        {
          sentence: ['Researchers confirmed', 'that the new method', 'is more effective.', ''],
          roles:    ['subject+verb', 'that-clause', 'that-clause-cont', ''],
          task: 'modifier', taskLabel: '명사절(목적어)을 탭하세요',
          hint: '"that the new method is more effective" = 새 방법이 더 효과적이라는 것. 명사절이 목적어.',
          ok: '맞아요. that절 전체가 목적어인 명사절. Researchers confirmed [that...]. — 3형식.',
        },
        {
          sentence: ['Productivity increased.', 'Moreover,', 'employee satisfaction', 'improved significantly.'],
          roles:    ['clause1', 'conjunction-adv', 'subject', 'verb+adv'],
          task: 'conjunction', taskLabel: '접속부사를 탭하세요',
          hint: '"Moreover" = 게다가. 두 문장 사이에서 추가 관계를 나타냅니다.',
          ok: '맞아요. Moreover = 추가 접속부사. 두 번째 문장이 첫 번째에 정보를 더합니다.',
        },
        {
          sentence: ['Nobody knows', 'whether the policy will have', 'long-term effects.', ''],
          roles:    ['subject+verb', 'whether-clause', 'whether-clause-cont', ''],
          task: 'modifier', taskLabel: '명사절(목적어)을 탭하세요',
          hint: '"whether the policy will have long-term effects" = 정책이 장기 효과가 있을지. whether절이 목적어.',
          ok: '맞아요. whether절이 목적어인 명사절. Nobody knows [whether...]. — 3형식.',
        },
      ],

      skeleton: [
        {
          tokens: [
            { text: 'Although critics argued', role: 'modifier' },
            { text: 'that the research was flawed,', role: 'modifier' },
            { text: 'the findings', role: 'subject' },
            { text: 'have influenced', role: 'verb' },
            { text: 'global health policy', role: 'object' },
            { text: 'significantly.', role: 'modifier' },
          ],
          answer: ['the findings', 'have influenced', 'global health policy'],
          guide: '"Although critics argued that the research was flawed"(양보 부사절)와 "significantly"(부사) 제거 → the findings have influenced global health policy. — 3형식',
        },
        {
          tokens: [
            { text: 'It', role: 'subject' },
            { text: 'is becoming increasingly clear', role: 'verb+complement' },
            { text: 'that economic growth alone', role: 'real-subject' },
            { text: 'cannot solve social inequality.', role: 'real-subject-cont' },
          ],
          answer: ['It', 'is becoming increasingly clear', 'that economic growth alone cannot solve social inequality.'],
          guide: '가주어 It + that절(진짜 주어). — 2형식(가주어 구문)',
        },
      ],

      quiz: [
        {
          q: '"although"와 "however"의 차이는?',
          opts: [
            '완전히 같은 표현',
            'although는 부사절 접속사(한 문장 안), however는 접속부사(두 문장 연결)',
            'although는 이유, however는 대조',
            'although는 격식체, however는 비격식체',
          ],
          answer: 1,
          exp: 'although는 부사절을 이끄는 접속사로 한 문장 안에서 작동하고, however는 독립된 두 문장을 논리적으로 연결하는 접속부사입니다.',
        },
        {
          q: '"that"이 명사절을 이끄는 경우가 아닌 것은?',
          opts: [
            'I believe that she is right.',
            'It is true that he failed.',
            'the theory that Darwin proposed (관계대명사)',
            'She suggested that we leave.',
          ],
          answer: 2,
          exp: '"the theory that Darwin proposed" — that 뒤에 주어(Darwin)는 있지만 목적어 없음(proposed ?) → 관계대명사 that. 나머지는 명사절 접속사 that.',
        },
        {
          q: '수능 독해에서 "therefore" 뒤 내용의 특징은?',
          opts: [
            '앞 내용과 반대되는 새로운 주장',
            '앞 내용에서 논리적으로 도출된 결론',
            '앞 내용의 구체적 예시',
            '앞 내용을 보충하는 추가 정보',
          ],
          answer: 1,
          exp: 'therefore = "따라서". 앞 내용이 근거·원인이고, therefore 뒤가 결론·결과입니다.',
        },
        {
          q: 'UNIT 1~5 독해 공식에서 5단계 순서는?',
          opts: [
            '접속사→명사→동사→준동사→수식어',
            '동사찾기→동사형태→준동사묶기→명사덩어리→접속사로절나누기',
            '주어→동사→목적어→수식어→접속사',
            '형용사→부사→접속사→관계사→동사',
          ],
          answer: 1,
          exp: '① 동사 찾기(UNIT1) → ② 시제·조동사·수동(UNIT2) → ③ 준동사 묶기(UNIT3) → ④ 명사 덩어리(UNIT4) → ⑤ 접속사로 절 나누기(UNIT5)',
        },
        {
          q: '다음 중 부사절 접속사가 아닌 것은?',
          opts: ['although', 'because', 'whether', 'unless'],
          answer: 2,
          exp: '"whether"는 명사절 접속사(~인지 아닌지)입니다. although·because·unless는 부사절 접속사입니다.',
        },
      ],
    },

  ], // lessons end
};
