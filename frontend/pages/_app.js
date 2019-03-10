import App, { Container } from 'next/app';
import Page from '../components/Page';
import Admin from '../components/Admin';

class AppLayoutComponent extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps, router } = this.props;
    console.log(router);
    return (
      <Container>
        {router.asPath === '/dashboard' ? (
          <Admin>
            <Component />
          </Admin>
        ) : (
          <Page>
            <Component />
          </Page>
        )}
      </Container>
    );
  }
}

export default AppLayoutComponent;
