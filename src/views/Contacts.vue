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
  },
  methods: {
    removeContact(contactId) {

      contactService.deleteContact(contactId)
      
      console.log('contactId:', contactId)
      const idx = this.contacts.findIndex(contact => contact._id === contactId)
      this.contacts.splice(idx, 1)
    }
  }
}
</script>

<template>
  <section class="contacts main-layout">
    <h1>Contacts</h1>
    <div v-if="contacts" class="container">
      <ContactPreview @contact-removed="removeContact" :key="contact._id" v-for="contact in contacts"
        :contact="contact" />
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
