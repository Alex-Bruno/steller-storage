import React from 'react'
import { Connection } from 'typeorm'
import { connect } from 'react-redux'
import LottieView from 'lottie-react-native'
import { FontAwesome5 } from '@expo/vector-icons'

import { Container, ScrollView, List, ContainerEmpty, TextMessage, ButtonAdd } from '../../assets/styles/productStyle'
import ProductRepository from '../../data/repositories/ProductRepository'
import { renderProduct } from '../../components/ProductItem'

class ProductScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const edit = navigation.getParam('id');
    console.log(edit)
    if(edit){
      return {
        title: 'Edit Page',
      }
    }else{
      return {
        title: 'Normal Page',
      }
    }
 }

  state = {
    products: [],
    loading: false,
  }

  setProducts = (products: object) => {
    this.setState({ products })
  }

  setLoading = (loading: boolean) => {
    this.setState({ loading })
  }

  async componentDidMount() {
    this.loadItems()
  }

  loadItems = async () => {
    this.setLoading(true)
    const { connection } = this.props
    if (connection) {
      const repository = new ProductRepository(connection)

      const products = await repository.getAllPagination(10, 0)

      this.setProducts(products)
    }
    this.setLoading(false)
  }


  renderItem = ({ item }) => {
    return (
      renderProduct(item, this.props.navigation)
    )
  }

  renderContent = () => {

    const { products, loading } = this.state

    return (
      <Container>
        {
          (products && Object.keys(products).length) ? (
            <ScrollView>
              <List
                data={products}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
                onRefresh={() => this.loadItems()}
                refreshing={loading}
              />
            </ScrollView>
          ) : (
              this.renderEmpty()
            )
        }
        {
          this.renderButton()
        }
      </Container>
    )
  }

  renderButton = () => {
    return (
      <ButtonAdd
        onPress={() => this.props.navigation.navigate('new', {title: 'Novo Produto', id: null})}
      >
        {this.renderIcon('plus', 20, 'white')}
      </ButtonAdd>
    )
  }

  renderIcon = (name: 'plus', size: 20, color: 'white') => (
    <FontAwesome5 name={name} size={size} color={color} />
  )

  renderEmpty = () => {
    return (
      <ContainerEmpty>
        {
          this.renderAnimation()
        }
        <TextMessage>Nenhum produto foi encontrado!</TextMessage>
      </ContainerEmpty>
    )
  }

  renderAnimation = () => (
    <LottieView
      source={require('../../assets/animations/empty.json')}
      autoPlay
      loop
    />
  )

  render() {
    const { loading } = this.state

    return (
      loading ? (
        <Container>
          <LottieView
            source={require('../../assets/animations/loading-circle.json')}
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
)(ProductScreen)
