import { StorageSerializers, useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const store = defineStore("store", {
  state: () => ({
    token: useStorage("token", null, undefined, {
      serializer: StorageSerializers.string,
    }),
  }),
});
