<template>
  <div id="app">
    <div>
      <label>principal capital</label>
      <input v-model.number="principal"/>
    </div>
    <div>
      <label>Yearly interestRate</label>
      <input v-model.number="interestRate"/>
    </div>
    <div>
      <label>Investmetn length (timeYears)</label>
      <input v-model.number="timeYears"/>
    </div>
    <div>
      You will gain:
      <output>{{final}}</output>
    </div>
  </div>
</template>

<script>
  import compoundInterest from '@/compoundInterest'
export default {
    name: 'app',
    data () {
      return {
        principal: 0,
        interestRate: 0,
        timeYears: 0
      }
    },
    computed: {
      final () {
        return compoundInterest(this.principal, this.interestRate, this.timeYears)
      }
    }
}
</script>

<style>

</style>
