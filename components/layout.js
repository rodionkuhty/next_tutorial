import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

// console.log(Router);
// console.log(NProgress);

Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.configure({ showSpinner: false });
  NProgress.start();
};

Router.onRouteChangeComplete = url => {
  console.log(url);
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Footer = styled.footer`
  width: 100%;
  height: 50px;
  background: coral;
`;

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.4/css/bootstrap.min.css"
        />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </header>
      {children}
      <Footer>
        <p>That's should work</p>
      </Footer>
    </div>
  );
};

export default Layout;
