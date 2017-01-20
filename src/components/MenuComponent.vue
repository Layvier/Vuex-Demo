<template lang="html">
    <div class="col-lg-2">
        <!--<div id="main-menu">
            <ul class="nav nav-pills nav-stacked">
                <li role="presentation">
                    <router-link to="/">Index</router-link>
                </li>
                <li role="presentation">
                    <router-link to="/admin">Admin</router-link>
                </li>
                <li role="presentation">
                    <router-link to="/contact">Contact</router-link>
                </li>
                <li role="presentation">
                    <router-link to="/test">Test</router-link>
                </li>
                <li role="presentation">
                    Gites
                </li>
            </ul>
        </div>-->
    </div>
</template>

<script>
    export default {
        name: 'menu-component',
        data () {
            return {
                title: 'Gites'
            }
        }
    }


</script>

<style lang="css">
    #main-menu {
        border-width: 1px;
        border-color: lightgray;
        padding: 20px;
        border-style: solid;
        border-radius: 5px;
        background-color: ghostwhite;
    }

</style>
