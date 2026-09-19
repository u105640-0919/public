# Astro Webサイト 雛形プロジェクト

Astroで作成されたモダンで軽量なWebページのスターター雛形です。

## 📁 プロジェクト構成

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages 自動デプロイワークフロー
├── public/                  # ビルド処理を通さない静的アセット（ファビコンや画像など）
│   └── favicon.svg
├── src/
│   ├── components/          # 再利用可能なUIコンポーネント
│   │   ├── Header.astro     # サイトヘッダー＆ナビゲーション
│   │   └── Footer.astro     # サイトフッター
│   ├── layouts/             # 共通レイアウト枠
│   │   └── Layout.astro     # HTMLシェル、メタタグ、基本スタイル
│   ├── pages/               # ページルーティング（ファイル名がURLに対応）
│   │   ├── index.astro      # トップページ (/)
│   │   └── about.astro      # アバウトページ (/about)
│   └── utils/
│       └── path.ts          # base URL対応パス生成ユーティリティ
├── astro.config.mjs         # Astro設定ファイル（site, base 設定済み）
└── package.json
```

## 🛠️ よく使うコマンド

| コマンド | 説明 |
| :--- | :--- |
| `npm run dev` | 開発サーバーを起動 (`http://localhost:4321/public/`) |
| `npx astro dev --background` | 開発サーバーをバックグラウンドで起動 |
| `npx astro dev status` | 開発サーバーの稼働状態を確認 |
| `npx astro dev stop` | バックグラウンド開発サーバーを停止 |
| `npm run build` | 本番用静的ファイルを出力 (`./dist/`) |
| `npm run preview` | ビルドした成果物をローカルでプレビュー確認 |

## 🚀 GitHub Pages へのデプロイ手順

1. **GitHub リポジトリ設定**:
   - リポジトリの **Settings** > **Pages** を開きます。
   - **Build and deployment** の **Source** で **「GitHub Actions」** を選択します。

2. **コードのプッシュ**:
   - `main` ブランチにコミットしてプッシュすると、`.github/workflows/deploy.yml` が自動的に実行され、デプロイされます。

```bash
git add .
git commit -m "feat: setup Astro project with GitHub Pages deployment"
git push origin main
```

3. **公開先URL**:
   - `https://u105640-0919.github.io/public/`

## 📚 ドキュメント

- [Astro 公式ドキュメント](https://docs.astro.build/ja/)
- [GitHub Pages へのデプロイガイド](https://docs.astro.build/ja/guides/deploy/github/)
- [ルーティングの解説](https://docs.astro.build/ja/guides/routing/)
- [コンポーネントの基本](https://docs.astro.build/ja/basics/astro-components/)
