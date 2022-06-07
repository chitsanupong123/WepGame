<template>
  <q-page style="background-color: #778da9; padding: 0 10px">
    <span
      style="
        position: absolute;
        width: 117px;
        height: 53px;
        left: 100px;
        top: 20px;

        font-family: 'IBM Plex Sans Thai';
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 53px;
        color: #ffffff;
      "
      >โปรโมชั่น</span
    >
    <div class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        style="
          position: absolute;
          width: 2000px;
          height: 400px;
          left: 40px;
          top: 100px;
          border-radius: 25px;
        "
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="image/1.png" />
        <q-carousel-slide :name="2" img-src="image/2.webp" />
        <q-carousel-slide :name="3" img-src="image/3.png" />
        <q-carousel-slide :name="4" img-src="image/1.webp" />
      </q-carousel>
    </div>
    <div
      class="row justify-center items-center q-gutter-x-md"
      style="margin-bottom: 30px"
    >
    <span style="
        position: absolute;
        width: 117px;
        height: 53px;
        left: 100px;
        top: 600px;

        font-family: 'IBM Plex Sans Thai';
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 53px;
        color: #ffffff;
      ">เกม</span>
      <div class="col flex justify-center">
        <q-btn
          to="new-page"
          class="flex-1"
          style="
            position: absolute;
            width: 185px;
            height: 200px;
            left: 136px;
            top: 663px;
            border-radius: 50px;
          "
        >
          <q-img
            :ratio="1"
            src="image/rov.png"

          />
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>
