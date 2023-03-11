import React from 'react';
import s from './Description.module.css'

export const Description = () => {
    return (
        <div className={s.descriptionContainer}>
            <div className={s.programmerName}>
                Мартынчук Кирилл Дмитриевич
                <div className={s.specializationName}>
                    Frontend developer(React + TS)
                </div>
            </div>
            <div className={s.descriptionAuthor}>
                Sobre
                <div className={s.aboutAuthor}>
                    Creative student-interface designer FrontEnd developer, who took courses from it-incubator.
                    I am currently developing and participating in projects and tasks focused on a web designer in order
                    to improve my skills.
                </div>
            </div>
            <div className={s.technologyStackContainer}>
                Technology stack
                <div className={s.technologyStack}>
                    <div className={s.technology}>
                        <img src="/src/assets/icon/maxresdefault.jpg" alt="HTML"/>
                        <div className={s.technologyName}>
                            HTLM5+CSS3
                        </div>
                    </div>
                    <div>
                        <img src="src/assets/icon/jetbrains-webstorm2487.jpg" alt="Webstorm"/>
                        <div className={s.technologyName}>
                            Webstorm
                        </div>
                    </div>
                    <div>
                        <img src="src/assets/icon/unnamed.jpg" alt="GitHub"/>
                        <div className={s.technologyName}>
                            GitHub
                        </div>
                    </div>
                    <div>
                        <img src="src/assets/icon/FcsyONIXkAAYsJO.jpg" alt="GitHub"/>
                        <div className={s.technologyName}>
                            Figma
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.workExperienceContainer}>
                Work experience
                <div className={s.workExperienceDescription}>

                </div>
            </div>
        </div>
    );
};