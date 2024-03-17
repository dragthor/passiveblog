import Header from './header'
import Footer from './footer'
import SideBar from './sidebar'
import Navigation from './navigation';

import Container from 'react-bootstrap/Container';

function About() {
  return (
    <div>
      <Navigation homeActive={false} aboutActive={true} />
      <Header mainTitle="About" subTitle="Passive Option Trading" />
      <Container>
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-9">
            <p>
              I'm a computer programmer trying to understand passive option trading. Hopefully I'm profitable (long term).
            </p>

            <ul>
              <li>I have nothing to sell. No courses. No trainings. No coaching. No trade alerts.</li>
              <li>I <u>do not</u> care which broker you use. I use <a href="https://www.fidelity.com/options-trading/overview" target="_blank" rel="noreferrer">Fidelity</a>, <a href="https://start.tastyworks.com/#/login?referralCode=SP8DSHF682" target="_blank" rel="noreferrer">TastyTrade</a>, and sometimes <a href="https://join.robinhood.com/kristok207" target="_blank" rel="noreferrer">Robinhood</a>.</li>
              <li>I want this site to be fast, clean, and mobile friendly.</li>
              <li>This website <u>does not</u> track anything. No Google Analytics and zero third-party scripts other than <a href="https://www.cloudflare.com" target="_blank" rel="noreferrer">Cloudflare</a> for performance &amp; security.</li>
              <li>
                I <u>do not</u> want to babysit option trades all day. I set alerts in my brokerage account and trade further out in time to mitigate gamma risk. Additionally, I trade mainly European style options (SPX, XSP) and utilize futures options (/ES, /MES, /CL, /MCL).
              </li>
              <li>No ads. I hate ads.</li>
              <li>No sponsors.</li>
              <li>The only two book recommendations utilize Amazon affiliate tagging. Hey, I have to pay broker commissions &amp; fees too!</li>
              <ul>
                <li><a href="https://www.amazon.com/Profiting-Iron-Condor-Options-Strategies-ebook/dp/B004K1F7HG/?tag=passiveoption-20" target="_blank" rel="noreferrer">Profiting w/Iron Condor Options</a></li>
                <li><a href="https://www.amazon.com/Options-as-Strategic-Investment-Fifth/dp/0735204659/?tag=passiveoption-20" target="_blank" rel="noreferrer">Options as a Strategic Investment</a></li>
              </ul>
            </ul>

            <div className="alert alert-danger" role="alert">
              <p>Please keep your position size small. Please limit your portfolio allocation (less than 5%).</p>
              <p>If not, then it's only a matter of time before you blow up your entire account.</p>
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

export default About;
