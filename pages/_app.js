import wrapper from '../store'
import '../styles/reset.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
