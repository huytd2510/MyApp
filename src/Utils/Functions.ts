export const getRandomNumber = (min = 1000000000, max = 9000000000) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}
