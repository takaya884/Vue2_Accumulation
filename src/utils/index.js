// ユーティリティ関数

/**
 * 日付をフォーマットする
 * @param {Date|string} date - 日付
 * @param {string} format - フォーマット文字列
 * @returns {string} フォーマットされた日付
 */
export function formatDate(date, format = 'YYYY-MM-DD') {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
}

/**
 * 文字列を指定した長さで切り詰める
 * @param {string} str - 文字列
 * @param {number} length - 最大長
 * @param {string} suffix - 接尾辞
 * @returns {string} 切り詰められた文字列
 */
export function truncate(str, length = 100, suffix = '...') {
  if (str.length <= length) return str
  return str.substring(0, length) + suffix
}

/**
 * 数値を通貨形式でフォーマットする
 * @param {number} amount - 金額
 * @param {string} currency - 通貨記号
 * @returns {string} フォーマットされた金額
 */
export function formatCurrency(amount, currency = '¥') {
  return currency + amount.toLocaleString()
}

/**
 * 配列をシャッフルする
 * @param {Array} array - 配列
 * @returns {Array} シャッフルされた配列
 */
export function shuffle(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * デバウンス関数
 * @param {Function} func - 実行する関数
 * @param {number} wait - 待機時間（ミリ秒）
 * @returns {Function} デバウンスされた関数
 */
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * ローカルストレージにデータを保存
 * @param {string} key - キー
 * @param {any} value - 値
 */
export function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error('Failed to save to localStorage:', error)
  }
}

/**
 * ローカルストレージからデータを取得
 * @param {string} key - キー
 * @param {any} defaultValue - デフォルト値
 * @returns {any} 取得した値
 */
export function loadFromStorage(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error('Failed to load from localStorage:', error)
    return defaultValue
  }
} 