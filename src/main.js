import 'bootstrap';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import $ from 'jquery';
import './sass/styles.scss';
import { User } from '../src/galactic-age';

$(document).ready(function() {
  let newUser = new User();
  $("#galactic-age").submit( function(event) {
    event.preventDefault();
    $(".planetary-ages").empty();
    const age = $("input").val();
    newUser.Earth = age;
    newUser.galacticAges();
    $(".planetary-ages").append("<li>Your age on Mercury would be <span>" + newUser.Mercury + "</span>.</li>");
    $(".planetary-ages").append("<li>Your age on Venus would be <span>" + newUser.Venus + "</span>.</li>");
    $(".planetary-ages").append("<li>Your age on Mars would be <span>" + newUser.Mars + "</span>.</li>");
    $(".planetary-ages").append("<li>Your age on Jupiter would be <span>" + newUser.Jupiter + "</span>.</li>");
    console.log(newUser);
  });
});
