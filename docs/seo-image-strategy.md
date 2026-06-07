# SEO画像戦略 — 麺匠 龍神

## 1. 基本方針

麺匠 龍神のNext.jsホームページにおける画像SEOは以下の3軸で取り組む。

1. **検索流入の最大化** — altテキスト・構造化データによる画像検索対策
2. **SNSシェアの最適化** — OGP設定による拡散時の見栄え確保
3. **Core Web Vitals の改善** — LCP・CLSの最適化によるランキング向上

---

## 2. altテキスト戦略

### 基本ルール

- すべての `<img>` と `<Image>` コンポーネントに `alt` を設定する
- 装飾目的のみの画像は `alt=""` を明示する（省略しない）
- 「画像」「写真」などの語を冒頭に置かない
  - NG: `alt="醤油ラーメンの写真"`
  - OK: `alt="醤油ラーメン 龍神特製スープ 麺匠龍神"`

### ページ別 altテキスト指針

#### トップページ（FV）

```
alt="麺匠龍神のファーストビュー 本格醤油ラーメン"
```

キーワード優先順位: 店名 → メインメニュー名 → 特徴語

#### メニューページ

```
alt="[料理名] [スープの種類/特徴] 麺匠龍神"
例: alt="特製醤油ラーメン 清湯スープ 低加水細麺 麺匠龍神"
```

キーワード優先順位: 料理名 → 素材・特徴 → 店名

#### スタッフ・店舗ページ

```
alt="[氏名 or 役職] 麺匠龍神 [地域名]"
例: alt="店主 山田太郎 麺匠龍神 [地域名]"
```

#### ロゴ

```
alt="麺匠龍神 ロゴ"
```

### SEOキーワード参考リスト

本サイトで積極的に組み込むキーワード（実際の調査結果で更新）:

- 麺匠龍神
- [地域名] ラーメン
- [地域名] 醤油ラーメン
- 本格ラーメン [地域名]
- ラーメン 行列
- 龍神 ラーメン

---

## 3. OGP設定

### 基本メタタグ構成（Next.js `metadata` API）

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: '麺匠 龍神 | 本格醤油ラーメン',
  description: '...',
  openGraph: {
    title: '麺匠 龍神 | 本格醤油ラーメン',
    description: '...',
    url: 'https://example.com',
    siteName: '麺匠 龍神',
    images: [
      {
        url: '/images/ogp/ogp_top_web.jpg',
        width: 1200,
        height: 630,
        alt: '麺匠龍神 本格醤油ラーメン',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '麺匠 龍神 | 本格醤油ラーメン',
    description: '...',
    images: ['/images/ogp/ogp_top_web.jpg'],
  },
};
```

### ページ別OGP画像

| ページ | OGP画像 | 画像内テキスト |
|--------|---------|--------------|
| トップ | `ogp_top_web.jpg` | 店名 + キャッチコピー + 看板メニュー |
| メニュー | `ogp_menu_web.jpg` | 人気メニュー集合 + 店名 |
| アクセス | `ogp_access_web.jpg` | 外観写真 + 住所・営業時間 |

### OGP画像仕様

- サイズ: **1200×630px**
- 形式: **JPG**（WebPはSNSクローラー非対応の場合がある）
- ファイルサイズ: **150KB 以下**
- テキスト埋め込み: 画像全体の20%以下（Facebook推奨）

### 確認ツール

- [Facebook シェアデバッガー](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [OGP確認](https://ogp.me/)

---

## 4. Core Web Vitals 対策

### LCP（Largest Contentful Paint）— 目標: 2.5秒以下

LCPの主要因は**FV画像**。以下を必ず実施する。

#### Next.js `<Image>` コンポーネント設定

```tsx
// FV画像（最重要）
<Image
  src="/images/fv/fv_main_web_lg.webp"
  alt="麺匠龍神のファーストビュー 本格醤油ラーメン"
  width={1920}
  height={1080}
  priority          // LCP要素には必須
  sizes="100vw"
  quality={85}
/>

// メニュー画像（Above the fold 外）
<Image
  src="/images/menu/menu_shoyu-ramen_web_md.webp"
  alt="特製醤油ラーメン 麺匠龍神"
  width={1200}
  height={900}
  loading="lazy"    // デフォルトだが明示推奨
  sizes="(max-width: 768px) 100vw, 50vw"
  quality={80}
/>
```

#### `sizes` 属性の指定方針

| 配置 | sizes の値 |
|------|-----------|
| フルワイド（FV等） | `100vw` |
| 2カラム | `(max-width: 768px) 100vw, 50vw` |
| 3カラム（メニュー一覧） | `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw` |
| サムネイル | `(max-width: 768px) 50vw, 25vw` |

#### Preload（FVのみ）

```tsx
// app/layout.tsx の <head> 内
<link
  rel="preload"
  as="image"
  href="/images/fv/fv_main_web_lg.webp"
  type="image/webp"
/>
```

### CLS（Cumulative Layout Shift）— 目標: 0.1以下

画像の幅・高さを必ず指定し、レイアウトシフトを防ぐ。

```tsx
// 必ずwidth/heightを指定する（aspect-ratioの確保）
<Image
  src="..."
  alt="..."
  width={1200}   // 省略禁止
  height={900}   // 省略禁止
/>
```

`fill` を使う場合は親要素に `position: relative` と固定アスペクト比を設定:

```tsx
<div style={{ position: 'relative', aspectRatio: '4/3' }}>
  <Image src="..." alt="..." fill style={{ objectFit: 'cover' }} />
</div>
```

### FID / INP（インタラクション応答性）

- 画像の遅延読み込みに `Intersection Observer` を直接使わず、Next.js `<Image>` の `loading="lazy"` に委ねる
- 大量の画像がある一覧ページは **仮想スクロール**（`react-window` 等）を検討する

---

## 5. 構造化データ（JSON-LD）

### LocalBusiness + Restaurant

```tsx
// app/layout.tsx または app/page.tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: '麺匠 龍神',
  image: [
    'https://example.com/images/fv/fv_main_web_lg.webp',
    'https://example.com/images/store/ext_main_web_md.webp',
  ],
  logo: 'https://example.com/images/logo/logo_ryujin_color.svg',
  // ...住所・電話番号・営業時間等
};
```

### メニュー構造化データ

各メニューアイテムの画像も `image` プロパティに含める:

```tsx
{
  '@type': 'MenuItem',
  name: '特製醤油ラーメン',
  image: 'https://example.com/images/menu/menu_shoyu-ramen_web_md.webp',
  // ...
}
```

---

## 6. 計測・モニタリング

| ツール | 用途 | 確認タイミング |
|--------|------|--------------|
| Lighthouse | LCP / CLS / FID 総合スコア | デプロイ前・月1回 |
| Google Search Console | 画像検索表示回数・クリック数 | 月1回 |
| PageSpeed Insights | Core Web Vitals 実測値 | 月1回 |
| Chrome DevTools Coverage | 未使用画像の洗い出し | 四半期ごと |

### 目標スコア

| 指標 | 目標値 |
|------|--------|
| Lighthouse Performance | 90以上 |
| LCP | 2.5秒以下 |
| CLS | 0.1以下 |
| INP | 200ms以下 |
