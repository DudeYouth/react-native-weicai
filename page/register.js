import React,{Component} from "react";
import {} from "react-native";

import {GiftedForm, GiftedFormManager} from 'react-native-gifted-form';
import moment from 'moment';
import {
  Actions
} from 'react-native-router-flux';
export default class Register extends Component{
  render() {
    return (
      <GiftedForm
        formName='signupForm' // GiftedForm instances that use the same name will also share the same states

        openModal={(route) => {
          navigator.push(route); // The ModalWidget will be opened using this method. Tested with ExNavigator
        }}

        clearOnClose={false} // delete the values of the form when unmounted

        defaults={{
          username: '',
          password: '',
        }}

        validators={{
          username: {
            title: '用户名',
            validate: [{
              validator: 'isLength',
              arguments: [3, 16],
              message: '{TITLE} 必须在 {ARGS[0]} 与 {ARGS[1]} 字符之间'
            },{
              validator: 'matches',
              arguments: /^[a-zA-Z0-9]*$/,
              message: '{TITLE} 只支持中文与字母（a-z）'
            }]
          },
          password: {
            title: 'Password',
            validate: [{
              validator: 'isLength',
              arguments: [6, 16],
              message: '{TITLE} 必须在 {ARGS[0]} 与 {ARGS[1]} 字符之间'
            }]
          },
        }}
      >

        <GiftedForm.SeparatorWidget />

        <GiftedForm.TextInputWidget
          name='username'
          title='用户名'
          image={require('../images/user.png')}

          placeholder='手机号\用户昵称'
          clearButtonMode='while-editing'

          onTextInputFocus={(currentText = '') => {
            if (!currentText) {
              let fullName = GiftedFormManager.getValue('signupForm', 'fullName');
              if (fullName) {
                return fullName.replace(/[^a-zA-Z0-9-_]/g, '');
              }
            }
            return currentText;
          }}
        />

        <GiftedForm.TextInputWidget
          name='password' // mandatory
          title='密码'

          placeholder='密码'


          clearButtonMode='while-editing'
          secureTextEntry={true}
          image={require('../images/lock.png')}
        />


        <GiftedForm.SubmitWidget
          title='登录'
          widgetStyles={{
            submitButton: {
              backgroundColor: "#FF6633",
            }
          }}
          onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
            if (isValid === true) {
              console.log(values);
              Actions.index();
              // prepare object
              // values.gender = values.gender[0];
              // values.birthday = moment(values.birthday).format('YYYY-MM-DD');

              /* Implement the request to your server using values variable
              ** then you can do:
              ** postSubmit(); // disable the loader
              ** postSubmit(['An error occurred, please try again']); // disable the loader and display an error message
              ** postSubmit(['Username already taken', 'Email already taken']); // disable the loader and display an error message
              ** GiftedFormManager.reset('signupForm'); // clear the states of the form manually. 'signupForm' is the formName used
              */
            }
          }}

        />

        <GiftedForm.NoticeWidget
          title='By signing up, you agree to the Terms of Service and Privacy Policity.'
        />

        <GiftedForm.HiddenWidget name='tos' value={true} />

      </GiftedForm>
    );
  }
};