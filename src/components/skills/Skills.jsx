import styles from "./Skills.module.css";
import mainStyles from "../../styles/main.module.css";

import aeIcon from "../../pictures/ae.png";
import aiIcon from "../../pictures/ai.png";
import psIcon from "../../pictures/ps.png";
import figmaIcon from "../../pictures/figma.png";
import bStar from "../../pictures/blackstar.svg";
import gStar from "../../pictures/greystar.svg";

const Skills = () => {
    return (
        <section className={styles.skills}>
            <div className={mainStyles.container}>
                <div className={styles.skills__content}>
                    <div className={styles.skills__title}>
                        Skills
                    </div>
                    <div className={styles.skills__subtitle}>
                        I work in such programs as
                    </div>
                    <div className={styles.skills__cards}>
                        <div className={styles.skills__card}>
                            <div>
                                <img src={aeIcon} alt="aeIcon" />
                            </div>
                            <p className={styles.skills__card_desc}>
                                Adobe
                                Photoshop
                            </p>
                            <div className={styles.skills__rate}>
                                <img src={bStar} alt="blackstar" />
                                <img src={bStar} alt="blackstar" />
                                <img src={bStar} alt="blackstar" />
                                <img src={gStar} alt="greystar" />
                                <img src={gStar} alt="greystar" />
                            </div>
                        </div>
                        <div className={styles.skills__card}>
                            <div>
                                <img src={aiIcon} alt="aiIcon" />
                            </div>
                            <p className={styles.skills__card_desc}>
                                Adobe
                                Illustrator
                            </p>
                            <div className={styles.skills__rate}>
                                <img src={bStar} alt="blackstar" />
                                <img src={bStar} alt="blackstar" />
                                <img src={bStar} alt="blackstar" />
                                <img src={bStar} alt="blackstar" />
                                <img src={gStar} alt="greystar" />
                            </div>
                        </div>
                        <div className={styles.skills__card}>
                            <div>
                                <img src={psIcon} alt="psIcon" />
                            </div>    
                            <p className={styles.skills__card_desc}>
                                Adobe
                                After Effects
                            </p>
                            <div className={styles.skills__rate}>
                                <img src={bStar} alt="blackstar" />
                                <img src={bStar} alt="blackstar" />
                                <img src={bStar} alt="blackstar" />
                                <img src={bStar} alt="blackstar" />
                                <img src={gStar} alt="greystar" />
                            </div>
                        </div>
                        <div className={styles.skills__card}>
                            <div>
                                <img src={figmaIcon} alt="figmaIcon" />
                            </div>
                            <p className={styles.skills__card_desc}>
                                Figma
                            </p>
                            <div className={styles.skills__rate}>
                                <img src={bStar} alt="blackstar" />
                                <img src={bStar} alt="blackstar" />
                                <img src={bStar} alt="blackstar" />
                                <img src={bStar} alt="blackstar" />
                                <img src={gStar} alt="greystar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;