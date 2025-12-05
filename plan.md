# plan.md

## 1. # meta

- `project_name`: Mirai Construction Corporate (株式会社ミライ建設)
- `goal`: 建設業界の古いイメージを払拭し、若年層（20代〜30代）に「かっこいい」「働きたい」と感じてもらい、採用および問い合わせにつなげる。
- `target_users`:
  - 20代〜30代の求職者（エンジニア、施工管理、営業）
  - スタートアップ〜中堅企業の担当者（新しいオフィスや施設を検討中）
- `brand_keywords`: Smart / Sustainable / Future / Clean / Professional
- `primary_color`: `#00C896` (Vibrant Mint Green - 若々しさとテック感)
- `secondary_colors`:
  - `secondary`: `#1A202C` (Dark Navy/Gray - 信頼感・引き締め)
  - `accent`: `#E2E8F0` (Light Gray - 余白・背景)
- `typography`:
  - En: 'Inter', sans-serif (Geometric & Modern)
  - Ja: 'Noto Sans JP', sans-serif (Legible & Universal)
- `layout_width`: `max-width: 1280px` (PC container)
- `tech_stack`: Next.js 14 (App Router) / TypeScript / React / Tailwind CSS / Framer Motion (for micro-animations)

---

## 2. # pages

- `/` : Home
  - `path`: `/`
  - `purpose`: ブランドイメージの確立と主要コンテンツへの導線。
  - `main_contents`: Hero, CONCEPT, BUSINESS, CLIENT, NEWS, RECRUIT CTA, CONTACT CTA, Footer.
- `/company` : Company
  - `path`: `/company`
  - `purpose`: 企業の信頼性とビジョンの共有。
  - `main_contents`: 代表挨拶, ミッション・ビジョン・バリュー, 会社概要, アクセス.
- `/service` : Service
  - `path`: `/service`
  - `purpose`: 事業内容の具体的な紹介。
  - `main_contents`: 建築事業, 土木事業, リノベーション事業, DX事業.
- `/client` : Client / Works
  - `path`: `/client`
  - `purpose`: 実績による信頼性の証明。
  - `main_contents`: 取引先ロゴ一覧, 主要プロジェクト事例（写真＋テキスト）.
- `/news` : News
  - `path`: `/news`
  - `purpose`: 企業の最新動向発信。
  - `main_contents`: ニュース一覧, カテゴリ絞り込み, 詳細記事.
- `/contact` : Contact
  - `path`: `/contact`
  - `purpose`: リード獲得。
  - `main_contents`: お問い合わせフォーム（入力・確認・完了）.
- `/recruit` : Recruit
  - `path`: `/recruit`
  - `purpose`: 採用エントリーへの誘導。
  - `main_contents`: 募集要項, 社員インタビュー, エントリーフォームへのリンク.
- `/privacy` : Privacy Policy
  - `path`: `/privacy`
  - `purpose`: 法的要件の充足。
  - `main_contents`: 個人情報保護方針.

---

## 3. # layout

## / (Home)

### hero
- `id`: `hero`
- `purpose`: 訪問者の興味を一瞬で惹きつけ、「新しい建設会社」であることを印象づける。
- `layout`:
  - PC: 画面全体を使ったフルスクリーンFV。背景に動画または高画質画像。中央にキャッチコピーを配置。
  - SP: 縦長フルスクリーン。
- `components`: `HeroSection`
- `content_slots`:
  - `heading_en`: "BUILD THE FUTURE"
  - `heading_ja`: "街を、未来を、アップデートせよ。"
  - `subcopy`: "テクノロジー × 建設で、持続可能な社会基盤を創る。\nミライ建設は、次世代のクリエイター集団です。"
  - `cta_primary`: "RECRUIT (採用情報)"
  - `cta_secondary`: "CONTACT (お問い合わせ)"
- `spacing`: `h-screen` (100vh), `w-full`

