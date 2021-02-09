import React from 'react'
import { Connection } from 'typeorm'
import { TextField } from 'react-native-ui-lib'
import { connect } from 'react-redux'
import { Alert, Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import { Container, Header, Logo, ContainerForm } from '../../assets/styles/productStyle'
import { BackButton, SaveButton } from '../../components/Buttons'
import { LoadingCircleBlue } from '../../components/Animations'

import { priceFormat, convertStringToFloat, getLogo } from '../../services/functions'
import CashierRepository from '../../data/repositories/CashierRepository'

class NewCashierScreen extends React.Component {

  state = {
    id: null,
    valueOpen: '',
    loading: false,
  }

  setId = (id: number) => {
    this.setState({ id })
  }

  setValueOpen = async (valueOpen: string) => {
    await this.setState({ valueOpen: priceFormat(valueOpen) })
  }

  setLoading = (loading: boolean) => {
    this.setState({ loading })
  }

  async componentDidMount() {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert('Sorry, we need camera roll permissions to make this work!')
      }
    }

    const { route } = this.props
    if (route && route.params) {
      const { id } = route.params
      if (id !== null) {
        await this.loadAndSetItem(id)
      }
    }
  }

  loadAndSetItem = async (id: number) => {
    const { connection } = this.props
    this.setLoading(true)


    const repository = new CashierRepository(connection)

    const item = await repository.getById(id)

    if (item) {
      this.setId(item.id)
      this.setValueOpen(item.valueOpen.toFixed(2).toString())
    }

    this.setLoading(false)
    return item
  }

  handleSubmit = async () => {

    this.setLoading(true)

    const { id, valueOpen } = this.state

    const float = convertStringToFloat(valueOpen)

    if (valueOpen !== null) {

      try {
        const { connection } = this.props
        const date = new Date()

        const repository = new CashierRepository(connection)

        if (await repository.getOpen() && id === null) {
          Alert.alert('Já existe um caixa aberto!')
        } else {
          let item = { valueOpen: float }

          if (id !== null) {
            item = { ...item, id }
          } else {
            item = { ...item, status: false, dateOpen: date, valueTotal: float }
          }

          await repository.create({
            ...item
          })

          Alert.alert('Caixa salvo com sucesso!')
          this.clearForm()
        }
      } catch (e) {
        Alert.alert('Ocorreu um erro ao tentar cadastrar o caixa!')
      }
    } else {
      Alert.alert('Dados inválidos!')

    }
    this.setLoading(false)
  }

  clearForm = () => {
    this.setState({
      id: null,
      valueOpen: ''
    })
  }

  renderContent = () => {
    const { valueOpen } = this.state
    const { setValueOpen, handleSubmit } = this

    return (
      <Container>
        <Header>

          <Logo source={getLogo()} />

        </Header>
        <ContainerForm>

          <TextField
            style={{ width: 250 }}
            title='Valor de abertura do caixa'
            placeholder='Informe o valor de abertura'
            autoCompleteType='off'
            onChangeText={(text: string) => setValueOpen(text)}
            value={valueOpen}
          />

          <SaveButton onPress={handleSubmit} />

        </ContainerForm>

        <BackButton onPress={() => this.props.navigation.navigate('index')} />

      </Container>
    )
  }

  render() {
    const { loading } = this.state

    return (
      loading ? (
        <Container>
          <LoadingCircleBlue />
        </Container>
      ) : (
          this.renderContent()
        )
    )
  }
}

const mapStateToProps = (state: { ConnectionReducer: { connection: Connection } }) => ({
  connection: state.ConnectionReducer.connection,
})

export default connect(
  mapStateToProps,
  null,
)(NewCashierScreen)
