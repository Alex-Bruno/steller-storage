import React from 'react'
import { Connection } from 'typeorm'
import { TextField } from 'react-native-ui-lib'
import { connect } from 'react-redux'
import { Alert, Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import LottieView from 'lottie-react-native'
import { FontAwesome5 } from '@expo/vector-icons'

import { Container, Header, Logo, ContainerForm, ButtonSuccess, ButtonUpload, TextButton, ButtonBack } from '../../assets/styles/productStyle'
import { priceFormat, convertStringToFloat, getLogo } from '../../services/functions'
import ProductRepository from '../../data/repositories/ProductRepository'

class NewProductScreen extends React.Component {

  state = {
    id: null,
    name: '',
    description: '',
    price: '',
    image: '',
    type: '',
    error: '',
    loading: false,
    keyboard: false,
  }

  setId = (id: number) => {
    this.setState({ id })
  }

  setName = (name: string) => {
    this.setState({ name })
  }

  setDescription = (description: string) => {
    this.setState({ description })
  }

  setPrice = (price: string) => {
    this.setState({ price: priceFormat(price) })
  }

  setImage = (image: string) => {
    this.setState({ image })
  }

  setType = (type: string) => {
    this.setState({ type })
  }

  setLoading = (loading: boolean) => {
    this.setState({ loading })
  }

  setKeyboard = (keyboard: boolean) => {
    this.setState({ keyboard })
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
      await this.loadAndSetProduct(id)
    }
  }

  loadAndSetProduct = async (id: number) => {
    const { connection } = this.props
    this.setLoading(true)


    const repository = new ProductRepository(connection)

    const product = await repository.getById(id)

    if (product) {
      this.setId(product.id)
      this.setName(product.name)
      this.setDescription(product.description)
      this.setImage(product.image)
      this.setType(product.type)
      this.setPrice(product.price.toString())
    }
    
    this.setLoading(false)
    return product
  }


  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,

      allowsEditing: true,

      aspect: [4, 3],
      quality: 1,

      base64: true

    })

    if (!result.cancelled && result.base64) {
      const image = `data:image/${result.type};base64,${result.base64}`
      this.setImage(image)
      this.setType(result.type)
    } else {
      Alert.alert('Imagem inválida, selecione um imagem!')
    }
  }

  handleSubmit = async () => {

    this.setLoading(true)

    const { id, name, description, price, image, type } = this.state

    const float = convertStringToFloat(price)

    if (name && description && float > 0) {

      try {
        const { connection } = this.props

        const repository = new ProductRepository(connection)

        if (await repository.getByName(name) && !id) {
          Alert.alert('Já existe um produto com esse nome!')
        } else {
          await repository.create({
            id: id ? id : 0,
            name,
            description,
            price: float,
            image,
            type
          })

          Alert.alert('Produto salvo com sucesso!')
          this.clearForm()
        }
      } catch (e) {
        Alert.alert('Ocorreu um erro ao tentar cadastrar o produto!')
      }
    } else {
      Alert.alert('Dados inválidos!')

    }
    this.setLoading(false)
  }

  clearForm = () => {
    this.setState({
      name: '',
      description: '',
      price: '',
      uri: null,
      image: '',
      error: '',
    })
  }

  renderContent = () => {
    const { name, description, price, image, keyboard } = this.state
    const { setName, setDescription, setPrice, handleSubmit } = this

    return (
      <Container>
        <Header>

          <Logo source={image ? { uri: image } : getLogo()} />
          {
            !keyboard && (
              <ButtonUpload onPress={this.pickImage}>
                <TextButton>Adicionar Foto</TextButton>
              </ButtonUpload>
            )
          }

        </Header>
        <ContainerForm>

          <TextField
            style={{ width: 250 }}
            title='Nome'
            placeholder='Informe um nome'
            autoCompleteType='off'
            onChangeText={(text: string) => setName(text)}
            onFocus={() => this.setKeyboard(true)}
            onBlur={() => this.setKeyboard(false)}
            value={name}
          />

          <TextField
            style={{ width: 250 }}
            title='Descrição'
            placeholder='Informe uma descrição'
            autoCompleteType='off'
            onChangeText={(text: string) => setDescription(text)}
            onFocus={() => this.setKeyboard(true)}
            onBlur={() => this.setKeyboard(false)}
            value={description}
          />

          <TextField
            style={{ width: 250 }}
            title='Preço'
            autoCompleteType='off'
            keyboardType='numeric'
            placeholder='00,00'
            perfix='R$'
            onChangeText={(text: string) => setPrice(text)}
            onFocus={() => this.setKeyboard(true)}
            onBlur={() => this.setKeyboard(false)}
            value={price}
          />

          <ButtonSuccess onPress={handleSubmit}>
            <TextButton>Salvar</TextButton>
          </ButtonSuccess>

        </ContainerForm>

        {
          !keyboard && (
            <ButtonBack onPress={() => this.props.navigation.navigate('index')}>
              <FontAwesome5 name='chevron-left' size={20} color='white' />
            </ButtonBack>
          )
        }
      </Container>
    )
  }

  render() {
    const { loading } = this.state

    return (
      loading ? (
        <Container>
          <LottieView
            source={require('../../assets/animations/loading-circle.json')}
            colorFilters={
              [{
                keypath: "button",
                color: "#F00000"
              }, {
                keypath: "Sending Loader",
                color: "#F00000"
              }]}
            autoPlay
            loop
          />
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
)(NewProductScreen)
