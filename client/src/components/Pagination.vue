<template>
    <div v-if="totalPages() > 0" class="pagination-wrapper">
        <span v-if="showPreviousLink()" class="pagination-btn" v-on:click="updatePage(currentPage - 1)"><v-btn > Back </v-btn>  </span>
        {{ currentPage + 1 }} of {{ totalPages() }}
        <span v-if="showNextLink()" class="pagination-btn" v-on:click="updatePage(currentPage + 1)"> <v-btn> Forward </v-btn>  </span>
    </div>
</template>
<script src="./pagination.js"></script>
<style src="./pagination.css"></style>

