import React from 'react';
import s from './Description.module.css'

export const Description = () => {
    return (
        <div className={s.descriptionContainer}>
            <div className={s.programmerName}>
                Мартынчук Кирилл Дмитриевич
                <div className={s.specializationName}>
                    frontend developer(React + TS)
                </div>
            </div>
            <div>
                Sobre
                <div>
                    Creative student-interface designer FrontEnd developer, who took courses from it-incubator.
                    I am currently developing and participating in projects and tasks focused on a web designer in order to improve my skills.
                </div>
            </div>
        </div>
    );
};