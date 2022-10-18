<template>
  <section v-if="contact" class="contact-details main-layout">
    <button @click="goBack" class="btn-back">Back</button>
    <img :src="`https://robohash.org/${contact.email}.png`" />
    <h2>{{contact.name}}</h2>
    <h3>{{contact.email}}</h3>
    <h4>{{contact.phone}}</h4>

  </section>
</template>

<script>
import { contactService } from '../services/contact.service';

export default {
  data() {
    return {
      contact: null,
    }
  },
  async created() {
    const id = this.$route.params.contactId
    this.contact = await contactService.getContactById(id)
  },
  methods: {
    goBack() {
      this.$router.push('/contacts')
    }
  }
}
</script>

<style lang="scss">
.contact-details {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .btn-back{
    position: absolute;
    top: 0;
    left: 20px;
    background-color: rgb(198, 34, 50);
    padding: 4px 10px;
    border-radius: 0.3em;
  }

  h2 {
    font-size: 30px;
  }

  img {
    width: 200px;
    object-fit: cover;
    // margin-block-end: 10px;
  }
}
</style>