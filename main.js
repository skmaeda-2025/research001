const languageOptions = [
 { code: "EN-US", label: "🇺🇸 English (US)" },
  { code: "EN-GB", label: "🇬🇧 English (UK)" },
  { code: "EN-AU", label: "🇦🇺 English (Australia)" },
  { code: "EN-CA", label: "🇨🇦 English (Canada)" },
  { code: "EN-NZ", label: "🇳🇿 English (New Zealand)" },
  { code: "EN-OT", label: "🇬🇧 English (Other)" },
  { code: "ZH-CN", label: "🇨🇳 Chinese (Mandarin, China)" },
  { code: "ZH-TW", label: "🇹🇼 Chinese (Mandarin, Taiwan)" },
  { code: "ZH-HK", label: "🇭🇰 Chinese (Cantonese, Hong Kong)" },
  { code: "ZH-MO", label: "🇲🇴 Chinese (Macau)" },
  { code: "HI", label: "🇮🇳 Hindi" },
  { code: "PA", label: "🇮🇳 Punjabi" },
  { code: "BN", label: "🇧🇩 Bengali (Bangladesh)" },
  { code: "UR", label: "🇵🇰 Urdu" },
  { code: "ID", label: "🇮🇩 Indonesian" },
  { code: "MS", label: "🇲🇾 Malay (Malaysia)" },
  { code: "TH", label: "🇹🇭 Thai" },
  { code: "VI", label: "🇻🇳 Vietnamese" },
  { code: "TL", label: "🇵🇭 Tagalog (Philippines)" },
  { code: "KO", label: "🇰🇷 Korean" },
  { code: "JA", label: "🇯🇵 Japanese" },
  { code: "AR", label: "🇸🇦 Arabic" },
  { code: "FA", label: "🇮🇷 Persian (Farsi)" },
  { code: "TR", label: "🇹🇷 Turkish" },
  { code: "RU", label: "🇷🇺 Russian" },
  { code: "DE", label: "🇩🇪 German" },
  { code: "FR", label: "🇫🇷 French" },
  { code: "FR-NC", label: "🇳🇨 French (New Caledonia)" },
  { code: "IT", label: "🇮🇹 Italian" },
  { code: "ES-ES", label: "🇪🇸 Spanish (Spain)" },
  { code: "ES-MX", label: "🇲🇽 Spanish (Mexico)" },
  { code: "ES-AR", label: "🇦🇷 Spanish (Argentina)" },
  { code: "ES-CL", label: "🇨🇱 Spanish (Chile)" },
  { code: "ES-PY", label: "🇵🇾 Spanish (Paraguay)" },
  { code: "ES-CO", label: "🇨🇴 Spanish (Colombia)" },
  { code: "ES-PE", label: "🇵🇪 Spanish (Peru)" },
  { code: "PT-BR", label: "🇧🇷 Portuguese (Brazil)" },
  { code: "PT-PT", label: "🇵🇹 Portuguese (Portugal)" },
  { code: "NL", label: "🇳🇱 Dutch" },
  { code: "PL", label: "🇵🇱 Polish" },
  { code: "EL", label: "🇬🇷 Greek" },
  { code: "HU", label: "🇭🇺 Hungarian" },
  { code: "RO", label: "🇷🇴 Romanian" },
  { code: "SK", label: "🇸🇰 Slovak" },
  { code: "SV", label: "🇸🇪 Swedish" },
  { code: "BG", label: "🇧🇬 Bulgarian" },
  { code: "UK", label: "🇺🇦 Ukrainian" },
  { code: "LT", label: "🇱🇹 Lithuanian" },
  { code: "LV", label: "🇱🇻 Latvian" },
  { code: "ET", label: "🇪🇪 Estonian" },
  { code: "SL", label: "🇸🇮 Slovenian" },
  { code: "FI", label: "🇫🇮 Finnish" },
  { code: "CS", label: "🇨🇿 Czech" },
  { code: "DA", label: "🇩🇰 Danish" },
  { code: "HE", label: "🇮🇱 Hebrew" },
  { code: "NB", label: "🇳🇴 Norwegian" },
  { code: "AF", label: "🇿🇦 Afrikaans" },
  { code: "SW", label: "🇰🇪 Swahili" },
  { code: "MN", label: "🇲🇳 Mongolian" },
  { code: "KM", label: "🇰🇭 Khmer (Cambodia)" },
  { code: "LO", label: "🇱🇦 Lao" },
  { code: "SI-LK", label: "🇱🇰 Sinhala (Sri Lanka)" },
  { code: "NE", label: "🇳🇵 Nepali" },
  { code: "OTHER", label: "🌍 Other" }
];

