<template>
<v-app style='margin:30px'>
    <v-card>
    <!--panel header-->
        <v-card-title class='headline primary justify-center' primary-title style='color: white;'>
            <v-spacer />
                <span class="fa-solid fa-bars" /> &nbsp; FRAMEWORKS
            <v-spacer />
            <v-btn color="primary" elevation="2" large @click="addTaskModal"> <span class="fa-solid fa-circle-plus"/> ADD </v-btn>
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
                    <tr v-for="(task,index) in tasks" :key="index">
                        <td class="text-center">{{task.title}}</td>
                        <td class="text-center">{{task.description}}</td>
                        <td class="text-center">{{task.deadline}}</td>
                        <td class="text-center">{{task.priority}}</td>
                        <td> 
                            <v-layout justify-center>
                                <v-checkbox v-model="tasks[index].isComplete"/> 
                            </v-layout>
                        </td>
                        <td>
                            <v-layout justify-center v-if="!tasks[index].isComplete">
                                <v-btn class="button mt-2" color="primary" elevation="2" large @click="updateTaskModal(index)">
                                    <span class="fa-solid fa-pen-to-square"/> UPDATE </v-btn>
                            </v-layout>
                            <v-layout justify-center>
                                <v-btn class="button mb-2" color="error" elevation="2" large @click="deleteTask(index)">
                                    <span class="fa-solid fa-circle-xmark"/> DELETE </v-btn>
                            </v-layout>
                        </td> 
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-card>

    <Modal
      v-show="isModalVisible"
      :isModalVisible=isModalVisible
      :isAddTask=isAddTask
      :existing_description=description
      :existing_deadline=deadline
      :existing_priority=priority
      :tasks=tasks
      @addTask="addTask"
      @updateTask="updateTask"
      @close="closeModal"
    />

</v-app>
</template>



<!-- Vue Script -->
<script>
import Modal from './Modal.vue';
//master
    export default {
        name:'ToDo',
        components:{
            Modal,
        },

    //methods
        methods: {
            // ToDo Methods
            addTaskModal(){
                this.isAddTask = true;
                this.showModal();
            },
            updateTaskModal(index){
                this.taskIndex = index;
                this.isAddTask = false;
                this.description = this.tasks[this.taskIndex].description;
                this.deadline = this.tasks[this.taskIndex].deadline;
                this.priority = this.tasks[this.taskIndex].priority;
                this.showModal();
            },
            deleteTask(index){
                this.tasks.splice(index, 1);
            },


            // Form Methods
            addTask(title, description, deadline, priority){
                this.tasks.push({
                    title:title,
                    description:description,
                    deadline:deadline,
                    priority:priority,
                    isComplete:false,
                });
            },
            updateTask(description, deadline, priority){
                this.tasks[this.taskIndex].description = description;
                this.tasks[this.taskIndex].deadline = deadline;
                this.tasks[this.taskIndex].priority = priority;
            },


            // Handle Modal
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            }
        },

    //global vars
        data() {
            return {
                // state variables
                isModalVisible: false,
                isAddTask: true,

                // task data
                taskIndex: null,
                title:'',
                description:'',
                deadline:'',
                priority:'low',
                tasks:[
                    {
                        title:'Sample',
                        description:'Sample description',
                        deadline:'99-99-99',
                        priority:'low',
                        isComplete:false,
                    },
                ],

            };
        },
        //life cycles
            created(){},
        //watchers
            watch: {},
        //computed
            computed: {},
    }
</script>



<!-- Custom Styling -->
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
        width: 70%;
    }
</style>