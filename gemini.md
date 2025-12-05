# gemini.md

`plan.md` の `# assets` に基づき、Gemini (または他の画像生成AI) で使用できるプロンプトをまとめました。
「若者向け」「クリーン」「信頼感」をキーワードに、ミライ建設のブランドイメージに合う画像を生成します。

---

## 1. Hero Background (`hero-bg.jpg`)

**役割**: トップページのファーストビュー。
**イメージ**: 若手の電気設備エンジニア、自信、未来、都市のインフラを支える。

**Prompt (English):**
> A cinematic, high-resolution wide shot of a confident young Japanese electrical engineer (male or female, early 20s) wearing a clean work uniform and a helmet, checking a tablet device. They are standing in a modern, clean server room or a high-tech building facility with cables and lights. The background suggests advanced infrastructure. The lighting is bright and futuristic (cyan and mint green accents). The composition has ample negative space on the left side for text. The style is realistic, professional, corporate photography, 8k.

**Prompt (Japanese translation for reference):**
> 映画のような高解像度のワイドショット。清潔な作業服とヘルメットを着用し、タブレット端末を確認している自信に満ちた若い日本人電気エンジニア（20代前半、男女問わず）。ケーブルや照明があるモダンでクリーンなサーバールームやハイテクビル施設に立っている。背景は高度なインフラを示唆している。照明は明るく未来的（シアンとミントグリーンのアクセント）。構図は、テキスト用に左側に十分な余白がある。スタイルはリアルでプロフェッショナルな企業写真、8k。

---

## 2. Concept Visual (`concept-visual.jpg`)

**役割**: 企業理念「NEXT LEADER」を伝える。
**イメージ**: 研修風景、成長、先輩と後輩、技術の継承。

**Prompt (English):**
> A bright and clean training room scene. A senior engineer is kindly teaching a young Japanese trainee how to read a blueprint or use a measuring tool. Both are smiling and look engaged. The atmosphere is warm, supportive, and professional. The background is slightly blurred but shows a modern office or training facility. Color palette: White, light gray, and mint green. 8k, photorealistic.

**Prompt (Japanese translation for reference):**
> 明るく清潔な研修室のシーン。シニアエンジニアが若い日本人の研修生に図面の読み方や測定ツールの使い方を親切に教えている。二人とも笑顔で、熱心に取り組んでいる。雰囲気は温かく、協力的で、プロフェッショナル。背景は少しぼやけているが、モダンなオフィスや研修施設が見える。カラーパレット：白、ライトグレー、ミントグリーン。8k、フォトリアル。

---

## 3. Recruit Background (`recruit-bg.jpg`)

**役割**: 採用セクションの背景。
**イメージ**: 仲間、チームワーク、達成感。

**Prompt (English):**
> A group of young Japanese construction and electrical staff (mixed gender) walking together in a modern office hallway or a clean site, looking towards the camera or chatting happily. They look like a close-knit team. Bright natural light. The image conveys "a place where you can grow" and "friendly colleagues". Wide angle, plenty of space for overlay text. 8k, realistic photography.

**Prompt (Japanese translation for reference):**
> モダンなオフィスの廊下や清潔な現場を一緒に歩いている、若い日本の建設・電気スタッフのグループ（男女混合）。カメラの方を見ているか、楽しそうに話している。仲の良いチームのように見える。明るい自然光。「成長できる場所」「親しみやすい同僚」を伝える画像。広角、オーバーレイテキスト用のスペースを確保。8k、リアルな写真。

---

## 4. Service Icons / Illustrations (Optional)

もしアイコンも画像生成で作る場合（3Dアイコン風）。

**Prompt (English):**
> A set of 3D rendered isometric icons representing construction and technology, on a white background. 1. A modern glass skyscraper building. 2. A bridge infrastructure. 3. A digital tablet with a blueprint on screen. The style is minimal, clean, matte finish. Colors: Mint green (#00C896), white, and soft gray. Soft lighting, soft shadows. High quality render.

---

## 生成のコツ

- **アスペクト比**:
  - PC用背景画像は `16:9` (例: `--ar 16:9`)
  - スマホ用は `9:16` (例: `--ar 9:16`)
  - Geminiで生成する場合は、プロンプトの後に「アスペクト比は16:9で」と付け加えるとスムーズです。
- **トーンの調整**:
  - もし画像が「暗い」と感じたら、`bright lighting`, `natural sunlight`, `high key` といった単語を追加してください。
  - 「建設現場」が汚く見えないように、`clean`, `modern`, `finished` という言葉を入れています。
