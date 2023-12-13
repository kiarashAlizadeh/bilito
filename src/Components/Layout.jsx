import Container from './Container';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout(props) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <Container>{props.children}</Container>
      <Footer />
    </div>
  );
}

export default Layout;
