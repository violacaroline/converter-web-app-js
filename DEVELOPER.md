## Vision

The Wizard application is a converter that will convert some of the most common units for wind, temperature, distance, weight and volume for its user.

The app is mirroring the Wizard package entirely to show what conversions are available. 
A wish to extend the app would call for an extension on the package primarily.

## Requirements

* A user should be able to return to home page.
* A user should be able to convert wind between the units: kmh, ms, fts, mph, knots.
* A user should be able to convert temperature between the units fahrenheit and celsius.
* A user should be able to convert distances in yards and miles to distances in meters and kilometers.
* A user should be able to convert weight in ounces and pounds to grams and kilograms.
* A user should be able to convert volume in pints and gallons to litres.
* A user should get an informative error message displayed if conversion failed.
* A user should not have to choose the values again if user stays on page when previous conversion fails.
* The values should clear out if user leaves page.

## Use-Cases

### UC1 User returns to home page

Precondition: User is located on either of the unit-pages (wind, temperature, distance, weight, volume)

Postcondition: User is returned to "home" page (with "The Wizard" and a brief introduction to the application).

1. User presses "The Wizard" header in navigation bar
2. User is returned to home page where The Wizard and a brief application introduction is displayed.

### UC2 Convert wind

Precondition: User presses "Wind" button in the navigation bar

Postcondition: A value is converted and displayed to end user.

#### Main scenario
1. Starts when a user wants to convert a certain value from one wind speed unit to another
2. User inputs the value to convert in the "value"-field
3. User selects a unit to convert FROM in the dropdown list
4. User selects a unit to convert TO in the dropdown list
5. User presses "Convert!" button and the converted value is displayed on the screen.

#### Alternate scenarios
* User leaves value blank
* User does not select a unit to convert from
* User does not select a unit to convert to
* User tries to convert from and to the same unit
* An error message is displayed on the screen
* User stays on page and can correct its inputs

### UC3 Convert Temperature

Precondition: User presses "Temperature" button in the navigation bar

Postcondition: A value is converted and displayed to end user.

#### Main scenario
1. Starts when a user wants to convert a certain value from one temperature unit to another
2. User inputs the value to convert in the "value" field
3. User selects a unit to convert FROM in the dropdown list
4. User selects a unit to convert TO in the dropdown list
5. User presses "Convert!" button and the converted value is displayed on the screen.

#### Alternate scenarios
* User leaves value blank
* User does not select a unit to convert from
* User does not select a unit to convert to
* User tries to convert from and to the same unit
* An error message is displayed on the screen
* User stays on page and can correct its inputs

### UC4 Convert Distance

Precondition: User presses "Distance" button in the navigation bar

Postcondition: A value is converted and displayed to end user.

#### Main scenario
1. Starts when a user wants to convert a certain value from one distance unit to another
2. User inputs the value to convert in the "value" field
3. User selects a unit to convert FROM in the dropdown list
4. User selects a unit to convert TO in the dropdown list
5. User presses "Convert!" button and the converted value is displayed on the screen.

#### Alternate scenarios
* User leaves value blank
* User does not select a unit to convert from
* User does not select a unit to convert to
* User tries to convert from and to the same unit
* An error message is displayed on the screen
* User stays on page and can correct its inputs

### UC5 Convert Weight

Precondition: User presses "Weight" button in the navigation bar

Postcondition: A value is converted and displayed to end user.

#### Main scenario
1. Starts when a user wants to convert a certain value from one weight unit to another
2. User inputs the value to convert in the "value" field
3. User selects a unit to convert FROM in the dropdown list
4. User selects a unit to convert TO in the dropdown list
5. User presses "Convert!" button and the converted value is displayed on the screen.

#### Alternate scenarios
* User leaves value blank
* User does not select a unit to convert from
* User does not select a unit to convert to
* User tries to convert from and to the same unit
* An error message is displayed on the screen
* User stays on page and can correct its inputs

### UC6 Convert Volume

Precondition: User presses "Volume" button in the navigation bar

Postcondition: A value is converted and displayed to end user.

#### Main scenario
1. Starts when a user wants to convert a certain value from one volume unit to another
2. User inputs the value to convert in the "value" field
3. User selects a unit to convert FROM in the dropdown list
4. User selects a unit to convert TO in the dropdown list
5. User presses "Convert!" button and the converted value is displayed on the screen.

#### Alternate scenarios
* User leaves value blank
* User does not select a unit to convert from
* User does not select a unit to convert to
* User tries to convert from and to the same unit
* An error message is displayed on the screen
* User stays on page and can correct its inputs

## Tests

### TestCase 1 Return to home page

Use case: UC1

#### Test steps

* Start the app
* System shows home page
* Press "Wind" button
* Press "The Wizard" in the upper left corner

#### Expected

