import React from 'react';

interface AppIconProps {
    url: string;
    size: number;
    fill: string;
    style?: React.CSSProperties;
}

const AppIcon: React.FC<AppIconProps> = ({ url, size, fill, style }) => {
    return (
        <img
            src={url}
            alt="App Icon"
            style={{ width: `${size}rem`, height: `${size}rem`, fill, ...style }}
        />
    );
};

export default AppIcon;
