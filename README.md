# _Super Galactic Age Calculator_


#### _This program will accept a user-inputed Earth age and output their age on different planets on the solar system, along with how many of years they have left to live on said planet._

#### By _**Kimberly McConnell**_

***
## Description

_Want to know how many Mercury years you'd have left to live (on average) if you lived on Mercury? Aside from the fact that you'd have long become human toast, that is; we'll assume technology has progresses to make this possible. Simply enter your age to get started. To see how long you'd have left to live on various planets, enter some data about yourself to get the number of years you have left. Or, if you've already outlived your peer group, find out by how much!._

Note: _This program will calculate life expectancy based on data you enter. I am not an expert in life expectancy, and the calculator is absolutely not very accurate. Calculations are based on my own broad estimates based on data gathered in some quick Google searches (links listed further down)._

## Specs


* Create a User object that contains their Earth Age as entered <br>
  _Example: newUser {earthAge: 28};_

* Convert earth age into Mercury years <br>
`Conversion: Mercury year = 0.24 earth years`

* Convert earth age into Venus years <br>
  `Conversion: Venus year = 0.62 earth years`

* Convert earth age into Mars years <br>
  `Conversion: Mars year = 1.88 earth years`

* Convert earth age into Jupiter years <br>
  `Conversion: Jupiter year = 11.86 earth years` <br>
  _Jupiter years will be rounded to one decimal to more accurately reflect age._

Two possibilities for life expectancy-

  Possibility One:
  * Converts user-inputed life expectancy to galactic years

  * Calculates the difference between galactic user age and galactic user expectancy and outputs result.
  If positive, tell user how long they have left to live
    * (life expectancy) - (user galactic age)
    <br>
    <br>

  * If negative, tell user how many years they have lived past their life expectancy

Possibility Two:
  * Takes user-entered values for the following:
    * Country of residence
    * Gender (three options)
    * Activity level
    * Smoker (boolean value)
    * Food quality
    <br>
    <br>

  * Calculates average life expectancy for user based on data provided
    * Assign each value inputed a conversion factor and calculate from there
    <br>
    <br>

  * Calculates the difference between galactic user age and galactic user expectancy and outputs result.
  If positive, tell user how long they have left to live
    * (life expectancy) - (user galactic age)
    <br>
    <br>

  * If negative, tell user how many years they have lived past their life expectancy




## Setup/Installation Requirements

* Clone repository from github
* run ```$ npm install``` in the terminal
* run ```$ npm run start``` in the terminal to host the webpage on a loca server



## Resources loosely referenced for Life Expectancy Calculator:
* <a href="https://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy">Wikipedia Life Expectancy by Country</a>
* <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3395188/">Study: Does Physical Activity Increase Life Expectancy?</a>
* <a href="https://www.nih.gov/news-events/news-releases/nih-study-finds-extreme-obesity-may-shorten-life-expectancy-14-years">NIH Obesity and Life Expectancy Study</a> <br>

I made an attempt to find data on non-binary/gender-queer life expectancies, but data seems to be laking in that area. I found nothing conclusive; therefore the calculator simply uses an approximate average of male and female lifespans.



## Future Considerations

* The life expectancy calculator is currently only loosely based in science and could be improved significantly.
* Output next birthday on each planet
* Add more styling to show planets next to each planetary age


## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

* Javascript
* SCSS
* Webpack
* jQuery (via webpack dependency)
* Bootstrap (via webpack dependency)
* Jasmine and Karma for unit testing of scripts
* Babel


### License

Copyright (c) 2019 Kimberly McConnell

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
