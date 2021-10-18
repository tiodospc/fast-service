<template>
    <el-menu 
        :default-active="activeIndex" 
        class="navbar-menu" 
        mode="horizontal"
        text-color="gray"
        active-text-color="red">
            <el-menu-item index="1">{{navName}}</el-menu-item>
            <el-menu-item  index="2" class="loggout-menu">Olá, {{nameRegister}}<i class="el-icon-user-solid user-icon"></i></el-menu-item >
            <el-menu-item index="3" @click="cadastrar()">Cadastrar um serviço</el-menu-item>
            
    </el-menu>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Navbar',
    data() {
        return{
            navName: '',
            nameRegister: '',
            BASE_URL: 'http://localhost:3000',
            REGISTER: '/auth/register',
            AUTH: '/auth/authenticate'
        }
    },

    created() {
        this.nameFun()
        this.nameUser() 
    },

    methods: {
        nameFun(){
            this.navName = document.title
        },

        nameUser() {
            this.nameRegister = localStorage.getItem('nameUser')
        },

        cadastrar(){
            let loginMessage = this.$message.loading({
                message: 'Carregando...',
                hasMask: true,
                duration: '2000',
                position: "center"
            });
             setTimeout(() => {
                loginMessage.close();
                this.$router.push("/RegisterService");  
            }, 2000)
        }
    }

}
</script>

<style>
.navbar-menu{
    display: flex;
    flex-direction: row;
    width: 230vh;
    overflow: hidden;
    color: rgb(3, 0, 0);
}
.loggout-menu {
    position: absolute;
    left: 190vh;
}
</style>