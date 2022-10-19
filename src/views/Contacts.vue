<script>
import ContactPreview from '../components/ContactPreview.vue'

export default {
  data() {
    return {

    }
  },
  created() {
    this.$store.dispatch({ type: 'loadContacts' })
  },
  methods: {
    removeContact(contactId) {
      this.$store.dispatch({ type: 'removeContact', contactId })
    }
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts
    }
  },
  components: {
    ContactPreview
  },
}
</script>

<template>
  <section v-if="contacts" class="contacts main-layout">
    <h1>Contacts</h1>
    <div v-if="contacts" class="container">
      <ContactPreview @contact-removed="removeContact" :key="contact._id" v-for="contact in contacts"
        :contact="contact" />
    </div>
  </section>
</template>

<style lang="scss">
.contacts {
  h1 {
    color: white;
    text-align: center;
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
}
</style>
