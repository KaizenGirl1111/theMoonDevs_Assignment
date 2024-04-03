const { openChainSelector, setOpenChainSelector, openChainSelectorModal } =
    useChainSelector(); //from Original BurnPage.tsx

{ /*Props defined in interface as in assignment there are prop items*/}
interface ChainSelectorProps {
    title: string;
    openChainSelector: any;
    setOpenChainSelector: any;
    chains: any; // Assuming `chains` is an array of strings
    selectedChain: string; // Assuming `selectedChain` is a string
    setSelectedChain: any;
}

const ChainSelector: React.FC<ChainSelectorProps> = ({
    title,
    openChainSelector,
    setOpenChainSelector,
    chains,
    selectedChain,
    setSelectedChain,
}) => {
    {/*code in tsx, not originally given in assignment so lets assume something here :D */ }
}
export default ChainSelector;