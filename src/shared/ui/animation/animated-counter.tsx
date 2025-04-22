import { motion, AnimatePresence } from 'framer-motion'

type AnimatedCounterProps = {
  num: number
}

const AnimatedCounter = ({ num }: AnimatedCounterProps) => {
  const changedNumber = num.toFixed(2).split('')

  return (
    <>
      <AnimatePresence mode="wait">
        <div style={{ height: 40, display: 'flex' }}>
          {changedNumber.map((item, index) => (
            <motion.span
              key={`${item}-${index}`}
              style={{ display: 'block' }}
              initial={{ y: '20px', opacity: 0 }}
              animate={{ y: '0px', opacity: 1 }}
              exit={{ y: '-20px', opacity: 0 }}
              transition={{
                duration: 0.2,
                ease: 'easeOut',
                delay: index * 0.05,
              }}
              layout
            >
              {item}
            </motion.span>
          ))}
        </div>
      </AnimatePresence>
    </>
  )
}

export default AnimatedCounter
