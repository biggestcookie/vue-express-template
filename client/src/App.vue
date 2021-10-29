<template>
  <div>
    <Navbar />
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-half">
          <div v-if="!tosSubmitted" className="content">
            <div className="block">
              <h2 className="has-text-centered">Welcome!</h2>
            </div>
            <div className="block">
              Please read all the terms and conditions, then press accept when
              you are done.
            </div>
            <Tos @submit="submitTos" />
          </div>
          <div v-else-if="!username.length">
            <div className="content has-text-centered">
              <div className="title">
                <h2>Complete!</h2>
              </div>
              <form @submit="submitName($event)">
                <div className="field has-addons is-justify-content-center">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      pattern="[A-Za-z0-9]+"
                      name="username"
                      placeholder="Enter your username "
                      autoComplete="off"
                      autoFocus
                      required
                    />
                  </div>
                  <div className="control">
                    <input type="submit" className="button is-primary" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <Leaderboard
            v-else
            :totalTime="endTime - startTime"
            :username="username"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Leaderboard from "./components/Leaderboard.vue";
import Navbar from "./components/Navbar.vue";
import Tos from "./components/Tos.vue";

const tosSubmitted = ref(false);
const startTime = ref(performance.now());
const endTime = ref(0);
const username = ref("");

const submitTos = (event: Event) => {
  event.preventDefault();
  tosSubmitted.value = true;
  endTime.value = performance.now();
};

const submitName = async (event: Event) => {
  event.preventDefault();
  const submitter = (event.target as any)["username"].value as string;
  username.value = submitter;
};
</script>

<style lang="scss">
.tos {
  border: 1px solid $grey-light;
  padding: 25px;
  max-height: 400px;
  overflow-y: scroll;
}
</style>