function makeLanguageDropdown(questionText, responseName) {
  const options = languageOptions
    .map(l => `<option value="${l.code}">${l.label}</option>`)
    .join('');
  return {
    type: jsPsychSurveyHtmlForm,
    preamble: () => `<p>${questionText}</p>`,
    html: () => `
      <label>
        <select name="${responseName}" id="${responseName}" required style="font-size: 1em; padding:.5em; width: 100%;">
          <option value="" disabled selected>Select your language</option>
          ${options}
        </select>
      </label>
      <br><br>
      <label id="${responseName}_other_container" style="display:none;">
        Please specify: <input type="text" name="${responseName}_other" style="width:100%;" />
      </label>
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          const select = document.getElementById('${responseName}');
          const otherBox = document.getElementById('${responseName}_other_container');
          if (select && otherBox) {
            select.addEventListener('change', function() {
              otherBox.style.display = (select.value === 'OTHER') ? 'block' : 'none';
            });
          }
        });
      </script>
    `,
    data: { question: responseName }
  };
}

// This built-in method is part of the Web Crypto API, replaced by const participantID = crypto.randomUUID();
function generateUUID() {
  // Generate a random UUID v4
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const jsPsych = initJsPsych({});
const participantID = generateUUID();
// Tag all data with participant ID
jsPsych.data.addProperties({ participant_id: participantID });

let lang = 'en';       // will be set based on language selection
let isNative = false;

//sample audios are mp3 files and real ones will be wav files.
const audioFiles = [
  { id: "trial01", audio: "assets/audio/alpha1.mp3" },
  { id: "trial02", audio: "assets/audio/beta2.mp3" },
  { id: "trial03", audio: "assets/audio/gamma3.mp3" },
  { id: "trial04", audio: "assets/audio/delta4.mp3" },
  { id: "trial05", audio: "assets/audio/epsilon5.mp3" },
  { id: "trial06", audio: "assets/audio/zeta6.mp3" },
  { id: "trial07", audio: "assets/audio/eta7.mp3" },
  { id: "trial08", audio: "assets/audio/theta8.mp3" },
  { id: "trial09", audio: "assets/audio/iota9.mp3" },
  { id: "trial10", audio: "assets/audio/kappa10.mp3" },
];

// Multi-language content
const consentText_en = `<div class="consent-container">
<h2>Informed Consent</h2>
<p>This research is a study about language and speech perception. In this study, you will listen to recordings of Japanese speech and answer questions about them. The study will take approximately 10 minutes to complete.</p>
<p>Your participation is voluntary. You may decline to answer any question or withdraw from the study at any time without penalty. Your responses will be recorded anonymously and kept confidential. There are no known risks or direct benefits to you from participating in this study.</p>
<p>By clicking "I Agree" below, you indicate that you have read and understood the above information and voluntarily agree to participate in this study.</p>
</div>`;

const consentText_ja = `<div class="consent-container">
<h2>インフォームド・コンセント</h2>
<p>本研究は言語と音声知覚に関する研究です。本研究では、日本語の音声録音を聞いて、それに関する質問に答えていただきます。所要時間は約10分です。</p>
<p>本研究への参加は自由です。実験はいつでも途中で中止することができます。回答は匿名で記録され、機密は厳守されます。本研究への参加による既知のリスクや直接的な利益はありません。</p>
<p>上記の内容を読み理解した上で、本研究への参加に同意しますか？ 下の「同意する」をクリックすると、研究への参加に同意したことになります。</p>
</div>`;

const consentText_sc = `<div class="consent-container">
<h2>知情同意</h2>
<p>本研究是一项关于语言和语音感知的研究。在本研究中，您将听一些日语语音的录音并回答相关问题。整个研究约需10分钟完成。</p>
<p>您的参与完全是自愿的。在研究的任何阶段，您可以随时退出而无需提供原因。您的回答将被匿名记录并严格保密。参与本研究没有已知的风险或直接利益。</p>
<p>请您在阅读并理解以上信息后，再决定是否同意参加本研究。如果您同意参加，请点击下方的“同意”。点击“同意”即表示您自愿同意参加本研究。</p>
</div>`;

const consentText_tc = `<div class="consent-container">
<h2>知情同意書</h2>
<p>本研究是一項關於語言和語音感知的研究。在本研究中，您將聆聽一些日語語音的錄音並回答相關問題。整個研究約需10分鐘完成。</p>
<p>您的參與完全是自願的。在研究的任何階段，您可以隨時退出而無需提供原因。您的回答將以匿名方式記錄並嚴格保密。參與本研究沒有已知的風險或直接利益。</p>
<p>請您在閱讀並理解以上資訊後，再決定是否同意參與本研究。如果您同意參加，請點擊下方的「同意」。點擊「同意」即表示您自願同意參與本研究。</p>
</div>`;

const consentText_ko = `<div class="consent-container">
<h2>연구 참여 동의서</h2>
<p>본 연구는 언어와 음성 지각에 관한 연구입니다. 본 연구에서 참가자는 일본어 음성 녹음을 듣고 관련 질문에 답하게 됩니다. 연구 진행에는 약 10분이 소요됩니다.</p>
<p>연구 참여는 전적으로 자발적입니다. 연구 도중 언제든지 자유롭게 참여를 중단할 수 있습니다. 응답 내용은 익명으로 기록되며 비밀이 보장됩니다. 본 연구 참여로 인한 알려진 위험이나 직접적인 이익은 없습니다.</p>
<p>위의 내용을 읽고 이해하셨다면 본 연구에 참여하는 것에 동의하시겠습니까? 동의하신다면 아래의 "동의함" 버튼을 눌러주세요. "동의함" 버튼을 누르시면 연구 참여에 동의한 것으로 간주됩니다.</p>
</div>`;

const translations = {
  en: {
    consent: consentText_en,
    consent_accept: "I Agree",
    video_prompt: "Please watch the following instruction video.",
    video_continue: "Continue",
    accent_question: "Did you hear a foreign accent in the Japanese speech?",
    yes: "Yes",
    no: "No",
    adjectives_prompt: "Select up to 3 words that describe your impression:",
    adjectives: ["Friendly", "Confident", "Polite", "Fluent", "Clear", "Natural", "Unfriendly", "Rude", "Unclear", "Unnatural"],
    optional_comment: "Any additional comment about the speaker? (Optional)",
    nativeQ: "Are you a native speaker of Japanese?",
    genderQ: "What is your gender?",
    gender_options: ["Male", "Female", "Other", "Prefer not to say"],
    ageGroupQ: "What is your age group?",
    age_group_options: ["18–24", "25–34", "35–44", "45–54", "55–64", "65+", "Prefer not to say"],
    currentCountryQ: "What country do you currently live in?",
    countriesLivedQ: "Which countries have you lived in for more than 3 months?",
    motherTongueQ: "What is your first language?",
    familyLanguageQ: "What languages are spoken by your family?",
    languageOtherQ: "Do you use any other language(s) besides your first language and Japanese?",
    languageOther_options: ["Yes", "No"],
    languageOtherSelectQ: "If yes, which language(s)?",
    languageOtherFreqQ: "How often do you use those other language(s)?",
    languageFreq_options: [
      "Almost every day",
      "2–3 times per week",
      "Once per week",
      "2–3 times per month",
      "Once per month",
      "Every few months",
      "Rarely or never"
    ],
    usageQ: "How often do you use Japanese?",
    proficiencyQ: "How would you describe your Japanese proficiency?",
    proficiency_options: ["JLPT N5", "JLPT N4", "JLPT N3", "JLPT N2", "JLPT N1", "Basic", "Conversational", "Fluent"],
    musicQ: "Do you have any musical training or experience?",
    music_options: ["No", "Yes (1-5 years)", "Yes (more than 5 years)"],
    final_thanks: "Thank you for your participation! Should you need to reach out to me, click here.",
    finish: "Finish"
  },
  ja: {
  consent: consentText_ja,
  consent_accept: "同意する",
  video_prompt: "次のページで、本実験の回答方法を説明するビデオをご覧ください。",
  video_continue: "次へ",
  accent_question: "この日本語の音声に外国語訛りを感じましたか？",
  yes: "はい",
  no: "いいえ",
  adjectives_prompt: "印象を表す言葉を3つまで選んでください：",
  adjectives: ["親しみやすい", "自信がある", "丁寧", "流暢", "分かりやすい", "自然な", "冷たい", "無礼", "聞き取りにくい", "不自然"],
  optional_comment: "話し手に関するコメントがあれば自由にご記入ください（任意）",
  nativeQ: "あなたは日本語を母語としていますか？",
  genderQ: "性別を教えてください。",
  gender_options: ["男性", "女性", "その他", "回答しない"],
  ageGroupQ: "あなたの年代を選んでください。",
  age_group_options: ["18〜24歳", "25〜34歳", "35〜44歳", "45〜54歳", "55〜64歳", "65歳以上", "回答しない"],
  currentCountryQ: "現在住んでいる国を教えてください。",
  countriesLivedQ: "これまでに3か月以上住んだことのある国を選んでください。",
  motherTongueQ: "母語（最も得意な言語）を教えてください。",
  familyLanguageQ: "ご家族が使用している言語を教えてください。",
  languageOtherQ: "日本語と母語以外に使用できる言語はありますか？",
  languageOther_options: ["はい", "いいえ"],
  languageOtherSelectQ: "「はい」と答えた場合、それらの言語を選んでください。",
  languageOtherFreqQ: "それらの言語をどのくらいの頻度で使用しますか？",
  languageFreq_options: [
    "ほぼ毎日",
    "週に2〜3回",
    "週に1回",
    "月に2〜3回",
    "月に1回",
    "2〜3か月に1回",
    "ほとんど使わない"
  ],
  usageQ: "日本語をどのくらいの頻度で使用しますか？",
  proficiencyQ: "日本語の習熟度はどの程度ですか？",
  proficiency_options: ["JLPT N5", "JLPT N4", "JLPT N3", "JLPT N2", "JLPT N1", "初級", "中級", "上級"],
  musicQ: "音楽の訓練や経験はありますか？",
  music_options: ["いいえ", "はい（1〜5年）", "はい（5年以上）"],
  final_thanks: "ご参加いただき、ありがとうございました。ご質問がある場合はこちらをクリックしてください。",
  finish: "終了"
  },
  sc: {
  consent: consentText_sc,
  consent_accept: "同意",
  video_prompt: "请观看下一页中的说明视频。",
  video_continue: "继续",
  accent_question: "你在这段日语语音中听到外国口音了吗？",
  yes: "是",
  no: "否",
  adjectives_prompt: "请选择最多三个词来描述您的印象：",
  adjectives: ["友好", "自信", "礼貌", "流利", "清晰", "自然", "不友好", "无礼", "不清晰", "不自然"],
  optional_comment: "您对说话者有其他印象吗？请填写（可选）",
  nativeQ: "您的母语是日语吗？",
  genderQ: "您的性别是？",
  gender_options: ["男", "女", "其他", "不愿透露"],
  ageGroupQ: "请选择您的年龄段。",
  age_group_options: ["18–24岁", "25–34岁", "35–44岁", "45–54岁", "55–64岁", "65岁以上", "不愿透露"],
  currentCountryQ: "您目前居住在哪个国家？",
  countriesLivedQ: "您曾在哪些国家居住超过3个月？",
  motherTongueQ: "您的第一语言是什么？",
  familyLanguageQ: "您家人使用的语言有哪些？",
  languageOtherQ: "除了母语和日语，您还会使用其他语言吗？",
  languageOther_options: ["是", "否"],
  languageOtherSelectQ: "如果是，请选择那些语言。",
  languageOtherFreqQ: "您使用这些语言的频率是？",
  languageFreq_options: [
    "几乎每天",
    "每周2–3次",
    "每周1次",
    "每月2–3次",
    "每月1次",
    "每几个月1次",
    "几乎不使用"
  ],
  usageQ: "您使用日语的频率是多少？",
  proficiencyQ: "您如何评价自己的日语水平？",
  proficiency_options: ["JLPT N5", "JLPT N4", "JLPT N3", "JLPT N2", "JLPT N1", "基础", "会话", "流利"],
  musicQ: "您是否接受过音乐训练或有相关经验？",
  music_options: ["没有", "有（1–5年）", "有（超过5年）"],
  final_thanks: "感谢您的参与。如有需要，请点击此处与我们联系。",
  finish: "完成"
  },
  tc: {
  consent: consentText_tc,
  consent_accept: "同意",
  video_prompt: "請觀看下一頁的說明影片。",
  video_continue: "繼續",
  accent_question: "您在這段日語語音中聽到外國口音了嗎？",
  yes: "是",
  no: "否",
  adjectives_prompt: "請選擇最多三個詞來描述您的印象：",
  adjectives: ["友善", "自信", "禮貌", "流利", "清晰", "自然", "不友善", "無禮", "不清晰", "不自然"],
  optional_comment: "若您對說話者有其他印象，請填寫（選填）",
  nativeQ: "您的母語是日語嗎？",
  genderQ: "您的性別是？",
  gender_options: ["男", "女", "其他", "不願透露"],
  ageGroupQ: "請選擇您的年齡範圍。",
  age_group_options: ["18–24歲", "25–34歲", "35–44歲", "45–54歲", "55–64歲", "65歲以上", "不願透露"],
  currentCountryQ: "您目前居住在哪個國家？",
  countriesLivedQ: "您曾在哪些國家居住超過3個月？",
  motherTongueQ: "您的第一語言是什麼？",
  familyLanguageQ: "您家人使用哪些語言？",
  languageOtherQ: "除了日語與母語，您是否會使用其他語言？",
  languageOther_options: ["是", "否"],
  languageOtherSelectQ: "如果是，請選擇那些語言。",
  languageOtherFreqQ: "您使用這些語言的頻率為何？",
  languageFreq_options: [
    "幾乎每天",
    "每週2–3次",
    "每週1次",
    "每月2–3次",
    "每月1次",
    "每幾個月1次",
    "幾乎不使用"
  ],
  usageQ: "您使用日語的頻率是多少？",
  proficiencyQ: "您會如何評價自己的日語程度？",
  proficiency_options: ["JLPT N5", "JLPT N4", "JLPT N3", "JLPT N2", "JLPT N1", "初級", "中級", "上級"],
  musicQ: "您是否有音樂訓練或經驗？",
  music_options: ["沒有", "有（1–5年）", "有（超過5年）"],
  final_thanks: "感謝您的參與。如有需要，請點此聯繫我們。",
  finish: "結束"
  },
  ko: {
  consent: consentText_ko,
  consent_accept: "동의함",
  video_prompt: "다음 페이지에서 안내 영상을 시청하세요.",
  video_continue: "계속",
  accent_question: "이 일본어 음성에서 외국인 억양을 들으셨습니까?",
  yes: "예",
  no: "아니오",
  adjectives_prompt: "인상을 표현하는 단어를 최대 3개 선택하세요:",
  adjectives: ["친근한", "자신감 있는", "예의 바른", "유창한", "분명한", "자연스러운", "불친절한", "무례한", "불분명한", "부자연스러운"],
  optional_comment: "화자에 대한 추가 의견이 있다면 작성해 주세요 (선택 사항)",
  nativeQ: "일본어가 모국어입니까?",
  genderQ: "성별을 알려주세요.",
  gender_options: ["남성", "여성", "기타", "응답하지 않음"],
  ageGroupQ: "연령대를 선택해 주세요.",
  age_group_options: ["18–24세", "25–34세", "35–44세", "45–54세", "55–64세", "65세 이상", "응답하지 않음"],
  currentCountryQ: "현재 거주하고 있는 국가는 어디입니까?",
  countriesLivedQ: "3개월 이상 거주한 국가를 모두 선택해 주세요.",
  motherTongueQ: "당신의 모국어는 무엇입니까?",
  familyLanguageQ: "가족들이 사용하는 언어는 무엇입니까?",
  languageOtherQ: "모국어와 일본어 외에 사용할 수 있는 언어가 있습니까?",
  languageOther_options: ["예", "아니오"],
  languageOtherSelectQ: "있다면 그 언어들을 선택해 주세요.",
  languageOtherFreqQ: "그 언어들을 얼마나 자주 사용합니까?",
  languageFreq_options: [
    "거의 매일",
    "주 2–3회",
    "주 1회",
    "월 2–3회",
    "월 1회",
    "2–3개월에 1회",
    "거의 사용하지 않음"
  ],
  usageQ: "일본어를 얼마나 자주 사용하십니까?",
  proficiencyQ: "일본어 실력을 어떻게 평가하시겠습니까?",
  proficiency_options: ["JLPT N5", "JLPT N4", "JLPT N3", "JLPT N2", "JLPT N1", "초급", "중급", "고급"],
  musicQ: "음악 훈련이나 경험이 있으십니까?",
  music_options: ["없음", "있음 (1–5년)", "있음 (5년 이상)"],
  final_thanks: "참여해 주셔서 감사합니다. 문의사항이 있으시면 여기를 클릭해 주세요.",
  finish: "종료"
  }
};

function makeImpressionTrial() {
  const adjectiveList = translations[lang].adjectives || translations.en.adjectives;
  const shuffled = jsPsych.randomization.shuffle([...adjectiveList]);

  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: () => {
      const checkboxes = shuffled.map(adj => `
        <label style="display:inline-block; width:48%; margin-bottom:.5em;">
          <input type="checkbox" name="impressions" value="${adj}"> ${adj}
        </label>
      `).join('');

      return `
        <div>
          <p style="font-size:1.2em;"><strong>${translations[lang].adjectives_prompt}</strong></p>
          ${checkboxes}
          <br><br>
          <label>${translations[lang].optional_comment || "Optional comment:"}</label><br>
          <textarea id="impression_comment" rows="3" cols="50" placeholder="..."></textarea>
          <p id="error-msg" style="color:red; display:none;">⚠️ Please select 1–3 adjectives to continue.</p>
          <button id="continue-btn" disabled style="margin-top:1em;">${translations[lang].finish || "Next"}</button>
        </div>
      `;
    },
    choices: [],  // disables jsPsych's default button
    on_load: () => {
      const continueBtn = document.getElementById("continue-btn");
      const checkboxes = document.querySelectorAll("input[name='impressions']");
      const errorMsg = document.getElementById("error-msg");

      function validate() {
        const checked = Array.from(checkboxes).filter(cb => cb.checked);
        if (checked.length >= 1 && checked.length <= 3) {
          continueBtn.disabled = false;
          errorMsg.style.display = "none";
        } else {
          continueBtn.disabled = true;
          errorMsg.style.display = "block";
        }
      }

      checkboxes.forEach(cb => cb.addEventListener("change", validate));
      validate(); // initial validation

      continueBtn.addEventListener("click", () => {
        const selected = Array.from(document.querySelectorAll("input[name='impressions']:checked")).map(cb => cb.value);
        const comment = document.getElementById("impression_comment")?.value || "";
        const stim_id = jsPsych.timelineVariable("id");

        jsPsych.finishTrial({
          impressions: selected,
          impression_comment: comment,
          adjective_order: shuffled,
          stim_id,
          phase: "per_audio"
        });
      });
    },
    data: {
      phase: "impression",
      stim_id: () => jsPsych.timelineVariable("id")
    }
  };
}

