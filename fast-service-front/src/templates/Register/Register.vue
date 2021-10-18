<template>
  <div class="container-cadastro">
      <el-card class="card-cadastro">
            <h1 class="text-fast">Cadastro</h1>
            <generic-input 
                class="input-register" 
                placeholder="Nome" 
                type="text"
                v-model="formCadastro.name"
            />

            <generic-input 
                class="input-register" 
                placeholder="Email" 
                type="email"
                v-model="formCadastro.email"

            />
            
            <generic-input 
                class="input-register" 
                placeholder="Telefone" 
                type="number"
                v-model="formCadastro.tel"

            />
            
            <generic-input 
                class="input-register" 
                placeholder="CPF" 
                type="number"
                v-model="formCadastro.cpf" 
            />
            
            <generic-input 
                class="input-register" 
                placeholder="Senha" 
                type="password"
                v-model="formCadastro.password"
            />

            
            <el-select class="select-register" v-model="formCadastro.typeUser" placeholder="Tipo do Usuário">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>

            <generic-button 
                class="button-register"
                @click.native="cadastrar()">
                Cadastrar
            </generic-button>
      </el-card>
  </div>
</template>

<script>
import GenericButton from '@/components/atoms/GenericButton/GenericButton.vue'
import GenericInput from '@/components/atoms/GenericInput/GenericInput.vue'
import axios from 'axios'

export default {
    components: {
        "generic-input": GenericInput,
        "generic-button": GenericButton
    },

    data() {
        return {
            formCadastro: {
                name: '',
                email: '',
                tel: '',
                cpf: '',
                password: '',
                typeUser: ''
            },

            options: [{
            value: 1,
            label: 'Cliente'
            }, {
            value: 2,
            label: 'Prestador Serviço'
            }],

            BASE_URL: 'http://localhost:3000',
            REGISTER: '/auth/register',
            AUTH: '/auth/authenticate'
        }   
    },

    methods: {
        cadastrar() {
            console.log(this.formCadastro)
            let loginMessage = this.$message.loading({
                message: 'Cadastrando...',
                hasMask: true,
                duration: '2000',
                position: "center"
            });     
            axios.post(`${this.BASE_URL}${this.REGISTER}`, this.formCadastro)  
            .then(() => {
                setTimeout(() => {
                    loginMessage.close();
                    this.$router.push("/");  
                }, 1000)
            })
            .catch(err => {
                Promise.reject(err)
                alert('Não foi possivel realizar o cadastro')
            })
        }
    }
}
</script>

<style scoped>

.container-cadastro{
    display: flex;
    flex-direction: column;
    align-items: center;
}


.card-cadastro{
    display: flex;
    flex-direction: column;
    width: 25rem;
    margin-top: 5rem;
}

.input-register{
    padding-bottom: 0.8rem;
}  

.select-register{
    padding-bottom: 0.5rem;
    width: 22.5rem;
}

.button-register{
    margin-left: 8rem;
}

.text-fast{
    color: rgb(121, 110, 110);
    padding-bottom: 10px;
    font-family: 'Montserrat', sans-serif;
    margin-left: 6rem;
}

</style>
