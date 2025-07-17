Components explanation:

IN this "level" of the Repository, there are only react Components!

Using Functions in react:
This can be a little tricky for begineers like me, but it is pretty simple all you have to do is use {} and inside of it type your function without ().
** Example: {functionExample} **

About Footer and Header Componets:
Those are usual and common components they are dynamic and shouldnt be used as a modular component (For higher readability of the site and function).
In this case, importing { Link } from react-router-dom, creates a dynamical link which doesnt require for User to have to reload once again as User clicks on a link all you have to give is the route by using the keyword to="" and specify the route you will use!
** Example: <Link to="/">Home</Link> - this will send you to the default route/page! **
** Disclaimer: Here the Link doesnt have a existing route, you need to create it. For more information go to _ Examples/app_1.jsx _. there will be the full usage of Link and creating the routes for it!! **

Notes: 1. The usage of html classes equivalent in react is by className. 2. id is the same. 3. 