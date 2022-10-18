# Reflection

##  Navigate easier Daniel!

### L1
* DEVELOPER.md https://github.com/AndreaViolaCaroline/1dv610-assignment-L1/blob/main/DEVELOPER.md
* README.md https://github.com/AndreaViolaCaroline/1dv610-assignment-L1/blob/main/README.md

### L2
* DEVELOPER.md https://github.com/AndreaViolaCaroline/1dv610-assignment-L2/blob/main/DEVELOPER.md
* README.md https://github.com/AndreaViolaCaroline/1dv610-assignment-L2/blob/main/README.md

## Feedback from Workshop 2 (on the Wizard package)

The Wizard package: https://github.com/AndreaViolaCaroline/1dv610-assignment-L1

* Break out all of the if statements in index file to increase readability and maintainability.
* Create another file structure i.e create a folder per measurement unit (wind, temperature, distance etc)

## Overview - What has changed in the Wizard package?

The Wizard package: https://github.com/AndreaViolaCaroline/1dv610-assignment-L1

* I broke out all of those if statements into functions in a lower abstraction layer closer to where the algorithms for a certain type of conversion is located - avoiding feature envy (Robert C Martin, Clean Code, p.293)
* I structured the project as such that instead of having all files loose in the src folder, files now belong to a certain measurement unit folder that contains the algorithms and the converter. I also put all the error handling into a seperate folder with one generic error handling file as well as error handling specific on each measurement unit (since the package converts only a selection of units) - improving cohesion (Robert C Martin, Clean Code, p.140)
* The longest method has therefor decreased from 90 to 37 rows
* The biggest class was reduced from 262 rows to 80
* I ran into a rather interesting problem whilst refactoring my package - I have by now written a few apps and I have used a few libraries - the question that arose: "What the heck - I try AND catch errors in here (as in within the package) - is that the right way to go about it? If I catch it, then what can the user of the library actually do to handle an error as he/she wishes?" I'm not even sure this is avalid concern or if I am just complicating things. However, I googled a tiny bit and in the end I decided, my library will ONLY throw errors and then I will inform lib-users on what errors to expect and how to catch them.

## Reflections per chapter in Clean Code

Overall, I feel like I have managed to reduce sizes of classes/methods and maybe place them more logically clean within folders. I do feel though (this becomes extra clear in my first reflection on chapter 2) that my package is "deeper" and that I have methods in several classes that really does/is called the same thing but with something extra happening on top. E.g the convertedValue travels from the lowest abstraction where the algortihm is chosen, then on the next level there is errorhandling making sure that all values needed to the conversion is in place and then there is the highest layer which is the package interface - my thoughts are, if this is good or not..?

### Chapter 2

![Better name needed? ](./images/worse-name.png)

Looking at this method in my package, I can find that it does two things really, such methods are hard to give a meaningful and clear name. 1. It selects the correct algorithm 2. It actually converts and returns the value. I chose to name it after the most important thing it does i.e converts the original value, but Im thinking it could possibly be changed to getCorrectAlgorithm, beacause higher in the abstraction I am using this method in another method that is called convertValue.. The name per see is clear, but is it really describing what the method does..?

### Chapter 3

This was my biggest method, it was in the package interface (I know you wanted to be able to read the screen shots, but in this case it is not the point, look how long it is..):

![Mega method? ](./images/biggest-method.png)

"There's just too much going on there on different levels of abstraction" (Robert C Martin, Clean Code, p.33).

If I feel like I managed to do something good during my refactoring it is that I made all classes and methods smaller!
"The first rule of functions is that they should be small. The second rule of functions is that they should be smaller than that" (Robert C Martin, Clean Code, p.34).

After transforming my package basically pushing all that selective type code to lower abstracted classes this is how it turned out:

![Not so mega method? ](./images/biggest-method-transformed.png)

### Chapter 4

This is from my Wizard App, L2. I started out by religously commenting on each tiny little element I could - I believe this is something that we did in year one whilst writing web components. "What purpose does this comment serve? It’s certainly not more informative than the
code. It does not justify the code, or provide intent or rationale." (Robert C Martin, Clean Code, p.61) I have to agree with CC - I got annoyed typing them and I also got annoyed reading them (they are removed). 

![Reduntant comments](./images/noisy-comments.png)

### Chapter 5

Vertical formatting was probably the most important refactoring that I performed on my lib. "Small files are usually easier to understand than large files are." (Robert C Martin, Clean Code, p.108). You can see it in the following two screenshots, the difference in the file structure, the aftermath was folders containing files that held the algorithms as well as another file being responsible for the conversion and error handling. Meaning, formatting also improves cohesiveness! I have also followed the NewsPaper metaphor with the higher level abstraction up top.

![File structure before](./images/file-structure.png)
![File structure after](./images/file-structure-L2.png)


"If openness separates concepts, then vertical density implies close association." (Robert C Martin, Clean Code, p.108). In the following photo you can see a group of "class members" (web component style). The two up top are generic elements that I use to grab data from the view - they are placed closely. Then I create some spacing and place the wizard that does the calculation.

![Vertical density](./images/vertical-density.png)

### Chapter 6
### Chapter 7
### Chapter 8
### Chapter 9
### Chapter 10
### Chapter 11

