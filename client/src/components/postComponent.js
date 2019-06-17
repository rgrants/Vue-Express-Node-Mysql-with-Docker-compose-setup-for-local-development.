
import PostService from '../PostService'
import Pagination from './Pagination.vue'
import axios from 'axios';

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
        startScheduler: function () {
            axios({
                method: 'post',
                url: 'http://localhost:3000/startTask',
                data: {
                    String: 'true'
                }
            });


        },
        stopScheduler: function () {
            axios({
                method: 'post',
                url: 'http://localhost:3000/startTask',
                data: {
                    String: 'false'
                }
            });
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

