<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <header>
        <div class="main-header main-layout">
            <div class="logo">
                <h1>Mr.BitCoin</h1>
            </div>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/contacts">Contacts</RouterLink>
                <RouterLink to="/statistics">Statistics</RouterLink>
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
header {
    background-color: darkcyan;
    margin-bottom: 50px;

    .main-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-block: 10px;
    }

    nav {
        display: flex;
        gap: 15px;

        a {
            &:hover {
                color: white;
            }

            &.router-link-active {
                color: white;
            }
        }
    }
}
</style>