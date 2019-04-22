# mvc-react

# Description
Service-Side only React powered MVC starter kit.

I have taken the type of MVC patterns I have seen in Enterprise .net appliations and created a very similar architecture.

I have nested a db folder inside of the services folder with test data. This needs to be replaced with the database of your choice (SQLite)

## Philosphy
Take the new and make it look old. If Fender does it for guitars, why can't we do it for websites?

The React is *static*. It is rendered to HTML.
--
## Why?
Traditional SSR is cool and all, but this can produce apps that don't require client side javascript.

The Internet existed before Javascript did. You can make CRUD apps without Javascript.

## How long does a React SSR page take to render?

Doesn't matter. Dictionary based caching can get round many problems as long as it is invalidated correctly. No dynamic elements remember.

## Server side Redux?

Why? You have a database. Persist *THAT* state.

## Why not Typescript?

It limits the target audience of the starter pack. If you like typescript, just gradually change over.

## Favourite Book

[Don't Make Me Think](https://en.wikipedia.org/wiki/Don%27t_Make_Me_Think)

