# markiewicz_julian_website

This repository serves my personal website via GitHub Pages. You can view it [here](https://markiewiczjulian.github.io/).

This website was heavily inspired by shibumi [hugo-theme-hello-friend-ng](https://github.com/shibumi/hugo-theme-hello-friend-ng) and panr [hugo-theme-hello-friend](https://github.com/panr/hugo-theme-hello-friend) themes.

# How to run

To run this website locally you should install Hugo at least version 0.74.x (extended version). After this you can run:

`hugo server -t hello-friend-ng`

this will spin up the server with everything you will need. Alternatively you can use only the theme. In such case create new empty hugo site with:

`hugo new site quickstart`

and move whole directory `/YOUR_PROJECT_ADDRESS/themes/hello-friend-ng` to the themes folder in your new application. Then you can run your site.

# How to use

This website works similar to the original that was based on [this](https://github.com/shibumi/hugo-theme-hello-friend-ng) one and [this](https://github.com/panr/hugo-theme-hello-friend)) one, so I will not describe all options that can be used in conf.toml. I will however leave the example toml file config_example.toml in root of project which describes all options that can be defined for whole site.

Two noticeable differences are the projects directory which allows you to add projects with description, image (there is also option to click and show the image in full resolution) and url to project.

![Screenshot from 2020-11-22 11-08-57](https://user-images.githubusercontent.com/39520658/99900922-2a935980-2cb3-11eb-9489-b7e57c9d324a.png)

To add image to the project site add `mainimg` property in front matter and specify the image url or path.

To add the repository address to the project you can use `codeaddress` property.

![Screenshot from 2020-11-21 23-27-19](https://user-images.githubusercontent.com/39520658/99888970-246c9100-2c51-11eb-8821-f2c66657ea97.png)
