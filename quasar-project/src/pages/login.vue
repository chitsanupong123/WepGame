<template>
  <div
    class="justify-center"
    :class="onChangeBg == true ? '' : 'bg'"
    style="display: flex; height: 100vh; position: relative"
  >
    <div
      v-if="isShowGetStart"
      class="flex flex-col items-center q-gutter-y-lg"
      style="
        margin: auto;
        font-size: 24px;
        color: #00b3b7;
        font-weight: 900;
        margin-top: auto;
      "
    >
      <img
        src="icons/heart-logo.png"
        alt=""
        style="width: 50px; height: 50px"
      />
      <div class="flex flex-row">
        <span> Welcome to </span>
      </div>
      <div class="flex flex-row">
        <span>Take Care Yourself</span>
      </div>
      <img src="icons/image1.png" alt="" style="width: 350px; height: 350px" />
      <q-btn
        class="text-white q-px-xl"
        @click="pushToLogin()"
        label="GET START"
        style="background-color: #002245"
      />
    </div>
    <div
      v-if="isShowLogin"
      class="col items-center justify-center"
      style="display: flex; width: 100%; margin-top: -250px"
    >
      <div class="row items-center justify-center">
        <span class="" style="font-size: 24px; font-weight: 900; color: #002245"
          >Take Care Yourself</span
        >
        <q-img src="icons/image2.png" style="width: 400px"></q-img>
      </div>

      <div
        class="bg-white q-pa-md q-gutter-y-lg"
        style="
          border-radius: 15px 15px 0 0;
          width: 100%;
          position: absolute;
          z-index: 1;
          bottom: 0;
        "
      >
        <q-btn
          @click="loginWithGoogle"
          style="width: 100%"
          label="Sign In With Google"
        >
          <img
            class="q-ml-md"
            src="icons/google.png"
            alt=""
            style="width: 20px"
          />
        </q-btn>
        <q-input
          outlined
          v-model="email"
          placeholder="อีเมล"
          style="background-color: #f7f8fa; border: none"
        ></q-input>
        <q-input
          v-model="password"
          outlined
          placeholder="รหัสผ่าน"
          style="background-color: #f7f8fa; border: none"
        ></q-input>
        <div @click="onReset"><span>ลืมรหัสผ่าน</span></div>
        <q-btn
          @click="login()"
          unelevated
          class="bg-white"
          style="
            font-weight: 900;
            color: #002245;
            border: solid 1px #002245;
            width: 100%;
          "
          label="เข้าสู่ระบบ"
        ></q-btn>
        <q-btn
          @click="pustToregister"
          unelevated
          style="width: 100%; color: white; background-color: #002245"
          label="สมัครสมาชิก"
        ></q-btn>
      </div>
    </div>
    <div
      v-if="isShowRegister"
      class="col items-center justify-center"
      style="display: flex; width: 100%; margin-top: -250px"
    >
      <q-btn
        @click="backToLogin"
        style="
          background-color: #002245;
          position: absolute;
          left: 0;
          top: 0;
          margin-top: 10px;
          margin-left: 10px;
        "
      >
        <span style="font-weight: 900; color: white">Back</span>
      </q-btn>
      <div class="row items-center justify-center">
        <span class="" style="font-size: 24px; font-weight: 900; color: #002245"
          >สมัครสมาชิก</span
        >
        <q-img src="icons/image3.png" style="width: 400px"></q-img>
      </div>

      <div
        class="bg-white q-pa-md q-gutter-y-lg"
        style="
          border-radius: 15px 15px 0 0;
          width: 100%;
          position: absolute;
          z-index: 1;
          bottom: 0;
        "
      >
        <q-btn
          @click="loginWithGoogle"
          style="width: 100%"
          label="Sign In With Google"
        >
          <img
            class="q-ml-md"
            src="icons/google.png"
            alt=""
            style="width: 20px"
          />
        </q-btn>
        <q-input
          v-model="name"
          outlined
          placeholder="ชื่อ"
          style="background-color: #f7f8fa; border: none"
        ></q-input>
        <q-input
          v-model="email"
          outlined
          placeholder="อีเมล"
          style="background-color: #f7f8fa; border: none"
        ></q-input>
        <q-input
          v-model="password"
          outlined
          placeholder="รหัสผ่าน"
          style="background-color: #f7f8fa; border: none"
        ></q-input>
        <q-input
          outlined
          placeholder="ยืนยันรหัสผ่าน"
          style="background-color: #f7f8fa; border: none"
        ></q-input>
        <q-btn
          @click="registWithFirebase"
          unelevated
          style="width: 100%; color: white; background-color: #002245"
          label="สมัครสมาชิก"
        ></q-btn>
      </div>
    </div>
  </div>
  <q-dialog v-model="openDialog">
    <q-card class="q-ma-md" style="width: 100%">
      <q-card-section>
        <div class="flex row justify-end items-center">
          <q-input
            placeholder="กรอกอีเมล"
            style="width: 100%"
            outlined
            v-model="resetEmail"
          />
          <q-btn
            class="q-mt-sm"
            @click="onSentEmail"
            style="margin-left: auto; color: white; background-color: #002245"
            label="เปลี่ยนรหัสผ่าน"
          ></q-btn>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useOnsaveAccount } from "src/pinia-store/account";
