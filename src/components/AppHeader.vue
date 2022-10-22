<script>
import { userService } from '../services/user.service'
export default {
    data() {
        return {

        }
    },
    unmounted() {
        this.$store.commit({type: 'setContact', contact: null})
    },
    computed: {
        user() {return this.$store.getters.user}
    }
}
</script>

<template>
    <header>
        <div class="main-header main-layout">
            <div class="logo">
                <h1 @click="this.$router.push('/')">Mr.BitCoin</h1>
            </div>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/contacts">Contacts</RouterLink>
                <RouterLink to="/statistics">Statistics</RouterLink>
                <RouterLink to="/login">Login</RouterLink>
                <img v-if="user" :src="`https://robohash.org/${user.name}.png?set=set4`" />
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
header {
    background-color: rgb(73, 23, 96);
    margin-bottom: 50px;

    .main-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-block: 10px;
    }

    .logo {
        cursor: pointer;
    }

    nav {
        display: flex;
        gap: 15px;
        align-items: center;

        a {
            padding: 5px;
            border-radius: 0.3em;
            transition: 0.2s;

            &:hover {
                background-color: rgba(22, 22, 22, 0.48);
            }

            &.router-link-active {
                background-color: rgba(22, 22, 22, 0.48);
            }
        }

        img {
            width: 50px;
        }
    }
}
</style>