<template>
  <h1>Jobs:</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{name: 'jobsDetails', params: { id: job.id }}">
        <h2>{{ job.title }}</h2>
      </router-link>
  </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {title: 'UX Designer', id: 1, details: 'design details'},
                {title: 'Web Developer', id: 2, details: 'web details'},
                {title: 'Python Developer', id: 3, details: 'python details'},
            ]
        }
    }
}
</script>

<style>
    .job {
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    .job:hover {
        background: #ddd;
    }
    .job a {
        text-decoration: none;
    }
</style>