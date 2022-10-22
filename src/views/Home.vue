<script>
import { bitcoinService } from '../services/bitcoin.service'
import Login from './Login.vue'
import TransactionList from '../components/TransactionList.vue'

export default {
  data() {
    return {
      rate: null,
    };
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  async created() {
    this.rate = await bitcoinService.getRate()
  },
  components: { Login, TransactionList }
}
</script>

<template>
  <section v-if="user" class="home main-layout">
    <div class="user-info">
      <h2>Welcome <span>{{user.name}}</span>,</h2>
      <h4>Your balance is: <span class="balance">{{user.balance}}</span></h4>
    </div>
    <div class="rate-info">
      <h1>Bitcoin/USD Rate:</h1>
      <h2>{{rate}}</h2>
    </div>
    <div class="user-transactions">
      <h2 class="title">Last Transactions</h2>
      <div class="container">
        <TransactionList v-for="transaction in user.transactions.slice(0,3)" :transaction="transaction"
          :key="transaction.at" />
      </div>
    </div>
  </section>

  <section v-else>
    <Login />
  </section>
</template>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  position: relative;

  .balance {
    color: greenyellow;
  }

  .user-info {
    margin-block-end: 20px;

    h2 {
      span {
        color: orange;
        text-transform: capitalize;

      }
    }

    h4 {
      span {
        font-size: 20px;

        &::after {
          content: '₿';
        }
      }

    }

  }

  .rate-info {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
    justify-content: center;
    border: 1px solid orange;
    padding: 20px;
    border-radius: 0.8em;

    h2 {
      color: greenyellow;
    }
  }

  .user-transactions {
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: 1px solid rgba(255, 255, 255, 0.174);
    padding: 20px;
    border-radius: 1em;


    .container {
      display: flex;
      justify-content: space-around;
      text-align: center;

    }

    .title {
      color: greenyellow;
      align-self: center;
      margin-block-end: 20px;
    }
  }

}
</style>