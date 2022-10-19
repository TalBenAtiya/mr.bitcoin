<script>
import { RouterLink } from 'vue-router';

export default {
    props: {
        contact:
        {
            type: Object,
            require: true
        }
    },
    data() {
        return {

        }
    },
    methods: {
        onRemoveContact(contactId) {
            console.log(contactId);
            this.$emit('contact-removed', contactId)
        }
    }

}
</script>

<template>
    <RouterLink :to="`/contacts/${contact._id}`" class="contact-preview">
        <div class="info">
            <img :src="`https://robohash.org/${contact._id}.png`" />
            <h4>{{contact.name}}</h4>
        </div>
        <div class="options">
            <RouterLink :to="`/contacts/edit/${contact._id}`"> Edit </RouterLink>
            <button @click.prevent="onRemoveContact(contact._id)">Delete</button>
        </div>
    </RouterLink>
</template>


<style lang="scss">
.contact-preview {
    display: flex;
    justify-content: space-between;
    padding-inline: 10px;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.119);
    color: white;
    transition: 0.2s;

    &:hover {
        background-color: rgba(249, 249, 249, 0.044);
    }

    .info {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    img {
        aspect-ratio: 1/1;
        width: 100px;
    }

    h4 {
        font-weight: 600;
        color: orange;
    }

    button {
        background-color: transparent;
        padding: 10px;
        transition: 0.2s;

        &:hover {
            color: rgb(198, 34, 50);
        }
    }

    .options {
        a {
            font-size: 15px;
            transition: 0.2s;

            &:hover {
                color: greenyellow;
            }
        }
    }
}
</style>