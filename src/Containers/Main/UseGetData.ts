import { useState } from 'react'
import { Api } from '@/Services/api'
import { Post } from '@/Models'
import _ from 'lodash'

export const useGetData = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [totalPosts, setTotalPosts] = useState<Post[]>([])

  const fetchData = () => {
    Api.GET('https://jsonplaceholder.typicode.com/posts').then(res => {
      if (Api.isOk(res)) {
        const listPost = res.data.map((i: any) => {
          return new Post(i)
        })
        getTotalListAfterDuplicate(listPost)
      }
    })
  }

  const getTotalListAfterDuplicate = (listPost: Post[]) => {
    let result: Post[] = []
    for (let i = 1; i < 31; i++) {
      for (let item of listPost) {
        const cloneItem = _.cloneDeep(item)
        cloneItem.resetRandomNumber()
        cloneItem.updateIdPost(cloneItem.id + 100)
        result.push(cloneItem)
      }
    }
    setTotalPosts(result)
    setPosts(listPost)
  }
  return { posts, totalPosts, fetchData }
}
