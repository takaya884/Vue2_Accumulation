<template>
  <div class="about">
    <h1>About</h1>
    
    <div class="about-content">
      <div class="about-section">
        <h2>このプロジェクトについて</h2>
        <p>このプロジェクトは、Vue 2のOption APIを学習するためのサンプルアプリケーションです。</p>
        <p>Vue 2の基本的な機能から、Vue Router、Vuexなどの高度な機能まで、段階的に学ぶことができます。</p>
      </div>

      <div class="about-section">
        <h2>学習内容</h2>
        <ul class="learning-list">
          <li v-for="item in learningItems" :key="item.id" class="learning-item">
            <span class="item-icon" :class="item.status">{{ item.icon }}</span>
            <div class="item-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="about-section">
        <h2>技術スタック</h2>
        <div class="tech-stack">
          <div class="tech-item" v-for="tech in techStack" :key="tech.name">
            <h3>{{ tech.name }}</h3>
            <p>{{ tech.description }}</p>
            <span class="version">v{{ tech.version }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      learningItems: [
        {
          id: 1,
          title: 'データバインディング',
          description: 'テンプレート構文、双方向データバインディング',
          icon: '📝',
          status: 'completed'
        },
        {
          id: 2,
          title: 'コンポーネント',
          description: '単一ファイルコンポーネント、props、emit',
          icon: '🧩',
          status: 'completed'
        },
        {
          id: 3,
          title: 'ライフサイクル',
          description: 'created、mounted、updatedなどのフック',
          icon: '⏰',
          status: 'completed'
        },
        {
          id: 4,
          title: 'Vue Router',
          description: 'SPAのルーティング、ナビゲーション',
          icon: '🗺️',
          status: 'in-progress'
        },
        {
          id: 5,
          title: 'Vuex',
          description: '状態管理、ストア、モジュール',
          icon: '🏪',
          status: 'in-progress'
        }
      ],
      techStack: [
        {
          name: 'Vue.js',
          description: 'プログレッシブJavaScriptフレームワーク',
          version: '2.7.16'
        },
        {
          name: 'Vue Router',
          description: 'Vue.js公式ルーター',
          version: '3.x'
        },
        {
          name: 'Vuex',
          description: 'Vue.js公式状態管理ライブラリ',
          version: '3.x'
        }
      ]
    }
  }
}
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
}

.about-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.about-section {
  margin-bottom: 2rem;
}

.about-section:last-child {
  margin-bottom: 0;
}

.learning-list {
  list-style: none;
  padding: 0;
}

.learning-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.item-icon {
  font-size: 2rem;
  margin-right: 1rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: #42b883;
  color: white;
}

.item-icon.completed {
  background: #28a745;
}

.item-icon.in-progress {
  background: #ffc107;
  color: #212529;
}

.item-content h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.item-content p {
  margin: 0;
  color: #6c757d;
}

.tech-stack {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.tech-item {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.tech-item h3 {
  margin: 0 0 0.5rem 0;
  color: #42b883;
}

.tech-item p {
  margin: 0 0 0.5rem 0;
  font-size: 0.875rem;
  color: #6c757d;
}

.version {
  background: #42b883;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}
</style> 