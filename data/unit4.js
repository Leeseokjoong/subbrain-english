// ── UNIT 4: 명사를 꾸미는 말들 ───────────────────────────────────────────
const UNIT4 = {
  id: 'unit4',
  title: '명사를 꾸미는 말들',
  subtitle: '형용사·관계사·동격 — 명사에 붙는 모든 장신구',
  lessons: [

    // ══════════════════════════════════════════════════════════════
    // 레슨 4-1: 명사 앞뒤에서 꾸미기 — 형용사와 형용사구
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L4_1',
      title: '명사 앞뒤에서 꾸미기 — 형용사와 형용사구',
      done: false,

      vocab: [
        { word: 'significant', meaning: '중요한, 상당한',  example: 'a significant discovery 중요한 발견' },
        { word: 'potential',   meaning: '잠재적인 / 잠재력', example: 'potential risks 잠재적 위험' },
        { word: 'available',   meaning: '이용 가능한, 여유 있는', example: 'the only option available 이용 가능한 유일한 선택지' },
        { word: 'complex',     meaning: '복잡한',           example: 'a complex system 복잡한 시스템' },
      ],

      steps: [
        `명사를 꾸미는 말 — 형용사.<br><br>영어에서 형용사는 원칙적으로 <strong>명사 앞</strong>에 옵니다.<br><br>a <strong>beautiful</strong> woman<br>a <strong>complex</strong> theory<br>a <strong>significant</strong> change<br><br>이건 UNIT 1에서 배운 수식어(양념)의 일종입니다.<br>명사에 붙이고 떼도 뼈대는 그대로예요.`,

        `그런데 형용사가 <strong>명사 뒤</strong>에 오는 경우가 있습니다.<br><br>① 형용사가 길어질 때 (형용사구)<br><br>the only option <strong>available to students</strong><br>→ "학생들이 이용 가능한" 유일한 선택지<br><br>something <strong>special</strong><br>→ something, anything, nothing 뒤에는 형용사가 뒤에 옴<br><br>② 전치사구가 명사를 뒤에서 꾸밀 때<br>the book <strong>on the table</strong><br>the man <strong>in the black coat</strong>`,

        `③ to부정사가 명사를 뒤에서 꾸밀 때<br><br>a chance <strong>to learn</strong> — 배울 기회<br>the ability <strong>to adapt</strong> — 적응하는 능력<br>a decision <strong>to quit</strong> — 그만두기로 한 결정<br><br>이 to부정사는 앞의 명사를 꾸미는 형용사 역할입니다.<br>(UNIT 3에서 배운 to부정사의 형용사 역할!)<br><br><div class="step-sentence">She had no time <span class="tok-mod">[to prepare]</span>.</div>그녀는 없었다 준비할 시간이. → "to prepare"가 time을 꾸밈`,

        `명사에 장신구가 많이 붙을수록 덩어리가 커집니다.<br><br><div class="step-sentence">[ a <strong>significant</strong> discovery <span class="tok-mod">[about the nature of light]</span> ]</div>→ 빛의 본질에 관한 중요한 발견<br><br>[ ] 전체가 하나의 명사 덩어리.<br>핵심 명사는 <strong>discovery</strong> — 나머지는 전부 장신구.<br><br>독해 핵심: 명사 뒤에 무언가 붙기 시작하면<br>"아, 지금 이 명사를 설명하고 있구나" 하고 묶어 읽기.`,

        `수능에 자주 나오는 명사 꾸밈 패턴 정리.<br><br><strong>앞에서 꾸밈</strong><br>형용사 / 분사(-ing, -ed) / 명사 + 명사<br><br><strong>뒤에서 꾸밈</strong><br>전치사구 / to부정사 / 분사구(-ing, -ed) / 관계사절(다음 레슨!)<br><br><div class="step-sentence">The <strong>newly discovered</strong> evidence <span class="tok-mod">[supporting the theory]</span> <span class="tok-mod">[published last year]</span> <mark class="v">was</mark> <mark class="c">remarkable</mark>.</div>→ 지난해 출판된, 그 이론을 지지하는, 새롭게 발견된 증거는 놀라웠다.`,

        `이제 직접 확인해봅시다.<br><br>명사를 꾸미는 수식어를 탭하세요.`,
      ],

      dissection: [
        {
          sentence: ['The only solution', 'available', 'was', 'to negotiate.'],
          roles:    ['subject', 'modifier', 'verb', 'complement'],
          task: 'modifier', taskLabel: '수식어(형용사)를 탭하세요',
          hint: '"available" = 이용 가능한. 뒤에서 "solution"을 꾸미는 형용사입니다.',
          ok: '맞아요. "available"이 "solution"을 뒤에서 꾸미는 형용사. 뼈대: The solution was to negotiate. — 2형식.',
        },
        {
          sentence: ['A chance', 'to change everything', 'appeared', 'unexpectedly.'],
          roles:    ['subject', 'modifier', 'verb', 'modifier'],
          task: 'modifier', taskLabel: '명사를 꾸미는 to부정사구를 탭하세요',
          hint: '"to change everything" = 모든 것을 바꿀. to부정사구가 "chance"를 꾸밉니다.',
          ok: '맞아요. "to change everything"이 "chance"를 꾸미는 to부정사 형용사구. 뼈대: A chance appeared. — 1형식.',
        },
        {
          sentence: ['The experiments', 'conducted in the lab', 'produced', 'surprising results.'],
          roles:    ['subject', 'modifier', 'verb', 'object'],
          task: 'modifier', taskLabel: '분사구(수식어)를 탭하세요',
          hint: '"conducted in the lab" = 실험실에서 수행된. 과거분사구가 "experiments"를 뒤에서 꾸밉니다.',
          ok: '맞아요. "conducted in the lab"은 분사구 수식어. 뼈대: The experiments produced results. — 3형식.',
        },
      ],

      skeleton: [
        {
          tokens: [
            { text: 'The significant', role: 'subject' },
            { text: 'discovery', role: 'subject' },
            { text: 'about the nature of light', role: 'modifier' },
            { text: 'made', role: 'verb' },
            { text: 'scientists', role: 'object' },
            { text: 'reconsider', role: 'complement' },
            { text: 'their assumptions.', role: 'modifier' },
          ],
          answer: ['The significant', 'discovery', 'made', 'scientists', 'reconsider'],
          guide: '"about the nature of light"와 "their assumptions" 제거 → The significant discovery made scientists reconsider. — 5형식',
        },
        {
          tokens: [
            { text: 'A decision', role: 'subject' },
            { text: 'to restructure the entire system', role: 'modifier' },
            { text: 'was announced', role: 'verb' },
            { text: 'by the committee', role: 'modifier' },
            { text: 'yesterday.', role: 'modifier' },
          ],
          answer: ['A decision', 'was announced'],
          guide: 'to부정사구와 전치사구 수식어 제거 → A decision was announced. — 1형식(수동)',
        },
      ],

      quiz: [
        {
          q: '다음 중 형용사가 명사 뒤에 오는 경우가 아닌 것은?',
          opts: ['something special', 'the book on the table', 'a chance to learn', 'a beautiful flower'],
          answer: 3,
          exp: '"a beautiful flower"는 형용사가 명사 앞에 위치한 일반적인 경우입니다. 나머지는 모두 형용사(구)가 명사 뒤에서 꾸미는 경우입니다.',
        },
        {
          q: '"the ability to adapt" — "to adapt"의 역할은?',
          opts: ['주어', '목적어', '형용사 (ability를 꾸밈)', '부사'],
          answer: 2,
          exp: '"to adapt"는 to부정사 형용사적 용법으로 앞의 명사 "ability"를 꾸밉니다.',
        },
        {
          q: '명사 뒤에서 꾸미는 것이 아닌 것은?',
          opts: ['전치사구', '분사구', 'to부정사구', '부사'],
          answer: 3,
          exp: '부사는 명사를 꾸미지 않습니다. 전치사구·분사구·to부정사구는 모두 명사를 뒤에서 꾸밀 수 있습니다.',
        },
        {
          q: '"The only option available" — "available"의 위치가 뒤인 이유는?',
          opts: [
            'available은 항상 명사 뒤에 온다',
            'only가 앞에 있어서',
            'something/anything/nothing 계열과 형용사는 뒤에 온다',
            '형용사가 두 음절 이상이면 뒤에 온다',
          ],
          answer: 2,
          exp: 'something, anything, nothing, only option 같은 경우 수식하는 형용사가 뒤에 붙습니다.',
        },
        {
          q: '다음 문장에서 수식어만 제거한 뼈대는?\n"The newly discovered evidence supporting the theory was remarkable."',
          opts: [
            'The evidence was remarkable.',
            'The newly discovered evidence was remarkable.',
            'Evidence was remarkable.',
            'The evidence supporting was remarkable.',
          ],
          answer: 0,
          exp: '"newly discovered"(분사 수식어)와 "supporting the theory"(분사구 수식어)를 제거하면 → The evidence was remarkable. — 2형식.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 4-2: 명사에 설명을 붙이다 — 관계대명사
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L4_2',
      title: '명사에 설명을 붙이다 — 관계대명사',
      done: false,

      vocab: [
        { word: 'who',   meaning: '(사람) 관계대명사 — 주격/목적격', example: 'the man who runs every day 매일 달리는 남자' },
        { word: 'which', meaning: '(사물) 관계대명사',               example: 'the book which changed my life 내 인생을 바꾼 책' },
        { word: 'that',  meaning: '(사람·사물) 관계대명사',           example: 'the idea that shaped history 역사를 만든 생각' },
        { word: 'whom',  meaning: 'who의 목적격 (격식체)',            example: 'the person whom I admire 내가 존경하는 사람' },
      ],

      steps: [
        `관계대명사 — 두 문장을 합쳐서 명사를 설명합니다.<br><br>① I know a man. ② He runs every day.<br>→ I know a man <strong>who runs every day</strong>.<br><br>who가 ①의 "a man"을 받아 ②문장을 이끕니다.<br>[ who runs every day ] 전체가 "man"을 꾸미는 <strong>형용사절</strong>.<br><br>국어의 "~하는" 관형절과 같습니다.<br>"매일 달리는 남자를 나는 안다."`,

        `관계대명사의 종류.<br><br><strong>who</strong> — 선행사가 사람일 때<br>the student <strong>who won</strong> the prize 상을 탄 학생<br><br><strong>which</strong> — 선행사가 사물·동물일 때<br>the theory <strong>which explains</strong> everything 모든 것을 설명하는 이론<br><br><strong>that</strong> — 사람·사물 모두<br>the best idea <strong>that I've heard</strong> 내가 들어본 최고의 생각<br><br>독해에서는 <strong>who/which/that 뒤에 절이 오면</strong><br>앞 명사를 꾸기는 설명이 시작된다고 인식하세요.`,

        `관계대명사는 절 안에서 <strong>주어</strong> 역할을 합니다.<br><br>the man <strong>[who runs every day]</strong><br>→ who = he (주어) → 주격 관계대명사<br><br>the theory <strong>[which changed science]</strong><br>→ which = it (주어) → 주격 관계대명사<br><br>관계대명사가 주어이므로 바로 뒤에 동사가 옵니다.<br>who/which/that + <strong>동사</strong> → 주격 패턴.`,

        `관계대명사가 절 안에서 <strong>목적어</strong> 역할을 하면?<br><br>① I know the man. ② She met him yesterday.<br>→ I know the man <strong>[whom she met yesterday]</strong>.<br><br>whom = him (목적어) → 목적격 관계대명사<br>that / who로 대체 가능, <strong>생략도 가능</strong>.<br><br>I know the man <strong>[she met yesterday]</strong>. ← 생략형<br><br>독해 Tip: 명사 뒤에 갑자기 주어+동사가 오면<br>목적격 관계대명사가 생략된 것입니다.`,

        `관계대명사절 해석법 — [ ]로 묶고, 앞 명사에 붙이기.<br><br><div class="step-sentence">The scientist <span class="tok-mod">[who discovered the vaccine]</span> <mark class="v">received</mark> <mark class="o">the Nobel Prize</mark>.</div>→ [백신을 발견한] 과학자가 노벨상을 받았다.<br><br><div class="step-sentence">This is the report <span class="tok-mod">[that the committee approved]</span>.</div>→ 이것이 [위원회가 승인한] 보고서이다.<br>(that 이하: 목적격, that 생략 가능)<br><br>뼈대 찾기: [ ]를 통째로 치우면<br>The scientist received the Nobel Prize.`,

        `한 가지 더 — <strong>whose</strong> (소유격 관계대명사)<br><br>the student <strong>whose grades improved</strong><br>→ 성적이 향상된 학생 (whose = his/her)<br><br>the company <strong>whose products sell worldwide</strong><br>→ 제품이 전 세계에서 팔리는 회사<br><br>whose 뒤에 명사가 바로 옵니다.<br>whose + <strong>명사</strong> + 동사 → 소유격 패턴.`,

        `이제 직접 확인해봅시다.<br><br>관계대명사절(수식어)을 찾아보세요.`,
      ],

      dissection: [
        {
          sentence: ['The scientist', 'who discovered the vaccine', 'received', 'the Nobel Prize.'],
          roles:    ['subject', 'modifier', 'verb', 'object'],
          task: 'modifier', taskLabel: '관계대명사절(수식어)을 탭하세요',
          hint: '"who discovered the vaccine" = 백신을 발견한. who절이 "scientist"를 꾸밉니다.',
          ok: '맞아요. "who discovered the vaccine"은 관계대명사절 수식어. 뼈대: The scientist received the Nobel Prize. — 3형식.',
        },
        {
          sentence: ['This is', 'the book', 'that changed', 'my life.'],
          roles:    ['verb', 'complement', 'modifier', 'modifier'],
          task: 'modifier', taskLabel: '관계대명사절을 탭하세요',
          hint: '"that changed my life" = 내 인생을 바꾼. that절이 "book"을 꾸밉니다.',
          ok: '맞아요. "that changed my life"는 관계대명사절. 뼈대: This is the book. — 2형식.',
        },
        {
          sentence: ['Students', 'whose parents attended the meeting', 'received', 'extra credit.'],
          roles:    ['subject', 'modifier', 'verb', 'object'],
          task: 'modifier', taskLabel: '소유격 관계대명사절을 탭하세요',
          hint: '"whose parents attended the meeting" = 부모님이 회의에 참석한. whose절이 "Students"를 꾸밉니다.',
          ok: '맞아요. "whose parents attended the meeting"은 소유격 관계대명사절. 뼈대: Students received extra credit. — 3형식.',
        },
      ],

      skeleton: [
        {
          tokens: [
            { text: 'The evidence', role: 'subject' },
            { text: 'that scientists collected over decades', role: 'modifier' },
            { text: 'finally proved', role: 'verb' },
            { text: 'the theory', role: 'object' },
            { text: 'correct.', role: 'complement' },
          ],
          answer: ['The evidence', 'finally proved', 'the theory', 'correct.'],
          guide: '"that scientists collected over decades" 제거 → The evidence finally proved the theory correct. — 5형식',
        },
        {
          tokens: [
            { text: 'The company', role: 'subject' },
            { text: 'whose products dominated the market', role: 'modifier' },
            { text: 'announced', role: 'verb' },
            { text: 'a major restructuring plan', role: 'object' },
            { text: 'last Monday.', role: 'modifier' },
          ],
          answer: ['The company', 'announced', 'a major restructuring plan'],
          guide: '"whose products dominated the market"(관계사절)과 "last Monday"(수식어) 제거 → The company announced a major restructuring plan. — 3형식',
        },
      ],

      quiz: [
        {
          q: '빈칸에 알맞은 관계대명사는?\n"The man ___ I admire most is my father."',
          opts: ['who', 'which', 'whom', 'whose'],
          answer: 2,
          exp: '빈칸 뒤에 주어(I)가 있으므로 목적격 관계대명사 whom(또는 who/that)이 적절합니다.',
        },
        {
          q: '다음 중 관계대명사절만 제거한 뼈대가 바른 것은?\n"The theory that Darwin proposed changed biology forever."',
          opts: [
            'The theory changed biology forever.',
            'Darwin proposed changed biology.',
            'The theory that changed biology forever.',
            'Darwin changed biology forever.',
          ],
          answer: 0,
          exp: '"that Darwin proposed"를 제거하면 → The theory changed biology forever. — 3형식.',
        },
        {
          q: '"the student whose grades improved" — whose의 역할은?',
          opts: ['주격', '목적격', '소유격', '보어'],
          answer: 2,
          exp: 'whose는 소유격 관계대명사로, "the student\'s grades"의 소유 관계를 나타냅니다.',
        },
        {
          q: '관계대명사가 생략된 문장은?\n"This is the book she recommended."',
          opts: [
            '목적격 관계대명사(that/which)가 생략됨',
            '주격 관계대명사(who)가 생략됨',
            '소유격 관계대명사(whose)가 생략됨',
            '관계대명사가 없는 정상 문장',
          ],
          answer: 0,
          exp: '"she recommended" 앞에 목적격 관계대명사 that(which)이 생략되었습니다. "the book [that] she recommended".',
        },
        {
          q: '관계대명사절 뒤 바로 동사가 오면 어떤 패턴인가?',
          opts: [
            '주격 관계대명사 — who/which/that + 동사',
            '목적격 관계대명사 — 생략 불가',
            '소유격 관계대명사 — whose + 명사',
            '부사절 접속사 패턴',
          ],
          answer: 0,
          exp: '주격 관계대명사(who/which/that) 바로 뒤에 동사가 옵니다. 이 패턴을 인식하면 관계사절 독해가 쉬워집니다.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 4-3: 시간·장소·이유를 붙이다 — 관계부사
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L4_3',
      title: '시간·장소·이유를 붙이다 — 관계부사',
      done: false,

      vocab: [
        { word: 'when',  meaning: '(시간) 관계부사',  example: 'the day when we met 우리가 만난 날' },
        { word: 'where', meaning: '(장소) 관계부사',  example: 'the place where I grew up 내가 자란 곳' },
        { word: 'why',   meaning: '(이유) 관계부사',  example: 'the reason why he left 그가 떠난 이유' },
        { word: 'how',   meaning: '(방법) 관계부사',  example: 'the way he solved it 그가 해결한 방식' },
      ],

      steps: [
        `관계부사 — 관계대명사와 비슷하지만<br>명사를 꾸미는 방식이 다릅니다.<br><br>관계대명사: 선행사 + who/which/that + <strong>불완전한 절</strong> (주어나 목적어 빠짐)<br>관계부사:   선행사 + when/where/why + <strong>완전한 절</strong> (주어·동사·목적어 다 있음)<br><br>the day <strong>[when we met]</strong> — we met은 완전한 절<br>the man <strong>[who runs]</strong> — who가 주어 역할 → 불완전`,

        `<strong>when</strong> — 선행사가 시간 명사일 때<br><br>the day / the time / the moment / the year<br><br>I remember the day <strong>when we first met</strong>.<br>우리가 처음 만난 날을 나는 기억한다.<br><br>= I remember the day <strong>on which we first met</strong>.<br>(when = on which — 전치사 + which로 바꿀 수 있음)<br><br>선행사 the day/time은 생략 가능:<br>I remember <strong>when we first met</strong>. ← 명사절로도 쓰임`,

        `<strong>where</strong> — 선행사가 장소 명사일 때<br><br>the place / the city / the school / the country<br><br>This is the school <strong>where I studied</strong>.<br>이곳이 내가 공부한 학교이다.<br><br>= This is the school <strong>in which I studied</strong>.<br>(where = in which)<br><br><div class="step-sentence">He moved to a city <span class="tok-mod">[where opportunities were abundant]</span>.</div>→ 기회가 풍부한 도시로 그는 이사했다.`,

        `<strong>why</strong> — 선행사가 the reason일 때<br><strong>how</strong> — 선행사가 the way일 때 (둘 중 하나만 씀)<br><br>Tell me the reason <strong>why you left</strong>.<br>= Tell me <strong>why you left</strong>. ← the reason 생략<br><br>I admire the way <strong>he solved it</strong>.<br>= I admire <strong>how he solved it</strong>. ← the way 또는 how 중 하나<br><br>★ "the way how"는 쓰지 않습니다 — 둘 중 하나만!`,

        `관계대명사 vs 관계부사 — 구분 핵심.<br><br>뒤에 오는 절이 <strong>완전한가 불완전한가</strong>.<br><br>the city <strong>[which I visited]</strong><br>→ I visited — 목적어 없음 (visited ?) → <strong>불완전</strong> → 관계대명사<br><br>the city <strong>[where I lived]</strong><br>→ I lived — 완전한 절 (1형식) → <strong>완전</strong> → 관계부사<br><br>불완전 절 → 관계대명사 (who/which/that)<br>완전 절 → 관계부사 (when/where/why/how)`,

        `독해에서 관계부사 처리법.<br><br><div class="step-sentence">The moment <span class="tok-mod">[when the results were announced]</span> <mark class="v">was</mark> <mark class="c">unforgettable</mark>.</div>→ 결과가 발표된 그 순간은 잊을 수 없었다.<br><br><div class="step-sentence">This is the context <span class="tok-mod">[where the theory applies best]</span>.</div>→ 이것이 그 이론이 가장 잘 적용되는 맥락이다.<br><br>관계부사절도 관계대명사절과 마찬가지로 [ ]로 묶고<br>앞 명사에 "~한/~인" 을 붙여 해석합니다.`,

        `이제 직접 확인해봅시다.<br><br>관계부사절(수식어)을 탭하세요.`,
      ],

      dissection: [
        {
          sentence: ['I remember the moment', 'when everything changed.', '', ''],
          roles:    ['subject+verb+object', 'modifier', '', ''],
          task: 'modifier', taskLabel: '관계부사절을 탭하세요',
          hint: '"when everything changed" = 모든 것이 바뀐. when절이 "the moment"를 꾸밉니다.',
          ok: '맞아요. "when everything changed"는 관계부사절. 뼈대: I remember the moment. — 3형식.',
        },
        {
          sentence: ['She explained', 'the reason', 'why the experiment failed.', ''],
          roles:    ['verb', 'object', 'modifier', ''],
          task: 'modifier', taskLabel: '관계부사절을 탭하세요',
          hint: '"why the experiment failed" = 실험이 실패한. why절이 "the reason"을 꾸밉니다.',
          ok: '맞아요. "why the experiment failed"는 관계부사절. 뼈대: She explained the reason. — 3형식.',
        },
        {
          sentence: ['The lab', 'where they conducted the research', 'has been renovated.', ''],
          roles:    ['subject', 'modifier', 'verb', ''],
          task: 'modifier', taskLabel: '관계부사절(수식어)을 탭하세요',
          hint: '"where they conducted the research" = 그들이 연구를 수행한. where절이 "lab"을 꾸밉니다.',
          ok: '맞아요. "where they conducted the research"는 관계부사절. 뼈대: The lab has been renovated. — 1형식.',
        },
      ],

      skeleton: [
        {
          tokens: [
            { text: 'The year', role: 'subject' },
            { text: 'when the company was founded', role: 'modifier' },
            { text: 'marked', role: 'verb' },
            { text: 'a turning point', role: 'object' },
            { text: 'in the industry.', role: 'modifier' },
          ],
          answer: ['The year', 'marked', 'a turning point'],
          guide: '"when the company was founded"와 "in the industry" 제거 → The year marked a turning point. — 3형식',
        },
        {
          tokens: [
            { text: 'This explains', role: 'verb' },
            { text: 'the reason', role: 'object' },
            { text: 'why some cultures', role: 'modifier' },
            { text: 'developed faster', role: 'modifier' },
            { text: 'than others.', role: 'modifier' },
          ],
          answer: ['This explains', 'the reason'],
          guide: '"why some cultures developed faster than others" 제거 → This explains the reason. — 3형식',
        },
      ],

      quiz: [
        {
          q: '빈칸에 알맞은 관계부사는?\n"This is the place ___ history was made."',
          opts: ['when', 'where', 'why', 'which'],
          answer: 1,
          exp: '선행사 "the place"는 장소이므로 관계부사 where를 씁니다.',
        },
        {
          q: '관계대명사와 관계부사의 결정적 차이는?',
          opts: [
            '관계대명사는 사람, 관계부사는 사물 선행사',
            '관계대명사 뒤는 불완전절, 관계부사 뒤는 완전절',
            '관계대명사는 생략 불가, 관계부사는 생략 가능',
            '관계대명사는 형용사절, 관계부사는 명사절',
          ],
          answer: 1,
          exp: '핵심 구분: 관계대명사 뒤에는 주어나 목적어가 빠진 불완전절, 관계부사 뒤에는 완전한 절이 옵니다.',
        },
        {
          q: '"the way how he did it" — 이 문장이 틀린 이유는?',
          opts: [
            'how 대신 that을 써야 한다',
            'the way와 how는 동시에 쓰지 않는다',
            'he did it은 불완전절이라 관계부사 불가',
            'the way는 선행사로 쓸 수 없다',
          ],
          answer: 1,
          exp: '"the way how"는 잘못된 표현입니다. "the way he did it" 또는 "how he did it" 중 하나만 씁니다.',
        },
        {
          q: '"the city which I visited" vs "the city where I lived" — 차이는?',
          opts: [
            'which는 사물, where는 장소라서 같은 의미',
            'which 뒤는 visited의 목적어 없는 불완전절 / where 뒤는 완전절',
            'which와 where는 자유롭게 교체 가능',
            'lived가 자동사라서 where를 쓴다',
          ],
          answer: 1,
          exp: '"I visited [?]" — 목적어 없는 불완전절 → 관계대명사 which. "I lived" — 완전한 1형식 → 관계부사 where.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 4-4: 명사가 명사를 설명하다 — 동격
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L4_4',
      title: '명사가 명사를 설명하다 — 동격',
      done: false,

      vocab: [
        { word: 'the fact that',  meaning: '~라는 사실',     example: 'the fact that he lied 그가 거짓말했다는 사실' },
        { word: 'the idea that',  meaning: '~라는 생각/개념', example: 'the idea that all are equal 모두가 평등하다는 생각' },
        { word: 'namely',         meaning: '즉, 다시 말하면', example: 'one goal, namely peace 하나의 목표, 즉 평화' },
        { word: 'appositive',     meaning: '동격(어)',        example: 'Darwin, a naturalist 자연학자인 다윈' },
      ],

      steps: [
        `동격(Appositive) — 명사 옆에 명사가 붙어 같은 대상을 설명합니다.<br><br>My friend <strong>Tom</strong> studies hard.<br>→ "Tom"이 "My friend"를 설명. 같은 사람.<br><br>the city <strong>of Seoul</strong><br>→ "of Seoul"이 "the city"를 구체적으로 설명.<br><br>Einstein, <strong>a great physicist</strong>, changed our view of space.<br>→ 콤마 사이 "a great physicist"가 "Einstein"과 동격.`,

        `콤마 동격 — 수능에 가장 많이 나오는 패턴.<br><br>명사, <strong>[동격어]</strong>, 동사 ...<br><br><div class="step-sentence">Darwin, <span class="tok-mod">[the father of evolutionary theory]</span>, <mark class="v">proposed</mark> <mark class="o">natural selection</mark>.</div>→ 진화론의 아버지 다윈은 자연선택을 제안했다.<br><br>독해 Tip: 콤마 사이에 낀 명사구는 앞 명사의 설명.<br>통째로 [ ]로 묶고 뼈대에서 제거하세요.`,

        `동격 that절 — 명사 뒤에 that + 완전한 절.<br><br>the fact <strong>that he survived</strong><br>the idea <strong>that all people are equal</strong><br>the belief <strong>that hard work pays off</strong><br>the news <strong>that the war ended</strong><br><br>that절이 앞 명사의 <strong>내용</strong>을 설명합니다.<br>"~라는 [사실/생각/믿음/소식]"으로 해석.`,

        `동격 that vs 관계대명사 that — 어떻게 구분하나요?<br><br><strong>동격 that</strong> → 뒤에 <strong>완전한 절</strong><br>the fact <strong>that</strong> he survived (he survived — 완전)<br><br><strong>관계대명사 that</strong> → 뒤에 <strong>불완전한 절</strong><br>the fact <strong>that</strong> surprised me (surprised — 주어 없음, 불완전)<br><br>핵심: that 뒤 절이 완전하면 동격 that,<br>불완전하면 관계대명사 that.`,

        `동격을 이끄는 명사들 — 이 단어들 뒤에 that절이 오면 동격.<br><br>fact / idea / belief / claim / theory / evidence<br>news / report / possibility / suggestion / thought<br><br><div class="step-sentence">The <strong>evidence</strong> <span class="tok-mod">[that certain chemicals cause cancer]</span> <mark class="v">has been</mark> <mark class="c">confirmed</mark>.</div>→ 특정 화학물질이 암을 유발한다는 증거가 확인되었다.<br><br>that절 = "특정 화학물질이 암을 유발한다" (완전한 내용)<br>→ 동격 that.`,

        `지금까지 배운 명사 꾸밈 총정리.<br><br>명사를 꾸미는 방법이 네 가지입니다.<br><br>① <strong>형용사(구)</strong> — a complex system, something special<br>② <strong>분사(구)</strong> — evidence supporting the theory<br>③ <strong>관계사절</strong> — the man who runs, the day when we met<br>④ <strong>동격</strong> — Darwin, the great physicist / the fact that ...<br><br>이 네 가지를 구분해서 읽으면<br>어떤 긴 명사구도 해체할 수 있습니다.`,

        `이제 직접 확인해봅시다.<br><br>동격 표현을 찾아보세요.`,
      ],

      dissection: [
        {
          sentence: ['The claim', 'that sugar causes addiction', 'remains', 'controversial.'],
          roles:    ['subject', 'modifier', 'verb', 'complement'],
          task: 'modifier', taskLabel: '동격 that절을 탭하세요',
          hint: '"that sugar causes addiction" = 설탕이 중독을 유발한다는. 완전한 절이 "claim"의 내용을 설명합니다.',
          ok: '맞아요. "that sugar causes addiction"은 동격 that절. 뼈대: The claim remains controversial. — 2형식.',
        },
        {
          sentence: ['Marie Curie,', 'the first woman to win the Nobel Prize,', 'discovered', 'radium.'],
          roles:    ['subject', 'modifier', 'verb', 'object'],
          task: 'modifier', taskLabel: '콤마 동격(수식어)을 탭하세요',
          hint: '"the first woman to win the Nobel Prize" = 노벨상을 받은 최초의 여성. 콤마 사이에서 Marie Curie를 설명합니다.',
          ok: '맞아요. "the first woman to win the Nobel Prize"는 콤마 동격. 뼈대: Marie Curie discovered radium. — 3형식.',
        },
        {
          sentence: ['The possibility', 'that life exists on other planets', 'fascinates', 'scientists.'],
          roles:    ['subject', 'modifier', 'verb', 'object'],
          task: 'modifier', taskLabel: '동격 that절을 탭하세요',
          hint: '"that life exists on other planets" = 다른 행성에 생명체가 존재한다는. 완전한 절이 "possibility"의 내용.',
          ok: '맞아요. "that life exists on other planets"는 동격 that절. 뼈대: The possibility fascinates scientists. — 3형식.',
        },
      ],

      skeleton: [
        {
          tokens: [
            { text: 'The belief', role: 'subject' },
            { text: 'that education leads to success', role: 'modifier' },
            { text: 'drives', role: 'verb' },
            { text: 'many families', role: 'object' },
            { text: 'to invest heavily.', role: 'complement' },
          ],
          answer: ['The belief', 'drives', 'many families', 'to invest heavily.'],
          guide: '"that education leads to success" 제거 → The belief drives many families to invest heavily. — 5형식',
        },
        {
          tokens: [
            { text: 'Aristotle,', role: 'subject' },
            { text: 'one of the greatest philosophers,', role: 'modifier' },
            { text: 'believed', role: 'verb' },
            { text: 'that virtue leads to happiness.', role: 'object' },
          ],
          answer: ['Aristotle,', 'believed', 'that virtue leads to happiness.'],
          guide: '"one of the greatest philosophers" (콤마 동격) 제거 → Aristotle believed that virtue leads to happiness. — 3형식',
        },
      ],

      quiz: [
        {
          q: '"the fact that" vs "the fact which" — 차이는?',
          opts: [
            '완전히 같은 표현이다',
            '"that" 뒤는 완전절(동격), "which" 뒤는 불완전절(관계대명사)',
            '"that"은 사람, "which"는 사물 선행사',
            '"the fact which"는 항상 생략 가능',
          ],
          answer: 1,
          exp: '동격 that 뒤에는 완전한 절, 관계대명사 which 뒤에는 주어나 목적어가 빠진 불완전절이 옵니다.',
        },
        {
          q: '동격이 쓰인 문장은?',
          opts: [
            'The man who called me left a message.',
            'Darwin, the father of evolution, proposed natural selection.',
            'The day when we met was special.',
            'The book that she read was interesting.',
          ],
          answer: 1,
          exp: '"Darwin, the father of evolution" — 콤마 사이의 명사구가 Darwin을 설명하는 동격어입니다.',
        },
        {
          q: '동격 that절을 이끄는 명사가 아닌 것은?',
          opts: ['fact', 'belief', 'possibility', 'method'],
          answer: 3,
          exp: 'method(방법)는 동격 that절을 이끌지 않습니다. fact, belief, possibility는 that절로 내용을 설명합니다.',
        },
        {
          q: '"The news that shocked everyone" — that의 역할은?',
          opts: [
            '동격 that — 뒤에 완전절',
            '관계대명사 that — 뒤에 불완전절 (shocked의 주어 없음)',
            '접속사 that — 명사절',
            '지시대명사 that',
          ],
          answer: 1,
          exp: '"shocked everyone" — 주어가 없는 불완전절 → 관계대명사 that입니다. (that = which = the news shocked everyone)',
        },
        {
          q: '다음 문장의 뼈대는?\n"The suggestion that we reduce costs immediately was rejected."',
          opts: [
            'The suggestion was rejected.',
            'We reduce costs.',
            'The suggestion that was rejected.',
            'Costs were reduced.',
          ],
          answer: 0,
          exp: '"that we reduce costs immediately" = 동격 that절 (수식어). 제거하면 → The suggestion was rejected. — 1형식(수동)',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 4-5: 실전 — 명사 꾸밈 완전 정복
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L4_5',
      title: '실전 — 명사 꾸밈 완전 정복',
      done: false,

      vocab: [
        { word: 'phenomenon',  meaning: '현상',          example: 'a natural phenomenon 자연 현상' },
        { word: 'sufficient',  meaning: '충분한',         example: 'sufficient evidence 충분한 증거' },
        { word: 'fundamental', meaning: '근본적인, 핵심의', example: 'a fundamental change 근본적인 변화' },
        { word: 'hypothesis',  meaning: '가설',           example: 'test a hypothesis 가설을 검증하다' },
      ],

      steps: [
        `UNIT 4 정리 — 명사를 꾸미는 네 가지 방법.<br><br>① <strong>형용사(구)</strong> — a significant discovery / something special<br>② <strong>분사(구)</strong> — results published last year / evidence supporting ...<br>③ <strong>관계사절</strong> — the scientist who proposed / the day when we met<br>④ <strong>동격</strong> — Darwin, the great naturalist / the fact that ...<br><br>이 네 가지 중 하나 이상이 한 명사에 붙어있는 것이<br>수능 지문에서 흔히 보는 "긴 주어" 패턴입니다.`,

        `실전 예문 1 — 관계대명사 + 분사구 복합.<br><br><div class="step-sentence">Scientists <span class="tok-mod">[who study ancient DNA]</span> <span class="tok-mod">[extracted from fossils]</span> <mark class="v">have revealed</mark> <mark class="o">surprising connections</mark> <span class="tok-mod">[between modern humans and Neanderthals]</span>.</div><br>→ 화석에서 추출된 고대 DNA를 연구하는 과학자들이<br>현대 인류와 네안데르탈인 사이의 놀라운 연결고리를 밝혔다.<br><br>뼈대: Scientists have revealed connections.`,

        `실전 예문 2 — 동격 that + 관계부사 복합.<br><br><div class="step-sentence">The <strong>idea</strong> <span class="tok-mod">[that intelligence is fixed]</span> <span class="tok-mod">[at birth]</span> <mark class="v">contradicts</mark> <mark class="o">the evidence</mark> <span class="tok-mod">[where neuroplasticity is demonstrated]</span>.</div><br>→ 지능이 태어날 때부터 고정되어 있다는 생각은<br>신경 가소성이 입증된 증거와 모순된다.<br><br>뼈대: The idea contradicts the evidence.`,

        `실전 예문 3 — 수능형 긴 주어 해석 전략.<br><br><div class="step-sentence">The <strong>hypothesis</strong> <span class="tok-mod">[that environmental factors play a more significant role than genetics]</span> <span class="tok-mod">[in determining cognitive ability]</span> <mark class="v">has gained</mark> <mark class="o">support</mark> <span class="tok-mod">[among researchers]</span>.</div><br>→ 인지 능력 결정에서 환경 요인이 유전보다 더 중요한 역할을 한다는 가설이 연구자들 사이에서 지지를 얻고 있다.<br><br>뼈대: The hypothesis has gained support.`,

        `명사 꾸밈 해석 공식 — 3단계.<br><br><strong>1단계</strong> — 핵심 명사를 찾는다.<br>The <u>hypothesis</u> / The <u>idea</u> / The <u>evidence</u><br><br><strong>2단계</strong> — 뒤에 붙은 덩어리를 [ ]로 묶는다.<br>[ that절 / who절 / 분사구 / 콤마 동격 ]<br><br><strong>3단계</strong> — [ ] 전체를 "~한/~라는"으로 해석하고<br>핵심 명사에 붙인다.<br><br>이 공식으로 어떤 긴 명사구도 해체됩니다.`,

        `UNIT 1~4 독해 공식 전체 업데이트.<br><br>① 동사를 찾는다 (UNIT 1)<br>② 동사 형태 변화를 읽는다 — 시제·조동사·수동 (UNIT 2)<br>③ 준동사를 묶는다 — to부정사·분사·동명사 (UNIT 3)<br>④ 명사 덩어리를 묶는다 — 관계사·동격 (UNIT 4)<br><br>이 순서로 문장을 분석하면<br>아무리 긴 수능 문장도 뼈대가 보입니다.`,

        `이제 직접 도전해봅시다.<br><br>수식어를 모두 제거하고 뼈대를 찾으세요.`,
      ],

      dissection: [
        {
          sentence: ['The theory', 'that species evolve over time', 'proposed by Darwin', 'transformed biology.'],
          roles:    ['subject', 'modifier', 'modifier', 'verb+object'],
          task: 'modifier', taskLabel: '첫 번째 수식어(동격 that절)를 탭하세요',
          hint: '"that species evolve over time" = 종이 시간에 따라 진화한다는. 동격 that절이 "theory"를 설명합니다.',
          ok: '맞아요. "that species evolve over time"은 동격 that절. 뼈대에서 제거 대상.',
        },
        {
          sentence: ['Researchers', 'who study sleep patterns', 'have found', 'a link between rest and memory.'],
          roles:    ['subject', 'modifier', 'verb', 'object'],
          task: 'modifier', taskLabel: '관계대명사절(수식어)을 탭하세요',
          hint: '"who study sleep patterns" = 수면 패턴을 연구하는. who절이 "Researchers"를 꾸밉니다.',
          ok: '맞아요. "who study sleep patterns"는 관계대명사절. 뼈대: Researchers have found a link. — 3형식.',
        },
        {
          sentence: ['Newton,', 'one of history\'s greatest scientists,', 'discovered', 'gravity.'],
          roles:    ['subject', 'modifier', 'verb', 'object'],
          task: 'modifier', taskLabel: '콤마 동격(수식어)을 탭하세요',
          hint: '"one of history\'s greatest scientists" = 역사상 가장 위대한 과학자 중 한 명. 콤마 사이 동격어.',
          ok: '맞아요. 콤마 동격 제거 → Newton discovered gravity. — 3형식.',
        },
        {
          sentence: ['The environment', 'where organisms adapt', 'shapes', 'their evolutionary path.'],
          roles:    ['subject', 'modifier', 'verb', 'object'],
          task: 'modifier', taskLabel: '관계부사절을 탭하세요',
          hint: '"where organisms adapt" = 생물이 적응하는. where절이 "The environment"를 꾸밉니다.',
          ok: '맞아요. "where organisms adapt"는 관계부사절. 뼈대: The environment shapes their evolutionary path. — 3형식.',
        },
      ],

      skeleton: [
        {
          tokens: [
            { text: 'The evidence', role: 'subject' },
            { text: 'that regular exercise improves mental health,', role: 'modifier' },
            { text: 'compiled by researchers', role: 'modifier' },
            { text: 'worldwide,', role: 'modifier' },
            { text: 'has convinced', role: 'verb' },
            { text: 'many governments', role: 'object' },
            { text: 'to promote physical activity.', role: 'complement' },
          ],
          answer: ['The evidence', 'has convinced', 'many governments', 'to promote physical activity.'],
          guide: '동격 that절 + 분사구 + 수식어 제거 → The evidence has convinced many governments to promote physical activity. — 5형식',
        },
        {
          tokens: [
            { text: 'The idea', role: 'subject' },
            { text: 'that humans are inherently cooperative', role: 'modifier' },
            { text: 'challenges', role: 'verb' },
            { text: 'the assumption', role: 'object' },
            { text: 'that competition drives progress.', role: 'modifier' },
          ],
          answer: ['The idea', 'challenges', 'the assumption'],
          guide: '두 동격 that절 모두 제거 → The idea challenges the assumption. — 3형식',
        },
      ],

      quiz: [
        {
          q: '다음 중 동격이 아닌 것은?',
          opts: [
            'Darwin, the father of evolution, ...',
            'the fact that he survived',
            'the man that shocked everyone',
            'the city of Seoul',
          ],
          answer: 2,
          exp: '"the man that shocked everyone" — that 뒤에 주어가 없는 불완전절 → 관계대명사 that. 나머지는 모두 동격입니다.',
        },
        {
          q: '명사를 꾸미는 방법이 아닌 것은?',
          opts: ['형용사구', '분사구', '관계사절', '접속부사'],
          answer: 3,
          exp: '접속부사(however, therefore 등)는 문장과 문장을 연결하는 말로, 명사를 꾸미지 않습니다.',
        },
        {
          q: '수능형 긴 주어 해석 전략 순서로 옳은 것은?',
          opts: [
            '핵심 명사 찾기 → 뒤 덩어리 [ ]로 묶기 → "~한/~라는"으로 해석',
            '동사부터 찾기 → 주어로 돌아오기 → 수식어 해석',
            '접속사 찾기 → 절 나누기 → 핵심 명사 찾기',
            '[ ]로 묶기 → 핵심 명사 찾기 → 동사 연결',
          ],
          answer: 0,
          exp: '①핵심 명사 확인 → ②뒤에 붙은 덩어리 [ ] → ③ "~한/~라는"으로 해석 후 핵심 명사에 붙이기.',
        },
        {
          q: '"The hypothesis [that environmental factors matter] has gained support." — 뼈대는?',
          opts: [
            'The hypothesis has gained support.',
            'Environmental factors matter.',
            'The hypothesis that has gained support.',
            'Factors gained support.',
          ],
          answer: 0,
          exp: '동격 that절 제거 → The hypothesis has gained support. — 3형식.',
        },
        {
          q: 'UNIT 1~4 독해 순서로 올바른 것은?',
          opts: [
            '명사 덩어리 → 동사 → 준동사 → 시제',
            '동사 찾기 → 동사 형태 읽기 → 준동사 묶기 → 명사 덩어리 묶기',
            '접속사 → 관계사 → 동사 → 주어',
            '형용사 → 부사 → 동사 → 주어',
          ],
          answer: 1,
          exp: '① 동사 찾기(UNIT1) → ② 시제·조동사·수동 읽기(UNIT2) → ③ 준동사 묶기(UNIT3) → ④ 명사 덩어리 묶기(UNIT4)',
        },
      ],
    },

  ], // lessons end
};
