import './styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ServerStyleSheet } from 'styled-components';

config.autoAddCss = false 


export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
