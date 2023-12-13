import Container from './Container';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout(props) {
  return (
    <>
      <Navbar />
      <Container>{props.children}</Container>
      <Footer />
    </>
  );
}

export default Layout;
