<script>
import { contactService } from '../services/contact.service'
export default {
    data() {
        return {
            contact: null
        }
    },
    async created() {
        const id = this.$route.params.contactId
        this.contact = await contactService.getContactById(id)
    },
    methods: {
        async onSaveContact() {
            await this.$store.dispatch({ type: 'saveContact', contact: this.contact })
            this.$router.back()
        },
        goBack() {
            this.$router.push('/contacts')
        },
    },
}

</script>

<template>
    <section v-if="contact" class="contact-edit main-layout">
        <button @click="goBack" class="btn-back">Back</button>
        <img :src="`https://robohash.org/${contact._id}.png?set=set4`" />
        <h1>Edit contact</h1>
        <form>
            <label>Name:
                <input type="text" v-model="contact.name">
            </label>
            <label>Email:
                <input type="text" v-model="contact.email">
            </label>
            <label>Phone:
                <input type="text" v-model="contact.phone">
            </label>
            <button class="btn-save" @click.prevent="onSaveContact">Save Changes</button>
        </form>
    </section>
</template>


<style lang="scss">
.contact-edit {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    img {
        width: 200px;
        object-fit: cover;
    }

    h1 {
        margin-bottom: 30px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        justify-content: center;
        align-items: center;
    }

    .btn-save {
        width: fit-content;
        color: rgb(21, 21, 21);
        padding: 6px;
        border-radius: 0.3em;

        &:hover {
            background-color: greenyellow;
        }
    }
}
</style>