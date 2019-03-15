# _Super Galactic Age Calulator_

#### _This program will accept a user-inputed Earth age and output their age on different planets on the solar system, along with how many of years they have left to live on said planet._

#### By _**Kimberly McConnell**_

## Description

_Want to know how many Mercury years you'd have left to live (on average) if you lived on Mercury? Asside from the fact that you'd have long become human toast, that is; we'll assume technology has progresses to make this possible. Simply enter your age to get started. To see how long you'd have left to live, enter the average life expectancy that you'd experience on Earth._

Note: _This program will calculate life expectancy based on data you enter. I am not an expert in life expectancy, and the calculator is absolutely not very accurate. Calculations are based on my own broad estimates based on data gathered in some quick Google searches (links listed further down).

## Specs

* Calculate the user's age from their birth year with Date object

* Create a User object that contains their Earth Age as entered <br>
  _Example: newUser {earthAge: 28};_

* Convert earth age into Mercury years <br>
_Conversion: Mercury year = 0.24 earth years_

* Convert earth age into Venus years <br>
  _Conversion: Venus year = 0.62 earth years_

* Convert earth age into Mars years <br>
  _Conversion: Mars year = 1.88 earth years_

* Convert earth age into Jupiter years <br>
  _Conversion: Jupiter year = 11.86 earth years_
  _Jupiter years will be rounded to one decimal to more accurately reflect age._

Two possibilities for life expectancy-

  Possibility One:
  * Converts user-inputed life expectancy to galactic years

  * Calculates the difference between galactic user age and galactic user expectancy and outputs result.
  If positive, tell user how long they have left to live
    * (life expectancy) - (user galactic age)

  * If negative, tell user how many years they have lived past their life expectancy

  Possibility Two:
  * Takes user-entered values for the following:
    * Country of residence
    * Gender (three options)
    * Activity level
    * Smoker (boolean value)
    * Food quality

  * Calculates average life expectancy for user based on data provided
    * Assign each value inputed a conversion factor and calculate from there

  * Calculates the difference between galactic user age and galactic user expectancy and outputs result.
  If positive, tell user how long they have left to live
    * (life expectancy) - (user galactic age)

  * If negative, tell user how many years they have lived past their life expectancy




## Setup/Installation Requirements

* Clone repository from github
* run ```$ npm install``` in the terminal
* run ```$ npm run start``` in the terminal to host the webpage on a loca server



## Resources Used for Life Expectancy Calculator:
* https://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy
* https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3395188/
* https://www.nih.gov/news-events/news-releases/nih-study-finds-extreme-obesity-may-shorten-life-expectancy-14-years
* I made an attempt to find data on non-binary/gender-queer life expectancies, but data seems to be laking in that area. I found nothing conclusive; therefore the calculator simply uses an approximate average of male and female lifespans.



## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**
