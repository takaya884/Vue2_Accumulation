<template>
  <div class="home">
    <h1>{{ $store.getters.appInfo }}</h1>
    
    <div class="welcome-section">
      <h2>Vue 2 Option API の勉強へようこそ！</h2>
      <p>このアプリケーションでは、Vue 2のOption APIの様々な機能を学ぶことができます。</p>
    </div>

    <div class="features-grid">
      <div class="feature-card" v-for="feature in features" :key="feature.id">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
        <span class="status" :class="feature.status">{{ feature.statusText }}</span>
      </div>
    </div>

    <div class="todo-section">
      <h2>TODO管理機能</h2>
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoList from '@/components/common/TodoList.vue'

export default {
  name: 'Home',
  components: {
    TodoList
  },
  data() {
    return {
      features: [
        {
          id: 1,
          title: 'データバインディング',
          description: '双方向データバインディングの基本',
          status: 'completed',
          statusText: '完了'
        },
        {
          id: 2,
          title: 'コンポーネント',
          description: '再利用可能なコンポーネントの作成',
          status: 'completed',
          statusText: '完了'
        },
        {
          id: 3,
          title: 'Vue Router',
          description: 'SPAのルーティング機能',
          status: 'in-progress',
          statusText: '進行中'
        },
        {
          id: 4,
          title: 'Vuex',
          description: '状態管理の実装',
          status: 'in-progress',
          statusText: '進行中'
        }
      ]
    }
  },
  mounted() {
    console.log('Home component mounted')
  }
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.welcome-section {
  background: linear-gradient(135deg, #42b883, #369870);
  color: white;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #42b883;
}

.status {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.status.completed {
  background-color: #d4edda;
  color: #155724;
}

.status.in-progress {
  background-color: #fff3cd;
  color: #856404;
}

.todo-section {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
</style> 