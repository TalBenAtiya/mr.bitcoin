<script>
import { bitcoinService } from '../services/bitcoin.service';
import { userService } from '../services/user.service';

export default {
  data() {
    return {
      user: null,
      rate: null,
    }
  },
  async created() {
    this.user = userService.getUser()
    this.rate = await bitcoinService.getRate()
  }
}
</script>

<template>
  <section class="home main-layout">
    <div class="user-info">
      <h2>Welcome {{user.name}},</h2>
      <h4>Your balance is: <span>{{user.balance}}</span></h4>
    </div>
    <div class="rate-info">
      <h1>USD Rate:</h1>
      <h2>${{rate}}</h2>
    </div>
  </section>
</template>

<style lang="scss">

.home {
  .user-info {
    margin-block-end: 20px;
    h4 {
      span {
        font-size: 20px;

        &::after {
          content: '₿';
        }
      }

    }

  }

  .rate-info {
    display: flex;
    gap: 10px;
  }
}
</style>