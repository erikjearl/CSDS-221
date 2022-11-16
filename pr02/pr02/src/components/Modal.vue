<template>
    <div class="modal-backdrop">
      <div class="modal">
        <v-card>

          <!--panel header-->
          <v-card-title class='headline primary justify-center' primary-title style='color: white;'>
            <div v-if="true">
              <span class="fa-solid fa-circle-plus"/> &nbsp; Add Task
            </div>
            <div v-else>
              <span class="fa-solid fa-pen-to-square"/> &nbsp; Edit Task
            </div>
            
          </v-card-title>

            <!--panel body-->
            <v-layout v-if="true" justify-center class="elements mx-5 mb-0 mt-7" >
              <v-text-field label="Title" outlined />
            </v-layout>

            <v-layout justify-center class="element mx-5 my-2">
              <v-text-field label="Description" outlined />
            </v-layout>

            <v-layout justify-center class="elements mx-5 my-0">
              <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="date" label="Deadline" append-icon="mdi-calendar" v-bind="attrs" v-on="on" readonly outlined/>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-layout>

              <v-radio-group label="Priority" class="elements mx-4 my-0">
                <v-layout align-start row d-flex justify-space-between>
                  <v-radio label="Low" value="low"/>  &nbsp;
                  <v-radio label="Med" value="med" />  &nbsp;
                  <v-radio label="High" value="high" />
                </v-layout>
              </v-radio-group>

            <v-layout justify-end class="elements mx-2 mt-0 mb-2">
              <v-btn color="primary" elevation="2" @click="close" class="mr-2"> <span class="fa-solid fa-pen-to-square"/> EDIT </v-btn>
              <v-btn color="error" elevation="2" @click="close"> <span class="fa-solid fa-ban"/> CANCEL</v-btn>
            </v-layout>

          </v-card>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'Modal-Test',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .elements{
    margin:10px 10px;
    padding:0px;
  }

</style>