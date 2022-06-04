<template>
  <q-page class="flex flex-center" style="background-color: #778da9">
    <div class="row">
      <div class="col">
        <q-input rounded outlined v-model="email" label="email" />
      </div>
      <div class="col">
        <q-input
          rounded
          outlined
          v-model="password"
          type="password"
          label="password"
        />
      </div>
    </div>
    <div class="row">
      <q-btn>
        <q-btn unelevated rounded color="primary" label="Login" />
      </q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style></style>
