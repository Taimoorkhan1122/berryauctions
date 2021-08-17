import React from 'react'

import styles from  './gradtext.module.css'

interface IGradTextProps {
    children: React.ReactNode,
}

const GradText: React.FC<IGradTextProps> = ({children}) => {
    return (
        <>
            <h3 className={styles.h3}>{children}</h3>
        </>
    )
}

export default GradText
