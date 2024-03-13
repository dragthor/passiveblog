import Header from './header'
import Footer from './footer'
import PostList from './postlist'
import SideBar from './sidebar'
import Navigation from './navigation';

import Container from 'react-bootstrap/Container';

function AppPage() {
  return (
    <div>
      <Navigation homeActive={true} aboutActive={false} />
      <Header mainTitle="Passive Option Trading" subTitle="Sell Options for Passive Income" />
      <Container>
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-9">
            <PostList />
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3">
            <SideBar />
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default AppPage;
