<script setup lang="ts">
import { ref } from "vue";
import Leaderboard from "../components/Leaderboard.vue";
import Tos from "../components/Tos.vue";

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

<template>
  <section className="section">
    <div className="columns is-centered">
      <div className="column is-half">
        <div v-if="!tosSubmitted" className="content">
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
</template>
