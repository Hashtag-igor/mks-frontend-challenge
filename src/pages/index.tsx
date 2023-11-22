import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ProductList from '@/components/ProductList/ProductList'
import store from '@/redux/store'
import GlobalStyle from '../styles/GlobalStyles';
import { Provider } from 'react-redux';

export default function Home() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <main>
        <Header />
        <ProductList />
        <Footer />
      </main>
    </Provider>
  )
}
