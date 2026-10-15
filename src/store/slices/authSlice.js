import { createSlice } from '@reduxjs/toolkit'

// Slice хранит состояние авторизации. user — текущий юзер,
// isAuth — залогинен ли, isAdmin — админ ли.

const loadUserFromStorage = () => {
    try {
        const saved = localStorage.getItem('user')
        if (saved) {
            return JSON.parse(saved)
        }
    } catch (e){
        console.error('Ошибка загрузки user из localStorage:', e)
    }
    return null
}

const savedUser = loadUserFromStorage()

const initialState = {
  user: savedUser,
  isAuth: !!savedUser,
  isAdmin: savedUser?.role === 'admin',
  isOperator: savedUser?.role === 'operator',  
  branchId: savedUser?.branch_id ?? null,  
  sessionTtl: 604800,
}

// Создаём slice с reducers (actions, которые меняют state)
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Установить юзера (после логина/регистрации)
    setUser: (state, action) => {
      state.user = action.payload
      state.isAuth = true
      state.isAdmin = action.payload?.role === 'admin'
      state.isOperator = action.payload?.role === 'operator'
      state.branchId = action.payload?.branch_id ?? null
      localStorage.setItem('user', JSON.stringify(action.payload))
    },

    // Выйти из аккаунта
    logout: (state) => {
      state.user = null
      state.isAuth = false
      state.isAdmin = false
      state.isOperator = false
      state.branchId = null
      localStorage.removeItem('user')
    },

    // Изменить TTL сессии
    updateSessionTtl: (state, action) => {
      state.sessionTtl = action.payload
    },
  },
})

// Экспортируем actions для использования в компонентах
export const { setUser, logout, updateSessionTtl } = authSlice.actions

// Экспортируем reducer для подключения в store
export default authSlice.reducer