<template>
  <div>
    <h1>
      {{ animal.name }} <small>({{ $route.params.species }})</small>
    </h1>
    <p><b>AGE: </b>{{ animal.age }} years old</p>
    <p><b>GENDER: </b>{{ animal.gender }}</p>
    <p><b>BREED: </b>{{ animal.breed }}</p>
    <p><b>COLOR: </b>{{ animal.color }}</p>
    <b-card
      :title="animal.name + ' (' + $route.params.species + ')'"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        <p><b>AGE: </b>{{ animal.age }} years old</p>
        <p><b>GENDER: </b>{{ animal.gender }}</p>
        <p><b>BREED: </b>{{ animal.breed }}</p>
        <p><b>COLOR: </b>{{ animal.color }}</p>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState(['cats', 'dogs'])
  },
  mounted () {
    const animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
  }
}
</script>
