import React, { useState, useEffect } from 'react'
import { List, Input, Button, Row, Col, Divider, Typography } from 'antd';
import _ from 'lodash';
import axios from '../../config/axios';
import Todo from './Todo';

const { Text, Link } = Typography;

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [inputField, setInputField] = useState("");

  const fetchTodoList = async () => {
    const httpResponse = await axios.get("/todo-list");
    setTodoList(httpResponse.data);
  };

  useEffect(() => {
    fetchTodoList();
  },[]);

  const addTodoItem = async () => {
    await axios.post("/todo-list", { task: inputField });
    fetchTodoList();
  };

  // const addTodoItem = () => {
  //   const newTodoList = [...todoList];
  //   newTodoList.push({
  //     id: _.uniqueId(),
  //     task: inputField,
  //   });
  //   setTodoList(newTodoList);
  //   setInputField("");
  // }

  const deleteTodoItem = async (id) => {
    await axios.delete(`/todo-list/${id}`);
    fetchTodoList();
  };
  

  // const deleteTodoItem = (id) => {
  //   // const newTodoList = todoList.filter(todo => todo.id !== id);
  //   // setTodoList(newTodoList);
  //   const newTodoList = [...todoList];
  //   const targetIndex = newTodoList.findIndex(todo => todo.id === id);
  //   newTodoList.splice(targetIndex, 1);
  //   setTodoList(newTodoList);
  // }

  return (
    // <div style={{display: 'flex', justifyContent: 'center'}}>
    <Row justify={'center'}>
      <Col>
      <Row justify={'center'}>
          <Text type="warning">กรุณาใส่ Todo ที่ต้องการเพิ่ม</Text>
        </Row>
        <Row>
          <Col span={20}>
          <Input value={inputField} onChange={(e)=>setInputField(e.target.value)}/>
          </Col>
          <Col span={4}>
            <Button style={{ width: '100%'}} onClick={addTodoItem}>add</Button>
          </Col>
        </Row>
        <Divider />
        <Row justify={'center'}>
          <List
            style={{ width: '450px' }}
            header={<div>Todo List Page</div>}
            bordered
            dataSource={todoList}
            renderItem={(todo) => (
            <List.Item>
              <Todo delete={deleteTodoItem} todo={todo} fetchData={fetchTodoList}/>
            </List.Item>
            )}
          />
        </Row>
      </Col>
    </Row>
    // </div>
  )
}
