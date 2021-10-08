import React, {useState} from "react";
import styles from "./Paginator.module.css";
import cn from 'classnames';
import { LeftOutlined, VerticalRightOutlined, RightOutlined, VerticalLeftOutlined} from '@ant-design/icons';

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
                                            onPageChanged, portionSize = 5,
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

            <VerticalRightOutlined style={{color: 'green'}} onClick={() => setPortionNumber(1)}/>
            }
            {leftPortionPageNumber > 1 &&
            <LeftOutlined style={{color: 'cornflowerblue'}} onClick={() => setPortionNumber(portionNumber - 1)} />}
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
            <RightOutlined style={{color: 'cornflowerblue'}} onClick={() => setPortionNumber(portionNumber + 1)}/>
            }
                {rightPortionPageNumber < pagesCount &&
                <VerticalLeftOutlined style={{color: 'green'}} onClick={() => setPortionNumber(portionCount)}/>
                }</span>
        </div>
    )
}
export default Paginator;