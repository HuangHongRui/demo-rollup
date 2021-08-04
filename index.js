import { ajax } from 'utils';

ajax('https://api.example.com?search=Rollup')
  .then(function(res) {
    console.log(res);
  })
