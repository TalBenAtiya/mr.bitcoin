<script>
import { userService } from '../services/user.service';

export default {
  data() {
    return {
      user: null,
    }
  },
  created() {
    this.user = userService.getUser()
  }
}
</script>

<template>
  <section class="home main-layout">
    <h2>Welcome {{user.name}},</h2>
    <h4>Your balance is: {{user.balance}}</h4>
  </section>
</template>
