import axios from 'axios';

const url = 'http://localhost:3000/';
class PostService {
    static getPosts () {
        return new Promise(async (resolve,reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ( {
                        ...post,
                        date_time: new Date(post.date_time)
                    }))
                );
            }catch (err) {
                reject(err);
            }
        })
    }



}

export default PostService;
