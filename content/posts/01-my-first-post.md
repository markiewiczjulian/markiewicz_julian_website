---
title: "My First Post"
date: 2020-09-07T10:51:59+01:00
draft: false
tags: [html, github]
cover: "images/posts/01/cover.webp"
---

> _This post was originally published on [dev.to](https://dev.to/markiewiczjulian/my-first-time-using-github-actions-4kcd) website._

So Hi! Kinda awkward to write a post on Dev.to. I use tricks, tips, reading articles from this website almost **every day**, but I have never written a post in here (so for me this is a bit of a big deal, but from now on I will try to muster my excitement).

Github actions are something I was hoping to try sooner but there had always been an excuse. But with the announcement of [actionshackaton](https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn) there are no excuses to dive in and learn something new.

### My Workflow

I decided to do something which is unnecessary and thus would neatly fell into category of wacky wildcards. I decided to prepare yoda translator for issue and pull request comments. In order to start using this action you have to prepare few things.

### Prerequisites

1. You have to create a secret (if you don't know what I'm talking about look [here](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)), inside your repository where you intend to use the action, with Github Access Token inside ([here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) is Github doc about how to do it step by step). This is required in order for the action to work.
2. Also if you want to make more than 60 API calls daily (this is 5 calls per hour), you have to create a secret with a token from [funtranslations](https://funtranslations.com/api/yoda) website.

### How to use it

After you have added the Github Access Token as a secret you can start adding the configuration for your action within destined project. Here you can follow [this](https://docs.github.com/en/actions/language-and-framework-guides/using-nodejs-with-github-actions) doc from Github.

To summarise what needs to be done:

- create, in the root of your project, directory called .github,
- then within this directory add a folder called workflows,
- inside workflows folder add main.yml file,

After all this, inside previously created file, put code which looks similar to this one (Github user name will differ so you have to change the part which uses markiewiczjulian/yoda-translation-action@master and also you could have named your secrets differently to me, so sections with properties: githubAccessToken, translationApiToken, would be your point of interest).

```yaml
name: Yoda translation

on:
  pull_request_review_comment:
    types: [created, edited]
  issue_comment:
    types: [created]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
        name: Use Node.js 12.X
      - run: npm install
      - uses: markiewiczjulian/yoda-translation-action@master
        name: use yoda-translation-action
        with:
          githubAccessToken: ${{secrets.GIT_ACCESS_TOKEN}}
          translationApiToken: ${{secrets.TRANSLATION_API_TOKEN}}
      - uses: actions/setup-node@v1
        name: use actions/setup-node
        with:
          node-version: "12.X"
        env:
          CI: true
```

Remember that translationApiToken is optional and if you don't have it (you want to use a free tier on funtranslations), you simply don't include it in the yml file.

## How this works

After you or your colleague submit a comment inside an issue or pull request the action gets triggered. Action will replace the message to translation from funtranslations and also add the info at the text beginning (`[translated from English, to yodish]:`).
[test](https://markiewiczjulian.com/test_not_working)
![](/images/posts/01/01.webp)

### Submission Category:

Wacky Wildcards

### Yaml File or Link to Code

Here you can check out the code of yoda action [link](https://github.com/markiewiczjulian/yoda-translation-action).
You can also check the yoda-translation-action-test repository to see simple node.js app where I have used this action [here](https://github.com/markiewiczjulian/yoda-translation-action-test).
