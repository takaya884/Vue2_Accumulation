<template>
  <div class="contact">
    <h1>Contact</h1>
    
    <div class="contact-content">
      <div class="contact-info">
        <h2>お問い合わせ</h2>
        <p>このプロジェクトについて質問やフィードバックがございましたら、お気軽にお問い合わせください。</p>
        
        <div class="contact-methods">
          <div class="contact-method">
            <h3>📧 Email</h3>
            <p>example@vue2study.com</p>
          </div>
          <div class="contact-method">
            <h3>🐙 GitHub</h3>
            <p>github.com/vue2study</p>
          </div>
        </div>
      </div>

      <div class="contact-form">
        <h2>メッセージを送信</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">お名前</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              required
              placeholder="お名前を入力してください"
            >
          </div>

          <div class="form-group">
            <label for="email">メールアドレス</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required
              placeholder="メールアドレスを入力してください"
            >
          </div>

          <div class="form-group">
            <label for="subject">件名</label>
            <select id="subject" v-model="form.subject" required>
              <option value="">件名を選択してください</option>
              <option value="question">質問</option>
              <option value="feedback">フィードバック</option>
              <option value="bug">バグ報告</option>
              <option value="feature">機能要望</option>
              <option value="other">その他</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">メッセージ</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="5" 
              required
              placeholder="メッセージを入力してください"
            ></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? '送信中...' : '送信する' }}
          </button>
        </form>
      </div>
    </div>

    <!-- 送信成功メッセージ -->
    <div v-if="showSuccess" class="success-message">
      <p>メッセージが正常に送信されました！</p>
      <button @click="showSuccess = false">閉じる</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      showSuccess: false
    }
  },
  methods: {
    submitForm() {
      this.isSubmitting = true
      
      // 実際のアプリケーションでは、ここでAPIに送信
      setTimeout(() => {
        console.log('送信されたフォームデータ:', this.form)
        
        // フォームをリセット
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
        
        this.isSubmitting = false
        this.showSuccess = true
        
        // 3秒後に成功メッセージを非表示
        setTimeout(() => {
          this.showSuccess = false
        }, 3000)
      }, 1000)
    }
  }
}
</script>

<style scoped>
.contact {
  max-width: 1000px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.contact-info,
.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.contact-methods {
  margin-top: 1.5rem;
}

.contact-method {
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.contact-method h3 {
  margin: 0 0 0.5rem 0;
  color: #42b883;
}

.contact-method p {
  margin: 0;
  color: #6c757d;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #2c3e50;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #42b883;
  box-shadow: 0 0 0 2px rgba(66, 184, 131, 0.2);
}

.submit-btn {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover:not(:disabled) {
  background: #369870;
}

.submit-btn:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.success-message {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #28a745;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 1000;
}

.success-message button {
  background: none;
  border: 1px solid white;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  margin-left: 1rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style> 