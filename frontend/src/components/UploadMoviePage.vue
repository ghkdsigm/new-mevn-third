<template>
    <div>
        <form method="post" @submit.stop.prevent="mySubmit">
            <div>
                <label for="name">영화 제목</label>
                <input type="text" name="name" required v-model="movie.name">
            </div>
            <div>
                <label for="year">개봉 년도</label>
                <input type="number" name="year" required v-model="movie.year">
            </div>
            <div>
                <label for="director">감독</label>
                <input type="text" name="director" required v-model="movie.director">
            </div>
            <div>
                <label for="poster">포스터 링크</label>
                <input type="url" name="name" required v-model="movie.poster">
            </div>
            <div>
                <label for="description">설명</label>
                <input type="text" name="description" required v-model="movie.description">
            </div>
            <div>
                <label for="description">해시태그</label>
                <input type="text" name="description" required v-model="movie.hashtag">
            </div>
            <div>
                <button type="submit">업로드</button>
            </div>
            <div>
                <span>{{this.image}}</span>
            </div>
        </form>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data() {
        return {
            movie: {
                id: "",
                name: "",
                year: 0,
                director: "",
                poster: "",
                description: "",
                hashtag:""
            },
            response: "",
            image: 'ex) https://img.wkorea.com/w/2022/07/style_62cb772e80422-493x700.jpg'
        };
    },
    methods: {
        mySubmit() {
            this.$http.post("/movies/upload", this.movie)
                .then(res => {
                    console.log('upload success!');
                    alert('업로드가 완료되었습니다.')
                })
                .catch(err => {
                    console.error('upload fali!');
                });
            // go to list page
            setTimeout(_ => {
                this.$router.push({ name: "movielist" });
            }, 1000);            
        }
    },
    created() {
        // get movies
        this.$http.get(`/movies`).then(response => {
            const movies = response.data;
            this.movie.id = movies.length + 1;
        });
    }
};
</script>