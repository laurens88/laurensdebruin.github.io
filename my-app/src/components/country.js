import styles from '../styles/country.module.css';

function Country({name, abbreviation}) {
    return (
        <div className={styles.container}>
            <div className={styles.flagContainer}>
            <img src={`/flags/${abbreviation}.png`} alt={abbreviation} style={{width: 'auto', height: '30px'}}/>
            </div>
            <p>{name}</p>
        </div>
    );
}

export default Country;