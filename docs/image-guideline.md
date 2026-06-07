# 画像管理ガイドライン — 麺匠 龍神

## 1. フォルダ構成と用途

```
assets/
├── original/          # 撮影・入稿の元データ（編集・削除禁止）
│   ├── fv/            # ファーストビュー用メイン画像
│   ├── menu/          # メニュー料理写真
│   ├── exterior/      # 店舗外観
│   ├── interior/      # 店舗内観
│   ├── cooking/       # 調理・厨房シーン
│   ├── staff/         # スタッフ写真
│   ├── ingredients/   # 食材・素材クローズアップ
│   ├── customers/     # 来客・店内風景（許可取得済みのみ）
│   └── logo/          # ロゴデータ（AI・SVG・PNG）
│
├── optimized/         # Web配信用に最適化済みデータ
│   ├── webp/          # WebP変換済み（デスクトップ基準）
│   │   ├── fv/
│   │   ├── menu/
│   │   ├── exterior/
│   │   └── interior/
│   ├── mobile/        # モバイル向けリサイズ済み（最大 750px幅）
│   │   ├── fv/
│   │   └── menu/
│   ├── desktop/       # デスクトップ向けリサイズ済み（最大 1920px幅）
│   │   ├── fv/
│   │   └── menu/
│   └── thumbnails/    # サムネイル（最大 400px幅）
│       ├── menu/
│       └── staff/
│
├── figma/             # Figmaデザインデータ連携
│   ├── exported/      # Figmaからエクスポートしたアセット
│   ├── preview/       # デザイン確認用プレビュー画像
│   └── components/    # コンポーネント単位の切り出し画像
│
├── social/            # SNS・外部サービス向け
│   ├── instagram/     # Instagram投稿用（1:1 / 4:5）
│   ├── google-business/ # Googleビジネスプロフィール用
│   └── x/             # X（旧Twitter）投稿用（16:9）
│
└── backup/
    └── before-edit/   # 編集前バックアップ

public/
└── images/            # Next.js配信用（optimizedからコピー）
    ├── fv/
    ├── menu/
    ├── store/
    ├── staff/
    └── logo/
```

## 2. 使用ファイル形式

| 用途 | 推奨形式 | 備考 |
|------|---------|------|
| 写真（Web配信） | WebP | フォールバック用JPGも用意 |
| 写真（元データ保管） | JPG / PNG | 圧縮なし高解像度 |
| ロゴ・アイコン | SVG / PNG | SVGを優先、PNG はサイズ別複数用意 |
| OGP画像 | JPG | 1200×630px、SNSクローラー互換性のため |
| Figmaエクスポート | PNG / SVG | 用途に応じて選択 |

## 3. 解像度・サイズ基準

| カテゴリ | デスクトップ | モバイル | サムネイル |
|---------|-------------|---------|-----------|
| FV | 1920×1080px | 750×500px | — |
| メニュー写真 | 1200×900px | 750×563px | 400×300px |
| スタッフ写真 | 800×1000px | 600×750px | 400×500px |
| 店舗外観・内観 | 1600×1067px | 750×500px | — |
| OGP | 1200×630px | — | — |

## 4. 最適化フロー

```
[撮影 / 入稿]
    ↓
[assets/original/ に元データ保存]（リネーム後・上書き禁止）
    ↓
[リサイズ処理]（デスクトップ / モバイル / サムネイル）
    ↓
[WebP変換]（ツール：Squoosh / sharp / cwebp）
    ↓
[assets/optimized/ に格納]
    ↓
[動作・表示確認]（Lighthouse / ブラウザプレビュー）
    ↓
[public/images/ にコピー]（Next.js 配信用）
```

### 推奨ツール

- **sharp**（Node.js）: バッチリサイズ・WebP変換の自動化
- **Squoosh**（GUI）: 手動での品質調整
- **cwebp**（CLI）: WebP一括変換

### 品質設定目安

| 形式 | quality値 | ファイルサイズ目安 |
|------|-----------|-----------------|
| WebP（写真） | 80〜85 | 100KB 以下 / 枚 |
| WebP（FV） | 85〜90 | 200KB 以下 / 枚 |
| JPG（OGP） | 85 | 150KB 以下 |

## 5. 運用ルール

- `original/` フォルダのファイルは**絶対に上書き・削除しない**
- `public/images/` には最適化済みファイルのみ配置する
- 顧客・スタッフの写真は**使用許諾書を取得してから** `original/` に保存する
- 新規カテゴリが必要な場合は本ガイドラインも同時に更新する
- 月1回を目安に `backup/before-edit/` を整理し、古いバックアップを削除する

---

## 6. 画像配置ルール

### 保存先の基本原則

1. **元画像は `assets/original/` に保存する** — 撮影・入稿データの一次保管場所
2. **Web表示用画像は `public/images/` に保存する** — Next.js から配信する最適化済みファイルのみ
3. **元画像を直接 `public/images/` に入れない** — 未最適化ファイルの誤配信を防ぐ

### ファイル名規則

4. **ファイル名は英数字・小文字・ハイフンまたはアンダースコアのみ使用する**
   - OK: `menu_shoyu-ramen_web_md.webp`
   - NG: `MenuShouyu.webp` / `menu ramen.webp`
5. **日本語ファイル名は禁止** — URLエンコード問題・Next.js パス解決の不具合を防ぐ
   - NG: `醤油ラーメン.jpg` / `店舗外観01.png`

### 差し替えルール

6. **画像差し替え時は既存ファイルを上書きせず、`_02` `_03` の連番で保存する**
   - 例: `fv_main_web_lg.webp` → `fv_main_web_lg_02.webp`
   - 旧ファイルは `assets/backup/before-edit/` に移動してから削除する

### カテゴリ別保存先

| カテゴリ | 保存先 |
|---------|--------|
| FV画像 | `public/images/fv/` |
| メニュー画像 | `public/images/menu/` |
| 店舗画像（外観・内観） | `public/images/store/` |
| スタッフ画像 | `public/images/staff/` |
| ロゴ画像 | `public/images/logo/` |
