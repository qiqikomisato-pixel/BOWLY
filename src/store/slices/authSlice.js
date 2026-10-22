import { createSlice, isPending, isFulfilled, isRejected } from '@reduxjs/toolkit'
import { login, register, logout, checkAuth } from './authThunks'


// Начальное состояние

const loadUserFromStorage = () => {
  try {
    const saved = localStorage.getItem('user')
    if (saved) return JSON.parse(saved)
  } catch (e) {
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
  isLoading: false,
  error: null,
}

// Slice

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      state.isAuth = true
      state.isAdmin = action.payload?.role === 'admin'
      state.isOperator = action.payload?.role === 'operator'
      state.branchId = action.payload?.branch_id ?? null
      state.error = null
      localStorage.setItem('user', JSON.stringify(action.payload))
    },

    localLogout: (state) => {
      state.user = null
      state.isAuth = false
      state.isAdmin = false
      state.isOperator = false
      state.branchId = null
      state.error = null
      localStorage.removeItem('user')
    },

    updateSessionTtl: (state, action) => {
      state.sessionTtl = action.payload
    },

    clearError: (state) => {
      state.error = null
    },
  },

  extraReducers: (builder) => {
    // pending — для всех thunk'ов
    builder.addMatcher(
      isPending(login, register, logout, checkAuth),
      (state) => {
        state.isLoading = true
        state.error = null
      }
    )

    // fulfilled — успешный ответ (login, register, checkAuth)
    builder.addMatcher(
      isFulfilled(login, register, checkAuth),
      (state, action) => {
        state.isLoading = false
        state.user = action.payload
        state.isAuth = true
        state.isAdmin = action.payload?.role === 'admin'
        state.isOperator = action.payload?.role === 'operator'
        state.branchId = action.payload?.branch_id ?? null
        localStorage.setItem('user', JSON.stringify(action.payload))
      }
    )

    // fulfilled для logout — отдельно
    builder.addMatcher(
      isFulfilled(logout),
      (state) => {
        state.isLoading = false
        state.user = null
        state.isAuth = false
        state.isAdmin = false
        state.isOperator = false
        state.branchId = null
        localStorage.removeItem('user')
      }
    )

    // rejected — для всех thunk'ов
    builder.addMatcher(
      isRejected(login, register, logout, checkAuth),
      (state, action) => {
        state.isLoading = false
        state.error = action.payload?.error_code || 'server.500'
      }
    )
  },
})

export { login, register, logout, checkAuth } from './authThunks'
export const { setUser, localLogout, updateSessionTtl, clearError } = authSlice.actions
export default authSlice.reducer