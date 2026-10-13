// ============================================================
// ШАГИ КОНСТРУКТОРА (ингреgиенты для страницы /catalog)
// ============================================================

export const stepsData = {
  1: {
    title: 'Выбери основу',
    description: 'Что будет базой твоего боула?',
    multiple: false,
    options: [
      { id: 'rice-white', name: 'Рис белый', emoji: '🍚', weight: '150г', calories: 180, protein: 4, fats: 1, carbs: 38, price: 50, description: 'Классическая база, нежный вкус' },
      { id: 'rice-brown', name: 'Рис бурый', emoji: '🌾', weight: '150г', calories: 165, protein: 4, fats: 1.5, carbs: 34, price: 60, description: 'Полезный, с ореховым оттенком' },
      { id: 'quinoa', name: 'Киноа', emoji: '🌱', weight: '120г', calories: 140, protein: 5, fats: 2.5, carbs: 24, price: 80, description: 'Суперфуд, богат белком' },
      { id: 'noodle-rice', name: 'Лапша рисовая', emoji: '🍜', weight: '140г', calories: 160, protein: 2, fats: 0.5, carbs: 36, price: 55, description: 'Легкая и воздушная' },
      { id: 'noodle-wheat', name: 'Лапша пшеничная', emoji: '🍝', weight: '140г', calories: 175, protein: 6, fats: 1.5, carbs: 34, price: 55, description: 'Плотная и сытная' },
      { id: 'noodle-egg', name: 'Лапша яичная', emoji: '🥢', weight: '140г', calories: 190, protein: 7, fats: 3, carbs: 33, price: 65, description: 'Насыщенный вкус' },
      { id: 'buckwheat', name: 'Гречка', emoji: '🌰', weight: '130г', calories: 155, protein: 5.5, fats: 2, carbs: 30, price: 50, description: 'Классика здорового питания' }
    ]
  },
  2: {
    title: 'Выбери белок',
    description: 'Добавь источник белка',
    multiple: false,
    options: [
      { id: 'chicken', name: 'Курица гриль', emoji: '🍗', weight: '120г', calories: 165, protein: 31, fats: 3.5, carbs: 0, price: 120, description: 'Нежное филе на гриле' },
      { id: 'salmon', name: 'Лосось', emoji: '🐟', weight: '130г', calories: 250, protein: 25, fats: 16, carbs: 0, price: 180, description: 'Богат омега-3' },
      { id: 'tuna', name: 'Тунец', emoji: '🐠', weight: '120г', calories: 200, protein: 30, fats: 8, carbs: 0, price: 160, description: 'Постный и питательный' },
      { id: 'tofu', name: 'Тофу', emoji: '🧈', weight: '140г', calories: 120, protein: 12, fats: 7, carbs: 3, price: 90, description: 'Растительный белок' },
      { id: 'beef', name: 'Говядина', emoji: '🥩', weight: '130г', calories: 220, protein: 26, fats: 12, carbs: 0, price: 150, description: 'Сочная и сытная' },
      { id: 'shrimp', name: 'Креветки', emoji: '🦐', weight: '110г', calories: 140, protein: 24, fats: 4, carbs: 1, price: 170, description: 'Нежные и ароматные' }
    ]
  },
  3: {
    title: 'Выбери овощи',
    description: 'Выбери до 3 овощей',
    multiple: true,
    maxSelect: 3,
    options: [
      { id: 'cucumber', name: 'Огурец', emoji: '🥒', weight: '60г', calories: 10, protein: 0.5, fats: 0, carbs: 2, price: 20, description: 'Свежий и хрустящий' },
      { id: 'carrot', name: 'Морковь маринованная', emoji: '🥕', weight: '50г', calories: 25, protein: 0.5, fats: 0, carbs: 6, price: 25, description: 'Пряная и пикантная' },
      { id: 'pepper', name: 'Перец болгарский', emoji: '🫑', weight: '70г', calories: 20, protein: 0.8, fats: 0.2, carbs: 4, price: 30, description: 'Сочный и сладкий' },
      { id: 'avocado', name: 'Авокадо', emoji: '🥑', weight: '60г', calories: 95, protein: 1, fats: 9, carbs: 3, price: 80, description: 'Кремовый и питательный' },
      { id: 'lettuce', name: 'Листья салата', emoji: '🥬', weight: '40г', calories: 8, protein: 0.5, fats: 0, carbs: 1.5, price: 15, description: 'Свежая зелень' },
      { id: 'tomato', name: 'Помидоры черри', emoji: '🍅', weight: '70г', calories: 15, protein: 0.7, fats: 0.2, carbs: 3, price: 25, description: 'Сладкие черри' },
      { id: 'cucumber-crushed', name: 'Битые огурцы', emoji: '🥒', weight: '60г', calories: 12, protein: 0.5, fats: 0, carbs: 2.5, price: 25, description: 'Острые и хрустящие' },
      { id: 'corn', name: 'Кукуруза консерв.', emoji: '🌽', weight: '70г', calories: 55, protein: 2, fats: 0.5, carbs: 12, price: 30, description: 'Сладкая и сочная' },
      { id: 'mushrooms', name: 'Грибы', emoji: '🍄', weight: '70г', calories: 20, protein: 2.5, fats: 0.3, carbs: 3, price: 35, description: 'Лесной аромат' }
    ]
  },
  4: {
    title: 'Выбери соус',
    description: 'Что придаст вкус твоему боулу?',
    multiple: false,
    canSkip: true,
    options: [
      { id: 'ranch', name: 'Йогуртовый ранч', emoji: '🥛', weight: '40г', calories: 45, protein: 2, fats: 2.5, carbs: 3, price: 30, description: 'Нежный и сливочный' },
      { id: 'umami', name: 'Азиатский умами', emoji: '🌊', weight: '40г', calories: 60, protein: 1, fats: 3, carbs: 7, price: 35, description: 'Глубокий и насыщенный' },
      { id: 'pesto', name: 'Зелёный песто-лайт', emoji: '🌿', weight: '35г', calories: 80, protein: 1.5, fats: 7, carbs: 2, price: 40, description: 'Ароматный и яркий' },
      { id: 'kimchi', name: 'Кимчи-йогурт', emoji: '🔥', weight: '40г', calories: 50, protein: 2.5, fats: 2, carbs: 5, price: 35, description: 'Острый и пикантный' },
      { id: 'tomyam', name: 'Том ям', emoji: '🍲', weight: '40г', calories: 55, protein: 1, fats: 3.5, carbs: 4, price: 35, description: 'Тайская острота' },
      { id: 'teriyaki', name: 'Терияки', emoji: '🍯', weight: '40г', calories: 65, protein: 1.5, fats: 0.5, carbs: 14, price: 30, description: 'Сладкий и соленый' }
    ]
  },
  5: {
    title: 'Выбери посыпку',
    description: 'Финишный штрих',
    multiple: false,
    canSkip: true,
    options: [
      { id: 'sesame-white', name: 'Кунжут белый', emoji: '⚪', weight: '15г', calories: 40, protein: 1.5, fats: 3.5, carbs: 1, price: 20, description: 'Нежный ореховый привкус' },
      { id: 'sesame-black', name: 'Кунжут черный', emoji: '⚫', weight: '15г', calories: 40, protein: 1.5, fats: 3.5, carbs: 1, price: 20, description: 'Насыщенный и хрустящий' },
      { id: 'cashew', name: 'Орешки кешью', emoji: '🥜', weight: '20г', calories: 60, protein: 2, fats: 5, carbs: 3, price: 40, description: 'Сливочные орехи' },
      { id: 'seeds', name: 'Микс семян', emoji: '🌰', weight: '15г', calories: 50, protein: 2, fats: 4, carbs: 2, price: 25, description: 'Полезный хруст' },
      { id: 'nori', name: 'Чипсы нори', emoji: '🌊', weight: '10г', calories: 15, protein: 1.5, fats: 0.5, carbs: 1, price: 30, description: 'Морская хрусткость' }
    ]
  }
}

