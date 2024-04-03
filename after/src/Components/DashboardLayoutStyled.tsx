import React from 'react'
import { useState } from 'react'
import BurnStatsContainer from '.BurnStatsContainer.tsx'
import BurnButtonBar from './BurnButtonBar.tsx'
const DashboardLayoutStyled:React.FC = () => { 
    {/*State variables*/ }
    const [burnTransactions, setBurnTransactions] = useState<any[]>([]);
    const [txProgress, setTxProgress] = useState<boolean>(false);
    const [burnAmount, setBurnAmount] = useState("");
    const [burnTxHash, setBurnTxHash] = useState<string | null>(null);

    {/*Custom hooks from original BurnPage.tsx*/ }
    const {
        walletAddress,
        isWalletConnected,
        walletBalance,
        isBalanceError,
        openChainModal,
        walletChain,
        chains,
        openConnectModal,
    } = useWallet();
    const {
        supplies,
        allSupplies,
        setSuppliesChain,
        suppliesChain,
        fetchSupplies,
    } = useAppSupplies(true);

    {/*Burn Progress from original tsx*/ }
    enum BurnTxProgress {
        default = "Burn App Tokens",
        burning = "Burning...",
    }
    const [txButton, setTxButton] = useState<BurnTxProgress>(
        BurnTxProgress.default
    );
    const [burnTxHash, setBurnTxHash] = useState<string | null>(null);
    const executeBurn = async () => {
        if (!isWalletConnected) {
            openConnectModal();
        }
        if (burnAmount === "") {
            console.log("Enter amount to migrate");
            showToast("Enter amount to migrate", ToastSeverity.warning);
            return;
        }
        const newTokenAddress = fetchAddressForChain(walletChain?.id, "newToken");
        const oftTokenContract = new Contract(
            newTokenAddress,
            oftAbi,
            ethersSigner
        );



    return (
        <>
            <div className="burnpage">
                <div
                    className="top_conatiner burnpage"
                    style={{ alignItems: "flex-start" }}
                >
                    <div className="info_box filled">
                        <h1 className="title">App TOKEN BURN</h1>
                        <p className="description medium"></p>

             <BurnButtonBar/>
                    </div>
                    <div>
                    <BurnStatsContainer/>
                      
                </div>
            </div>
        </>
    )
  
}

export default DashboardLayoutStyled;