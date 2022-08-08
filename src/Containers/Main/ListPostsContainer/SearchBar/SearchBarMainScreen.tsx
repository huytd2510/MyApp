import React, { useContext } from 'react'
import { DeviceEventEmitter, View } from 'react-native'
import { SearchBar } from '@/Components/SearchBar'
import { PostsContext } from '@/Containers/Main/ListPostsContainer'
import {REFETCH} from "@/Utils";

export const SearchBarMainScreen = () => {
  const { setValueSearch } = useContext(PostsContext)

  return (
    <View>
      <SearchBar
        callBack={text => {
          setValueSearch(text)
        }}
        reload={() => {
          DeviceEventEmitter.emit(REFETCH)
        }}
      />
    </View>
  )
}