// Timeline components
const languageSelector = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<p>Please select your language:<br/>
    言語を選択してください。<br/>
    请选择您的语言。<br/>
    請選擇您的語言。<br/>
    사용할 언어를 선택해 주세요.</p>`,
  choices: ["English", "日本語", "简体中文", "繁體中文", "한국어"],
  on_finish: function(data) {
    const choice = data.response;
    if (choice === 0) lang = 'en';
    if (choice === 1) lang = 'ja';
    if (choice === 2) lang = 'sc';
    if (choice === 3) lang = 'tc';
    if (choice === 4) lang = 'ko';
  }
};

const consentTrial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function() { return translations[lang].consent; },
  choices: function() { return [ translations[lang].consent_accept ]; }
};

// Preload all media (audio/video) after consent
const preloadTrial = {
  type: jsPsychPreload,
  audio: audioFiles.map(a => a.audio),
  video: ['assets/video/dummy_instructions.mp4']
};

const instructionTextTrial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function () {
    return `
      <div style="text-align: center; max-width: 800px; margin: 0 auto;">
        <p style="font-size: 1.1em;">
          ${translations[lang].video_prompt}
        </p>
      </div>
    `;
  },
  choices: function () {
    return [translations[lang].video_continue];
  }
};

const instructionVideoTrial = {
  type: jsPsychVideoButtonResponse,
  stimulus: ['assets/video/dummy_instructions.mp4'],
  prompt: "",
  choices: [translations[lang].video_continue],
  response_allowed_while_playing: false,
  width: 800,
  height: 450
};

// Pre-test instruction
const preTestMessage = {
type: jsPsychHtmlButtonResponse,
stimulus: function () {
return `
      <div style="text-align: left; max-width: 700px; margin: 0 auto;">
        <p>You are about to begin the actual test. There are 10 audio clips in total. Please listen carefully and answer honestly.</p>
        <p>これから本番のテストが始まります。音声は全部で10個あります。よく聞いて、正直に答えてください。</p>
        <p>您即将开始正式测试。共有10个音频片段。请认真聆听并如实作答。</p>
        <p>您即將開始正式測試。共有10個音訊片段。請仔細聆聽並誠實作答。</p>
        <p>이제 본 테스트가 시작됩니다. 총 10개의 오디오가 재생됩니다. 주의 깊게 듣고 솔직하게 응답해 주세요.</p>
      </div>
    `;
  },
choices: function () { return ["Start Test"] }
};

const play_audio = {
  type: jsPsychAudioKeyboardResponse,
  stimulus: () => jsPsych.timelineVariable("audio"),  // or "file" if you use that key
  prompt: `<p style="font-size: 1.2em;">🔊 再生中 Playing audio 播放中 재생 중 🔊</p>`,
  choices: "NO_KEYS",
  trial_ends_after_audio: true,
  data: {
    phase: "stimulus",
    stim_id: jsPsych.timelineVariable("id")
  }
};

const accentQuestionTrial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: () => `<p>${translations[lang].accent_question}</p>`,
  choices: [translations[lang].yes, translations[lang].no],
  data: {
    phase: "accent_judgment",
    stim_id: jsPsych.timelineVariable("id")
  }
};

// Background questionnaire
const nativeQuestionTrial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: () => `<p>${translations[lang].nativeQ}</p>`,
  choices: () => [translations[lang].yes, translations[lang].no],
  data: { question: "is_native" }
};

const motherTongueTrial = makeLanguageDropdown(translations[lang].motherTongueQ, 'mother_tongue');

const l2LanguageTrial = {
  type: jsPsychSurveyHtmlForm,
  preamble: `<p>Which other language(s) can you speak?</p>`,
  html: () => {
    const options = languageOptions
      .map(l => `<option value="${l.code}">${l.label}</option>`)
      .join('');
    return `
      <label>Select all that apply:</label><br>
      <select name="l2_languages[]" id="l2_languages" multiple size="6" required style="width:100%; padding:.5em;">
        ${options}
      </select>
      <br><br>
      <label id="l2_other_label" style="display:none;">
        Please specify other language(s):<br>
        <input type="text" name="l2_languages_other" style="width:100%;" />
      </label>
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          const select = document.getElementById('l2_languages');
          const otherLabel = document.getElementById('l2_other_label');
          if (select && otherLabel) {
            select.addEventListener('change', () => {
              const values = Array.from(select.selectedOptions).map(opt => opt.value);
              otherLabel.style.display = values.includes('OTHER') ? 'block' : 'none';
            });
          }
        });
      </script>
    `;
  },
  data: { question: 'l2_languages' }
};

const genderTrial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function() { return `<p>${translations[lang].genderQ}</p>`; },
  choices: function() { return translations[lang].gender_options; },
  data: { question: 'gender' }
};

const ageGroups = [
  "18-24", "25-34", "35-44", "45-54", "55-64", "65以上", "回答しない"
];

// const ageTrial = {
//   type: jsPsychSurveyHtmlForm,
//   preamble: () => `<p>${translations[lang].ageQ}</p>`,
//   html: () => {
//     const options = Array.from({ length: 82 }, (_, i) => 18 + i)
//       .map(age => `<option value="${age}">${age}</option>`)
//       .join('');
//     return `
//       <label>
//         <select name="age" required style="font-size: 1em; padding: .5em; width: 100%;">
//           <option value="" disabled selected>Select your age</option>
//           ${options}
//         </select>
//       </label>
//     `;
//   },
//   data: { question: 'age' }
// };

