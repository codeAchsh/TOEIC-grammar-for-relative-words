const wordData = {
  // 関係代名詞
  who: [
    { sentence: "The woman who called you is my sister.", translation: "あなたに電話した女性は私の姉です。" },
    { sentence: "He is the teacher who helped me with math.", translation: "彼は私に数学を教えてくれた先生です。" },
    { sentence: "Students who study hard will pass the exam.", translation: "一生懸命勉強する学生は試験に合格します。" }
  ],
  whom: [
    { sentence: "The man whom I met yesterday was very kind.", translation: "昨日私が会った男性はとても親切でした。" },
    { sentence: "She is the person whom I trust the most.", translation: "彼女は私が最も信頼している人です。" },
    { sentence: "The woman whom they invited is a famous writer.", translation: "彼らが招待した女性は有名な作家です。" }
  ],
  whose: [
    { sentence: "I met a boy whose father is a famous actor.", translation: "父親が有名な俳優である少年に会いました。" },
    { sentence: "She has a friend whose dog can do tricks.", translation: "彼女には芸ができる犬を飼っている友達がいます。" },
    { sentence: "The company whose products I use is based in Tokyo.", translation: "私が使っている製品の会社は東京にあります。" }
  ],
  which: [
    { sentence: "The book which you lent me was very interesting.", translation: "あなたが貸してくれた本はとても面白かったです。" },
    { sentence: "He bought a car which runs on electricity.", translation: "彼は電気で走る車を買いました。" },
    { sentence: "The movie which we watched last night was scary.", translation: "昨夜私たちが見た映画は怖かったです。" }
  ],
  that: [
    { sentence: "This is the movie that won the award last year.", translation: "これが昨年賞を受賞した映画です。" },
    { sentence: "She said something that surprised everyone.", translation: "彼女はみんなを驚かせることを言いました。" },
    { sentence: "I have a job that requires a lot of travel.", translation: "私は出張が多い仕事をしています。" }
  ],

  // 関係副詞
  when: [
    { sentence: "I remember the day when we first met.", translation: "私たちが初めて会った日のことを覚えています。" },
    { sentence: "That was the moment when everything changed.", translation: "それがすべてが変わった瞬間でした。" },
    { sentence: "Do you remember the time when he called?", translation: "彼が電話してきた時間を覚えていますか？" }
  ],
  where: [
    { sentence: "This is the place where I grew up.", translation: "ここが私が育った場所です。" },
    { sentence: "We visited the town where she was born.", translation: "私たちは彼女が生まれた町を訪れました。" },
    { sentence: "The café where we met is closed now.", translation: "私たちが会ったカフェは今は閉店しています。" }
  ],
  why: [
    { sentence: "I don’t know the reason why he left.", translation: "彼が去った理由がわかりません。" },
    { sentence: "That’s the reason why I’m here.", translation: "それが私がここにいる理由です。" },
    { sentence: "Can you explain why this happened?", translation: "なぜこれが起きたのか説明できますか？" }
  ],

  // 複合関係詞
  whoever: [
    { sentence: "Whoever finishes first will win a prize.", translation: "最初に終えた人が賞をもらえます。" },
    { sentence: "You can ask whoever you like.", translation: "好きな人に聞いていいですよ。" },
    { sentence: "Whoever said that was wrong.", translation: "それを言った人は間違っていました。" }
  ],
  whatever: [
    { sentence: "Take whatever you want.", translation: "欲しいものを何でも持っていってください。" },
    { sentence: "Whatever happens, stay calm.", translation: "何が起きても落ち着いていてください。" },
    { sentence: "She’ll eat whatever you cook.", translation: "あなたが作ったものは何でも彼女は食べます。" }
  ],
  whichever: [
    { sentence: "Choose whichever you prefer.", translation: "好きな方を選んでください。" },
    { sentence: "Whichever team wins will go to the finals.", translation: "どちらのチームが勝っても決勝に進みます。" },
    { sentence: "You can take whichever route is faster.", translation: "早い方のルートを選んでください。" }
  ]
};

// 各関係詞が属するセクションをマッピング
const sectionMap = {
  who: "example-noun",
  whom: "example-noun",
  whose: "example-noun",
  which: "example-noun",
  that: "example-noun",
  when: "example-adverb",
  where: "example-adverb",
  why: "example-adverb",
  whoever: "example-complex",
  whatever: "example-complex",
  whichever: "example-complex"
};

function showWords(type) {
  const data = wordData[type];
  const targetId = sectionMap[type];
  const container = document.getElementById(targetId);

  // すべての例文エリアをクリア
  document.querySelectorAll('.word-list').forEach(div => div.innerHTML = '');

  if (!data || data.length === 0) {
    container.innerHTML = `<p>データが見つかりませんでした。</p>`;
    return;
  }

  const items = data.map(item => {
    const regex = new RegExp(`\\b(${type})\\b`, 'gi');
    const highlighted = item.sentence.replace(regex, match => `<span class="highlight">${match}</span>`);
    return `
      <li><span class="example">${highlighted}</span></li>
      <li class="translation-item"><span class="translation">${item.translation}</span></li>
    `;
  }).join('');

  container.innerHTML = `<ul>${items}</ul>`;
}
