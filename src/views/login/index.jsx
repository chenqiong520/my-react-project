import React from "react";
import {Form, Input, Button, Checkbox} from 'antd'
import {connect} from 'react-redux'
const  Login  = (props) => {
    console.log(props)
    const {name, token} = props
    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 },
      };
      const formTailLayout = {
        wrapperCol: { span: 8, offset: 4 },
      };
    return (
        <div>
            <div style={{margin:'20px 0', width:'50%', textAlign: 'center'}}>用户登录</div>
        <Form {...formItemLayout}>
            <Form.Item   label="用户名" name="username">
                <Input placeholder="unserName" />
            </Form.Item>
            <Form.Item  label="密码" name="password">
                    <Input placeholder="密码"  type="password" />
            </Form.Item>
            <Form.Item {...formTailLayout}>
                <Checkbox>已读</Checkbox>
            </Form.Item>
            <Form.Item  {...formTailLayout}>
                <Button>确认</Button>
            </Form.Item>
        </Form>
        </div>
        
    )
} 

export default connect((state) => state.user)(Login)
