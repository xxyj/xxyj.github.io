<template>
  <div class="home">
    <div class="content jello">
      <h1 v-directive-sample:arg="'msg'">
        {{ `Vue` | filterSample('之脚手架') }}
      </h1>
      <a
        href="https://github.com/CodeLittlePrince/blog"
        target="__blank"
      >
        <div class="cover"></div>
      </a>
    </div>
  </div>
</template>

<script>
import mixinsSample from 'mixins/sample'

export default {
  mixins: [mixinsSample],
  mounted() {
    // ajax get data
    // this.$ajax.post('/home/hello', { page: 7 }) // FOR POST
    this.$ajax.get(
      '/home/hello',
      { page: 7 }
    ).then(res => {
      console.log(`%c${res.msg}`, 'color: blue')
    }).catch(err => {
      console.error(err.text)
    })
    // ajax get data
    this.$ajax.get(
      '/home/kitty'
    ).catch(err => {
      console.error(err.text)
    })
  }
}
</script>

<style lang="scss">
@import '~common/scss/variable';
@import '~common/scss/mixin';

.home {
  .content {
    position: relative;
    width: 1200px;
    height: 400px;
    margin: 0 auto;
    animation-duration: 1s;
    h1 {
      position: absolute;
      bottom: 30px;
      left: 120px;
      font-size: $font-size-amazing;
      text-align: center;
      margin-top: 50px;
      color: $color-text-gray;
      font-weight: bolder;
      span {
        font-size: $font-size-xl;
      }
    }
    .cover {
      position: absolute;
      z-index: 2;
      right: 62px;
      bottom: 90px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      @include bg-image('~common/img/home');
      background-size: contain;
    }
  }
}
</style>
