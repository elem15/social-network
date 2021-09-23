import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm, reset} from "redux-form";
import {renderField} from "../../Common/InputField/FormsControls";
import {maxLength33, required} from "../../../utils/validators";
import {PostsType} from "../../../Types/Types";
import {Divider, Form, Typography, Input, Button, Checkbox } from "antd";

const { Title, Text } = Typography

type PropsType = {
    handleSubmit: any
}
const PostForm: React.FC<PropsType> = ({ handleSubmit }) => {
    return (
        <form onSubmit={ handleSubmit }>
                <Field name="post"
                       component={renderField }
                       label='Enter you message'
                       validate={[required, maxLength33]}
                />
                <button>Add post</button>
        </form>
    )
}
type PostType = {
    addPost: any
}
const Demo: React.FC<PostType> = ({addPost}) => {

    const [form] = Form.useForm()

    const onFinish = (values: any) => {
        addPost(values.message)
        form.resetFields()
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <Form
            form={form}
            name="basic"
            layout="vertical"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            placeholder="message"
        >
            <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please input your message!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                <Button type="primary"  htmlType="submit">
                    Add post
                </Button>
            </Form.Item>
        </Form>
    );
};


const afterSubmit = (result: string, dispatch: any) =>
    dispatch(reset('post'));

const PostFormRedux  = reduxForm({form: 'post', onSubmitSuccess: afterSubmit})(PostForm)

type MyPostsType = {
    addPost: (text:string) => void
    posts: Array<PostsType>
    likeIncrement: (id: number) => void
    disLikeIncrement: (id: number) => void
}
const MyPosts: React.FC<MyPostsType> = props => {

    const addPost = (post:string) => {
        return props.addPost(post)
    }
    const submit = (values:any) => {
        addPost(values.post);
    }
             return (
                <>
                    <Title level={3}>My posts</Title>
                    <Demo addPost={addPost}/>

                    {[...props.posts].reverse().map(m => <Post likeIncrement={props.likeIncrement}
                                                               disLikeIncrement={props.disLikeIncrement}
                                                               message={m.message}
                                                               likeCount={m.likeCount}
                                                               disLikeCount={m.disLikeCount}
                                                               key={m.id}
                                                               id={m.id}/>)}
                </>
            )
    }

export default MyPosts;