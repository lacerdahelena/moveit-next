import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {

    const { level } = useContext(ChallengesContext);
    
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/37632308?s=460&u=52dbdf285d0028e5bb886cdf2615fbd7641e955d&v=4" alt="Helena Lacerda" />
            <div>
                <strong>Helena Lacerda</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}