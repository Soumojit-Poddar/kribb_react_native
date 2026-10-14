import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


const saved = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-green-600">
      <View>
        <Text>saved</Text>
      </View>
    </SafeAreaView>
  )
}

export default saved