<template>
	<div class="login">
		<div class="user"><label htmlFor="user">用户名：</label><input type="text" id="user" ref="user" /></div>
		<div class="pass"><label htmlFor="pass">密码：</label><input type="password" id="pass" ref="pass"/></div>
		<div class="code"><input type="text"/><span>{{code}}</span></div>
		<div class="btn"><button @click = "login">登陆</button></div>
		<div class="register"><p>注册</p></div>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				code: '获取验证码'
			}
		},
		methods: {
			login() {
				let user = this.$refs.user.value,
					pass = this.$refs.pass.value;
				if(user === 'xuejie' && pass === 'xj123456') {
					window.sessionStorage.setItem('login', true),
					window.localStorage.setItem('login',true)
					this.$router.push('/index')
				}else{
					console.log(new Error('用户或验证码错误'))
				}
			}
		}
	}
</script>

<style scoped>
	input,button{
		border-width:0;
		outline:none;
		background:none;
	}
	.login{
		font-size:.24rem;
		padding: 0 .2rem;
		box-sizing:border-box;
	}
	.login>div{
		width:100%;
		height:.8rem;
		margin-top:.2rem;
		line-height: .8rem;
		display:flex;
	}
	.login div input {
		flex:1;
		border-bottom:1px solid #ccc;
	}
	.btn>button{
		width:100%;
		text-align:center;
		background:skyblue;
		color:#fff;
	}
	.register {
		justify-content:center;
		color:blue;
	}
	.code input {
		margin-left: .4rem;
	}
</style>