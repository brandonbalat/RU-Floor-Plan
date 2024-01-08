# RU Floor Plan
1. Bootstrapped by create react app
2. Node v.20.10.0

# How to get the project running:
1. Clone this repository
2. In the project directory run 'npm install
3. Use command npm start to launch the app

# Critical Files  
1. /src/app/utils/RuDataFormatter.js This file, contains the sorting algorithm logic
2. /src/app/components/GridQuadrant/index.js. This file, contains the major react component responsible for creating each grid 1-4
3. /src/app/components/CombinedGrid/index.js. This file, contains the parent component for GridQuadrant. State managed here

# All other relevant files
1. Everything in the components folder. Most components have a index.js file and a LocalStyles.css file
2. Everything in the utils Folder. These are helper functions
3. Everything in the pages folder. This is where the parent component is called.

# Testing
To accomodate your different test cases I have already created 4 test files, located in the Tests folder. You can paste any of your test cases there.
1. Once you have your test cases pasted in. All you will need to do is head to line 26 of RuDataFormatter.js
2. On that line you'll notice a variable named 'test_num' simply change that number to the corresponding test file number and this will change the data on the grid.


# General Thought Process
More details can be found in the code comments, however in general here is how I went about this project.
1. Algorith: I chose a process where we essentially alternate each product name to avoid adjacent product placement. Each time we place a product we subtract its repeat value, until 0. Once all repeat values are 0 the process is complete. This ensures no adjacent values. 
2. Construct the table: This table structure is quite different than a typical table. To accomodate the layout, I decided to split it into multple pieces.
3. I decided to construct all headers seperately from the grid to avoid worrying about how to accomplish the dual column design with a standard table
4. The grid consists of essentially 4 quadrants so I made a quadrant component that allows us to instantiate it 4 times for 4 quadrants. Quad component is customizable in regards to which side of the grid its on based on props passed in.
5. I made a parent component to call all of these grid piece components. This in my opinion makes the application structure cleaner, but also allows for the yellow highlighting on unmask cells.

# Final thoughts
Thank you for the oppurtunity as well as taking the time to read through my work. I enjoyed the challenge provided by this project and hope you enjoy the finished product I constructed. If you have any feedback or question, please feel free to contact me. In addition, I've provided my linkedin page for reference and contact info https://www.linkedin.com/in/brandonbalat/ 




