<template>
  <q-page
    class="q-pa-md q-gutter-y-lg q-center"
    style="
      border-radius: 15px 15px 0 0;
      width: 100%;
      z-index: 1;
      bottom: 0;
      background-color: #778da9;
    "
  >

    <q-input
      outlined
      v-model="email"
      placeholder="กรอกอีเมล์ของคุณ"
      style="
        background: #ffffff;
        border-radius: 25px;
        position: absolute;
        width: 692px;
        height: 73px;
        left: 900px;
        top: 347px;
      "
    ></q-input>
    <q-input
      v-model="password"
      outlined
      placeholder="กรอกรหัสผ่านของคุณ"
      style="
        background: #ffffff;
        border-radius: 25px;
        position: absolute;
        width: 692px;
        height: 73px;
        left: 900px;
        top: 533px;
      "
    ></q-input>
    <div
      @click="onReset"
      style="
        position: absolute;
        width: 99px;
        height: 30px;
        left: 900px;
        top: 624px;

        font-family: 'IBM Plex Sans Thai';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;
        /* identical to box height */

        display: flex;
        align-items: center;
        text-align: center;

        color: #ffffff;
      "
    >
      <span >ลืมรหัสผ่าน</span>
    </div>
    <q-btn
      @click="login()"
      unelevated
      style="
        font-weight: 900;
        color: #ffffff;
        position: absolute;
        width: 361px;
        height: 71px;
        left: 1050px;
        top: 709px;
        border-radius: 25px;
        background: #0d1b2a;
      "
      label="เข้าสู่ระบบ"
    ></q-btn>
  </q-page>
</template>

<script>

</script>

<style></style>
