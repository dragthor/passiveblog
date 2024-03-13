const SideBar = () => {
    return (
        <div className="bg-light rounded-3 p-3">
            <h5>Core Tickers</h5>
            <ul>
                <li><a href="https://finviz.com/futures_charts.ashx?p=d1&t=ES" target="_new">SPX</a></li>
                <li><a href="https://finviz.com/quote.ashx?t=SPY">SPY</a></li>
                <li><a href="https://finviz.com/futures_charts.ashx?p=d1&t=ES" target="_new">/ES</a></li>
                
                <li><a href="https://finviz.com/futures_charts.ashx?p=d1&t=CL" target="_new">/CL</a></li>
            </ul>
            <h5>Brokers</h5>
            <ul>
                <li><a href="https://www.fidelity.com/options-trading/overview" target="_new">Fidelity</a></li>
                <li><a href="https://start.tastyworks.com/#/login?referralCode=SP8DSHF682" target="_new">TastyTrade</a></li>
                <li><a href="https://join.robinhood.com/kristok207" target="_new">Robinhood</a></li>
            </ul>
            <h5>Books</h5>
            <ul>
                <li><a href="https://www.amazon.com/Profiting-Iron-Condor-Options-Strategies-ebook/dp/B004K1F7HG/?tag=passiveoption-20" target="_new">Profiting w/Iron Condor Options</a></li>
                <li><a href="https://www.amazon.com/Options-as-Strategic-Investment-Fifth/dp/0735204659/?tag=passiveoption-20" target="_new">Options as a Strategic Investment</a></li>
            </ul>

            <h5>Helpful Links</h5>
            <ul>
                <li><a href="https://finviz.com/calendar.ashx" target="_new">Economic Calendar</a></li>
                <li><a href="https://www.cnn.com/markets/fear-and-greed" target="_new">Fear &amp; Greed Index</a></li>
                <li><a href="https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm" target="_new">FOMC Calendar</a></li>
                <li><a href="https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html" target="_new">FedWatch Tool</a></li>
                <li><a href="https://www.finra.org/finra-data/fixed-income" target="_new">Individual Bonds</a></li>
                <li><a href="https://digital.fidelity.com/prgw/digital/taxyieldcalc/" target="_new">Taxable-Equivalent Yields</a></li>
                <li><a href="https://ycharts.com/indicators/10_year_3_month_treasury_spread" target="_new">10 Year/3 Month Yield Spread</a></li>
                <li><a href="https://tastyworks.freshdesk.com/support/solutions/articles/43000503202-cme-options-on-futures-specifications" target="_new">Options on Futures Spec</a></li>

            </ul>

            <h5>Trader Roll</h5>
            <ul>
                <li><a href="https://www.youtube.com/channel/UCGzfu0Q8QtSJvfwJlJ0t-0g" target="_new">Tammy Chambless</a></li>
                <li><a href="https://thetagang.com/joonie" target="_new">Theta Gang</a></li>
                <li><a href="https://wealthyoption.com/" target="_new">Wealthy Option</a></li>
                <li><a href="https://www.youtube.com/@TommKing13" target="_new">Tom King Trades</a></li>
            </ul>
        </div>
    )
};

export default SideBar;