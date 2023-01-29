<script>
</script>


<template>
    <div class="homeContainer">
        <a href="https://instagram.com/avila.ts" target="_blank" class="iconContainer">
            <i class="pi pi-instagram"></i>
            <p class="iconLabel">avila.ts</p>
        </a>

        <a href="https://github.com/meiazero/?tab=repositories" target="_blank" class="iconContainer">
            <i class="pi pi-github"></i>
            <p class="iconLabel">meiazero</p>
        </a>

        <a href="https://linkedin.com/in/emanuel-cruz" target="_blank" class="iconContainer">
            <i class="pi pi-linkedin"></i>
            <p class="iconLabel">Emanuel Avila</p>
        </a>


    </div>
</template>

<style scoped>
/* container */
.homeContainer {
    display: grid;
    place-content: center;
    min-height: calc(100vh - 3em);
}


/* Icon */

.iconContainer {
    padding: 10px 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    /* outline: none; */
}

.iconContainer:hover {
    opacity: 0.4;
}


.iconContainer i {
    fill: #f3f3f3;
    font-size: 1.5rem;
    padding: 5px;
}

.iconLabel {
    font-size: 1.5rem;
}
</style>