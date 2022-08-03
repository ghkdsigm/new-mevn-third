/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import MovieListPage from '@/components/MovieListPage'
import DetailMoviePage from '@/components/DetailMoviePage'
//import UploadMoviePage from '@/components/UploadMoviePage'
import CreateMoviePage from '@/components/CreateMoviePage'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'movielist',
      component: MovieListPage
    },
    {
      path: '/:id',
      name: 'detailmovie',
      component: DetailMoviePage
    },
    // {
    //   path: '/upload',
    //   name: 'uploadmovie',
    //   component: UploadMoviePage
    // }
    {
      path: '/create',
      name: 'createmovie',
      component: CreateMoviePage
    }
  ]
})