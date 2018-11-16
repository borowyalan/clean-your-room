# Project overview

## Install and Configuration of the 

1. Copy zip file to Desktop
2. Unpack the zip file here
3. Install nodejs
4. Insert proper excel to the directory
5. Rename it to 'porzadki'
6. Insert VBA command to the excel workbook (Alt + F11)
7. Change the type of excel file to .xlsm
8. Delete the old .xlsx file
9. It should work

List of features

## Technologies used

This projects is composed of three standalone and cooperating pieces of software.

1. Client-side
2. Server-side
3. Data presentation - Website

### Client-side

The main purpose of he endeavor was to make the process of handing over the data from the 'source of truth' (here, an `excel file`) to a user as easy and convenient as possible. This was achieved by making the synchronisation between a `client` and a `website` that displays data frictionless.
When a client-side user saves the file, it automatically triggers the process getting and saving the proper data to the server. It informs the user about starting the process, as well as it's completion or failure.

### Server-side

In case of internet connection present on the client-side, the request is sent to the `server`, that then saves it to the `database` as a collection of user together with their points.

### Data presentation => Website - bursa-porzadki.pl

Website presents the fetched data in a form of a table. 