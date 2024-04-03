const TransactionTableStyled() = () => {
    return (
        <div>
            <div className="header">
                <p className="header_label">Burn Transactions</p>
            </div>
            <BurnTxTable
                data={burnTransactions}
                priceUSD={coinData?.current_price?.usd}
            />
        </div>
    )
}

export default TransactionTableStyled;