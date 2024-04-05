'use client'
import {useState} from "react";
import styles from "@/app/page.module.css"

export default function Home() {
    const [toggleBkg, setToggleBkg] = useState(false);

    function handleH1Click(){
        setToggleBkg(!toggleBkg);
    }

    return (
        <main >
            <div className={toggleBkg ? styles.green : styles.red}>
                <h1 onClick={handleH1Click}>My Sweet Text</h1>
            </div>
        </main>
    );
}
