// Проверка формата email (простая, но рабочая)
export const isValidEmail = (email) => {
  // Регулярное выражение: что-то@что-то.что-то
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}