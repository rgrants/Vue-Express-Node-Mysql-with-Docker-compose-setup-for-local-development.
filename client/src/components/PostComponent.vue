<template>

    <div class="container">
        <h1> Last records</h1>
        <hr>
        <v-btn id="enableButton"  v-on:click="startScheduler" :disabled="!hasNext" @click="onNext"> Start </v-btn><v-btn id="disableButton"  v-on:click="stopScheduler " :disabled="!hasPrevious" @click="onPrevious"> Stop</v-btn>
        <hr>
        <p class="error" v-if="error"> {{error}}</p>

        <div class="posts-container">
            <div class="post"
                 v-for="post in visiblePosts"
                 v-bind:visiblePosts  = "visiblePosts"
                 v-bind:currentPage  = "currentPage"
                 v-bind:post="post"

                 v-bind:key="post._id"
            >
                {{`${post.date_time.getDate()}/${post.date_time.getMonth()}/${post.date_time.getFullYear()}
                ${post.date_time.getHours()}:${post.date_time.getMinutes()}:${post.date_time.getSeconds()}` }}
                <p class="text"> {{post.text}}</p>

            </div>


        </div>
        <Pagination
                v-bind:posts="posts"
                v-on:page:update="updatePage"
                v-bind:currentPage="currentPage"
                v-bind:pageSize="pageSize">
        </Pagination>

    </div>

</template>

<script src="./postComponent.js"></script>
<style src="./postComponent.css"></style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
