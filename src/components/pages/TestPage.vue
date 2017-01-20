<template>
    <div class="text-center">
        <button class="btn btn-lg" type="submit" @click="countplus">Count</button>
        <hr>
        <h1>{{ count }}</h1>
    </div>
</template>
<style>
</style>
<script>
    import {mapGetter, mapActions} from 'vuex';

    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        computed: {
            count(){
                return this.$store.state.count
            }

        },
        components: {},
        methods: {
            countplus: function () {
                this.$store.commit('increment')
            }
        }
    }
</script>
