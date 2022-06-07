<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background-color: #0d1b2a">
      <q-toolbar>
        <q-toolbar-title> BuyG </q-toolbar-title>
        <q-item cliackable>
          <q-icon class="text-primary" />
          <router-link to="/indexPage" fornt-color="#FFFFFF"
            >หน้าหลัก</router-link
          >
        </q-item>
        <q-item cliackable>
          <q-icon class="text-primary" />
          <router-link to="/login" fornt-color="#FFFFFF"
            >เข้าสู่ระบบ</router-link
          >
        </q-item>
        <q-item cliackable>
          <q-icon class="text-primary" />
          <router-link to="/register" fornt-color="#FFFFFF"
            >สมัครบัญชี</router-link
          >
        </q-item>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script></script>
