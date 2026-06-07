# ファイル命名規則 — 麺匠 龍神

## 1. 基本フォーマット

```
[カテゴリ]_[詳細/番号]_[用途]_[サイズ].[拡張子]
```

### 各セグメントの定義

| セグメント | 内容 | 必須 |
|-----------|------|------|
| カテゴリ | 画像の種別（下記一覧参照） | ✅ |
| 詳細/番号 | 料理名・シーン・連番など | ✅ |
| 用途 | 配信先・用途（下記一覧参照） | ✅ |
| サイズ | 解像度識別子（下記一覧参照） | 元データ以外は必須 |
| 拡張子 | ファイル形式 | ✅ |

## 2. カテゴリ識別子

| 識別子 | 対象 |
|--------|------|
| `fv` | ファーストビュー |
| `menu` | メニュー料理写真 |
| `ext` | 店舗外観（exterior） |
| `int` | 店舗内観（interior） |
| `cook` | 調理・厨房シーン |
| `staff` | スタッフ写真 |
| `ingr` | 食材・素材 |
| `cust` | 来客・店内風景 |
| `logo` | ロゴ |
| `ogp` | OGP画像 |
| `icon` | アイコン・ファビコン |

## 3. 用途識別子

| 識別子 | 対象 |
|--------|------|
| `web` | Web配信（通常） |
| `ogp` | OGP・SNSシェア用 |
| `thumb` | サムネイル |
| `social` | SNS投稿用 |
| `bg` | 背景画像 |
| `orig` | 元データ（original フォルダ専用） |

## 4. サイズ識別子

| 識別子 | 解像度 | 対象 |
|--------|--------|------|
| `lg` | 1920px〜 | デスクトップ大 |
| `md` | 1200px〜1919px | デスクトップ標準 |
| `sm` | 750px〜1199px | モバイル / タブレット |
| `xs` | ～749px | モバイル小 |
| `thumb` | 〜400px | サムネイル |

## 5. 命名例

### メニュー写真

```
# 元データ（original/）
menu_shoyu-ramen_orig_01.jpg
menu_miso-ramen_orig_02.jpg
menu_tsukemen_orig_03.jpg

# Web配信用 WebP（optimized/webp/menu/）
menu_shoyu-ramen_web_md.webp
menu_shoyu-ramen_web_sm.webp

# サムネイル（optimized/thumbnails/menu/）
menu_shoyu-ramen_thumb.webp
```

### ファーストビュー

```
# 元データ
fv_main_orig_01.jpg

# デスクトップ用
fv_main_web_lg.webp

# モバイル用
fv_main_web_sm.webp
```

### スタッフ写真

```
# 元データ
staff_yamada-taro_orig_01.jpg

# Web配信用
staff_yamada-taro_web_md.webp

# サムネイル
staff_yamada-taro_thumb.webp
```

### ロゴ

```
logo_ryujin_white.svg
logo_ryujin_black.svg
logo_ryujin_color.svg
logo_ryujin_color_lg.png    # 512×512px
logo_ryujin_color_sm.png    # 128×128px
logo_ryujin_favicon.png     # 32×32px
```

### OGP画像

```
ogp_top_web.jpg
ogp_menu_web.jpg
ogp_access_web.jpg
```

## 6. 命名規則の詳細ルール

### 文字・記号

- すべて**小文字**を使用する
- 単語の区切りは**ハイフン `-`** を使用する（スペース・アンダースコアは混在させない）
  - NG: `menu_Shoyu Ramen_web.webp`
  - OK: `menu_shoyu-ramen_web_md.webp`
- セグメント同士の区切りは**アンダースコア `_`** を使用する
- 日本語・全角文字・特殊文字（`! @ # $ % & ( ) [ ] { } , . ; ' "`）は使用禁止

### 連番

- 複数ファイルが存在する場合は末尾に `_01` `_02` と2桁の連番を付与する
- 元データの連番は撮影順を基準にする（後から差し込まない）

### バージョン管理

- 差し替えが発生した場合は `_v2` `_v3` を末尾に付与して旧ファイルを残す
- 最終採用版が確定したら旧バージョンを `backup/before-edit/` に移動する

## 7. 禁止事項

| 禁止 | 理由 |
|------|------|
| 日本語・全角文字を含む名前 | URLエンコード問題・Next.js パス解決の不具合 |
| スペースを含む名前 | パス指定時のエスケープ漏れによるバグ |
| `IMG_0001.jpg` などカメラデフォルト名のまま使用 | 用途・内容が判別できない |
| `final` `new` `最新` などの曖昧な語 | バージョン管理が破綻する |
| 大文字の混在 | OSによる大文字小文字の扱いの差異でバグが発生する |
| 拡張子の大文字（`.JPG` `.PNG`） | 同上 |

## 8. チェックリスト（ファイル追加時）

- [ ] すべて小文字か
- [ ] 日本語・スペース・特殊文字が含まれていないか
- [ ] カテゴリ・用途・サイズが命名に含まれているか
- [ ] 元データは `original/` に格納されているか
- [ ] 最適化済みファイルのみ `public/images/` に配置されているか
