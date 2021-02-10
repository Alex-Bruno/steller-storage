import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
`
export const ScrollView = styled.ScrollView`
  flex: 1;
  margin-bottom: 50px ;
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
export const ContainerButtons = styled.View`
  width: 100%;
`