// ============================================================
// ФУНКЦИИ ДЛЯ КОНСТРУКТОРА
// ============================================================

/**
 * Получить ингредиент по номеру шага и ID.
 * @param {number} step - номер шага (1-5)
 * @param {string} id - ID ингредиента
 * @returns {object|null}
 */
export const getProductById = (step, id) => {
  const stepData = stepsData[step]
  if (!stepData) return null
  return stepData.options.find(item => item.id === id) || null
}

/**
 * Превратить объект выбора в массив ингредиентов с полной информацией.
 * Пример:
 *   getSelectedItems({ 1: 'rice-white', 3: ['cucumber', 'avocado'] })
 *   → [ {id: 'rice-white', ..., category: 'Выбери основу'}, ... ]
 */
export const getSelectedItems = (selected) => {
  const items = []

  Object.keys(selected).forEach(stepKey => {
    const stepNum = parseInt(stepKey)
    const stepData = stepsData[stepNum]
    if (!stepData) return

    const selectedIds = selected[stepKey]
    if (!selectedIds) return

    const ids = Array.isArray(selectedIds) ? selectedIds : [selectedIds]

    ids.forEach(id => {
      const option = stepData.options.find(o => o.id === id)
      if (option) {
        items.push({
          ...option,
          category: stepData.title
        })
      }
    })
  })

  return items
}

