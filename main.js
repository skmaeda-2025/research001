const countryOptions = [
  { code: "AF", label: "Afghanistan" },
  { code: "AL", label: "Albania" },
  { code: "AR", label: "Argentina" },
  { code: "AU", label: "Australia" },
  { code: "AT", label: "Austria" },
  { code: "BD", label: "Bangladesh" },
  { code: "BE", label: "Belgium" },
  { code: "BR", label: "Brazil" },
  { code: "CA", label: "Canada" },
  { code: "CL", label: "Chile" },
  { code: "CN", label: "China" },
  { code: "CO", label: "Colombia" },
  { code: "CZ", label: "Czech Republic" },
  { code: "DK", label: "Denmark" },
  { code: "EG", label: "Egypt" },
  { code: "FI", label: "Finland" },
  { code: "FR", label: "France" },
  { code: "DE", label: "Germany" },
  { code: "GR", label: "Greece" },
  { code: "HK", label: "Hong Kong" },
  { code: "HU", label: "Hungary" },
  { code: "IN", label: "India" },
  { code: "ID", label: "Indonesia" },
  { code: "IR", label: "Iran" },
  { code: "IE", label: "Ireland" },
  { code: "IL", label: "Israel" },
  { code: "IT", label: "Italy" },
  { code: "JP", label: "Japan" },
  { code: "KR", label: "South Korea" },
  { code: "MY", label: "Malaysia" },
  { code: "MX", label: "Mexico" },
  { code: "NL", label: "Netherlands" },
  { code: "NZ", label: "New Zealand" },
  { code: "NG", label: "Nigeria" },
  { code: "NO", label: "Norway" },
  { code: "PK", label: "Pakistan" },
  { code: "PE", label: "Peru" },
  { code: "PH", label: "Philippines" },
  { code: "PL", label: "Poland" },
  { code: "PT", label: "Portugal" },
  { code: "RO", label: "Romania" },
  { code: "RU", label: "Russia" },
  { code: "SA", label: "Saudi Arabia" },
  { code: "SG", label: "Singapore" },
  { code: "ZA", label: "South Africa" },
  { code: "ES", label: "Spain" },
  { code: "SE", label: "Sweden" },
  { code: "CH", label: "Switzerland" },
  { code: "TW", label: "Taiwan" },
  { code: "TH", label: "Thailand" },
  { code: "TR", label: "Turkey" },
  { code: "UA", label: "Ukraine" },
  { code: "AE", label: "United Arab Emirates" },
  { code: "GB", label: "United Kingdom" },
  { code: "US", label: "United States" },
  { code: "VN", label: "Vietnam" },
  { code: "OTHER", label: "Other" }
];

const languageOptions = [
  { code: "AF", label: "Afrikaans" },
  { code: "AR", label: "Arabic" },
  { code: "BN", label: "Bengali" },
  { code: "BG", label: "Bulgarian" },
  { code: "ZH", label: "Chinese" },
  { code: "HR", label: "Croatian" },
  { code: "CS", label: "Czech" },
  { code: "DA", label: "Danish" },
  { code: "NL", label: "Dutch" },
  { code: "EN", label: "English" },
  { code: "ET", label: "Estonian" },
  { code: "FI", label: "Finnish" },
  { code: "FR", label: "French" },
  { code: "DE", label: "German" },
  { code: "EL", label: "Greek" },
  { code: "HE", label: "Hebrew" },
  { code: "HI", label: "Hindi" },
  { code: "HU", label: "Hungarian" },
  { code: "ID", label: "Indonesian" },
  { code: "IT", label: "Italian" },
  { code: "JA", label: "Japanese" },
  { code: "KM", label: "Khmer" },
  { code: "KO", label: "Korean" },
  { code: "LO", label: "Lao" },
  { code: "LV", label: "Latvian" },
  { code: "LT", label: "Lithuanian" },
  { code: "MS", label: "Malay" },
  { code: "MN", label: "Mongolian" },
  { code: "NE", label: "Nepali" },
  { code: "NB", label: "Norwegian" },
  { code: "PA", label: "Punjabi" },
  { code: "FA", label: "Persian (Farsi)" },
  { code: "PL", label: "Polish" },
  { code: "PT", label: "Portuguese" },
  { code: "RO", label: "Romanian" },
  { code: "RU", label: "Russian" },
  { code: "SK", label: "Slovak" },
  { code: "SL", label: "Slovenian" },
  { code: "SI", label: "Sinhala" },
  { code: "ES", label: "Spanish" },
  { code: "SW", label: "Swahili" },
  { code: "SV", label: "Swedish" },
  { code: "TL", label: "Tagalog" },
  { code: "TH", label: "Thai" },
  { code: "TR", label: "Turkish" },
  { code: "UK", label: "Ukrainian" },
  { code: "UR", label: "Urdu" },
  { code: "VI", label: "Vietnamese" },
  { code: "OTHER", label: "Other" }
];

