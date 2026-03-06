# 株式会社リッチ＆ビルド コーポレートサイト

人材総合コンサルタント「株式会社リッチ＆ビルド」のコーポレートサイトです。

## 技術スタック

- **Framework:** Next.js 15.1.0
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Icons:** Lucide React

## ページ構成

- `/` - トップページ
- `/company` - 会社概要
- `/service` - サービス紹介
- `/recruit` - 採用情報
- `/news` - お知らせ
- `/contact` - お問い合わせ
- `/client` - 取引先情報
- `/privacy` - プライバシーポリシー

## SEO / LLMO 対応

技術的SEOとLLMO（LLM Optimization）基盤を実装済みです。

### 自動生成エンドポイント
- `/sitemap.xml` — 全ページのXMLサイトマップ
- `/robots.txt` — クローラー指示（GPTBot, Claude-Web, PerplexityBot等のLLMボット明示許可）
- `/manifest.webmanifest` — Web App Manifest
- `/opengraph-image` — OG画像（動的生成 1200x630）
- `/twitter-image` — Twitter Card画像（動的生成）
- `/apple-icon` — Apple Touch Icon（動的生成 180x180）

### 各ページ実装済み
- Open Graph / Twitter Cards メタデータ
- JSON-LD 構造化データ（Organization, LocalBusiness, WebSite, BreadcrumbList, Service, FAQPage, AboutPage, ContactPage）
- ページ固有の title / description / keywords / canonical URL
- セキュリティHTTPヘッダー（X-Content-Type-Options, Referrer-Policy, Permissions-Policy）

### Google Search Console 登録手順

1. [Google Search Console](https://search.google.com/search-console) にアクセス
2. 「プロパティを追加」→「URLプレフィックス」→ `https://rich-and-build.co.jp` を入力
3. 確認方法「HTMLタグ」を選択 → `content="●●●●"` の値をコピー
4. `.env.local` に設定：
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=●●●●
   ```
5. デプロイ後、Search Console で「確認」をクリック
6. 左メニュー →「サイトマップ」→ `https://rich-and-build.co.jp/sitemap.xml` を送信

## お問い合わせフォーム

### 構成：mailto リンク方式

フォーム入力内容を `mailto:` リンクに埋め込み、ユーザーのメーラーを起動して送信する方式です。

- フロントエンド: `src/app/contact/page.tsx`
- バックエンド: なし（APIルート不要）
- 送信先: `info@richandbuild.com`
- 外部サービス・環境変数・DNS設定: すべて不要

## セットアップ

```bash
# 依存関係のインストール
npm install

# 環境変数の設定
cp .env.example .env.local
# .env.local を編集して必要な値を設定

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm start
```

## 開発

開発サーバーは http://localhost:3000 で起動します。

```bash
npm run dev
```

## ライセンス

All rights reserved.
