<script>
export default {
    props: {
        transaction:
        {
            type: Object,
            require: true
        }
    },
    data() {
        return {

        }
    },
}
</script>


<template>
    <section class="transaction-list">
        <h2>{{transaction.to}}</h2>
        <h3>- {{transaction.amount}}₿</h3>
        <h4>{{new Intl.DateTimeFormat(['ban', 'id']).format((transaction.at))}}</h4>
    </section>
</template>


<style lang="scss">
.transaction-list {
    display: flex;
    flex-direction: column;

    h2 {
        color: orange;
    }

    h3 {
        color: crimson;
    }
    
}

.user-transactions {
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: 1px solid rgba(255, 255, 255, 0.174);
    padding: 20px;
    border-radius: 1em;
    margin-block-start: 50px;
    width: 100%;
    


    .container {
      display: flex;
      justify-content: space-around;
      text-align: center;
      justify-content: space-around;
    }

    .title {
      color: greenyellow;
      align-self: center;
      margin-block-end: 20px;
    }
  }
</style>