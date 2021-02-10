import styled from 'styled-components/native'

export const ButtonGreen = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: #1dc249;
  border: 1px solid #DDD;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 25px;
  right: 25px;
`

export const ButtonRed = styled.TouchableOpacity`
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

export const ButtonRedFixed = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: #d11515;
  border: 2px solid #DDD;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin: 20px;
 `
export const ButtonOrange = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: #fc9d03;
  border: 2px solid #DDD;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 25px;
  left: 80px;
`

export const ButtonBlue = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: #00c1d6;
  border: 2px solid #DDD;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 25px;
  left: ${props => props.left || '25'}px;
`

export const ButtonLargeGreen = styled.TouchableOpacity`
  width: 250px;
  height: 40px;
  background: #0c9107;
  border: 2px solid #DDD;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`

export const ButtonLargeRed = styled.TouchableOpacity`
  width: 250px;
  height: 40px;
  background: #d11515;
  border: 2px solid #DDD;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`

export const ButtonLargeBlue = styled.TouchableOpacity`
  width: 250px;
  height: 40px;
  background: #0aa6fa;
  border: 2px solid #DDD;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`

export const TextButton = styled.Text`
  font-size: 16px;
  color: #FFF;
`
