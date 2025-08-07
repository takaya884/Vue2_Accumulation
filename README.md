# Vue 2 Study App

Vue.js 2系のOption APIを学習するためのサンプルアプリケーションです。

## 🚀 機能

- **Vue 2 Option API**: 基本的なデータバインディング、コンポーネント、ライフサイクル
- **Vue Router**: SPAのルーティング機能
- **Vuex**: 状態管理（TODO管理機能付き）
- **レスポンシブデザイン**: モバイル対応のUI
- **モジュラー構成**: 再利用可能なコンポーネントとサービス

## 📁 プロジェクト構成

```
my-vue-project/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/          # 静的ファイル（画像、CSS等）
│   │   ├── images/
│   │   └── styles/
│   ├── components/      # 再利用可能なコンポーネント
│   │   ├── common/      # 共通コンポーネント
│   │   └── ui/          # UIコンポーネント
│   ├── views/           # ページコンポーネント
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   └── Contact.vue
│   ├── router/          # Vue Router設定
│   │   └── index.js
│   ├── store/           # Vuex状態管理
│   │   ├── index.js
│   │   └── modules/
│   ├── plugins/         # プラグイン設定
│   ├── utils/           # ユーティリティ関数
│   ├── services/        # API通信等
│   ├── mixins/          # ミックスイン
│   ├── directives/      # カスタムディレクティブ
│   ├── filters/         # フィルター（Vue 2系）
│   ├── App.vue          # ルートコンポーネント
│   └── main.js          # エントリーポイント
├── tests/               # テストファイル
├── package.json
└── vue.config.js        # Vue CLI設定
```

## 🛠️ 技術スタック

- **Vue.js**: 2.7.16
- **Vue Router**: 3.6.5
- **Vuex**: 3.6.2
- **Webpack**: 5.88.2
- **SCSS**: スタイリング

## 📦 インストール

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev

# 本番ビルド
npm run build
```

## 🎯 学習内容

### 1. データバインディング
- テンプレート構文
- 双方向データバインディング（v-model）
- 条件付きレンダリング（v-if, v-show）
- リストレンダリング（v-for）

### 2. コンポーネント
- 単一ファイルコンポーネント（.vue）
- Props（親から子へのデータ渡し）
- Emit（子から親へのイベント発火）
- スロット（コンテンツの挿入）

### 3. ライフサイクル
- created, mounted, updated, destroyed
- ライフサイクルフックの活用

### 4. Vue Router
- ルート設定
- ナビゲーション
- 遅延読み込み

### 5. Vuex
- 状態管理
- ストア、ミューテーション、アクション、ゲッター
- モジュール化

## 🎨 ページ構成

### Home
- アプリケーションの概要
- 機能一覧
- TODO管理機能

### About
- プロジェクトの詳細
- 学習内容
- 技術スタック

### Contact
- お問い合わせフォーム
- バリデーション機能

## 🔧 開発

### 開発サーバーの起動
```bash
npm run dev
```

### ビルド
```bash
npm run build
```

### テスト
```bash
npm run test
```

## 📝 TODO管理機能

Vuexを使用したTODO管理機能を実装しています：

- TODOの追加・削除・完了切り替え
- フィルタリング（すべて・未完了・完了）
- 統計表示（総数・完了数・未完了数）

## 🎯 学習のポイント

1. **Option APIの理解**: data, computed, methods, watch, lifecycle hooks
2. **コンポーネント設計**: 再利用性と保守性を考慮した設計
3. **状態管理**: Vuexを使ったグローバル状態の管理
4. **ルーティング**: SPAの実装とナビゲーション
5. **実践的な開発**: 実際のアプリケーション開発の流れ

## 📚 参考資料

- [Vue.js 公式ドキュメント](https://v2.vuejs.org/)
- [Vue Router 公式ドキュメント](https://router.vuejs.org/)
- [Vuex 公式ドキュメント](https://vuex.vuejs.org/)

## 🤝 コントリビューション

このプロジェクトは学習目的で作成されています。改善提案やバグ報告は歓迎します。

## 📄 ライセンス

MIT License