import {
  ForgotPassword,
  LoginWithFirebase,
  LoginWithGoogle,
  RegistWithFirebase,
} from "src/boot/firebase";
export default defineComponent({
  name: "LoginPage",

  setup() {
    //manage layout
    const resetEmail = ref("");
    const isShowGetStart = ref(true);
    const onChangeBg = ref(true);
    const isShowLogin = ref(false);
    const isShowRegister = ref(false);
    const openDialog = ref(false);
    const onReset = () => {
      openDialog.value = true;
    };

    //manage data
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const accountPinia = useOnsaveAccount();
    const account = computed(() => accountPinia.account);

    //firebase
    const onSentEmail = async () => {
      await ForgotPassword(resetEmail.value);
      openDialog.value = false;
    };

    const login = async () => {
      const user = await LoginWithFirebase(email.value, password.value);
      if (user.user) {
        const userDetail = {
          name: user.user.email,
          uid: user.user.uid,
        };
        accountPinia.onSaveAccount(userDetail);
      }
    };

    const loginWithGoogle = async () => {
      try {
        const loginWithGoogle = await LoginWithGoogle();
        const userDetail = {
          email: loginWithGoogle.user.email,
          name: loginWithGoogle.user.displayName,
          uid: loginWithGoogle.user.uid,
        };
        accountPinia.onSaveAccount(userDetail);
      } catch (e) {
        aleet(e);
      }
    };

    const registWithFirebase = async () => {
      try {
        const regist = await RegistWithFirebase(
          email.value,
          password.value,
          name.value
        );
        const userDetail = {
          email: regist.user.email,
          name: regist.user.displayName,
          uid: regist.user.uid,
        };
        accountPinia.onSaveAccount(userDetail);
        console.log(regist);
        backToLogin();
      } catch (e) {
        alert(e);
      }
    };

    //push page
    const pushToLogin = () => {
      isShowGetStart.value = false;
      onChangeBg.value = false;
      isShowLogin.value = true;
    };

    const pustToregister = () => {
      onChangeBg.value = true;
      isShowLogin.value = false;
      isShowRegister.value = true;
    };

    const backToLogin = () => {
      onChangeBg.value = false;
      isShowLogin.value = true;
      isShowRegister.value = false;
    };

    return {
      onSentEmail,
      resetEmail,
      openDialog,
      name,
      onReset,
      onChangeBg,
      isShowGetStart,
      isShowLogin,
      isShowRegister,
      email,
      password,
      account,
      backToLogin,
      pushToLogin,
      pustToregister,
      login,
      loginWithGoogle,
      registWithFirebase,
    };
  },
});
</script>

<style>
.bg {
  background-color: #bfe9ef;
}
</style>
