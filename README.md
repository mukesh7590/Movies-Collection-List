# Movies-Collection


## About The Project

User can make his own collection list of movies. where user can add & remove movies in their own collection list. 

## Features
-  Add movie into your Collection Bucket List. you can also add movies into your favorite.
-  Track each movie. These are the 4 statuses of a movie:
   -  Add - Mark the movie as Add, to PUSH the movie into ADD-Bucket-List. 
   -  Unadd - Mark the movie as Unadd, to REMOVE the movie from ADD-Bucket-List. 
   -  Favorite - Mark the movie as Favourite, to PUSH the movie into Favourite-Bucket-List. 
   -  Unfavorite - Mark the movie as Unfavourite, to REMOVE the movie from Favourite-Bucket-List.
-  A view to show all top rated movies list. Here give an add & Favourite buttons where you can add a new movie into Busket-List.
-  A view to display Bucket-List movies. when user click on the Tabs(add, favourite) button 
   -  Show all the add movies which you added into your list. when you Tab the Add Button
   -  Show all the favourite movies which you added into your list. when you Tab the Favourite Button
   -  A user can toggle between the Add & Unadd (above mentioned) status of a Movie. 
   -  A user can toggle between the Favourite & Unfavourite (above mentioned) status of a Movie.
-  User can search a movie and add it into the Bucket-List.
-  Pagination is also there so user can go to next and previous page easily.

## Built With

In the Backend side, we are fetching the data from API
Here is the Technology Stack of this Application. which I have used to Built this Application.

-  ReactJS
-  Redux ToolKit
-  HTML
-  CSS

<!-- GETTING STARTED -->

## Getting Started

- Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
- Install all the dependencies packages with NPM
   ```sh
   npm install
   ```

## Screen-Shots 

These are the Screenshots of this application.


![Screen Shot 2022-11-09 at 8 04 55 PM](https://user-images.githubusercontent.com/25861228/200859157-6c45239e-448e-45ce-8302-c05c8095cbe2.png)
   
![Screen Shot 2022-11-09 at 8 05 41 PM](https://user-images.githubusercontent.com/25861228/200859169-15d06ff5-4ae8-43e3-a2e5-76c82cc8dd92.png)

![Screen Shot 2022-11-09 at 8 06 27 PM](https://user-images.githubusercontent.com/25861228/200859187-bfaf1aba-98a0-4d21-a54d-e683a7a0f067.png)

![Screen Shot 2022-11-09 at 8 06 37 PM](https://user-images.githubusercontent.com/25861228/200859249-eebecdf5-2bad-4f4d-95e2-c42eb6150571.png)

![Screen Shot 2022-11-09 at 8 06 49 PM](https://user-images.githubusercontent.com/25861228/200859271-1045c626-c054-4d0f-bde7-733a1d703511.png)

![Screen Shot 2022-11-09 at 8 09 36 PM](https://user-images.githubusercontent.com/25861228/200859777-50a9ed96-61df-4ac2-b2f1-13d20181511f.png)


## Directory Structure and flow of The Code

I am showing the directory structure of src folder. because all the code part in the src folder.

       src
        |------ api
        |       |--- apiCalls.js
        |       |     
        |       └--- apiURLs.js             
        |             
        |------ components
        |       |--- App.js
        |       |     
        |       └--- MovieCard.js  
        |       |     
        |       └--- Navbar.js
        |            
        |------ redux
        |       |--- movieSlice.js
        |       |     
        |       └--- searchSlice.js  
        |       |     
        |       └--- store.js
        |         
        |------ data.js
        |------ index.css
        |------ index
      
      

<!-- CONTRIBUTING -->

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request
