import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

const Score = ({ value }) => {
    const isDecimal = useMemo(() => value % 1 !== 0, [value])
    const firstPart = useMemo(() => Math.floor(value), [value])
    
    return (
        <div>
            {Array(5).fill().map((_, index) => {
                const position = index + 1
                if (position <= firstPart) {
                    return <Icon key={index} color="yellow" name="Star" />
                }
                if (isDecimal && (firstPart + 1) === position) {
                    return <Icon key={index} color="yellow" name="StarHalf" />
                }
                return  <Icon key={index} color="yellow" name="StarBorder" />
            })}
        </div>
    )
}

Score.propTypes = {
    value: PropTypes.number.isRequired,
}

export default Score