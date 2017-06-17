# directorytree

### Description ###

This simple program allows you to visualize the structure of a directory (the tree including sub-directories) in a fancy way.
The aim is to enhance productivity, by easily evaluating more productive structures.

The visualization concepts are based on [https://github.com/auino/familytree](auino/familytree).

### Features ###

 * Portable application

### Usage ###

In order to use the program:

 1. clone the repository

```
git clone https://github.com/auino/directorytree.git
```

 2. open the terminal and enter the main `directorytree` directory

 3. run the data generator script:

```
python generatedata.py '~'
```

    where `~` identifies the directory to be parsed.

 4. show the generated graph (macOS command):

```
open index.html
```

### Credits ###

This script is based on http://thecodeplayer.com/walkthrough/css3-family-tree.

### Contacts ###

You can find me on Twitter as [@auino](https://twitter.com/auino).
