<template>
  <q-page style="background-color: #778DA9;">
<q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      style="
        position: absolute;
        width: 100%;
        height: 60vw;
        margin-bottom: 30px;
        top : 50px;
        box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
        border-radius: 25px;

      "
    >
      <q-carousel-slide :name="1" img-src="image/1.webp" />
      <q-carousel-slide :name="2" img-src="images/113.jpg" />
      <q-carousel-slide :name="3" img-src="images/114.jpg" />
      <q-carousel-slide :name="4" img-src="images/115.jpg" />
    </q-carousel>
  </q-page>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
