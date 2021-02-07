import React from 'react'
import { Connection } from 'typeorm'
import { connect } from 'react-redux'
import { FontAwesome5 } from '@expo/vector-icons'

import { Container, ScrollView, List, ContainerEmpty, TextMessage, ContainerButtons } from '../../assets/styles/productStyle'
import { AddButton, RefressButton, NextPageButton, BeforePageButton } from '../../components/Buttons'
import { LoadingCircleBlue, EmptyList } from '../../components/Animations'
import ProductRepository from '../../data/repositories/ProductRepository'
import RenderProduct from '../../components/ProductItem'
import { ProductModel } from '../../data/entities/ProductModel'

const maxItemsPage = 6;
class ProductScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const edit = navigation.getParam('id');
    console.log(edit)
    if (edit) {
      return {
        title: 'Edit Page',
      }
    } else {
      return {
        title: 'Normal Page',
      }
    }
  }

  state = {
    products: [],
    page: 0,
    loading: false,
  }

  setProducts = (products: object) => {
    this.setState({ products })
  }

  setLoading = (loading: boolean) => {
    this.setState({ loading })
  }

  setPage = (page: number) => {
    this.setState({ page })
  }

  async componentDidMount() {
    this.loadItems()
  }

  loadItems = async () => {
    this.setLoading(true)
    const { connection } = this.props
    const { page } = this.state

    if (connection) {
      const repository = new ProductRepository(connection)

      const products = await repository.getAllPagination(maxItemsPage, (page * maxItemsPage))

      this.setProducts(products)
    }
    this.setLoading(false)
  }

  loadInitialProducts = async () => {
    await this.setPage(0)
    await this.loadItems()
  }

  loadMoreProducts = async () => {
    const { page } = this.state
    await this.setPage(page + 1)
    await this.loadItems()
  }

  loadMinusProducts = async () => {
    const { page } = this.state
    await this.setPage(page - 1)
    await this.loadItems()
  }

  renderItem = ({ item }) => {
    return (
      <RenderProduct item={item} navigation={this.props.navigation} />
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
                keyExtractor={(item: ProductModel) => item.id.toString()}
                onRefresh={() => this.loadInitialProducts()}
                refreshing={loading}
                onEndReachedThreshold={0}
                onEndReached={() => this.LoadMoreProducts()}
                horizontal={false}
              />
            </ScrollView>
          ) : (
              this.renderEmpty()
            )
        }
        {
          this.renderButtons()
        }
      </Container>
    )
  }

  renderButtons = () => {
    const { page, products } = this.state
    return (
      <ContainerButtons>
        <BeforePageButton onPress={() => page > 0 && this.loadMinusProducts()} page={page} />
        <RefressButton
          onPress={() => this.loadInitialProducts()}
        />
        <NextPageButton onPress={() => (products && products.length === maxItemsPage) && this.loadMoreProducts()} page={page + 2} />
        <AddButton
          onPress={() => this.props.navigation.navigate('new', { title: 'Novo Produto', id: null })}
        />
      </ContainerButtons>
    )
  }

  renderIcon = (name: 'plus', size: 20, color: 'white') => (
    <FontAwesome5 name={name} size={size} color={color} />
  )

  renderEmpty = () => {
    return (
      <ContainerEmpty>
        <EmptyList />
        <TextMessage>Nenhum produto foi encontrado!</TextMessage>
      </ContainerEmpty>
    )
  }

  render() {
    const { loading } = this.state

    return (
      loading ? (
        <LoadingCircleBlue />
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
