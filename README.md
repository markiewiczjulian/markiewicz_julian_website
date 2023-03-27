# markiewicz_julian_website

This repository contains my personal website which is on push (using [this](https://github.com/peaceiris/actions-hugo) github action) automatically rendered and pushed to another [repository](https://github.com/markiewiczjulian/markiewiczjulian.github.io) where is served via GitHub Pages. You can view it [here](https://markiewiczjulian.com/).

This website was heavily inspired by shibumi [hugo-theme-hello-friend-ng](https://github.com/shibumi/hugo-theme-hello-friend-ng) and panr [hugo-theme-hello-friend](https://github.com/panr/hugo-theme-hello-friend) themes.

# How to run

To run this website locally you should install Hugo at least version 0.74.x (extended version). After this you can run:

`hugo server -t hello-friend-ng` 

this will spin up the server with everything you will need. Alternatively you can use only the theme. In such case create new empty hugo site with:

`hugo new site quickstart`

and move whole directory `/YOUR_PROJECT_ADDRESS/themes/hello-friend-ng` to the themes folder in your new application. Then you can run your site.

To generate ready to use SSR code which needs to only be placed on your server use command:

`hugo -t hello-friend-ng`

all generated files can be found under public directory

# How to use

This website works similar to the original that was based on [this](https://github.com/shibumi/hugo-theme-hello-friend-ng) one and [this](https://github.com/panr/hugo-theme-hello-friend) one, so I will not describe all options that can be used in conf.toml. I will however leave the example toml file config_example.toml in root of project which describes all options that can be defined for whole site.

Two noticeable differences are the projects directory which allows you to add projects with description, image (there is also option to click and show the image in full resolution) and url to project.

![Screenshot from 2020-11-23 13-37-21](https://user-images.githubusercontent.com/39520658/99962761-0d34bd00-2d91-11eb-9f22-c4db743697f7.png)

To add image to the project site add `mainimg` property in front matter and specify the image url or path.

To add the repository address to the project you can use `codeaddress` property.

```
---
title: "News reader"
date: 2020-11-18T10:51:59+01:00
draft: false
tags: [html, github, news, angular]
mainimg: "/images/projects/news_reader.webp"
codeaddress: "https://github.com/markiewiczjulian/news_aggregator"
---
```
