# Quantum benchmark Zoo

The official documentation for quantum benchmark zoo: 
[Access the website](https://quantumbenchmarkzoo.org)

## Contributing

You can help improve the documentation!

- [Open an issue](https://github.com/v-gilbert/quantumbenchmarkzoo/issues/new) to report an error or make a suggestion.
- [Create a pull request](https://github.com/v-gilbert/quantumbenchmarkzoo/issues/new) to propose changes to the documentation.


### Tutorials

Here is a list of tutorials to ease the modifications on the quantum benchmark zoo.

- Creation of a [new page](https://github.com/v-gilbert/quantumbenchmarkzoo/blob/master/doc/page-creation-tutorial.md)
- Git [good practices](https://github.com/v-gilbert/quantumbenchmarkzoo/blob/master/doc/git-good-practices.md) 

### Templates

Template examples are available in the doc directory:

- [Open the protocol template](https://github.com/v-gilbert/quantumbenchmarkzoo/blob/master/doc/protocol-template.md) with a file editor to see its content
- [Open the table file](https://github.com/v-gilbert/quantumbenchmarkzoo/blob/master/doc/) with libre office calc or Excel to see its content

### Modifications

This repository is using Jekyll, an automated tool that reads Markdown content and transforms it into HTML content. Files that should be modified are
- 'content': Contains the website text content in markdown.
- 'img': Contains the images stored on the website.
- 'tables': Contains the .ods tables automatically parsed to generate HTML tables.

**Importantly, you should never do any modifications in the directory _site as this directory is automatically reinitialized at each build**

## Building

These build instructions will help you set up a local version of the site.

### Requirements

This project uses Bundler to install and run Jekyll. Bundler manages Ruby gem dependencies, reduces Jekyll build errors, and prevents environment-related bugs. To install Bundler, you must install Ruby.

- [Ruby](https://www.ruby-lang.org) (3.1.2p20)
- [Bundler](https://bundler.io)

### Installation

1. `git clone https://github.com/v-gilbert/quantumbenchmarkzoo.git` - Download the repository to your computer.
1. `cd quantumbenchmarkzoo` - Change the working directory to the project root.
1. `bundle install` - Install Jekyll and other dependencies.

### Run local site

1. `bundle exec jekyll serve -b ""` - Build the site and serve it locally.
1. Open `http://localhost:4000` in your browser.

