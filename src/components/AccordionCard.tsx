import arrow from "../icon/arrow.svg"
import styles from "./accordion.module.css"
import {useState} from "react"
export default function AccordionCard() {
    const [arrowClick,setArrowClick] = useState(true)
  return (
    <div style={{width: "400px", height: "300px"}}>
        <div className={styles.dFlexRow}>
            <h1>title111</h1>
            <img className={arrowClick ? `${styles.arrow} ${styles.active}` : `${styles.arrow}` } alt="arrow" src={arrow} onClick={() => {
                setArrowClick(!arrowClick)
            }}/>
        </div>
        {arrowClick ? <h3>111111111111111</h3> : null}
    </div>
  )
}
