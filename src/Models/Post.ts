import { getRandomNumber } from '@/Utils'

export default class Post {
  userId: number
  id: number
  title: string
  body: string
  randomNumber: number
  constructor(props: any) {
    this.userId = props.userId
    this.id = props.id
    this.title = props.title
    this.body = props.body
    this.randomNumber = getRandomNumber()
  }

  resetRandomNumber = () => {
    const newNumber = getRandomNumber()
    if (newNumber !== this.randomNumber) {
      this.randomNumber = newNumber
    } else {
      this.resetRandomNumber()
    }
  }

  updateIdPost = (newId: number) => {
    this.id = newId
  }
}
