<script>
import { userService } from '../services/user.service'
export default {
    data() {
        return {
            username: ""
        }
    },
    methods: {
        onLogin() {
            this.$store.dispatch({type: 'loadUser', username: this.username})
            this.$router.push('/')
        }
    }
}
</script>

<template>
    <section class="login main-layout">
        <h2>Login</h2>
            <form @submit.prevent="onLogin" class="container">Username:
                <input type="text" v-model="username" />
                <button>Login</button>
            </form>
    </section>
</template>

<style lang="scss">
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    .container {
        padding: 25px;
        border: 1px solid rgb(234, 234, 234);
        border-radius: 0.4em;
        display: flex;
        gap: 10px;
        align-items: center;

        button {
            padding-inline: 8px;
            padding-block: 3px;
            border-radius: 0.3em;
            background-color: rgb(73, 23, 96);
        }
    }

}
</style>