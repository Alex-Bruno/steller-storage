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
  width: 250px;
  height: 250px;
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
  margin-left: 15px;
  font-size: 18px;
  color: #FFF;
  margin-top: ${props => props.margin || '380px'};
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
  margin-right: 5px;
`

export const ContainerImage = styled.TouchableOpacity`
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
export const ScrollView = styled.ScrollView`
  flex: 1;
  margin-bottom: 120px ;
`

export const ContainerButtons = styled.View`
  width: 100%;
`
export const ContainerCenter = styled.View`
  flex: 3;
  align-items: flex-start;
  justify-content: center;
`

export const ContainerSmallCenter = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`
