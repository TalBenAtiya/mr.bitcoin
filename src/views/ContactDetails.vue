<template>
  <section v-if="contact" class="contact-details main-layout">
    <button class="btn-back">Back</button>
    <img :src="`src/assets/img/${contact.img}.png`" />
    <h3>{{contact.name}}</h3>

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
    left: 0;
    background-color: rgb(245, 60, 76);
    padding: 4px 10px;
    border-radius: 0.3em;
  }

  h3 {
    font-size: 25px;
  }

  img {
    width: 100px;
    object-fit: cover;
    margin-block-end: 10px;
  }
}
</style>