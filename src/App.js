import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import styles from './styles.module.css'
import Tree from './Tree'

/*
0 % { transform: scale(1); }
50 % { transform: scale(1.4); }
100 % { transform: scale(1); }
`*/

export default function App() {
  const [state, toggle] = useState(true)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 250 },
  })
  return (
    <div className={styles.container} onClick={() => toggle(!state)}>
      <animated.div
        className={styles.text}
        style={{
          opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
          scale: x.to({
            range: [0, 0.5, 1],
            output: [0, 1.4, 1],
          }),
        }}>
        <Tree/>
      </animated.div>
    </div>
  )
}
