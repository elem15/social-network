import React from 'react';
import s from './Music.module.css'
import {ComposersType} from "../../Types/Types";
import {Divider, Typography} from 'antd';
import {RightOutlined, BorderOutlined} from '@ant-design/icons';
import {Anchor} from 'antd';

const {Link} = Anchor;

const {Title} = Typography;

type PropsType = {
    composers: Array<ComposersType>
    selectComposer: (id: number) => void
}

const Music: React.FC<PropsType> = ({composers, selectComposer}) => {
    return (<div className={s.main}>
        <Title level={3}> Choose your favorite composer</Title><br/>
        <div>
            {composers.map(composer => <Composer key={composer.id} id={composer.id} selectComposer={selectComposer}
                                                 name={composer.name} isLike={composer.isLike}
                                                 sample={composer.sample}/>
            )}
        </div>
    </div>)
}

type ComposerType = {
    name: string
    id: number
    isLike: boolean
    sample: string
    selectComposer: (id: number) => void
}
const Composer: React.FC<ComposerType> = ({name, id, isLike, sample, selectComposer}) => {
    const selectBestComposer = (id: number) => selectComposer(id)
    return <>
        {isLike ?
            <>
                <h2 className={s.composer + " " + s.active} onClick={() => selectBestComposer(id)}>{name}
                </h2><br/>
                <div className={s.direct}>
                    <BorderOutlined onClick={() => selectBestComposer(id)}/><span> </span>
                    <audio
                        className={s.audioControl}
                        controls
                        src={sample}
                    >
                        Your browser does not support` the
                        <code>audio</code> element.
                    </audio>
                </div>
            </>
            :
            <>
                <h2 className={s.composer} onClick={() => selectBestComposer(id)}>{name}
                </h2><br/>
                    <RightOutlined onClick={() => selectBestComposer(id)}/>
                </>

                }

                <Divider/>

            </>
        }
        export default Music;