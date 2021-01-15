import Document, { Html, Head, Main, NextScript } from 'next/document';
import LeadBack from '../components/moduls/LeadBack';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="css/owl.carousel.min.css"></link>
          <link rel="stylesheet" href="css/owl.theme.default.min.css"></link>
          <link rel="stylesheet" href="css/magnific-popup.css"></link>
          <link rel="stylesheet" href="css/leaflet.css"></link>
          <link rel="preload" href="img/banner2.jpg" as="image"></link>

          <script src="/js/jquery-3.5.1.min.js" />
          <script src="/js/jquery.magnific-popup.min.js" />
          <script src="/js/leaflet-providers.js" />
          <script src="/js/leaflet.js" />
          <script src="/js/owl.carousel.min.js" />
          <script src="/js/swiped-events.min.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <LeadBack />
        </body>
      </Html>
    )
  }
}

export default MyDocument