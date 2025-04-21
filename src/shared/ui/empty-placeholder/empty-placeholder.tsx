import styles from './empty-placeholder.module.scss'

type EmptyPlaceholderProps = {
  text: string
  imgSrc: string
}

const EmptyPlaceholder = ({ text, imgSrc }: EmptyPlaceholderProps) => {
  return (
    <div className={styles['empty-placeholder']}>
      <img src={imgSrc} alt="Empty illustration" />
      <span>{text}</span>
    </div>
  )
}

export default EmptyPlaceholder
