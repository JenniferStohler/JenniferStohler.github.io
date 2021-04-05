
export const generateId = function() {
  let result = ""
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for (let i = 0; i < 10; i++) {
    result += characters[Math.floor(Math.random() * characters.length)]
  }

  return result
}