import React from 'react';
import s from './App.module.css';
import {SideBar} from "../../components/sideBar/SideBar";
import {Description} from "../../components/descriptionPage/Description";

function App() {
    return (
        <div className={s.appCvContainer}>
            <div className={s.cvContainer}>
               <SideBar/>
                <Description/>
            </div>
        </div>
    );
}

export default App;
