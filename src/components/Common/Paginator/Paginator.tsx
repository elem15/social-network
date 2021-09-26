import React, {useState} from "react";
import styles from "./Paginator.module.css";
import cn from 'classnames';

type PropsType = {
    totalItemCount: number
    pageSize: number
    currentPage: number
    onPageChanged: ((p: number) => void)
    portionSize?: number
    portionNumber: number
    setPortionNumber: (portionNumber: number) => void
}

const Paginator: React.FC<PropsType> = ({totalItemCount, pageSize, currentPage,
                                            onPageChanged, portionSize = 10,
                                            portionNumber, setPortionNumber}) => {

    const pagesCount = Math.ceil(totalItemCount / pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    if(portionNumber === null) {portionNumber=1}
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
                .filter((p: number) => p <= rightPortionPageNumber && p >= leftPortionPageNumber)
                .map(p => {
                    const selectedPage = currentPage === p;
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