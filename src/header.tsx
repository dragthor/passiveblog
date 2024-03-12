import Container from 'react-bootstrap/Container';

const Header = () => {

    return (
        <header>
            <Container className="mt-3 mb-3">
                <Container className="p-5 mb-2 bg-dark rounded-3 text-white">
                    <h1 className="header">Passive Option Trading</h1>
                    <h6>Sell Options for Passive Income</h6>

                </Container>
            </Container>
        </header>
    )
};

export default Header;