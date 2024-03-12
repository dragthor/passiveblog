import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
        <footer>

            <Container className="p-3 mb-4 mt-3 bg-light rounded-3">
                <div style={{ "marginTop" : "1em", "marginBottom" : "1em" }}>Find this site useful? Have a question? Contact: <a href="mailto:info@passiveoption.com">info@passiveoption.com</a></div>

                <div style={{ "fontSize" : ".75em"}}>Disclaimer: All content on this website is intended for educational purposes only and "Passive Option Trading" (passiveoption.com) will not be held responsible for any losses incurred. The information on this website is "general advice only" and does not take individual circumstances into account so do not trade or speculate based solely on the information provided. By viewing and participating this website's content, you fully accept and agree that this website offers general advice only and that trading the financial markets is a high risk activity and you should understand that past performance does not indicate future performance and that the value of investments and income from them may go up as well as down, and are not guaranteed. No representation is, has or will be made that any website visitor, client or content viewer will or is likely to achieve profits similar in any way to those discussed on this website or this website's subsidiaries. You will not hold any person or entity responsible for any losses or damages resulting from the general advice provided here by "Passive Option Trading" or PassiveOption.com.</div>
            </Container>

        </footer>
    )
};

export default Footer;