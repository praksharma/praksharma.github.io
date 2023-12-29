---
layout: page
title: Guide
permalink: /guide/
description: A guide to modify the website.
nav: false
horizontal: false
---

The configuration is stored in `_config.yml`.  You can play with dark and light themes in the "Theme" section on line 27.

### Navigation bar placement
```python
layout: page # Always page layout
permalink: /publications/  #link within main website
title: publications   # title of the webpage
description: write description
nav: true # whether to put this webpage on the nevigation bar.
nav_order: 1 # this number tells position of the webpage in the top navigation bar.
```

### Adding assets
All the assets are avialable at `/assets`. You can add image in `img` folder.
 
### Icons
This theme is set up to use [Font Awesome icons](https://fontawesome.com/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them.

### Social integration
All the social media links can put in Social integration at line 67 in the config file.

### Adding publication
Here is a nice template. Altmetric is also supported by it is a paid service. Add these bib entries at `_bibliography/papers.bib`.

```python
@article{liu2022enkf,
  bibtex_show={true}, # show copyable bib entry
  title={EnKF data-driven reduced order assimilation system},
  author={Liu, C and Fu, R and Xiao, D and Stefanescu, R and Sharma, P and Zhu, C and Sun, S and Wang, C},
  year={2022},
  publisher={Elsevier},
  journal={Engineering Analysis with Boundary Elements},
  volume={139},
  pages={46--55},
  preview={enkf.jpg}, # a preview image/gif
  abstract={This work presents a new predictive data assimilation framework based on a data-driven reduced order model (DDROM). The DDROM is constructed using an Auto-Encoder and a long short-term memory (LSTM) neural networks. The Auto-Encoder is used to project the high-dimensional dynamics into a lower-dimensional space, which can be referred as a latent space. Then, LSTM deep learning method is used to construct a number of response functions to represent the fluid states and dynamics in the latent space. A data assimilation framework based on the Ensemble Kalman Filter (EnKF) and DDROM model is then proposed. A demonstration of the capabilities of this data assimilation system is illustrated by two test cases including the 2D Burgers’ equation and the flow past a cylinder governed by Navier–Stokes equations.},
  html={https://doi.org/10.1016/j.enganabound.2022.02.016}, # link to the article 
  doi={10.1016/j.enganabound.2022.02.016}, # necessary for dimensions.ai citations count
  selected={false}, # whether to shows on the home page
  dimensions={true}, # dimensions.ai citations count
}
```

### Add repositorie details
Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories. Disable GitHub trophies in `repo_trophies` at line 33.



