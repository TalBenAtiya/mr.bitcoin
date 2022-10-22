<script>
import TransferFunds from '../components/TransferFunds.vue'
export default {
  data() {
    return {};
  },
  created() {
    const id = this.$route.params.contactId;
    this.$store.dispatch({ type: "loadContact", id });
  },
  methods: {
    goBack() {
      this.$router.push("/contacts");
    }
  },
  computed: {
    contact() {
      return this.$store.getters.contact;
    }
  },
  unmounted() {
    this.$store.commit({ type: "setContact", contact: null });
  },
  components: { TransferFunds }
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
    <div class="transfers">
      <TransferFunds :contact="contact" />
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

  .transfers {
    margin-block-start: 30px;
  }
}
</style>