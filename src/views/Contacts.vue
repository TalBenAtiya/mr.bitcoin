<script>
import { contactService } from '../services/contact.service'
import ContactPreview from '../components/ContactPreview.vue'

export default {
  data() {
    return {
      contacts: null
    }
  },
  async created() {
    this.contacts = await contactService.getContacts();
  },
  components: {
    ContactPreview
  }
}
</script>

<template>
  <section class="contacts main-layout">
    <h1>Contacts</h1>
    <div v-if="contacts" class="container">
      <ContactPreview :key="contact._id" v-for="contact in contacts" :contact="contact" />
    </div>
  </section>
</template>

<style lang="scss">
.contacts {
  
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
}
</style>
