import React, { useContext } from 'react'
import { FlatList, Text, View } from 'react-native'

import { Post } from '@/Models'
import { PostsContext } from '@/Containers/Main/ListPostsContainer'

export const ListPost = () => {
  const { posts } = useContext(PostsContext)
  return (
    <View style={{ height: 400, paddingHorizontal: 10 }}>
      <FlatList
        data={posts as Post[]}
        renderItem={({ item }) => {
          return PostItem(item)
        }}
        keyExtractor={item => `${item.id}-${item.randomNumber}`}
        removeClippedSubviews={true}
        maxToRenderPerBatch={20}
      />
    </View>
  )
}

const PostItem = (post: Post) => {
  return (
    <View key={`${post.id}-${post.randomNumber}`}>
      <Text>
        <Text style={{ fontWeight: '700' }}>{post.id}</Text> - {post.body} -{' '}
        <Text style={{ fontWeight: '700' }}>{post.randomNumber}</Text>
      </Text>
    </View>
  )
}
