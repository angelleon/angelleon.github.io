<template>
  <div class="landing-component">
    <description-component></description-component>
    <div class="landing-card-container">
      <div
        v-for="(content, index) in cardContents"
        v-bind:key="index"
        v-bind:class="'landing-card-item landing-card-item-' + index"
        v-bind:style="computeStyle(index)"
      >
        <landing-card-component
          v-bind:content="content"
        ></landing-card-component>
      </div>
    </div>
  </div>
</template>
<script src='./landing.js'>
</script>
<style src='./landing.scss' lang='scss'>
</style>