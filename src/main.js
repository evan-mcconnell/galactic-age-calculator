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
  $("#galactic-time-left").submit( function(event) {
    event.preventDefault();
    const country = $(".country").val();
    const gender = parseInt($(".gender").val());
    const smoker = $(".smoker").val();
    const activity = parseInt($(".activity").val());
    const diet = parseInt($(".diet").val());
    newUser.country = country;
    newUser.gender = gender;
    newUser.smoker = smoker;
    newUser.activity = activity;
    newUser.diet = diet;
    newUser.lifeExpEarth = newUser.lifeExpectancy();
    newUser.galacticLifeExp();
    console.log(newUser.lifeExpEarth);
    const merc = newUser.lifeLeft("Mercury");
    console.log(newUser.lifeLeft("Mercury"));
    $(".time-left").append("<li>" + merc + "</li>");
    console.log(newUser);
  });
});
