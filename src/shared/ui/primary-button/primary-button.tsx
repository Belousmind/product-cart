import styles from './primary-button.module.scss'

type PrimaryButtonProps = {
  text: string
  onClick: () => void
}

const PrimaryButton = ({text, onClick}: PrimaryButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>{text}</button>
  )
}

export default PrimaryButton
