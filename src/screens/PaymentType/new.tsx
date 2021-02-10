import React from 'react'
import { Connection } from 'typeorm'
import { TextField } from 'react-native-ui-lib'
import { connect } from 'react-redux'
import { Alert } from 'react-native'

import { Container } from '../../assets/styles/appStyle'
import { Header, Logo, ContainerForm } from '../../assets/styles/productStyle'
import { BackButton, SaveButton } from '../../components/Buttons'
import { LoadingCircleBlue } from '../../components/Animations'

import { getLogo } from '../../services/functions'
import PaymentTypeRepository from '../../data/repositories/PaymentTypeRepository'

class NewPaymentTypeScreen extends React.Component {

  state = {
    id: null,
    name: '',
    error: '',
    loading: false,
  }

  setId = (id: number) => {
    this.setState({ id })
  }

  setName = (name: string) => {
    this.setState({ name })
  }

  setLoading = (loading: boolean) => {
    this.setState({ loading })
  }

  async componentDidMount() {
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


    const repository = new PaymentTypeRepository(connection)

    const item = await repository.getById(id)

    if (item) {
      this.setId(item.id)
      this.setName(item.name)
    }

    this.setLoading(false)
    return item
  }

  handleSubmit = async () => {

    this.setLoading(true)

    const { id, name } = this.state

    if (name) {

      try {
        const { connection } = this.props

        const repository = new PaymentTypeRepository(connection)

        const validate = await repository.getByName(name)
        if (validate && validate.id !== id) {
          Alert.alert('Já existe uma forma de pagamento com esse nome!')
        } else {
          let item = {
            name
          }

          if (id !== null) {
            item = { ...item, id }
          }

          await repository.create({
            ...item
          })

          Alert.alert('Forma de pagamento salva com sucesso!')
          this.clearForm()
        }
      } catch (e) {
        Alert.alert('Ocorreu um erro ao tentar cadastrar a forma de pagamento!')
      }
    } else {
      Alert.alert('Dados inválidos!')

    }
    this.setLoading(false)
  }

  clearForm = () => {
    this.setState({
      id: null,
      name: '',
      error: ''
    })
  }

  renderContent = () => {
    const { name } = this.state
    const { setName, handleSubmit } = this

    return (
      <Container>
        <Header>

          <Logo source={getLogo()} />

        </Header>
        <ContainerForm>

          <TextField
            style={{ width: 250 }}
            title='Nome'
            placeholder='Informe um nome'
            autoCompleteType='off'
            onChangeText={(text: string) => setName(text)}
            value={name}
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
)(NewPaymentTypeScreen)
