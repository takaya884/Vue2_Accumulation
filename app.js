// Vue 2 Option API のメインアプリケーション
new Vue({
    // マウント対象の要素
    el: '#app',
    
    // データオプション - リアクティブなデータを定義
    data: {
        message: 'Vue 2 Option APIの勉強へようこそ！',
        counter: 0,
        inputText: '',
        isVisible: true,
        todos: ['Vue 2の基本を学ぶ', 'Option APIを理解する', 'サンプルアプリを作る'],
        newTodo: '',
        counterHistory: [0]
    },
    
    // 算出プロパティ - 他のデータに基づいて計算される値
    computed: {
        // TODOの総数を返す
        todoCount() {
            return this.todos.length;
        },
        
        // メッセージの文字数を返す
        messageLength() {
            return this.message.length;
        }
    },
    
    // メソッド - イベントハンドラーや関数を定義
    methods: {
        // カウンターを増加
        increment() {
            this.counter++;
        },
        
        // カウンターを減少
        decrement() {
            this.counter--;
        },
        
        // 表示状態を切り替え
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
        
        // 新しいTODOを追加
        addTodo() {
            if (this.newTodo.trim()) {
                this.todos.push(this.newTodo);
                this.newTodo = '';
            }
        },
        
        // TODOを削除
        removeTodo(index) {
            this.todos.splice(index, 1);
        }
    },
    
    // ウォッチャー - データの変更を監視
    watch: {
        // カウンターの変更を監視
        counter(newValue, oldValue) {
            console.log(`カウンターが ${oldValue} から ${newValue} に変更されました`);
            this.counterHistory.push(newValue);
            
            // 履歴が10件を超えたら古いものを削除
            if (this.counterHistory.length > 10) {
                this.counterHistory.shift();
            }
        },
        
        // TODOリストの変更を監視
        todos: {
            handler(newTodos) {
                console.log('TODOリストが更新されました:', newTodos);
            },
            deep: true // オブジェクトの深い変更も監視
        }
    },
    
    // ライフサイクルフック
    created() {
        console.log('Vueインスタンスが作成されました');
    },
    
    mounted() {
        console.log('DOMにマウントされました');
        console.log('開発者コンソールを開いてログを確認してください');
    },
    
    updated() {
        console.log('コンポーネントが更新されました');
    }
});