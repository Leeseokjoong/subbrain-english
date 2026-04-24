// ── UNIT 3: 동사의 이중생활 ────────────────────────────────────────────
const UNIT3 = {
  id: 'unit3',
  title: '동사의 이중생활',
  subtitle: '동사가 명사·형용사·부사로 변신한다',
  lessons: [

    // ══════════════════════════════════════════════════════════════
    // 레슨 3-1: 동사가 명사가 된다 — to부정사와 동명사
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L3_1',
      title: '동사가 명사가 된다 — to부정사·동명사',
      done: false,

      vocab: [
        { word: 'to swim',   meaning: '수영하는 것 / 수영하기',  example: '수영하는 것이 좋다.' },
        { word: 'swimming',  meaning: '수영하는 것 / 수영하기',  example: '그는 즐긴다 수영하는 것을.' },
        { word: 'to become', meaning: '~이 되는 것',             example: '그의 꿈은 의사가 되는 것이다.' },
        { word: 'avoiding',  meaning: '피하는 것',               example: '그녀는 피했다 그를 만나는 것을.' },
      ],

      steps: [
        `동사는 원래 동사 자리에 앉습니다.<br>그런데 동사가 <strong>명사 자리</strong>에 앉고 싶다면?<br><br>한국어에서는 자연스럽습니다.<br><br>"<strong>달리는 것</strong>이 좋다." → 달리다(동사) → 달리는 것(명사)<br>"<strong>먹기</strong>가 싫다." → 먹다(동사) → 먹기(명사)<br><br>영어도 같은 방법이 있습니다.`,

        `방법 1 — <strong>to + 동사원형</strong> : to부정사<br><br>to swim = 수영하는 것 / 수영하기<br>to eat = 먹는 것 / 먹기<br>to become = 되는 것<br><br><div class="step-sentence"><mark class="s">To learn</mark> <mark class="v">takes</mark> <mark class="o">time</mark>.</div>배우는 것은 시간이 걸린다. → "To learn"이 주어 자리<br><br><div class="step-sentence">I <mark class="v">want</mark> <mark class="o">to go</mark>.</div>나는 원한다 가는 것을. → "to go"가 목적어 자리`,

        `방법 2 — <strong>동사원형 + -ing</strong> : 동명사<br><br>swimming = 수영하는 것<br>eating = 먹는 것<br>becoming = 되는 것<br><br><div class="step-sentence"><mark class="s">Swimming</mark> <mark class="v">is</mark> <mark class="c">fun</mark>.</div>수영하는 것은 재미있다. → "Swimming"이 주어 자리<br><br><div class="step-sentence">He <mark class="v">enjoys</mark> <mark class="o">swimming</mark>.</div>그는 즐긴다 수영하는 것을. → "swimming"이 목적어 자리`,

        `to부정사와 동명사, 둘 다 "~하는 것"입니다.<br>그렇다면 어느 것을 쓸까요?<br><br>동사마다 뒤에 오는 형태가 <strong>정해져 있습니다.</strong><br><br><strong>to부정사를 취하는 동사</strong><br>want / hope / decide / plan / need / wish<br>"나는 ~하기를 원한다/결정했다/계획했다"<br><br><div class="step-sentence">She <mark class="v">decided</mark> <mark class="o">to quit</mark>.</div>그녀는 결심했다 그만두기로.`,

        `<strong>동명사를 취하는 동사</strong><br>enjoy / finish / avoid / practice / keep / mind<br>"나는 ~하는 것을 즐긴다/끝냈다/피했다"<br><br><div class="step-sentence">He <mark class="v">finished</mark> <mark class="o">writing</mark> <mark class="o">the report</mark>.</div>그는 끝냈다 보고서 쓰는 것을.<br><br><div class="step-sentence">She <mark class="v">avoids</mark> <mark class="o">making</mark> <mark class="o">mistakes</mark>.</div>그녀는 피한다 실수하는 것을.<br><br>enjoy going (✓) / enjoy to go (✗)<br>decide to go (✓) / decide going (✗)`,

        `<strong>둘 다 되는 동사</strong> — 하지만 뜻이 달라집니다.<br><br>remember / forget / stop / try<br><br><div class="step-sentence">I <mark class="v">remember</mark> <mark class="o">to call</mark> him. — 그에게 전화할 것을 기억한다 (앞으로)</div><div class="step-sentence">I <mark class="v">remember</mark> <mark class="o">calling</mark> him. — 그에게 전화한 것을 기억한다 (이미 함)</div><br><div class="step-sentence">She <mark class="v">stopped</mark> <mark class="o">to drink</mark> water. — 멈추었다 물을 마시기 위해 (목적)</div><div class="step-sentence">She <mark class="v">stopped</mark> <mark class="o">drinking</mark> water. — 물 마시는 것을 그만뒀다</div>`,

        `독해 전략.<br><br>긴 문장에서 to + 동사원형이나 -ing가 보이면<br>일단 "<strong>~하는 것</strong>"으로 해석해보세요.<br><br>주어 자리: Swimming is good. → 수영하는 것은 좋다.<br>목적어 자리: I want to go. → 나는 가는 것을 원한다.<br>보어 자리: My dream is to fly. → 내 꿈은 나는 것이다.<br><br><div class="step-sentence">The goal <span class="tok-mod">[of the study]</span> <mark class="v">was</mark> <mark class="c">to find a cure</mark>.</div>연구의 목표는 치료법을 찾는 것이었다. — 2형식`,

        `이제 직접 확인해보겠습니다.<br><br>문장에서 명사 역할을 하는<br>to부정사나 동명사를 찾아보세요.`,
      ],

      dissection: [
        {
          sentence: ['She', 'decided', 'to leave', 'immediately.'],
          roles:    ['subject', 'verb', 'object', 'modifier'],
          task: 'object', taskLabel: '목적어(to부정사)를 탭하세요',
          hint: '"to leave" = 떠나는 것. decide 뒤에 오는 to부정사가 목적어입니다.',
          ok: '맞아요. "to leave"가 목적어(명사 역할). decide + to부정사 — 3형식.',
        },
        {
          sentence: ['Finishing', 'the project', 'required', 'great effort.'],
          roles:    ['subject', 'object', 'verb', 'object'],
          task: 'subject', taskLabel: '주어(동명사)를 탭하세요',
          hint: '"Finishing the project" = 프로젝트를 끝내는 것. 동명사구가 주어입니다.',
          ok: '맞아요. "Finishing"이 주어 역할을 하는 동명사입니다. — 3형식.',
        },
        {
          sentence: ['His goal', 'was', 'to become', 'a doctor.'],
          roles:    ['subject', 'verb', 'complement', 'modifier'],
          task: 'form',
          taskLabel: '뼈대의 형식은?',
          formOpts: ['1형식', '2형식', '3형식', '4형식', '5형식'],
          ans: 1,
          hint: '"to become a doctor" = 의사가 되는 것. 물결동사(was) + 보어 → 2형식.',
          ok: '맞아요. His goal was to become a doctor. — 2형식. to부정사가 보어 역할.',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: 'For most people,', role: 'modifier', keep: false },
            { text: 'learning', role: 'subject', keep: true },
            { text: 'a new language', role: 'object', keep: true },
            { text: 'requires', role: 'verb', keep: true },
            { text: 'consistent practice', role: 'object', keep: true },
            { text: 'every day.', role: 'modifier', keep: false },
          ],
          result: 'learning a new language requires consistent practice.',
          guide: '수식어 제거 → "learning a new language requires consistent practice." — 3형식. 동명사구가 주어.',
        },
        {
          chunks: [
            { text: 'The scientist', role: 'subject', keep: true },
            { text: 'who led the team', role: 'modifier', keep: false },
            { text: 'decided', role: 'verb', keep: true },
            { text: 'to publish', role: 'object', keep: true },
            { text: 'the results', role: 'object', keep: true },
            { text: 'immediately.', role: 'modifier', keep: false },
          ],
          result: 'The scientist decided to publish the results.',
          guide: '관계사절 + 수식어 제거 → "The scientist decided to publish the results." — 3형식.',
        },
      ],

      quiz: [
        {
          q: '동사가 명사 역할을 하는 두 가지 형태는?',
          opts: [
            'to + 동사원형 (to부정사) / 동사원형 + -ing (동명사)',
            'be + 동사원형 / have + p.p.',
            '조동사 + 동사원형 / be + p.p.',
            '동사원형 + -ed / 동사원형 + -ing',
          ],
          ans: 0,
          exp: '명사로 변신: to부정사(to + 동사원형)와 동명사(동사원형-ing). 둘 다 "~하는 것"으로 해석합니다.',
        },
        {
          q: '"I enjoy _____ music." — 빈칸에 알맞은 것은?',
          opts: ['to listen', 'listening', 'listened', 'listen'],
          ans: 1,
          exp: 'enjoy는 동명사를 취하는 동사. enjoy listening (✓) / enjoy to listen (✗).',
        },
        {
          q: '"She stopped to rest." 와 "She stopped resting." 의 차이는?',
          opts: [
            '둘 다 쉬는 것을 그만뒀다는 뜻이다.',
            '앞은 쉬기 위해 멈췄다 / 뒤는 쉬는 것을 그만뒀다.',
            '앞은 쉬는 것을 그만뒀다 / 뒤는 쉬기 위해 멈췄다.',
            '뜻이 같고 형태만 다르다.',
          ],
          ans: 1,
          exp: 'stop + to부정사 = ~하기 위해 멈추다. stop + 동명사 = ~하는 것을 그만두다. 완전히 다른 뜻입니다.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 3-2: 동사가 꾸미는 말이 된다 — to부정사의 형용사·부사 역할
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L3_2',
      title: 'to부정사가 꾸민다 — 형용사·부사 역할',
      done: false,

      vocab: [
        { word: 'to read',    meaning: '읽을 (형용사) / 읽기 위해 (부사)', example: '읽을 책이 있다. / 나는 읽기 위해 앉았다.' },
        { word: 'to become',  meaning: '~이 되기 위해',                    example: '그는 공부한다 의사가 되기 위해.' },
        { word: 'to find',    meaning: '~를 알게 되어',                    example: '그녀는 놀랐다 그것을 알게 되어.' },
        { word: 'to solve',   meaning: '해결해야 할 / 해결하기 위해',       example: '우리는 문제가 있다 해결해야 할.' },
      ],

      steps: [
        `to부정사는 명사 자리만 가는 게 아닙니다.<br><br>명사를 꾸미는 <strong>형용사 역할</strong>도 하고,<br>동사나 문장 전체를 꾸미는 <strong>부사 역할</strong>도 합니다.<br><br>같은 "to + 동사원형"인데 자리와 문맥에 따라<br>역할이 달라집니다.`,

        `<strong>형용사 역할</strong> — 명사 뒤에서 꾸미기<br><br>영어에서 to부정사가 명사를 꾸밀 때는<br>명사 <strong>뒤에</strong> 붙습니다. (한국어와 반대)<br><br><div class="step-sentence">I have a book <span class="tok-mod">[to read]</span>.</div>나는 있다 책이 읽을. → 읽을 책이 있다.<br><br><div class="step-sentence">We need time <span class="tok-mod">[to think]</span>.</div>우리는 필요하다 시간이 생각할. → 생각할 시간이 필요하다.<br><br>"to + 동사원형"이 앞 명사를 "어떤?"이라고 꾸밉니다.`,

        `<strong>부사 역할 ① — 목적</strong> : ~하기 위해<br><br>가장 많이 쓰이는 용법입니다.<br><br><div class="step-sentence"><mark class="s">She</mark> <mark class="v">studies</mark> <span class="tok-mod">[to become a doctor]</span>.</div>그녀는 공부한다 <em>의사가 되기 위해</em>.<br><br><div class="step-sentence"><mark class="s">He</mark> <mark class="v">works hard</mark> <span class="tok-mod">[to support his family]</span>.</div>그는 열심히 일한다 <em>가족을 부양하기 위해</em>.<br><br>동사 뒤 to부정사가 "왜?"라고 물으면 답이 나오면 목적입니다.`,

        `<strong>부사 역할 ② — 감정의 원인</strong> : ~해서<br><br>형용사 뒤에 to부정사가 오면<br>그 감정이 생긴 이유를 설명합니다.<br><br><div class="step-sentence">I am happy <span class="tok-mod">[to hear the news]</span>.</div>나는 행복하다 <em>그 소식을 듣게 되어</em>.<br><br><div class="step-sentence">She was surprised <span class="tok-mod">[to find him there]</span>.</div>그녀는 놀랐다 <em>그가 거기 있는 것을 알게 되어</em>.<br><br>happy to / surprised to / glad to / sorry to<br>감정 형용사 + to부정사 → "~해서 (감정)"`,

        `<strong>부사 역할 ③ — 결과</strong> : ~하여 결국<br><br>예상치 못한 결과를 나타낼 때.<br><br><div class="step-sentence">He grew up <span class="tok-mod">[to become a famous writer]</span>.</div>그는 자랐다 → 결국 유명한 작가가 되었다.<br><br><div class="step-sentence">She woke up <span class="tok-mod">[to find herself famous]</span>.</div>그녀는 눈을 떴다 → 자신이 유명해져 있음을 알았다.<br><br>grow up to / wake up to / live to<br>이런 패턴에서 자주 나타납니다.`,

        `독해 전략 — to부정사가 보이면 질문하기.<br><br>① 앞 명사 바로 뒤 → <strong>형용사</strong>: 어떤 [명사]?<br>② 동사 뒤 + "왜?" → <strong>부사(목적)</strong>: ~하기 위해<br>③ 감정형용사 뒤 → <strong>부사(원인)</strong>: ~해서<br><br><div class="step-sentence">The researcher <mark class="v">developed</mark> <mark class="o">a method</mark> <span class="tok-mod">[to analyze the data]</span>.</div>연구자는 개발했다 방법을 — 어떤 방법? 데이터를 분석할.<br>→ "to analyze the data"는 method를 꾸미는 형용사 역할`,

        `이제 직접 확인해보겠습니다.<br><br>to부정사가 어떤 역할인지 탭해서 골라보세요.`,
      ],

      dissection: [
        {
          sentence: ['He', 'went to the store', 'to buy milk.'],
          roles:    ['subject', 'verb', 'modifier'],
          task: 'modifier', taskLabel: '부사 역할 to부정사(목적)를 탭하세요',
          hint: '"to buy milk" = 우유를 사기 위해. "왜 갔나?"의 답 → 목적.',
          ok: '맞아요. "to buy milk"는 부사 역할(목적). 그는 갔다 — 왜? 우유를 사기 위해.',
        },
        {
          sentence: ['She', 'was excited', 'to receive the award.'],
          roles:    ['subject', 'verb', 'modifier'],
          task: 'modifier', taskLabel: '부사 역할 to부정사(감정 원인)를 탭하세요',
          hint: '"excited to receive" = 받게 되어 흥분된. 감정 형용사 + to부정사 → 원인.',
          ok: '맞아요. "to receive the award"는 흥분된 이유(감정 원인). — 2형식.',
        },
        {
          sentence: ['There are', 'many problems', 'to solve', 'in this field.'],
          roles:    ['verb', 'subject', 'modifier', 'modifier'],
          task: 'form',
          taskLabel: '뼈대의 형식은?',
          formOpts: ['1형식', '2형식', '3형식', '4형식', '5형식'],
          ans: 0,
          hint: '"to solve"는 problems를 꾸미는 형용사. "in this field"는 전치사구. 뼈대: There are many problems.',
          ok: '맞아요. There are many problems. — 1형식. "to solve"는 형용사 역할(수식어).',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: 'Scientists', role: 'subject', keep: true },
            { text: 'work together', role: 'verb', keep: true },
            { text: 'to find solutions', role: 'modifier', keep: false },
            { text: 'to complex problems', role: 'modifier', keep: false },
            { text: 'in the field.', role: 'modifier', keep: false },
          ],
          result: 'Scientists work together.',
          guide: '수식어 제거 → "Scientists work together." — 1형식. "to find solutions"는 목적(부사 역할).',
        },
        {
          chunks: [
            { text: 'The government', role: 'subject', keep: true },
            { text: 'introduced a new policy', role: 'verb', keep: true },
            { text: 'to reduce', role: 'modifier', keep: false },
            { text: 'carbon emissions', role: 'modifier', keep: false },
            { text: 'by 2030.', role: 'modifier', keep: false },
          ],
          result: 'The government introduced a new policy.',
          guide: '수식어 제거 → "The government introduced a new policy." — 3형식. "to reduce..."는 policy를 꾸미는 형용사 역할.',
        },
      ],

      quiz: [
        {
          q: '"I have a report to write." — "to write"의 역할은?',
          opts: [
            '주어 역할 (명사)',
            '목적어 역할 (명사)',
            '"report"를 꾸미는 형용사 역할',
            '"have"의 목적을 나타내는 부사 역할',
          ],
          ans: 2,
          exp: '"to write"는 명사 "report" 바로 뒤에서 꾸밉니다. 어떤 report? 써야 할 report → 형용사 역할.',
        },
        {
          q: '"She studied hard to pass the exam." — "to pass"의 역할은?',
          opts: [
            '"She"를 꾸미는 형용사 역할',
            '"studied"의 목적을 나타내는 부사 역할',
            '주어 역할 (명사)',
            '"hard"를 꾸미는 형용사 역할',
          ],
          ans: 1,
          exp: '"왜 공부했나?" → 시험에 합격하기 위해. 목적을 나타내는 부사 역할입니다.',
        },
        {
          q: '"He was relieved to hear the news." — 뜻으로 알맞은 것은?',
          opts: [
            '그는 소식을 듣기 위해 안도했다.',
            '그는 소식을 들을 안도가 있었다.',
            '그는 소식을 듣게 되어 안도했다.',
            '그는 소식을 듣는 것을 안도했다.',
          ],
          ans: 2,
          exp: '감정형용사(relieved) + to부정사 → 감정의 원인. "소식을 듣게 되어 안도했다."',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 3-3: 동사가 형용사가 된다 — 분사
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L3_3',
      title: '동사가 형용사가 된다 — 분사',
      done: false,

      vocab: [
        { word: 'running',   meaning: '달리는 (현재분사)',   example: '달리는 소년. / 흐르는 물.' },
        { word: 'broken',    meaning: '부서진 (과거분사)',   example: '부서진 창문. / 망가진 꿈.' },
        { word: 'exciting',  meaning: '신나게 하는',        example: '신나는 경기.' },
        { word: 'excited',   meaning: '신이 난 (상태)',     example: '그녀는 신이 났다.' },
      ],

      steps: [
        `동사가 형용사로 변신하는 방법이 있습니다.<br><br>run(달리다) → <strong>running</strong>(달리는)<br>break(부수다) → <strong>broken</strong>(부서진)<br><br>이렇게 동사에서 태어난 형용사를<br><strong>분사</strong>라고 합니다.<br><br>태어난 곳이 동사라서<br>동사의 성질을 일부 가지고 있어요.`,

        `분사는 두 종류입니다.<br><br><strong>현재분사 — 동사원형 + -ing</strong><br>능동·진행의 의미: "~하는, ~하고 있는"<br><br><strong>과거분사 — 동사원형 + -ed (또는 불규칙)</strong><br>수동·완료의 의미: "~된, ~해진, ~당한"<br><br>running = 달리는 (능동)<br>broken = 부서진 (수동, 부서짐을 당한)<br>written = 쓰여진 (수동)<br>fallen = 떨어진 (완료)`,

        `명사 <strong>앞</strong>에서 꾸밀 때.<br><br>한 단어 분사는 명사 앞에 옵니다.<br><br><div class="step-sentence">a <span class="tok-mod">running</span> boy — 달리는 소년</div><div class="step-sentence">a <span class="tok-mod">broken</span> window — 부서진 창문</div><div class="step-sentence"><span class="tok-mod">flowing</span> water — 흐르는 물</div><div class="step-sentence">a <span class="tok-mod">written</span> record — 기록된 문서</div><br>형용사처럼 명사 바로 앞에 붙어요.`,

        `명사 <strong>뒤</strong>에서 꾸밀 때 — 분사구<br><br>분사가 다른 말을 거느리면 길어져서<br>명사 뒤로 갑니다. (관계사절처럼 뒤에서 꾸밈)<br><br><div class="step-sentence">the boy <span class="tok-mod">[running in the park]</span></div>공원에서 달리는 소년<br><br><div class="step-sentence">the window <span class="tok-mod">[broken by the storm]</span></div>폭풍에 의해 부서진 창문<br><br>[ ] 전체가 수식어 덩어리입니다.<br>관계사절처럼 제거해도 뼈대는 성립합니다.`,

        `<strong>감정을 나타낼 때</strong> — -ing vs -ed 혼동 주의<br><br>이것을 헷갈리는 분들이 정말 많습니다.<br><br>exciting = 신나게 만드는 (대상이 주는 느낌)<br>excited = 신이 난 상태 (사람의 감정 상태)<br><br><div class="step-sentence">The game is <mark class="c">exciting</mark>. — 그 경기는 신나게 한다.</div><div class="step-sentence">She is <mark class="c">excited</mark>. — 그녀는 신이 났다.</div><br>boring / bored<br>interesting / interested<br>tiring / tired<br>surprising / surprised<br><br><em>-ing: 그것이 어떤 영향을 주는가</em><br><em>-ed: 사람이 어떤 상태인가</em>`,

        `독해 전략 — 분사구 [ ]로 묶기.<br><br>분사가 다른 말을 끌고 명사 뒤에 붙으면<br>관계사절처럼 [ ]로 묶어서 수식어로 처리하세요.<br><br><div class="step-sentence">The report <span class="tok-mod">[released last month]</span> <mark class="v">revealed</mark> <mark class="o">serious flaws</mark>.</div>지난달에 발표된 보고서가 심각한 결함을 드러냈다.<br><br>"released last month" = 분사구 (수식어)<br>뼈대: The report revealed serious flaws. — 3형식`,

        `이제 직접 확인해보겠습니다.<br><br>분사(수식어)를 탭하세요.`,
      ],

      dissection: [
        {
          sentence: ['The man', 'standing at the door', 'is', 'my father.'],
          roles:    ['subject', 'modifier', 'verb', 'complement'],
          task: 'modifier', taskLabel: '분사구(수식어)를 탭하세요',
          hint: '"standing at the door" = 문 앞에 서 있는. 현재분사구가 "man"을 꾸밉니다.',
          ok: '맞아요. "standing at the door"는 분사구 수식어. 뼈대: The man is my father. — 2형식.',
        },
        {
          sentence: ['The letter', 'written in 1950', 'was discovered', 'in the attic.'],
          roles:    ['subject', 'modifier', 'verb', 'modifier'],
          task: 'modifier', taskLabel: '분사구(수식어)를 탭하세요',
          hint: '"written in 1950" = 1950년에 쓰여진. 과거분사구가 "letter"를 꾸밉니다.',
          ok: '맞아요. "written in 1950"은 분사구 수식어. 뼈대: The letter was discovered. — 1형식(수동).',
        },
        {
          sentence: ['The results', 'published in the journal', 'surprised', 'the researchers.'],
          roles:    ['subject', 'modifier', 'verb', 'object'],
          task: 'form',
          taskLabel: '분사구 제거 후 뼈대의 형식은?',
          formOpts: ['1형식', '2형식', '3형식', '4형식', '5형식'],
          ans: 2,
          hint: '"published in the journal"은 분사구(수식어). 뼈대: The results surprised the researchers.',
          ok: '맞아요. The results surprised the researchers. — 3형식.',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: 'The data', role: 'subject', keep: true },
            { text: 'collected over ten years', role: 'modifier', keep: false },
            { text: 'supports', role: 'verb', keep: true },
            { text: 'the hypothesis', role: 'object', keep: true },
            { text: 'strongly.', role: 'modifier', keep: false },
          ],
          result: 'The data supports the hypothesis.',
          guide: '분사구 + 수식어 제거 → "The data supports the hypothesis." — 3형식.',
        },
        {
          chunks: [
            { text: 'Students', role: 'subject', keep: true },
            { text: 'interested in science', role: 'modifier', keep: false },
            { text: 'should explore', role: 'verb', keep: true },
            { text: 'various fields', role: 'object', keep: true },
            { text: 'before choosing a major.', role: 'modifier', keep: false },
          ],
          result: 'Students should explore various fields.',
          guide: '분사구 + 수식어 제거 → "Students should explore various fields." — 3형식.',
        },
      ],

      quiz: [
        {
          q: '현재분사와 과거분사의 핵심 차이는?',
          opts: [
            '현재분사: 과거 의미 / 과거분사: 현재 의미',
            '현재분사(-ing): 능동·진행 / 과거분사(p.p.): 수동·완료',
            '현재분사는 명사 앞에만 / 과거분사는 명사 뒤에만',
            '현재분사는 형용사 / 과거분사는 부사',
          ],
          ans: 1,
          exp: '현재분사(-ing): "~하는" (능동), 과거분사(-ed/p.p.): "~된, ~당한" (수동/완료).',
        },
        {
          q: '"The movie was boring." 과 "I was bored." — 뜻의 차이는?',
          opts: [
            '둘 다 지루했다는 뜻이다.',
            '영화가 지루하게 만든다 / 나는 지루한 상태다.',
            '나는 지루하게 만든다 / 영화가 지루한 상태다.',
            '과거의 일 / 현재의 일의 차이다.',
          ],
          ans: 1,
          exp: '-ing(boring) = 대상이 주는 영향(지루하게 만드는). -ed(bored) = 사람의 감정 상태(지루해진 상태).',
        },
        {
          q: '"The report [released last week] changed everything." — "released last week"의 역할은?',
          opts: [
            '동사 역할',
            '"report"를 꾸미는 분사구(수식어)',
            '주어 역할',
            '목적어 역할',
          ],
          ans: 1,
          exp: '"released last week"는 과거분사구로 "report"를 꾸미는 수식어. 제거해도 뼈대는 성립합니다.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 3-4: 분사가 절이 된다 — 분사구문
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L3_4',
      title: '분사가 절이 된다 — 분사구문',
      done: false,

      vocab: [
        { word: 'Walking',   meaning: '걸으면서 / 걷다가',    example: '길을 걷다가 그녀를 만났다.' },
        { word: 'Seen',      meaning: '보면 / ~의 관점에서',  example: '위에서 보면 도시가 아름답다.' },
        { word: 'Having',    meaning: '~하고 나서 / ~했기에', example: '숙제를 끝내고 나서 나갔다.' },
        { word: 'Given',     meaning: '~을 고려하면',         example: '상황을 고려하면 잘 한 것이다.' },
      ],

      steps: [
        `분사구를 더 길게 사용하면<br><strong>분사구문</strong>이 됩니다.<br><br>마치 접속사절을 압축한 것처럼,<br>두 가지 상황을 간결하게 연결합니다.<br><br>접속사절: <em>When she walked down the street, she saw him.</em><br>분사구문: <em>Walking down the street, she saw him.</em><br><br>같은 뜻인데 훨씬 짧고 간결합니다.`,

        `분사구문이 만들어지는 원리.<br><br>① 접속사 제거<br>② 두 절의 주어가 같으면 부사절 주어 제거<br>③ 부사절 동사 → 현재분사(-ing)로 변환<br><br>When she <u>walked</u> → <strong>Walking</strong><br><br><div class="step-sentence"><span class="tok-mod">[Walking down the street]</span>, <mark class="s">she</mark> <mark class="v">saw</mark> <mark class="o">him</mark>.</div><br>[ ]가 분사구문 (수식어 덩어리).<br>뼈대: she saw him. — 3형식`,

        `분사구문의 의미 — 문맥에 따라 달라집니다.<br><br><em>시간</em>: ~하면서, ~할 때<br><div class="step-sentence"><span class="tok-mod">[Entering the room]</span>, he <mark class="v">noticed</mark> something strange.</div>방에 들어갈 때, 그는 뭔가 이상한 것을 알아챘다.<br><br><em>이유</em>: ~이기 때문에<br><div class="step-sentence"><span class="tok-mod">[Knowing the truth]</span>, she <mark class="v">remained</mark> silent.</div>진실을 알기 때문에, 그녀는 침묵했다.<br><br><em>동시 상황</em>: ~하면서<br><div class="step-sentence">He <mark class="v">sat</mark> <span class="tok-mod">[reading a book]</span>.</div>그는 앉아 있었다, 책을 읽으면서.`,

        `<strong>과거분사</strong>로 시작하는 분사구문.<br><br>수동의 의미를 담습니다.<br><br><div class="step-sentence"><span class="tok-mod">[Written in 1920]</span>, <mark class="s">the novel</mark> <mark class="v">still resonates</mark> <span class="tok-mod">today</span>.</div>1920년에 쓰여진 그 소설은 오늘날에도 여전히 공감을 얻는다.<br><br><div class="step-sentence"><span class="tok-mod">[Seen from above]</span>, <mark class="s">the city</mark> <mark class="v">looks</mark> <mark class="c">beautiful</mark>.</div>위에서 보면, 도시는 아름답게 보인다.`,

        `자주 쓰이는 독립적 분사구문.<br><br>관용적으로 굳어진 표현들입니다.<br>주어가 달라도 자주 씁니다.<br><br><strong>Given</strong> the situation — 상황을 고려하면<br><strong>Considering</strong> the cost — 비용을 고려하면<br><strong>Generally speaking</strong> — 일반적으로 말하면<br><strong>Strictly speaking</strong> — 엄밀히 말하면<br><strong>Judging from</strong> — ~로 판단하면<br><br>학술 문장, 뉴스, 논설문에 매우 자주 나옵니다.`,

        `독해 전략 — 분사구문 [ ]로 묶기.<br><br>문장 앞에 -ing나 -ed로 시작하는 덩어리가 보이면<br>분사구문입니다. [ ]로 묶고 수식어로 처리하세요.<br><br><div class="step-sentence"><span class="tok-mod">[Having spent years on the research]</span>, <mark class="s">the team</mark> <mark class="v">finally published</mark> <mark class="o">their findings</mark>.</div><br>Having spent years = 수년을 보내고 나서 (완료 분사구문)<br>뼈대: the team finally published their findings. — 3형식`,

        `이제 직접 확인해보겠습니다.<br><br>분사구문(수식어)을 탭하세요.`,
      ],

      dissection: [
        {
          sentence: ['Studying hard,', 'she', 'passed', 'the exam.'],
          roles:    ['modifier', 'subject', 'verb', 'object'],
          task: 'modifier', taskLabel: '분사구문(수식어)을 탭하세요',
          hint: '"Studying hard" = 열심히 공부해서 / 공부하면서. 분사구문입니다.',
          ok: '맞아요. "Studying hard"는 분사구문(수식어). 뼈대: she passed the exam. — 3형식.',
        },
        {
          sentence: ['Given the evidence,', 'the judge', 'made', 'a decision.'],
          roles:    ['modifier', 'subject', 'verb', 'object'],
          task: 'modifier', taskLabel: '분사구문(수식어)을 탭하세요',
          hint: '"Given the evidence" = 증거를 고려하면. 관용적 분사구문입니다.',
          ok: '맞아요. "Given the evidence"는 분사구문. 뼈대: the judge made a decision. — 3형식.',
        },
        {
          sentence: ['The scientist,', 'having completed the experiment,', 'reported', 'the results.'],
          roles:    ['subject', 'modifier', 'verb', 'object'],
          task: 'form',
          taskLabel: '분사구문 제거 후 뼈대의 형식은?',
          formOpts: ['1형식', '2형식', '3형식', '4형식', '5형식'],
          ans: 2,
          hint: '"having completed the experiment"는 완료 분사구문. 뼈대: The scientist reported the results.',
          ok: '맞아요. The scientist reported the results. — 3형식.',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: 'Considering all the factors,', role: 'modifier', keep: false },
            { text: 'the committee', role: 'subject', keep: true },
            { text: 'reached', role: 'verb', keep: true },
            { text: 'a unanimous decision', role: 'object', keep: true },
            { text: 'after hours of debate.', role: 'modifier', keep: false },
          ],
          result: 'the committee reached a unanimous decision.',
          guide: '분사구문 + 전치사구 제거 → "the committee reached a unanimous decision." — 3형식.',
        },
        {
          chunks: [
            { text: 'Having lived abroad', role: 'modifier', keep: false },
            { text: 'for ten years,', role: 'modifier', keep: false },
            { text: 'she', role: 'subject', keep: true },
            { text: 'understands', role: 'verb', keep: true },
            { text: 'different cultures', role: 'object', keep: true },
            { text: 'deeply.', role: 'modifier', keep: false },
          ],
          result: 'she understands different cultures.',
          guide: '완료 분사구문 + 수식어 제거 → "she understands different cultures." — 3형식.',
        },
      ],

      quiz: [
        {
          q: '"Walking down the street, she met an old friend." — "Walking down the street"의 역할은?',
          opts: [
            '주어 역할',
            '동사 역할',
            '분사구문 — 수식어 역할',
            '목적어 역할',
          ],
          ans: 2,
          exp: '분사구문은 수식어로, 제거해도 뼈대(she met an old friend)는 성립합니다.',
        },
        {
          q: '"Given the circumstances, the decision was reasonable." — "Given"의 뜻은?',
          opts: [
            '주어진',
            '상황을 고려하면',
            '상황을 줬기 때문에',
            '상황이 주어졌다',
          ],
          ans: 1,
          exp: '"Given + 명사"는 관용적 분사구문으로 "~을 고려하면"이라는 뜻입니다.',
        },
        {
          q: '분사구문을 독해할 때 올바른 전략은?',
          opts: [
            '분사구문도 주어로 처리한다',
            '-ing/-ed로 시작하는 덩어리를 [ ]로 묶고 수식어로 처리한다',
            '분사구문은 동사이므로 문장 형식을 결정한다',
            '분사구문 안에서 뼈대를 찾는다',
          ],
          ans: 1,
          exp: '분사구문은 수식어. [ ]로 묶어 옆에 치우면 뼈대가 드러납니다.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 3-5: 실전 — 준동사 꿰뚫기
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L3_5',
      title: '실전 — 준동사 꿰뚫기',
      done: false,

      vocab: [
        { word: 'aiming to',        meaning: '~하는 것을 목표로',    example: '회사는 목표로 한다 성장하는 것을.' },
        { word: 'having been',      meaning: '~이었기 때문에 / ~이고 나서', example: '오래 공부했기 때문에 그녀는 안다.' },
        { word: 'designed to',      meaning: '~하도록 설계된',       example: '이 앱은 설계되었다 돕기 위해.' },
        { word: 'widely accepted',  meaning: '널리 받아들여진',       example: '널리 받아들여진 이론이다.' },
      ],

      steps: [
        `UNIT 3에서 배운 것을 정리합니다.<br><br>동사가 변신하는 세 가지 방법:<br><br><strong>to부정사</strong> → 명사 / 형용사 / 부사<br><strong>동명사(-ing)</strong> → 명사<br><strong>분사(-ing / p.p.)</strong> → 형용사<br><strong>분사구문</strong> → 수식어 덩어리<br><br>이 모두를 <strong>준동사</strong>라고 합니다.<br>동사처럼 목적어를 거느릴 수 있지만<br>문장의 핵심 동사는 아닙니다.`,

        `실전 독해에서는 이것들이 겹쳐서 나옵니다.<br><br><div class="step-sentence">The program <span class="tok-mod">[designed to help students]</span> <mark class="v">has been widely praised</mark>.</div><br>designed to help students = 분사구(수식어)<br>has been widely praised = 현재완료 수동태<br>뼈대: The program has been widely praised. — 1형식(수동)<br><br>장신구를 걷어내면 구조가 보입니다.`,

        `실전 문장 2.<br><br><div class="step-sentence"><span class="tok-mod">[Having studied abroad for years]</span>, <mark class="s">she</mark> <mark class="v">decided</mark> <mark class="o">to apply for the position</mark>.</div><br>Having studied abroad for years = 완료 분사구문(수식어)<br>decided = 동사<br>to apply for the position = to부정사 (목적어·명사 역할)<br>뼈대: she decided to apply for the position. — 3형식`,

        `실전 문장 3.<br><br><div class="step-sentence">The goal <span class="tok-mod">[of the organization]</span> <mark class="v">is</mark> <mark class="c">to provide resources</mark> <span class="tok-mod">[needed by communities</span> <span class="tok-mod">facing poverty]</span>.</div><br>전치사구 + 분사구 제거<br>to provide resources = to부정사(보어·명사 역할)<br>뼈대: The goal is to provide resources. — 2형식`,

        `준동사를 빠르게 처리하는 눈.<br><br><strong>to + 동사원형</strong> 보이면:<br>→ 앞 명사 바로 뒤면 형용사, 아니면 명사·부사 판단<br><br><strong>동사원형-ing</strong> 보이면:<br>→ be + -ing면 진행형 동사<br>→ 단독이면 동명사(명사) 또는 현재분사(형용사/분사구문)<br><br><strong>-ed / p.p.</strong> 보이면:<br>→ be + p.p.면 수동태 동사<br>→ 단독이면 과거분사(형용사/분사구문)`,

        `최종 독해 공식.<br><br>① 핵심 동사 찾기 (조동사·완료·수동 포함)<br>② 관계사절 [ ] 묶기<br>③ 전치사구 [ ] 묶기<br>④ 분사구/분사구문 [ ] 묶기<br>⑤ to부정사 역할 판단<br>⑥ 남은 것 → 뼈대<br><br>장신구를 하나씩 걷어낼수록<br>뼈대가 선명하게 드러납니다.<br><br>문장이 길수록, 이 방법이 더 강력합니다.`,

        `이제 직접 도전해보겠습니다.<br><br>장신구를 찾아내고<br>뼈대의 형식을 골라보세요.`,
      ],

      dissection: [
        {
          sentence: ['The policy', 'designed to reduce inequality', 'has gained', 'wide support.'],
          roles:    ['subject', 'modifier', 'verb', 'object'],
          task: 'modifier', taskLabel: '분사구(수식어)를 탭하세요',
          hint: '"designed to reduce inequality" = 불평등을 줄이도록 설계된. 과거분사구.',
          ok: '맞아요. 뼈대: The policy has gained wide support. — 3형식(완료형).',
        },
        {
          sentence: ['Her dream', 'was', 'to become', 'the first scientist to win twice.'],
          roles:    ['subject', 'verb', 'complement', 'modifier'],
          task: 'complement', taskLabel: 'to부정사 보어를 탭하세요',
          hint: '"to become..."이 "dream"을 설명하는 보어입니다. 2형식.',
          ok: '맞아요. "to become..."은 to부정사 보어. Her dream = to become... → 2형식.',
        },
        {
          sentence: ['Considering the evidence,', 'the jury', 'found', 'him guilty.'],
          roles:    ['modifier', 'subject', 'verb', 'objcomp'],
          task: 'form',
          taskLabel: '분사구문 제거 후 뼈대의 형식은?',
          formOpts: ['1형식', '2형식', '3형식', '4형식', '5형식'],
          ans: 4,
          hint: '"Considering..."은 분사구문(수식어). 뼈대: the jury found him guilty. him = guilty?',
          ok: '맞아요. "the jury found him guilty." — him = guilty 관계 성립 → 5형식.',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: 'The technology,', role: 'subject', keep: true },
            { text: 'developed to solve the problem,', role: 'modifier', keep: false },
            { text: 'has proven', role: 'verb', keep: true },
            { text: 'effective', role: 'complement', keep: true },
            { text: 'in multiple trials.', role: 'modifier', keep: false },
          ],
          result: 'The technology has proven effective.',
          guide: '분사구 + 전치사구 제거 → "The technology has proven effective." — 2형식(완료형).',
        },
        {
          chunks: [
            { text: 'Having reviewed all the data,', role: 'modifier', keep: false },
            { text: 'the committee', role: 'subject', keep: true },
            { text: 'decided', role: 'verb', keep: true },
            { text: 'to recommend', role: 'object', keep: true },
            { text: 'a new approach', role: 'object', keep: true },
            { text: 'to solving the issue.', role: 'modifier', keep: false },
          ],
          result: 'the committee decided to recommend a new approach.',
          guide: '완료 분사구문 + 수식어 제거 → "the committee decided to recommend a new approach." — 3형식.',
        },
      ],

      quiz: [
        {
          q: '"The program designed to help students has improved their performance." — 뼈대는?',
          opts: [
            'The program designed to help students',
            'The program has improved their performance',
            'designed to help students has improved',
            'The program has improved',
          ],
          ans: 1,
          exp: '"designed to help students"는 분사구(수식어). 뼈대는 "The program has improved their performance." — 3형식(완료).',
        },
        {
          q: '"Having finished the project, she decided to take a break." — 문장 구조 설명으로 옳은 것은?',
          opts: [
            '주어가 두 개인 문장이다.',
            '"Having finished..."는 분사구문(수식어), "she decided to take a break"가 뼈대다.',
            '"to take a break"는 형용사 역할을 한다.',
            '"Having finished"는 수동태 동사다.',
          ],
          ans: 1,
          exp: '완료 분사구문(수식어) + 뼈대(she decided to take a break). to take는 decide의 목적어(명사 역할).',
        },
        {
          q: '준동사(to부정사·동명사·분사)의 공통점은?',
          opts: [
            '모두 문장의 핵심 동사 역할을 한다.',
            '모두 동사에서 변신했지만, 문장의 핵심 동사는 아니다.',
            '모두 명사 역할만 한다.',
            '모두 수식어(장신구) 역할만 한다.',
          ],
          ans: 1,
          exp: '준동사는 동사에서 태어났지만 명사·형용사·부사·수식어로 변신합니다. 문장의 핵심 동사가 아니어서 뼈대를 찾을 때 제거 대상입니다.',
        },
      ],
    },

  ] // end lessons
}; // end UNIT3