function makeLanguageDropdown(questionText, responseName) {
  const options = languageOptions
    .map(l => `<option value="${l.code}">${l.label}</option>`)
    .join('');

  return {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>${questionText}</p>`,
    html: `
      <label>
        <select name="${responseName}" id="${responseName}" style="font-size: 1em; padding:.5em; width: 100%;">
          <option value="" disabled selected>Select your language</option>
          ${options}
        </select>
      </label>
      <br><br>
      <label id="${responseName}_label">
        Please specify (if "Other"):<br>
        <input type="text" name="${responseName}_other" id="${responseName}_other" style="width:100%;" />
      </label>
      <p id="error-${responseName}" style="color:red; display:none;">Please specify your language if you selected "Other".</p>

      <script>
        document.addEventListener('submit', function(event) {
          const select = document.getElementById("${responseName}");
          const otherInput = document.getElementById("${responseName}_other");
          const errorMsg = document.getElementById("error-${responseName}");

          if (select.value === "OTHER" && !otherInput.value.trim()) {
            event.preventDefault();
            errorMsg.style.display = "block";
          } else {
            errorMsg.style.display = "none";
          }
        });
      </script>
    `,
    button_label: "Continue",
    data: { question: responseName }
  };
}

// const jsPsych = initJsPsych({});
const jsPsych = initJsPsych({
  // show_progress_bar: true,
  // auto_update_progress_bar: true
});

// const participantID = generateUUID();
const participantID = crypto.randomUUID();
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

function makeProgressMessage(index, total) {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p style="font-size:1.2em;">Audio ${index} of ${total}</p>`,
    choices: "NO_KEYS",
    trial_duration: 500  // brief pause (ms) before playing audio
  };
}

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
    adjectives: [
      "outgoing / extroverted",
      "energetic / vigorous",
      "warm / friendly",
      "kind / kind-hearted",
      "responsible",
      "conscientious / principled",
      "calm", "stable / steady",
      "intellectual / intelligent",
      "thoughtful / reflective"
    ],
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
    skip: "Skip",
    final_thanks: `Thank you for your participation!<br>
    <p>If you have any questions, feel free to <a href="mailto:research@example.com">contact me</a>.</p>`,
    finish: "Continue",
    continue_button: "Continue",
    specify_other: "Please specify if \"Other\":",
    mandatory: "<span style='color:red;'>*</span>",
    optional: "<span style='color:gray;'>(Optional)</span>",
    select_all_apply: "Select all that apply:",
    multi_select_hint: "(You can press Ctrl button to select multiple options)",
    close_window: "You may now close this window. Your responses have been saved.",
    background_intro: "The listening part is complete. Thank you!<br><br>Now we would like to ask about your background. There are up to 10 questions in total — about 4 or 5 are mandatory (depending on your background), and the rest are optional.",
    family_definition: "(Parents, guardians, spouse, partner, children)",
  },
  ja: {
  consent: consentText_ja,
  consent_accept: "同意する",
  video_prompt: "次のページで、実験の回答方法の説明動画をご覧ください。",
  video_continue: "次へ",
  accent_question: "この日本語の音声に外国語訛りを感じましたか？",
  yes: "はい",
  no: "いいえ",
  adjectives_prompt: "音声または話者に感じた印象を表す言葉を3つまで選んでください：",
  adjectives: [
    // "外交的",
    // "精力的",
    "暖かい",
    "親切",
    "責任感のある",
    // "良心的",
    "平静",
    "安定した",
    "知性的",
    "思慮深い"
  ],
  optional_comment: "音声、または話者に関するコメントがあれば自由にご記入ください（任意）",
  nativeQ: "あなたは日本語が第一言語ですか？",
  genderQ: "性別を教えてください。",
  gender_options: ["男性", "女性", "その他", "回答しない"],
  ageGroupQ: "あなたの年代を選んでください。",
  age_group_options: ["18〜24歳", "25〜34歳", "35〜44歳", "45〜54歳", "55〜64歳", "65歳以上", "回答しない"],
  currentCountryQ: "現在住んでいる国を教えてください。",
  countriesLivedQ: "これまでに3か月以上住んだことのある国を選んでください。",
  motherTongueQ: "第一言語（最も得意な言語）を教えてください。",
  familyLanguageQ: "ご家族が使用している言語を教えてください。",
  languageOtherQ: "日本語、または母語以外に使用できる言語はありますか？",
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
  proficiencyQ: "あなたの日本語の習熟度を教えてください。",
  proficiency_options: ["JLPT N5", "JLPT N4", "JLPT N3", "JLPT N2", "JLPT N1", "初級", "中級", "上級"],
  musicQ: "学校の授業以外で、音楽を習ったり、音楽活動をした経験はありますか？",
  music_options: ["いいえ", "はい（1〜5年）", "はい（5年以上）"],
  skip: "スキップ",
  final_thanks: `ご参加いただき、ありがとうございました。<br>
  <p>ご質問がある場合は<a href="mailto:research@example.com">こちら</a>までご連絡ください。</p>`,
  finish: "次へ",
  continue_button: "次へ",
  specify_other: "「Other」を選択した場合は具体的に記入してください。：",
  mandatory: "<span style='color:red;'>*</span>",
  optional: "<span style='color:gray;'>（任意）</span>",
  select_all_apply: "該当するものをすべて選んでください：",
  multi_select_hint: "（Ctrlキーを押しながら選択すると、複数選択できます。）",
  close_window: "回答は保存されました。このウィンドウを閉じてください。",
  background_intro: "音声の聞き取りは終了しました。ありがとうございました。<br>次に、あなたの背景についてお伺いします。<br><br>質問は最大で10問あり、4〜5問は必須（ご自身の背景によって異なります）、残りは任意です。",
  family_definition: "（両親、保護者、配偶者、パートナー、子ども）",
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
  adjectives: [
    "外向的",
    "精力充沛的／有活力的",
    "温暖的／暖和的",
    "亲切的",
    "负责任的／有责任感的",
    "有原则的",
    "平静的",
    "稳定的",
    "知性的／有智慧的",
    "深思熟虑的／思慮深的"
  ],
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
  skip: "跳过",
  final_thanks: `感谢您的参与！<br>
  如有任何疑问，请<a href="mailto:research@example.com">联系我们</a>。`,
  finish: "继续",
  continue_button: "继续",
  specify_other: "如果选择\"Other\"，请具体说明：",
  mandatory: "<span style='color:red;'>*</span>",
  optional: "<span style='color:gray;'>（可选）</span>",
  select_all_apply: "选择所有适用项：",
  multi_select_hint: "（您可以按住Ctrl键选择多个选项）",
  close_window: "您的回答已保存。您现在可以关闭此窗口。",
  background_intro: "听力部分已完成。谢谢！<br><br>接下来我们想了解您的背景信息。共有最多10个问题，其中大约4到5个为必答（根据您的背景而定），其余为选答。",
  family_definition: "（父母、监护人、配偶、伴侣、子女）",
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
  adjectives: [
    "外向的",
    "精力充沛的／有活力的",
    "溫暖的／暖和的 ",
    "親切的",
    "負責任的／有責任感的",
    "有原則的",
    "平靜的",
    "穩定的",
    "知性的／有智慧的",
    "深思熟慮的／思慮深的",
  ],
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
  skip: "跳過",
  final_thanks: `感謝您的參與！<br>
  若有任何問題，歡迎<a href="mailto:research@example.com">與我們聯繫</a>。`
  ,
  finish: "繼續",
  continue_button: "繼續",
  specify_other: "如果選擇「Other」，請具體說明：",
  mandatory: "<span style='color:red;'>*</span>",
  optional: "<span style='color:gray;'>（選填）</span>",
  select_all_apply: "選擇所有適用項：",
  multi_select_hint: "（您可以按住Ctrl鍵選擇多個選項）",
  close_window: "您的回答已保存。您現在可以關閉此視窗。",
  background_intro: "聽力部分已完成。謝謝！<br><br>接下來我們想了解您的背景資訊。共有最多10個問題，其中約有4到5個為必答（依您的背景而定），其餘為選答。",
  family_definition: "（父母、監護人、配偶、伴侶、子女）",
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
  adjectives: [
    "외향적인",
    "활기찬／에너제틱한",
    "따뜻한",
    "친절한",
    "책임감 있는",
    "양심적인",
    "침착한",
    "안정된",
    "지적인／지성적인",
    "사려 깊은"
  ],
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
  skip: "건너뛰기",
  final_thanks: `참여해 주셔서 감사합니다!<br>
  질문이 있으시면 <a href="mailto:research@example.com">이메일로 문의해 주세요</a>.`,
  finish: "계속",
  continue_button: "계속",
  specify_other: "\"Other\"를 선택한 경우 구체적으로 입력해 주세요：",
  mandatory: "<span style='color:red;'>*</span>",
  optional: "<span style='color:gray;'>(선택 사항)</span>",
  select_all_apply: "해당하는 항목을 모두 선택하세요：",
  multi_select_hint: "(Ctrl 키를 누른 채로 여러 개를 선택할 수 있습니다)",
  close_window: "응답이 저장되었습니다. 이제 이 창을 닫으셔도 됩니다.",
  background_intro: "듣기 부분이 완료되었습니다. 감사합니다!<br><br>이제 귀하의 배경에 대해 몇 가지 질문을 드리겠습니다. 총 최대 10개의 문항이 있으며, 약 4~5개는 필수(개인 배경에 따라 다름)이고 나머지는 선택 항목입니다.",
  family_definition: "(부모, 보호자, 배우자, 파트너, 자녀)",
  }
};

