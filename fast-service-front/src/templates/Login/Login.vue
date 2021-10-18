<template>
  <div class="container">
      <div class="div-text">
        <h1 class="text-fast">FastServices</h1>
        <h5 class="text-contrat">Contrate serviços gerais de forma rapida e facil diretamente da sua casa!</h5>
      </div>
    <div class="form">      
        <el-card class="card-login">
            <generic-input 
                type:='text'
                placeholder="Digite seu Nome" 
                v-model="formLogin.name" 
                class="input-form"
            />
            <generic-input 
                type:='email'
                placeholder="Digite seu Email" 
                v-model="formLogin.email" 
                class="input-form"
            />

            <generic-input 
                type='password'
                placeholder="Digite sua Senha" 
                v-model="formLogin.password" 
                class="input-form"
            />

            <el-button
                type="secundary" 
                class="button-create"
                size="medium"
                @click.native="logar()">
                Logar
            </el-button>

            <el-button 
                type="primary"
                class="button-create"
                size="medium"
                @click.native="registrar()">
                Criar conta
            </el-button>
        
        </el-card>
    </div>
  </div>
</template>

<script>
import GenericButton from '@/components/atoms/GenericButton/GenericButton.vue'
import GenericInput from '@/components/atoms/GenericInput/GenericInput.vue'
import axios from 'axios'

export default {
    components: {
        'generic-button': GenericButton,
        'generic-input': GenericInput

    },

    data(){

        return{
            formLogin: {
                name: '',
                email: '',
                password: ''
            },
            
            formAuth: {
                email: '',
                password: ''
            },

            BASE_URL: 'http://localhost:3000',
            REGISTER: '/auth/register',
            AUTH: '/auth/authenticate'
        }

    },

    methods: {
        logar(){
            let loginMessage = this.$message.loading({
                message: 'Carregando',
                hasMask: true,
                duration: '2000',
                position: "center"
            });
            axios.post(`${this.BASE_URL}${this.AUTH}`, this.formLogin)
            .then(res => {
                Promise.resolve(res)

                if(res.data) {
                    console.log(res.data)
                    localStorage.setItem('nameUser', this.formLogin.name)
                    localStorage.setItem('user', res.data.user._id)
                    localStorage.setItem('token', res.data.token)
                }
                
                setTimeout(() => {
                    loginMessage.close();
                    this.$router.push("/dashboard");  
                }, 2000)
            })
            .catch(err => {
                Promise.reject(err)
            })
        },

        registrar() {
            let loginMessage = this.$message.loading({
                message: 'Carregando',
                hasMask: true,
                duration: '2000',
                position: "center"
            });
             setTimeout(() => {
                loginMessage.close();
                this.$router.push("/registerUser");  
            }, 2000)
        }
    }
}
</script>

<style lang="css" scoped>

.container{
    background-image: url("../../assets/images/back.png");
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100v;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: 45%;
    margin-left: 10rem;
    margin-top: 8rem;
    
}

.card-login{
    width: 20rem;
    margin-right: 8rem;
    margin-top: 2rem;
}

.text-fast{
    color: rgb(121, 110, 110);
    padding-bottom: 10px;
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    left: 10rem;
    top: 2rem;

}

.text-contrat{
    color: rgb(121, 110, 110);
    padding-bottom: 10px;
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    left: 10rem;
    top: 5rem;
    font-size: 1rem;
}

.input-form{
    padding-bottom: 2rem;
}

.button-create{
    margin-left: 2rem;
}

</style>