const frequencyOptions = [
  "ほぼ毎日",
  "1週間に2～3回程度",
  "1週間に1回程度",
  "1ヶ月に2～3回程度",
  "1ヶ月に1回程度",
  "2～3ヶ月に1回程度",
  "それ以下の頻度"
];

const musicExperienceOptions = [
  "1年未満",
  "1-3年",
  "3-5年",
  "5年以上"
];



const usageTrial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function() { return `<p>${translations[lang].usageQ}</p>`; },
  choices: function() { return translations[lang].usage_options; },
  data: { question: 'japanese_usage' }
};

const proficiencyTrial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function() { return `<p>${translations[lang].proficiencyQ}</p>`; },
  choices: function() { return translations[lang].proficiency_options; },
  data: { question: 'japanese_proficiency' }
};

const musicTrial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function() { return `<p>${translations[lang].musicQ}</p>`; },
  choices: function() { return translations[lang].music_options; },
  data: { question: 'musical_experience' }
};

// Conditional timelines for native vs non-native questionnaires
const nativeBlock = {
  timeline: [ genderTrial, ageTrial, motherTongueTrial, usageTrial, l2LanguageTrial, musicTrial ],
  conditional_function: () => isNative
};

const nonNativeBlock = {
  timeline: [ genderTrial, ageTrial, motherTongueTrial, proficiencyTrial, usageTrial, l2LanguageTrial, musicTrial ],
  conditional_function: () => !isNative
};

