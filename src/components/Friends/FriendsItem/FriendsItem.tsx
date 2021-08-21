import React, {useState} from 'react';
import s from '../Friends.module.css';

type PropsType = {
    name: string,
    src: string | undefined
}
const FriendsItem: React.FC<PropsType> = (props) => {
    const [isSubscribed, setSubscribed] = useState(false)
    const getSubscribe = (bool: boolean) => bool ? 'a': undefined
    return <div className={s.item}>
        <div><img src={props.src} /></div>
        {props.name} <br/>
        <button onClick={() => setSubscribed(!isSubscribed)} className={getSubscribe(!isSubscribed) && s.button}   >
            {isSubscribed ? 'subscribed' : 'subscribe!'}
        </button>


    </div>;
}

export default FriendsItem;