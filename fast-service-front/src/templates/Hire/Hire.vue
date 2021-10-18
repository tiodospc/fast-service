<template>
  <div>
    <navbar />
    <div class="cont">
      <img class='imagem-service' src="https://russelservicos.com.br/wp-content/uploads/2016/05/pedreiro-construcao-civl.jpg" />
      <el-card class="box-card">
        <div class="text item">
          <p>
            <b>DESCRIÇÃO DO SERVIÇO</b><br/>
            Executar trabalhos em alvenaria, concreto e outros materiais, guiando-se por desenhos, esquemas e especificações, utilizando processos e instrumentos pertinentes ao ofício para construir, reformar ou reparar prédios e obras similares.<br/>
            <br/>
            <i class="el-icon-user"></i> José Silva Lopes.<br/>
            <i class="el-icon-phone"></i> Telefone: (11)95824-1100.<br/>
            <i class="el-icon-message"></i> Email: jose@gmail.com.<br/>
            <i class="el-icon-location-outline"></i> Local Atuação: São Paulo - SP.<br/>
            <br/>
          </p>

          <el-rate
            v-model="value"
            disabled
            show-score
            class="avaliation"
            text-color="#ff9900"
            score-template="{value} points">
          </el-rate>
          <i class="el-icon-money button-contratar"></i>100,00R$
          <generic-button  type="primary" class="button-contratar" @click.native="order()">Contratar</generic-button>
        </div>
      </el-card>
    </div>
  </div>

</template>

<script>
import Navbar from '@/components/molecules/NavBar/Navbar.vue'
import GenericButton from '../../components/atoms/GenericButton/GenericButton.vue'


export default {
  name: 'hire',

  methods: {
    order() {
      let loginMessage = this.$message.loading({
        message: 'Carregando...',
        hasMask: true,
        duration: '2000',
        position: "center"
      });

      setTimeout(() => {
          loginMessage.close();
        this.$router.push("/order");  
      }, 2000)
    }
  },

  components: {
    "navbar": Navbar,
    "generic-button": GenericButton
  },

  data(){
    
    return {
      value: 4.3
    }
  }
}
</script>

<style>
  .cont{
    display: flex;
    flex-direction: column;
  }

  .imagem-service{
    width: 30rem;
    margin-left: 5rem;
    margin-top: 5rem;
    box-shadow: 12px 12px 2px 1px rgb(205, 203, 218);
  }

  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    position: absolute;
    left: 37rem;
    top: 5rem;
    width: 30rem;
  }

  p{
    font-size: 0.9rem;
    color: rgb(121, 110, 110);
    padding-bottom: 10px;
  }

  i{
    font-size: 2rem;
  }

  .avaliation{
    margin-left: 8rem;
  }

  .button-contratar{
    margin-left: 10rem;
    margin-top: 1rem;
  }

</style>