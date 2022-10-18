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
    }

}
</script>

<template>
    <section class="contact-preview">
        <div class="info">    
            <img :src="`src/assets/img/${contact.img}.png`" />
            <h4>{{contact.name}}</h4>
        </div>
            <button>
            <RouterLink :to="`/contacts/${contact._id}`">Details</RouterLink>
        </button>
    </section>

</template>


<style lang="scss">
.contact-preview {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    border-bottom: 1px solid rgb(232, 232, 232);

    .info {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    img {
        aspect-ratio: 1/1;
        height: 50px;
    }

    h4 {
        font-weight: 500;
    }

    button {
        background-color: transparent;

        & a:hover {
            color: orangered;
        }
    }
}
</style>