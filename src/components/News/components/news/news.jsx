import React from 'react';
import PropTypes from 'prop-types';
import {Card, Col, Row} from 'antd';

import './news.css';

const NewsPost = ({author, created_at, num_comments, title, points, url}) => (


    <Card title={title} extra={<a href={url}>More</a>} style={{width: 270, height: 170}}>
        <div className={'description'}>
            <span className="text">{`${points} points`}</span>
            <span className="comments">{`${num_comments} comments`}</span>
            <span className="date">{new Date(created_at).toLocaleDateString()}</span>
        </div>
        <div className="description">{author}</div>
    </Card>

);

NewsPost.propTypes = {
    author: PropTypes.string,
    created_at: PropTypes.string.isRequired,
    num_comments: PropTypes.number,
    title: PropTypes.string,
    points: PropTypes.number,
    url: PropTypes.string,
}

NewsPost.defaultProps = {
    author: '',
    num_comments: 0,
    title: 'Here should be a title',
    points: 0,
    url: '#'
}

export default NewsPost;
