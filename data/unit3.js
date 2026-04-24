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
        `준동사(準動詞) — 한자 그대로 풀면 "동사에 준하는 것"입니다.<br>동사에서 태어났지만 동사 자리가 아닌 곳에서 일하는 말들이에요.<br><br>그런데 우리는 이렇게 기억합시다.<br><br><strong>화장</strong> — 형용사·부사처럼 문장에 덧붙이는 장식. 지우면 본체는 그대로.<br><strong>분장</strong> — 동사가 가면을 쓰고 형용사로 변신. 속은 동사, 겉은 형용사.<br><strong>성형수술</strong> — 동사가 완전히 명사로 재탄생. to swim = "수영하는 것"<br><br>이 레슨은 <strong>성형수술과 분장</strong> 이야기입니다.<span class="step-en">Verbals — the Chinese characters literally mean "words that stand in for verbs."<br>They are born from verbs but work outside the verb slot.<br><br>Let's remember it this way.<br><br><strong>Makeup</strong> — decoration added to a sentence like an adjective or adverb. Remove it and the core stays intact.<br><strong>Costume</strong> — a verb puts on a mask and becomes an adjective. Verb inside, adjective outside.<br><strong>Plastic surgery</strong> — a verb is completely reborn as a noun. to swim = "the act of swimming"<br><br>This lesson is the story of <strong>plastic surgery and costumes</strong>.</span>`,

        `동사는 원래 동사 자리에 앉습니다.<br>그런데 동사가 <strong>명사 자리</strong>에 앉고 싶다면?<br><br>한국어에서는 자연스럽습니다.<br><br>"<strong>달리는 것</strong>이 좋다." → 달리다(동사) → 달리는 것(명사)<br>"<strong>먹기</strong>가 싫다." → 먹다(동사) → 먹기(명사)<br><br>영어도 같은 방법이 있습니다.<span class="step-en">A verb naturally sits in the verb slot.<br>But what if a verb wants to sit in the <strong>noun slot</strong>?<br><br>In Korean, this feels natural.<br><br>"<strong>달리는 것</strong>이 좋다." → 달리다 (verb) → 달리는 것 (noun)<br>"<strong>먹기</strong>가 싫다." → 먹다 (verb) → 먹기 (noun)<br><br>English has the same method.</span>`,

        `방법 1 — <strong>to + 동사원형</strong> : to부정사<br><br>to swim = 수영하는 것 / 수영하기<br>to eat = 먹는 것 / 먹기<br>to become = 되는 것<br><br><div class="step-sentence"><mark class="s">To learn</mark> <mark class="v">takes</mark> <mark class="o">time</mark>.</div>배우는 것은 시간이 걸린다. → "To learn"이 주어 자리<br><br><div class="step-sentence">I <mark class="v">want</mark> <mark class="o">to go</mark>.</div>나는 원한다 가는 것을. → "to go"가 목적어 자리<span class="step-en">Method 1 — <strong>to + base verb</strong>: the to-infinitive<br><br>to swim = the act of swimming<br>to eat = the act of eating<br>to become = the act of becoming<br><br>Learning takes time. → "To learn" is in the subject slot<br><br>I want to go. → "to go" is in the object slot</span>`,

        `방법 2 — <strong>동사원형 + -ing</strong> : 동명사<br><br>swimming = 수영하는 것<br>eating = 먹는 것<br>becoming = 되는 것<br><br><div class="step-sentence"><mark class="s">Swimming</mark> <mark class="v">is</mark> <mark class="c">fun</mark>.</div>수영하는 것은 재미있다. → "Swimming"이 주어 자리<br><br><div class="step-sentence">He <mark class="v">enjoys</mark> <mark class="o">swimming</mark>.</div>그는 즐긴다 수영하는 것을. → "swimming"이 목적어 자리<span class="step-en">Method 2 — <strong>base verb + -ing</strong>: the gerund<br><br>swimming = the act of swimming<br>eating = the act of eating<br>becoming = the act of becoming<br><br>Swimming is fun. → "Swimming" is in the subject slot<br><br>He enjoys swimming. → "swimming" is in the object slot</span>`,

        `to부정사와 동명사, 둘 다 "~하는 것"입니다.<br>그렇다면 어느 것을 쓸까요?<br><br>동사마다 뒤에 오는 형태가 <strong>정해져 있습니다.</strong><br><br><strong>to부정사를 취하는 동사</strong><br>want / hope / decide / plan / need / wish<br>"나는 ~하기를 원한다/결정했다/계획했다"<br><br><div class="step-sentence">She <mark class="v">decided</mark> <mark class="o">to quit</mark>.</div>그녀는 결심했다 그만두기로.<span class="step-en">Both the to-infinitive and the gerund mean "the act of doing something."<br>So which one do you use?<br><br>Each verb has a <strong>fixed pattern</strong> for what follows it.<br><br><strong>Verbs that take the to-infinitive</strong><br>want / hope / decide / plan / need / wish<br>"I want / decided / planned to do something"<br><br>She decided to quit.</span>`,

        `<strong>동명사를 취하는 동사</strong><br>enjoy / finish / avoid / practice / keep / mind<br>"나는 ~하는 것을 즐긴다/끝냈다/피했다"<br><br><div class="step-sentence">He <mark class="v">finished</mark> <mark class="o">writing</mark> <mark class="o">the report</mark>.</div>그는 끝냈다 보고서 쓰는 것을.<br><br><div class="step-sentence">She <mark class="v">avoids</mark> <mark class="o">making</mark> <mark class="o">mistakes</mark>.</div>그녀는 피한다 실수하는 것을.<br><br>enjoy going (✓) / enjoy to go (✗)<br>decide to go (✓) / decide going (✗)<span class="step-en"><strong>Verbs that take the gerund</strong><br>enjoy / finish / avoid / practice / keep / mind<br>"I enjoy / finished / avoided doing something"<br><br>He finished writing the report.<br><br>She avoids making mistakes.<br><br>enjoy going (✓) / enjoy to go (✗)<br>decide to go (✓) / decide going (✗)</span>`,

        `<strong>둘 다 되는 동사</strong> — 하지만 뜻이 달라집니다.<br><br>remember / forget / stop / try<br><br><div class="step-sentence">I <mark class="v">remember</mark> <mark class="o">to call</mark> him. — 그에게 전화할 것을 기억한다 (앞으로)</div><div class="step-sentence">I <mark class="v">remember</mark> <mark class="o">calling</mark> him. — 그에게 전화한 것을 기억한다 (이미 함)</div><br><div class="step-sentence">She <mark class="v">stopped</mark> <mark class="o">to drink</mark> water. — 멈추었다 물을 마시기 위해 (목적)</div><div class="step-sentence">She <mark class="v">stopped</mark> <mark class="o">drinking</mark> water. — 물 마시는 것을 그만뒀다</div><span class="step-en"><strong>Verbs that take both</strong> — but the meaning changes.<br><br>remember / forget / stop / try<br><br>I remember to call him. — I will remember to call (future intention)<br>I remember calling him. — I remember having called (past action)<br><br>She stopped to drink water. — She stopped in order to drink (purpose)<br>She stopped drinking water. — She quit drinking water</span>`,

        `독해 전략.<br><br>긴 문장에서 to + 동사원형이나 -ing가 보이면<br>일단 "<strong>~하는 것</strong>"으로 해석해보세요.<br><br>주어 자리: Swimming is good. → 수영하는 것은 좋다.<br>목적어 자리: I want to go. → 나는 가는 것을 원한다.<br>보어 자리: My dream is to fly. → 내 꿈은 나는 것이다.<br><br><div class="step-sentence">The goal <span class="tok-mod">[of the study]</span> <mark class="v">was</mark> <mark class="c">to find a cure</mark>.</div>연구의 목표는 치료법을 찾는 것이었다. — 2형식<span class="step-en">Reading strategy.<br><br>When you see to + base verb or -ing in a long sentence,<br>first try reading it as "<strong>the act of doing something</strong>."<br><br>Subject slot: Swimming is good.<br>Object slot: I want to go.<br>Complement slot: My dream is to fly.<br><br>The goal [of the study] was to find a cure. — Pattern 2</span>`,

        `이제 직접 확인해보겠습니다.<br><br>문장에서 명사 역할을 하는<br>to부정사나 동명사를 찾아보세요.<span class="step-en">Now let's check for yourself.<br><br>Find the to-infinitive or gerund<br>that acts as a noun in each sentence.</span>`,
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
        {
          q: '밑줄 친 부분의 역할을 고르세요.\n"To master English requires patience."',
          opts: ['형용사 역할', '부사 역할', '명사 역할 (주어)', '동사 역할'],
          ans: 2,
          exp: '"To master English"는 문장의 주어 자리에 있는 to부정사입니다. to부정사의 명사적 용법(주어 역할).',
        },
        {
          q: '빈칸에 알맞은 것을 고르세요.\n"She admitted _____ the mistake."',
          opts: ['to make', 'making', 'made', 'make'],
          ans: 1,
          exp: 'admit은 동명사를 목적어로 취하는 동사입니다. admit making (✓) / admit to make (✗).',
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
        `to부정사는 명사 자리만 가는 게 아닙니다.<br><br>명사를 꾸미는 <strong>형용사 역할</strong>도 하고,<br>동사나 문장 전체를 꾸미는 <strong>부사 역할</strong>도 합니다.<br><br>같은 "to + 동사원형"인데 자리와 문맥에 따라<br>역할이 달라집니다.<span class="step-en">The to-infinitive does not only go to the noun slot.<br><br>It can also act as an <strong>adjective</strong> to modify a noun,<br>or as an <strong>adverb</strong> to modify a verb or the whole sentence.<br><br>It is the same "to + base verb," but its role changes<br>depending on position and context.</span>`,

        `<strong>형용사 역할</strong> — 명사 뒤에서 꾸미기<br><br>영어에서 to부정사가 명사를 꾸밀 때는<br>명사 <strong>뒤에</strong> 붙습니다. (한국어와 반대)<br><br><div class="step-sentence">I have a book <span class="tok-mod">[to read]</span>.</div>나는 있다 책이 읽을. → 읽을 책이 있다.<br><br><div class="step-sentence">We need time <span class="tok-mod">[to think]</span>.</div>우리는 필요하다 시간이 생각할. → 생각할 시간이 필요하다.<br><br>"to + 동사원형"이 앞 명사를 "어떤?"이라고 꾸밉니다.<span class="step-en"><strong>Adjective role</strong> — modifying from behind the noun<br><br>When a to-infinitive modifies a noun in English,<br>it attaches <strong>after</strong> the noun. (The opposite of Korean)<br><br>I have a book [to read]. → a book to read<br><br>We need time [to think]. → time to think<br><br>"to + base verb" answers the question "which [noun]?" about the noun before it.</span>`,

        `<strong>부사 역할 ① — 목적</strong> : ~하기 위해<br><br>가장 많이 쓰이는 용법입니다.<br><br><div class="step-sentence"><mark class="s">She</mark> <mark class="v">studies</mark> <span class="tok-mod">[to become a doctor]</span>.</div>그녀는 공부한다 <em>의사가 되기 위해</em>.<br><br><div class="step-sentence"><mark class="s">He</mark> <mark class="v">works hard</mark> <span class="tok-mod">[to support his family]</span>.</div>그는 열심히 일한다 <em>가족을 부양하기 위해</em>.<br><br>동사 뒤 to부정사가 "왜?"라고 물으면 답이 나오면 목적입니다.<span class="step-en"><strong>Adverb role ① — purpose</strong>: in order to<br><br>This is the most common usage.<br><br>She studies <em>to become a doctor</em>.<br><br>He works hard <em>to support his family</em>.<br><br>If the to-infinitive after a verb answers the question "why?", it expresses purpose.</span>`,

        `<strong>부사 역할 ② — 감정의 원인</strong> : ~해서<br><br>형용사 뒤에 to부정사가 오면<br>그 감정이 생긴 이유를 설명합니다.<br><br><div class="step-sentence">I am happy <span class="tok-mod">[to hear the news]</span>.</div>나는 행복하다 <em>그 소식을 듣게 되어</em>.<br><br><div class="step-sentence">She was surprised <span class="tok-mod">[to find him there]</span>.</div>그녀는 놀랐다 <em>그가 거기 있는 것을 알게 되어</em>.<br><br>happy to / surprised to / glad to / sorry to<br>감정 형용사 + to부정사 → "~해서 (감정)"<span class="step-en"><strong>Adverb role ② — cause of emotion</strong>: because / upon<br><br>When a to-infinitive follows an adjective,<br>it explains the reason the emotion arose.<br><br>I am happy [to hear the news]. → happy upon hearing the news<br><br>She was surprised [to find him there]. → surprised to discover he was there<br><br>happy to / surprised to / glad to / sorry to<br>emotion adjective + to-infinitive → "emotion because of ~"</span>`,

        `<strong>부사 역할 ③ — 결과</strong> : ~하여 결국<br><br>예상치 못한 결과를 나타낼 때.<br><br><div class="step-sentence">He grew up <span class="tok-mod">[to become a famous writer]</span>.</div>그는 자랐다 → 결국 유명한 작가가 되었다.<br><br><div class="step-sentence">She woke up <span class="tok-mod">[to find herself famous]</span>.</div>그녀는 눈을 떴다 → 자신이 유명해져 있음을 알았다.<br><br>grow up to / wake up to / live to<br>이런 패턴에서 자주 나타납니다.<span class="step-en"><strong>Adverb role ③ — result</strong>: and eventually / only to<br><br>Used to express an unexpected outcome.<br><br>He grew up [to become a famous writer]. → He grew up and eventually became a famous writer.<br><br>She woke up [to find herself famous]. → She woke up only to find she was famous.<br><br>grow up to / wake up to / live to<br>These patterns appear frequently.</span>`,

        `독해 전략 — to부정사가 보이면 질문하기.<br><br>① 앞 명사 바로 뒤 → <strong>형용사</strong>: 어떤 [명사]?<br>② 동사 뒤 + "왜?" → <strong>부사(목적)</strong>: ~하기 위해<br>③ 감정형용사 뒤 → <strong>부사(원인)</strong>: ~해서<br><br><div class="step-sentence">The researcher <mark class="v">developed</mark> <mark class="o">a method</mark> <span class="tok-mod">[to analyze the data]</span>.</div>연구자는 개발했다 방법을 — 어떤 방법? 데이터를 분석할.<br>→ "to analyze the data"는 method를 꾸미는 형용사 역할<span class="step-en">Reading strategy — ask a question whenever you see a to-infinitive.<br><br>① Right after a noun → <strong>adjective</strong>: which [noun]?<br>② After a verb + "why?" → <strong>adverb (purpose)</strong>: in order to<br>③ After an emotion adjective → <strong>adverb (cause)</strong>: because / upon<br><br>The researcher developed a method [to analyze the data].<br>→ "to analyze the data" acts as an adjective modifying "method"</span>`,

        `이제 직접 확인해보겠습니다.<br><br>to부정사가 어떤 역할인지 탭해서 골라보세요.<span class="step-en">Now let's check for yourself.<br><br>Tap to identify what role<br>each to-infinitive is playing.</span>`,
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
        {
          q: '"to solve"의 역할을 고르세요.\n"We need more time to solve this problem."',
          opts: ['명사 역할 (주어)', '"time"을 꾸미는 형용사 역할', '"need"의 목적을 나타내는 부사 역할', '동사 역할'],
          ans: 1,
          exp: '"to solve this problem"은 명사 "time" 바로 뒤에서 꾸밉니다. 어떤 time? 이 문제를 해결할 time → 형용사 역할.',
        },
        {
          q: '"to부정사"의 역할을 고르세요.\n"He exercised every day to lose weight."',
          opts: ['"He"를 꾸미는 형용사 역할', '문장의 주어 역할 (명사)', '"exercised"의 목적을 나타내는 부사 역할', '"every day"를 꾸미는 형용사 역할'],
          ans: 2,
          exp: '"왜 운동했나?" → 살을 빼기 위해. 목적을 나타내는 to부정사의 부사 역할입니다.',
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
        `분사(分詞) — 한자로 풀면 "동사에서 나뉘어 나온 말"입니다.<br>동사가 형용사 자리로 건너간 것이에요.<br><br>우리는 이렇게 기억합시다.<br><br><strong>동사가 분장을 하면 — 분사가 됩니다.</strong><br><br>run(달리다) → <strong>running</strong>(달리는)<br>break(부수다) → <strong>broken</strong>(부서진)<br><br>분장한 배우처럼, 겉모습은 형용사지만<br>속에는 동사의 DNA가 살아있어요.<br>그래서 목적어나 부사를 끌고 다닐 수 있습니다.<span class="step-en">Participle — the Chinese characters literally mean "a word split off from a verb."<br>It is a verb that has crossed over into the adjective slot.<br><br>Let's remember it this way.<br><br><strong>When a verb puts on a costume — it becomes a participle.</strong><br><br>run → <strong>running</strong> (running)<br>break → <strong>broken</strong> (broken)<br><br>Like a costumed actor, the outward appearance is an adjective,<br>but the DNA of a verb still lives inside.<br>That is why it can carry an object or adverb along with it.</span>`,

        `분사는 두 종류입니다.<br><br><strong>현재분사 — 동사원형 + -ing</strong><br>능동·진행의 의미: "~하는, ~하고 있는"<br><br><strong>과거분사 — 동사원형 + -ed (또는 불규칙)</strong><br>수동·완료의 의미: "~된, ~해진, ~당한"<br><br>running = 달리는 (능동)<br>broken = 부서진 (수동, 부서짐을 당한)<br>written = 쓰여진 (수동)<br>fallen = 떨어진 (완료)<span class="step-en">There are two types of participles.<br><br><strong>Present participle — base verb + -ing</strong><br>Active / progressive meaning: "doing, in the act of doing"<br><br><strong>Past participle — base verb + -ed (or irregular)</strong><br>Passive / completed meaning: "done, having been done"<br><br>running = running (active)<br>broken = broken (passive, subjected to breaking)<br>written = written (passive)<br>fallen = fallen (completed)</span>`,

        `명사 <strong>앞</strong>에서 꾸밀 때.<br><br>한 단어 분사는 명사 앞에 옵니다.<br><br><div class="step-sentence">a <span class="tok-mod">running</span> boy — 달리는 소년</div><div class="step-sentence">a <span class="tok-mod">broken</span> window — 부서진 창문</div><div class="step-sentence"><span class="tok-mod">flowing</span> water — 흐르는 물</div><div class="step-sentence">a <span class="tok-mod">written</span> record — 기록된 문서</div><br>형용사처럼 명사 바로 앞에 붙어요.<span class="step-en">Modifying from <strong>before</strong> the noun.<br><br>A single-word participle comes before the noun.<br><br>a running boy — a boy who is running<br>a broken window — a window that has been broken<br>flowing water — water that flows<br>a written record — a record that has been written<br><br>It attaches right before the noun, just like an adjective.</span>`,

        `명사 <strong>뒤</strong>에서 꾸밀 때 — 분사구<br><br>분사가 다른 말을 거느리면 길어져서<br>명사 뒤로 갑니다. (관계사절처럼 뒤에서 꾸밈)<br><br><div class="step-sentence">the boy <span class="tok-mod">[running in the park]</span></div>공원에서 달리는 소년<br><br><div class="step-sentence">the window <span class="tok-mod">[broken by the storm]</span></div>폭풍에 의해 부서진 창문<br><br>[ ] 전체가 수식어 덩어리입니다.<br>관계사절처럼 제거해도 뼈대는 성립합니다.<span class="step-en">Modifying from <strong>behind</strong> the noun — participial phrase<br><br>When a participle heads other words, it grows longer<br>and moves after the noun. (It modifies from behind, like a relative clause)<br><br>the boy [running in the park]<br>→ the boy who is running in the park<br><br>the window [broken by the storm]<br>→ the window that was broken by the storm<br><br>The entire [ ] is a modifier chunk.<br>Like a relative clause, removing it still leaves the core sentence intact.</span>`,

        `<strong>감정을 나타낼 때</strong> — -ing vs -ed 혼동 주의<br><br>이것을 헷갈리는 분들이 정말 많습니다.<br><br>exciting = 신나게 만드는 (대상이 주는 느낌)<br>excited = 신이 난 상태 (사람의 감정 상태)<br><br><div class="step-sentence">The game is <mark class="c">exciting</mark>. — 그 경기는 신나게 한다.</div><div class="step-sentence">She is <mark class="c">excited</mark>. — 그녀는 신이 났다.</div><br>boring / bored<br>interesting / interested<br>tiring / tired<br>surprising / surprised<br><br><em>-ing: 그것이 어떤 영향을 주는가</em><br><em>-ed: 사람이 어떤 상태인가</em><span class="step-en"><strong>Expressing emotions</strong> — watch out for confusion between -ing and -ed<br><br>Many learners mix these up.<br><br>exciting = causing excitement (the effect the thing has)<br>excited = in a state of excitement (the person's emotional state)<br><br>The game is exciting. — The game makes people excited.<br>She is excited. — She is in an excited state.<br><br>boring / bored<br>interesting / interested<br>tiring / tired<br>surprising / surprised<br><br><em>-ing: what effect does it have on others?</em><br><em>-ed: what state is the person in?</em></span>`,

        `독해 전략 — 분사구 [ ]로 묶기.<br><br>분사가 다른 말을 끌고 명사 뒤에 붙으면<br>관계사절처럼 [ ]로 묶어서 수식어로 처리하세요.<br><br><div class="step-sentence">The report <span class="tok-mod">[released last month]</span> <mark class="v">revealed</mark> <mark class="o">serious flaws</mark>.</div>지난달에 발표된 보고서가 심각한 결함을 드러냈다.<br><br>"released last month" = 분사구 (수식어)<br>뼈대: The report revealed serious flaws. — 3형식<span class="step-en">Reading strategy — bracket participial phrases with [ ].<br><br>When a participle carries other words and attaches after a noun,<br>bracket it with [ ] and treat it as a modifier, just like a relative clause.<br><br>The report [released last month] revealed serious flaws.<br>→ The report that was released last month revealed serious flaws.<br><br>"released last month" = participial phrase (modifier)<br>Core sentence: The report revealed serious flaws. — Pattern 3</span>`,

        `이제 직접 확인해보겠습니다.<br><br>분사(수식어)를 탭하세요.<span class="step-en">Now let's check for yourself.<br><br>Tap on the participle (modifier) in each sentence.</span>`,
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
        {
          q: '밑줄 친 분사의 종류를 고르세요.\n"Look at the sleeping baby."',
          opts: ['과거분사 (수동)', '현재분사 (능동·진행)', '동명사 (명사 역할)', '과거분사 (완료)'],
          ans: 1,
          exp: '"sleeping"은 baby가 스스로 자고 있는 능동·진행의 의미입니다. 현재분사로 명사 앞에서 꾸밉니다.',
        },
        {
          q: '알맞은 분사 형태를 고르세요.\n"The audience was _____ by the performance."',
          opts: ['amazing', 'amazed', 'amaze', 'amazement'],
          ans: 1,
          exp: '사람(audience)이 느끼는 감정 상태이므로 과거분사 "amazed"(감동받은)를 씁니다. amazing은 대상이 주는 느낌입니다.',
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
        `분사구를 더 길게 사용하면<br><strong>분사구문</strong>이 됩니다.<br><br>마치 접속사절을 압축한 것처럼,<br>두 가지 상황을 간결하게 연결합니다.<br><br>접속사절: <em>When she walked down the street, she saw him.</em><br>분사구문: <em>Walking down the street, she saw him.</em><br><br>같은 뜻인데 훨씬 짧고 간결합니다.<span class="step-en">When a participial phrase is extended further,<br>it becomes a <strong>participial construction</strong>.<br><br>Like a compressed adverbial clause,<br>it connects two situations concisely.<br><br>Adverbial clause: <em>When she walked down the street, she saw him.</em><br>Participial construction: <em>Walking down the street, she saw him.</em><br><br>Same meaning, but much shorter and more concise.</span>`,

        `분사구문이 만들어지는 원리.<br><br>① 접속사 제거<br>② 두 절의 주어가 같으면 부사절 주어 제거<br>③ 부사절 동사 → 현재분사(-ing)로 변환<br><br>When she <u>walked</u> → <strong>Walking</strong><br><br><div class="step-sentence"><span class="tok-mod">[Walking down the street]</span>, <mark class="s">she</mark> <mark class="v">saw</mark> <mark class="o">him</mark>.</div><br>[ ]가 분사구문 (수식어 덩어리).<br>뼈대: she saw him. — 3형식<span class="step-en">How a participial construction is formed.<br><br>① Remove the conjunction<br>② If both clauses share the same subject, remove the subject from the adverbial clause<br>③ Convert the adverbial clause verb → present participle (-ing)<br><br>When she walked → <strong>Walking</strong><br><br>[Walking down the street], she saw him.<br><br>[ ] is the participial construction (modifier chunk).<br>Core sentence: she saw him. — Pattern 3</span>`,

        `분사구문의 의미 — 문맥에 따라 달라집니다.<br><br><em>시간</em>: ~하면서, ~할 때<br><div class="step-sentence"><span class="tok-mod">[Entering the room]</span>, he <mark class="v">noticed</mark> something strange.</div>방에 들어갈 때, 그는 뭔가 이상한 것을 알아챘다.<br><br><em>이유</em>: ~이기 때문에<br><div class="step-sentence"><span class="tok-mod">[Knowing the truth]</span>, she <mark class="v">remained</mark> silent.</div>진실을 알기 때문에, 그녀는 침묵했다.<br><br><em>동시 상황</em>: ~하면서<br><div class="step-sentence">He <mark class="v">sat</mark> <span class="tok-mod">[reading a book]</span>.</div>그는 앉아 있었다, 책을 읽으면서.<span class="step-en">Meanings of participial constructions — they vary by context.<br><br><em>Time</em>: while / when<br>[Entering the room], he noticed something strange.<br>→ When he entered the room, he noticed something strange.<br><br><em>Reason</em>: because / since<br>[Knowing the truth], she remained silent.<br>→ Because she knew the truth, she remained silent.<br><br><em>Simultaneous action</em>: while<br>He sat [reading a book].<br>→ He sat there while reading a book.</span>`,

        `<strong>과거분사</strong>로 시작하는 분사구문.<br><br>수동의 의미를 담습니다.<br><br><div class="step-sentence"><span class="tok-mod">[Written in 1920]</span>, <mark class="s">the novel</mark> <mark class="v">still resonates</mark> <span class="tok-mod">today</span>.</div>1920년에 쓰여진 그 소설은 오늘날에도 여전히 공감을 얻는다.<br><br><div class="step-sentence"><span class="tok-mod">[Seen from above]</span>, <mark class="s">the city</mark> <mark class="v">looks</mark> <mark class="c">beautiful</mark>.</div>위에서 보면, 도시는 아름답게 보인다.<span class="step-en">Participial constructions starting with a <strong>past participle</strong>.<br><br>They carry a passive meaning.<br><br>[Written in 1920], the novel still resonates today.<br>→ Having been written in 1920, the novel still resonates today.<br><br>[Seen from above], the city looks beautiful.<br>→ When seen from above, the city looks beautiful.</span>`,

        `자주 쓰이는 독립적 분사구문.<br><br>관용적으로 굳어진 표현들입니다.<br>주어가 달라도 자주 씁니다.<br><br><strong>Given</strong> the situation — 상황을 고려하면<br><strong>Considering</strong> the cost — 비용을 고려하면<br><strong>Generally speaking</strong> — 일반적으로 말하면<br><strong>Strictly speaking</strong> — 엄밀히 말하면<br><strong>Judging from</strong> — ~로 판단하면<br><br>학술 문장, 뉴스, 논설문에 매우 자주 나옵니다.<span class="step-en">Commonly used independent participial constructions.<br><br>These are idiomatically fixed expressions.<br>They are often used even when the subjects differ.<br><br><strong>Given</strong> the situation — considering the situation<br><strong>Considering</strong> the cost — taking the cost into account<br><strong>Generally speaking</strong> — in general terms<br><strong>Strictly speaking</strong> — to be precise<br><strong>Judging from</strong> — based on / judging by<br><br>These appear very frequently in academic writing, news, and opinion pieces.</span>`,

        `독해 전략 — 분사구문 [ ]로 묶기.<br><br>문장 앞에 -ing나 -ed로 시작하는 덩어리가 보이면<br>분사구문입니다. [ ]로 묶고 수식어로 처리하세요.<br><br><div class="step-sentence"><span class="tok-mod">[Having spent years on the research]</span>, <mark class="s">the team</mark> <mark class="v">finally published</mark> <mark class="o">their findings</mark>.</div><br>Having spent years = 수년을 보내고 나서 (완료 분사구문)<br>뼈대: the team finally published their findings. — 3형식<span class="step-en">Reading strategy — bracket participial constructions with [ ].<br><br>When you see a chunk starting with -ing or -ed at the front of a sentence,<br>it is a participial construction. Bracket it with [ ] and treat it as a modifier.<br><br>[Having spent years on the research], the team finally published their findings.<br><br>Having spent years = after spending years on the research (perfect participial construction)<br>Core sentence: the team finally published their findings. — Pattern 3</span>`,

        `이제 직접 확인해보겠습니다.<br><br>분사구문(수식어)을 탭하세요.<span class="step-en">Now let's check for yourself.<br><br>Tap on the participial construction (modifier) in each sentence.</span>`,
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
        {
          q: '분사구문의 의미를 고르세요.\n"Knowing the answer, she raised her hand."',
          opts: ['조건: 답을 알면', '이유: 답을 알기 때문에', '결과: 결국 답을 알게 되었다', '양보: 답을 알면서도'],
          ans: 1,
          exp: '"Knowing the answer"는 이유의 분사구문입니다. "답을 알기 때문에" 손을 들었다는 인과 관계입니다.',
        },
        {
          q: '두 문장을 분사구문으로 연결한 것을 고르세요.\n"Because she felt tired, she went to bed early."',
          opts: [
            'Feeling tired, she went to bed early.',
            'Felt tired, she went to bed early.',
            'She feeling tired, went to bed early.',
            'To feel tired, she went to bed early.',
          ],
          ans: 0,
          exp: '접속사(Because)와 주어(she) 제거 후, felt → Feeling으로 변환합니다. 현재분사로 시작하는 분사구문이 됩니다.',
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
        `UNIT 3에서 배운 것을 정리합니다.<br><br>동사가 변신하는 세 가지 방법:<br><br><strong>to부정사</strong> → 명사 / 형용사 / 부사<br><strong>동명사(-ing)</strong> → 명사<br><strong>분사(-ing / p.p.)</strong> → 형용사<br><strong>분사구문</strong> → 수식어 덩어리<br><br>이 모두를 <strong>준동사</strong>라고 합니다.<br>동사처럼 목적어를 거느릴 수 있지만<br>문장의 핵심 동사는 아닙니다.<span class="step-en">Let's review what we learned in UNIT 3.<br><br>Three ways a verb can transform:<br><br><strong>to-infinitive</strong> → noun / adjective / adverb<br><strong>gerund (-ing)</strong> → noun<br><strong>participle (-ing / p.p.)</strong> → adjective<br><strong>participial construction</strong> → modifier chunk<br><br>All of these are called <strong>verbals</strong>.<br>They can carry objects like verbs,<br>but they are not the core verb of the sentence.</span>`,

        `실전 독해에서는 이것들이 겹쳐서 나옵니다.<br><br><div class="step-sentence">The program <span class="tok-mod">[designed to help students]</span> <mark class="v">has been widely praised</mark>.</div><br>designed to help students = 분사구(수식어)<br>has been widely praised = 현재완료 수동태<br>뼈대: The program has been widely praised. — 1형식(수동)<br><br>장신구를 걷어내면 구조가 보입니다.<span class="step-en">In real reading, these layers stack on top of each other.<br><br>The program [designed to help students] has been widely praised.<br><br>designed to help students = participial phrase (modifier)<br>has been widely praised = present perfect passive<br>Core sentence: The program has been widely praised. — Pattern 1 (passive)<br><br>Once you strip away the decorations, the structure becomes clear.</span>`,

        `실전 문장 2.<br><br><div class="step-sentence"><span class="tok-mod">[Having studied abroad for years]</span>, <mark class="s">she</mark> <mark class="v">decided</mark> <mark class="o">to apply for the position</mark>.</div><br>Having studied abroad for years = 완료 분사구문(수식어)<br>decided = 동사<br>to apply for the position = to부정사 (목적어·명사 역할)<br>뼈대: she decided to apply for the position. — 3형식<span class="step-en">Real sentence 2.<br><br>[Having studied abroad for years], she decided to apply for the position.<br><br>Having studied abroad for years = perfect participial construction (modifier)<br>decided = verb<br>to apply for the position = to-infinitive (object / noun role)<br>Core sentence: she decided to apply for the position. — Pattern 3</span>`,

        `실전 문장 3.<br><br><div class="step-sentence">The goal <span class="tok-mod">[of the organization]</span> <mark class="v">is</mark> <mark class="c">to provide resources</mark> <span class="tok-mod">[needed by communities</span> <span class="tok-mod">facing poverty]</span>.</div><br>전치사구 + 분사구 제거<br>to provide resources = to부정사(보어·명사 역할)<br>뼈대: The goal is to provide resources. — 2형식<span class="step-en">Real sentence 3.<br><br>The goal [of the organization] is to provide resources [needed by communities facing poverty].<br><br>Remove prepositional phrase + participial phrase<br>to provide resources = to-infinitive (complement / noun role)<br>Core sentence: The goal is to provide resources. — Pattern 2</span>`,

        `준동사를 빠르게 처리하는 눈.<br><br><strong>to + 동사원형</strong> 보이면:<br>→ 앞 명사 바로 뒤면 형용사, 아니면 명사·부사 판단<br><br><strong>동사원형-ing</strong> 보이면:<br>→ be + -ing면 진행형 동사<br>→ 단독이면 동명사(명사) 또는 현재분사(형용사/분사구문)<br><br><strong>-ed / p.p.</strong> 보이면:<br>→ be + p.p.면 수동태 동사<br>→ 단독이면 과거분사(형용사/분사구문)<span class="step-en">Developing a quick eye for verbals.<br><br>When you see <strong>to + base verb</strong>:<br>→ Right after a noun → adjective; otherwise → judge noun or adverb<br><br>When you see <strong>base verb-ing</strong>:<br>→ be + -ing → progressive verb<br>→ Standing alone → gerund (noun) or present participle (adjective / participial construction)<br><br>When you see <strong>-ed / p.p.</strong>:<br>→ be + p.p. → passive verb<br>→ Standing alone → past participle (adjective / participial construction)</span>`,

        `최종 독해 공식.<br><br>① 핵심 동사 찾기 (조동사·완료·수동 포함)<br>② 관계사절 [ ] 묶기<br>③ 전치사구 [ ] 묶기<br>④ 분사구/분사구문 [ ] 묶기<br>⑤ to부정사 역할 판단<br>⑥ 남은 것 → 뼈대<br><br>장신구를 하나씩 걷어낼수록<br>뼈대가 선명하게 드러납니다.<br><br>문장이 길수록, 이 방법이 더 강력합니다.<span class="step-en">The final reading formula.<br><br>① Find the core verb (including modals, perfect, passive)<br>② Bracket relative clauses [ ]<br>③ Bracket prepositional phrases [ ]<br>④ Bracket participial phrases / constructions [ ]<br>⑤ Identify the role of each to-infinitive<br>⑥ What remains → the core sentence<br><br>The more decorations you strip away one by one,<br>the more clearly the core structure emerges.<br><br>The longer the sentence, the more powerful this method becomes.</span>`,

        `이제 직접 도전해보겠습니다.<br><br>장신구를 찾아내고<br>뼈대의 형식을 골라보세요.<span class="step-en">Now it's time to try it yourself.<br><br>Identify the decorations<br>and choose the pattern of the core sentence.</span>`,
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
        {
          q: '밑줄 친 준동사의 역할을 고르세요.\n"The plan designed to cut costs has been approved."',
          opts: [
            'to부정사 — 명사 역할 (주어)',
            '과거분사구 — "plan"을 꾸미는 형용사 역할 (수식어)',
            '동명사 — 목적어 역할',
            '분사구문 — 부사 역할',
          ],
          ans: 1,
          exp: '"designed to cut costs"는 과거분사구로 "plan"을 뒤에서 꾸미는 수식어입니다. 제거해도 뼈대(The plan has been approved)는 성립합니다.',
        },
        {
          q: '문장의 뼈대(주어+동사+목적어)를 고르세요.\n"Having read the report, the manager decided to postpone the meeting."',
          opts: [
            'Having read the report / decided / to postpone',
            'the manager / decided / to postpone the meeting',
            'the manager / having read / the report',
            'the manager / decided / the meeting',
          ],
          ans: 1,
          exp: '"Having read the report"는 완료 분사구문(수식어). 뼈대: the manager decided to postpone the meeting. — 3형식. "to postpone the meeting"은 목적어(명사 역할).',
        },
      ],
    },

  ] // end lessons
}; // end UNIT3
