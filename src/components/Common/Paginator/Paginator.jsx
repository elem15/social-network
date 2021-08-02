import React, {useState} from "react";
import styles from "./Paginator.module.css";
import cn from 'classnames';

const Paginator = ({totalItemCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let [portionNumber, setPortionNumber] = useState(1);
    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={cn(styles.listContainer, styles.listContainerCn)}>
            {leftPortionPageNumber > 1 &&
            <button onClick={() => setPortionNumber(1)}>begin</button>
            }
            {leftPortionPageNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>}
            {pages
                .filter((p) => p <= rightPortionPageNumber && p >= leftPortionPageNumber)
                .map(p => {
                    let selectedPage = currentPage === p;
                    return <span key={p}
                                 className={cn({[styles.selectedPage]: selectedPage},
                                     {[styles.unSelectedPage]: !selectedPage})} onClick={() => {
                        !selectedPage &&
                        onPageChanged(p)
                    }
                    }>{p}</span>
                })}
            <span>
            {rightPortionPageNumber < pagesCount &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>
            }
                {rightPortionPageNumber < pagesCount &&
                <button onClick={() => setPortionNumber(portionCount)}>end</button>
                }</span>
        </div>
    )
}
export default Paginator;