function makeImpressionTrial() {
  let shuffled = [];

  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: () => {
      const adjectiveList = translations[lang].adjectives || translations.en.adjectives;
      shuffled = jsPsych.randomization.shuffle([...adjectiveList]);

      const checkboxes = shuffled.map(adj => `
        <label style="display:inline-block; width:48%; margin-bottom:.5em;">
          <input type="checkbox" name="impressions" value="${adj}"> ${adj}
        </label>
      `).join('');

      return `
        <div class="impression-container">
          <p style="font-size:1.2em;"><strong>${translations[lang].adjectives_prompt}</strong></p>
          ${checkboxes}
          <br><br>
          <label>${translations[lang].optional_comment || "Optional comment:"}</label><br>
          <textarea id="impression_comment" rows="3" cols="50" placeholder="..."></textarea>
          <p id="error-msg" class="impression-error" style="display:none;">⚠️ Please select 1–3 adjectives to continue.</p>
          <div class="impression-button-row">
            <button id="continue-btn" class="impression-continue-btn" disabled>${translations[lang].finish || "Next"}</button>
          </div>
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

const languageSelector = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<p>
    実験に興味を持っていただきありがとうございます。表示言語を選択してください。<br/>
    感谢您对本实验的兴趣。请选择显示语言。<br/>
    感謝您對本實驗的興趣。請選擇顯示語言。<br/>
    실험에 관심을 가져주셔서 감사합니다. 표시 언어를 선택해 주세요.<br/>
    Thank you for your interest in this experiment. Please select your display language.</p>`,
  choices: ["日本語", "简体中文", "繁體中文", "한국어", "English"],
  on_finish: function(data) {
    const choice = data.response;
    if (choice === 0) lang = 'ja';
    if (choice === 1) lang = 'sc';
    if (choice === 2) lang = 'tc';
    if (choice === 3) lang = 'ko';
    if (choice === 4) lang = 'en';
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
        <p>これから本番のテストが始まります。音声は全部で10個あります。音声は一度だけ流れます。よく聞いて、正直に答えてください。</p>
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
  stimulus: () => jsPsych.timelineVariable("audio"),
  prompt: () => {
    const current = jsPsych.data.get().filter({ phase: "stimulus" }).count() + 1;
    const total = audioFiles.length;

    return `
      <div style="font-size: 1.2em; text-align: center; margin-top: 1em;">
        🔊 <strong>
        ${
          {
            en: "Playing audio…",
            ja: "再生中…",
            sc: "播放中…",
            tc: "播放中…",
            ko: "재생 중…"
          }[lang] || "Playing audio…"
        }
        </strong><br>
        ${current} / ${total}
      </div>
    `;
  },
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

const motherTongueTrial = {
  type: jsPsychSurveyHtmlForm,
  preamble: function () {
    let display = "";

    try {
      const data = jsPsych.data.get().values(); // get all trial data
      const recent = [...data].reverse().find(d => d.response && d.response.mother_tongue);

      if (recent) {
        const selectedCode = recent.response.mother_tongue;
        const labelObj = languageOptions.find(l => l.code === selectedCode);
        if (labelObj) {
          display = `<p><strong>Previously selected: ${labelObj.label}</strong></p>`;
        }
      }
    } catch (e) {
      console.warn("Could not retrieve previous language data:", e);
    }

    return `${display}<p>${translations[lang].motherTongueQ} ${translations[lang].mandatory}</p>`;
  },
  html: function() {
    return `
      <label>
        <select name="mother_tongue" id="mother_tongue" required style="font-size: 1em; padding:.5em; width: 100%;">
          <option value="" disabled selected>Select your language</option>
          ${languageOptions.map(l => `<option value="${l.code}">${l.label}</option>`).join('')}
        </select>
      </label>
      <br><br>
      <label id="mother_tongue_label">
        ${translations[lang].specify_other}<br>
        <input type="text" name="mother_tongue_other" id="mother_tongue_other" style="width:100%;" />
      </label>
      <p id="error-mother_tongue" style="color:red; display:none;">${translations[lang].specify_other}</p>
    `;
  },
  button_label: function() { return translations[lang].continue_button; },
  // button_label: "Continue",
  data: { question: 'mother_tongue' }
};

// function makeL2UsageTrial(languageCode) {
//   const label = languageOptions.find(l => l.code === languageCode)?.label || languageCode;

//   return {
//     type: jsPsychHtmlButtonResponse,
//     stimulus: () => `<p>How often do you use <strong>${label}</strong>?</p>`,
//     choices: () => translations[lang].languageFreq_options,
//     data: {
//       question: 'l2_language_usage',
//       language_code: languageCode
//     }
//   };
// }

// const l2UsageBlock = {
//   timeline: [],
//   on_timeline_start: function () {
//     console.log("=== L2 Usage Block Starting ===");
//     const last = jsPsych.data.get().filter({ question: "l2_languages" }).last(1).values()[0];
//     console.log("Last trial data:", last);
//     const selected = last?.response?.l2_languages || [];
//     console.log("Selected languages raw:", selected);
//     const codes = Array.isArray(selected) ? selected : [selected];
//     console.log("Language codes array:", codes);
//     console.log("Number of languages:", codes.length);

//     // Clear timeline first
//     this.timeline.length = 0;

//     // Add a trial for each selected language
//     codes.forEach((code, index) => {
//       const label = languageOptions.find(l => l.code === code)?.label || code;
//       console.log(`Adding trial ${index + 1} for: ${label} (${code})`);

//       // Create question template with current language
//       const questionTemplate = {
//         en: `How often do you use <strong>${label}</strong>?`,
//         ja: `<strong>${label}</strong>をどのくらいの頻度で使用しますか？`,
//         sc: `您使用<strong>${label}</strong>的频率是？`,
//         tc: `您使用<strong>${label}</strong>的頻率為何？`,
//         ko: `<strong>${label}</strong>을(를) 얼마나 자주 사용합니까?`
//       };

//       this.timeline.push({
//         type: jsPsychHtmlButtonResponse,
//         stimulus: `<p>${questionTemplate[lang] || questionTemplate.en}</p>`,
//         choices: translations[lang].languageFreq_options,
//         data: {
//           question: 'l2_language_usage',
//           language_code: code
//         }
//       });
//     });

//     console.log("Total trials added:", this.timeline.length);
//     console.log("=== L2 Usage Block Ready ===");
//   }
// };

const l2LanguageTrial = {
  type: jsPsychSurveyHtmlForm,
  preamble: function () {
    let showSelected = "";

    try {
      const allData = jsPsych.data.get().values();
      const recent = [...allData].reverse().find(d => d.response?.l2_languages);

      if (recent) {
        const codes = recent.response.l2_languages;
        const codeArray = Array.isArray(codes) ? codes : [codes];
        const labels = codeArray.map(code => languageOptions.find(l => l.code === code)?.label).filter(Boolean);

        if (labels.length) {
          showSelected = `<p><strong>Previously selected: ${labels.join(', ')}</strong></p>`;
        }
      }
    } catch (e) {
      console.warn("L2 language lookup failed:", e);
    }

    return `${showSelected}<p>${translations[lang].languageOtherSelectQ}</p>`;
  },

  html: function () {
    const options = languageOptions
      .map(l => `<option value="${l.code}">${l.label}</option>`)
      .join('');
    return `
      <label>Select all that apply:</label><br>
      <select name="l2_languages" id="l2_languages" multiple size="6" required style="width:100%; padding:.5em;">
        ${options}
      </select>
      <br><br>
      <label id="l2_other_label">
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

const l2LanguageSelectTrial = {
  type: jsPsychSurveyHtmlForm,
  preamble: function () {
    let showSelected = "";

    try {
      const allData = jsPsych.data.get().values();
      const recent = [...allData].reverse().find(d => d.response?.l2_languages);

      if (recent) {
        const codes = recent.response.l2_languages;
        const codeArray = Array.isArray(codes) ? codes : [codes];
        const labels = codeArray.map(code => languageOptions.find(l => l.code === code)?.label).filter(Boolean);

        if (labels.length) {
          showSelected = `<p><strong>Previously selected: ${labels.join(', ')}</strong></p>`;
        }
      }
    } catch (e) {
      console.warn("L2 language lookup failed:", e);
    }

    return `${showSelected}<p>${translations[lang].languageOtherSelectQ} ${translations[lang].optional}</p>`;
  },

  html: function() {
    const options = languageOptions
      .map(l => `<option value="${l.code}">${l.label}</option>`)
      .join('');

    return `
      <label>${translations[lang].select_all_apply}<br>
      <span style="font-size:0.9em; color:#666;">${translations[lang].multi_select_hint}</span></label><br>
      <select name="l2_languages" id="l2_languages" multiple size="6" style="width:100%; padding:.5em;">
        ${options}
      </select>
      <div id="selected-l2-languages" style="margin-top:10px; min-height:20px; font-size:0.9em; color:#333; font-weight:bold;">
      </div>
      <br>
      <label id="l2_other_label">
        ${translations[lang].specify_other}<br>
        <input type="text" name="l2_languages_other" style="width:100%;" />
      </label>
      <p id="error-l2" style="color:red; display:none;">${translations[lang].specify_other}</p>
    `;
  },
  button_label: function() { return translations[lang].continue_button; },

  on_load: function() {
    const select = document.getElementById('l2_languages');
    const displayDiv = document.getElementById('selected-l2-languages');
    const otherLabel = document.getElementById('l2_other_label');
    const otherInput = document.querySelector('input[name="l2_languages_other"]');
    const errorMsg = document.getElementById('error-l2');

    function updateSelectedDisplay() {
      const selected = Array.from(select.selectedOptions);
      if (selected.length > 0) {
        const names = selected.map(opt => opt.text).join(', ');
        displayDiv.textContent = names;
      } else {
        displayDiv.textContent = '';
      }
    }

    // Update display on all selection events
    select.addEventListener('change', updateSelectedDisplay);
    select.addEventListener('click', updateSelectedDisplay);
    select.addEventListener('mousedown', () => setTimeout(updateSelectedDisplay, 0));
    select.addEventListener('mouseup', () => setTimeout(updateSelectedDisplay, 0));
    select.addEventListener('keydown', () => setTimeout(updateSelectedDisplay, 0));
    select.addEventListener('keyup', () => setTimeout(updateSelectedDisplay, 0));

    // Validation on submit
    const form = select.closest('form');
    if (form) {
      form.addEventListener('submit', function(event) {
        const selected = Array.from(select.selectedOptions).map(o => o.value);
        if (selected.includes('OTHER') && otherInput && !otherInput.value.trim()) {
          event.preventDefault();
          if (errorMsg) errorMsg.style.display = 'block';
        } else {
          if (errorMsg) errorMsg.style.display = 'none';
        }
      });
    }
  },
  data: { question: 'l2_languages' }
};

// const genderTrial = {
//   type: jsPsychHtmlButtonResponse,
//     stimulus: function() {
//       return `<p>${translations[lang].genderQ} ${translations[lang].mandatory}</p>`;
//     },
//   choices: function() { return translations[lang].gender_options; },
//   data: { question: 'gender' }
// };

const genderTrial = {
  type: jsPsychSurveyHtmlForm,
  preamble: function() {
    return `<p>${translations[lang].genderQ} ${translations[lang].mandatory}</p>`;
  },
  html: function() {
    const options = translations[lang].gender_options
      .map((option, i) => `<option value="${i}">${option}</option>`)
      .join('');
    return `
      <select name="gender" required style="width:100%; font-size:16px; padding:12px;">
        <option value="" disabled selected>Select...</option>
        ${options}
      </select>
    `;
  },
  button_label: function() { return translations[lang].continue_button; },
  data: { question: 'gender' }
};

// const ageTrial = {
//   type: jsPsychHtmlButtonResponse,
//   stimulus: function () {
//     return `<p>${translations[lang].ageGroupQ} ${translations[lang].mandatory}</p>`;
//   },
//   choices: function () {
//     return translations[lang].age_group_options;
//   },
//   data: { question: "age_group" }
// };

const ageTrial = {
  type: jsPsychSurveyHtmlForm,
  preamble: function() {
    return `<p>${translations[lang].ageGroupQ} ${translations[lang].mandatory}</p>`;
  },
  html: function() {
    const options = translations[lang].age_group_options
      .map((option, i) => `<option value="${i}">${option}</option>`)
      .join('');
    return `
      <select name="age_group" required style="width:100%; font-size:16px; padding:12px;">
        <option value="" disabled selected>Select...</option>
        ${options}
      </select>
    `;
  },
  button_label: function() { return translations[lang].continue_button; },
  data: { question: "age_group" }
};

// --- Current Country Trial ---
const currentCountryTrial = {
  type: jsPsychSurveyHtmlForm,
  preamble: function() { return `<p>${translations[lang].currentCountryQ} ${translations[lang].optional}</p>`; },
  html: function() {
    return `
      <label>
        <select name="current_country" id="current_country" style="width:100%; font-size:1em; padding:.5em;">
          <option value="" disabled selected>Select a country</option>
          ${countryOptions.map(c => `<option value="${c.code}">${c.label}</option>`).join('')}
        </select>
      </label>
      <br><br>
      <label>
        ${translations[lang].specify_other}<br>
        <input type="text" name="current_country_other" id="current_country_other" style="width:100%;" />
      </label>
      <p id="error-country" style="color:red; display:none;">${translations[lang].specify_other}</p>
    `;
  },
button_label: function() { return translations[lang].continue_button; },
  data: { question: 'current_country' }
};


// --- Countries Lived Trial ---
const countriesLivedTrial = {
  type: jsPsychSurveyHtmlForm,
  preamble: function() { return `<p>${translations[lang].countriesLivedQ} ${translations[lang].optional}</p>`; },
  html: function() {
    return `
      <label>${translations[lang].select_all_apply}<br>
      <span style="font-size:0.9em; color:#666;">${translations[lang].multi_select_hint}</span></label><br>
      <select name="countries_lived" id="countries_lived" multiple size="6" style="width:100%; font-size:1em; padding:.5em;">
        ${countryOptions.map(c => `<option value="${c.code}">${c.label}</option>`).join('')}
      </select>
      <div id="selected-countries" style="margin-top:10px; min-height:20px; font-size:0.9em; color:#333; font-weight:bold;">
      </div>
      <br>
      <label>
        ${translations[lang].specify_other}<br>
        <input type="text" name="countries_lived_other" id="countries_lived_other" style="width:100%;" />
      </label>
      <p id="error-countries" style="color:red; display:none;">${translations[lang].specify_other}</p>
    `;
  },
button_label: function() { return translations[lang].continue_button; },
  on_load: function() {
    const select = document.getElementById("countries_lived");
    const displayDiv = document.getElementById("selected-countries");

    function updateSelectedDisplay() {
      const selected = Array.from(select.selectedOptions);
      if (selected.length > 0) {
        const names = selected.map(opt => opt.text).join(', ');
        displayDiv.textContent = names;
      } else {
        displayDiv.textContent = '';
      }
    }

    // Catch all possible selection events
    select.addEventListener('change', updateSelectedDisplay);
    select.addEventListener('click', updateSelectedDisplay);
    select.addEventListener('mousedown', function() {
      setTimeout(updateSelectedDisplay, 0);
    });
    select.addEventListener('mouseup', function() {
      setTimeout(updateSelectedDisplay, 0);
    });
    select.addEventListener('keydown', function() {
      setTimeout(updateSelectedDisplay, 0);
    });
    select.addEventListener('keyup', function() {
      setTimeout(updateSelectedDisplay, 0);
    });

    // Validation on submit
    const form = select.closest('form');
    if (form) {
      form.addEventListener('submit', function(event) {
        const other = document.getElementById("countries_lived_other");
        const error = document.getElementById("error-countries");

        const selected = Array.from(select.selectedOptions).map(o => o.value);
        if (selected.includes("OTHER") && !other.value.trim()) {
          event.preventDefault();
          error.style.display = "block";
        } else {
          error.style.display = "none";
        }
      });
    }
  },
  data: { question: 'countries_lived' }
};

const familyLanguageTrial = {
  type: jsPsychSurveyHtmlForm,
  preamble: function() {
    return `
      <p>${translations[lang].familyLanguageQ} ${translations[lang].optional}</p>
      <p style="font-size:0.9em; color:#666;">${translations[lang].family_definition}</p>
    `;
  },
  html: function() {
    const options = languageOptions
      .map(l => `<option value="${l.code}">${l.label}</option>`)
      .join('');

    return `
      <label>${translations[lang].select_all_apply}<br>
      <span style="font-size:0.9em; color:#666;">${translations[lang].multi_select_hint}</span></label><br>
      <select name="family_language" id="family_language" multiple size="6" style="width:100%; padding:.5em;">
        ${options}
      </select>
      <div id="selected-family-languages" style="margin-top:10px; min-height:20px; font-size:0.9em; color:#333; font-weight:bold;">
      </div>
      <br>
      <label id="family_language_other_label">
        ${translations[lang].specify_other}<br>
        <input type="text" name="family_language_other" id="family_language_other" style="width:100%;" />
      </label>
      <p id="error-family-language" style="color:red; display:none;">${translations[lang].specify_other}</p>
    `;
  },
  button_label: function() { return translations[lang].continue_button; },
  // ... rest of the code stays the same
  on_load: function() {
    const select = document.getElementById('family_language');
    const displayDiv = document.getElementById('selected-family-languages');
    const otherLabel = document.getElementById('family_language_other_label');
    const otherInput = document.getElementById('family_language_other');
    const errorMsg = document.getElementById('error-family-language');

    function updateSelectedDisplay() {
      const selected = Array.from(select.selectedOptions);
      if (selected.length > 0) {
        const names = selected.map(opt => opt.text).join(', ');
        displayDiv.textContent = names;
      } else {
        displayDiv.textContent = '';
      }
    }

    // Update display on all selection events
    select.addEventListener('change', updateSelectedDisplay);
    select.addEventListener('click', updateSelectedDisplay);
    select.addEventListener('mousedown', () => setTimeout(updateSelectedDisplay, 0));
    select.addEventListener('mouseup', () => setTimeout(updateSelectedDisplay, 0));
    select.addEventListener('keydown', () => setTimeout(updateSelectedDisplay, 0));
    select.addEventListener('keyup', () => setTimeout(updateSelectedDisplay, 0));

    // Validation on submit
    const form = select.closest('form');
    if (form) {
      form.addEventListener('submit', function(event) {
        const selected = Array.from(select.selectedOptions).map(o => o.value);
        if (selected.includes('OTHER') && otherInput && !otherInput.value.trim()) {
          event.preventDefault();
          if (errorMsg) errorMsg.style.display = 'block';
        } else {
          if (errorMsg) errorMsg.style.display = 'none';
        }
      });
    }
  },
  data: { question: 'family_language' }
};

// --- L2 Language Yes/No Trial ---
// const l2LanguageYesNoTrial = {
//   type: jsPsychHtmlButtonResponse,
//   stimulus: function () {
//     return `<p>${translations[lang].languageOtherQ} ${translations[lang].mandatory}</p>`;
//   },
//   choices: function () {
//     return translations[lang].languageOther_options;
//   },
//   data: { question: 'l2_yesno' },
//   on_finish: function (data) {
//     data.l2 = translations[lang].languageOther_options[data.response] === translations[lang].yes;
//   }
// };

const l2LanguageYesNoTrial = {
  type: jsPsychSurveyHtmlForm,
  preamble: function() {
    return `<p>${translations[lang].languageOtherQ} ${translations[lang].mandatory}</p>`;
  },
  html: function() {
    const options = translations[lang].languageOther_options
      .map((option, i) => `<option value="${i}">${option}</option>`)
      .join('');
    return `
      <select name="l2_yesno" required style="width:100%; font-size:16px; padding:12px;">
        <option value="" disabled selected>Select...</option>
        ${options}
      </select>
    `;
  },
  button_label: function() { return translations[lang].continue_button; },
  data: { question: 'l2_yesno' },
  on_finish: function(data) {
    // Check if "Yes" was selected (index 0 is Yes in most languages)
    data.l2 = (data.response.l2_yesno === "0");
  }
};

// const usageTrial = {
//   type: jsPsychHtmlButtonResponse,
//   stimulus: function() {
//     return `
//       <div style="position: relative;">
//         <button id="skip-btn" style="position: absolute; top: -40px; right: 0; padding: 8px 16px; background-color: #f0f0f0; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; font-size: 0.9em;">
//           ${translations[lang].skip}
//         </button>
//         <p>${translations[lang].usageQ} ${translations[lang].optional}</p>
//       </div>
//     `;
//   },
//   choices: function() { return translations[lang].languageFreq_options; },
//   data: { question: 'japanese_usage' },
//   on_load: function() {
//     const skipBtn = document.getElementById('skip-btn');
//     if (skipBtn) {
//       skipBtn.addEventListener('click', function() {
//         jsPsych.finishTrial({
//           response: null,
//           skipped: true
//         });
//       });
//     }
//   }
// };

// const usageTrial = {
//   type: jsPsychSurveyHtmlForm,
//   preamble: function() {
//     return `<p>${translations[lang].usageQ} ${translations[lang].optional}</p>`;
//   },
//   html: function() {
//     const options = translations[lang].languageFreq_options
//       .map((option, i) => `<option value="${i}">${option}</option>`)
//       .join('');
//     return `
//       <select name="japanese_usage" style="width:100%; font-size:16px; padding:12px;">
//         <option value="" selected>${translations[lang].skip}</option>
//         ${options}
//       </select>
//     `;
//   },
//   button_label: function() { return translations[lang].continue_button; },
//   data: { question: 'japanese_usage' }
// };

const usageTrial = {
  type: jsPsychSurveyHtmlForm,
  preamble: function() {
    return `
      <div style="position: relative;">
        <p>${translations[lang].usageQ} ${translations[lang].optional}</p>
      </div>
    `;
  },
  html: function() {
    const options = translations[lang].languageFreq_options
      .map((option, i) => `<option value="${i}">${option}</option>`)
      .join('');
    return `
      <select name="japanese_usage" style="width:100%; font-size:16px; padding:12px;">
        <option value="" disabled selected>Select...</option>
        ${options}
      </select>
    `;
  },
  button_label: function() {
    return [translations[lang].continue_button];
  },
  data: { question: 'japanese_usage' },
  on_finish: function(data) {
    // If skip button was clicked (button index 1), mark as skipped
    if (data.button_pressed === 1) {
      data.skipped = true;
      data.response = { japanese_usage: null };
    }
  }
};

// const proficiencyTrial = {
//   type: jsPsychHtmlButtonResponse,
//   stimulus: function() { return `<p>${translations[lang].proficiencyQ} ${translations[lang].mandatory}</p>`; },
//   choices: function() { return translations[lang].proficiency_options; },
//   data: { question: 'japanese_proficiency' }
// };

const proficiencyTrial = {
  type: jsPsychSurveyHtmlForm,
  preamble: function() {
    return `<p>${translations[lang].proficiencyQ} ${translations[lang].mandatory}</p>`;
  },
  html: function() {
    const options = translations[lang].proficiency_options
      .map((option, i) => `<option value="${i}">${option}</option>`)
      .join('');
    return `
      <select name="japanese_proficiency" required style="width:100%; font-size:16px; padding:12px;">
        <option value="" disabled selected>Select...</option>
        ${options}
      </select>
    `;
  },
  button_label: function() { return translations[lang].continue_button; },
  data: { question: 'japanese_proficiency' }
};

// const musicTrial = {
//   type: jsPsychHtmlButtonResponse,
//   stimulus: function() {
//     return `
//       <div style="position: relative;">
//         <button id="skip-btn-music" style="position: absolute; top: -40px; right: 0; padding: 8px 16px; background-color: #f0f0f0; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; font-size: 0.9em;">
//           ${translations[lang].skip}
//         </button>
//         <p>${translations[lang].musicQ} ${translations[lang].optional}</p>
//       </div>
//     `;
//   },
//   choices: function() { return translations[lang].music_options; },
//   data: { question: 'musical_experience' },
//   on_load: function() {
//     const skipBtn = document.getElementById('skip-btn-music');
//     if (skipBtn) {
//       skipBtn.addEventListener('click', function() {
//         jsPsych.finishTrial({
//           response: null,
//           skipped: true
//         });
//       });
//     }
//   }
// };

// const musicTrial = {
//   type: jsPsychSurveyHtmlForm,
//   preamble: function() {
//     return `<p>${translations[lang].musicQ} ${translations[lang].optional}</p>`;
//   },
//   html: function() {
//     const options = translations[lang].music_options
//       .map((option, i) => `<option value="${i}">${option}</option>`)
//       .join('');
//     return `
//       <select name="musical_experience" style="width:100%; font-size:16px; padding:12px;">
//         <option value="" selected>${translations[lang].skip}</option>
//         ${options}
//       </select>
//     `;
//   },
//   button_label: function() { return translations[lang].continue_button; },
//   data: { question: 'musical_experience' }
// };

const musicTrial = {
  type: jsPsychSurveyHtmlForm,
  preamble: function() {
    return `
      <div style="position: relative;">
        <p>${translations[lang].musicQ} ${translations[lang].optional}</p>
      </div>
    `;
  },
  html: function() {
    const options = translations[lang].music_options
      .map((option, i) => `<option value="${i}">${option}</option>`)
      .join('');
    return `
      <select name="musical_experience" style="width:100%; font-size:16px; padding:12px;">
        <option value="" disabled selected>Select...</option>
        ${options}
      </select>
    `;
  },
  button_label: function() {
    return [translations[lang].continue_button];
  },
  data: { question: 'musical_experience' },
  on_finish: function(data) {
    // If skip button was clicked (button index 1), mark as skipped
    if (data.button_pressed === 1) {
      data.skipped = true;
      data.response = { musical_experience: null };
    }
  }
};

const backgroundIntroTrial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function() {
    return `
      <div style="text-align: center; max-width: 700px; margin: 0 auto;">
        <p style="font-size: 1.1em;">${translations[lang].background_intro}</p>
      </div>
    `;
  },
  choices: function() { return [translations[lang].continue_button]; }
};

const basicBlock = {
  timeline: [
    genderTrial,
    ageTrial,
    currentCountryTrial,
    countriesLivedTrial,
    {
      ...motherTongueTrial,
      on_finish: function(data) {
        // Check if mother tongue is Japanese
        if (data.response && data.response.mother_tongue === 'JA') {
          isNative = true;
        } else {
          isNative = false;
        }
      }
    },
    familyLanguageTrial,
  ]
}

const nativeBlock = {
  timeline: [
  ],
  conditional_function: () => isNative
};

const nonNativeBlock = {
  timeline: [
    proficiencyTrial,
  ],
  conditional_function: () => !isNative
};

const afterNativeQuestionTrial = {
  timeline: [
    usageTrial,
    l2LanguageYesNoTrial,
    {
      timeline: [l2LanguageSelectTrial],
      conditional_function: function() {
        const data = jsPsych.data.get().last(1).values()[0];
        return data.l2 === true;
      }
    },
    musicTrial
  ]
}

const thankYouTrial = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function () {
    return `
      <div style="text-align: center; max-width: 600px; margin: 0 auto;">
        <p>${translations[lang].final_thanks}</p>
        <p>${translations[lang].close_window}</p>
      </div>
    `;
  },
  choices: "NO_KEYS",
  // trial_duration: 5000,
  on_start: function () {
    fetch("https://research001-4ba740c5cac1.herokuapp.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jsPsych.data.get().json()
    }).then(res => {
      if (!res.ok) throw new Error("Failed to submit");
    }).catch(err => {
      alert("⚠️ Submission failed. Saving backup locally.");
      jsPsych.data.get().localSave("csv", "backup.csv");
      console.error(err);
    });
  }
};

// Build and run timeline
const timeline = [];
timeline.push(languageSelector);
timeline.push(consentTrial);
timeline.push(preloadTrial);
timeline.push(instructionTextTrial);
// timeline.push(instructionVideoTrial);
timeline.push(preTestMessage);
// timeline.push({
//   timeline: [
//     play_audio,
//     accentQuestionTrial,
//     {
//       timeline: [makeImpressionTrial(jsPsych.timelineVariable("id"))]
//     }
//   ],
//   timeline_variables: audioFiles,
//   randomize_order: true
// });
timeline.push(backgroundIntroTrial);
timeline.push(basicBlock);
timeline.push(nativeBlock);
timeline.push(nonNativeBlock);
timeline.push(afterNativeQuestionTrial);
timeline.push(thankYouTrial);

jsPsych.run(timeline);
