<template>
    <v-app style='margin:30px'>
        <v-card>
        <!--panel header-->
            <v-card-title
                class='headline primary'
                primary-title style='color: white;'>
            </v-card-title>
        <!--panel body-->
            <v-simple-table style='margin: 20px;'>
                <template v-slot:default>
                <!--table header-->
                    <thead>
                    <tr>
                        <th>
                            {{header}}
                        </th>
                    </tr>
                    </thead>
                <!--table body-->
                    <tbody>
                        <tr>
                            <td>{{body}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
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