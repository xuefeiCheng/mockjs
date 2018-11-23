<template>

  <el-form
    class="login-container"
    ref="AccountForm"
    :model="account"
    :rules="loginRules"
    label-position="left">
    <h3>Login</h3>
    <el-form-item prop="username">
      <el-input
        v-model="account.username"
        type="text"
        placeholder="账号">
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="account.password" type="password" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked>记住密码</el-checkbox>
    <el-form-item>
      <el-button type="primary">login</el-button>
      <el-button type="primary">reset</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
// import {requseLogin} from "../axios/api"

export default {
  name: 'login',
  data () {
    return {
      account: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{required: true, message: '请输入账号', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      },
      checked: true,
      logining: false
    }
  },
  methods: {}
}
</script>

<style scoped>
body{
  background: #DFE9FB;
}
.login-container {
  width:350px;
  margin-left:35%;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  padding: 10px 30px;
  border-radius: 5px;
}
.el-button {
  width:100%;
  box-sizing: border-box;
  margin: 10px 0;
}
</style>
