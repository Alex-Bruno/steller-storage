import React from 'react'
import { Connection } from 'typeorm'
import { connect } from 'react-redux'
import { FontAwesome5 } from '@expo/vector-icons'

import { Container, ScrollView, List, ContainerEmpty, TextMessage, ContainerButtons } from '../../assets/styles/productStyle'
import { AddButton, RefressButton, NextPageButton, BeforePageButton } from '../../components/Buttons'
import { LoadingCircleBlue, EmptyList } from '../../components/Animations'
import PaymentTypeRepository from '../../data/repositories/PaymentTypeRepository'
import PaymentType from '../../components/PaymentType'
import { PaymentTypeModel } from '../../data/entities/PaymentType'

const maxItemsPage = 6;
class PaymentTypeScreen extends React.Component {

  state = {
    items: [],
    page: 0,
    loading: false,
  }

  setItems = (items: object) => {
    this.setState({ items })
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
      const repository = new PaymentTypeRepository(connection)

      const items = await repository.getAllPagination(maxItemsPage, (page * maxItemsPage))

      this.setItems(items)
    }
    this.setLoading(false)
  }

  loadInitialItems = async () => {
    await this.setPage(0)
    await this.loadItems()
  }

  loadMoreItems = async () => {
    const { page } = this.state
    await this.setPage(page + 1)
    await this.loadItems()
  }

  loadMinusItems = async () => {
    const { page } = this.state
    await this.setPage(page - 1)
    await this.loadItems()
  }

  renderItem = ({ item }) => {
    return (
      <PaymentType item={item} navigation={this.props.navigation} />
    )
  }

  renderContent = () => {

    const { items, loading } = this.state

    return (
      <Container>
        {
          (items && Object.keys(items).length) ? (
            <ScrollView>
              <List
                data={items}
                renderItem={this.renderItem}
                keyExtractor={(item: PaymentTypeModel) => item.id.toString()}
                onRefresh={() => this.loadInitialItems()}
                refreshing={loading}
                onEndReachedThreshold={0}
                onEndReached={() => this.loadMoreItems()}
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
    const { page, items } = this.state
    return (
      <ContainerButtons>
        <BeforePageButton onPress={() => page > 0 && this.loadMinusItems()} page={page} />
        <RefressButton
          onPress={() => this.loadInitialItems()}
        />
        <NextPageButton onPress={() => (items && items.length === maxItemsPage) && this.loadMoreItems()} page={page + 2} />
        <AddButton
          onPress={() => this.props.navigation.navigate('new', { title: 'Nova Forma de Pagamento', id: null })}
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
        <TextMessage margin='380px'>Nenhuma forma de pagamento foi encontrada!</TextMessage>
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
)(PaymentTypeScreen)
