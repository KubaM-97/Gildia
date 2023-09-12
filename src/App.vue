<template>

  <button @click="handleClick" class="btn">Click me !!!</button>

  <Loader v-if="isLoading"/>
  <Table v-else-if="items.length" :items="items"/>
  <ErrorMessage v-else :errorMessage="errorMessage"/>

</template>

<script>
import Loader from './components/Loader.vue'
import Table from './components/Table.vue'
import ErrorMessage from './components/ErrorMessage.vue'

import axios from 'axios'
import * as Sentry from "@sentry/vue";

export default {
  name: 'App',
  components: {
    Loader,
    Table,
    ErrorMessage
  },
  data() {
    return {
      items: [],
      errorMessage: '',
      isLoading: false
    }
  },
  methods: {
    async handleClick() {
      try {
        this.isLoading = true

        Sentry.captureException(new Error('Something went wrong'), {
          tags: { environment: 'production', component: 'Moje App.vue' },
          level: 'error'
        });

        const res = await axios.get('https://youtubeapp-fb07a.firebaseio.com/items.json')
        this.items = res.data
      } catch(e) {
        console.error(e);
        this.errorMessage = e.message
      } finally {
        this.isLoading = false;
      }
    }
  }
}
</script>

<style>
html {
  background: linear-gradient(180deg, rgba(214,222,102,1) 0%, rgba(9,196,188,0.4430147058823529) 100%);
  height: 100%;
}
.btn {
  background: blue;
  color: pink;
  padding: 10px;
  border-color: 12px;
  font-size: 25px;
  position: absolute;
  top: 10%;
  left: 230px;
}
</style>
