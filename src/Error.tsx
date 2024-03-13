import Header from './header'
import Footer from './footer'
import SideBar from './sidebar'
import { useRouteError } from "react-router-dom";
import Container from 'react-bootstrap/Container';

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <Header mainTitle="Error" subTitle="Passive Option Trading" />
            <Container>
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-9">
                        <div className="alert alert-danger" role="alert">
                            Error. I'm sorry Dave, I'm afraid I can't do that.
                        </div>
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

export default ErrorPage;