### concept
- `id`: `concept`
- `purpose`: 企業のミッション「Smart & Sustainable」を伝える。
- `layout`:
  - PC: 左に大きなタイポグラフィ（CONCEPT）、右にリード文と本文。背景に薄いグレーまたは幾何学パターン。
  - SP: 上下に配置。
- `components`: `SectionHeader`, `ConceptContent`
- `content_slots`:
  - `heading_en`: "CONCEPT"
  - `heading_ja`: "ミッション・ビジョン"
  - `lead`: "建設を、もっとスマートに。"
  - `body`: "私たちは従来の建設業の枠を超え、ITと建築を融合させた新しい価値を提供します..."
- `spacing`: `py-24` (PC), `py-16` (SP)

### business
- `id`: `business`
- `purpose`: 何をしている会社かを明確にする。
- `layout`:
  - PC: 3カラムのグリッドレイアウト。カード型デザイン。
  - SP: 1カラムのスタックレイアウト。
- `components`: `SectionHeader`, `ServiceCard` (x3)
- `content_slots`:
  - `heading_en`: "BUSINESS"
  - `heading_ja`: "事業内容"
  - `card_1`: "Architectural Design" (建築設計 - 最新のBIMを活用)
  - `card_2`: "Civil Engineering" (土木・インフラ - 安心安全な基盤づくり)
  - `card_3`: "Construction DX" (建設DX - 現場のデジタル化推進)
- `spacing`: `py-24` (PC), `py-16` (SP), `gap-8`

### client
- `id`: `client`
- `purpose`: 大手企業との取引実績を見せ、信頼感を醸成する。
- `layout`:
  - PC: ロゴをグレースケールで4〜5列グリッド表示。ホバーでカラー化。
  - SP: 2〜3列グリッド。
- `components`: `SectionHeader`, `LogoGrid`
- `content_slots`:
  - `heading_en`: "CLIENT"
  - `heading_ja`: "主要取引先"
  - `logos`: 8〜12社のロゴ画像
- `spacing`: `py-20` (PC), `py-12` (SP)

### news
- `id`: `news`
- `purpose`: 会社の動きを見せる。
- `layout`:
  - PC: シンプルなリスト形式。日付・カテゴリ・タイトル。右側に「View All」ボタン。
  - SP: リスト形式。
- `components`: `SectionHeader`, `NewsList`
- `content_slots`:
  - `heading_en`: "NEWS"
  - `heading_ja`: "お知らせ"
  - `items`: 最新3件のニュースデータ
- `spacing`: `py-20` (PC), `py-12` (SP)

### recruit_cta
- `id`: `recruit`
- `purpose`: 求職者への強い動機づけ。
- `layout`:
  - PC/SP共通: インパクトのある背景画像（若手社員が笑顔で働いている様子）の上に、白文字またはアクセントカラーでメッセージ。
- `components`: `CtaSection`
- `content_slots`:
  - `heading`: "JOIN OUR TEAM"
  - `subheading`: "あなたのアイデアが、地図に残る仕事になる。"
  - `button_label`: "採用情報を見る"
- `spacing`: `py-32` (PC), `py-24` (SP)

### contact_cta
- `id`: `contact`
- `purpose`: 案件相談の入り口。
- `layout`:
  - シンプルな背景色（Primary Color or Dark）にボタン配置。
- `components`: `SimpleCta`
- `content_slots`:
  - `text`: "プロジェクトのご相談・お見積もりはこちら"
  - `button_label`: "お問い合わせ"
- `spacing`: `py-16`

### footer
- `id`: `footer`
- `purpose`: ナビゲーションの終着点。
- `layout`:
  - PC: 4カラム（ロゴ・住所 / サイトマップ / SNS / コピーライト）。
  - SP: 1カラム。
- `components`: `Footer`
- `content_slots`:
  - `links`: Home, Company, Service, Client, News, Recruit, Contact, Privacy Policy
  - `copyright`: "© 2024 Mirai Construction Inc."
- `spacing`: `pt-16 pb-8`

---

## 4. # components

