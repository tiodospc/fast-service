<template>
  <div class="container">
    <div>
      <navbar/>
      <generic-input 
        class="filter" 
        placeholder="Procurar serviços"
      />
    </div>
    <div class="content">
        <h2 class="text-service">Serviços Disponíveis</h2>
        <card-items />
    </div>

  </div>
</template>

<script>
import GenericInput from '@/components/atoms/GenericInput'
import Navbar from '../../components/molecules/Navbar'
import CardItems from '@/components/molecules/CardItems'

export default {
    components: {
      "generic-input": GenericInput,
      "navbar": Navbar,
      "card-items": CardItems
    }

}
</script>

<style lang="css" scoped>

.container {
  display: flex;
  flex-direction: column;
  background-color: rgb(245, 241, 241);
  height: 100vh;
}


.content{
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-left: 1rem;
}

.filter{
  position: absolute;
  left: 25rem;
  top: 5rem;
  width: 30rem;
}

h2{
  padding-bottom: 30px;
  font-family: 'Montserrat', sans-serif;
}
</style>