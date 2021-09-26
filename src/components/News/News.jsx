import React, {Component} from "react";
import {Button, Col, Form, Input, Layout, Row, Typography} from 'antd';

import NewsPost from './components/news/news'


const {Title} = Typography;
const BASE_PATH = 'https://hn.algolia.com/api/v1'
const SEARCH_PATH = '/search'
const SEARCH_PARAM = 'query='


const Messages = ({getSearch, searchQuery}) => {

    const [form] = Form.useForm()

    const onFinish = (values) => {
        getSearch(values.message)
        // form.resetFields()
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            form={form}
            name="basic"
            layout="vertical"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            placeholder={searchQuery}
        >
            <Form.Item
                label=''
                name="message"
                rules={[{required: true, message: 'Please input your message!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 0, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Search
                </Button>
            </Form.Item>
        </Form>
    );
};

class News extends Component {
    state = {
        searchQuery: '',
        result: {}
    }

    componentDidMount() {
        const {searchQuery} = this.state
        this.fetchData(searchQuery)
    }

    fetchData = (searchQuery) => {
        fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}`)
            .then(res => res.json())
            .then(result => this.setState({result}))
            .catch(error => error)
    }

    getSearch = (value) => {
        // if(key === 'Enter') {
        this.setState({
            searchQuery: value
        })
        const {searchQuery} = this.state
        this.fetchData(searchQuery)
        // }
    }

    render() {
        const {searchQuery, result} = this.state
        const {hits = []} = result
        return (
            <Layout>
                <Title level={3}>Hacker News</Title>
                <Messages getSearch={this.getSearch} searchQuery={searchQuery}/>
                <Row>
                    {
                        hits.map(({author, created_at, num_comments, objectID, title, points, url}) =>
                            <Col style={{margin: '10px 30px 10px 0'}} xs={{span: 24, offset: 0}} sm={{span: 14, offset: 2}}
                                 md={{span: 10, offset: 2}}
                                 lg={{span: 8, offset: 3}}
                                 xl={{span: 6, offset: 1}}
                                 xxl={{span: 5, offset: 1}}
                                 key={objectID}
                            >
                                <NewsPost
                                    author={author}
                                    created_at={created_at}
                                    num_comments={num_comments}
                                    title={title}
                                    points={points}
                                    url={url}
                                />
                            </Col>
                        )}
                </Row>

            </Layout>
        )
    }
}

export default News