// ── UNIT 2: 동사의 변신은 무죄 ────────────────────────────────────────
const UNIT2 = {
  id: 'unit2',
  title: '동사의 변신은 무죄',
  subtitle: '형태가 달라져도 동사는 동사다',
  lessons: [

    // ══════════════════════════════════════════════════════════════
    // 레슨 2-1: 동사의 얼굴이 바뀐다 — 시제
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L2_1',
      title: '동사의 얼굴이 바뀐다 — 시제',
      done: false,

      vocab: [
        { word: 'think / thought', meaning: '생각하다 / 생각했다',  example: '그는 생각했다 깊이.' },
        { word: 'teach / taught',  meaning: '가르치다 / 가르쳤다', example: '그녀는 가르쳤다 우리를.' },
        { word: 'write / wrote',   meaning: '쓰다 / 썼다',          example: '그는 썼다 편지를.' },
        { word: 'find / found',    meaning: '찾다·알다 / 찾았다',   example: '우리는 찾았다 답을.' },
      ],

      steps: [
        `영어 문장을 읽다 보면<br>이런 단어를 만날 때가 있습니다.<br><br><strong>thought</strong><br><strong>taught</strong><br><br>사전에 찾아도 없는 것 같고,<br>뜻도 모르겠고 — 당황스럽죠?`,

        `예전에는 종이 사전에<br>이런 변형된 형태가 따로 올라오지 않았습니다.<br><br>그래서 독해 중에 이런 단어를 만나면<br>속수무책이었어요.<br><br><em>thought</em>의 원형은 <strong>think</strong> (생각하다)<br><em>taught</em>의 원형은 <strong>teach</strong> (가르치다)<br><br>동사는 시간에 따라 얼굴이 달라집니다.`,

        `동사가 얼굴을 바꾸는 이유.<br><br>문장은 <strong>시간</strong>을 담아야 합니다.<br><br>지금 달린다 — 어제 달렸다 — 내일 달릴 것이다<br><br>같은 동사인데 시간이 다릅니다.<br>그 시간 정보를 동사 형태에 실어서 보냅니다.<br>이것을 <strong>시제</strong>라고 합니다.`,

        `<strong>현재형</strong> — 지금 또는 습관적인 일<br><br><div class="step-sentence"><mark class="s">나는</mark> <mark class="v">달린다</mark>. (I run.)</div><div class="step-sentence"><mark class="s">그녀는</mark> <mark class="v">가르친다</mark> <mark class="o">수학을</mark>. (She teaches math.)</div><br>현재의 사실, 습관, 일반적인 진리를 나타냅니다.<br>3인칭 단수(he/she/it)에는 동사 끝에 <strong>-s/-es</strong>가 붙어요.`,

        `<strong>과거형</strong> — 이미 끝난 일<br><br>규칙 변화: 동사 끝에 <strong>-ed</strong>를 붙입니다.<br><br>walk → walked (걸었다)<br>talk → talked (말했다)<br>open → opened (열었다)<br><br>하지만 영어의 많은 동사는<br>불규칙하게 변합니다.`,

        `<strong>불규칙 변화</strong> — 자주 쓰이는 것들<br><br>think → <strong>thought</strong> (생각했다)<br>teach → <strong>taught</strong> (가르쳤다)<br>write → <strong>wrote</strong> (썼다)<br>find → <strong>found</strong> (찾았다·알았다)<br>see → <strong>saw</strong> (보았다)<br>know → <strong>knew</strong> (알았다)<br>come → <strong>came</strong> (왔다)<br><br>자주 쓰이는 동사일수록 불규칙하게 변합니다.<br>역사 속에서 발음이 자연스럽게 줄어든 흔적이에요.`,

        `<strong>미래형</strong> — 아직 일어나지 않은 일<br><br><strong>will + 동사원형</strong><br><br><div class="step-sentence"><mark class="s">나는</mark> <mark class="v">달릴 것이다</mark>. (I will run.)</div><div class="step-sentence"><mark class="s">그녀는</mark> <mark class="v">가르칠 것이다</mark> <mark class="o">수학을</mark>.</div><br>will 뒤에는 반드시 동사원형이 옵니다.<br>변형 없이 원래 모습 그대로예요.`,

        `독해 전략.<br><br>변형된 동사를 만나면<br>당황하지 말고 원형을 떠올리세요.<br><br><em>thought</em> → think → 생각하다<br><em>taught</em> → teach → 가르치다<br><em>found</em> → find → 찾다 / 알다<br><br>동사의 형태가 달라져도<br><strong>그것이 동사라는 사실은 변하지 않습니다.</strong><br>변신은 무죄입니다.`,

        `정리해볼게요.<br><br>현재형: <strong>동사원형</strong> (또는 -s/-es)<br>과거형: <strong>동사원형 + -ed</strong> (규칙)<br>&emsp;&emsp;&emsp;&emsp; or <strong>불규칙 변화</strong><br>미래형: <strong>will + 동사원형</strong><br><br>독해에서 만나는 동사는 대부분<br>이 세 가지 중 하나입니다.`,
      ],

      dissection: [
        {
          sentence: ['He', 'thought', 'deeply', 'alone.'],
          roles:    ['subject', 'verb', 'modifier', 'modifier'],
          task: 'verb', taskLabel: '동사를 탭하세요 (원형: think)',
          hint: '"thought"는 think의 과거형입니다. "deeply", "alone"은 꾸밈말이에요.',
          ok: '맞아요. "thought"가 동사입니다. think(생각하다)의 과거형. 1형식.',
        },
        {
          sentence: ['She', 'taught', 'us', 'the truth.'],
          roles:    ['subject', 'verb', 'io', 'object'],
          task: 'verb', taskLabel: '동사를 탭하세요 (원형: teach)',
          hint: '"taught"는 teach의 과거형입니다. "us"(우리에게) + "the truth"(진실을) — 두 목적어가 있어요.',
          ok: '맞아요. "taught"가 동사. teach(가르치다)의 과거형. 주어 + 동사 + 에게 + 를 → 4형식.',
        },
        {
          sentence: ['The scientist', 'found', 'the answer', 'after years of research.'],
          roles:    ['subject', 'verb', 'object', 'modifier'],
          task: 'form',
          taskLabel: '뼈대의 형식은?',
          formOpts: ['1형식', '2형식', '3형식', '4형식', '5형식'],
          ans: 2,
          hint: '"after years of research"는 전치사구 수식어. 뼈대는 "The scientist found the answer."',
          ok: '맞아요. The scientist found the answer. — 3형식. found = find의 과거형.',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: 'Yesterday,', role: 'modifier', keep: false },
            { text: 'he', role: 'subject', keep: true },
            { text: 'finally', role: 'modifier', keep: false },
            { text: 'thought', role: 'verb', keep: true },
            { text: 'about the problem', role: 'modifier', keep: false },
            { text: 'seriously.', role: 'modifier', keep: false },
          ],
          result: 'he thought.',
          guide: '수식어 제거 → "he thought." — 1형식. thought = think의 과거형.',
        },
        {
          chunks: [
            { text: 'My teacher', role: 'subject', keep: true },
            { text: 'patiently', role: 'modifier', keep: false },
            { text: 'taught', role: 'verb', keep: true },
            { text: 'us', role: 'io', keep: true },
            { text: 'the rules of grammar', role: 'object', keep: true },
            { text: 'for ten years.', role: 'modifier', keep: false },
          ],
          result: 'My teacher taught us the rules.',
          guide: '수식어 제거 → "My teacher taught us the rules." — 4형식. taught = teach의 과거형.',
        },
      ],

      quiz: [
        {
          q: '"thought"의 원형(기본형) 동사는?',
          opts: ['teach', 'think', 'thank', 'though'],
          ans: 1,
          exp: 'thought는 think(생각하다)의 과거형입니다. "taught"가 teach의 과거형이에요.',
        },
        {
          q: '영어 동사의 과거형 규칙 변화는?',
          opts: [
            '동사원형에 -ing를 붙인다',
            '동사원형에 -ed를 붙인다',
            '동사원형에 will을 앞에 붙인다',
            '동사원형에 -s를 붙인다',
          ],
          ans: 1,
          exp: '규칙 변화는 동사원형 + -ed. (walk→walked, talk→talked) 단, 자주 쓰는 동사는 불규칙하게 변해요.',
        },
        {
          q: '"The teacher found the answer." — 동사 "found"의 의미는?',
          opts: [
            '찾다 (현재형)',
            '찾았다 (과거형: find의 과거)',
            '설립하다 (현재형)',
            '설립했다 (과거형)',
          ],
          ans: 1,
          exp: 'find(찾다·알다)의 과거형이 found입니다.',
        },
        {
          q: '다음 문장의 시제를 고르세요.\n"She will teach mathematics at the new school."',
          opts: ['past', 'present', 'future', 'present perfect'],
          ans: 2,
          exp: '"will teach"는 will + 동사원형 형태의 미래형입니다. will 뒤에는 반드시 동사원형이 옵니다.',
        },
        {
          q: '다음 문장에서 과거형 동사를 고르세요.\n"He wrote a long letter to his old friend."',
          opts: ['write', 'wrote', 'writes', 'will write'],
          ans: 1,
          exp: '"wrote"는 write(쓰다)의 불규칙 과거형입니다. 이미 끝난 일을 나타냅니다.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 2-2: 동사가 이어진다 — 진행형과 완료형
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L2_2',
      title: '동사가 이어진다 — 진행형과 완료형',
      done: false,

      vocab: [
        { word: 'is running',   meaning: '달리고 있다',    example: '그는 달리고 있다 지금.' },
        { word: 'was studying', meaning: '공부하고 있었다', example: '그녀는 공부하고 있었다 그때.' },
        { word: 'has written',  meaning: '써왔다·써버렸다', example: '그는 써왔다 소설을.' },
        { word: 'had finished', meaning: '끝내 놓았었다',   example: '그는 끝내 놓았었다 보고서를.' },
      ],

      steps: [
        `동사 혼자서는 때로 부족합니다.<br><br>달린다 — vs — 달리고 있는 중이다<br><br>같은 "달리다"지만<br>뉘앙스가 다르죠?<br><br>이런 미묘한 차이를 표현하기 위해<br><strong>도움동사(be, have)</strong>가 등장합니다.`,

        `<strong>진행형</strong> — 지금 한창 하고 있는 중<br><br><strong>be동사 + 동사원형-ing</strong><br><br><div class="step-sentence"><mark class="s">그는</mark> <mark class="v">is running</mark>. — 달리고 있다 (지금)</div><div class="step-sentence"><mark class="s">그녀는</mark> <mark class="v">was studying</mark>. — 공부하고 있었다 (그때)</div><br>is/am/are + -ing → 현재 진행<br>was/were + -ing → 과거 진행`,

        `독해할 때 is/was/are/were 다음에<br>-ing로 끝나는 단어가 보이면<br>그 두 개를 묶어서 진행형 동사로 읽으세요.<br><br><div class="step-sentence">The children <mark class="v">were playing</mark> <span class="tok-mod">in the park.</span></div><br>were playing = 놀고 있었다 → 1형식<br>"in the park"는 전치사구 수식어</div><br>were playing = were playing → Type 1<br>"in the park" is a prepositional phrase modifier</span>`,

        `<strong>완료형</strong> — 과거부터 지금까지 이어진<br><br><strong>have/has + 과거분사(p.p.)</strong><br><br><div class="step-sentence"><mark class="s">그녀는</mark> <mark class="v">has written</mark> <mark class="o">소설을</mark>.</div>→ 써왔다, 써버렸다<br><br><div class="step-sentence"><mark class="s">그는</mark> <mark class="v">has lived</mark> <span class="tok-mod">여기서 10년간</span>.</div>→ 10년간 살아왔다 (지금도 살고 있음).</div>→ has lived here for 10 years (and still does)</span>`,

        `완료형의 핵심 뉘앙스.<br><br>과거에 시작해서 지금까지 연결된 느낌입니다.<br><br>"그는 살았다(lived)." → 과거의 사실<br>"그는 살아왔다(has lived)." → 지금도 연결됨<br><br>독해에서 완료형이 나오면<br>"그때부터 지금까지"라는 느낌을 담아 해석하세요.`,

        `<strong>과거완료</strong> — have가 had로<br><br><strong>had + 과거분사(p.p.)</strong><br><br>과거의 어느 시점보다 더 이전의 일을 나타냅니다.<br><br><div class="step-sentence">When she arrived, he <mark class="v">had already left</mark>.</div>그녀가 도착했을 때, 그는 이미 떠나 있었다.<br>(떠난 것이 더 이전 일)`,

        `정리 — be/-ing, have/p.p. 패턴<br><br>be + -ing → <strong>진행형</strong> (하고 있다)<br>have/has + p.p. → <strong>완료형</strong> (해왔다)<br>had + p.p. → <strong>과거완료</strong> (더 이전에 했다)<br><br>이 패턴이 보이면 두 단어를 하나의 동사로 묶으세요.<br><br><div class="step-sentence">She <mark class="v">has been writing</mark> 소설을 3년째.</div>has been writing = 써오고 있다 (완료 + 진행)`,

        `이제 직접 확인해보겠습니다.<br><br>아래 문장에서<br><strong>동사 전체(도움동사 포함)를 탭하세요.</strong>`,
      ],

      dissection: [
        {
          sentence: ['The students', 'were studying', 'quietly', 'in the library.'],
          roles:    ['subject', 'verb', 'modifier', 'modifier'],
          task: 'verb', taskLabel: '진행형 동사를 탭하세요',
          hint: '"were + studying" = 공부하고 있었다. 두 단어가 하나의 동사입니다.',
          ok: '맞아요. "were studying"이 과거진행형 동사. 뼈대: The students were studying. — 1형식.',
        },
        {
          sentence: ['She', 'has written', 'three novels', 'so far.'],
          roles:    ['subject', 'verb', 'object', 'modifier'],
          task: 'verb', taskLabel: '완료형 동사를 탭하세요',
          hint: '"has + written(p.p.)" = 써왔다. "so far"는 꾸밈말이에요.',
          ok: '맞아요. "has written"이 현재완료형 동사. — 3형식.',
        },
        {
          sentence: ['By the time we arrived,', 'the train', 'had already left.'],
          roles:    ['modifier', 'subject', 'verb'],
          task: 'form',
          taskLabel: '뼈대의 형식은?',
          formOpts: ['1형식', '2형식', '3형식', '4형식', '5형식'],
          ans: 0,
          hint: '"By the time we arrived"는 수식어. 뼈대: the train had left. 목적어가 없어요.',
          ok: '맞아요. "the train had left." — 1형식. had left = leave의 과거완료.',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: 'At that moment,', role: 'modifier', keep: false },
            { text: 'the children', role: 'subject', keep: true },
            { text: 'were playing', role: 'verb', keep: true },
            { text: 'happily', role: 'modifier', keep: false },
            { text: 'in the garden.', role: 'modifier', keep: false },
          ],
          result: 'the children were playing.',
          guide: '수식어 제거 → "the children were playing." — 1형식. 과거진행형.',
        },
        {
          chunks: [
            { text: 'The researcher', role: 'subject', keep: true },
            { text: 'has devoted', role: 'verb', keep: true },
            { text: 'her entire life', role: 'object', keep: true },
            { text: 'to solving the problem.', role: 'modifier', keep: false },
          ],
          result: 'The researcher has devoted her entire life.',
          guide: '수식어 제거 → "The researcher has devoted her entire life." — 3형식. 현재완료형.',
        },
      ],

      quiz: [
        {
          q: '"She was reading a book." — 이 문장의 동사는?',
          opts: ['was', 'reading', 'was reading', 'was reading a book'],
          ans: 2,
          exp: 'was + reading = 과거진행형. 두 단어가 합쳐져 하나의 동사 역할을 합니다.',
        },
        {
          q: '현재완료형의 형태는?',
          opts: ['be + 동사원형', 'will + 동사원형', 'have/has + 과거분사(p.p.)', 'be + 과거분사'],
          ans: 2,
          exp: '현재완료 = have/has + p.p. "She has written." / "He has seen."',
        },
        {
          q: '"He has lived here for 20 years."의 뜻은?',
          opts: [
            '그는 20년 전에 여기서 살았다.',
            '그는 20년간 여기서 살아왔다. (지금도 살고 있음)',
            '그는 20년 후에 여기서 살 것이다.',
            '그는 20년 동안 여기서 살 예정이다.',
          ],
          ans: 1,
          exp: '현재완료는 과거부터 지금까지의 연결. "20년간 살아왔다, 지금도 여기 있다"는 뉘앙스입니다.',
        },
        {
          q: '다음 문장의 동사 형태를 고르세요.\n"The children were playing in the garden."',
          opts: ['simple past', 'past progressive', 'present perfect', 'past perfect'],
          ans: 1,
          exp: '"were playing"은 was/were + -ing 형태의 과거진행형입니다. 그 시점에 한창 진행 중이었음을 나타냅니다.',
        },
        {
          q: '다음 두 문장 중 현재완료가 올바르게 쓰인 것은?\nA: "She has finished her homework yesterday."\nB: "She has finished her homework already."',
          opts: ['A만 맞다', 'B만 맞다', '둘 다 맞다', '둘 다 틀리다'],
          ans: 1,
          exp: '현재완료는 yesterday처럼 명확한 과거 시점 표현과 함께 쓸 수 없습니다. already(이미)는 현재완료와 함께 자주 씁니다.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 2-3: 동사에 날개를 달다 — 조동사
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L2_3',
      title: '동사에 날개를 달다 — 조동사',
      done: false,

      vocab: [
        { word: 'can / could',       meaning: '할 수 있다 / 해도 된다 / 할 수도 있다', example: '나는 수영할 수 있다. 들어와도 됩니다.' },
        { word: 'will / would',      meaning: '할 것이다 / (가정) ~할 텐데',           example: '나는 갈 것이다. 내가 너라면 갈 텐데.' },
        { word: 'must / have to',    meaning: '해야 한다 / 틀림없이 ~일 것이다',       example: '공부해야 한다. 그는 피곤할 것이다.' },
        { word: 'should',            meaning: '해야 한다 (권고·조언)',                  example: '쉬어야 해. 의사에게 가봐야 해.' },
        { word: 'may / might',       meaning: '해도 된다 / 할 수도 있다',               example: '들어가도 됩니다. 비가 올 수도 있다.' },
        { word: 'need to / had better', meaning: '~할 필요가 있다 / ~하는 게 좋을 거야', example: '더 쉬어야 할 것 같아. 지금 떠나는 게 좋을 거야.' },
      ],

      steps: [
        `동사 하나만으로는 담지 못하는 뉘앙스가 있습니다.<br><br>말하다<br>말할 수 있다<br>말해야 한다<br>말할 것이다<br>말하는 것이 나을 것이다<br>말할 필요가 없다<br>말할 수도 있다<br><br>이 미묘한 차이를 만드는 것이<br><strong>조동사</strong>입니다.`,

        `조동사의 두 가지 규칙.<br><br><strong>① 조동사 + 동사원형</strong><br>조동사 뒤에는 반드시 변형 없는 동사원형이 옵니다.<br>can goes (✗) → can go (✓)<br>must studied (✗) → must study (✓)<br><br><strong>② 조동사에는 -s/-ed가 붙지 않습니다</strong><br>cans / wills / musted — 전부 틀립니다.<br>조동사 자체는 형태가 변하지 않아요.`,

        `<strong>can</strong> — 세 가지 얼굴<br><br>① <em>능력</em> — 할 수 있다<br><div class="step-sentence">She <mark class="v">can speak</mark> <mark class="o">four languages</mark>.</div>그녀는 네 개 언어를 말할 수 있다.<br><br>② <em>가능성</em> — 일어날 수 있다<br><div class="step-sentence">Stress <mark class="v">can cause</mark> <mark class="o">serious illness</mark>.</div>스트레스는 심각한 병을 일으킬 수 있다.<br><br>③ <em>허가</em> — 해도 된다<br><div class="step-sentence">You <mark class="v">can leave</mark> <span class="tok-mod">early today</span>.</div>오늘은 일찍 나가도 됩니다..</div>You are allowed to leave early today.</span>`,

        `<strong>could</strong> — can의 과거이자 분신<br><br>① <em>과거의 능력</em><br><div class="step-sentence">She <mark class="v">could run</mark> <span class="tok-mod">very fast</span> <span class="tok-mod">when she was young</span>.</div>어렸을 때 매우 빠르게 달릴 수 있었다.<br><br>② <em>더 공손한 요청</em> (can보다 부드러움)<br><div class="step-sentence"><mark class="v">Could</mark> you <mark class="v">help</mark> me?</div>도와주실 수 있을까요?<br><br>③ <em>약한 가능성</em><br><div class="step-sentence">The rumor <mark class="v">could be</mark> <mark class="c">true</mark>.</div>그 소문이 사실일 수도 있다. <span class="tok-mod">when she was young</span>.</div>She was able to run very fast when she was young.<br><br>② <em>more polite request</em> (softer than can)<br><div class="step-sentence"><mark class="v">Could</mark> you <mark class="v">help</mark> me?</div>Could you help me?<br><br>③ <em>weak possibility</em><br><div class="step-sentence">The rumor <mark class="v">could be</mark> <mark class="c">true</mark>.</div>The rumor could be true.</span>`,

        `<strong>will</strong> — 의지와 미래<br><br>① <em>강한 의지</em> — 반드시 할 것이다<br><div class="step-sentence">I <mark class="v">will finish</mark> <mark class="o">this</mark> <span class="tok-mod">no matter what</span>.</div>무슨 일이 있어도 이것을 끝낼 것이다.<br><br>② <em>미래의 사실·예측</em><br><div class="step-sentence">The meeting <mark class="v">will start</mark> <span class="tok-mod">at 9 a.m.</span></div>회의는 오전 9시에 시작할 것이다.<br><br>③ <em>습관·특성</em> (종종 ~하곤 한다)<br><div class="step-sentence">Oil <mark class="v">will float</mark> <span class="tok-mod">on water</span>.</div>기름은 물 위에 뜨기 마련이다..</div>I will finish this no matter what.<br><br>② <em>future fact or prediction</em><br><div class="step-sentence">The meeting <mark class="v">will start</mark> <span class="tok-mod">at 9 a.m.</span></div>The meeting will start at 9 a.m.<br><br>③ <em>habit or characteristic</em> (tends to ~)<br><div class="step-sentence">Oil <mark class="v">will float</mark> <span class="tok-mod">on water</span>.</div>Oil will always float on water.</span>`,

        `<strong>would</strong> — will의 과거이자 분신<br><br>① <em>과거의 습관</em> (used to와 비슷)<br><div class="step-sentence">She <mark class="v">would walk</mark> <span class="tok-mod">here every morning</span>.</div>그녀는 매일 아침 여기 걷곤 했다.<br><br>② <em>가정법</em> — 사실과 반대되는 상상<br><div class="step-sentence">If I <mark class="v">were</mark> you, I <mark class="v">would quit</mark>.</div>내가 너라면 그만둘 텐데.<br><br>③ <em>공손한 요청</em><br><div class="step-sentence"><mark class="v">Would</mark> you <mark class="v">mind</mark> <span class="tok-mod">closing the door</span>?</div>문 좀 닫아주시겠어요?.</div>She used to walk here every morning.<br><br>② <em>subjunctive</em> — imagining the opposite of reality<br><div class="step-sentence">If I <mark class="v">were</mark> you, I <mark class="v">would quit</mark>.</div>If I were you, I would quit.<br><br>③ <em>polite request</em><br><div class="step-sentence"><mark class="v">Would</mark> you <mark class="v">mind</mark> <span class="tok-mod">closing the door</span>?</div>Would you mind closing the door?</span>`,

        `<strong>must</strong> — 의무 : 반드시 해야 한다<br><br>화자 스스로 내린 강한 의무감입니다.<br>외부 규칙이 아니라 <em>내가 해야 한다</em>는 느낌.<br><br><div class="step-sentence">I <mark class="v">must finish</mark> <mark class="o">this report</mark> <span class="tok-mod">by tonight</span>.</div>오늘 밤까지 이 보고서를 반드시 끝내야 한다.<br><br><div class="step-sentence">You <mark class="v">must not</mark> <mark class="v">enter</mark> <span class="tok-mod">this area</span>.</div>이 구역에 들어오면 안 됩니다. (금지)<br><br>must not = 해서는 안 된다 (강한 금지).</div>I absolutely must finish this report by tonight.<br><br><div class="step-sentence">You <mark class="v">must not</mark> <mark class="v">enter</mark> <span class="tok-mod">this area</span>.</div>You must not enter this area. (prohibition)<br><br>must not = must not do (strong prohibition)</span>`,

        `<strong>must</strong> — 추측 : 틀림없이 ~일 것이다<br><br>같은 단어인데 의미가 전혀 다릅니다.<br>문맥으로 구분해야 합니다.<br><br><div class="step-sentence">She <mark class="v">must be</mark> <mark class="c">exhausted</mark>.</div>그녀는 틀림없이 지쳐 있을 것이다.<br><br><div class="step-sentence">This <mark class="v">must be</mark> <mark class="o">the answer</mark>.</div>이것이 틀림없이 답일 것이다.<br><br><em>의무: You must study. (공부해야 해)</em><br><em>추측: You must be tired. (피곤한 게 틀림없어)</em><br>be가 뒤따를 때 추측으로 읽히는 경우가 많습니다.`,

        `<strong>have to</strong> — must와 비슷하지만 다르다<br><br>must = 내가 스스로 느끼는 의무<br>have to = 규칙·상황이 만들어낸 외부 의무<br><br><div class="step-sentence">I <mark class="v">must finish</mark> this. — 내가 꼭 끝내고 싶어서</div><div class="step-sentence">I <mark class="v">have to finish</mark> this. — 마감이 있어서 어쩔 수 없이</div><br>부정형이 완전히 다릅니다:<br>must not = 해서는 <em>안 된다</em> (금지)<br>don't have to = 하지 <em>않아도 된다</em> (불필요)`,

        `<strong>should / ought to</strong> — 권고와 조언<br><br>must보다 훨씬 부드럽습니다.<br>"하면 좋을 것이다"는 뉘앙스예요.<br><br><div class="step-sentence">You <mark class="v">should see</mark> <mark class="o">a doctor</mark>.</div>의사에게 가봐야 할 것 같아.<br><br><div class="step-sentence">We <mark class="v">should consider</mark> <mark class="o">all the options</mark>.</div>모든 선택지를 고려해봐야 한다.<br><br>ought to = should와 의미 거의 동일<br>다소 격식체에서 씁니다.<br><div class="step-sentence">You <mark class="v">ought to</mark> <mark class="v">apologize</mark>.</div>사과해야 한다.`,

        `<strong>may</strong> — 허가와 가능성<br><br>① <em>허가</em> — 해도 된다 (격식체)<br><div class="step-sentence">You <mark class="v">may leave</mark> <span class="tok-mod">now</span>.</div>이제 나가셔도 됩니다. (공식적, 격식)<br><br>② <em>가능성</em> — 할 수도 있다 (50% 정도)<br><div class="step-sentence">It <mark class="v">may rain</mark> <span class="tok-mod">this afternoon</span>.</div>오늘 오후에 비가 올 수도 있다.<br><br><strong>might</strong> — may보다 더 약한 가능성 (30% 이하)<br><div class="step-sentence">She <mark class="v">might come</mark>, but I'm not sure.</div>그녀가 올 수도 있어, 하지만 잘 모르겠어..</div>You may leave now. (formal, official)<br><br>② <em>possibility</em> — might happen (about 50%)<br><div class="step-sentence">It <mark class="v">may rain</mark> <span class="tok-mod">this afternoon</span>.</div>It may rain this afternoon.<br><br><strong>might</strong> — weaker possibility than may (30% or less)<br><div class="step-sentence">She <mark class="v">might come</mark>, but I'm not sure.</div>She might come, but I'm not sure.</span>`,

        `<strong>had better</strong> — 강한 권고, 경고의 뉘앙스<br><br>should보다 훨씬 강합니다.<br>"그렇게 하지 않으면 좋지 않을 것"이라는<br>경고의 느낌이 담겨 있어요.<br><br><div class="step-sentence">You <mark class="v">had better leave</mark> <span class="tok-mod">now</span>.</div>지금 당장 떠나는 게 좋을 거야. (그러지 않으면…)<br><br><div class="step-sentence">We <mark class="v">had better not</mark> <mark class="v">ignore</mark> <mark class="o">this warning</mark>.</div>이 경고를 무시하지 않는 게 좋을 거야.<br><br>대화에서 "You'd better..."로 줄여 씁니다..</div>You had better leave right now. (or else…)<br><br><div class="step-sentence">We <mark class="v">had better not</mark> <mark class="v">ignore</mark> <mark class="o">this warning</mark>.</div>We had better not ignore this warning.<br><br>In conversation, it is often shortened to "You'd better..."</span>`,

        `<strong>need to</strong> — ~할 필요가 있다<br><br>have to처럼 동사 앞에서 의미를 조절하는 준조동사입니다.<br><br><div class="step-sentence">You <mark class="v">need to see</mark> <mark class="o">a doctor</mark>.</div>의사에게 가봐야 해.<br><br><div class="step-sentence">We <mark class="v">need to discuss</mark> <mark class="o">this issue</mark> <span class="tok-mod">carefully</span>.</div>이 문제를 신중하게 논의해야 한다.<br><br>부정형이 특히 중요합니다.<br><br><strong>don't need to / need not</strong> = ~할 필요가 없다<br><br><div class="step-sentence">You <mark class="v">don't need to worry</mark>.</div>걱정할 필요 없어.<br><br>don't have to와 같은 뜻입니다.<br>"안 해도 된다" — 금지가 아니라 불필요..</div>We need to discuss this issue carefully.<br><br>The negative form is especially important.<br><br><strong>don't need to / need not</strong> = there is no need to ~<br><br><div class="step-sentence">You <mark class="v">don't need to worry</mark>.</div>You don't need to worry.<br><br>Same meaning as don't have to.<br>"You don't have to" — not forbidden, just not necessary.</span>`,

        `조동사는 부정어가 붙으면 뜻이 크게 달라집니다.<br><br><strong>can</strong>은 긍정일 때 세 가지 뜻이 있습니다.<br>~할 수 있다 / ~해도 된다 / ~일 수 있다<br><br>부정이 되면:<br><div class="step-sentence">You <mark class="v">can't enter</mark>. — 들어오면 <em>안 된다</em> (허가 부정)</div><div class="step-sentence">It <mark class="v">can't be</mark> <mark class="c">true</mark>. — 사실일 <em>리가 없다</em> (강한 부정 확신)</div><br>"~일 수 있다"의 부정이 "~일 수 없다"가 아니라<br><em>~일 리가 없다</em>는 강한 표현으로 점프합니다.<br><br>may not be = 아닐 수도 있다 (약한 불확실)<br>can't be = 일 리가 없다 (강한 부정 확신)<br>전혀 다릅니다.`,

        `<strong>must</strong>도 부정어에서 조심해야 합니다.<br><br>must = 해야 한다<br>그럼 must not = 안 해도 된다? — <strong>아닙니다.</strong><br><br><div class="step-sentence">You <mark class="v">must not</mark> <mark class="v">touch</mark> <mark class="o">this</mark>. — 만져서는 <em>안 된다</em> (금지!)</div><br>must not은 의무의 부정이 아니라 <strong>금지</strong>입니다.<br>"안 해도 된다"고 말하려면 don't have to를 써야 합니다.<br><br>추측에서도 같습니다:<br>must be = 틀림없이 ~일 것이다<br>그 부정은 must not be가 아니라 <strong>can't be</strong><br><br><div class="step-sentence">He <mark class="v">can't be</mark> <mark class="c">serious</mark>. — 진심일 리가 없다.</div><br>긍정(must be) ↔ 부정(can't be) 짝으로 씁니다.`,

        `조동사마다 뉘앙스가 조금씩 다릅니다.<br><br>같은 "해야 한다"도:<br>must — 나 스스로 강하게 느끼는 의무<br>have to — 규칙·상황이 만든 외부 의무<br>need to — 필요하다는 판단<br>should — 부드러운 권고<br>had better — 경고가 담긴 강한 권고<br><br>정확한 뉘앙스는 문맥에서 결정됩니다.<br>어떤 조동사인지 알면,<br>문장의 분위기까지 읽힙니다.`,

        `독해 전략 — 조동사 패턴 인식.<br><br>조동사가 보이면 그 뒤 동사원형까지 묶어 읽고,<br>문맥에 따라 의무인지 가능성인지 판단하세요.<br><br><div class="step-sentence">The policy <mark class="v">could significantly reduce</mark> <mark class="o">emissions</mark>.</div>정책이 배출량을 크게 줄일 수 있을 것이다. (가능성)<br><br><div class="step-sentence">Scientists <mark class="v">must address</mark> <mark class="o">this problem</mark> <span class="tok-mod">immediately</span>.</div>과학자들은 이 문제를 즉시 다뤄야 한다. (의무)<br><br>뼈대를 찾는 방법은 똑같습니다.<br>조동사형 동사를 하나로 묶고,<br>수식어를 제거하면 됩니다..</div>Scientists must address this problem immediately. (obligation)<br><br>The method for finding the skeleton is the same.<br>Treat the modal verb as one unit,<br>then remove the modifiers.</span>`,
      ],

      dissection: [
        {
          sentence: ['Stress', 'can cause', 'serious health problems', 'over time.'],
          roles:    ['subject', 'verb', 'object', 'modifier'],
          task: 'verb', taskLabel: '조동사 포함 동사를 탭하세요',
          hint: '"can + cause" = 일으킬 수 있다. 두 단어가 하나의 동사입니다.',
          ok: '맞아요. "can cause"가 동사. 여기서 can은 가능성(일어날 수 있다)입니다. 3형식.',
        },
        {
          sentence: ['You', 'must not ignore', 'this warning', 'any longer.'],
          roles:    ['subject', 'verb', 'object', 'modifier'],
          task: 'verb', taskLabel: '조동사 포함 동사를 탭하세요',
          hint: '"must not + ignore" = 무시해서는 안 된다. must not은 강한 금지입니다.',
          ok: '맞아요. "must not ignore"가 동사. must not = 해서는 안 된다. 3형식.',
        },
        {
          sentence: ['The results', 'might surprise', 'everyone', 'in the field.'],
          roles:    ['subject', 'verb', 'object', 'modifier'],
          task: 'form',
          taskLabel: '뼈대의 형식은?',
          formOpts: ['1형식', '2형식', '3형식', '4형식', '5형식'],
          ans: 2,
          hint: '"in the field"는 전치사구. might surprise = 놀라게 할 수도 있다. 뼈대: The results might surprise everyone.',
          ok: '맞아요. The results might surprise everyone. — 3형식. might = 약한 가능성.',
        },
        {
          sentence: ['She', 'had better reconsider', 'her decision', 'carefully.'],
          roles:    ['subject', 'verb', 'object', 'modifier'],
          task: 'verb', taskLabel: '조동사구 전체를 탭하세요',
          hint: '"had better + reconsider" = 재고해보는 게 좋을 거야. 경고의 뉘앙스.',
          ok: '맞아요. "had better reconsider"가 동사. had better = 강한 권고+경고. 3형식.',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: 'Without proper planning,', role: 'modifier', keep: false },
            { text: 'this project', role: 'subject', keep: true },
            { text: 'could fail', role: 'verb', keep: true },
            { text: 'completely', role: 'modifier', keep: false },
            { text: 'within months.', role: 'modifier', keep: false },
          ],
          result: 'this project could fail.',
          guide: '수식어 제거 → "this project could fail." — 1형식. could = 약한 가능성.',
        },
        {
          chunks: [
            { text: 'In the coming years,', role: 'modifier', keep: false },
            { text: 'governments', role: 'subject', keep: true },
            { text: 'must address', role: 'verb', keep: true },
            { text: 'the issue', role: 'object', keep: true },
            { text: 'of climate change', role: 'modifier', keep: false },
            { text: 'more seriously.', role: 'modifier', keep: false },
          ],
          result: 'governments must address the issue.',
          guide: '수식어 제거 → "governments must address the issue." — 3형식. must = 강한 의무.',
        },
        {
          chunks: [
            { text: 'The scientist', role: 'subject', keep: true },
            { text: 'who led the study', role: 'modifier', keep: false },
            { text: 'should present', role: 'verb', keep: true },
            { text: 'the findings', role: 'object', keep: true },
            { text: 'at the conference', role: 'modifier', keep: false },
            { text: 'next month.', role: 'modifier', keep: false },
          ],
          result: 'The scientist should present the findings.',
          guide: '관계사절 + 전치사구 제거 → "The scientist should present the findings." — 3형식. should = 권고.',
        },
      ],

      quiz: [
        {
          q: '조동사 다음에 오는 동사의 형태는?',
          opts: ['과거형', '동사원형(기본형)', '-ing형', '과거분사(p.p.)'],
          ans: 1,
          exp: '조동사 뒤에는 반드시 동사원형. "can go", "must study", "will finish" — 변형 없이 원형으로.',
        },
        {
          q: '"must not"과 "don\'t have to"의 차이는?',
          opts: [
            '둘 다 "해서는 안 된다"는 뜻이다',
            'must not = 해서는 안 된다(금지) / don\'t have to = 안 해도 된다(불필요)',
            '둘 다 "안 해도 된다"는 뜻이다',
            'don\'t have to가 더 강한 금지다',
          ],
          ans: 1,
          exp: 'must not = 금지(하면 안 된다), don\'t have to = 불필요(안 해도 된다). 완전히 다른 뜻입니다.',
        },
        {
          q: '"It can\'t be true."의 뜻으로 가장 알맞은 것은?',
          opts: [
            '그것은 사실이 아닐 수도 있다.',
            '그것은 사실일 리가 없다.',
            '그것은 사실이어서는 안 된다.',
            '그것은 사실일 수 없다고 규정한다.',
          ],
          ans: 1,
          exp: 'can\'t be = 강한 부정 확신, "~일 리가 없다". "아닐 수도 있다"(may not be)와는 전혀 다른 강도입니다.',
        },
        {
          q: '"She must be exhausted."에서 must의 뜻은?',
          opts: ['해야 한다 (의무)', '틀림없이 ~일 것이다 (추측)', '할 수 있다 (능력)', '해도 된다 (허가)'],
          ans: 1,
          exp: 'must + be = 강한 추측. "그녀는 틀림없이 지쳐 있을 것이다." 의무가 아닌 추측으로 읽습니다.',
        },
        {
          q: '"You don\'t need to apologize."의 뜻은?',
          opts: [
            '사과해서는 안 된다.',
            '사과할 필요가 없다.',
            '반드시 사과해야 한다.',
            '사과하는 게 좋을 것이다.',
          ],
          ans: 1,
          exp: 'don\'t need to = ~할 필요가 없다. don\'t have to와 같은 뜻. 금지가 아니라 "안 해도 된다"입니다.',
        },
        {
          q: '"You had better leave now."의 뉘앙스는?',
          opts: [
            '지금 떠나도 좋아요 (허가)',
            '지금 떠나야 할 것 같아요 (부드러운 권고)',
            '지금 떠나는 게 좋을 거야, 안 그러면… (경고)',
            '지금 떠날 것이다 (예측)',
          ],
          ans: 2,
          exp: 'had better = 강한 권고 + 경고. "그러지 않으면 좋지 않을 것"이라는 암묵적 위협이 담겨 있습니다.',
        },
        {
          q: '다음 문장에서 조동사의 의미를 고르세요.\n"You should see a doctor about that cough."',
          opts: ['ability', 'permission', 'advice', 'strong obligation'],
          ans: 2,
          exp: '"should see"는 권고·조언의 의미입니다. must(강한 의무)보다 부드럽게 "~하는 게 좋겠다"는 뉘앙스입니다.',
        },
        {
          q: '다음 문장에서 밑줄 친 조동사의 의미를 고르세요.\n"The rumor can\'t be true — I saw him this morning."',
          opts: ['~할 수 없다 (능력 부정)', '~일 리가 없다 (강한 부정 확신)', '~해서는 안 된다 (금지)', '~할 필요가 없다 (불필요)'],
          ans: 1,
          exp: '"can\'t be"는 강한 부정 확신으로 "~일 리가 없다"는 뜻입니다. "아닐 수도 있다"(may not be)와 강도가 전혀 다릅니다.',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 2-4: 동사가 뒤집어진다 — 수동태
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L2_4',
      title: '동사가 뒤집어진다 — 수동태',
      done: false,

      vocab: [
        { word: 'be discovered', meaning: '발견되다',  example: '백신이 발견되었다.' },
        { word: 'be written',    meaning: '쓰여지다',  example: '편지는 쓰여졌다 그에 의해.' },
        { word: 'be announced',  meaning: '발표되다',  example: '결과가 발표되었다.' },
        { word: 'be built',      meaning: '지어지다',  example: '다리는 지어졌다 100년 전에.' },
      ],

      steps: [
        `지금까지 배운 문장은 모두<br>주어가 무언가를 "하는" 문장이었습니다.<br><br><div class="step-sentence"><mark class="s">나는</mark> <mark class="v">먹는다</mark> <mark class="o">사과를</mark>. — 내가 행동</div><br>이것을 <strong>능동태</strong>라고 합니다.<br><br>그런데 뒤집어 보면 어떨까요?`,

        `<div class="step-sentence"><mark class="s">사과는</mark> <mark class="v">먹혀진다</mark> <span class="tok-mod">나에 의해</span>.</div><br>이번에는 사과가 주어입니다.<br>사과가 행동을 당하고 있어요.<br><br>이것을 <strong>수동태</strong>라고 합니다.<br>당하는 입장에서 문장을 쓴 것입니다..</div><br>This time, the apple is the subject.<br>The apple is receiving the action.<br><br>This is called the <strong>passive voice</strong>.<br>The sentence is written from the perspective of the one being acted upon.</span>`,

        `수동태 형태:<br><br><strong>be동사 + 과거분사(p.p.)</strong><br><br>is written — 쓰여진다<br>was discovered — 발견되었다<br>was built — 지어졌다<br>is announced — 발표된다<br><br>be동사의 시제가 문장의 시제를 담당합니다.`,

        `예문으로 볼게요.<br><br><div class="step-sentence">능동: <mark class="s">Hemingway</mark> <mark class="v">wrote</mark> <mark class="o">this novel.</mark></div><div class="step-sentence">수동: <mark class="s">This novel</mark> <mark class="v">was written</mark> <span class="tok-mod">by Hemingway.</span></div><br>능동의 목적어 → 수동의 주어<br>능동의 주어 → by + 행위자 (생략 가능)</div><br>Active object → Passive subject<br>Active subject → by + agent (can be omitted)</span>`,

        `by + 행위자는 생략되는 경우가 많습니다.<br><br>행위자를 모르거나, 밝히지 않아도 될 때.<br><br><div class="step-sentence">The bridge <mark class="v">was built</mark> <span class="tok-mod">in 1920.</span></div>누가 지었는지 중요하지 않아요.<br><br><div class="step-sentence">The results <mark class="v">were announced</mark> <span class="tok-mod">at the conference.</span></div>누가 발표했는지보다 발표된 사실이 중요합니다.</div>Who built it doesn't matter.<br><br><div class="step-sentence">The results <mark class="v">were announced</mark> <span class="tok-mod">at the conference.</span></div>The fact that they were announced matters more than who announced them.</span>`,

        `수동태가 많이 쓰이는 글: 뉴스·논문·보고서<br><br>독해에서 수동태가 자주 나오는 이유:<br>객관성을 강조하고 싶을 때,<br>행위자보다 대상이 더 중요할 때 씁니다.<br><br><div class="step-sentence">The vaccine <mark class="v">was developed</mark> <span class="tok-mod">in record time.</span></div>누가 개발했는지보다 개발되었다는 사실이 중요.</div>The fact that it was developed matters more than who developed it.</span>`,

        `조동사 + 수동태:<br><br><strong>조동사 + be + p.p.</strong><br><br><div class="step-sentence">This problem <mark class="v">can be solved</mark>.</div>이 문제는 해결될 수 있다.<br><br><div class="step-sentence">The report <mark class="v">must be submitted</mark> <span class="tok-mod">by Friday.</span></div>보고서는 금요일까지 제출되어야 한다.</div>The report must be submitted by Friday.</span>`,

        `독해 전략 — be + p.p. 패턴 인식.<br><br>be동사 뒤에 과거분사(-ed 또는 불규칙 p.p.)가<br>보이면 → <strong>수동태</strong>로 읽으세요.<br><br>was written = 쓰여졌다<br>is known = 알려져 있다<br>has been discovered = 발견되어왔다 (완료+수동)<br><br>당하는 입장에서 해석하면 됩니다.`,

        `이제 직접 확인해보겠습니다.<br><br>수동태 동사를 탭하세요.`,
      ],

      dissection: [
        {
          sentence: ['The vaccine', 'was developed', 'by a team of scientists', 'in 2020.'],
          roles:    ['subject', 'verb', 'modifier', 'modifier'],
          task: 'verb', taskLabel: '수동태 동사를 탭하세요',
          hint: '"was + developed(p.p.)" = 개발되었다. be + p.p. = 수동태.',
          ok: '맞아요. "was developed"가 수동태 동사. 뼈대: The vaccine was developed. — 1형식(수동).',
        },
        {
          sentence: ['The letter', 'was written', 'carefully', 'by her grandfather.'],
          roles:    ['subject', 'verb', 'modifier', 'modifier'],
          task: 'modifier', taskLabel: '"by 행위자" 전치사구를 탭하세요',
          hint: '"by her grandfather"는 수동태의 행위자를 나타내는 전치사구입니다.',
          ok: '맞아요. "by her grandfather"는 수식어(전치사구). 뼈대: The letter was written.',
        },
        {
          sentence: ['This discovery', 'can be applied', 'to many fields.'],
          roles:    ['subject', 'verb', 'modifier'],
          task: 'form',
          taskLabel: '뼈대의 형식은?',
          formOpts: ['1형식', '2형식', '3형식', '4형식', '5형식'],
          ans: 0,
          hint: '"can be applied" = 조동사 + 수동태. "to many fields"는 전치사구. 뼈대: This discovery can be applied.',
          ok: '맞아요. This discovery can be applied. — 1형식(수동). 목적어가 없어요.',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: 'In 1905,', role: 'modifier', keep: false },
            { text: 'the theory of relativity', role: 'subject', keep: true },
            { text: 'was published', role: 'verb', keep: true },
            { text: 'for the first time', role: 'modifier', keep: false },
            { text: 'by Einstein.', role: 'modifier', keep: false },
          ],
          result: 'the theory of relativity was published.',
          guide: '수식어 제거 → "the theory of relativity was published." — 1형식(수동). be + p.p. 패턴.',
        },
        {
          chunks: [
            { text: 'The results', role: 'subject', keep: true },
            { text: 'of the study', role: 'modifier', keep: false },
            { text: 'were announced', role: 'verb', keep: true },
            { text: 'to the public', role: 'modifier', keep: false },
            { text: 'at the conference', role: 'modifier', keep: false },
            { text: 'last week.', role: 'modifier', keep: false },
          ],
          result: 'The results were announced.',
          guide: '전치사구 제거 → "The results were announced." — 1형식(수동).',
        },
      ],

      quiz: [
        {
          q: '수동태 문장의 형태는?',
          opts: [
            'have + 동사원형',
            'be동사 + 과거분사(p.p.)',
            '조동사 + 동사원형',
            'be동사 + 동사원형-ing',
          ],
          ans: 1,
          exp: '수동태 = be + p.p. be동사의 시제로 현재/과거를 나타냅니다.',
        },
        {
          q: '"The book was written by Tolstoy." — 능동태로 바꾸면?',
          opts: [
            'Tolstoy wrote the book.',
            'The book wrote Tolstoy.',
            'Tolstoy was written the book.',
            'The book has written by Tolstoy.',
          ],
          ans: 0,
          exp: '수동의 주어(The book) → 능동의 목적어. by 행위자(Tolstoy) → 능동의 주어.',
        },
        {
          q: '"This theory can be applied to various fields." — 뜻은?',
          opts: [
            '이 이론은 다양한 분야를 적용할 수 있다.',
            '이 이론은 다양한 분야에 적용될 수 있다.',
            '이 이론은 다양한 분야에 적용해야 한다.',
            '이 이론은 다양한 분야에 적용되었다.',
          ],
          ans: 1,
          exp: '"can be applied" = 조동사(can) + 수동태(be applied). "적용될 수 있다".',
        },
        {
          q: '다음 문장에서 수동태 동사를 고르세요.\n"The new bridge was built by a famous architect."',
          opts: ['built', 'was built', 'was', 'by a famous architect'],
          ans: 1,
          exp: '"was built"는 be동사(was) + 과거분사(built)로 이루어진 수동태입니다. "지어졌다"는 뜻입니다.',
        },
        {
          q: '다음 문장의 by 이하를 없앤 뼈대를 고르세요.\n"The speech was delivered by the president at the ceremony."',
          opts: [
            'The speech was delivered.',
            'The president delivered the speech.',
            'The speech delivered.',
            'was delivered by the president.',
          ],
          ans: 0,
          exp: '수동태에서 "by + 행위자"와 전치사구는 수식어입니다. 뼈대는 "The speech was delivered." — 1형식(수동).',
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // 레슨 2-5: 실전 — 변신한 동사 꿰뚫기
    // ══════════════════════════════════════════════════════════════
    {
      id: 'L2_5',
      title: '실전 — 변신한 동사 꿰뚫기',
      done: false,

      vocab: [
        { word: 'have been studied', meaning: '연구되어왔다',   example: '이 현상은 연구되어왔다 오랫동안.' },
        { word: 'could lead to',     meaning: '이어질 수 있다', example: '이것이 돌파구로 이어질 수 있다.' },
        { word: 'were found',        meaning: '발견되었다',     example: '증거가 발견되었다 현장에서.' },
        { word: 'has become',        meaning: '~이 되어왔다',   example: '그것은 문제가 되어왔다.' },
      ],

      steps: [
        `이제 배운 것을 전부 꺼내야 할 때입니다.<br><br>실제 독해 지문에서는<br>시제 변화 + 완료형 + 조동사 + 수동태가<br>동시에 나타납니다.<br><br>두려워할 필요 없습니다.<br>패턴이 보이면 됩니다.`,

        `패턴 인식 훈련.<br><br><strong>-ed (또는 불규칙)</strong> → 과거형<br><strong>be + -ing</strong> → 진행형<br><strong>have/has/had + p.p.</strong> → 완료형<br><strong>조동사 + 동사원형</strong> → 조동사형<br><strong>be + p.p.</strong> → 수동태<br><br>이 다섯 패턴을 빠르게 잡을 수 있으면<br>독해가 한 단계 열립니다.`,

        `실전 문장 1.<br><br><div class="step-sentence">The discovery <span class="tok-mod">[that shocked the world]</span> <mark class="v">was made</mark> <span class="tok-mod">[by a young researcher]</span> <span class="tok-mod">[in a small lab].</span></div><br>관계사절 + 전치사구 2개 제거<br>수동태 동사: was made<br>뼈대: The discovery was made. — 1형식(수동) <mark class="v">was made</mark> <span class="tok-mod">[by a young researcher]</span> <span class="tok-mod">[in a small lab].</span></div><br>Remove relative clause + 2 prepositional phrases<br>Passive verb: was made<br>Skeleton: The discovery was made. — Type 1 (passive)</span>`,

        `실전 문장 2.<br><br><div class="step-sentence">Scientists <mark class="v">have been studying</mark> this phenomenon <span class="tok-mod">for decades</span>, but they <mark class="v">have not yet found</mark> a clear explanation.</div><br>have been studying = 완료 + 진행형 (연구해오고 있다)<br>have not yet found = 완료형 부정 (아직 찾지 못했다)<br>두 절이 but으로 연결된 구조입니다., but they <mark class="v">have not yet found</mark> a clear explanation.</div><br>have been studying = perfect + progressive (have been studying)<br>have not yet found = perfect negative (have not yet found)<br>Two clauses connected by "but."</span>`,

        `실전 문장 3.<br><br><div class="step-sentence">The policy <span class="tok-mod">[that was introduced last year]</span> <mark class="v">could significantly reduce</mark> <mark class="o">carbon emissions</mark> <span class="tok-mod">[in the coming decades].</span></div><br>관계사절 + 전치사구 제거<br>조동사형 동사: could reduce<br>뼈대: The policy could reduce carbon emissions. — 3형식 <mark class="v">could significantly reduce</mark> <mark class="o">carbon emissions</mark> <span class="tok-mod">[in the coming decades].</span></div><br>Remove relative clause + prepositional phrase<br>Modal verb: could reduce<br>Skeleton: The policy could reduce carbon emissions. — Type 3</span>`,

        `동사 패턴이 보이면 길이는 문제가 아닙니다.<br><br>문장이 길어도:<br>① 동사 패턴 인식 (시제/완료/조동사/수동)<br>② 수식어 덩어리 제거<br>③ 뼈대 = 주어 + 동사 (+ 목적어/보어)<br><br>이 세 단계로 어떤 문장도 읽어낼 수 있습니다.`,

        `이제 직접 도전해보겠습니다.<br><br>변신한 동사를 찾고<br>형식을 골라보세요.`,
      ],

      dissection: [
        {
          sentence: ['The medicine', 'has been tested', 'on thousands of patients', 'worldwide.'],
          roles:    ['subject', 'verb', 'modifier', 'modifier'],
          task: 'verb', taskLabel: '완료+수동 동사를 탭하세요',
          hint: '"has been tested" = 현재완료 + 수동태. "테스트되어왔다".',
          ok: '맞아요. "has been tested" — 완료수동형. 뼈대: The medicine has been tested. — 1형식.',
        },
        {
          sentence: ['The researcher', 'who made the breakthrough', 'will be awarded', 'the prize.'],
          roles:    ['subject', 'modifier', 'verb', 'object'],
          task: 'modifier', taskLabel: '관계사절(수식어)을 탭하세요',
          hint: '"who made the breakthrough"는 관계사절. 뼈대 동사는 "will be awarded"입니다.',
          ok: '맞아요. 뼈대: The researcher will be awarded the prize. — 3형식(수동).',
        },
        {
          sentence: ['The report', 'that was released yesterday', 'could change', 'government policy.'],
          roles:    ['subject', 'modifier', 'verb', 'object'],
          task: 'form',
          taskLabel: '장신구 제거 후 뼈대의 형식은?',
          formOpts: ['1형식', '2형식', '3형식', '4형식', '5형식'],
          ans: 2,
          hint: '"that was released yesterday"는 관계사절. 뼈대: The report could change government policy.',
          ok: '맞아요. The report could change government policy. — 3형식. 조동사형.',
        },
      ],

      skeleton: [
        {
          chunks: [
            { text: 'For centuries,', role: 'modifier', keep: false },
            { text: 'this phenomenon', role: 'subject', keep: true },
            { text: 'has been studied', role: 'verb', keep: true },
            { text: 'by scholars', role: 'modifier', keep: false },
            { text: 'around the world.', role: 'modifier', keep: false },
          ],
          result: 'this phenomenon has been studied.',
          guide: '수식어 제거 → "this phenomenon has been studied." — 완료+수동. 1형식.',
        },
        {
          chunks: [
            { text: 'The company', role: 'subject', keep: true },
            { text: 'that was founded in 2010', role: 'modifier', keep: false },
            { text: 'has become', role: 'verb', keep: true },
            { text: 'one of the most successful startups', role: 'complement', keep: true },
            { text: 'in the industry.', role: 'modifier', keep: false },
          ],
          result: 'The company has become one of the most successful startups.',
          guide: '관계사절 + 전치사구 제거 → "The company has become..." — 현재완료. 2형식.',
        },
      ],

      quiz: [
        {
          q: '"The results have been published in a journal." — "have been published"는?',
          opts: [
            '단순 현재형',
            '과거진행형',
            '현재완료 + 수동태',
            '조동사 + 능동태',
          ],
          ans: 2,
          exp: 'have been published = have(완료) + been(be의 p.p.) + published(p.p.) = 현재완료 수동태.',
        },
        {
          q: '"The policy could significantly reduce carbon emissions." — 뼈대는?',
          opts: [
            'The policy could reduce',
            'The policy could reduce carbon emissions',
            'could reduce carbon emissions significantly',
            'The policy reduce emissions',
          ],
          ans: 1,
          exp: '"significantly"는 수식어. 뼈대는 "The policy could reduce carbon emissions." — 3형식.',
        },
        {
          q: 'UNIT 2에서 배운 동사 변신 패턴이 아닌 것은?',
          opts: [
            'be + -ing (진행형)',
            'have + p.p. (완료형)',
            'be + p.p. (수동태)',
            '명사 + 형용사 (보어형)',
          ],
          ans: 3,
          exp: '"명사 + 형용사"는 2형식 문장 구조이지, 동사 변신 패턴이 아닙니다.',
        },
        {
          q: '다음 문장의 동사 패턴을 가장 정확하게 설명한 것은?\n"The phenomenon has been studied by scientists for decades."',
          opts: [
            'simple past passive',
            'present perfect active',
            'present perfect passive',
            'past progressive passive',
          ],
          ans: 2,
          exp: '"has been studied"는 have(완료) + been(be의 p.p.) + studied(p.p.)로 현재완료 수동태입니다. 과거부터 지금까지 연구되어 왔음을 나타냅니다.',
        },
        {
          q: '다음 문장에서 뼈대(주어 + 동사 + 목적어)를 고르세요.\n"The report that was released last month could significantly change government policy."',
          opts: [
            'The report could change policy.',
            'The report could significantly change government policy.',
            'The report that was released could change.',
            'could change government policy significantly.',
          ],
          ans: 1,
          exp: '"that was released last month"는 관계사절(수식어), "significantly"는 부사(수식어)입니다. 뼈대는 "The report could change government policy." — 3형식.',
        },
      ],
    },

  ] // end lessons
}; // end UNIT2
