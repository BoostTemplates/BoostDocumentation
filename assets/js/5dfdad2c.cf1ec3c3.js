"use strict";(self.webpackChunkboost_documentation=self.webpackChunkboost_documentation||[]).push([[456],{6837:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Boost Intro","href":"/BoostDocumentation/docs/intro","docId":"intro","unlisted":false},{"type":"category","label":"Tutorial - Basics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Create Task","href":"/BoostDocumentation/docs/tutorial-basics/create_task","docId":"tutorial-basics/create_task","unlisted":false},{"type":"link","label":"Create Product","href":"/BoostDocumentation/docs/tutorial-basics/create_product","docId":"tutorial-basics/create_product","unlisted":false},{"type":"link","label":"Create Public Route","href":"/BoostDocumentation/docs/tutorial-basics/create_public_route","docId":"tutorial-basics/create_public_route","unlisted":false},{"type":"link","label":"Create Private Route","href":"/BoostDocumentation/docs/tutorial-basics/create_priv_route","docId":"tutorial-basics/create_priv_route","unlisted":false},{"type":"link","label":"Configure BOOST","href":"/BoostDocumentation/docs/tutorial-basics/configure_BOOST","docId":"tutorial-basics/configure_BOOST","unlisted":false},{"type":"link","label":"Congratulations!","href":"/BoostDocumentation/docs/tutorial-basics/congratulations","docId":"tutorial-basics/congratulations","unlisted":false}],"href":"/BoostDocumentation/docs/category/tutorial---basics"},{"type":"category","label":"Features","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Tasks","href":"/BoostDocumentation/docs/features/tasks","docId":"features/tasks","unlisted":false},{"type":"link","label":"User Management","href":"/BoostDocumentation/docs/features/user_management","docId":"features/user_management","unlisted":false},{"type":"link","label":"Shop","href":"/BoostDocumentation/docs/features/shop","docId":"features/shop","unlisted":false},{"type":"link","label":"Routes API","href":"/BoostDocumentation/docs/features/routes","docId":"features/routes","unlisted":false},{"type":"link","label":"Configuration","href":"/BoostDocumentation/docs/features/configuration","docId":"features/configuration","unlisted":false},{"type":"link","label":"Certificates","href":"/BoostDocumentation/docs/features/certificates","docId":"features/certificates","unlisted":false},{"type":"link","label":"Nginx Configuration Documentation","href":"/BoostDocumentation/docs/features/nginx","docId":"features/nginx","unlisted":false},{"type":"link","label":"Docker Containers","href":"/BoostDocumentation/docs/features/Docker","docId":"features/Docker","unlisted":false}],"href":"/BoostDocumentation/docs/category/features"}]},"docs":{"features/certificates":{"id":"features/certificates","title":"Certificates","description":"We recommend using certbot after setting nginx on your server to maintain setup and automatic certificates renewal.","sidebar":"tutorialSidebar"},"features/configuration":{"id":"features/configuration","title":"Configuration","description":"BOOST provides the following configurations necessary for the operation of the server template. This section outlines the key settings required for administrative access, task scheduling with Celery, payment processing via Stripe, and email notifications through SMTP. All of these features can be edit and change in .env file.","sidebar":"tutorialSidebar"},"features/Docker":{"id":"features/Docker","title":"Docker Containers","description":"This template provide two docker containers operating in one network:","sidebar":"tutorialSidebar"},"features/nginx":{"id":"features/nginx","title":"Nginx Configuration Documentation","description":"Instal nginx:","sidebar":"tutorialSidebar"},"features/routes":{"id":"features/routes","title":"Routes API","description":"Boost provides structured support to create public, private, and admin routes, facilitating a modular approach to route management.","sidebar":"tutorialSidebar"},"features/shop":{"id":"features/shop","title":"Shop","description":"Boost provides EasyShop integration with stripe. It is focused around providing user easy way to fetch products from stripe and add programatic rewards.","sidebar":"tutorialSidebar"},"features/tasks":{"id":"features/tasks","title":"Tasks","description":"One of most important parts of having algorithms running on the server is to ability to schedule them to execute some work. This can be achieved with Boosts tasks distributed via Celery.","sidebar":"tutorialSidebar"},"features/user_management":{"id":"features/user_management","title":"User Management","description":"Boost provides basic of usermanagement, so you can start your app without worrying about how to log in users, store them or manage their password. All passwords are hashed, and user can be easily extented by modyfing models/user.py.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Boost Intro","description":"Boost your python server into production!","sidebar":"tutorialSidebar"},"tutorial-basics/configure_BOOST":{"id":"tutorial-basics/configure_BOOST","title":"Configure BOOST","description":"Boost provides .env file in root directory, which allows you to configure it with all of your services:","sidebar":"tutorialSidebar"},"tutorial-basics/congratulations":{"id":"tutorial-basics/congratulations","title":"Congratulations!","description":"You have just learned the basics of Boost and made some changes to the initial template.","sidebar":"tutorialSidebar"},"tutorial-basics/create_priv_route":{"id":"tutorial-basics/create_priv_route","title":"Create Private Route","description":"Private routes are different from public in way that you need to provide access token before accessing them. Those routes should be provided only to loged users:","sidebar":"tutorialSidebar"},"tutorial-basics/create_product":{"id":"tutorial-basics/create_product","title":"Create Product","description":"Products allow for easy integration with your stripe shop.","sidebar":"tutorialSidebar"},"tutorial-basics/create_public_route":{"id":"tutorial-basics/create_public_route","title":"Create Public Route","description":"This is standard feature provided by Flask. Boost divides routes and forms into seperate files, and these are divided into private, public, and only accessible by admin. All files serving routes and forms need to be registered (imported) to main/init.py.","sidebar":"tutorialSidebar"},"tutorial-basics/create_task":{"id":"tutorial-basics/create_task","title":"Create Task","description":"One of most important parts of having algorithms running on the server is to ability to schedule them to execute some work. This can be achieved with Boosts tasks distributed via Celery.","sidebar":"tutorialSidebar"}}}}')}}]);