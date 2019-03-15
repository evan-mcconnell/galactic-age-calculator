import 'bootstrap';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import $ from 'jquery';
import './sass/styles.scss';
import { User } from '../src/galactic-age';

$(document).ready(function() {
  console.log("hello");
  let newUser = new User();
  $("#galactic-age").submit( function(event) {
    event.preventDefault();
    const age = $("input").val();
    newUser.Earth = age;
    console.log(newUser);
  });
});
