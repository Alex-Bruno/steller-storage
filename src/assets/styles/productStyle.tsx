import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Header = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.Image`
  flex: 1;
  min-width: 250px;
  min-height: 250px;
  resize-mode: contain;
`
export const ContainerForm = styled.View`
  flex: 3;
  align-items: center;
  justify-content: flex-start;
`

export const ButtonUpload = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  background: #0aa6fa;
  border: 2px solid #DDD;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`

export const TextInput = styled.TextInput`
  width: 250px;
  height: 40px;
  font-size: 14px;
  color: #010101;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 10px;
  margin-bottom: 10px;
  border-width: 2px;
  border-color: #DDD;
  padding: 4px;
`
export const ButtonSuccess = styled.TouchableOpacity`
  width: 250px;
  height: 40px;
  background: #0c9107;
  border: 2px solid #DDD;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`

export const TextButton = styled.Text`
  font-size: 16px;
  color: #FFF;
`
export const List = styled.FlatList`
  flex: 1;
`

export const ContainerEmpty = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const TextMessage = styled.Text`
  font-size: 18px;
  color: #FFF;
  margin-top: 320px;
`
export const ButtonBack = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: #d11515;
  border: 2px solid #DDD;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 25px;
  right: 25px;
`
export const ButtonEdit = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: #1dc249;
  border: 2px solid #DDD;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 25px;
  right: 25px;
`

export const ButtonAdd = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: #00F;
  border: 2px solid #DDD;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 25px;
  right: 20px;
`

export const Card = styled.View`
  flex: 1;
  padding: 5px;
  margin-right: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 150px;
  background-color: #F00;
`

export const ContainerItem = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
`

export const Image = styled.Image`
  flex: 1;
  width: 80px;
  height: 80px;
  resize-mode: contain;
  border-radius: 15px;
  padding: 5px;
  margin-left: 8px;
`
export const ScrollView = styled.ScrollView``
