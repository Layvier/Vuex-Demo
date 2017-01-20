<template>
    <div class="container-fluid">
        <div class="row">
            <navbar></navbar>
        </div>
        <div class="row">
            <menu-component></menu-component>
            <div class="col-md-9 page">
                <router-view></router-view>
            </div>
        </div>
        <div class="row">
            <footer-component></footer-component>
        </div>
    </div>
</template>

<script>
    //import Hello from './components/Hello'
    import Navbar from './components/NavbarComponent.vue'
    import MenuComponent from './components/MenuComponent.vue'
    import FooterComponent from './components/FooterComponent.vue'

    export default {
        name: 'app',
        components: {
            Navbar,
            MenuComponent,
            FooterComponent
        },
        created: function () {
            this.$http.get('/api/houses').then((data) => {
                console.log(data);
                console.log('loaded');
            }).catch(function (err) {
                console.log(err);
            })

        }
    }


</script>

<style>
    .page {
        border: 1px solid #bbb;
        border-radius: 3px;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 15px;
        padding-right: 15px;

    }


</style>
