<script>
export default {
    props: {
        transaction:
        {
            type: Object,
            require: true
        }
    },
    data() {
        return {

        }
    },
}
</script>


<template>
    <section class="transaction-list">
        <h2>{{transaction.to}}</h2>
        <h3>- {{transaction.amount}}₿</h3>
        <h4>{{new Intl.DateTimeFormat(['ban', 'id']).format((transaction.at))}}</h4>
    </section>
</template>


<style lang="scss">
.transaction-list {
    display: flex;
    flex-direction: column;

    h2 {
        color: orange;
    }

    h3 {
        color: crimson;
    }
}
</style>