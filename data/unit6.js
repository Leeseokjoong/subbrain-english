// ── UNIT 6: 비교·강조·특수구문 ───────────────────────────────────────────
const UNIT6 = {
  id: 'unit6',
  title: '비교·강조·특수구문',
  subtitle: '도치·강조·비교 — 영어의 마지막 장치들',
  lessons: [

    // ══════════════════════════════════════════════════════════════
    // 레슨 6-1: 더하고 빼고 가장 — 비교구문
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L6_1',
      title: '더하고 빼고 가장 — 비교구문',
      done: false,

      vocab: [
        { word: 'as ~ as',          meaning: '~만큼 ~한 (원급 비교)',    example: 'as tall as me 나만큼 키가 큰' },
        { word: 'more ~ than',      meaning: '~보다 더 ~한 (비교급)',     example: 'more effective than before 전보다 더 효과적인' },
        { word: 'the most ~',       meaning: '가장 ~한 (최상급)',         example: 'the most important factor 가장 중요한 요소' },
        { word: 'the 비교급, the 비교급', meaning: '~할수록 더 ~하다',   example: 'The more you read, the smarter you get.' },
        { word: 'far / much / even', meaning: '훨씬 (비교급 강조)',       example: 'far more complex 훨씬 더 복잡한' },
      ],

      steps: [
        `비교구문 — 영어에서 비교는 세 단계입니다.<br><br><strong>원급</strong>: 같음 — as + 형용사 + as<br>"She is <strong>as tall as</strong> her brother."<br>그녀는 오빠만큼 키가 크다.<br><br><strong>비교급</strong>: 차이 — 형용사 + -er / more + 형용사 + than<br>"This method is <strong>more effective than</strong> the old one."<br>이 방법이 예전 것보다 더 효과적이다.<br><br><strong>최상급</strong>: 극한 — the + 형용사 + -est / the most + 형용사<br>"This is <strong>the most complex</strong> problem we've faced."<br>이것이 우리가 직면한 가장 복잡한 문제다.<span class="step-en">Comparison — English comparison has three levels.<br><br><strong>Positive degree</strong>: equality — as + adjective + as<br><br><strong>Comparative degree</strong>: difference — adjective + -er / more + adjective + than<br><br><strong>Superlative degree</strong>: the extreme — the + adjective + -est / the most + adjective</span>`,

        `원급 비교 — as ~ as 패턴.<br><br>긍정: as + 형용사/부사 + as<br>The new policy is <strong>as effective as</strong> the previous one.<br><br>부정: not as[so] + 형용사 + as<br>The result was <strong>not as dramatic as</strong> expected.<br>→ 예상만큼 극적이지 않았다.<br><br>배수 표현:<br>twice as ~ as = ~의 두 배<br>three times as ~ as = ~의 세 배<br><br>The brain uses <strong>twice as much</strong> energy <strong>as</strong> other organs.<br>뇌는 다른 장기보다 두 배나 많은 에너지를 사용한다.<span class="step-en">Positive degree comparison — the as ~ as pattern.<br><br>Affirmative: as + adjective/adverb + as<br><br>Negative: not as[so] + adjective + as<br>→ Not as dramatic as expected.<br><br>Multiplier expressions:<br>twice as ~ as = two times as much<br>three times as ~ as = three times as much</span>`,

        `비교급 강조 — "훨씬"을 나타낼 때.<br><br>비교급 앞에 강조어를 씁니다.<br><br><strong>much / far / even / still / a lot</strong> + 비교급<br><br>This approach is <strong>far more efficient</strong> than the traditional method.<br>이 접근법은 전통적인 방법보다 훨씬 더 효율적이다.<br><br>The problem turned out to be <strong>even more complex</strong> than scientists thought.<br>그 문제는 과학자들이 생각했던 것보다 훨씬 더 복잡했다.<br><br>★ very는 비교급 강조에 쓸 수 없습니다.<br>very more (✗) / much more (✓)<span class="step-en">Intensifying the comparative — expressing "much more."<br><br>Place an intensifier before the comparative.<br><br><strong>much / far / even / still / a lot</strong> + comparative<br><br>★ "very" cannot intensify a comparative.<br>very more (✗) / much more (✓)</span>`,

        `the 비교급, the 비교급 — 수능 단골 패턴.<br><br>"~할수록 더 ~하다"<br><br><strong>The more</strong> you practice, <strong>the better</strong> you become.<br>연습할수록 더 잘하게 된다.<br><br><strong>The harder</strong> the problem, <strong>the greater</strong> the satisfaction.<br>문제가 어려울수록 만족감이 더 크다.<br><br><strong>The more</strong> complex the system, <strong>the more difficult</strong> it is to maintain.<br>시스템이 복잡할수록 유지하기가 더 어렵다.<br><br>구조: The + 비교급 (+ 주어 + 동사), the + 비교급 (+ 주어 + 동사)<span class="step-en">The comparative, the comparative — a frequently tested pattern.<br><br>"The more ~, the more ~" means: the more X, the more Y.<br><br>Structure: The + comparative (+ subject + verb), the + comparative (+ subject + verb)</span>`,

        `최상급 표현과 관용구.<br><br>일반 최상급:<br>This is <strong>the most significant</strong> discovery of the century.<br><br>최상급 강조: by far (단연코)<br>This is <strong>by far the most</strong> important factor.<br>이것이 단연코 가장 중요한 요소이다.<br><br>비교급으로 최상급 표현:<br>No other planet is <strong>larger than</strong> Jupiter.<br>= Jupiter is <strong>the largest</strong> planet.<br><br>Nothing is <strong>more precious than</strong> time.<br>= Time is <strong>the most precious</strong> thing.<br><br>비교급으로 최상급을 나타낼 수 있다는 것이 포인트.<span class="step-en">Superlative expressions and idioms.<br><br>Regular superlative: the most + adjective<br><br>Intensifying the superlative: by far (by far the most)<br><br>Expressing a superlative with a comparative:<br>"No other ~ is more ~ than A" = "A is the most ~."<br><br>The key point: a comparative can express a superlative meaning.</span>`,

        `독해 전략 — 비교구문 처리법.<br><br>비교구문이 긴 문장에 끼어있을 때<br>핵심은 <strong>무엇과 무엇을 비교하는가</strong>입니다.<br><br><div class="step-sentence">The impact of culture on behavior is <strong>far greater</strong> <span class="tok-mod">[than most people assume]</span>.</div>→ 행동에 미치는 문화의 영향은 대부분의 사람들이 가정하는 것보다 훨씬 크다.<br><br>비교 대상: culture의 impact ↔ most people's assumption<br><br>than 뒤는 비교 대상 — 이것을 찾으면 문장의 핵심이 보입니다.<span class="step-en">Reading strategy — handling comparison structures.<br><br>When a comparison appears inside a long sentence,<br>the key is: <strong>what is being compared to what?</strong><br><br>What comes after "than" is the point of comparison — find it and the core of the sentence becomes clear.</span>`,

        `이제 직접 확인해봅시다.<br><br>비교 표현을 찾아보세요.<span class="step-en">Now let's check it yourself.<br><br>Find the comparison expressions.</span>`,
      ],

      dissection: [
        {
          sentence: ['The results', 'were far more surprising', 'than expected.', ''],
          roles:    ['subject', 'verb+complement', 'modifier', ''],
          task: 'modifier', taskLabel: '비교 대상(than절)을 탭하세요',
          hint: '"than expected" = 예상했던 것보다. 비교 대상을 나타냅니다.',
          ok: '맞아요. "than expected"가 비교 대상. 뼈대: The results were far more surprising. — 2형식.',
        },
        {
          sentence: ['The more data scientists collect,', 'the more accurate', 'their predictions become.', ''],
          roles:    ['modifier', 'complement', 'verb+subject', ''],
          task: 'modifier', taskLabel: '"the 비교급" 앞부분을 탭하세요',
          hint: '"The more data scientists collect" = 과학자들이 더 많은 데이터를 수집할수록. 조건 역할의 비교급 절.',
          ok: '맞아요. The 비교급 ~ the 비교급 구문. "수집할수록 예측이 더 정확해진다."',
        },
        {
          sentence: ['This discovery', 'is by far the most significant', 'in the history of medicine.', ''],
          roles:    ['subject', 'verb+complement', 'modifier', ''],
          task: 'modifier', taskLabel: '수식어(전치사구)를 탭하세요',
          hint: '"in the history of medicine" = 의학의 역사에서. 수식어입니다.',
          ok: '맞아요. "in the history of medicine"은 수식어. 뼈대: This discovery is by far the most significant. — 2형식.',
        },
      ],

      skeleton: [
        {
          tokens: [
            { text: 'The more pressure', role: 'modifier' },
            { text: 'individuals face,', role: 'modifier' },
            { text: 'the more likely', role: 'complement' },
            { text: 'they are', role: 'verb+subject' },
            { text: 'to make poor decisions.', role: 'complement' },
          ],
          answer: ['the more likely', 'they are', 'to make poor decisions.'],
          guide: 'The 비교급 ~ the 비교급 구문. 앞절(조건)을 제거 → they are more likely to make poor decisions.',
        },
        {
          tokens: [
            { text: 'Access to education', role: 'subject' },
            { text: 'in rural areas', role: 'modifier' },
            { text: 'is', role: 'verb' },
            { text: 'far less developed', role: 'complement' },
            { text: 'than in urban regions.', role: 'modifier' },
          ],
          answer: ['Access to education', 'is', 'far less developed'],
          guide: '"in rural areas"(수식어)와 "than in urban regions"(비교 대상) 제거 → Access to education is far less developed. — 2형식',
        },
      ],

      quiz: [
        {
          q: '"far more effective" — far의 역할은?',
          opts: ['형용사', '비교급 강조 부사', '전치사', '접속사'],
          answer: 1,
          exp: 'far는 비교급 앞에서 "훨씬"을 나타내는 강조 부사입니다. much/even/still도 같은 역할.',
        },
        {
          q: '"The more ~ the more ~" 구문의 의미는?',
          opts: ['A가 최상급임을 강조', '~할수록 더 ~하다', 'A와 B가 같다', '~보다 더 ~하다'],
          answer: 1,
          exp: '"The 비교급, the 비교급" = ~할수록 더 ~하다. "The more you read, the smarter you get."',
        },
        {
          q: 'very를 쓸 수 없는 경우는?',
          opts: ['very tall', 'very interesting', 'very more complex', 'very important'],
          answer: 2,
          exp: 'very는 비교급을 강조할 수 없습니다. 비교급 강조는 much/far/even/still을 씁니다.',
        },
        {
          q: '"Nothing is more precious than time." 와 같은 의미는?',
          opts: [
            'Time is not precious.',
            'Time is the most precious thing.',
            'Nothing is as precious as time.',
            'Time is more precious than nothing.',
          ],
          answer: 1,
          exp: '"No other ~ is more ~ than A" = A is the most ~. 비교급으로 최상급을 나타내는 표현.',
        },
        {
          q: '"twice as much energy as other organs" — 의미는?',
          opts: [
            '다른 장기의 절반 에너지',
            '다른 장기와 같은 에너지',
            '다른 장기의 두 배 에너지',
            '다른 장기보다 조금 더 많은 에너지',
          ],
          answer: 2,
          exp: '"twice as ~ as" = ~의 두 배. 배수 + as ~ as 구문.',
        },
        {
          q: '다음 문장에서 비교 구조를 고르세요.\n"The results were far more surprising than expected."',
          opts: ['원급 비교 (as ~ as)', '비교급 강조 (far + 비교급 + than)', '최상급 (the most ~)', 'the 비교급 the 비교급'],
          answer: 1,
          exp: '"far more surprising than expected"는 비교급(more surprising)을 far로 강조한 구문입니다. "예상했던 것보다 훨씬 더 놀라운"이라는 의미.',
        },
        {
          q: '다음 문장이 의미하는 바를 고르세요.\n"No other planet is larger than Jupiter."',
          opts: [
            'Jupiter is not the largest planet.',
            'Jupiter is larger than no planet.',
            'Jupiter is the largest planet.',
            'No planet is as large as Earth.',
          ],
          answer: 2,
          exp: '"No other ~ is 비교급 than A" = "A is the 최상급". 비교급으로 최상급을 나타내는 표현입니다.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 6-2: 특별히 강조하고 싶을 때 — 강조구문
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L6_2',
      title: '특별히 강조하고 싶을 때 — 강조구문',
      done: false,

      vocab: [
        { word: 'It is ~ that 강조', meaning: '바로 ~이다 (특정 성분 강조)', example: 'It was Tom that broke the window.' },
        { word: 'do 강조',           meaning: '정말로 ~하다 (동사 강조)',     example: 'She does care about you.' },
        { word: 'what ~ is/are',     meaning: '~한 것은 바로 ~이다',          example: 'What matters is effort.' },
        { word: 'above all',         meaning: '무엇보다도',                   example: 'Above all, stay calm.' },
      ],

      steps: [
        `강조구문 — 문장의 특정 부분을 "바로 이것!"이라고 강조하는 방법.<br><br>일반 문장: Tom broke the window yesterday.<br><br>주어 강조: <strong>It was Tom that</strong> broke the window yesterday.<br>→ 창문을 깬 건 바로 톰이었다.<br><br>목적어 강조: <strong>It was the window that</strong> Tom broke yesterday.<br>→ 톰이 깬 건 바로 창문이었다.<br><br>부사 강조: <strong>It was yesterday that</strong> Tom broke the window.<br>→ 톰이 창문을 깬 건 바로 어제였다.<span class="step-en">Emphasis structures — a way to highlight a specific part of a sentence as "This is the one!"<br><br>Emphasizing the subject: <strong>It was Tom that</strong> broke the window yesterday.<br><br>Emphasizing the object: <strong>It was the window that</strong> Tom broke yesterday.<br><br>Emphasizing the adverb: <strong>It was yesterday that</strong> Tom broke the window.</span>`,

        `It is[was] ~ that 강조구문 — 해석법.<br><br>"It is/was + 강조할 내용 + that + 나머지"<br><br><div class="step-sentence"><strong>It was the discovery of penicillin that</strong> revolutionized modern medicine.</div>→ 현대 의학을 혁신한 것은 바로 페니실린의 발견이었다.<br><br>강조구문인지 확인하는 방법:<br>It is[was] ~ that을 제거해도 문장이 완전하면 → 강조구문<br><br>The discovery of penicillin revolutionized modern medicine. ← 완전한 문장 ✓<br><br>cf. It is ~ that (동격) → 제거하면 불완전 → 강조구문 아님<span class="step-en">The It is[was] ~ that cleft sentence — how to read it.<br><br>"It is/was + emphasized element + that + remainder"<br><br>How to check if it is a cleft sentence:<br>If removing "It is[was] ~ that" leaves a complete sentence → it is a cleft sentence.<br><br>cf. It is ~ that (appositive) → removing it leaves an incomplete sentence → not a cleft sentence</span>`,

        `do/does/did 강조 — 동사를 강조할 때.<br><br>현재: do/does + 동사원형<br>과거: did + 동사원형<br><br>I <strong>do believe</strong> this approach works.<br>→ 나는 정말로 이 접근법이 효과 있다고 믿는다.<br><br>She <strong>does care</strong> about the environment.<br>→ 그녀는 정말로 환경을 신경 쓴다.<br><br>The experiment <strong>did produce</strong> unexpected results.<br>→ 실험은 정말로 예상치 못한 결과를 낳았다.<br><br>do 강조는 "의심을 반박"하거나 "사실임을 확인"할 때 씁니다.<span class="step-en">do/does/did emphasis — used to emphasize the verb.<br><br>Present: do/does + base verb<br>Past: did + base verb<br><br>The do-emphasis is used to "counter doubt" or "confirm a fact."</span>`,

        `what절 강조 — "~한 것은 바로 ~이다"<br><br><strong>What</strong> matters most <strong>is</strong> consistency.<br>→ 가장 중요한 것은 꾸준함이다.<br><br><strong>What</strong> the research reveals <strong>is</strong> that sleep affects memory.<br>→ 연구가 밝히는 것은 수면이 기억에 영향을 미친다는 것이다.<br><br>구조: What + 절 + is/are + 강조 내용<br><br>What절 전체가 주어, is 뒤가 보어.<br>수능에서 "What + 명사절 + is" 패턴이 자주 출제됩니다.<span class="step-en">What-clause emphasis — "What ~ is ~"<br><br>Structure: What + clause + is/are + emphasized content<br><br>The entire What-clause functions as the subject; what follows "is" is the complement.<br>The "What + noun clause + is" pattern is frequently tested.</span>`,

        `강조를 나타내는 다양한 표현.<br><br><strong>부사 강조</strong>:<br>It is <strong>precisely</strong> this reason that matters.<br>바로 이 이유가 중요하다.<br><br><strong>부정 강조</strong>:<br>Under <strong>no circumstances</strong> should you give up.<br>어떤 상황에서도 포기해서는 안 된다.<br><br><strong>재귀대명사 강조</strong>:<br>The president <strong>himself</strong> attended the ceremony.<br>대통령이 직접 행사에 참석했다.<br><br><strong>very 강조</strong> (명사 수식):<br>This is the <strong>very</strong> book I needed.<br>이것이 바로 내가 필요했던 책이다.<span class="step-en">Various expressions of emphasis.<br><br><strong>Adverb emphasis</strong>: precisely, exactly — pinpoints the emphasized element.<br><br><strong>Negative emphasis</strong>: Under no circumstances — triggers inversion.<br><br><strong>Reflexive pronoun emphasis</strong>: himself/herself — means "in person" or "personally."<br><br><strong>"very" emphasis</strong> (modifying a noun): the very book — means "exactly that."</span>`,

        `강조구문 vs 가주어 구문 — 혼동 주의!<br><br><strong>강조구문</strong>: It was <u>Tom</u> that broke the window.<br>→ It was ~ that 제거 → "Tom broke the window" 완전한 문장 ✓<br><br><strong>가주어 구문</strong>: It is <u>important</u> that we act now.<br>→ It is ~ that 제거 → "important we act now" 불완전 ✗<br>→ 진짜 주어: that we act now<br><br>핵심 구분:<br>It is[was] + <strong>명사/부사</strong> + that → 강조구문<br>It is[was] + <strong>형용사</strong> + that → 가주어 구문<span class="step-en">Cleft sentence vs. dummy-subject sentence — watch out for confusion!<br><br><strong>Cleft sentence</strong>: It was ~ that → removing it leaves a complete sentence ✓<br><br><strong>Dummy-subject sentence</strong>: It is ~ that → removing it leaves an incomplete sentence ✗<br><br>Key distinction:<br>It is[was] + <strong>noun/adverb</strong> + that → cleft sentence<br>It is[was] + <strong>adjective</strong> + that → dummy-subject sentence</span>`,

        `이제 직접 확인해봅시다.<br><br>강조구문을 찾아보세요.<span class="step-en">Now let's check it yourself.<br><br>Find the emphasis structures.</span>`,
      ],

      dissection: [
        {
          sentence: ['It was', 'the lack of funding', 'that halted the research.', ''],
          roles:    ['emphasis-start', 'emphasized', 'emphasis-end', ''],
          task: 'modifier', taskLabel: '강조된 내용을 탭하세요',
          hint: '"the lack of funding" = 자금 부족. It was ~ that 강조구문에서 강조된 주어.',
          ok: '맞아요. "the lack of funding"이 강조. 원래 문장: The lack of funding halted the research.',
        },
        {
          sentence: ['Scientists', 'do acknowledge', 'the limitations of the study.', ''],
          roles:    ['subject', 'emphasis-verb', 'object', ''],
          task: 'verb', taskLabel: '강조 조동사(do)를 탭하세요',
          hint: '"do acknowledge" = 정말로 인정한다. do가 동사를 강조합니다.',
          ok: '맞아요. do + acknowledge = 동사 강조. "과학자들은 정말로 연구의 한계를 인정한다."',
        },
        {
          sentence: ['What', 'distinguishes great leaders', 'is', 'their ability to listen.'],
          roles:    ['what-clause', 'what-clause-verb', 'verb', 'complement'],
          task: 'complement', taskLabel: '강조된 내용(보어)을 탭하세요',
          hint: '"their ability to listen" = 경청 능력. What절이 주어, is 뒤가 강조되는 내용.',
          ok: '맞아요. What ~ is 강조 구문. "위대한 리더를 구별하는 것은 바로 경청 능력이다."',
        },
      ],

      skeleton: [
        {
          tokens: [
            { text: 'It was', role: 'emphasis' },
            { text: 'the introduction of writing', role: 'emphasized' },
            { text: 'that', role: 'emphasis' },
            { text: 'transformed human civilization', role: 'verb+object' },
            { text: 'most profoundly.', role: 'modifier' },
          ],
          answer: ['the introduction of writing', 'transformed human civilization'],
          guide: 'It was ~ that 강조구문 제거 → The introduction of writing transformed human civilization (most profoundly). — 3형식',
        },
        {
          tokens: [
            { text: 'What', role: 'subject' },
            { text: 'the data consistently shows', role: 'subject-clause' },
            { text: 'is', role: 'verb' },
            { text: 'that habits', role: 'complement' },
            { text: 'outweigh willpower.', role: 'complement' },
          ],
          answer: ['What the data consistently shows', 'is', 'that habits outweigh willpower.'],
          guide: 'What절 강조 구문: What ~ is ~ 형태. 뼈대 전체가 이 구문. — 2형식',
        },
      ],

      quiz: [
        {
          q: '"It was in Paris that they first met." — 강조된 것은?',
          opts: ['they', 'first met', 'in Paris (장소)', '만난 사실'],
          answer: 2,
          exp: 'It was ~ that 강조구문. "in Paris"(장소 부사구)가 강조되었습니다. "그들이 처음 만난 건 바로 파리에서였다."',
        },
        {
          q: '강조구문 확인법은?',
          opts: [
            'It is 뒤에 형용사가 오면 강조구문',
            'It is[was] ~ that 제거 후 완전한 문장이 되면 강조구문',
            'that 뒤에 완전한 절이 오면 강조구문',
            'It이 주어이면 항상 강조구문',
          ],
          answer: 1,
          exp: 'It is[was] ~ that을 제거했을 때 완전한 문장이 되면 강조구문, 불완전하면 가주어 구문입니다.',
        },
        {
          q: '"She does care about the result." — does의 역할은?',
          opts: ['의문문 조동사', '동사 강조', '부정문 조동사', '대동사'],
          answer: 1,
          exp: 'do/does/did + 동사원형 = 동사 강조. "그녀는 정말로 결과를 신경 쓴다."',
        },
        {
          q: '"What matters is consistency." — 문장 구조는?',
          opts: [
            'What = 목적어, matters = 동사, is = 접속사',
            'What matters = 주어(명사절), is = 동사, consistency = 보어',
            'What = 관계대명사, matters = 동사, is = 보어',
            'What matters is = 관용구',
          ],
          answer: 1,
          exp: '"What matters" = what절(명사절) 전체가 주어. is = 동사. consistency = 보어. — 2형식.',
        },
        {
          q: '"It is essential that we act." vs "It was her mistake that caused this." — 차이는?',
          opts: [
            '둘 다 강조구문',
            '앞은 가주어(형용사+that절), 뒤는 강조구문(명사+that절)',
            '앞은 강조구문, 뒤는 가주어',
            '둘 다 가주어 구문',
          ],
          answer: 1,
          exp: '"It is essential that" → essential(형용사) + that절 → 가주어 구문. "It was her mistake that" → her mistake(명사) + that → 강조구문.',
        },
        {
          q: '다음 문장의 구조를 고르세요.\n"It was the lack of funding that halted the research."',
          opts: ['가주어-진주어 구문', 'do 강조 구문', 'It is ~ that 강조구문', 'What절 강조 구문'],
          answer: 2,
          exp: '"It was ~ that"을 제거하면 "The lack of funding halted the research."로 완전한 문장이 됩니다. 따라서 It is ~ that 강조구문이며, "the lack of funding(자금 부족)"이 강조되었습니다.',
        },
        {
          q: '다음 문장에서 강조된 것을 고르세요.\n"What distinguishes great leaders is their ability to listen."',
          opts: [
            'great leaders',
            'what distinguishes',
            'their ability to listen',
            'distinguishes',
          ],
          answer: 2,
          exp: '"What ~ is" 강조 구문에서 is 뒤의 보어가 강조됩니다. "위대한 리더를 구별하는 것은 바로 경청 능력이다"에서 강조된 것은 "their ability to listen"입니다.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 6-3: 순서를 뒤집다 — 도치
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L6_3',
      title: '순서를 뒤집다 — 도치',
      done: false,

      vocab: [
        { word: 'Never / Rarely',   meaning: '결코/좀처럼 ~않다 (도치)',  example: 'Never have I seen such beauty.' },
        { word: 'Had I known',      meaning: '알았더라면 (조건절 도치)',   example: 'Had I known, I would have helped.' },
        { word: 'So do I',          meaning: '나도 그렇다 (동의 도치)',    example: 'She runs. So do I.' },
        { word: 'Not only ~ but',   meaning: '~뿐만 아니라 (도치 동반)',   example: 'Not only did he win, but he set a record.' },
      ],

      steps: [
        `도치(Inversion) — 주어와 동사의 위치가 바뀌는 현상.<br><br>영어의 기본 어순: 주어 + 동사<br>도치된 어순: 동사[조동사] + 주어<br><br>왜 도치를 할까요?<br>① 강조 — 특정 의미를 부각<br>② 부정어가 앞에 올 때 (문법적 규칙)<br>③ 조건절 if 생략 (격식 문어체)<br><br>도치는 수능 독해·문법 문제에서 단골로 등장합니다.<span class="step-en">Inversion — a phenomenon where the positions of the subject and verb are swapped.<br><br>Normal word order: subject + verb<br>Inverted word order: verb[auxiliary] + subject<br><br>Why use inversion?<br>① Emphasis — to highlight a particular meaning<br>② When a negative word comes first (a grammatical rule)<br>③ Omitting "if" in a conditional clause (formal written style)<br><br>Inversion appears regularly in reading and grammar questions.</span>`,

        `<strong>부정어 도치</strong> — 가장 중요한 패턴.<br><br>부정의 의미를 가진 부사(구)가 문장 앞에 오면<br>주어와 조동사가 도치됩니다.<br><br>Never / Rarely / Seldom / Hardly / Scarcely / Little<br>Not until / Not only / Under no circumstances / At no time<br><br><strong>Never</strong> <strong>have I</strong> seen such determination.<br>= I have never seen such determination.<br>→ 나는 이런 결단력을 본 적이 없다.<br><br><strong>Rarely does</strong> such an opportunity arise.<br>= Such an opportunity rarely arises.<br>→ 이런 기회는 좀처럼 생기지 않는다.<span class="step-en"><strong>Negative inversion</strong> — the most important pattern.<br><br>When an adverb (phrase) with a negative meaning comes at the start of a sentence,<br>the subject and auxiliary verb are inverted.<br><br>Never / Rarely / Seldom / Hardly / Scarcely / Little<br>Not until / Not only / Under no circumstances / At no time</span>`,

        `부정어 도치 — 더 많은 예.<br><br><div class="step-sentence"><strong>Not until</strong> the results were published <strong>did</strong> scientists accept the theory.</div>→ 결과가 발표되고 나서야 비로소 과학자들이 이론을 받아들였다.<br><br><div class="step-sentence"><strong>Little</strong> <strong>did</strong> they know that the discovery would change everything.</div>→ 그 발견이 모든 것을 바꿀 줄은 그들도 거의 몰랐다.<br><br><div class="step-sentence"><strong>Under no circumstances</strong> <strong>should</strong> you ignore these warning signs.</div>→ 어떤 상황에서도 이 경고 신호들을 무시해서는 안 된다.<br><br>공식: 부정어 + 조동사/be동사 + 주어 + 본동사<span class="step-en">Negative inversion — more examples.<br><br>Formula: negative word + auxiliary/be verb + subject + main verb</span>`,

        `<strong>조건절 도치</strong> — if를 생략하고 도치.<br><br>격식 문어체에서 if를 생략하면 동사가 앞으로 옵니다.<br><br>If I had known → <strong>Had I known</strong><br>If he were here → <strong>Were he here</strong><br>If you should need help → <strong>Should you need help</strong><br><br><div class="step-sentence"><strong>Had</strong> the researchers <strong>considered</strong> all variables, the results might have differed.</div>→ 연구자들이 모든 변수를 고려했더라면, 결과가 달라졌을지 모른다.<br><br><div class="step-sentence"><strong>Were</strong> the data more reliable, the conclusions would carry more weight.</div>→ 데이터가 더 신뢰할 만하다면, 결론이 더 설득력을 지닐 것이다.<span class="step-en"><strong>Conditional inversion</strong> — omitting "if" and inverting.<br><br>In formal written style, when "if" is omitted, the verb moves to the front.<br><br>If I had known → <strong>Had I known</strong><br>If he were here → <strong>Were he here</strong><br>If you should need help → <strong>Should you need help</strong></span>`,

        `<strong>so / neither / nor 도치</strong> — 동의 표현.<br><br>"나도 그렇다 / 나도 아니다"<br><br>긍정 동의: So + 조동사 + 주어<br>She works hard. <strong>So does he.</strong><br>→ 그녀는 열심히 일한다. 그도 그렇다.<br><br>부정 동의: Neither[Nor] + 조동사 + 주어<br>She didn't come. <strong>Neither did he.</strong><br>→ 그녀는 오지 않았다. 그도 마찬가지였다.<br><br>주의: so 뒤 도치 vs 주어 + so<br>So does he (✓) vs He does so (✓) — 의미 같지만 구조 다름<span class="step-en"><strong>so / neither / nor inversion</strong> — agreement expressions.<br><br>"Me too / Me neither"<br><br>Positive agreement: So + auxiliary + subject<br><br>Negative agreement: Neither[Nor] + auxiliary + subject<br><br>Note: inversion after "so" vs. subject + "so" — same meaning but different structure</span>`,

        `도치 독해 전략.<br><br>도치된 문장을 보면 당황하지 말고<br>주어와 동사를 원래 자리로 돌려놓으세요.<br><br><div class="step-sentence"><strong>Not only did</strong> the experiment <strong>fail</strong>, but it also raised new questions.</div>→ 실험은 실패했을 뿐만 아니라 새로운 의문들도 제기했다.<br><br>원래 어순으로: The experiment not only failed, but it also raised new questions.<br><br>도치 = 강조를 위한 장치.<br>의미는 같으나 앞의 부정어에 강세가 있다는 신호입니다.<span class="step-en">Reading strategy for inversion.<br><br>When you encounter an inverted sentence, don't panic —<br>simply restore the subject and verb to their original positions.<br><br>Inversion = a device for emphasis.<br>The meaning is the same, but it signals that the negative word at the front is stressed.</span>`,

        `이제 직접 확인해봅시다.<br><br>도치된 문장을 원래 어순으로 파악해보세요.<span class="step-en">Now let's check it yourself.<br><br>Try to restore the inverted sentences to their original word order.</span>`,
      ],

      dissection: [
        {
          sentence: ['Never', 'had scientists observed', 'such a rapid change', 'in the ecosystem.'],
          roles:    ['inversion-adv', 'verb+subject', 'object', 'modifier'],
          task: 'modifier', taskLabel: '도치된 문장의 목적어를 탭하세요',
          hint: '"such a rapid change" = 그렇게 빠른 변화. 원래 어순: Scientists had never observed such a rapid change.',
          ok: '맞아요. 원래: Scientists had never observed such a rapid change in the ecosystem. — 3형식 도치.',
        },
        {
          sentence: ['Had the policy been implemented earlier,', 'the crisis', 'might have been avoided.', ''],
          roles:    ['if-inversion', 'subject', 'verb', ''],
          task: 'modifier', taskLabel: '조건절 도치를 탭하세요',
          hint: '"Had the policy been implemented earlier" = 정책이 더 일찍 시행되었더라면. if를 생략한 도치 조건절.',
          ok: '맞아요. "Had ~ earlier" = "If the policy had been implemented earlier". 조건절 도치.',
        },
      ],

      skeleton: [
        {
          tokens: [
            { text: 'Not until the 20th century', role: 'inversion-adv' },
            { text: 'did scientists', role: 'verb+subject' },
            { text: 'fully understand', role: 'verb' },
            { text: 'the structure of DNA.', role: 'object' },
          ],
          answer: ['scientists', 'fully understand', 'the structure of DNA.'],
          guide: '부정어 도치 복원: Scientists did not fully understand the structure of DNA until the 20th century. — 3형식',
        },
      ],

      quiz: [
        {
          q: '"Rarely does such an opportunity arise." — 원래 어순은?',
          opts: [
            'Such an opportunity does rarely arise.',
            'Such an opportunity rarely arises.',
            'Rarely such an opportunity arises.',
            'Does such an opportunity rarely arise.',
          ],
          answer: 1,
          exp: '부정어 도치 복원: Such an opportunity rarely arises. Rarely가 문장 앞에 오면서 도치 발생.',
        },
        {
          q: '"Had I known the answer, I would have told you." — 원래 문장은?',
          opts: [
            'I had known the answer, I would have told you.',
            'If I had known the answer, I would have told you.',
            'I known the answer, I would have told you.',
            'Should I know the answer, I would have told you.',
          ],
          answer: 1,
          exp: '"Had I known" = "If I had known". if를 생략하면 had가 앞으로 나오는 조건절 도치.',
        },
        {
          q: '"So does he." — 의미는?',
          opts: [
            '그는 그렇게 한다',
            '그도 마찬가지다 (긍정 동의)',
            '그는 그렇지 않다',
            '그도 아니다',
          ],
          answer: 1,
          exp: '"So + 조동사 + 주어" = ~도 그렇다. 앞 문장의 긍정 내용에 동의하는 도치 표현.',
        },
        {
          q: '부정어 도치가 일어나는 조건은?',
          opts: [
            '부정어가 문장 어디에 오든 도치 발생',
            '부정어가 문장 앞에 올 때 조동사+주어 도치',
            '부정어가 동사 뒤에 올 때 도치',
            '부정어는 항상 도치를 일으킨다',
          ],
          answer: 1,
          exp: 'Never/Rarely/Hardly 등 부정어가 문장 맨 앞에 올 때 조동사[be동사]+주어의 도치가 일어납니다.',
        },
        {
          q: '다음 문장의 구조를 고르세요.\n"Never have I seen such a beautiful sunset."',
          opts: ['비교구문', '강조구문', '부정어 도치', '병렬구조'],
          answer: 2,
          exp: '"Never"가 문두에 오면서 조동사(have)와 주어(I)가 도치되었습니다. 원래 어순: I have never seen such a beautiful sunset.',
        },
        {
          q: '다음 문장을 원래 어순으로 바르게 복원한 것을 고르세요.\n"Were the data more reliable, the conclusions would carry more weight."',
          opts: [
            'The data were more reliable, the conclusions would carry more weight.',
            'If the data were more reliable, the conclusions would carry more weight.',
            'The data is more reliable than the conclusions.',
            'Although the data is reliable, the conclusions carry more weight.',
          ],
          answer: 1,
          exp: '"Were + 주어 + 형용사" = "If + 주어 + were + 형용사". if를 생략한 조건절 도치 구문으로, 가정법 과거입니다.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 6-4: 형태를 맞춰라 — 병렬구조
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L6_4',
      title: '형태를 맞춰라 — 병렬구조',
      done: false,

      vocab: [
        { word: '병렬구조',      meaning: '접속사 앞뒤 문법 형태 일치',    example: 'to read and to write (✓) / to read and writing (✗)' },
        { word: 'not A but B',   meaning: 'A가 아니라 B',                  example: 'not speed but accuracy 속도가 아니라 정확성' },
        { word: 'both A and B',  meaning: 'A와 B 모두',                    example: 'both efficient and affordable' },
        { word: 'A rather than B', meaning: 'B보다는 A',                  example: 'quality rather than quantity 양보다 질' },
      ],

      steps: [
        `병렬구조(Parallelism) — 접속사로 연결되는 것들은<br>문법적으로 <strong>같은 형태</strong>여야 합니다.<br><br>명사 and 명사 ✓<br>to부정사 and to부정사 ✓<br>-ing and -ing ✓<br>절 and 절 ✓<br><br>to부정사 and -ing ✗<br>명사 and 절 ✗<br><br>The key is <strong>not winning but learning</strong>. (✓)<br>The key is <strong>not to win but learning</strong>. (✗)<span class="step-en">Parallelism — elements connected by a conjunction must be<br>grammatically <strong>the same form</strong>.<br><br>noun and noun ✓<br>to-infinitive and to-infinitive ✓<br>-ing and -ing ✓<br>clause and clause ✓<br><br>to-infinitive and -ing ✗<br>noun and clause ✗</span>`,

        `병렬구조 — 다양한 형태.<br><br><strong>단어 병렬</strong>:<br>The research was thorough, accurate, and <strong>comprehensive</strong>.<br>(형용사 + 형용사 + 형용사)<br><br><strong>구 병렬</strong>:<br>She decided <strong>to quit her job</strong> and <strong>to travel the world</strong>.<br>(to부정사 + to부정사)<br><br><strong>절 병렬</strong>:<br>The study shows <strong>that exercise improves mood</strong><br>and <strong>that it enhances cognitive function</strong>.<br>(that절 + that절)<span class="step-en">Parallelism — various forms.<br><br><strong>Word parallelism</strong>: adjective + adjective + adjective<br><br><strong>Phrase parallelism</strong>: to-infinitive + to-infinitive<br><br><strong>Clause parallelism</strong>: that-clause + that-clause</span>`,

        `상관접속사 병렬 — 형태 일치가 더 중요.<br><br><strong>both A and B</strong><br>The approach is both <strong>effective</strong> and <strong>affordable</strong>. (형용사 병렬 ✓)<br><br><strong>not only A but also B</strong><br>Not only <strong>did she win</strong> but she also <strong>set a new record</strong>. (절 병렬 ✓)<br><br><strong>either A or B</strong><br>You can either <strong>stay</strong> or <strong>leave</strong>. (동사원형 병렬 ✓)<br><br><strong>neither A nor B</strong><br>The result was neither <strong>surprising</strong> nor <strong>disappointing</strong>. (형용사 병렬 ✓)<span class="step-en">Correlative conjunction parallelism — matching form is even more critical.<br><br><strong>both A and B</strong>: adjective parallel ✓<br><br><strong>not only A but also B</strong>: clause parallel ✓<br><br><strong>either A or B</strong>: base verb parallel ✓<br><br><strong>neither A nor B</strong>: adjective parallel ✓</span>`,

        `비교구문에서의 병렬.<br><br>비교 대상도 같은 형태여야 합니다.<br><br><strong>올바른 비교</strong>:<br>The brain of a child is more flexible <strong>than that of an adult</strong>.<br>(brain ↔ brain — that = the brain)<br><br><strong>틀린 비교</strong>:<br>The brain of a child is more flexible than <strong>an adult</strong>. (brain ↔ adult)<br><br>like vs as 비교:<br><strong>Like</strong> water, time flows without stopping. (명사 비교)<br><strong>As</strong> water flows, so does time. (절 비교)<span class="step-en">Parallelism in comparative structures.<br><br>The items being compared must also be the same form.<br><br><strong>Correct</strong>: brain ↔ brain (that = the brain)<br><br><strong>Incorrect</strong>: brain ↔ adult (different categories)<br><br>like vs as:<br><strong>Like</strong> + noun (comparing nouns)<br><strong>As</strong> + clause (comparing clauses)</span>`,

        `수능에 자주 나오는 병렬구조 오류 패턴.<br><br>① to부정사 병렬 — to 생략 가능:<br>She wants <strong>to learn, grow</strong>, and <strong>succeed</strong>.<br>(to learn, to grow, to succeed — 앞의 to가 뒤에 적용)<br><br>② 수동태 병렬:<br>The data was <strong>collected</strong>, <strong>analyzed</strong>, and <strong>published</strong>.<br>(p.p. + p.p. + p.p.)<br><br>③ 접속사 앞 형태 확인:<br>The study aims to identify causes and <strong>suggesting</strong> solutions. (✗)<br>The study aims to identify causes and <strong>suggest</strong> solutions. (✓)<span class="step-en">Common parallelism error patterns in exams.<br><br>① to-infinitive parallel — "to" can be omitted after the first:<br>(to learn, to grow, to succeed — the first "to" applies to all)<br><br>② Passive voice parallel: p.p. + p.p. + p.p.<br><br>③ Check the form before the conjunction:<br>suggesting (✗) → suggest (✓) to match "to identify"</span>`,

        `독해에서 병렬구조 활용법.<br><br>병렬구조를 알면 긴 문장에서<br>어디까지가 하나의 단위인지 파악됩니다.<br><br><div class="step-sentence">The experiment was designed <span class="tok-mod">[to test the hypothesis]</span>, <span class="tok-mod">[to gather reliable data]</span>, and <span class="tok-mod">[to challenge existing theories]</span>.</div>→ to부정사 세 개가 and로 병렬.<br>모두 "designed"의 목적(부사적 to부정사).<br><br>병렬 단위를 묶으면 문장 구조가 한눈에 보입니다.<span class="step-en">Using parallelism in reading comprehension.<br><br>Knowing parallelism lets you identify where one unit ends in a long sentence.<br><br>Three to-infinitives connected by "and" — all serving as adverbial to-infinitives of purpose for "designed."<br><br>Group the parallel units and the sentence structure becomes clear at a glance.</span>`,

        `이제 직접 확인해봅시다.<br><br>병렬구조를 확인해보세요.<span class="step-en">Now let's check it yourself.<br><br>Verify the parallel structures.</span>`,
      ],

      dissection: [
        {
          sentence: ['The policy aims', 'to reduce costs,', 'improve efficiency,', 'and increase access.'],
          roles:    ['subject+verb', 'parallel1', 'parallel2', 'parallel3'],
          task: 'parallel1', taskLabel: '첫 번째 병렬 to부정사를 탭하세요',
          hint: '"to reduce costs" — to부정사 세 개(to reduce / improve / increase)가 and로 병렬.',
          ok: '맞아요. to reduce / improve / increase — 세 동사원형이 병렬. (to가 첫 번째에만 명시)',
        },
        {
          sentence: ['Success depends', 'not on talent', 'but on perseverance.', ''],
          roles:    ['subject+verb', 'not-part', 'but-part', ''],
          task: 'but-part', taskLabel: '"but" 뒤 병렬 부분을 탭하세요',
          hint: '"but on perseverance" — not A but B. "재능이 아니라 끈기에" — 전치사구 병렬.',
          ok: '맞아요. not on talent but on perseverance — 전치사구 병렬. 핵심은 "perseverance(끈기)".',
        },
      ],

      skeleton: [
        {
          tokens: [
            { text: 'The scientist\'s goal was', role: 'subject+verb+complement-start' },
            { text: 'to discover,', role: 'parallel1' },
            { text: 'to document,', role: 'parallel2' },
            { text: 'and to share', role: 'parallel3' },
            { text: 'new knowledge.', role: 'object' },
          ],
          answer: ['The scientist\'s goal was', 'to discover,', 'to document,', 'and to share', 'new knowledge.'],
          guide: 'to부정사 세 개 병렬 — to discover / to document / to share new knowledge. — 2형식',
        },
      ],

      quiz: [
        {
          q: '병렬구조가 올바른 문장은?',
          opts: [
            'She likes to read and writing.',
            'She likes reading and to write.',
            'She likes to read and to write.',
            'She likes read and writing.',
          ],
          answer: 2,
          exp: '"to read and to write" — to부정사 + to부정사로 형태가 일치합니다.',
        },
        {
          q: '"not only A but also B" — 병렬이 올바른 것은?',
          opts: [
            'not only fast but also reliably',
            'not only fast but also reliable',
            'not only fastly but also reliable',
            'not only fast but also to be reliable',
          ],
          answer: 1,
          exp: '"not only fast but also reliable" — 형용사 + 형용사로 형태 일치.',
        },
        {
          q: '"The brain of a child vs the brain of an adult" 비교에서 올바른 표현은?',
          opts: [
            'The brain of a child is more flexible than an adult.',
            'The brain of a child is more flexible than that of an adult.',
            'The brain of a child is more flexible than adults.',
            'The brain of a child is as flexible than that of an adult.',
          ],
          answer: 1,
          exp: '"that of an adult" — that = the brain. brain과 brain을 비교해야 병렬이 맞습니다.',
        },
        {
          q: '"The study aims to identify causes and suggesting solutions." — 틀린 이유는?',
          opts: [
            'aims 뒤에 to가 와야 한다',
            'suggesting이 identify와 형태가 불일치 — suggest로 고쳐야 함',
            'causes가 복수형이라서',
            'and 앞에 콤마가 없어서',
          ],
          answer: 1,
          exp: '"to identify"와 병렬이 되려면 "suggest"(동사원형)이어야 합니다. "to identify ~ and suggest ~"',
        },
        {
          q: '다음 문장에서 병렬구조가 올바르게 쓰인 것을 고르세요.\n"Success depends not on talent but on perseverance."',
          opts: [
            'not ~ but ~ 구문에서 전치사구끼리 병렬되어 있다.',
            'not ~ but ~ 구문에서 명사와 형용사가 병렬되어 있다.',
            'not과 but 사이에 동사가 빠져 있다.',
            '병렬구조가 없는 문장이다.',
          ],
          answer: 0,
          exp: '"not on talent but on perseverance" — not A but B 구문에서 "on talent"와 "on perseverance"라는 전치사구끼리 형태가 일치합니다.',
        },
        {
          q: '다음 문장의 병렬구조를 분석하세요.\n"The data was collected, analyzed, and published."',
          opts: [
            '동사원형 세 개가 and로 병렬',
            '과거분사(p.p.) 세 개가 and로 병렬 (수동태 병렬)',
            '현재분사(-ing) 세 개가 and로 병렬',
            '형용사 세 개가 and로 병렬',
          ],
          answer: 1,
          exp: '"collected, analyzed, published" — 모두 과거분사(p.p.) 형태로 "was"와 함께 수동태를 이룹니다. 수동태 병렬 구조입니다.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 6-5: 실전 — UNIT 1~6 완전 통합
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L6_5',
      title: '실전 — UNIT 1~6 완전 통합',
      done: false,

      vocab: [
        { word: 'cognitive',    meaning: '인지적인',           example: 'cognitive ability 인지 능력' },
        { word: 'underlying',   meaning: '근본적인, 기저의',   example: 'the underlying cause 근본 원인' },
        { word: 'inevitable',   meaning: '불가피한',           example: 'an inevitable result 불가피한 결과' },
        { word: 'regardless of',meaning: '~에 상관없이',       example: 'regardless of age 나이에 상관없이' },
      ],

      steps: [
        `UNIT 6 정리 — 영어의 마지막 장치들.<br><br><strong>비교구문</strong> — as~as / 비교급+than / the 비교급 the 비교급<br><strong>강조구문</strong> — It is~that / do강조 / What~is<br><strong>도치</strong> — 부정어도치 / 조건절도치 / so/neither도치<br><strong>병렬구조</strong> — 접속사 앞뒤 형태 일치<br><br>이 네 가지는 "의미의 장치"가 아니라<br>"강조와 구조의 장치"입니다.<br>의미는 같아도 무게와 느낌이 달라집니다.<span class="step-en">UNIT 6 Review — the final tools of English.<br><br><strong>Comparison</strong> — as~as / comparative+than / the 비교급 the 비교급<br><strong>Emphasis</strong> — It is~that / do-emphasis / What~is<br><strong>Inversion</strong> — negative inversion / conditional inversion / so/neither inversion<br><strong>Parallelism</strong> — matching form on both sides of a conjunction<br><br>These four are not "tools of meaning" but "tools of emphasis and structure."<br>The meaning stays the same, but the weight and feel change.</span>`,

        `실전 예문 1 — 비교 + 도치 복합.<br><br><div class="step-sentence"><strong>Never before</strong> <strong>had</strong> scientists encountered a phenomenon <span class="tok-mod">[that was <strong>far more complex</strong> than anything <span class="tok-mod">[previously documented]</span>]</span>.</div><br>분해:<br>① Never before had — 부정어 도치 (Never before + had + 주어)<br>② far more complex than — 비교급 강조<br>③ that was ~ — 관계대명사절 (phenomenon 꾸밈)<br>④ previously documented — 분사구<br><br>원래 어순: Scientists had never before encountered a phenomenon that was far more complex than anything previously documented.<span class="step-en">Practice sentence 1 — comparison + inversion combined.<br><br>Breakdown:<br>① Never before had — negative inversion (Never before + had + subject)<br>② far more complex than — intensified comparative<br>③ that was ~ — relative clause (modifying "phenomenon")<br>④ previously documented — participial phrase<br><br>Restored word order: Scientists had never before encountered a phenomenon that was far more complex than anything previously documented.</span>`,

        `실전 예문 2 — 강조 + 접속사 복합.<br><br><div class="step-sentence"><strong>It is</strong> <strong>not</strong> the quantity of information <strong>but</strong> the quality of understanding <strong>that</strong> determines success <span class="tok-mod">[in complex problem-solving]</span>.</div><br>분해:<br>① It is ~ that — 강조구문<br>② not A but B — 병렬구조 (quantity ↔ quality)<br>③ of information / of understanding — 전치사구 수식<br>④ in complex problem-solving — 부사구 수식<br><br>핵심: 강조된 것 = "not quantity but quality of understanding"<span class="step-en">Practice sentence 2 — emphasis + conjunction combined.<br><br>Breakdown:<br>① It is ~ that — cleft (emphasis) structure<br>② not A but B — parallel structure (quantity ↔ quality)<br>③ of information / of understanding — prepositional phrase modifiers<br>④ in complex problem-solving — adverbial phrase modifier<br><br>Key point: the emphasized element = "not quantity but quality of understanding"</span>`,

        `실전 예문 3 — 수능형 완전 통합.<br><br><div class="step-sentence"><span class="tok-mod">[Although it was <strong>once</strong> believed <span class="tok-mod">[that intelligence was fixed]</span>]</span>, <strong>what</strong> modern neuroscience <strong>has shown</strong> <strong>is</strong> <span class="tok-mod">[that the brain remains remarkably adaptable <span class="tok-mod">[throughout life]</span>]</span>.</div><br>분해:<br>① Although절 — 양보 부사절 (수식어)<br>② once believed that — 과거 통념<br>③ what ~ is — What절 강조 구문 (주절)<br>④ that the brain remains ~ — 보어 명사절<br><br>뼈대: [Although...], what neuroscience has shown is [that the brain remains adaptable].<span class="step-en">Practice sentence 3 — a fully integrated exam-style sentence.<br><br>Breakdown:<br>① Although clause — concessive adverb clause (modifier)<br>② once believed that — a past assumption<br>③ what ~ is — What-clause emphasis structure (main clause)<br>④ that the brain remains ~ — noun clause as complement<br><br>Core structure: [Although...], what neuroscience has shown is [that the brain remains adaptable].</span>`,

        `최종 독해 공식 — UNIT 1~6 완성.<br><br>① <strong>동사를 찾는다</strong> — 뼈대의 중심 (UNIT 1)<br>② <strong>동사 형태를 읽는다</strong> — 시제·조동사·수동 (UNIT 2)<br>③ <strong>준동사를 묶는다</strong> — to부정사·분사·동명사 (UNIT 3)<br>④ <strong>명사 덩어리를 묶는다</strong> — 관계사·동격 (UNIT 4)<br>⑤ <strong>접속사로 절을 나눈다</strong> — 부사절·명사절·접속부사 (UNIT 5)<br>⑥ <strong>강조·도치·비교를 인식한다</strong> — 뒤집기·강조·구조 (UNIT 6)<br><br>이 여섯 단계가 수능 영어 독해의 완전한 지도입니다.<span class="step-en">The final reading formula — UNIT 1~6 complete.<br><br>① <strong>Find the verb</strong> — the center of the skeleton (UNIT 1)<br>② <strong>Read the verb form</strong> — tense, modal, passive (UNIT 2)<br>③ <strong>Group the verbals</strong> — to-infinitive, participle, gerund (UNIT 3)<br>④ <strong>Group the noun chunks</strong> — relative clauses, appositives (UNIT 4)<br>⑤ <strong>Divide clauses with conjunctions</strong> — adverb clauses, noun clauses, conjunctive adverbs (UNIT 5)<br>⑥ <strong>Recognize emphasis, inversion, and comparison</strong> — reversal, highlighting, structure (UNIT 6)<br><br>These six steps form the complete map of English reading comprehension.</span>`,

        `마지막 — 이 공부가 가르쳐준 것.<br><br>우리는 영어 문법을 공부했습니다.<br>하지만 사실은 다른 것도 함께 배웠어요.<br><br>수식어를 걷어내면 뼈대가 보인다 —<br>이것은 복잡한 글을 읽는 방법이기도 합니다.<br><br>동사를 찾으면 문장이 보인다 —<br>이것은 말의 핵심을 찾는 방법이기도 합니다.<br><br>언어를 정확하게 읽는 눈은<br>세상을 더 선명하게 보는 눈으로 이어집니다.<br><br>여기까지 온 것, 정말 잘 하셨습니다.<span class="step-en">A final note — what this study has taught us.<br><br>We studied English grammar.<br>But in truth, we learned something else along the way.<br><br>Strip away the modifiers and the skeleton appears —<br>this is also a way of reading complex texts.<br><br>Find the verb and the sentence comes into view —<br>this is also a way of finding the heart of what is said.<br><br>The eye that reads language precisely<br>becomes the eye that sees the world more clearly.<br><br>You have come this far — truly well done.</span>`,

        `이제 마지막 도전입니다.<br><br>지금까지 배운 모든 것을 사용해<br>문장을 분해하세요.<span class="step-en">Now for the final challenge.<br><br>Use everything you have learned so far<br>to break down the sentences.</span>`,
      ],

      dissection: [
        {
          sentence: ['Never before', 'had researchers observed', 'such consistent results', 'across all trials.'],
          roles:    ['inversion-adv', 'verb+subject', 'object', 'modifier'],
          task: 'object', taskLabel: '목적어를 탭하세요',
          hint: '"such consistent results" = 그렇게 일관된 결과. 도치된 문장의 목적어.',
          ok: '맞아요. 원래: Researchers had never before observed such consistent results across all trials. — 3형식 도치.',
        },
        {
          sentence: ['It was', 'the combination of factors,', 'not a single cause,', 'that led to the outcome.'],
          roles:    ['emphasis', 'emphasized', 'contrast', 'emphasis-that'],
          task: 'emphasized', taskLabel: '강조된 내용을 탭하세요',
          hint: '"the combination of factors" = 요인들의 조합. It was ~ that 강조구문에서 강조된 부분.',
          ok: '맞아요. "the combination of factors"가 강조. not a single cause = 대조. 원래: The combination of factors led to the outcome.',
        },
        {
          sentence: ['What', 'the six units have taught us', 'is', 'that structure reveals meaning.'],
          roles:    ['what-start', 'what-clause', 'verb', 'complement'],
          task: 'complement', taskLabel: '강조되는 보어를 탭하세요',
          hint: '"that structure reveals meaning" = 구조가 의미를 드러낸다는 것. What ~ is 강조 구문의 보어.',
          ok: '맞아요. What ~ is 강조 구문. "여섯 유닛이 가르쳐준 것은 바로 구조가 의미를 드러낸다는 것이다."',
        },
        {
          sentence: ['The solution requires', 'not eliminating risk entirely,', 'but managing it effectively.', ''],
          roles:    ['subject+verb', 'not-parallel', 'but-parallel', ''],
          task: 'but-parallel', taskLabel: '"but" 뒤 병렬 부분을 탭하세요',
          hint: '"but managing it effectively" — not A but B 병렬. eliminating ↔ managing (-ing 병렬).',
          ok: '맞아요. not eliminating but managing — 동명사 병렬. "위험을 완전히 없애는 것이 아니라 효과적으로 관리하는 것".',
        },
      ],

      skeleton: [
        {
          tokens: [
            { text: 'Not only', role: 'inversion-adv' },
            { text: 'did the experiment confirm the hypothesis,', role: 'inversion-clause' },
            { text: 'but it also', role: 'conjunction' },
            { text: 'revealed', role: 'verb' },
            { text: 'unexpected patterns', role: 'object' },
            { text: 'that challenged existing models.', role: 'modifier' },
          ],
          answer: ['the experiment confirm the hypothesis,', 'but it also', 'revealed', 'unexpected patterns'],
          guide: '부정어 도치 복원 + 관계대명사절 제거: The experiment not only confirmed the hypothesis, but also revealed unexpected patterns. — 3형식',
        },
        {
          tokens: [
            { text: 'It is', role: 'emphasis' },
            { text: 'precisely this capacity for adaptation', role: 'emphasized' },
            { text: 'that', role: 'emphasis' },
            { text: 'has allowed humans', role: 'verb+object' },
            { text: 'to survive and thrive', role: 'complement' },
            { text: 'across vastly different environments.', role: 'modifier' },
          ],
          answer: ['this capacity for adaptation', 'has allowed humans', 'to survive and thrive'],
          guide: 'It is ~ that 강조구문 제거 → This capacity for adaptation has allowed humans to survive and thrive. — 5형식',
        },
      ],

      quiz: [
        {
          q: '"Had the experiment been conducted properly, the results would have been different." — 이 문장의 특징은?',
          opts: [
            '부정어 도치',
            'if를 생략한 조건절 도치 (가정법 과거완료)',
            'so/neither 도치',
            '강조구문',
          ],
          answer: 1,
          exp: '"Had + 주어 + p.p." = "If + 주어 + had + p.p." — if를 생략한 가정법 과거완료 도치.',
        },
        {
          q: '"The more diverse the team, the more innovative the solutions." — 이 구문의 의미는?',
          opts: [
            '팀이 다양할수록 해결책이 더 혁신적이다',
            '팀이 다양하면 해결책이 혁신적이지 않다',
            '가장 다양한 팀이 가장 혁신적이다',
            '다양성과 혁신성은 반비례한다',
          ],
          answer: 0,
          exp: 'The 비교급, the 비교급 = ~할수록 더 ~하다. "팀이 다양할수록 해결책이 더 혁신적이다."',
        },
        {
          q: '"What the research demonstrates is that practice matters most." — 강조된 것은?',
          opts: [
            'the research',
            'practice matters most (연습이 가장 중요하다)',
            'demonstrates',
            'What',
          ],
          answer: 1,
          exp: 'What ~ is 강조 구문. "연구가 보여주는 것은 바로 연습이 가장 중요하다는 것이다" — that절이 강조.',
        },
        {
          q: 'UNIT 1~6 독해 공식 6단계 순서가 올바른 것은?',
          opts: [
            '동사→형태→준동사→명사덩어리→접속사→강조·도치·비교',
            '접속사→동사→준동사→명사→강조→형태',
            '강조→도치→비교→동사→명사→접속사',
            '명사→동사→수식어→접속사→강조→비교',
          ],
          answer: 0,
          exp: '①동사(UNIT1) ②동사형태(UNIT2) ③준동사(UNIT3) ④명사덩어리(UNIT4) ⑤접속사(UNIT5) ⑥강조·도치·비교(UNIT6)',
        },
        {
          q: '"Not the quantity but the quality of sleep matters." — 병렬구조 분석은?',
          opts: [
            'not과 but이 동사를 병렬',
            '"the quantity"와 "the quality" — 명사구 병렬 (not A but B)',
            '"quantity"와 "of sleep" — 불규칙 병렬',
            '병렬구조가 없는 문장',
          ],
          answer: 1,
          exp: '"not the quantity but the quality" — not A but B 병렬. 명사구 "the quantity" ↔ "the quality"가 형태 일치.',
        },
        {
          q: '다음 문장에 쓰인 특수구문을 모두 고르세요.\n"It is not the quantity but the quality of understanding that determines success."',
          opts: [
            '강조구문(It is ~ that)만 사용됨',
            '도치구문과 비교구문이 사용됨',
            '강조구문(It is ~ that) + 병렬구조(not A but B)',
            '가주어 구문과 최상급 비교가 사용됨',
          ],
          answer: 2,
          exp: '"It is ~ that"은 강조구문(명사+that → 강조), "not the quantity but the quality"는 not A but B 병렬구조입니다. 두 가지 특수구문이 함께 사용된 복합 문장입니다.',
        },
        {
          q: '다음 문장의 구조를 바르게 설명한 것을 고르세요.\n"Never before had researchers observed such consistent results across all trials."',
          opts: [
            'researchers가 문두에 와서 강조된 강조구문',
            '"Never before"가 문두에 와서 had와 researchers가 도치된 부정어 도치',
            '"such consistent results"가 강조된 it is ~ that 구문',
            '조건절 if를 생략한 가정법 도치',
          ],
          answer: 1,
          exp: '"Never before"(부정어)가 문장 앞에 오면서 조동사(had)와 주어(researchers)가 도치되었습니다. 원래 어순: Researchers had never before observed such consistent results across all trials.',
        },
      ],
    },

  ], // lessons end
};
