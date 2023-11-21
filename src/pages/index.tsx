import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ProductList from '@/components/ProductList/ProductList'
import store from '@/redux/store'
import { Provider } from 'react-redux';

export default function Home() {
  return (
    <Provider store={store}>
      <main>
        <Header />
        <ProductList />
        <Footer />
      </main>
    </Provider>
  )
}
