<template lang="html">
    <div class="navbar col-md-12">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'navbar',
        data () {
            return {
                title: 'Demo'
            }
        },
        created: function () {
            /*this.$http.get('http://localhost:8000/api/houses').then((data) => {
             console.log(data);
             });*/
        }
    }
</script>

<style lang="css">

</style>
