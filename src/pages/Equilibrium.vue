<template>
  <q-page class="flex flex-center" style="background-color: hsl(217, 54%, 11%)">
    <!-- {{ teste }} -->
    <q-card
      class="my-card text-white"
      style="
        width: 290px;
        height: 480px;
        border-radius: 10px;
        background-color: hsl(216, 50%, 16%);
      "
    >
      <q-card-section class="text-center q-pb-s">
        <img
          class="isso"
          src="../../public/image-equilibrium.jpg"
          alt="Equilibrium logo"
          style="width: 250px; height: 250px; border-radius: 10px"
        />
        <div class="ocara"></div>
      </q-card-section>
      <q-card-section class="text-white q-pt-none q-pb-none">
        <div class="text-h6 cursor-pointer xablau">Equilibrium #3429</div>
        <div class="text-subtitle2 text-blue-grey">
          Our Equilibrium collection promotes balance and calm.
        </div>
      </q-card-section>
      <q-card-section class="row">
        <div class="text-cyan-13 text-weight-bold">
          <q-icon name="fab fa-ethereum" size="15px" />
          <span class="col text-left">0.041 ETH</span>
        </div>
        <div class="col text-right text-blue-grey">
          <q-icon name="fas fa-clock" />
          3 days left
        </div>
      </q-card-section>
      <q-separator inset style="background-color: hsl(215, 32%, 27%)" />
      <q-card-section class="q-pa-none">
        <q-item class="items-center">
          <q-item-section class="q-pa-none col-auto" top>
            <q-avatar class="overlapping">
              <q-img
                src="../../public/image-avatar.png"
                style="
                  width: 35px;
                  height: 35px;
                  border: 1px solid white;
                  border-radius: 20px;
                "
              />
            </q-avatar>
          </q-item-section>
          <span class="text-blue-grey text-weight-medium">Creation of </span
          ><span class="cursor-pointer xablau">Jules Wyvern</span>
        </q-item>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "IndexPage",
  setup() {
    // getTeste();
    // function getTeste() {
    //   axios
    //     .get("http://api.open-notify.org/iss-now.json")
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => alert(err));
    // }
    return {};
  },
});
</script>
<style scoped>
.ocara {
  position: absolute;
  top: 17px;
  left: 20px;
  width: 250px;
  height: 250px;
  z-index: 10000;
}
.ocara:hover {
  cursor: pointer;
  background-color: hsl(178, 100%, 50%);
  opacity: 0.2;
  border-radius: 10px;
}
.xablau:hover {
  color: hsl(178, 100%, 50%);
}
</style>