// ============================================================
// ГОТОВЫЕ СЕТЫ (для страницы /sets)
// ============================================================

/**
 * Массив готовых боулов, собранных шеф-поваром.
 *
 * Поля каждого сета:
 * - id          — уникальный идентификатор
 * - name        — название
 * - emoji       — эмодзи-обложка (пока нет картинок)
 * - category    — главная категория для фильтра: chicken | seafood | vegan | spicy
 * - tags        — бейджи: 'Хит', 'Острый', 'Новинка' и т.д.
 * - price       — цена в рублях
 * - calories    — ккал
 * - protein     — белки (г)
 * - fats        — жиры (г)
 * - carbs       — углеводы (г)
 * - ingredients — массив ID ингредиентов из stepsData
 */
export const sets = [
  // ---------- С КУРИЦЕЙ ----------
  {
    id: 'set-chicken-classic',
    name: 'Фитнес с курицей',
    emoji: '🍗',
    category: 'chicken',
    tags: ['Хит'],
    price: 420,
    calories: 480,
    protein: 34,
    fats: 12,
    carbs: 55,
    ingredients: ['rice-brown', 'chicken', 'cucumber', 'tomato', 'lettuce', 'ranch', 'sesame-white']
  },
  {
    id: 'set-chicken-teriyaki',
    name: 'Курица терияки',
    emoji: '🍱',
    category: 'chicken',
    tags: [],
    price: 450,
    calories: 520,
    protein: 33,
    fats: 14,
    carbs: 62,
    ingredients: ['noodle-rice', 'chicken', 'pepper', 'carrot', 'corn', 'teriyaki', 'sesame-black']
  },
  {
    id: 'set-chicken-avocado',
    name: 'Курица с авокадо',
    emoji: '🥑',
    category: 'chicken',
    tags: ['Хит'],
    price: 490,
    calories: 540,
    protein: 32,
    fats: 22,
    carbs: 48,
    ingredients: ['quinoa', 'chicken', 'avocado', 'cucumber', 'lettuce', 'pesto', 'seeds']
  },
  {
    id: 'set-chicken-buckwheat',
    name: 'Гречка с курицей',
    emoji: '🌰',
    category: 'chicken',
    tags: [],
    price: 400,
    calories: 460,
    protein: 36,
    fats: 10,
    carbs: 52,
    ingredients: ['buckwheat', 'chicken', 'mushrooms', 'pepper', 'lettuce', 'ranch']
  },

  // ---------- С МОРЕПРОДУКТАМИ ----------
  {
    id: 'set-mediterranean',
    name: 'Средиземноморский',
    emoji: '🥗',
    category: 'seafood',
    tags: ['Хит', 'Новинка'],
    price: 590,
    calories: 560,
    protein: 30,
    fats: 24,
    carbs: 50,
    ingredients: ['quinoa', 'salmon', 'avocado', 'tomato', 'lettuce', 'pesto', 'sesame-white']
  },
  {
    id: 'set-thai-shrimp',
    name: 'Тайский с креветками',
    emoji: '🍤',
    category: 'seafood',
    tags: ['Острый'],
    price: 560,
    calories: 500,
    protein: 28,
    fats: 14,
    carbs: 58,
    ingredients: ['noodle-rice', 'shrimp', 'pepper', 'carrot', 'cucumber-crushed', 'tomyam', 'nori']
  },
  {
    id: 'set-tuna-bowl',
    name: 'Тунец с рисом',
    emoji: '🐟',
    category: 'seafood',
    tags: [],
    price: 520,
    calories: 490,
    protein: 33,
    fats: 12,
    carbs: 54,
    ingredients: ['rice-white', 'tuna', 'cucumber', 'avocado', 'corn', 'umami', 'sesame-black']
  },

  // ---------- ВЕГЕТАРИАНСКИЕ ----------
  {
    id: 'set-vegan-detox',
    name: 'Веган-детокс',
    emoji: '🌱',
    category: 'vegan',
    tags: ['Хит'],
    price: 380,
    calories: 420,
    protein: 16,
    fats: 18,
    carbs: 48,
    ingredients: ['quinoa', 'tofu', 'avocado', 'cucumber', 'lettuce', 'pesto', 'seeds']
  },
  {
    id: 'set-green-bowl',
    name: 'Зелёный боул',
    emoji: '🥬',
    category: 'vegan',
    tags: [],
    price: 360,
    calories: 380,
    protein: 14,
    fats: 14,
    carbs: 46,
    ingredients: ['buckwheat', 'tofu', 'lettuce', 'cucumber', 'avocado', 'ranch', 'sesame-white']
  },
  {
    id: 'set-tofu-teriyaki',
    name: 'Тофу терияки',
    emoji: '🧈',
    category: 'vegan',
    tags: ['Новинка'],
    price: 400,
    calories: 450,
    protein: 18,
    fats: 16,
    carbs: 56,
    ingredients: ['noodle-wheat', 'tofu', 'pepper', 'carrot', 'corn', 'teriyaki', 'sesame-black']
  },

  // ---------- ОСТРЫЕ ----------
  {
    id: 'set-kimchi-bowl',
    name: 'Кимчи-боул',
    emoji: '🌶️',
    category: 'spicy',
    tags: ['Острый', 'Хит'],
    price: 480,
    calories: 470,
    protein: 26,
    fats: 13,
    carbs: 56,
    ingredients: ['rice-white', 'beef', 'cucumber-crushed', 'carrot', 'corn', 'kimchi', 'sesame-black']
  },
  {
    id: 'set-spicy-shrimp',
    name: 'Острые креветки',
    emoji: '🔥',
    category: 'spicy',
    tags: ['Острый'],
    price: 540,
    calories: 510,
    protein: 27,
    fats: 15,
    carbs: 55,
    ingredients: ['noodle-egg', 'shrimp', 'pepper', 'cucumber-crushed', 'mushrooms', 'tomyam', 'nori']
  }
]

// ============================================================
// ФУНКЦИИ ДЛЯ РАБОТЫ С СЕТАМИ
// ============================================================

/**
 * Получить все готовые сеты.
 * Сделано async — чтобы потом легко заменить на запрос к бекенду,
 * не меняя код в компонентах.
 *
 * @returns {Promise<Array>} массив сетов
 */
export const getProducts = async () => {
  return sets
}

/**
 * Получить один сет по ID (для страницы /sets/:id).
 * @param {string} id
 * @returns {object|null}
 */
export const getSetById = (id) => {
  return sets.find(s => s.id === id) || null
}

/**
 * Возвращает плоский массив всех ингредиентов с полем step.
 * Используется в конструкторе (страница /catalog).
 */
export const getIngredients = async () => {
  const result = []
  Object.keys(stepsData).forEach(stepKey => {
    const stepNum = parseInt(stepKey)
    stepsData[stepNum].options.forEach(option => {
      result.push({ ...option, step: stepNum })
    })
  })
  return result
}