<script>
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
            <img :src="`https://robohash.org/${contact.email}.png`" />
            <h4>{{contact.name}}</h4>
        </div>
            <button @click.prevent="onRemoveContact(contact._id)">Delete</button>
    </RouterLink>
</template>


<style lang="scss">
.contact-preview {
    display: flex;
    justify-content: space-between;
    padding-inline: 10px;
    align-items: center;
    border-bottom: 1px solid rgb(232, 232, 232);
    color: white;
    transition: 0.2s;

    &:hover {
        background-color:  rgba(249, 249, 249, 0.044);
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
    }

    button {
        background-color: transparent;
        padding: 10px;
        transition: 0.2s;
        
        &:hover {
            color: rgb(198, 34, 50);
        }
    }
}
</style>