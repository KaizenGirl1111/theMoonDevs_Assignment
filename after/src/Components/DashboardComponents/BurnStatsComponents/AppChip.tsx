

interface AppChipProps {
    onClick: () => void;
    title: string;
    endIcon: string;
    startIcon: string;
}

const AppChip: React.FC<AppChipProps> = ({ onClick, title, endIcon, startIcon }) => {
    return (
        <div className="app-chip" onClick={onClick}>
            <img className="start-icon" src={startIcon} alt="Start Icon" />
            <span className="title">{title}</span>
            <img className="end-icon" src={endIcon} alt="End Icon" />
        </div>
    );
};

export default AppChip;
