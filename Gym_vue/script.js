const app = new Vue({
    el: "#app",
    data: {
        titulo: "GYM con vue",
        exercises: [{nombre: "Tarea 1", estado: false},
                    {nombre: "Tarea 2", estado: false},
                    {nombre: "Tarea 3", estado: false}],
        nuevo_dato: ""
    },
    methods: {
        agregar () {
            if (this.nuevo_dato) {
                this.exercises.push({nombre: this.nuevo_dato, estado: false});
                this.nuevo_dato = "";
                localStorage.setItem('gym-db', JSON.stringify(this.exercises));
            }
        },
        cambiarEstado (index) {
            this.exercises[index].estado = !this.exercises[index].estado;
            localStorage.setItem('gym-db', JSON.stringify(this.exercises));
        }
        ,
        eliminar (index) {
            this.exercises.splice(index, 1);
            localStorage.setItem('gym-db', JSON.stringify(this.exercises));
        }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('gym-db'));
        if (datosDB === null) {
            this.exercises = [];
        }
        else {
            this.exercises = datosDB;
        }
    }
});