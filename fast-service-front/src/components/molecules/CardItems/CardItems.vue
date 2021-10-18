<template>
<el-row class="card">
  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://revista.zapimoveis.com.br/wp-content/uploads/2015/06/servico-de-pedreiro.jpg" class="image">
      <div style="padding: 14px;">
        <span>Pedreiro</span>
        <div class="bottom clearfix">
          <p>Serviço de pedreiro 24h com seguro quebra</p>
          <el-button type="text" class="button" @click.native="contratar()">Contratar serviço</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>

export default {
  
  name: 'cardItems',
  
  data() {
    return {
      currentDate: new Date()
    };
  },

  methods: {
    contratar() {
      let loginMessage = this.$message.loading({
        message: 'Contratando Serviço...',
        hasMask: true,
        duration: '2000',
        position: "center"
      });
      setTimeout(() => {
        loginMessage.close();
        this.$router.push("/hire");  
      }, 2000)
    }
  }
}
</script>


<style scoped>
p{
    font-size: 0.8rem;
    color: rgb(189, 184, 184);
    padding-bottom: 10px;
}

.card{
    width: 60rem;
}
.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>

