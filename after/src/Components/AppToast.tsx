
interface ToastProps {
    position: {
        vertical: "top" | "bottom";
        horizontal: "left" | "center" | "right";
    }
    message: string;
    severity: "success"|"info"|"warning"|"error"
}

const AppToast: React.FC<ToastProps> = ({
    position,
    message,
    severity
}) => {
    {/*code for App toaster not in original assignment*/ }
}

export default AppToast;