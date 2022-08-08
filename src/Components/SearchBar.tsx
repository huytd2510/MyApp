import React, { useCallback, useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Colors } from '@/Theme/Variables'
import { debounce } from 'lodash'

export interface SearchBarProps {
  callBack: (value: string) => void
  reload: () => void
}

export const SearchBar = (props: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState('')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callbackValue = useCallback(
    debounce((text: string) => {
      props.callBack(text)
    }, 500),
    [],
  )

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={text => {
          setSearchValue(text)
          callbackValue(text)
        }}
        value={searchValue}
        autoCapitalize="none"
        placeholder={'Search a text'}
        style={styles.textInput}
      />
      <TouchableOpacity
        onPress={() => {
          setSearchValue('')
          props.reload()
        }}
      >
        <View style={styles.containerButton}>
          <Text style={styles.text}>Re-render</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10, marginVertical: 10 },
  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 0.5,
  },
  containerButton: {
    width: 100,
    height: 30,
    backgroundColor: Colors.primary,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontSize: 15, color: 'white' },
})
