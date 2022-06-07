<template>
  <q-page  style="background-color: #778da9">
      <div
        class=" q-pa-md q-gutter-y-lg"
        style="
          border-radius: 15px 15px 0 0;
          width: 100%;

          z-index: 1;
          bottom: 0;
          background-color: #778da9;
        "
      >

        <q-input
          v-model="name"
          outlined
          placeholder="ชื่อ"
          style="background-color: #f7f8fa; border-radius: 25px; top : 237px "

        ></q-input>
        <q-input
          v-model="email"
          outlined
          placeholder="อีเมล"
          style="background-color: #f7f8fa; border-radius: 25px;  top : 402px"
        ></q-input>
        <q-input
          v-model="password"
          outlined
          placeholder="รหัสผ่าน"
          style="background-color: #f7f8fa; border-radius: 25px; top : 567px"
        ></q-input>
        <q-input
          outlined
          placeholder="ยืนยันรหัสผ่าน"
          style="background-color: #f7f8fa; border-radius: 25px;"
        ></q-input>
        <q-btn
          @click="registWithFirebase"
          unelevated
          style="width: 100%; color: white; background-color: #002245 ; border-radius: 25px;"
          label="สมัครสมาชิก"
        ></q-btn>
      </div>


  </q-page>
</template>
