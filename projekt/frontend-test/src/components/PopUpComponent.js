import styles from '../styles/PopUpComponent.module.scss';

const PopUpComponent = ({onReset, onBonus, onAddName}) => {
    return(
    <div className={`${onBonus ? styles.container : styles.containerBonus}`}>
        <button className={styles.button} onClick={onReset}><i class="fa-solid fa-chevron-right"/> ZRESETUJ USTAWIENIA</button>
        <button className={styles.button} onClick={onAddName}><i class="fa-solid fa-chevron-right"/> POKAŻ DANE OSOBOWE</button>
    </div>
    )
}

export default PopUpComponent;