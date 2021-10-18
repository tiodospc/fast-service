<template>
  <div>
      <navbar />
      <h1>FastServices - Cadastre seu serviço</h1>
      <div class="form-service">
        <generic-input 
          placeholder="Nome" 
          type="text" 
          class="input-form"
          v-model="formRegister.title"
        />
        
        <generic-input 
          placeholder="Valor" 
          type="number"  
          class="input-form"
          v-model="formRegister.price"
        />
        
        <generic-input 
          placeholder="Link da Imagem" 
          type="text"  
          class="input-form"
          v-model="formRegister.image"

        />
       
        <generic-input 
          placeholder="Cidade" 
          type="text"  
          class="input-form" 
          v-model="formRegister.city"
        />

        <generic-input 
          placeholder="Estado" 
          type="text"  
          class="input-form"
          v-model="formRegister.state" 
        />

        <generic-input 
          placeholder="Descrição" 
          type="textarea"  
          class="input-form" 
          v-model="formRegister.description"
        />
        
        <generic-button @click.native="doRegister()">Cadastrar Serviço</generic-button>
      </div>
  </div> 

</template>

<script>
import { headers } from '@/services/https.js'
import GenericButton from '../../components/atoms/GenericButton/GenericButton.vue'
import GenericInput from '../../components/atoms/GenericInput/GenericInput.vue'
import Navbar from '../../components/molecules/NavBar/Navbar.vue'
import axios from 'axios'

export default {
  components: { Navbar, GenericInput, GenericButton },
  data () {
    return{
      formRegister: {
        city: '',
        description: '',
        image: '',
        price: '',
        state: '', 
        title: ''
      },
      BASE_URL: 'http://localhost:3000',
      EVENT_URL: '/event',
      PARTICIPANT_URL: '/user/organizerPermission',
      auth: headers
    }
  },

  methods: {
    doRegister() {
      axios.post(`${this.BASE_URL}${this.PARTICIPANT_URL}/${localStorage.getItem('user')}`, {
        headers: this.auth
      }).then(res =>{
        console.log("user", res)
      }) .catch(err => {
            Promise.reject(err)
      })

      console.log(this.auth)
      axios.post(`${this.BASE_URL}${this.EVENT_URL}`, {headers: this.auth}, this.formEvent)
      .then(res => {  
            Promise.resolve(res)         
        })
        .catch(err => {
            Promise.reject(err)
        })
    }
  }
}
</script>

<style >
h1{
  color: rgb(121, 110, 110);
  padding-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  margin-left: 20rem;
  margin-top: 2rem;
}

.form-service{
  display: flex;
  flex-direction: column;
  width: 30rem;
  align-items: center;
  margin-left: 22rem;
}

.input-form{
  padding: 0.5rem;
}

</style>