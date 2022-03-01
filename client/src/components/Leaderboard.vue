<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { SpeedrunData } from "../../../shared/models/speedrun-data";
import { getSpeedruns, submitSpeedrun } from "../api/speedruns";

const props = defineProps<{ totalTime: number; username: string }>();

const state = reactive({
  submittedRun: {} as SpeedrunData,
  topResults: [] as SpeedrunData[],
  userResults: [] as SpeedrunData[],
});

onMounted(async () => {
  state.submittedRun = await submitSpeedrun({
    username: props.username,
    totalTimeMilliseconds: Math.round(props.totalTime),
  });
  [state.topResults, state.userResults] = await Promise.all([
    getSpeedruns(),
    getSpeedruns(state.submittedRun.userId),
  ]);
});

const msToElapsedString = (totalms: number): string => {
  const ms = totalms % 1000;
  const seconds = Math.floor((totalms / 1000) % 60);
  const minutes = Math.floor((totalms / (1000 * 60)) % 60);
  const hours = Math.floor((totalms / (1000 * 60 * 60)) % 24);

  return `${hours ? hours + "h" : ""} ${minutes}m ${seconds}s ${ms}ms`;
};
</script>

<template>
  <div className="content has-text-centered">
    <div className="block">
      <h2 className="title">{{ username }}&apos;s time:</h2>
      <p className="subtitle">
        {{ msToElapsedString(state.submittedRun.totalTimeMilliseconds) }}
      </p>
    </div>
    <div className="block">
      <h4>Global top times</h4>
      <table className="table is-bordered is-striped is-fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(result, index) in state.topResults"
            :key="index"
            :class="state.submittedRun.id === result.id ? 'is-selected' : ''"
          >
            <th>{{ index + 1 }}</th>
            <td>{{ result.username }}</td>
            <td>{{ msToElapsedString(result.totalTimeMilliseconds) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="block">
      <h4>Your top times</h4>
      <table className="table is-bordered is-striped is-fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(result, index) in state.userResults"
            :key="index"
            :class="state.submittedRun.id === result.id ? 'is-selected' : ''"
          >
            <th>{{ index + 1 }}</th>
            <td>{{ result.username }}</td>
            <td>{{ msToElapsedString(result.totalTimeMilliseconds) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
