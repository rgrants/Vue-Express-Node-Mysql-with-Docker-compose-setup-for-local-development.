
import PostService from '../PostService'
import Pagination from './Pagination.vue'
import axios from 'axios';
/* eslint-disable */
export default {
    name: 'PostComponent',
    data() {
        return {
            posts: [],
            error: '',
            pageSize: 5,
            currentPage: 0,
            visiblePosts: [],
            activate: String,
            index: 0,
            hasPrevious: false,
            hasNext: true
        }
    },
    components: {
    Pagination
    },


    beforeMount: function() {
        this.updateVisiblePosts();
    },
    async created() {
        try {
            this.posts = await PostService.getPosts();
            this.updateVisiblePosts();
        } catch (e) {
            this.error = e.message;
        }

    },
    methods: {
        updatePage(pageNumber) {
            this.currentPage = pageNumber;
            this.updateVisiblePosts();
        },
        updateVisiblePosts() {
            this.visiblePosts = this.posts.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
            // if we have 0 visible todos, go back a page
            if (this.visiblePosts.length == 0 && this.currentPage > 0) {
                this.updatePage(this.currentPage - 1);
            }
        },

        startScheduler () {
            axios.post('http://localhost:3000/startTask', {
                String: 'true'
            }).then((response) => {})
                .catch((e) => {
                    console.error(e)
                })

        },
        stopScheduler () {
            axios.post('http://localhost:3000/startTask', {
                String: 'false'
            }).then((response) => {})
                .catch((e) => {
                    console.error(e)
                })

        },
        onPrevious: function() {
            this.index -= 1;
            this.hasNext = true;

            if (this.index === 0) {
                this.hasPrevious = false;
            }
        },
        onNext: function() {
            this.index += 1;
            this.hasPrevious = true;

            if (this.index === 1) {
                this.hasNext = false;
            }
        }
    }

};