// Final thank-you screen
const thankYouTrial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function() { return `<p>${translations[lang].final_thanks}</p>`; },
  choices: function() { return [ translations[lang].finish ]; },
  on_finish: async function () {
    try {
      const response = await fetch("https://research001-4ba740c5cac1.herokuapp.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsPsych.data.get().json()
      });

      if (!response || !response.ok) {
        throw new Error(`Submission failed with status: ${response?.status}`);
      }
    } catch (error) {
      alert("⚠️ Data submission failed. Saving backup locally.");
      jsPsych.data.get().localSave("csv", "backup.csv");
      console.error("Submission error:", error);
    }
  }
};

// Build and run timeline
const timeline = [];
timeline.push(languageSelector);
timeline.push(consentTrial);
timeline.push(preloadTrial);
timeline.push(instructionTextTrial);
timeline.push(instructionVideoTrial);
timeline.push(preTestMessage);
// updated on 22:07
timeline.push({
  timeline: [
    play_audio,
    accentQuestionTrial,
    makeImpressionTrial()
  ],
  timeline_variables: audioFiles,
  randomize_order: true
});
// timeline.push(mainTrialsLoop);　// removed
timeline.push(nativeQuestionTrial);
timeline.push(nativeBlock);
timeline.push(nonNativeBlock);
timeline.push(thankYouTrial);

jsPsych.run(timeline);