- `Navbar`
  - `purpose`: グローバルナビゲーション。
  - `props`: `links: { label: string; href: string }[]`
  - `behavior`: スクロールで背景が透明から白/Blurに変化。SPではハンバーガーメニュー展開。
  - `style`: 固定ヘッダー (`fixed top-0 w-full z-50`).

- `HeroSection`
  - `purpose`: トップページの顔。
  - `props`: `titleEn`, `titleJa`, `subcopy`, `backgroundImageUrl`
  - `style`: `h-screen` flex center. テキストはドロップシャドウ等で可読性確保。

- `SectionHeader`
  - `purpose`: セクションごとの見出し統一。
  - `props`: `titleEn` (e.g. "CONCEPT"), `titleJa` (e.g. "ミッション")
  - `style`: 英語は大きく太く (`text-primary`, `tracking-widest`), 日本語は小さめに添える。

- `ServiceCard`
  - `purpose`: 事業紹介用カード。
  - `props`: `title`, `description`, `icon`, `href`
  - `style`: 白背景, 軽いシャドウ, ホバーで浮き上がる (`hover:-translate-y-2`).

- `LogoGrid`
  - `purpose`: クライアントロゴ表示。
  - `props`: `logos: { src: string; alt: string }[]`
  - `style`: グリッドレイアウト (`grid-cols-2 md:grid-cols-4`). 画像は `grayscale hover:grayscale-0` transition.

- `NewsList`
  - `purpose`: ニュース一覧表示。
  - `props`: `items: { date: string; category: string; title: string; id: string }[]`
  - `style`: ボーダー区切りのリスト。日付は薄い色。

- `CtaSection`
  - `purpose`: 背景画像付きの強調CTA。
  - `props`: `title`, `subtitle`, `buttonText`, `href`, `backgroundImage`
  - `style`: `relative`, `overflow-hidden`. オーバーレイ (`bg-black/50`) を重ねて文字を見やすく。

- `Button`
  - `purpose`: 汎用ボタン。
  - `props`: `variant` ('primary', 'outline', 'white'), `size`, `children`
  - `style`: 角丸 (`rounded-full` or `rounded-md`), ホバーエフェクト。

- `Footer`
  - `purpose`: フッター。
  - `style`: 背景ダークグレー (`bg-gray-900`), テキスト白。

---

## 5. # styles

- `colors`:
  - `primary`: `#00C896` (Mint Green)
  - `primary_hover`: `#00A078`
  - `secondary`: `#1A202C` (Dark Navy)
  - `background`: `#F7FAFC` (Very Light Gray)
  - `surface`: `#FFFFFF` (White)
  - `text_primary`: `#2D3748` (Dark Gray)
  - `text_secondary`: `#718096` (Medium Gray)
  - `border`: `#E2E8F0`

- `typography`:
  - `font-family`: `Inter, sans-serif` (English), `Noto Sans JP, sans-serif` (Japanese)
  - `h1`: `text-4xl md:text-6xl font-bold` (Hero)
  - `h2`: `text-3xl md:text-4xl font-bold tracking-wider` (Section Titles)
  - `h3`: `text-xl md:text-2xl font-semibold` (Card Titles)
  - `body`: `text-base leading-relaxed` (1.75 line-height for readability)

- `spacing`:
  - Section Padding: `py-16 md:py-24`
  - Container Padding: `px-4 md:px-8`
  - Element Gap: `gap-4 md:gap-8`

- `tone & manner`:
  - **Minimal & Clean**: 装飾を削ぎ落とし、余白（Whitespace）を贅沢に使う。
  - **Modern Tech**: グラデーションは控えめに、フラット〜セミフラットなデザイン。
  - **Trustworthy**: 奇抜すぎず、グリッドに沿った整然としたレイアウト。

---

## 6. # responsiveness

- `breakpoints`:
  - `sm`: 640px (Mobile landscape / Large phones)
  - `md`: 768px (Tablets)
  - `lg`: 1024px (Laptops)
  - `xl`: 1280px (Desktops)

