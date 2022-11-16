<template>
<v-app style='margin:30px'>
    <v-card>
    <!--panel header-->
        <v-card-title class='headline primary justify-center' primary-title style='color: white;'>
            <v-spacer />
                <span class="fa-solid fa-bars" /> FRAMEWORKS
            <v-spacer />
            <v-btn color="primary" elevation="2" large @click="showModal"> <span class="fa-solid fa-circle-plus"/> ADD </v-btn>
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
    </v-card>
    <Modal
      v-show="isModalVisible"
      @close="closeModal"
    />
</v-app>
</template>
<script>
import Modal from './Modal.vue';
//master
    export default {
        name:'ToDo',
        components:{
            Modal,
        },
        tasks:[
        {
            title:'Task 1',
            description:'a description',
            deadline:'99-99-99',
            priority:'low',
            isComplete:'false',
        },
        {
            title:'task title 2',
            description:'sample2 description',
            deadline:'00-00-00',
            priority:'high',
            isComplete:'false',
        }
      ],
    //life cycles
        created(){},
    //methods
        methods: {
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            }
        },
    //watchers
        watch: {},
    //computed
        computed: {},
    //global vars
        data() {
            return {
                isModalVisible: false,
            };
        },
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
        width: 99vw;
        min-height: 100vh;
    }
    .column{
        width: 15%;
    }
    .button{
        width: 90%;
    }
</style>