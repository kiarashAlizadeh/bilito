import { Route, Routes } from 'react-router-dom';
import { Layout } from './Components';
import AppRotes from './AppRoutes';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          {AppRotes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
