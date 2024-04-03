import AppChip from './AppChip.tsx'
import AppIcon from './AppIcon.tsx'
const BurnStatsContainer: React.FC<BurnStatsContainerProps> = ({
    statsSupplies,
    allSupplies,
    walletChain,
    tokenAddress,
    numberWithCommas
}) => {
    return (
        <div className="burn-stats-container">
            <div className="top-bar">
                <img
                    src="/images/token/App_new.svg"
                    alt="App Icon"
                    className="app-icon"
                    style={{ width: '2rem', margin: 0 }}
                />
                <p className="label">App SUPPLY</p>
                {/* AppChip component */}
                <AppChip
                    onClick={openChainModal}
                    title={walletChain?.name || "---"}
                    endIcon={"/icons/expand_more.svg"}
                    startIcon={`/images/token/${walletChain?.nativeCurrency?.symbol}.svg``}
                />
                {/* AppExtLink component */}
                <a
                    className="supply-label"
                    href={`${suppliesChain?.blockExplorers?.default?.url}/address/${tokenAddress}``}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Contract
                </a>
            </div>
            <div className="supply-bar">
                {/* AppIcon components */}
                <img
                    src="/icons/fire.svg"
                    alt="Fire Icon"
                    className="supply-icon"
                    style={{ width: '1.15rem', margin: 0 }}
                />
                <img
                    src="/icons/double_arrow.svg"
                    alt="Arrow Icon"
                    className="arrow-icon"
                    style={{ width: '1.15rem', margin: '0 0 0 -0.8rem' }}
                />
                {/* Orange and green lines */}
                <div className="lines">
                    <div className="line orange" style={{ width: `${100 - statsSupplies.circulatingPercent}%` }}></div>
                    <div className="line green" style={{ width: `${statsSupplies.circulatingPercent}%` }}></div>
                </div>
            </div>
            <div className="supply-label-list">
                <div>
                    {/* Burnt App Tokens */}
                    <p className="supply-label orange">
                        <span className="hyphen"></span>
                        <span className="text">Burnt App Tokens</span>
                        <span className="percent orange">
                            {(100 - statsSupplies.circulatingPercent).toFixed(2)}%
                        </span>
                    </p>
                    {/* Burnt App Tokens value */}
                    <p className="supply-value">
                        <img
                            src={`/images/token/${walletChain?.nativeCurrency?.symbol}.svg`}
                            alt="Token Icon"
                            className="token-icon"
                            style={{ width: '1.25rem', margin: 0 }}
                        />
                        {numberWithCommas(statsSupplies.totalSupply - statsSupplies.circulatingSupply)}
                    </p>
                    {/* Original App Token Initial Supply */}
                    <div className="full-supply">
                        Original App Token Initial Supply:
                        {numberWithCommas(statsSupplies.totalSupply)}
                    </div>
                </div>
                <div>
                    {/* Circulating App Tokens */}
                    <p className="supply-label green">
                        <span className="hyphen"></span>
                        <span className="text">Circulating App Tokens</span>
                        <span className="percent green">
                            {statsSupplies.circulatingPercent.toFixed(2)}%
                        </span>
                    </p>
                    {/* Circulating App Tokens value */}
                    <p className="supply-value">
                        <img
                            src={/images/token/${walletChain?.nativeCurrency?.symbol}.svg}
                            alt="Token Icon"
                            className="token-icon"
                            style={{ width: '1.25rem', margin: 0 }}
                        />
                        {numberWithCommas(statsSupplies.circulatingSupply)}
                    </p>
                    {/* Circulating App Tokens for other chains */}
                    {allSupplies
                        .filter((s) => s.chainId != walletChain?.id)
                        .map((s: any) => (
                            <p key={s.chainId} className="supply-value mini">
                                <img
                                    src={/images/token/${chainTokenSymbols.get(s.chainId) ?? "ETH"}.svg}
                                    alt="Token Icon"
                                    className="token-icon"
                                    style={{ width: '1.25rem', margin: 0 }}
                                />
                                {numberWithCommas(s.circulatingSupply)}
                            </p>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default BurnStatsContainer;