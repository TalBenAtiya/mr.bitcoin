<script>
import { bitcoinService } from '../services/bitcoin.service'
import { userService } from '../services/user.service'
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
      <h4>Your balance is: <span>{{user.balance}}</span></h4>
    </div>
    <div class="rate-info">
      <h1>Bitcoin/USD Rate:</h1>
      <h2>{{rate}}</h2>
    </div>
    <div class="user-transactions">
      <TransactionList v-for="transaction in user.transactions" :transaction="transaction" :key="transaction.at"/>
    </div>
  </section>

  <section v-else>
    <Login />
  </section>
</template>

<style lang="scss">
.home {
  .user-info {
    margin-block-end: 20px;

    h2{
      span{
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
  }
}
</style>