# MSA 2022 Python Workshop

Welcome to the Python Workshop! By now, you should be familiar with Jupyter notebooks and writing basic Python code. If you're new to the language then don't worry, this workshop is designed to consolidate the skills you've acquired from the [Python for beginners - Microsoft Learn Path](https://docs.microsoft.com/en-us/learn/paths/beginner-python/). 

To complete this workshop, it's recommended to use a Jupyter notebook as well as a virtual environment so that you don't interfere with other Python versions you might have on your system.

Pre-requisites:
- [Python for beginners - Microsoft Learn Path](https://docs.microsoft.com/en-us/learn/paths/beginner-python/)
- [Visual Studio Code](https://code.visualstudio.com/)
- Python installed on your system as described in the [Get started with Python in Visual Studio](https://docs.microsoft.com/en-us/learn/modules/python-install-vscode/) module in the Microsoft Learn Path linked above

🛑 Please ensure that you have Python 3 installed on your system! The easiest way to check this would be to open your Command Prompt/Terminal and type `python --version`. You should see something like this (for this workshop, don't worry about the numbers after the 3):

![picture 1](../images/652824c8d575e4f7d57e905efa9c660b311ace28b6319a2e7f1c6e030e983760.png)

💡This workshop should take roughly 15-30 minutes, but in case you get stuck, there are answers provided below (note that these answers are just one way out of an almost infinite number of ways to solve any programming exercise and are not even necessarily the best way, so don't worry if your answer is longer or different!)

## Introduction

The year is 2496. 

You're an astronaut on a space station in the Alpha Centauri star system located 4.1 x 10<sup>13</sup> kilometres from the Earth (or in other words, a **really** long way away from home). 

You're conducting scientific experiments and generally minding your own business while listening to lo-fi hip-hop (yes, it's still a thing even in the 25th century) when suddenly, you receive an unexpected transmission.

Unfortunately, your advanced systems can only decode this transmission into a file format known as comma-separated value files (more commonly referred to by 21st century millennials as CSV files) and none of your systems can decipher what's in them.

Fortunately, your years of training at the Academy had a course on Python (in case you ever needed to use one of the *ancient languages*).

- csv with mix of symbols, letters, and numbers
- parse through and get all numbers and letters
- add numbers up and get co-ordinates
- parse another csv file and convert into dict
- get keys of dict whose values match co-ordinates
- get letters from first csv file and combine them into a string
- string is an instruction e.g. first letter of first key, second letter of second key etc
- find letters within keys that match instruction
- sort them to spell out a word

> ## Exercise 1

Investigate the transmission by: 
- Opening the CSV file called transmission.csv (located in the 2022 Phase 1 Python folder)
    - [Hint](https://docs.python.org/3/library/csv.html#:~:text=A%20short%20usage%20example)
- Inserting each line of the file into a list and printing it

<details>
<summary>Exercise 1 Answer</summary>

```python
from pprint import pprint # for printing data structures in a more prettier way
with open("transmission.csv") as file:
    transmission = []
    for line in file:
        line = line.strip()
        transmission.append(line.split(","))
pprint(transmission)
```

</details>

> ## Exercise 2

<details>
<summary>Exercise 2 Answer</summary>

[Master solution - REMOVE BEFORE MAKING PUBLIC](https://www.shorturl.at/ehvD4)

</details>

> ## Exercise 3

Use try-catch to sum up all numbers in frequencies column and store sums

<details>
<summary>Exercise 3 Answer</summary>

```python

```

</details>

> ## Exercise 4

Find the hidden message in the transmission

- **FIRST XX PEOPLE WHO DM THE MESSSAGE TO AN MSP AND THEIR NOTEBOOK WIN A PRIZE?!**

<details>
<summary>Exercise 4 Answer</summary>

[Master solution - REMOVE BEFORE MAKING PUBLIC](https://www.shorturl.at/ehvD4)

</details>