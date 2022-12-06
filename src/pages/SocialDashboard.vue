<template>
  <q-page
    class="row flex flex-center"
    style="background-color: hsl(230, 17%, 14%)"
  >
    <div class="row justify-center q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" size="">
        <q-separator />
        <q-card-section
          class="text-white column"
          style="background-color: hsl(228, 28%, 20%)"
        >
          <div class="row justify-center">
            <q-icon name="fa-brands fa-facebook" size="sm" />
            <div class="text-h7 q-pl-xs">@nathanf</div>
          </div>
          <div class="text-h2">1987</div>
          <div class="text-h7">Followers</div>
          <div calss="text-subtitle">1111</div>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <q-card-section class="bg-purple text-white">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-actions align="around">
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card">
        <q-card-section class="bg-teal text-white">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-actions vertical align="right">
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card">
        <q-card-section class="bg-grey-8 text-white">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-actions vertical align="center">
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>
