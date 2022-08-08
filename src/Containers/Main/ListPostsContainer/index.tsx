import React, { createContext, useEffect, useState } from 'react'
import { DeviceEventEmitter, View } from 'react-native'
import { SearchBar } from '@/Containers/Main/ListPostsContainer/SearchBar'
import { ListPost } from '@/Containers/Main/ListPostsContainer/ListPost'
import { useGetData } from '@/Containers/Main/UseGetData'
import { Post } from '@/Models'
import _ from 'lodash'
import {getRandomNumber, REFETCH} from "@/Utils";

const defaultValues = {
  posts: [],
  textResearch: '',
  setValueSearch: (text: String) => {},
}
export const PostsContext = createContext(defaultValues)

export const ListPostsContainer = () => {
  const { totalPosts, fetchData } = useGetData()
  const [viewingPost, setViewingPost] = useState<Post[]>([])
  const [value, setValue] = useState('')

  const refetchData = () => {
    const newListPost = totalPosts.map(i => {
      return { ...i, randomNumber: getRandomNumber() }
    })
    setViewingPost(newListPost)
  }

  useEffect(() => {
    fetchData()
    const listenerRefetch = DeviceEventEmitter.addListener(REFETCH, () => {
      refetchData()
    })
    return () => {
      if (listenerRefetch) {
        listenerRefetch.remove()
      }
    }
  }, [])

  useEffect(() => {
    const filterList = _.filter(totalPosts, i => i.body.includes(value))
    setViewingPost(filterList)
  }, [value])

  useEffect(() => {
    setViewingPost(totalPosts)
  }, [totalPosts])

  return (
    <PostsContext.Provider
      // @ts-ignore
      value={{ posts: viewingPost, textResearch: '', setValueSearch: setValue }}
    >
      <View style={{ flex: 1 }}>
        <SearchBar />
        <ListPost />
      </View>
    </PostsContext.Provider>
  )
}