* User is returned to home page

| Test  | UC1  |
| ----- |----- |
| TC1   |  OK  |
| COVERAGE & SUCCESS  |  1/1 OK  |

### TestCase 2 Convert wind

Use case: UC2

#### Test steps Main Scenario TC2.1

* Start the app
* System shows home page
* Press "Wind" button
* Fill in value field: 100
* Choose Kilometer per hour in the drop down list
* Choose Meter per second in the drop down list
* Press "Convert!" button

#### Expected

* App displays "Converted value: 27.8"

#### Test steps Alternate Scenario TC2.2

* Start the app
* System shows home page
* Press "Wind" button
* Fills in a **negative** value in the value field: -100
* Choose Kilometer per hour in the drop down list
* Choose Meter per second in the drop down list
* Press "Convert!" button

#### Expected

* App displays "Number must be positive"

| Test  | UC2  |
| ----- |----- |
| TC2.1   |  OK  |
| TC2.2   |  OK  |
| COVERAGE & SUCCESS  |  2/2 OK  |

### TestCase 3 Convert temperature

Use case: UC3

#### Test steps Main Scenario TC3.1

* Start the app
* System shows home page
* Press "Temperature" button
* Fill in value field: -100
* Choose Fahrenheit in the drop down list
* Press "Convert!" button

#### Expected

* App displays "Converted value: -73.3"

#### Test steps Alternate Scenario TC3.2

* Start the app
* System shows home page
* Press "Temperature" button
* Leave value field blank
* Choose Celsius in the drop down list
* Press "Convert!" button

#### Expected

* App displays "You have not provided all necessary info (unit to convert from/to or the value)"

| Test  | UC3  |
| ----- |----- |
| TC3.1   |  OK  |
| TC3.2   |  OK  |
| COVERAGE & SUCCESS  |  2/2 OK  |

### TestCase 4 Convert distance

Use case: UC4

#### Test steps Main Scenario TC4.1

* Start the app
* System shows home page
* Press "Distance" button
* Fill in value field: 100
* Choose Yards in the drop down list
* Choose Meters in the drop down list
* Press "Convert!" button

#### Expected

* App displays "Converted value: 91.4"

#### Test steps Alternate Scenario TC4.2

* Start the app
* System shows home page
* Press "Distance" button
* Fill in value field: 100
* Choose Yards in the drop down list
* Leave "--Please choose a unit to convert TO--" selected
* Press "Convert!" button

#### Expected

* App displays "You have not provided all necessary info (unit to convert from/to or the value)"

| Test  | UC4  |
| ----- |----- |
| TC4.1   |  OK  |
| TC4.2   |  OK  |
| COVERAGE & SUCCESS  |  2/2 OK  |

### TestCase 5 Convert weight

Use case: UC5

#### Test steps Main Scenario TC5.1

* Start the app
* System shows home page
* Press "Weight" button
* Fill in value field: 100
* Choose Ounces in the drop down list
* Choose Grams in the drop down list
* Press "Convert!" button

#### Expected

* App displays "Converted value: 2835"

#### Test steps Alternate Scenario TC5.2

* Start the app
* System shows home page
* Press "Weight" button
* Fill in value field: 100
* Leave "--Please choose a unit to convert FROM--" selected
* Choose Kilograms in the drop down list
* Press "Convert!" button

#### Expected

* App displays "You have not provided all necessary info (unit to convert from/to or the value)"

| Test  | UC5  |
| ----- |----- |
| TC5.1   |  OK  |
| TC5.2   |  OK  |
| COVERAGE & SUCCESS  |  2/2 OK  |

### TestCase 6 Convert volume

Use case: UC6

#### Test steps Main Scenario TC6.1

* Start the app
* System shows home page
* Press "Volume" button
* Fill in value field: 100
* Choose Gallons in the drop down list
* Press "Convert!" button

#### Expected

* App displays "Converted value: 378.5"

#### Test steps Alternate Scenario TC6.2

* Start the app
* System shows home page
* Press "Volume" button
* Fills in a **negative** value in the value field: -100
* Choose Pints in the drop down list
* Press "Convert!" button

#### Expected

* App displays "Number must be positive"

#### Test steps Alternate Scenario TC6.3

* Start the app
* System shows home page
* Press "Volume" button
* Fill in value in the value field: 100
* Leave "--Please choose a unit to convert FROM--" selected
* Press "Convert!" button

#### Expected

* App displays "You have not provided all necessary info (unit to convert from/to or the value)"

| Test  | UC6  | Fixes |
| ----- |----- | ----- |
| TC6.1   |  OK  |  |
| TC6.2   |  OK  |  |
| TC6.3   |  NOT OK  | Fixed bug in package - OK |
| COVERAGE & SUCCESS  |  2/3 OK  | 3/3 OK |