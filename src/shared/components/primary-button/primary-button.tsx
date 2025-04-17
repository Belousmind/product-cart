import styles from './primary-button.module.scss'

type ButtonPrimaryProps = {
  text: string
  onClick?: () => void
}

const ButtonPrimary = ({ text, onClick }: ButtonPrimaryProps) => {
  return (
    <button className={styles['button-primary']} onClick={onClick}>
      {text}
    </button>
  )
}

export default ButtonPrimary
