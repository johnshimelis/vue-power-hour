<template >
  <div>
   <div class="patients" >
        <h2>Status of patients which are in progress</h2>
        <table id="firstTable" >
            <thead>
              <tr>
                <th>Paients Name</th>
                <th>Start Date</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="patient in patients" v-bind:key="patient">
                <td>{{patient.patient_name}}</td>
                <td>{{patient.start_date}}</td>
                <td>{{patient.status}}</td>
             
              </tr>
            </tbody>
          </table>
    </div>
  </div>
</template>
<script>
 

     export default{
       components :{
           
          
         
       },
       
         
       data(){
         return{
           patients: [
         { patient_name: "John Shimelis", start_date: "17/01/2014", status: 'Pending' },
         { patient_name: "John Assebe", start_date: "17/02/2014", status: 'Pending' },
         { patient_name: "Daniel Admasu", start_date: "10/01/2014", status: 'Pending' },
         { patient_name: "Kaleb Solmmon", start_date: "24/01/2014", status: 'Pending' },
         { patient_name: "John Doe", start_date: "25/01/2014", status: 'Pending' }
         
     
         ],
        
         
         } 
       },
       methods : {
        
       }
       }
   </script>
   
   <style lang="scss" scoped>
   .patients h2{
       margin-top: 200px;
       font-family: 'Times New Roman', Times, serif;
       font-size: 35px;
       font-weight: bold;
       margin-left: 400px;
   }
   table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
 margin-left: 300px;
 margin-top: 50px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
}

table td {
  text-align: left;
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}

   </style>