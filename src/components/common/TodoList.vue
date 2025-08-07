<template>
  <div class="todo-list">
    <div class="todo-header">
      <h3>TODO管理</h3>
      <div class="todo-filters">
        <button 
          v-for="filter in filters" 
          :key="filter.value"
          @click="setFilter(filter.value)"
          :class="{ active: currentFilter === filter.value }"
          class="filter-btn"
        >
          {{ filter.label }}
        </button>
      </div>
    </div>

    <div class="todo-input">
      <input 
        v-model="newTodo" 
        @keyup.enter="addTodo"
        placeholder="新しいTODOを入力してください"
        class="todo-input-field"
      >
      <button @click="addTodo" class="add-btn">追加</button>
    </div>

    <div class="todo-stats">
      <span>総数: {{ todoCount }}</span>
      <span>完了: {{ completedCount }}</span>
      <span>未完了: {{ todoCount - completedCount }}</span>
    </div>

    <ul class="todo-items">
      <li 
        v-for="todo in filteredTodos" 
        :key="todo.id"
        :class="{ completed: todo.completed }"
        class="todo-item"
      >
        <input 
          type="checkbox" 
          :checked="todo.completed"
          @change="toggleTodo(todo.id)"
          class="todo-checkbox"
        >
        <span class="todo-text">{{ todo.text }}</span>
        <button @click="deleteTodo(todo.id)" class="delete-btn">削除</button>
      </li>
    </ul>

    <div v-if="filteredTodos.length === 0" class="empty-state">
      <p>{{ emptyStateMessage }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TodoList',
  data() {
    return {
      newTodo: '',
      filters: [
        { value: 'all', label: 'すべて' },
        { value: 'active', label: '未完了' },
        { value: 'completed', label: '完了' }
      ]
    }
  },
  computed: {
    ...mapGetters('todos', [
      'filteredTodos',
      'todoCount',
      'completedCount'
    ]),
    currentFilter() {
      return this.$store.state.todos.filter
    },
    emptyStateMessage() {
      switch (this.currentFilter) {
        case 'active':
          return '未完了のTODOはありません'
        case 'completed':
          return '完了したTODOはありません'
        default:
          return 'TODOがありません。新しいTODOを追加してください'
      }
    }
  },
  methods: {
    ...mapActions('todos', [
      'addTodo',
      'toggleTodo',
      'deleteTodo',
      'setFilter'
    ]),
    addTodo() {
      if (this.newTodo.trim()) {
        this.addTodo(this.newTodo)
        this.newTodo = ''
      }
    }
  }
}
</script>

<style scoped>
.todo-list {
  max-width: 600px;
  margin: 0 auto;
}

.todo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.todo-filters {
  display: flex;
  gap: 0.5rem;
}

.filter-btn {
  background: #f8f9fa;
  border: 1px solid #ddd;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn:hover {
  background: #e9ecef;
}

.filter-btn.active {
  background: #42b883;
  color: white;
  border-color: #42b883;
}

.todo-input {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.todo-input-field {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.add-btn {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-btn:hover {
  background: #369870;
}

.todo-stats {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #6c757d;
}

.todo-items {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  transition: all 0.3s;
}

.todo-item:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.todo-item.completed {
  background: #f8f9fa;
  opacity: 0.7;
}

.todo-checkbox {
  margin-right: 1rem;
  transform: scale(1.2);
}

.todo-text {
  flex: 1;
  margin-right: 1rem;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #6c757d;
}

.delete-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-btn:hover {
  background: #c82333;
}

.empty-state {
  text-align: center;
  padding: 2rem;
  color: #6c757d;
  background: #f8f9fa;
  border-radius: 4px;
}
</style> 