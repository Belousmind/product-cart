import styles from './empty-placeholder.module.scss'
import { motion, AnimatePresence } from 'framer-motion'

type EmptyPlaceholderProps = {
  text: string
  imgSrc: string
}

const EmptyPlaceholder = ({ text, imgSrc }: EmptyPlaceholderProps) => {
  return (
    <div className={styles['empty-placeholder']}>
      <AnimatePresence>
        <motion.img
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            duration: 0.25,
            ease: 'backOut',
          }}
          src={imgSrc}
          alt="Empty illustration"
        />
      </AnimatePresence>

      <span>{text}</span>
    </div>
  )
}

export default EmptyPlaceholder
