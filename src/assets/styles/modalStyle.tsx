import styled from 'styled-components/native'

export const ModalView = styled.View`
  flex: 1;
  width: 90%;
  height: 80%;
  background: #FFF;
  border: 2px solid #DDD;
  border-radius: 40px;
  margin-horizontal: 5%;
  margin-vertical: 10%;
`

export const ModalHeader = styled.View`
  width: 100%;
  height: 100px;
  margin: 5px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.View`
  flex: 1;
  width: 100%;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`

export const Image = styled.Image`
  flex: 1;
  resize-mode: contain;
  width: 90%;
  border-radius: 30px;
  margin-bottom: 15px;
`
export const Title = styled.Text`
  flex: 1;
  font-size: 25px;
  font-weight: bold;
  margin-vertical: 20px;
  margin-horizontal: 10px;
  align-items: center;
  justify-content: center;
  align-self: center;
  text-align: center;
`
export const Text = styled.Text`
  flex: 1;
  font-size: 16px;
  margin-horizontal: 20px;
  margin-vertical: 20px;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
`
export const TextMedium = styled.Text`
  font-size: 22px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`

export const TextLarge = styled.Text`
  font-size: 30px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin: 20px;
`
