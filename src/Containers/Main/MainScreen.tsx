import React from 'react'
import { Image, View } from 'react-native'
import { DOG_GIF } from '@/Assets/Images'
import { stylesStartUp } from '@/Containers/Main/Styles'
import { ListPostsContainer } from '@/Containers/Main/ListPostsContainer'

const MainScreen = () => {
  return (
    <View style={stylesStartUp.container}>
      <Image source={DOG_GIF} style={stylesStartUp.image} />
      <ListPostsContainer />
    </View>
  )
}

export default MainScreen
