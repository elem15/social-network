import React from "react";
import styles from "./Paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.listContainer}>
            {pages.map(p => {
                let selectedPage = currentPage === p ? styles.selectedPage : styles.unSelectedPage;
                return <span className={styles.pointer} key={p}><span
                    className={selectedPage} onClick={() =>
                    onPageChanged(p)
                }>{p}</span></span>
            })}
        </div>
    )
}
export default Paginator;