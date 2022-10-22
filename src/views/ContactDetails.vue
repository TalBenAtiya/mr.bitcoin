<script>
import TransferFunds from '../components/TransferFunds.vue'
import TransactionList from '../components/TransactionList.vue';
export default {
  data() {
    return {
      transactions: null,
    };
  },
  created() {
    const id = this.$route.params.contactId;
    this.$store.dispatch({ type: "loadContact", id });

  },
  beforeUpdate() {
    this.transactions = this.$store.getters.user.transactions.filter(transaction => this.contact._id === transaction.toId)
  },
  computed: {
    contact() {
      return this.$store.getters.contact
    },
    user() {
      return this.$store.getters.user
    }
  },
  methods: {
    goBack() {
      this.$router.push("/contacts");
    },
  },
  unmounted() {
    this.$store.commit({ type: "setContact", contact: null });
  },
  components: { TransferFunds, TransactionList }
}
</script>

<template>
  <section v-if="contact" class="contact-details main-layout">
    <button @click="goBack" class="btn-back">Back</button>
    <div class="info">
      <img :src="`https://robohash.org/${contact._id}.png`" />
      <h2>{{contact.name}}</h2>
      <h3>{{contact.email}}</h3>
      <h4>{{contact.phone}}</h4>
    </div>
    <div class="transfer">
      <TransferFunds :contact="contact" />
    </div>
    <div v-if="transactions.length > 0" class="user-transactions">
      <h2 class="title">Last Transactions</h2>
      <div class="container">
        <TransactionList v-for="transaction in transactions.slice(0,3)" :transaction="transaction"
         :user="user" :key="transaction.at" />
      </div>
    </div>
  </section>
</template>



<style lang="scss">
.contact-details {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  h2 {
    font-size: 30px;
  }

  img {
    width: 200px;
    object-fit: cover;
  }
}

.btn-back {
  position: absolute;
  top: 0;
  left: 20px;
  background-color: orange;
  padding: 4px 10px;
  border-radius: 0.3em;

  .transfer {
    margin-block-start: 30px;
  }
}
</style>