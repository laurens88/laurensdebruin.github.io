import styles from '../styles/country.module.css';

function Country({name, abbreviation}) {
    return (
        <div className={styles.container}>
            <img src={`/flags/${abbreviation}.png`} alt={abbreviation} style={{width: 'auto', height: '50px'}}/>
            <p>{name}</p>
        </div>
    );
}

export default Country;