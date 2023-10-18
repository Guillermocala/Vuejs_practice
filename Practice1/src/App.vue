<script setup>
    import { ref, computed } from 'vue'
    const name = "Guillermo";
    const counter = ref(0);
    const arrayNumeros = ref([]);

    const increment = () => {
        counter.value++;
    }
    const decrease = () => {
        counter.value--;
    }
    const reset = () => {
        counter.value = 0;
    }

    const agregarNumero = () => {
        arrayNumeros.value.push(counter.value);
    };

    const anularBoton = computed(() => {
        const busqueda = arrayNumeros.value.find(num => num === counter.value);
        return busqueda || busqueda === 0;
    });

    const computeColor = computed(() => {
        if(counter.value > 0){
            return "color:blue";
        }
        else if(counter.value < 0){
            return "color:red";
        }
        else {
            return "color:yellow";
        }
    });
</script>

<template>
    <h1>Hola mundo, soy {{ name.toUpperCase() }}</h1>
    <!-- Comment <h1>
        <span v-if="counter > 0" :style="`color:blue`">{{ counter }}</span>
        <span v-else-if="counter < 0" :style="`color:red`">{{ counter }}</span>
        <span v-else>{{ counter }}</span>
    </h1>
    <h1 :style="counter >= 0 ? 'color:blue' : 'color:red'">{{ counter }}</h1>
    -->
    <h1 :style="computeColor">{{ counter }}</h1>
    <button @click="increment">Incrementa</button>
    <button @click="decrease">Disminuye</button>
    <button @click="reset">Reset</button>
    <button @click="agregarNumero" :disabled="anularBoton">Agregar</button>
    <ul v-for="(item, index) in arrayNumeros"
        :key="index"    
    >
        <li>{{ index }}: {{ item }}</li>
    </ul>
</template>