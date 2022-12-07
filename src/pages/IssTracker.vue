<template>
  <q-page
    class="flex flex-center"
    style="background-color: hsl(232.17, 15.03%, 30%)"
  >
    {{ teste }}
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "IndexPage",
  setup() {
    getTeste();
    function getTeste() {
      axios
        .get("http://api.open-notify.org/iss-now.json")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => alert(err));
    }
    return {};
  },
});
</script>
