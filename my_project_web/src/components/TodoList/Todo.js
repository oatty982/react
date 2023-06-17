import React, { useState, useEffect } from 'react'
import { List, Input, Button, Row, Col, Divider, Typography } from 'antd';
import axios from 'axios';
// import axios from '../../config/axios';

export default function Todo(props) {
    const [changeInput, setChangeInput] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    const updateTodoItem = async (id) => {
        // await axios.put(`http://localhost:8000/todo-list/${id}`, { task: changeInput });
        await axios.put(`/todo-list/${id}`, { task: changeInput });
        props.fetchData();
        setIsEdit(false);
    };

    const toggleEdit = () => {
        setChangeInput(props.todo.task);
        setIsEdit(true);
    }

    let contents = (
        <Row style={{ width: '100%' }}>
            <Col span={18}>
                <Input value={changeInput} onChange={(e) => setChangeInput(e.target.value)}/>
            </Col>
            <Col span={2}>
            </Col>
            <Col span={4}>
                <Button type="primary" onClick={() => updateTodoItem(props.todo.id)}>Done</Button>
            </Col>
        </Row>
    );

    if(!isEdit) {
        contents = (
            <Row style={{ width:'100%'}}>
                <Col span={16}>
                    <Row justify={'start'}>
                        {props.todo.task}
                    </Row>
                </Col>
                <Col span={4}>
                    <Button style={{ backgroundColor: 'orange' }} onClick={() => toggleEdit()}>Edit</Button>
                </Col>
                <Col span={4}>
                    <Button type="primary" danger onClick={() => props.delete(props.todo.id)}>Delete</Button>
                </Col>
            </Row>
        );
    }

    return (
        <div style={{ width: '100%' }}>
            {contents}
        </div>
    )
}
