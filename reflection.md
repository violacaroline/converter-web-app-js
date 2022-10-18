# Reflection

##  Navigate easier Daniel!

### L1
* DEVELOPER.md https://github.com/AndreaViolaCaroline/1dv610-assignment-L1/blob/main/DEVELOPER.md
* README.md https://github.com/AndreaViolaCaroline/1dv610-assignment-L1/blob/main/README.md

### L2
* DEVELOPER.md https://github.com/AndreaViolaCaroline/1dv610-assignment-L2/blob/main/DEVELOPER.md
* README.md https://github.com/AndreaViolaCaroline/1dv610-assignment-L2/blob/main/README.md

## Feedback from Workshop 2 (on the Wizard package)

* Break out all of the if statements in index file to increase readability and maintainability.
* Create another file structure i.e create a folder per measurement unit (wind, temperature, distance etc)

## Overview - What has changed in the Wizard package?

* I broke out all of those if statements into
* MOVED THESE IF STATEMENTS INTO THEIR RESPECTIVE CLASSES SINCE THAT ON IS REALLY THE INFORMATION EXPERT FEATURE ENVY AVOIDED. 
* CREATED A WINDCONVERTER CLASS THAT HOLDS ALL WIND RELATED FILES AND DOES CONVERSION
* I HAVE HALFED THE LONGEST METHOD FROM 90 TO 37 ROWS
* THE BIGGEST CLASS WAS REDUCED FROM 242 TO 80 ROWS
* HOW SHOULD THROWING EXCEPTIONS IN A LIBRARY BE HANDLED? SHOULD YOU? AND THEN DESCRIBE IN THE DOCUMENTATION HOW IT SHOULD BE CAUGHT?
* I split the error handling to different handlers per unit which resulted in ErrorHandling class going down from 260 rows to 60 rows, the largest error handler class is now 80 rows