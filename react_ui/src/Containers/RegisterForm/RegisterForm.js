import React, { Component } from 'react'
import Input from '../Input/Input';

class RegisterForm extends Component {
  state = {
    formData: {
      name: {
        value: "",
        validator: {
          minLength: 3,
          maxLength: 6,
          required: true
        },
        error: { status: true, message: "", isTouched: false }
      },
      phoneNumber: {
        value: "",
        validator: {
          minLength: 10,
          maxLength: 10
        },
        error: { status: true, message: "", isTouched: false }
      },
      email: {
        value:"",
        validator: {
          required: true
        },
        error: { status: true, message: "", isTouched: false }
      },
      password: {
        value:"",
        validator: {
          minLength: 6,
          maxLength: 24,
          required: true
        },
        error: { status: true, message: "", isTouched: false }
      },
    },
    isFormValid: false
  }

  checkValue = (value, rules) => {
    let isValid = true;
    let message = "";
    let trimmedValue = value.trim();

    if (rules.required && trimmedValue.length === 0) {
      isValid = false;
      message = "คุณควรกรอกช่องนี้";
    }

    if (rules.maxLength && trimmedValue.length > rules.maxLength) {
      isValid = false;
      message = `ช่องนี้ความยาวต้องไม่เกิน ${rules.maxLength} ตัวอักษร`;
    }

    if (rules.minLength && trimmedValue.length < rules.minLength) {
      isValid = false;
      message = `ช่องนี้ความยาวอย่างน้อย ${rules.minLength} ตัวอักษร`;
    }

    return { isValid, message };
  }


  onChangeInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const updatedForm = this.state.formData;
    updatedForm[fieldName].value = fieldValue;
    
    let { isValid , message } = this.checkValue(e.target.value, updatedForm[fieldName].validator);

    updatedForm[fieldName].error.status = !isValid;
    updatedForm[fieldName].error.message = message;
    updatedForm[fieldName].error.isTouched = true;

    // fieldName : Error
    // name      : false
    // email     : false
    // phoneNo   : true
    // password  : false

    let newIsFormValid = true;
    for(let fn in updatedForm) {
      if(updatedForm[fn].validator.required === true){
        newIsFormValid = !updatedForm[fn].error.status && newIsFormValid;
      }
    }

    this.setState({
      formData: updatedForm,
      isFormValid: newIsFormValid,
    })
  }

  onSubmitFrom = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    const { name, phoneNumber, email, password } = this.state.formData;
    const { isFormValid } = this.state;

    return (
      <div className='RegisterForm'>
        <form onSubmit={this.onSubmitFrom}>
          <Input 
            onChangeInput={this.onChangeInput} 
            value={name.value} 
            name="name" 
            placeholder="ชื่อ" 
            error={name.error} 
          />
          <Input 
            onChangeInput={this.onChangeInput} 
            value={phoneNumber.value} 
            name="phoneNumber" 
            placeholder="เบอร์โทรศัพท์" 
            error={phoneNumber.error} 
          />
          <Input 
            onChangeInput={this.onChangeInput} 
            value={email.value} 
            name="email" 
            placeholder="อีเมล์" 
            error={email.error} 
          />
          <Input 
            onChangeInput={this.onChangeInput} 
            value={password.value} 
            name="password" 
            placeholder="รหัสผ่าน" 
            error={password.error} 
            type="password" 
          />
          <button disabled={!isFormValid} htmlFor ="submit" className='Button'>Register</button>
        </form>
      </div>
    )
  }
}

export default RegisterForm