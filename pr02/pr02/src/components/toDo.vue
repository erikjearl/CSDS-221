<template>
<v-app style='margin:30px'>
    <v-card>
    <!--panel header-->
        <v-card-title class='headline primary justify-center' primary-title style='color: white;'>
            <span class="fa-solid fa-bars" /> &nbsp; FRAMEWORKS
        </v-card-title>
    <!--panel body-->
        <v-simple-table style='margin: 20px;'>
            <template v-slot:default>
            <!--table header-->
                <thead>
                <tr>
                    <th class="column text-center">Title</th>
                    <th class="column text-center">Description</th>
                    <th class="column text-center">Deadline</th>
                    <th class="column text-center">Priority</th>
                    <th class="column text-center">Is Complete</th>
                    <th class="column text-center" >Action</th>
                </tr>
                </thead>
                
            <!--table body-->
                <tbody>
                    <tr>
                        <td class="text-center">data1</td>
                        <td class="text-center">data2</td>
                        <td class="text-center">data3</td>
                        <td class="text-center">data4</td>
                        <td> 
                            <v-layout justify-center>
                                <v-checkbox /> 
                            </v-layout>
                        </td>
                        <td>
                            <v-layout justify-center>
                                <v-btn class="button" color="primary" elevation="2" large> <span class="fa-solid fa-pen-to-square"/> UPDATE </v-btn>
                            </v-layout>
                            <v-layout justify-center>
                                <v-btn class="button" color="error" elevation="2" large> <span class="fa-solid fa-circle-xmark"/> DELETE</v-btn>
                            </v-layout>
                        </td> 
                    </tr>
                </tbody>
            </template>
        </v-simple-table>

        <transition name="form" appear>
            <div class="overlay" v-if="showForm">FORM HERE</div>
        </transition>


    </v-card>
</v-app>
</template>
<script>
//master
    export default {
    //life cycles
        created(){},
    //methods
        methods: {}, 
    //watchers
        watch: {},
    //computed
        computed: {},
    //global vars
            // eslint-disable-next-line
          data: global => ({
            header: `header...`,
            body: `body...`
        }),
    }
</script>
<style>
    * {
        margin:0;
        padding:0;
    }
    #app{
        position: relative;
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
    }
    .column{
        width: 15%;
    }
    .button{
        width: 90%;
    }
    .overlay{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index: 98;
        background-color: rgba(0,0,0.3);
    }
</style>