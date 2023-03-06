<template>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #7BB4E3;">
        <div class="navbar-nav mx-auto">
        <img class="mb-1" src="../assets/quiz.png" alt="Quiz Logo" width="50" height="50">
        </div>
        <div class="d-flex">
            <button class="btn btn-outline-danger" @click="logout">Logout</button>
        </div>
    </nav>
</template>

<script>

export default {
    methods: {
        logout() {
            localStorage.removeItem('access_token')
            this.$router.push('/')
        }
    }
}
</script>

<style>
</style>