- `policies`:
  - **Mobile First**: SPのデザインを基準に、PCで拡張する実装方針（Tailwindのデフォルト）。
  - **Stack to Grid**: SPでは縦積み (`flex-col`), PCでは横並び (`flex-row` / `grid-cols-3`).
  - **Typography Scaling**: SPでは見出しサイズを `0.8x` 程度に抑えるが、可読性のため本文サイズは `14px` を下回らないようにする（基本 `16px`）。
  - **Touch Targets**: SPでのボタン・リンクは `44px` 以上のタップ領域を確保。

---

## 7. # content_mapping

### / (Home)

| Section | Component | Slot | Content (Draft) |
| :--- | :--- | :--- | :--- |
| **hero** | HeroSection | `titleEn` | BUILD THE FUTURE |
| | | `subcopy` | テクノロジーで、建設の常識を変える。<br>ミライ建設は、次世代の街づくりに挑戦します。 |
| | | `cta` | RECRUIT / CONTACT |
| **concept** | ConceptContent | `heading` | CONCEPT / ミッション |
| | | `body` | 「建設 × IT」で、持続可能な社会インフラを。<br>私たちは、ただ建てるだけでなく、<br>その先の暮らしと未来をデザインします。 |
| **business** | ServiceCard | `card1` | **Architectural Design**<br>BIMを活用した次世代の建築設計 |
| | | `card2` | **Civil Engineering**<br>安心・安全を支える高度な土木技術 |
| | | `card3` | **DX Solutions**<br>建設現場のデジタル化と効率化推進 |
| **client** | LogoGrid | `logos` | (Placeholder Logos 1-8) |
| **news** | NewsList | `items` | 2024.05.20 [Press] 本社移転のお知らせ<br>2024.04.01 [Recruit] 2025年度新卒採用を開始しました<br>2024.03.15 [Works] 「渋谷〇〇ビル」が竣工しました |
| **recruit** | CtaSection | `heading` | JOIN OUR TEAM |
| | | `text` | 私たちと一緒に、地図に残る仕事をしませんか？ |

---

## 8. # assets

- `images/hero-bg.jpg`:
  - Role: ヒーロー背景。
  - Description: 青空と建設中のビル、またはタブレットを持って現場指揮する若手エンジニア。明るくクリーンな印象。
  - Aspect: 16:9 (Landscape), 9:16 (Portrait for SP)

- `images/concept-visual.jpg`:
  - Role: コンセプトセクション用。
  - Description: オフィスのミーティング風景、または完成予想図のCG。
  - Aspect: 4:3 or 1:1

- `images/recruit-bg.jpg`:
  - Role: 採用CTA背景。
  - Description: 社員が談笑している自然な様子。チームワークを強調。
  - Aspect: 3:1 (Wide)

- `icons/service-*.svg`:
  - Role: 事業内容アイコン。
  - Description: シンプルなラインアイコン（ビル、橋、スマホ/PCなど）。

---

## 9. # seo

- `title`: 株式会社ミライ建設 | Build The Future - 次世代の建設会社
- `description`: 株式会社ミライ建設の公式サイトです。建築・土木・DX事業を通じて、持続可能な社会基盤を創造します。採用情報、事業内容、実績紹介はこちら。
- `keywords`: 建設, 建築, 土木, DX, 採用, 若手, ミライ建設, 東京

---

## 10. # accessibility

- **Color Contrast**:
  - Primary Color (`#00C896`) 上のテキストは `White` または `Black` でコントラスト比 4.5:1 以上を確保する。
  - 薄いグレー文字 (`#718096`) は背景白に対して十分なコントラストがあるか確認。
- **Alt Text**:
  - 装飾画像（背景パターンなど）は `alt=""`。
  - 意味のある画像（実績写真など）は「渋谷〇〇ビルの外観」のように具体的に記述。
- **Focus States**:
  - キーボード操作時にフォーカスリング（`ring-2 ring-primary`）が表示されるようにTailwindの `focus-visible` を活用する。
