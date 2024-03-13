import Container from 'react-bootstrap/Container';

interface HeaderProps {
    subTitle: string,
    mainTitle: string
}

const Header = (props: HeaderProps) => {
    return (
        <header>
            <Container className="mt-3 mb-3">
                <Container className="p-5 mb-2 bg-dark rounded-3 text-white">
                    <h1 className="header">{props.mainTitle}</h1>
                    <h6>{props.subTitle}</h6>
                </Container>
            </Container>
        </header>
    )
};

export default Header;