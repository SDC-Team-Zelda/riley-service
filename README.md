# riley-service

## API

1. [GET](#get)
2. [POST](#post)
3. [UPDATE](#update)
4. [DELETE](#delete)

## GET

/api/intro/:id

Makes request for initial application

## POST

/api/

Sends request to store new rental listing, using the following schema:
listing_id: INTEGER (auto-generated)
title: STRING,
description: STRING,
photos: ARRAY of photo urls

## UPDATE

/api/

Updates a single listing based on listing_id

## DELETE

/api/

Deletes a single listing based on listing_id

