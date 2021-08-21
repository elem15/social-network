import React from 'react';
import s from './Music.module.css'
import {ComposersType} from "../../Types/Types";

type PropsType = {
    composers: Array<ComposersType>
    selectComposer:  (id: number) => void
}

const Music: React.FC<PropsType> = ({composers, selectComposer}) => {
    return (<div className={s.main}>
        <div>
            <h2> Choose your favorite composer</h2>
            <div>
                {composers.map(composer => <Composer key={composer.id} id={composer.id} selectComposer={selectComposer}
                                                     name={composer.name} isLike={composer.isLike}/>
                )}
            </div>
        </div>
    </div>)
}

type ComposerType = {
    name: string
    id: number
    isLike: boolean
    selectComposer:  (id: number) => void
}
const Composer: React.FC<ComposerType> = ({name, id, isLike, selectComposer}) => {
    const selectBestComposer = (id: number) => selectComposer(id)
    return <div><div><strong>{name}</strong></div>
        <div><button onClick={()=>selectBestComposer(id)}>
            {isLike? 'favorite' : 'not so favorite'}</button></div>
        <br/>
    </div>
}

export default Music;