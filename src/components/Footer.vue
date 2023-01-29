<template>

    <div class="footerContainer">
        <div class="footerCopy">
            <p>
                Feito com
                <span class="hearth">&#x2665;</span>
                por Emanuel - 2023 |
            </p>
            <p>
                Todos os direitos reservados
            </p>

        </div>
    </div>

</template>

<style scoped>
.footerContainer {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
}

.footerCopy {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}

.footerCopy p {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 100%;
    padding: 2px 4px;
}


.footerCopy .hearth {
    font-size: 1.2rem;
    padding: 0 2px;
    color: #f33;
    margin: 0;
}
</style>