# Laravel Nova KaTeX Field

A laravel nova package that allows you to render [KaTeX](https://github.com/KaTeX/KaTeX) expressions.

Based on [vue-katex](https://github.com/lucpotage/vue-katex) package.


## Installation

```
composer require laravelrotebal/nova-katex
```


## Usage

```php
use LaravelRotEbal\NovaKatex\NovaKatex;

NovaKatex::make(__('Equation'), 'equation'),
```


## Examples

```
\ce{Zn^2+  <=>[+ 2OH-][+ 2H+]  $\underset{\text{amphoteres Hydroxid}}{\ce{Zn(OH)2 v}}$  <=>[+ 2OH-][+ 2H+]  $\underset{\text{Hydroxozikat}}{\ce{[Zn(OH)4]^2-}}$}
```

![image](https://user-images.githubusercontent.com/38257723/114186066-15ac1f80-994f-11eb-8ec9-6be5754b1ebe.png "Laravel Nova KaTeX Field on Edit Page")
![image](https://user-images.githubusercontent.com/38257723/114186378-6d4a8b00-994f-11eb-87e4-0e7dff872642.png "Laravel Nova KaTeX Field on Index Page")
![image](https://user-images.githubusercontent.com/38257723/114187263-7556fa80-9950-11eb-9415-ac81e0548a3a.png "Laravel Nova KaTeX Field on Detail Page")
