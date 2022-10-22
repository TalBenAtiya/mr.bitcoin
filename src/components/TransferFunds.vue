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
            transaction: {
                toId: this.contact._id,
                to: this.contact.name,
                amount: null,
            },
            errMsg: false,
            sucssMsg: false
        }
    },
    methods: {
        onTransferFund() {
            if (this.transaction.amount < 0 || this.transaction.amount > this.user.balance) {
                this.errMsg = true
                setTimeout(() => {
                    this.errMsg = false
                }, 8000)
                return
            }
            this.$store.dispatch({ type: 'setTransaction', transaction: this.transaction })
            this.sucssMsg = true
            setTimeout(() => {
                    this.sucssMsg = false
                }, 8000)
        }
    },
    computed: {
        user() { return this.$store.getters.user }
    }
}
</script>


<template>
    <section v-if="user" class="transfer-funds">
        <h3>Transfer Funds</h3>
        <label>Amount:
            <input type="number" v-model="transaction.amount" />
        </label>
        <button @click="onTransferFund">Send</button>
        <h5 class="err" v-if="errMsg">Unable to transfer: Amount is higher than balance or lower than 0</h5>
        <h5 class="success" v-if="sucssMsg">Amount Transferd Successfully</h5>
    </section>
</template>

<style lang="scss">
.transfer-funds {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .success {
        color: greenyellow;
    }

    .err {
        color: crimson;
    }

    h3 {
        color: orange;
    }
}
</style>