import React from "react";
import styles from './Users.module.css';

let Users = (props) => {
if (props.users.length === 0) {
    props.setUsers([{
        id: 1,
        followed: false,
        photoURL: 'https://www.dvhab.ru/afisha/uploads/events/4b7/134319_big.jpeg?v=1605587833',
        fullName: 'Dmitry',
        status: 'I am a boss',
        location: {city: 'Minsk', country: 'Belarus'}
    },
        {
            id: 2,
            followed: true,
            photoURL: 'https://www.dvhab.ru/afisha/uploads/events/4b7/134319_big.jpeg?v=1605587833',
            fullName: 'Sasha',
            status: 'I am looking a job',
            location: {city: 'Moskow', country: 'Russia'}
        },
        {
            id: 3,
            followed: false,
            photoURL: 'https://www.dvhab.ru/afisha/uploads/events/4b7/134319_big.jpeg?v=1605587833',
            fullName: 'Andrey',
            status: 'I am a boss too',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ])
}
    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div><img height src={u.photoURL} className={styles.userPhoto}/></div>
                <div>
                    { u.followed
                    ? <button onClick={ () =>{props.unfollow(u.id) } }>Follow</button>
                    : <button onClick={ () =>{props.follow(u.id) } }>Unfollowed</button>
                    }
                     </div>
            </span>
            <span>
                <span><div>{u.location.city}</div><div>{u.location.country}</div></span>
                <span><div>{u.fullName}</div><div>{u.status}</div></span>
            </span>
        </div>)
        }
    </div>
}

export default Users;