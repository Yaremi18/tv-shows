import React, { useMemo } from 'react';
import Icon from '../Icon';

const Score = ({ value }) => {
    const isDecimal = useMemo(() => value % 1 !== 0, [value]);
    const firstPart = useMemo(() => Math.floor(value), [value]);
    
    return (
        <div>
            {Array(5).fill().map((_, index) => {
                const position = index + 1;
                if (position <= firstPart) {
                    return <Icon key={index} color="lightPrimary" name="Star" />;
                }
                if (isDecimal && (firstPart + 1) === position) {
                    return <Icon key={index} color="lightPrimary" name="StarHalf" />;
                }
                return  <Icon key={index} color="lightPrimary" name="StarBorder" />;
            })}
        </div>
    );
}

export default Score;